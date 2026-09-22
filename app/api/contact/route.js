import { after } from 'next/server';
import {
  ContactValidationError,
  createLeadRow,
  isSameOriginRequest,
  validateContactPayload,
} from '../../../lib/contact';
import { sendContactNotification } from '../../../lib/contactNotification';
import { appendLead } from '../../../lib/googleSheets';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const json = (body, status = 200) =>
  Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

export const POST = async (request) => {
  if (!isSameOriginRequest(request)) {
    return json({ ok: false, error: 'forbidden' }, 403);
  }

  const contentType = request.headers.get('content-type') || '';
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (
    !contentType.startsWith('application/json') ||
    !Number.isFinite(contentLength) ||
    contentLength > 12000
  ) {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  let payload;
  try {
    const body = await request.text();
    if (body.length > 12000) {
      return json({ ok: false, error: 'invalid_request' }, 400);
    }
    payload = JSON.parse(body);
  } catch {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  try {
    const contact = validateContactPayload(payload);

    // Quietly accept honeypot submissions without storing or forwarding them.
    if (contact.isSpam) return json({ ok: true });

    const submissionId = crypto.randomUUID();
    const submittedAt = new Date();
    const row = createLeadRow({ submissionId, submittedAt, contact });

    // Sheets is the system of record: do not report success until this succeeds.
    await appendLead(row);

    // Email is best-effort and runs only after the lead has been persisted.
    after(async () => {
      try {
        await sendContactNotification({ submissionId, submittedAt, contact });
      } catch (error) {
        console.error('Contact email notification failed', {
          submissionId,
          error: error instanceof Error ? error.message : 'unknown_error',
        });
      }
    });

    return json({ ok: true, submissionId }, 201);
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return json({ ok: false, error: error.code }, 400);
    }

    console.error('Contact form could not be stored in Google Sheets', {
      error: error instanceof Error ? error.message : 'unknown_error',
    });
    return json({ ok: false, error: 'storage_unavailable' }, 503);
  }
};
