'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { WHATSAPP_NUMBER } from '../../constants/translations';
import './styles.css';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7A11.9 11.9 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 22a9.9 9.9 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 22 12c0 5.5-4.5 10-10 10Zm5.5-7.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.2-1.2-.5-2.3-1.4a8.5 8.5 0 0 1-1.6-1.9c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3a2.2 2.2 0 0 0-.7 1.6c0 .9.7 1.8.7 1.9.1.2 1.3 2 3.2 2.8 1.9.7 1.9.5 2.3.5.3 0 1.1-.4 1.3-.9.2-.5.2-.9.1-.9-.1-.2-.3-.3-.5-.4Z" />
  </svg>
);

const WhatsAppStickyButton = () => {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky"
      aria-label={t('sticky.whatsapp')}
    >
      <WhatsAppIcon />
      <span>{t('sticky.whatsapp')}</span>
    </a>
  );
};

export default WhatsAppStickyButton;
