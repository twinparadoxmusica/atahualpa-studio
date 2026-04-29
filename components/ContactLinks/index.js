'use client';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <h3 className="margin-bottom-xs">{t('press.title')}</h3>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          data-name="presskit-english"
          href="https://www.atahualpamusicstudio.com/assets/TwinParadoxPressKit-EN.pdf"
        >
          {t('press.en')}
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          data-name="presskit-french"
          href="https://www.atahualpamusicstudio.com/assets/TwinParadoxPressKit-FR.pdf"
        >
          {t('press.fr')}
        </a>
      </p>
    </section>
  );
};

export default Contact;
