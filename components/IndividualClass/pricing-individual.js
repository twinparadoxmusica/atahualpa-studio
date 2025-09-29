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
    description: (
      <>
        Teste notre <b>méthode</b> avec une <b>séance de 60 minutes</b>, fais le
        point sur ton <b>niveau</b> et découvre si notre <b>approche</b> te
        convient.
      </>
    ),
    items: (
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
  },
  {
    tag: '⚡ Flexible',
    title: 'Cours Mensuel',
    price: '95 CHF / cours',
    subPrice: '380 CHF par mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067728/calendar/12696798',
    textLink: 'Réserve ta séance maintenant',
    description: (
      <>
        Que tu sois <b>débutant(e)</b> ou <b>musicien(ne) expérimenté(e)</b>,
        ces cours t’aideront à mettre en place les <b>objectifs</b> définis lors
        du <b>cours découverte</b>.
      </>
    ),
    items: (
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
  },
  {
    tag: '🏆 Progression garantie',
    title: 'Abonnement Annuel ',
    price: '75 CHF / cours',
    subPrice: '300 CHF par mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316333/calendar/12696798',
    textLink: 'Réserve ta séance maintenant',
    description: (
      <>
        Pour <b>progresser</b> sur le <b>moyen terme</b> et atteindre tes{' '}
        <b>objectifs</b> en <b>10 mois</b> avec un <b>suivi personnalisé</b> et{' '}
        <b>régulier</b>.
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
          💳 <b>Paiement mensuel automatique</b> : 300 CHF / mois
        </li>
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
          Découvre des formules adaptées à ton <b>niveau</b> et à tes{' '}
          <b>envies</b> : que tu veuilles <b>jouer</b> tes morceaux préférés,{' '}
          <b>créer</b> ta propre musique ou <b>perfectionner</b> ta technique.
        </h3>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
}
