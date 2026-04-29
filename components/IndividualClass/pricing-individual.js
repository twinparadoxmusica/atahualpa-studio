'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import OfferBox from '../OfferBox';
import './pricing-individual.css';

const itemsByLocale = {
  fr: {
    discoveryDesc: (
      <>
        Teste notre <b>méthode</b> avec une <b>séance de 60 minutes</b>, fais le
        point sur ton <b>niveau</b> et découvre si notre <b>approche</b> te
        convient.
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
        Que tu sois <b>débutant(e)</b> ou <b>musicien(ne) expérimenté(e)</b>,
        ces cours t’aideront à mettre en place les <b>objectifs</b> définis lors
        du <b>cours découverte</b>.
      </>
    ),
    monthly: (
      <ul>
        <li>
          ⏱️ <b>4 cours individuels de 60 minutes</b> par mois (
          <b>1 par semaine</b>)
        </li>
        <li>
          💳 <b>Paiement mensuel : 380 CHF / mois</b> (soit{' '}
          <b>95 CHF par cours</b>)
        </li>
        <li>
          🔓 <b>Contrat simple et flexible</b> : <b>résiliable</b> à la fin de
          chaque mois, <b>sans contraintes</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Pour <b>progresser</b> sur le <b>moyen terme</b> et atteindre tes{' '}
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
          💳 <b>Paiement mensuel automatique</b> : 300 CHF / mois
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Découvre des formules adaptées à ton <b>niveau</b> et à tes{' '}
        <b>envies</b> : que tu veuilles <b>jouer</b> tes morceaux préférés,{' '}
        <b>créer</b> ta propre musique ou <b>perfectionner</b> ta technique.
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
          💳 <b>Monthly billing: 380 CHF / month</b> (i.e.{' '}
          <b>95 CHF per lesson</b>)
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
          💳 <b>Automatic monthly billing</b>: 300 CHF / month
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
        Prueba nuestro <b>método</b> con una <b>sesión de 60 minutos</b>, evalúa
        tu <b>nivel</b> y descubre si nuestro <b>enfoque</b> te conviene.
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
        Tanto si eres <b>principiante</b> como{' '}
        <b>músico/a experimentado/a</b>, estas clases te ayudarán a alcanzar
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
          💳 <b>Pago mensual: 380 CHF / mes</b> (es decir,{' '}
          <b>95 CHF por clase</b>)
        </li>
        <li>
          🔓 <b>Contrato simple y flexible</b>: <b>rescindible</b> al final de
          cada mes, <b>sin ataduras</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Para <b>progresar</b> a <b>medio plazo</b> y alcanzar tus{' '}
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
          💳 <b>Pago mensual automático</b>: 300 CHF / mes
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Descubre fórmulas adaptadas a tu <b>nivel</b> y a tus <b>ganas</b>: ya
        quieras <b>tocar</b> tus temas favoritos, <b>crear</b> tu propia
        música o <b>perfeccionar</b> tu técnica.
      </>
    ),
  },
  it: {
    discoveryDesc: (
      <>
        Prova il nostro <b>metodo</b> con una <b>sessione di 60 minuti</b>,
        valuta il tuo <b>livello</b> e scopri se il nostro <b>approccio</b> fa
        per te.
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
        Che tu sia <b>principiante</b> o <b>musicista esperto/a</b>, queste
        lezioni ti aiuteranno a raggiungere gli <b>obiettivi</b> definiti
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
          💳 <b>Pagamento mensile: 380 CHF / mese</b> (ovvero{' '}
          <b>95 CHF a lezione</b>)
        </li>
        <li>
          🔓 <b>Contratto semplice e flessibile</b>: <b>disdicibile</b> alla
          fine di ogni mese, <b>senza vincoli</b>
        </li>
      </ul>
    ),
    annualDesc: (
      <>
        Per <b>progredire</b> a <b>medio termine</b> e raggiungere i tuoi{' '}
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
          💳 <b>Addebito mensile automatico</b>: 300 CHF / mese
        </li>
      </ul>
    ),
    introTitle: (
      <>
        Scopri formule adattate al tuo <b>livello</b> e ai tuoi{' '}
        <b>desideri</b>: che tu voglia <b>suonare</b> i tuoi brani preferiti,{' '}
        <b>creare</b> la tua musica o <b>perfezionare</b> la tua tecnica.
      </>
    ),
  },
};

export default function GuitarPricing() {
  const { locale, t } = useLanguage();
  const dict = itemsByLocale[locale] || itemsByLocale.fr;

  const offers = [
    {
      tag: '🎸 Découverte',
      title: t('individual.offer.discovery.title'),
      price: t('individual.offer.discovery.price'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83057696/calendar/12696798',
      textLink: t('common.bookNow'),
      description: dict.discoveryDesc,
      items: dict.discovery,
    },
    {
      tag: '⚡ Flexible',
      title: t('individual.offer.monthly.title'),
      price: t('individual.offer.monthly.price'),
      subPrice: t('individual.offer.monthly.subPrice'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067728/calendar/12696798',
      textLink: t('common.bookNow'),
      description: dict.monthlyDesc,
      items: dict.monthly,
    },
    {
      tag: '🏆 Progression garantie',
      title: t('individual.offer.annual.title'),
      price: t('individual.offer.annual.price'),
      subPrice: t('individual.offer.annual.subPrice'),
      link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316333/calendar/12696798',
      textLink: t('common.bookNow'),
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
      </div>
    </section>
  );
}
