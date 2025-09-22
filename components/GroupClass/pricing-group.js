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
        Réserve ton cours d’essai gratuit pour découvrir l’atelier et voir quel
        groupe ton enfant pourrais joindre en dépendant de ses intérêts et
        disponibilités.
      </>
    ),
    items: (
      <ul>
        <li>📅 1 séance de group de 30 minutes.</li>
        <li>🎟️ Offre valable une seule fois par élève.</li>
        <li>
          ✨ Idéal pour tester un mois sans compromis : contrat résiliable à
          chaque fin de mois.
        </li>
      </ul>
    ),
    description: (
      <>
        Réserve ton cours d’essai gratuit pour découvrir l’atelier et voir quel
        groupe ton enfant pourrais joindre en dépendant de ses intérêts et
        disponibilités.
      </>
    ),
    highlight: true,
  },
  {
    icon: '👧👦',
    title: 'Cours Mensuel',
    price: '265 CHF / mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067503/calendar/12696798',
    textLink: 'Choisir cette offre',
    description: (
      <>
        <strong>Inclut 4 cours de 60 min, soit 1 par semaine</strong>
      </>
    ),
    items: (
      <ul>
        <li>📅 1 séance par semaine (60 min, environ 4 par mois)</li>
        <li>💳 Paiement mensuel flexible : 240 CHF / mois (4 cours inclus)</li>
        <li>
          ✨ Idéal pour tester un mois sans compromis : contrat résiliable à
          chaque fin de moi
        </li>
      </ul>
    ),
    highlight: false,
  },
  {
    icon: '🎸',
    title: 'Abonnement Annuel',
    price: '225 CHF / mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316538/calendar/12696798',
    textLink: 'Choisir cette offre',
    description: (
      <>
        <strong>Économie de 670 CHF (25%)</strong>
      </>
    ),
    items: (
      <ul>
        <li>📅 Engagement annuel : de septembre à juin (10 mois)</li>
        <li>🕒 1 séance par semaine (60 min, soit environ 4 par mois)</li>
        <li>💳 Paiement mensuel automatique : 225 CHF / mois</li>
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
