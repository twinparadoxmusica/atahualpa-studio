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
    >
      {t('sticky.whatsapp')}
    </a>
  );
};

export default WhatsAppStickyButton;
