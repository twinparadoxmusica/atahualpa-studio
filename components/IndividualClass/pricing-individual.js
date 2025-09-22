import React from 'react';
import './pricing-individual.css';
import OfferBox from '../OfferBox';

const offers = [
  {
    tag: '🎸 Découverte',
    title: 'Séance Découverte (–50%)',
    price: '1 cours à 55,00 CHF',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83057696/calendar/12696798',
    textLink: 'Réserve ta séance maintenant',
    description:
      'Teste notre méthode avec une séance de 60 minutes, fais le point sur ton niveau et découvre si notre approche te convient.',
    items: (
      <ul>
        <li>⏱️ 1 séance individuelle de 60 minutes</li>
        <li>🎟️ Offre valable une seule fois par élève</li>
        <li>
          🚀 Idéal pour découvrir l’atelier avant de choisir une formule
          régulière
        </li>
      </ul>
    ),
  },
  {
    tag: '⚡ Flexible',
    title: 'Cours Mensuel',
    price: '95 CHF / cours',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067728/calendar/12696798',
    textLink: 'Réserve ta séance maintenant',
    description:
      'Que tu sois débutant(e) ou musicien(ne) expérimenté(e), ces cours t’aideront à mettre en place les objectifs définis lors du cours découverte.',
    items: (
      <ul>
        <li>⏱️ 4 cours individuels de 60 minutes par mois (1 par semaine)</li>
        <li>💳 Paiement mensuel : 380 CHF / mois (soit 95 CHF par cours)</li>
        <li>
          🔓 Contrat simple et flexible : résiliable à la fin de chaque mois,
          sans contraintes
        </li>
      </ul>
    ),
  },
  {
    tag: '🏆 Progression garantie',
    title: 'Abonnement Annuel ',
    price: '75 CHF / cours',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316333/calendar/12696798',
    textLink: 'Réserve ta séance maintenant',
    description:
      'Pour progresser sur le moyen terme et atteindre tes objectifs en 10 mois avec un suivi personnalisé et régulier.',
    items: (
      <ul>
        <li>📅 Engagement annuel : de septembre à juin (10 mois)</li>
        <li>🕒 1 séance par semaine (60 min, soit environ 4 par mois)</li>
        <li>💳 Paiement mensuel automatique : 300 CHF / mois</li>
      </ul>
    ),
  },
];

export default function GuitarPricing() {
  return (
    <section className="individual-pricing">
      <div className="section">
        <h2>Nos abonnements - coaching individuel</h2>
        <h3 className="margin-bottom-sm">
          Découvre des formules adaptées à ton niveau et à tes envies : que tu
          veuilles jouer tes morceaux préférés, créer ta propre musique ou
          perfectionner ta technique.
        </h3>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
}
