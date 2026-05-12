'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import { buildWhatsAppUrl } from '../../constants/translations';
import './styles.css';

/**
 * "Régler ma formule" — block aimed at existing students.
 * Lives on the Lecons page (anchor #regler) and is reachable from the
 * header dropdown and the footer.
 *
 * Primary CTA leads to the payment flow (WhatsApp for now, until
 * Stripe Payment Links are wired in). Secondary CTA goes to WhatsApp
 * with a pre-filled question so the studio can send the right details.
 */
const ReglerFormule = () => {
  const { locale, t } = useLanguage();
  const whatsAppHref = buildWhatsAppUrl(locale, 'regler');

  return (
    <section
      id="regler"
      className="regler-section"
      aria-labelledby="regler-title"
    >
      <Container variant="narrow">
        <div className="regler-card">
          <SectionHeader
            eyebrow={t('regler.eyebrow')}
            title={t('regler.title')}
            lede={t('regler.lede')}
            align="left"
          />
          <div className="regler-actions">
            <a
              className="regler-cta regler-cta--primary"
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('regler.primaryCta')}
              <span aria-hidden="true">→</span>
            </a>
            <a
              className="regler-cta regler-cta--secondary"
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('regler.secondaryCta')}
            </a>
          </div>
          <p className="regler-note">{t('regler.note')}</p>
        </div>
      </Container>
    </section>
  );
};

export default ReglerFormule;
