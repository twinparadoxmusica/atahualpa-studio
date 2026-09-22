const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const SUPPORTED_LOCALES = new Set(['fr', 'en', 'es', 'it']);
const TOPICS = {
  music: 'Cours de musique',
  recording: 'Enregistrement / streaming',
  acoustics: 'Acoustique & insonorisation',
  other: 'Autre',
};

export class ContactValidationError extends Error {
  constructor(code) { super(code); this.name = 'ContactValidationError'; this.code = code; }
}

const cleanText = (value) => typeof value === 'string' ? value.replace(/\r\n?/g, '\n').trim() : '';

export const validateContactPayload = (payload) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new ContactValidationError('invalid_payload');
  if (cleanText(payload.website)) return { isSpam: true };

  const name = cleanText(payload.name);
  const email = cleanText(payload.email).toLowerCase();
  const message = cleanText(payload.message);
  const topic = cleanText(payload.topic);
  const locale = SUPPORTED_LOCALES.has(payload.locale) ? payload.locale : 'fr';

  if (!name || name.length > MAX_NAME_LENGTH) throw new ContactValidationError('invalid_name');
  if (!email || email.length > MAX_EMAIL_LENGTH || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ContactValidationError('invalid_email');
  if (!TOPICS[topic]) throw new ContactValidationError('invalid_topic');
  if (!message || message.length > MAX_MESSAGE_LENGTH) throw new ContactValidationError('invalid_message');

  return { isSpam: false, name, email, message, topic, topicLabel: TOPICS[topic], locale };
};

const asSheetText = (value) => (/^[=+\-@]/.test(value) ? `'${value}` : value);
const formatUtcTimestamp = (date) => date.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '');

export const createLeadRow = ({ submissionId, submittedAt, contact }) => {
  const timestamp = formatUtcTimestamp(submittedAt);
  return [
    submissionId,
    timestamp,
    asSheetText(contact.name),
    '', '', '',
    asSheetText(contact.email),
    `Site web – formulaire de contact (${contact.locale})`,
    asSheetText(contact.topicLabel),
    '',
    'Nouveau lead',
    '', '',
    '=IF(INDIRECT("B"&ROW())="","",TODAY()-INT(INDIRECT("B"&ROW())))',
    '', '', 0,
    asSheetText(contact.message),
    '',
  ];
};

export const isSameOriginRequest = (request) => {
  const origin = request.headers.get('origin');
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = (forwardedHost || request.headers.get('host') || '').split(',')[0].trim();
  if (!origin || !host) return false;
  try { return new URL(origin).host === host; } catch { return false; }
};
