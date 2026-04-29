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
