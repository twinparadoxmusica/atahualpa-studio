'use client';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

const WHATSAPP_HREF = 'https://wa.me/41786917441';

const WhatsappIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M19.11 4.91A10.05 10.05 0 0 0 12.05 2C6.55 2 2.08 6.47 2.08 11.97c0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36a9.93 9.93 0 0 0 4.84 1.24h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.91-7zM12.05 20.2h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.23 8.23 0 0 1-1.27-4.39c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.24 8.24 0 0 1 2.43 5.86c0 4.57-3.72 8.23-8.32 8.23zm4.55-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.13.16 1.74 2.65 4.21 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.31z"
    />
  </svg>
);

const PriseHero = () => {
  const { t } = useLanguage();
  const ctaRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const node = ctaRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating button only when the in-hero CTA has scrolled out of view.
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ctaLabel = t('prise.hero.ctaWhatsapp');

  return (
    <>
      <section className="prise-hero" aria-labelledby="prise-hero-title">
        <div className="prise-hero__overlay" aria-hidden="true" />
        <Container variant="default" className="prise-hero__inner">
          <span className="prise-hero__eyebrow">{t('prise.hero.eyebrow')}</span>
          <h1 id="prise-hero-title" className="prise-hero__title">
            {t('prise.hero.title')}
          </h1>
          <p className="prise-hero__lede">{t('prise.hero.lede')}</p>

          <div className="prise-hero__cta" ref={ctaRef}>
            <a
              className="prise-hero__btn prise-hero__btn--primary"
              href="#projets"
            >
              {t('prise.hero.ctaProjects')}
            </a>
            <a
              className="prise-hero__btn prise-hero__btn--whatsapp"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ctaLabel}
            >
              <WhatsappIcon className="prise-hero__btn-icon" />
              {ctaLabel}
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

      <a
        className={`prise-hero__sticky${
          showSticky ? ' prise-hero__sticky--visible' : ''
        }`}
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ctaLabel}
        aria-hidden={!showSticky}
        tabIndex={showSticky ? 0 : -1}
      >
        <WhatsappIcon className="prise-hero__btn-icon" />
        <span>{ctaLabel}</span>
      </a>
    </>
  );
};

export default PriseHero;
