import { getVercelOidcToken } from '@vercel/oidc';
import { ExternalAccountClient } from 'google-auth-library';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const SHEET_RANGE = "'Leads'!A:S";

const requiredEnv = (name) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const createAuthClient = () => {
  const audience = requiredEnv('GCP_AUDIENCE');
  const serviceAccountEmail = requiredEnv('GCP_SERVICE_ACCOUNT_EMAIL');

  if (!audience.startsWith('https://iam.googleapis.com/projects/')) {
    throw new Error('GCP_AUDIENCE must be a Google IAM provider URL');
  }

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
      getSubjectToken: () => getVercelOidcToken({ audience }),
    },
  });

  if (!client) throw new Error('Could not initialize Google authentication');
  return client;
};

export const appendLead = async (row) => {
  const spreadsheetId = requiredEnv('GOOGLE_SHEETS_SPREADSHEET_ID');
  const range = encodeURIComponent(SHEET_RANGE);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}:append`;
  const authClient = createAuthClient();

  const response = await authClient.request({
    url,
    method: 'POST',
    params: {
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      includeValuesInResponse: false,
    },
    data: {
      majorDimension: 'ROWS',
      values: [row],
    },
  });

  if (response.data?.updates?.updatedRows !== 1) {
    throw new Error('Google Sheets did not confirm a single appended row');
  }

  return response.data.updates.updatedRange;
};
