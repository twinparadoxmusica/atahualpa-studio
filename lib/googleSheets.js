import { getVercelOidcToken } from '@vercel/oidc';
import { ExternalAccountClient } from 'google-auth-library';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const FIRST_DATA_ROW_INDEX = 1;
const LEAD_COLUMN_COUNT = 19;
const SHEET_COLUMN_COUNT = 20;
const GOOGLE_SHEETS_EPOCH_DAYS = 25569;
const MILLISECONDS_PER_DAY = 86400000;
const FORMULA_COLUMN_INDEXES = new Set([13]);

const requiredEnv = (name) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const requiredPositiveIntegerEnv = (name) => {
  const value = Number(requiredEnv(name));
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return value;
};

export const toGoogleStsAudience = (oidcAudience) => {
  if (!oidcAudience.startsWith('https://iam.googleapis.com/projects/')) {
    throw new Error('GCP_AUDIENCE must be a Google IAM provider URL');
  }

  return oidcAudience.replace(/^https:/, '');
};

const createAuthClient = () => {
  const oidcAudience = requiredEnv('GCP_AUDIENCE');
  const audience = toGoogleStsAudience(oidcAudience);
  const serviceAccountEmail = requiredEnv('GCP_SERVICE_ACCOUNT_EMAIL');

  if (!serviceAccountEmail.endsWith('.iam.gserviceaccount.com')) {
    throw new Error('GCP_SERVICE_ACCOUNT_EMAIL is invalid');
  }

  const client = ExternalAccountClient.fromJSON({
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: 'https://sts.googleapis.com/v1/token',
    service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${serviceAccountEmail}:generateAccessToken`,
    service_account_impersonation: {
      token_lifetime_seconds: 600,
    },
    scopes: [SHEETS_SCOPE],
    subject_token_supplier: {
      // Vercel's OIDC token uses the HTTPS provider URL, while Google's STS
      // request requires the same provider as a protocol-relative resource.
      getSubjectToken: () => getVercelOidcToken({ audience: oidcAudience }),
    },
  });

  if (!client) throw new Error('Could not initialize Google authentication');
  return client;
};

const timestampToSerial = (value) => {
  const milliseconds = Date.parse(`${value.replace(' ', 'T')}Z`);
  if (!Number.isFinite(milliseconds)) {
    throw new Error('Lead timestamp is invalid');
  }
  return milliseconds / MILLISECONDS_PER_DAY + GOOGLE_SHEETS_EPOCH_DAYS;
};

export const toGoogleCellData = (value, columnIndex) => {
  if (value === '' || value == null) return {};

  if (columnIndex === 1 && typeof value === 'string') {
    return { userEnteredValue: { numberValue: timestampToSerial(value) } };
  }

  if (
    FORMULA_COLUMN_INDEXES.has(columnIndex) &&
    typeof value === 'string' &&
    value.startsWith('=')
  ) {
    return { userEnteredValue: { formulaValue: value } };
  }

  if (typeof value === 'number') {
    return { userEnteredValue: { numberValue: value } };
  }

  if (typeof value === 'boolean') {
    return { userEnteredValue: { boolValue: value } };
  }

  const text = String(value).replace(/^'(?=[=+\-@])/, '');
  return { userEnteredValue: { stringValue: text } };
};

export const buildInsertLeadRequests = (row, sheetId) => {
  if (!Array.isArray(row) || row.length !== LEAD_COLUMN_COUNT) {
    throw new Error(`Lead row must contain ${LEAD_COLUMN_COUNT} columns`);
  }

  const newRowRange = {
    sheetId,
    startRowIndex: FIRST_DATA_ROW_INDEX,
    endRowIndex: FIRST_DATA_ROW_INDEX + 1,
    startColumnIndex: 0,
    endColumnIndex: SHEET_COLUMN_COUNT,
  };
  const exemplarRowRange = {
    ...newRowRange,
    startRowIndex: FIRST_DATA_ROW_INDEX + 1,
    endRowIndex: FIRST_DATA_ROW_INDEX + 2,
  };

  return [
    {
      insertDimension: {
        range: {
          sheetId,
          dimension: 'ROWS',
          startIndex: FIRST_DATA_ROW_INDEX,
          endIndex: FIRST_DATA_ROW_INDEX + 1,
        },
        inheritFromBefore: false,
      },
    },
    {
      copyPaste: {
        source: exemplarRowRange,
        destination: newRowRange,
        pasteType: 'PASTE_FORMAT',
        pasteOrientation: 'NORMAL',
      },
    },
    {
      copyPaste: {
        source: exemplarRowRange,
        destination: newRowRange,
        pasteType: 'PASTE_DATA_VALIDATION',
        pasteOrientation: 'NORMAL',
      },
    },
    {
      updateCells: {
        range: {
          sheetId,
          startRowIndex: FIRST_DATA_ROW_INDEX,
          endRowIndex: FIRST_DATA_ROW_INDEX + 1,
          startColumnIndex: 0,
          endColumnIndex: LEAD_COLUMN_COUNT,
        },
        rows: [
          {
            values: row.map(toGoogleCellData),
          },
        ],
        fields: 'userEnteredValue',
      },
    },
  ];
};

export const insertLeadAtTop = async (row) => {
  const spreadsheetId = requiredEnv('GOOGLE_SHEETS_SPREADSHEET_ID');
  const sheetId = requiredPositiveIntegerEnv('GOOGLE_SHEETS_LEADS_SHEET_ID');
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}:batchUpdate`;
  const authClient = createAuthClient();
  const requests = buildInsertLeadRequests(row, sheetId);

  const response = await authClient.request({
    url,
    method: 'POST',
    data: {
      requests,
      includeSpreadsheetInResponse: false,
    },
  });

  if (
    response.data?.spreadsheetId !== spreadsheetId ||
    response.data?.replies?.length !== requests.length
  ) {
    throw new Error('Google Sheets did not confirm the lead insertion');
  }

  return "'Leads'!A2:S2";
};
