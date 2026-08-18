'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-individual.css';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const messagesByLocale = {
  fr: {
    discovery:
      'Bonjour, je souhaite réserver une séance découverte individuelle (55 CHF). Voici mon profil : niveau _, instrument _, objectifs _. Mes disponibilités : _. Merci !',
    monthly:
      'Bonjour, je souhaite choisir la formule mensuelle flexible de cours individuels à 95 CHF par séance. Voici mon profil : niveau _, instrument _, objectifs _. Mes disponibilités : _. Merci !',
    annual:
      'Bonjour, je souhaite choisir l’inscription régulière aux cours individuels à 85 CHF par séance, avec engagement sur l’année scolaire. Je voudrais des informations sur le paiement automatique ou le règlement annuel en une fois. Voici mon profil : niveau _, instrument _, objectifs _. Merci !',
  },
  en: {
    discovery:
      'Hello, I would like to book a private discovery session (55 CHF). About me: level _, instrument _, goals _. My availability: _. Thank you!',
    monthly:
      'Hello, I would like to choose the flexible monthly private lesson plan at 95 CHF per session. About me: level _, instrument _, goals _. My availability: _. Thank you!',
    annual:
      'Hello, I would like to choose regular private-lesson enrolment at 85 CHF per session, with a school-year commitment. I would like information about automatic billing or paying for the year in one instalment. About me: level _, instrument _, goals _. Thank you!',
  },
  es: {
    discovery:
      'Hola, me gustaría reservar una sesión de descubrimiento individual (55 CHF). Sobre mí: nivel _, instrumento _, objetivos _. Mi disponibilidad: _. ¡Gracias!',
    monthly:
      'Hola, me gustaría elegir el plan mensual flexible de clases individuales a 95 CHF por sesión. Sobre mí: nivel _, instrumento _, objetivos _. Mi disponibilidad: _. ¡Gracias!',
    annual:
      'Hola, me gustaría elegir la inscripción regular a clases individuales por 85 CHF por sesión, con compromiso durante el año escolar. Quisiera información sobre el pago automático o el pago anual en una sola vez. Sobre mí: nivel _, instrumento _, objetivos _. ¡Gracias!',
  },
  it: {
    discovery:
      'Buongiorno, vorrei prenotare una sessione di scoperta individuale (55 CHF). Profilo: livello _, strumento _, obiettivi _. Disponibilità: _. Grazie!',
    monthly:
      'Buongiorno, vorrei scegliere il piano mensile flessibile di lezioni individuali a 95 CHF per sessione. Profilo: livello _, strumento _, obiettivi _. Disponibilità: _. Grazie!',
    annual:
      'Buongiorno, vorrei scegliere l’iscrizione regolare alle lezioni individuali a 85 CHF per sessione, con impegno per l’anno scolastico. Vorrei informazioni sull’addebito automatico o sul pagamento annuale in un’unica soluzione. Profilo: livello _, strumento _, obiettivi _. Grazie!',
  },
};

const buildLink = (msg) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

const itemsByLocale = {
  fr: {
    discoveryDesc: (
      <>
        Testez notre <b>méthode</b> avec une <b>séance de 60 minutes</b>, faites
        le point sur votre <b>niveau</b> et découvrez si notre <b>approche</b>{' '}
        vous convient.
      </>
    ),
    discovery: (
      <ul>
        <li>
          ⏱️ <b>1 séance individuelle</b> de <b>60 minutes</b>
        </li>
        <li>
          🎟️ <b>Offre valable</b> une seule fois par élève
        </li>
        <li>
          🚀 Idéal pour <b>découvrir notre approche</b> avant de choisir une{' '}
          <b>formule régulière</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Que vous soyez <b>débutant(e)</b> ou <b>musicien(ne) expérimenté(e)</b>,
        ces cours vous aideront à atteindre les <b>objectifs</b> définis lors de
        la <b>séance découverte</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ Séances individuelles de <b>60 minutes</b>, au tarif de{' '}
          <b>95 CHF chacune</b>.
        </li>
        <li>
          📅 Le nombre de séances est défini chaque mois selon le calendrier et
          les disponibilités convenues. Vous payez uniquement les séances{' '}
          <b>prévues et confirmées</b>.
        </li>
        <li>
          💳 Exemples : <b>2 séances = 190 CHF</b> · <b>4 séances = 380 CHF</b>{' '}
          · <b>5 séances = 475 CHF</b>.
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Une inscription régulière sur l’année scolaire, avec un{' '}
        <b>tarif préférentiel par séance</b> et un <b>suivi personnalisé</b>.
      </>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Une séance hebdomadaire de 60 minutes</b>, de septembre à juin,
          selon le calendrier annuel du studio.
        </li>
        <li>
          🧭 <b>Tarif régulier : 85 CHF par séance programmée.</b> Le nombre
          total de séances est défini par le calendrier annuel du studio.
        </li>
        <li>
          💳 Paiement automatique selon l’échéancier convenu. Le{' '}
          <b>règlement de l’année en une fois</b> est aussi possible sur
          demande.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Découvrez des formules adaptées à votre <b>niveau</b> et à vos{' '}
        <b>envies</b> : que vous souhaitiez <b>jouer</b> vos morceaux préférés,{' '}
        <b>créer</b> votre propre musique ou <b>perfectionner</b> votre
        technique.
      </>
    ),
  },
  en: {
    discoveryDesc: (
      <>
        Try our <b>method</b> with a <b>60-minute session</b>, get a read on
        your <b>level</b> and see whether our <b>approach</b> fits you.
      </>
    ),
    discovery: (
      <ul>
        <li>
          ⏱️ <b>1 private session</b> of <b>60 minutes</b>
        </li>
        <li>
          🎟️ <b>Offer valid</b> once per student
        </li>
        <li>
          🚀 Ideal to <b>discover our approach</b> before choosing a{' '}
          <b>regular plan</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Whether you’re a <b>beginner</b> or an <b>experienced musician</b>,
        these lessons help you hit the <b>goals</b> set during the{' '}
        <b>discovery session</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ <b>60-minute private sessions</b> at <b>95 CHF each</b>.
        </li>
        <li>
          📅 The number of sessions is set each month according to the calendar
          and agreed availability. You only pay for sessions that are{' '}
          <b>scheduled and confirmed</b>.
        </li>
        <li>
          💳 Examples: <b>2 sessions = 190 CHF</b> · <b>4 sessions = 380 CHF</b>{' '}
          · <b>5 sessions = 475 CHF</b>.
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Regular school-year enrolment with a{' '}
        <b>preferential per-session rate</b> and personalised support.
      </>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>One weekly 60-minute session</b>, from September to June,
          according to the studio’s annual calendar.
        </li>
        <li>
          🧭 <b>Regular rate: 85 CHF per scheduled session.</b> The total number
          of sessions is set by the studio’s annual calendar.
        </li>
        <li>
          💳 Automatic billing follows the agreed schedule.{' '}
          <b>Payment for the full year in one instalment</b> is also available
          on request.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Discover plans built around your <b>level</b> and your <b>goals</b> —
        whether you want to <b>play</b> your favourite tracks, <b>create</b>{' '}
        your own music or <b>sharpen</b> your technique.
      </>
    ),
  },
  es: {
    discoveryDesc: (
      <>
        Pruebe nuestro <b>método</b> con una <b>sesión de 60 minutos</b>, evalúe
        su <b>nivel</b> y descubra si nuestro <b>enfoque</b> le conviene.
      </>
    ),
    discovery: (
      <ul>
        <li>
          ⏱️ <b>1 sesión individual</b> de <b>60 minutos</b>
        </li>
        <li>
          🎟️ <b>Oferta válida</b> una sola vez por alumno
        </li>
        <li>
          🚀 Ideal para <b>descubrir nuestro enfoque</b> antes de elegir una{' '}
          <b>fórmula regular</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Tanto si es <b>principiante</b> como <b>músico/a experimentado/a</b>,
        estas clases le ayudarán a alcanzar los <b>objetivos</b> definidos
        durante la <b>clase de descubrimiento</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ Sesiones individuales de <b>60 minutos</b>, a{' '}
          <b>95 CHF cada una</b>.
        </li>
        <li>
          📅 El número de sesiones se define cada mes según el calendario y la
          disponibilidad acordada. Solo paga las sesiones{' '}
          <b>previstas y confirmadas</b>.
        </li>
        <li>
          💳 Ejemplos: <b>2 sesiones = 190 CHF</b> · <b>4 sesiones = 380 CHF</b>{' '}
          · <b>5 sesiones = 475 CHF</b>.
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Una inscripción regular durante el año escolar, con una{' '}
        <b>tarifa preferente por sesión</b> y seguimiento personalizado.
      </>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Una sesión semanal de 60 minutos</b>, de septiembre a junio,
          según el calendario anual del estudio.
        </li>
        <li>
          🧭 <b>Tarifa regular: 85 CHF por sesión programada.</b> El número
          total de sesiones se define según el calendario anual del estudio.
        </li>
        <li>
          💳 Pago automático según el calendario acordado. También es posible{' '}
          <b>abonar el año completo en una sola vez</b>, previa solicitud.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Descubra fórmulas adaptadas a su <b>nivel</b> y a sus <b>ganas</b>: ya
        quiera <b>tocar</b> sus temas favoritos, <b>crear</b> su propia música o{' '}
        <b>perfeccionar</b> su técnica.
      </>
    ),
  },
  it: {
    discoveryDesc: (
      <>
        Provi il nostro <b>metodo</b> con una <b>sessione di 60 minuti</b>,
        valuti il suo <b>livello</b> e scopra se il nostro <b>approccio</b> fa
        per lei.
      </>
    ),
    discovery: (
      <ul>
        <li>
          ⏱️ <b>1 sessione individuale</b> di <b>60 minuti</b>
        </li>
        <li>
          🎟️ <b>Offerta valida</b> una sola volta per allievo
        </li>
        <li>
          🚀 Ideale per <b>scoprire il nostro approccio</b> prima di scegliere
          una <b>formula regolare</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Che sia <b>principiante</b> o <b>musicista esperto/a</b>, queste lezioni
        la aiuteranno a raggiungere gli <b>obiettivi</b> definiti durante la{' '}
        <b>lezione di scoperta</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ Sessioni individuali di <b>60 minuti</b>, a <b>95 CHF ciascuna</b>.
        </li>
        <li>
          📅 Il numero di sessioni viene definito ogni mese in base al
          calendario e alla disponibilità concordata. Si pagano solo le sessioni{' '}
          <b>previste e confermate</b>.
        </li>
        <li>
          💳 Esempi: <b>2 sessioni = 190 CHF</b> · <b>4 sessioni = 380 CHF</b> ·{' '}
          <b>5 sessioni = 475 CHF</b>.
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Un’iscrizione regolare per l’anno scolastico, con una{' '}
        <b>tariffa preferenziale per sessione</b> e un seguito personalizzato.
      </>
    ),
    annual: (
      <ul>
        <li>
          📅 <b>Una sessione settimanale di 60 minuti</b>, da settembre a
          giugno, secondo il calendario annuale dello studio.
        </li>
        <li>
          🧭 <b>Tariffa regolare: 85 CHF per sessione programmata.</b> Il numero
          totale di sessioni è definito dal calendario annuale dello studio.
        </li>
        <li>
          💳 Addebito automatico secondo il calendario concordato. È anche
          possibile <b>pagare l’intero anno in un’unica soluzione</b> su
          richiesta.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Scopra formule adattate al suo <b>livello</b> e ai suoi <b>desideri</b>:
        che voglia <b>suonare</b> i suoi brani preferiti, <b>creare</b> la sua
        musica o <b>perfezionare</b> la sua tecnica.
      </>
    ),
  },
};

export default function GuitarPricing() {
  const { locale, t } = useLanguage();
  const dict = itemsByLocale[locale] || itemsByLocale.fr;
  const messages = messagesByLocale[locale] || messagesByLocale.fr;

  const offers = [
    {
      tag: t('individual.offer.discovery.tag'),
      title: t('individual.offer.discovery.title'),
      price: t('individual.offer.discovery.price'),
      link: buildLink(messages.discovery),
      textLink: t('individual.offer.discovery.cta'),
      description: dict.discoveryDesc,
      items: dict.discovery,
    },
    {
      tag: t('individual.offer.monthly.tag'),
      title: t('individual.offer.monthly.title'),
      price: t('individual.offer.monthly.price'),
      subPrice: t('individual.offer.monthly.subPrice'),
      link: buildLink(messages.monthly),
      textLink: t('individual.offer.monthly.cta'),
      description: dict.monthlyDesc,
      items: dict.monthly,
    },
    {
      tag: t('individual.offer.annual.tag'),
      title: t('individual.offer.annual.title'),
      price: t('individual.offer.annual.price'),
      subPrice: t('individual.offer.annual.subPrice'),
      link: buildLink(messages.annual),
      textLink: t('individual.offer.annual.cta'),
      description: dict.annualDesc,
      items: dict.annual,
    },
  ];

  return (
    <section className="individual-pricing">
      <div className="section">
        <h2>{t('individual.pricing.title')}</h2>
        <p className="individual-pricing__intro">{dict.introTitle}</p>
        <OfferBox offers={offers} />
        <p className="individual-pricing__footnote">
          {t('individual.pricing.note')}
        </p>
      </div>
    </section>
  );
}
