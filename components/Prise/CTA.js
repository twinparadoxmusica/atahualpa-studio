'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

const PriseCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="prise-cta">
      <Container variant="default" className="prise-cta__inner">
        <div>
          <span className="prise-cta__eyebrow">{t('prise.cta.eyebrow')}</span>
          <h2 className="prise-cta__title">{t('prise.cta.title')}</h2>
          <p className="prise-cta__lede">{t('prise.cta.lede')}</p>
        </div>

        <div className="prise-cta__actions">
          <a
            className="prise-cta__btn prise-cta__btn--primary"
            href="https://wa.me/41786917441"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('prise.cta.whatsapp')}
          </a>
          <a
            className="prise-cta__btn prise-cta__btn--secondary"
            href="mailto:atahualpa.music.studio@gmail.com"
          >
            {t('prise.cta.email')}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PriseCTA;
