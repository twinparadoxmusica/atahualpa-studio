import React from 'react';
import './pricing-group.css';
import OfferBox from '../OfferBox';

const offers = [
  {
    icon: '🎶✨',
    title: 'Cours d’essai gratuit',
    price: '0 CHF',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83194909/calendar/12696798',
    textLink: 'Choisir cette offre',
    description: (
      <>
        Réserve ton <b>cours d’essai gratuit</b> pour découvrir{' '}
        <b>l’atelier </b>
        et voir quel <b>groupe</b> ton enfant pourrais joindre en fonction de
        ses
        <b> intérêts</b> et <b>disponibilités</b>.
      </>
    ),
    items: (
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
    highlight: true,
  },
  {
    icon: '👧👦',
    title: 'Cours Mensuel',
    price: '60 CHF / cours',
    subPrice: '240 CHF par mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067503/calendar/12696798',
    textLink: 'Choisir cette offre',
    description: (
      <>
        Abonnement <b>mensuel</b> idéal pour une pratique régulière et un
        <b> suivi continu</b>.
      </>
    ),
    items: (
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
    highlight: false,
  },
  {
    icon: '🎸',
    title: 'Abonnement Annuel',
    price: '55 CHF / cours',
    subPrice: '220 CHF par mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316538/calendar/12696798',
    textLink: 'Choisir cette offre',
    description: (
      <>
        Engagement sur l’année pour bénéficier du <b>meilleur tarif </b>
        et d’une <b>progression garantie</b>.
      </>
    ),
    items: (
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
    highlight: false,
  },
];

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="section">
        <header className="offers-header">
          <h2>Nos abonnements - cours en groupe</h2>
          <p>Choisissez la formule qui correspond le mieux à vos besoins.</p>
        </header>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
};

export default OffersSection;
