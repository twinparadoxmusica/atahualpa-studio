'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const messagesByLocale = {
  fr: {
    discovery:
      'Bonjour, je souhaite recevoir des informations pour la formule Découverte du stage d’été multi-instrumental. Mon enfant a _ ans. Merci !',
    progression:
      'Bonjour, je souhaite recevoir des informations pour la formule Progression du stage d’été multi-instrumental. Mon enfant a _ ans. Merci !',
    immersion:
      'Bonjour, je souhaite recevoir des informations pour la formule Immersion du stage d’été multi-instrumental. Mon enfant a _ ans. Merci !',
  },
  en: {
    discovery:
      'Hello, I would like to receive information about the Discovery plan of the multi-instrument summer camp. My child is _ years old. Thank you!',
    progression:
      'Hello, I would like to receive information about the Progression plan of the multi-instrument summer camp. My child is _ years old. Thank you!',
    immersion:
      'Hello, I would like to receive information about the Immersion plan of the multi-instrument summer camp. My child is _ years old. Thank you!',
  },
  es: {
    discovery:
      'Hola, me gustaría recibir información sobre el plan Descubrimiento del campamento de verano multi-instrumental. Mi hijo/a tiene _ años. ¡Gracias!',
    progression:
      'Hola, me gustaría recibir información sobre el plan Progresión del campamento de verano multi-instrumental. Mi hijo/a tiene _ años. ¡Gracias!',
    immersion:
      'Hola, me gustaría recibir información sobre el plan Inmersión del campamento de verano multi-instrumental. Mi hijo/a tiene _ años. ¡Gracias!',
  },
  it: {
    discovery:
      'Buongiorno, vorrei ricevere informazioni sul piano Scoperta del campo estivo multi-strumentale. Mio figlio/a ha _ anni. Grazie!',
    progression:
      'Buongiorno, vorrei ricevere informazioni sul piano Progressione del campo estivo multi-strumentale. Mio figlio/a ha _ anni. Grazie!',
    immersion:
      'Buongiorno, vorrei ricevere informazioni sul piano Immersione del campo estivo multi-strumentale. Mio figlio/a ha _ anni. Grazie!',
  },
};

const buildLink = (msg) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

const CampPricing = () => {
  const { locale, t } = useLanguage();
  const messages = messagesByLocale[locale] || messagesByLocale.fr;

  const offers = [
    {
      title: t('camp.offer.discovery.title'),
      price: t('camp.offer.discovery.price'),
      subPrice: t('camp.offer.discovery.subPrice'),
      link: buildLink(messages.discovery),
      textLink: t('camp.offer.discovery.cta'),
      description: t('camp.offer.discovery.desc'),
    },
    {
      title: t('camp.offer.progression.title'),
      price: t('camp.offer.progression.price'),
      subPrice: t('camp.offer.progression.subPrice'),
      link: buildLink(messages.progression),
      textLink: t('camp.offer.progression.cta'),
      description: t('camp.offer.progression.desc'),
      highlight: true,
    },
    {
      title: t('camp.offer.immersion.title'),
      price: t('camp.offer.immersion.price'),
      subPrice: t('camp.offer.immersion.subPrice'),
      link: buildLink(messages.immersion),
      textLink: t('camp.offer.immersion.cta'),
      description: t('camp.offer.immersion.desc'),
    },
  ];

  return (
    <section className="offers-section">
      <div className="section">
        <header className="offers-header">
          <h2>{t('camp.pricing.title')}</h2>
          <p>{t('camp.pricing.lede')}</p>
        </header>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
};

export default CampPricing;
