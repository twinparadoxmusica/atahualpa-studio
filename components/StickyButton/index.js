'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const WhatsAppStickyButton = () => {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/41772792514"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky"
      aria-label={t('sticky.whatsapp')}
    >
      <span className="whatsapp-sticky__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <path
            fill="currentColor"
            d="M16 3a13 13 0 0 0-11.13 19.72L3.2 28.8l6.22-1.63A13 13 0 1 0 16 3Zm0 23.62a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.69.97.99-3.59-.25-.4A10.61 10.61 0 1 1 16 26.62Zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.77-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </span>
      <span className="whatsapp-sticky__label">{t('sticky.whatsapp')}</span>
    </a>
  );
};

export default WhatsAppStickyButton;
