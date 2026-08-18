'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-group.css';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const messagesByLocale = {
  fr: {
    trial:
      'Bonjour, je souhaite demander un cours d’essai gratuit pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
    monthly:
      'Bonjour, je souhaite choisir la formule mensuelle flexible à 70 CHF par séance pour l’atelier multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt les jours suivants : _. Merci !',
    annual:
      'Bonjour, je souhaite choisir l’inscription régulière à 60 CHF par séance pour l’atelier multi-instrumental, avec engagement sur l’année scolaire. Je voudrais des informations sur le paiement automatique ou le règlement annuel en une fois. Mon enfant a _ ans. Merci !',
  },
  en: {
    trial:
      'Hello, I would like to request a free trial lesson for the multi-instrument workshop. My child is _ years old. We are available preferably on the following days: _. Thank you!',
    monthly:
      'Hello, I would like to choose the flexible monthly plan at 70 CHF per session for the multi-instrument workshop. My child is _ years old. Our preferred days are: _. Thank you!',
    annual:
      'Hello, I would like to choose regular enrolment at 60 CHF per session for the multi-instrument workshop, with a school-year commitment. I would like information about automatic billing or paying for the year in one instalment. My child is _ years old. Thank you!',
  },
  es: {
    trial:
      'Hola, me gustaría solicitar una clase de prueba gratuita para el taller multi-instrumental. Mi hijo/a tiene _ años. Estamos disponibles preferentemente los siguientes días: _. ¡Gracias!',
    monthly:
      'Hola, me gustaría elegir el plan mensual flexible a 70 CHF por sesión para el taller multi-instrumental. Mi hijo/a tiene _ años. Nuestra disponibilidad preferida es: _. ¡Gracias!',
    annual:
      'Hola, me gustaría elegir la inscripción regular a 60 CHF por sesión para el taller multi-instrumental, con compromiso durante el año escolar. Quisiera información sobre el pago automático o el pago anual en una sola vez. Mi hijo/a tiene _ años. ¡Gracias!',
  },
  it: {
    trial:
      'Buongiorno, vorrei richiedere una lezione di prova gratuita per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili preferibilmente i seguenti giorni: _. Grazie!',
    monthly:
      'Buongiorno, vorrei scegliere il piano mensile flessibile a 70 CHF per sessione per il laboratorio multi-strumentale. Mio figlio/a ha _ anni. La disponibilità preferita è: _. Grazie!',
    annual:
      'Buongiorno, vorrei scegliere l’iscrizione regolare a 60 CHF per sessione per il laboratorio multi-strumentale, con impegno per l’anno scolastico. Vorrei informazioni sull’addebito automatico o sul pagamento annuale in un’unica soluzione. Mio figlio/a ha _ anni. Grazie!',
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
          ⏱️ Séances de <b>60 minutes</b>, au tarif de <b>70 CHF chacune</b>.
        </li>
        <li>
          📅 Le nombre de séances est défini chaque mois selon le calendrier et
          les disponibilités convenues. Vous payez uniquement les séances{' '}
          <b>prévues et confirmées</b>.
        </li>
        <li>
          💳 Exemples : <b>2 séances = 140 CHF</b> · <b>4 séances = 280 CHF</b>{' '}
          · <b>5 séances = 350 CHF</b>.
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Une séance hebdomadaire de 60 minutes</b>, de septembre à juin,
          selon le calendrier annuel du studio.
        </li>
        <li>
          🧭 <b>Tarif régulier : 60 CHF par séance programmée.</b> Le nombre
          total de séances est défini par le calendrier annuel du studio.
        </li>
        <li>
          💳 Paiement automatique selon l’échéancier convenu. Le{' '}
          <b>règlement de l’année en une fois</b> est aussi possible sur
          demande.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Réservez votre <b>cours d’essai gratuit</b> pour découvrir{' '}
        <b>l’atelier</b> et voir quel <b>groupe</b> conviendrait le mieux à
        votre enfant en fonction de ses <b>intérêts</b> et <b>disponibilités</b>
        .
      </>
    ),
    monthlyDesc: (
      <>
        Une formule <b>flexible</b>, ajustée chaque mois au calendrier convenu
        et aux séances confirmées.
      </>
    ),
    annualDesc: (
      <>
        Une inscription régulière sur l’année scolaire, avec un{' '}
        <b>tarif préférentiel par séance</b> et une{' '}
        <b>continuité pédagogique</b>.
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
          ⏱️ <b>60-minute sessions</b> at <b>70 CHF each</b>.
        </li>
        <li>
          📅 The number of sessions is set each month according to the calendar
          and agreed availability. You only pay for sessions that are{' '}
          <b>scheduled and confirmed</b>.
        </li>
        <li>
          💳 Examples: <b>2 sessions = 140 CHF</b> · <b>4 sessions = 280 CHF</b>{' '}
          · <b>5 sessions = 350 CHF</b>.
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>One weekly 60-minute session</b>, from September to June,
          according to the studio’s annual calendar.
        </li>
        <li>
          🧭 <b>Regular rate: 60 CHF per scheduled session.</b> The total number
          of sessions is set by the studio’s annual calendar.
        </li>
        <li>
          💳 Automatic billing follows the agreed schedule.{' '}
          <b>Payment for the full year in one instalment</b> is also available
          on request.
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
        A <b>flexible</b> plan adjusted each month to the agreed calendar and
        confirmed sessions.
      </>
    ),
    annualDesc: (
      <>
        Regular school-year enrolment with a{' '}
        <b>preferential per-session rate</b> and consistent learning support.
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
          ⏱️ Sesiones de <b>60 minutos</b>, a <b>70 CHF cada una</b>.
        </li>
        <li>
          📅 El número de sesiones se define cada mes según el calendario y la
          disponibilidad acordada. Solo paga las sesiones{' '}
          <b>previstas y confirmadas</b>.
        </li>
        <li>
          💳 Ejemplos: <b>2 sesiones = 140 CHF</b> · <b>4 sesiones = 280 CHF</b>{' '}
          · <b>5 sesiones = 350 CHF</b>.
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Una sesión semanal de 60 minutos</b>, de septiembre a junio,
          según el calendario anual del estudio.
        </li>
        <li>
          🧭 <b>Tarifa regular: 60 CHF por sesión programada.</b> El número
          total de sesiones se define según el calendario anual del estudio.
        </li>
        <li>
          💳 Pago automático según el calendario acordado. También es posible{' '}
          <b>abonar el año completo en una sola vez</b>, previa solicitud.
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
        Un plan <b>flexible</b>, adaptado cada mes al calendario acordado y a
        las sesiones confirmadas.
      </>
    ),
    annualDesc: (
      <>
        Una inscripción regular durante el año escolar, con una{' '}
        <b>tarifa preferente por sesión</b> y continuidad pedagógica.
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
          ⏱️ Sessioni di <b>60 minuti</b>, a <b>70 CHF ciascuna</b>.
        </li>
        <li>
          📅 Il numero di sessioni viene definito ogni mese in base al
          calendario e alla disponibilità concordata. Si pagano solo le sessioni{' '}
          <b>previste e confermate</b>.
        </li>
        <li>
          💳 Esempi: <b>2 sessioni = 140 CHF</b> · <b>4 sessioni = 280 CHF</b> ·{' '}
          <b>5 sessioni = 350 CHF</b>.
        </li>
      </ul>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Una sessione settimanale di 60 minuti</b>, da settembre a
          giugno, secondo il calendario annuale dello studio.
        </li>
        <li>
          🧭 <b>Tariffa regolare: 60 CHF per sessione programmata.</b> Il numero
          totale di sessioni è definito dal calendario annuale dello studio.
        </li>
        <li>
          💳 Addebito automatico secondo il calendario concordato. È anche
          possibile <b>pagare l’intero anno in un’unica soluzione</b> su
          richiesta.
        </li>
      </ul>
    ),
    trialDesc: (
      <>
        Prenoti la sua <b>lezione di prova gratuita</b> per scoprire{' '}
        <b>il laboratorio</b> e vedere quale <b>gruppo</b> sarebbe più adatto a
        suo figlio/a in base ai suoi <b>interessi</b> e alla sua{' '}
        <b>disponibilità</b>.
      </>
    ),
    monthlyDesc: (
      <>
        Un piano <b>flessibile</b>, adattato ogni mese al calendario concordato
        e alle sessioni confermate.
      </>
    ),
    annualDesc: (
      <>
        Un’iscrizione regolare per l’anno scolastico, con una{' '}
        <b>tariffa preferenziale per sessione</b> e continuità didattica.
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
      tag: t('group.offer.trial.tag'),
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
      tag: t('group.offer.monthly.tag'),
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
      tag: t('group.offer.annual.tag'),
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
