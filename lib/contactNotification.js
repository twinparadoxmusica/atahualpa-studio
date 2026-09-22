const DEFAULT_NOTIFICATION_EMAIL = 'contact@atahualpamusicstudio.com';
const SITE_ORIGIN = 'https://atahualpamusicstudio.com';
const CONTACT_PAGE = `${SITE_ORIGIN}/contact`;

const TOPIC_LABELS = {
  music: 'Cours de musique',
  recording: 'Enregistrement / streaming',
  acoustics: 'Acoustique & insonorisation',
  other: 'Autre',
};

export const sendContactNotification = async ({ submissionId, contact }) => {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(DEFAULT_NOTIFICATION_EMAIL)}`;
  const body = new FormData();
  const topic = TOPIC_LABELS[contact.topic] || 'Autre';

  body.set('_subject', `[${topic}] Nouvelle demande — ${contact.name}`);
  body.set('_template', 'table');
  body.set('_captcha', 'false');
  body.set('_url', CONTACT_PAGE);
  body.set('name', contact.name);
  body.set('email', contact.email);
  body.set('objet', topic);
  body.set('message', contact.message);
  body.set('locale', contact.locale);
  body.set('submission_id', submissionId);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body,
    keepalive: true,
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) throw new Error(`Notification service returned ${response.status}`);
};
