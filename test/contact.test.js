import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ContactValidationError,
  createLeadRow,
  validateContactPayload,
} from '../lib/contact.js';
import { sendContactNotification } from '../lib/contactNotification.js';
import { toGoogleStsAudience } from '../lib/googleSheets.js';

test('validates and normalizes a contact submission', () => {
  assert.deepEqual(
    validateContactPayload({
      name: '  Ada Lovelace ',
      email: ' ADA@EXAMPLE.COM ',
      message: 'Bonjour\r\nStudio',
      locale: 'en',
      website: '',
    }),
    {
      isSpam: false,
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'Bonjour\nStudio',
      locale: 'en',
    }
  );
});

test('quietly identifies honeypot submissions', () => {
  assert.deepEqual(validateContactPayload({ website: 'spam.example' }), {
    isSpam: true,
  });
});

test('rejects malformed email addresses', () => {
  assert.throws(
    () =>
      validateContactPayload({
        name: 'Ada',
        email: 'not-an-email',
        message: 'Bonjour',
      }),
    (error) =>
      error instanceof ContactValidationError && error.code === 'invalid_email'
  );
});

test('maps a contact to the Leads schema and neutralizes formulas', () => {
  const row = createLeadRow({
    submissionId: 'lead-123',
    submittedAt: new Date('2026-09-21T18:30:45.000Z'),
    contact: {
      name: '=IMPORTXML("https://example.com")',
      email: 'ada@example.com',
      message: '+cmd',
      locale: 'fr',
    },
  });

  assert.equal(row.length, 19);
  assert.equal(row[0], 'lead-123');
  assert.equal(row[1], '2026-09-21 18:30:45');
  assert.equal(row[2], '\'=IMPORTXML("https://example.com")');
  assert.equal(row[6], 'ada@example.com');
  assert.equal(row[7], 'Site web – formulaire de contact (fr)');
  assert.equal(row[10], 'Nouveau lead');
  assert.match(row[13], /^=IF\(/);
  assert.equal(row[16], 0);
  assert.equal(row[17], "'+cmd");
});

test('converts the Vercel OIDC audience to the Google STS resource name', () => {
  assert.equal(
    toGoogleStsAudience(
      'https://iam.googleapis.com/projects/123/locations/global/workloadIdentityPools/vercel/providers/vercel'
    ),
    '//iam.googleapis.com/projects/123/locations/global/workloadIdentityPools/vercel/providers/vercel'
  );
});

test('identifies the public site when sending the secondary notification', async () => {
  const originalFetch = globalThis.fetch;
  let request;

  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true };
  };

  try {
    await sendContactNotification({
      submissionId: 'submission-123',
      contact: {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test message',
        locale: 'fr',
      },
    });
  } finally {
    globalThis.fetch = originalFetch;
  }

  assert.equal(request.options.keepalive, true);
  assert.equal(
    request.options.body.get('_url'),
    'https://atahualpamusicstudio.com/contact'
  );
  assert.equal(request.options.body.get('submission_id'), 'submission-123');
});
