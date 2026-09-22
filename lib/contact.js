const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const SUPPORTED_LOCALES = new Set(['fr', 'en', 'es', 'it']);

export class ContactValidationError extends Error {
  constructor(code) {
    super(code);
    this.name = 'ContactValidationError';
    this.code = code;
  }
}

const cleanText = (value) =>
  typeof value === 'string' ? value.replace(/\r\n?/g, '\n').trim() : '';

export const validateContactPayload = (payload) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new ContactValidationError('invalid_payload');
  }

  if (cleanText(payload.website)) {
    return { isSpam: true };
  }

  const name = cleanText(payload.name);
  const email = cleanText(payload.email).toLowerCase();
  const message = cleanText(payload.message);
  const locale = SUPPORTED_LOCALES.has(payload.locale) ? payload.locale : 'fr';

  if (!name || name.length > MAX_NAME_LENGTH) {
    throw new ContactValidationError('invalid_name');
  }

  if (
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    throw new ContactValidationError('invalid_email');
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    throw new ContactValidationError('invalid_message');
  }

  return { isSpam: false, name, email, message, locale };
};

// USER_ENTERED is required for the operational formula below. Prefixing these
// characters prevents visitor-controlled values from becoming spreadsheet formulas.
const asSheetText = (value) => (/^[=+\-@]/.test(value) ? `'${value}` : value);

const formatUtcTimestamp = (date) =>
  date
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '');

export const createLeadRow = ({ submissionId, submittedAt, contact }) => {
  const timestamp = formatUtcTimestamp(submittedAt);

  return [
    submissionId,
    timestamp,
    asSheetText(contact.name),
    '',
    '',
    '',
    asSheetText(contact.email),
    `Site web – formulaire de contact (${contact.locale})`,
    'Contact général',
    '',
    'Nouveau lead',
    '',
    '',
    '=IF(INDIRECT("B"&ROW())="","",TODAY()-INT(INDIRECT("B"&ROW())))',
    '',
    '',
    0,
    asSheetText(contact.message),
    '',
  ];
};

export const isSameOriginRequest = (request) => {
  const origin = request.headers.get('origin');
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = (forwardedHost || request.headers.get('host') || '')
    .split(',')[0]
    .trim();

  if (!origin || !host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};
