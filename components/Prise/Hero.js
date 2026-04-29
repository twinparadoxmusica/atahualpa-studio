'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

const PriseHero = () => {
  const { t } = useLanguage();

  return (
    <section className="prise-hero" aria-labelledby="prise-hero-title">
      <div className="prise-hero__overlay" aria-hidden="true" />
      <Container variant="default" className="prise-hero__inner">
        <span className="prise-hero__eyebrow">{t('prise.hero.eyebrow')}</span>
        <h1 id="prise-hero-title" className="prise-hero__title">
          {t('prise.hero.title')}
        </h1>
        <p className="prise-hero__lede">{t('prise.hero.lede')}</p>

        <div className="prise-hero__cta">
          <a className="prise-hero__btn prise-hero__btn--primary" href="#projets">
            {t('prise.hero.ctaProjects')}
          </a>
          <a
            className="prise-hero__btn prise-hero__btn--ghost"
            href="https://wa.me/41786917441"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('prise.hero.ctaWhatsapp')}
          </a>
        </div>

        <ul className="prise-hero__chips" aria-label={t('common.specialties')}>
          <li>{t('prise.hero.chip.studio')}</li>
          <li>{t('prise.hero.chip.multicam')}</li>
          <li>{t('prise.hero.chip.live')}</li>
          <li>{t('prise.hero.chip.mixing')}</li>
        </ul>
      </Container>
    </section>
  );
};

export default PriseHero;
