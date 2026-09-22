const DEFAULT_NOTIFICATION_EMAIL = 'contact@atahualpamusicstudio.com';
const SITE_ORIGIN = 'https://atahualpamusicstudio.com';
const CONTACT_PAGE = `${SITE_ORIGIN}/contact`;

export const sendContactNotification = async ({
  submissionId,
  submittedAt,
  contact,
}) => {
  const recipient =
    process.env.CONTACT_NOTIFICATION_EMAIL?.trim() ||
    DEFAULT_NOTIFICATION_EMAIL;
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: SITE_ORIGIN,
      Referer: CONTACT_PAGE,
    },
    body: JSON.stringify({
      _subject: 'Nuevo mensaje — atahualpa.studio',
      _template: 'table',
      _captcha: 'false',
      _url: CONTACT_PAGE,
      name: contact.name,
      email: contact.email,
      message: contact.message,
      locale: contact.locale,
      submission_id: submissionId,
      received_at_utc: submittedAt.toISOString(),
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Notification service returned ${response.status}`);
  }
};
