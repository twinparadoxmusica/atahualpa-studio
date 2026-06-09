'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const messageByLocale = {
  fr: 'Bonjour, je suis déjà inscrit(e) et je souhaite régler ma formule (mensuelle, annuelle ou paiement automatique). Merci !',
  en: 'Hello, I am already enrolled and would like to settle my plan (monthly, annual or automatic payment). Thank you!',
  es: 'Hola, ya estoy inscrito/a y me gustaría pagar mi plan (mensual, anual o pago automático). ¡Gracias!',
  it: 'Buongiorno, sono già iscritto/a e vorrei pagare il mio piano (mensile, annuale o pagamento automatico). Grazie!',
};

export default function ReglerBlock() {
  const { locale, t } = useLanguage();
  const message = messageByLocale[locale] || messageByLocale.fr;
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <section className="regler-block" id="regler">
      <div className="section regler-block__inner">
        <div className="regler-block__content">
          <h2 className="regler-block__title">{t('lecons.regler.title')}</h2>
          <p className="regler-block__body">{t('lecons.regler.body')}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="regler-block__cta"
          >
            {t('lecons.regler.cta')}
            <span aria-hidden="true">→</span>
          </a>
          <p className="regler-block__note">{t('lecons.regler.note')}</p>
        </div>
      </div>
    </section>
  );
}
