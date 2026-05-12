'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { buildWhatsAppUrl } from '../../constants/translations';
import OfferBox from '../OfferBox';
import './pricing-group.css';

const descByLocale = {
  fr: {
    trial: 'Sur réservation. Pour découvrir l’atelier et voir quel groupe correspond le mieux à votre enfant.',
    monthly:
      'Paiement mensuel, sans engagement, résiliable d’un mois à l’autre.',
    annual:
      'Abonnement sur l’année scolaire avec paiement par débit automatique mensuel ou paiement annuel en une seule fois.',
  },
  en: {
    trial:
      'On request. To discover the workshop and see which group best fits your child.',
    monthly:
      'Monthly billing, no commitment, cancellable at the end of any month.',
    annual:
      'Subscription over the school year, with automatic monthly debit or a single annual payment.',
  },
  es: {
    trial:
      'Previa reserva. Para descubrir el taller y ver qué grupo se adapta mejor a tu hijo/a.',
    monthly:
      'Pago mensual, sin compromiso, rescindible al final de cada mes.',
    annual:
      'Suscripción durante el año escolar, con débito automático mensual o un único pago anual.',
  },
  it: {
    trial:
      'Su prenotazione. Per scoprire il laboratorio e vedere quale gruppo si adatta meglio a tuo figlio/a.',
    monthly:
      'Pagamento mensile, senza impegno, disdicibile alla fine di ogni mese.',
    annual:
      'Abbonamento sull’anno scolastico, con addebito automatico mensile o pagamento annuale in un’unica soluzione.',
  },
};

const OffersSection = () => {
  const { locale, t } = useLanguage();
  const dict = descByLocale[locale] || descByLocale.fr;
  const whatsAppHref = buildWhatsAppUrl(locale, 'trial');
  const reglerHref = '#regler';

  const offers = [
    {
      title: t('group.offer.trial.title'),
      price: t('group.offer.trial.price'),
      link: whatsAppHref,
      external: true,
      textLink: t('group.offer.trial.cta'),
      description: dict.trial,
      highlight: true,
    },
    {
      title: t('group.offer.monthly.title'),
      price: t('group.offer.monthly.price'),
      subPrice: t('group.offer.monthly.subPrice'),
      link: reglerHref,
      external: false,
      textLink: t('group.offer.monthly.cta'),
      description: dict.monthly,
    },
    {
      title: t('group.offer.annual.title'),
      price: t('group.offer.annual.price'),
      subPrice: t('group.offer.annual.subPrice'),
      link: reglerHref,
      external: false,
      textLink: t('group.offer.annual.cta'),
      description: dict.annual,
    },
  ];

  return (
    <section className="offers-section">
      <div className="section">
        <header className="offers-header">
          <h2>{t('group.pricing.title')}</h2>
          <p>{t('group.pricing.lede')}</p>
        </header>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
};

export default OffersSection;
