'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-group.css';

const itemsByLocale = {
  fr: {
    trial: (
      <ul>
        <li>
          📅 <b>1 séance</b> de groupe de <b>60 minutes</b>.
        </li>
        <li>
          🎟️ <b>Offre valable</b> une seule fois par élève.
        </li>
        <li>
          ✨ Idéal pour <b>tester un mois</b> sans compromis :
          <b> contrat résiliable</b> à chaque fin de mois.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 séance par semaine</b> (60 min, <b>4 par mois</b>)
        </li>
        <li>
          💳 <b>Paiement mensuel flexible</b> : 240 CHF / mois (4 cours inclus)
        </li>
        <li>
          ✨ Idéal pour <b>tester un mois</b> sans compromis :
          <b> contrat résiliable</b> à chaque fin de mois
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Engagement annuel</b> : de septembre à juin (10 mois)
        </li>
        <li>
          🕒 <b>1 séance par semaine</b> (60 min, soit <b>4 par mois</b>)
        </li>
        <li>
          💳 <b>Paiement mensuel automatique</b> : 225 CHF / mois
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Réserve ton <b>cours d’essai gratuit</b> pour découvrir{' '}
        <b>l’atelier </b>
        et voir quel <b>groupe</b> ton enfant pourrais joindre en fonction de
        ses
        <b> intérêts</b> et <b>disponibilités</b>.
      </>
    ),
    monthlyDesc: (
      <>
        Abonnement <b>mensuel</b> idéal pour une pratique régulière et un
        <b> suivi continu</b>.
      </>
    ),
    annualDesc: (
      <>
        Engagement sur l’année pour bénéficier du <b>meilleur tarif </b>
        et d’une <b>progression garantie</b>.
      </>
    ),
  },
  en: {
    trial: (
      <ul>
        <li>
          📅 <b>1 group session</b> of <b>60 minutes</b>.
        </li>
        <li>
          🎟️ <b>Offer valid</b> once per student.
        </li>
        <li>
          ✨ Perfect to <b>try a month</b> with no commitment:
          <b> contract cancellable</b> at the end of every month.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 session per week</b> (60 min, <b>4 per month</b>)
        </li>
        <li>
          💳 <b>Flexible monthly billing</b>: 240 CHF / month (4 lessons
          included)
        </li>
        <li>
          ✨ Perfect to <b>try a month</b> with no commitment:
          <b> contract cancellable</b> at the end of every month
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Annual commitment</b>: from September to June (10 months)
        </li>
        <li>
          🕒 <b>1 session per week</b> (60 min, i.e. <b>4 per month</b>)
        </li>
        <li>
          💳 <b>Automatic monthly billing</b>: 225 CHF / month
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Book your <b>free trial lesson</b> to discover <b>the workshop</b> and
        see which <b>group</b> your child could join based on their
        <b> interests</b> and <b>availability</b>.
      </>
    ),
    monthlyDesc: (
      <>
        <b>Monthly</b> plan, ideal for steady practice and{' '}
        <b>continuous follow-up</b>.
      </>
    ),
    annualDesc: (
      <>
        Year-long commitment for the <b>best rate</b> and{' '}
        <b>guaranteed progress</b>.
      </>
    ),
  },
  es: {
    trial: (
      <ul>
        <li>
          📅 <b>1 sesión</b> grupal de <b>60 minutos</b>.
        </li>
        <li>
          🎟️ <b>Oferta válida</b> una sola vez por alumno.
        </li>
        <li>
          ✨ Ideal para <b>probar un mes</b> sin compromiso:
          <b> contrato rescindible</b> al final de cada mes.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 sesión por semana</b> (60 min, <b>4 al mes</b>)
        </li>
        <li>
          💳 <b>Pago mensual flexible</b>: 240 CHF / mes (4 clases incluidas)
        </li>
        <li>
          ✨ Ideal para <b>probar un mes</b> sin compromiso:
          <b> contrato rescindible</b> al final de cada mes
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Compromiso anual</b>: de septiembre a junio (10 meses)
        </li>
        <li>
          🕒 <b>1 sesión por semana</b> (60 min, es decir <b>4 al mes</b>)
        </li>
        <li>
          💳 <b>Pago mensual automático</b>: 225 CHF / mes
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Reserva tu <b>clase de prueba gratuita</b> para descubrir{' '}
        <b>el taller</b> y ver a qué <b>grupo</b> podría unirse tu hijo según
        sus <b>intereses</b> y <b>disponibilidad</b>.
      </>
    ),
    monthlyDesc: (
      <>
        Suscripción <b>mensual</b>, ideal para una práctica regular y un{' '}
        <b>seguimiento continuo</b>.
      </>
    ),
    annualDesc: (
      <>
        Compromiso anual para disfrutar de la <b>mejor tarifa</b> y de un{' '}
        <b>progreso garantizado</b>.
      </>
    ),
  },
  it: {
    trial: (
      <ul>
        <li>
          📅 <b>1 sessione</b> di gruppo di <b>60 minuti</b>.
        </li>
        <li>
          🎟️ <b>Offerta valida</b> una sola volta per allievo.
        </li>
        <li>
          ✨ Ideale per <b>provare un mese</b> senza impegno:
          <b> contratto disdicibile</b> alla fine di ogni mese.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 sessione a settimana</b> (60 min, <b>4 al mese</b>)
        </li>
        <li>
          💳 <b>Pagamento mensile flessibile</b>: 240 CHF / mese (4 lezioni
          incluse)
        </li>
        <li>
          ✨ Ideale per <b>provare un mese</b> senza impegno:
          <b> contratto disdicibile</b> alla fine di ogni mese
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Impegno annuale</b>: da settembre a giugno (10 mesi)
        </li>
        <li>
          🕒 <b>1 sessione a settimana</b> (60 min, ovvero <b>4 al mese</b>)
        </li>
        <li>
          💳 <b>Addebito mensile automatico</b>: 225 CHF / mese
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Prenota la tua <b>lezione di prova gratuita</b> per scoprire{' '}
        <b>il laboratorio</b> e vedere a quale <b>gruppo</b> tuo figlio
        potrebbe unirsi in base ai suoi <b>interessi</b> e alla sua{' '}
        <b>disponibilità</b>.
      </>
    ),
    monthlyDesc: (
      <>
        Abbonamento <b>mensile</b>, ideale per una pratica regolare e un{' '}
        <b>seguito continuo</b>.
      </>
    ),
    annualDesc: (
      <>
        Impegno annuale per beneficiare della <b>tariffa migliore</b> e di una{' '}
        <b>progressione garantita</b>.
      </>
    ),
  },
};

const OffersSection = () => {
  const { locale, t } = useLanguage();
  const dict = itemsByLocale[locale] || itemsByLocale.fr;

  const offers = [
    {
      icon: '🎶✨',
      title: t('group.offer.trial.title'),
      price: t('group.offer.trial.price'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83194909/calendar/12696798',
      textLink: t('common.chooseOffer'),
      description: dict.trialDesc,
      items: dict.trial,
      highlight: true,
    },
    {
      icon: '👧👦',
      title: t('group.offer.monthly.title'),
      price: t('group.offer.monthly.price'),
      subPrice: t('group.offer.monthly.subPrice'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067503/calendar/12696798',
      textLink: t('common.chooseOffer'),
      description: dict.monthlyDesc,
      items: dict.monthly,
      highlight: false,
    },
    {
      icon: '🎸',
      title: t('group.offer.annual.title'),
      price: t('group.offer.annual.price'),
      subPrice: t('group.offer.annual.subPrice'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316538/calendar/12696798',
      textLink: t('common.chooseOffer'),
      description: dict.annualDesc,
      items: dict.annual,
      highlight: false,
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
