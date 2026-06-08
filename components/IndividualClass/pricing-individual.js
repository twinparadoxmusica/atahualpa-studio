'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-individual.css';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const messagesByLocale = {
  fr: {
    monthly:
      'Bonjour, je souhaite mettre en place la formule mensuelle de cours individuels. Voici mon profil : niveau _, instrument _, objectifs _. Mes disponibilités : _. Merci !',
    annual:
      'Bonjour, je souhaite mettre en place l’abonnement annuel de cours individuels. Voici mon profil : niveau _, instrument _, objectifs _. Mes disponibilités : _. Merci !',
  },
  en: {
    monthly:
      'Hello, I would like to set up the monthly individual lessons plan. About me: level _, instrument _, goals _. My availability: _. Thank you!',
    annual:
      'Hello, I would like to set up the annual individual lessons plan. About me: level _, instrument _, goals _. My availability: _. Thank you!',
  },
  es: {
    monthly:
      'Hola, me gustaría contratar el plan mensual de clases individuales. Sobre mí: nivel _, instrumento _, objetivos _. Mi disponibilidad: _. ¡Gracias!',
    annual:
      'Hola, me gustaría contratar el plan anual de clases individuales. Sobre mí: nivel _, instrumento _, objetivos _. Mi disponibilidad: _. ¡Gracias!',
  },
  it: {
    monthly:
      'Buongiorno, vorrei attivare il piano mensile di corsi individuali. Profilo: livello _, strumento _, obiettivi _. Disponibilità: _. Grazie!',
    annual:
      'Buongiorno, vorrei attivare il piano annuale di corsi individuali. Profilo: livello _, strumento _, obiettivi _. Disponibilità: _. Grazie!',
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
          🚀 Idéal pour <b>découvrir l’atelier</b> avant de choisir une{' '}
          <b>formule régulière</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Que vous soyez <b>débutant(e)</b> ou <b>musicien(ne) expérimenté(e)</b>,
        ces cours vous aideront à atteindre les <b>objectifs</b> définis lors
        de la <b>séance découverte</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ <b>4 cours individuels de 60 minutes</b> par mois (
          <b>1 par semaine</b>)
        </li>
        <li>
          💳 <b>Paiement mensuel : 360 CHF / mois</b> (soit{' '}
          <b>90 CHF par cours</b>)
        </li>
        <li>
          🔓 <b>Contrat simple et flexible</b> : <b>résiliable</b> à la fin de
          chaque mois, <b>sans contraintes</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Pour <b>progresser</b> sur le <b>moyen terme</b> et atteindre vos{' '}
        <b>objectifs</b> en <b>10 mois</b> avec un <b>suivi personnalisé</b> et{' '}
        <b>régulier</b>.
      </>
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
        <li>
          💰 <b>80 CHF par cours</b> au lieu de <b>90 CHF</b> :{' '}
          <b>économisez 380 CHF sur l’année scolaire</b>.
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
          🚀 Ideal to <b>discover the workshop</b> before choosing a{' '}
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
          ⏱️ <b>4 private 60-minute lessons</b> per month (
          <b>1 per week</b>)
        </li>
        <li>
          💳 <b>Monthly billing: 360 CHF / month</b> (i.e.{' '}
          <b>90 CHF per lesson</b>)
        </li>
        <li>
          🔓 <b>Simple, flexible contract</b>: <b>cancellable</b> at the end of
          each month, <b>no strings attached</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        To <b>progress</b> over the <b>medium term</b> and reach your{' '}
        <b>goals</b> within <b>10 months</b> with <b>personalized</b>,{' '}
        <b>regular follow-up</b>.
      </>
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
        <li>
          💰 <b>80 CHF per lesson</b> instead of <b>90 CHF</b>:{' '}
          <b>save 380 CHF over the school year</b>.
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
          🚀 Ideal para <b>descubrir el taller</b> antes de elegir una{' '}
          <b>fórmula regular</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Tanto si es <b>principiante</b> como{' '}
        <b>músico/a experimentado/a</b>, estas clases le ayudarán a alcanzar
        los <b>objetivos</b> definidos durante la <b>clase de descubrimiento</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ <b>4 clases individuales de 60 minutos</b> al mes (
          <b>1 por semana</b>)
        </li>
        <li>
          💳 <b>Pago mensual: 360 CHF / mes</b> (es decir,{' '}
          <b>90 CHF por clase</b>)
        </li>
        <li>
          🔓 <b>Contrato simple y flexible</b>: <b>rescindible</b> al final de
          cada mes, <b>sin ataduras</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Para <b>progresar</b> a <b>medio plazo</b> y alcanzar sus{' '}
        <b>objetivos</b> en <b>10 meses</b> con un <b>seguimiento personalizado</b>{' '}
        y <b>regular</b>.
      </>
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
        <li>
          💰 <b>80 CHF por clase</b> en lugar de <b>90 CHF</b>:{' '}
          <b>ahorre 380 CHF en el año escolar</b>.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Descubra fórmulas adaptadas a su <b>nivel</b> y a sus <b>ganas</b>: ya
        quiera <b>tocar</b> sus temas favoritos, <b>crear</b> su propia
        música o <b>perfeccionar</b> su técnica.
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
          🚀 Ideale per <b>scoprire il laboratorio</b> prima di scegliere una{' '}
          <b>formula regolare</b>
        </li>
      </ul>
    ),
    monthlyDesc: (
      <>
        Che sia <b>principiante</b> o <b>musicista esperto/a</b>, queste
        lezioni la aiuteranno a raggiungere gli <b>obiettivi</b> definiti
        durante la <b>lezione di scoperta</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ <b>4 lezioni individuali da 60 minuti</b> al mese (
          <b>1 a settimana</b>)
        </li>
        <li>
          💳 <b>Pagamento mensile: 360 CHF / mese</b> (ovvero{' '}
          <b>90 CHF a lezione</b>)
        </li>
        <li>
          🔓 <b>Contratto semplice e flessibile</b>: <b>disdicibile</b> alla
          fine di ogni mese, <b>senza vincoli</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Per <b>progredire</b> a <b>medio termine</b> e raggiungere i suoi{' '}
        <b>obiettivi</b> in <b>10 mesi</b> con un <b>seguito personalizzato</b>{' '}
        e <b>regolare</b>.
      </>
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
        <li>
          💰 <b>80 CHF a lezione</b> invece di <b>90 CHF</b>:{' '}
          <b>risparmi 380 CHF nell’anno scolastico</b>.
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Scopra formule adattate al suo <b>livello</b> e ai suoi{' '}
        <b>desideri</b>: che voglia <b>suonare</b> i suoi brani preferiti,{' '}
        <b>creare</b> la sua musica o <b>perfezionare</b> la sua tecnica.
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
      tag: '🎸 Découverte',
      title: t('individual.offer.discovery.title'),
      price: t('individual.offer.discovery.price'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83057696/calendar/12696798',
      textLink: t('individual.offer.discovery.cta'),
      description: dict.discoveryDesc,
      items: dict.discovery,
    },
    {
      tag: '⚡ Flexible',
      title: t('individual.offer.monthly.title'),
      price: t('individual.offer.monthly.price'),
      subPrice: t('individual.offer.monthly.subPrice'),
      link: buildLink(messages.monthly),
      textLink: t('individual.offer.monthly.cta'),
      description: dict.monthlyDesc,
      items: dict.monthly,
    },
    {
      tag: '🏆 Progression garantie',
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
        <h3 className="margin-bottom-sm">{dict.introTitle}</h3>
        <OfferBox offers={offers} />
        <p className="individual-pricing__footnote">
          {t('individual.pricing.note')}
        </p>
      </div>
    </section>
  );
}
