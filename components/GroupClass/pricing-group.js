'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-group.css';

const WHATSAPP_BASE = 'https://wa.me/41786917441';

const messagesByLocale = {
  fr: {
    trial:
      'Bonjour, je souhaite demander un cours d’essai gratuit pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
    monthly:
      'Bonjour, je souhaite mettre en place la formule mensuelle pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
    annual:
      'Bonjour, je souhaite mettre en place l’abonnement annuel pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
  },
  en: {
    trial:
      'Hello, I would like to request a free trial lesson for the multi-instrument workshop. My child is _ years old. We are available preferably on the following days: _. Thank you!',
    monthly:
      'Hello, I would like to set up the monthly plan for the multi-instrument workshop. My child is _ years old. We are available preferably on the following days: _. Thank you!',
    annual:
      'Hello, I would like to set up the annual plan for the multi-instrument workshop. My child is _ years old. We are available preferably on the following days: _. Thank you!',
  },
  es: {
    trial:
      'Hola, me gustaría solicitar una clase de prueba gratuita para el taller multi-instrumental. Mi hijo/a tiene _ años. Estamos disponibles preferentemente los siguientes días: _. ¡Gracias!',
    monthly:
      'Hola, me gustaría contratar el plan mensual para el taller multi-instrumental. Mi hijo/a tiene _ años. Estamos disponibles preferentemente los siguientes días: _. ¡Gracias!',
    annual:
      'Hola, me gustaría contratar el plan anual para el taller multi-instrumental. Mi hijo/a tiene _ años. Estamos disponibles preferentemente los siguientes días: _. ¡Gracias!',
  },
  it: {
    trial:
      'Buongiorno, vorrei richiedere una lezione di prova gratuita per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili preferibilmente i seguenti giorni: _. Grazie!',
    monthly:
      'Buongiorno, vorrei attivare il piano mensile per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili preferibilmente i seguenti giorni: _. Grazie!',
    annual:
      'Buongiorno, vorrei attivare il piano annuale per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili preferibilmente i seguenti giorni: _. Grazie!',
  },
};

const buildLink = (msg) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

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
          ✨ Idéal pour <b>découvrir l’atelier</b> avant de choisir une formule
          régulière.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 séance par semaine</b> (60 min, <b>4 par mois</b>)
        </li>
        <li>
          💳 <b>Paiement mensuel flexible</b> : 260 CHF / mois (4 cours inclus)
        </li>
        <li>
          ✨ Idéal pour <b>tester un mois</b> sans engagement :
          <b> contrat résiliable</b> à chaque fin de mois.
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
          💳 <b>Paiement mensuel automatique</b> ou <b>règlement annuel</b> en
          une fois.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Réservez votre <b>cours d’essai gratuit</b> pour découvrir{' '}
        <b>l’atelier</b> et voir quel <b>groupe</b> conviendrait le mieux à
        votre enfant en fonction de ses <b>intérêts</b> et <b>disponibilités</b>.
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
        Engagement sur l’année pour bénéficier du <b>meilleur tarif</b> et
        d’une <b>progression garantie</b>.
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
          ✨ Perfect to <b>discover the workshop</b> before choosing a regular
          plan.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 session per week</b> (60 min, <b>4 per month</b>)
        </li>
        <li>
          💳 <b>Flexible monthly billing</b>: 260 CHF / month (4 lessons
          included)
        </li>
        <li>
          ✨ Perfect to <b>try a month</b> with no commitment:
          <b> contract cancellable</b> at the end of every month.
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
          💳 <b>Automatic monthly billing</b> or <b>one-time annual payment</b>.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Book your <b>free trial lesson</b> to discover <b>the workshop</b> and
        see which <b>group</b> would suit your child best based on their
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
          ✨ Ideal para <b>descubrir el taller</b> antes de elegir un plan
          regular.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 sesión por semana</b> (60 min, <b>4 al mes</b>)
        </li>
        <li>
          💳 <b>Pago mensual flexible</b>: 260 CHF / mes (4 clases incluidas)
        </li>
        <li>
          ✨ Ideal para <b>probar un mes</b> sin compromiso:
          <b> contrato rescindible</b> al final de cada mes.
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
          💳 <b>Pago mensual automático</b> o <b>pago anual</b> de una sola vez.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Reserve su <b>clase de prueba gratuita</b> para descubrir{' '}
        <b>el taller</b> y ver qué <b>grupo</b> se adapta mejor a su hijo/a
        según sus <b>intereses</b> y <b>disponibilidad</b>.
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
          ✨ Ideale per <b>scoprire il laboratorio</b> prima di scegliere un
          piano regolare.
        </li>
      </ul>
    ),
    monthly: (
      <ul>
        <li>
          📅 <b>1 sessione a settimana</b> (60 min, <b>4 al mese</b>)
        </li>
        <li>
          💳 <b>Pagamento mensile flessibile</b>: 260 CHF / mese (4 lezioni
          incluse)
        </li>
        <li>
          ✨ Ideale per <b>provare un mese</b> senza impegno:
          <b> contratto disdicibile</b> alla fine di ogni mese.
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
          💳 <b>Addebito mensile automatico</b> o <b>pagamento annuale</b> in
          un’unica soluzione.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Prenoti la sua <b>lezione di prova gratuita</b> per scoprire{' '}
        <b>il laboratorio</b> e vedere quale <b>gruppo</b> sarebbe più adatto
        a suo figlio/a in base ai suoi <b>interessi</b> e alla sua{' '}
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
  const messages = messagesByLocale[locale] || messagesByLocale.fr;

  const offers = [
    {
      icon: '🎶✨',
      title: t('group.offer.trial.title'),
      price: t('group.offer.trial.price'),
      link: buildLink(messages.trial),
      textLink: t('group.offer.trial.cta'),
      description: dict.trialDesc,
      items: dict.trial,
      highlight: true,
    },
    {
      icon: '👧👦',
      title: t('group.offer.monthly.title'),
      price: t('group.offer.monthly.price'),
      subPrice: t('group.offer.monthly.subPrice'),
      link: buildLink(messages.monthly),
      textLink: t('group.offer.monthly.cta'),
      description: dict.monthlyDesc,
      items: dict.monthly,
    },
    {
      icon: '🎸',
      title: t('group.offer.annual.title'),
      price: t('group.offer.annual.price'),
      subPrice: t('group.offer.annual.subPrice'),
      link: buildLink(messages.annual),
      textLink: t('group.offer.annual.cta'),
      description: dict.annualDesc,
      items: dict.annual,
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
        <p className="offers-footnote">{t('group.pricing.note')}</p>
      </div>
    </section>
  );
};

export default OffersSection;
