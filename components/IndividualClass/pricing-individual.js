import React from 'react';
import './pricing-individual.css';

const offers = [
  {
    tag: '🎸 Découverte',
    title: 'Séance Découverte (–50%)',
    price: '1h à 55,00 CHF',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83057696/calendar/12696798',
    description:
      'Teste notre méthode avec une séance de 60 minutes, fais le point sur ton niveau et découvre si notre approche te convient.',
  },
  {
    tag: '⚡ Flexible',
    title: 'Cours Mensuel – Progresse à ton rythme',
    price: '4h à 395,00 CHF',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067728/calendar/12696798',
    description:
      'Idéal pour tester un mois sans engagement. Apprends tes morceaux préférés, découvre de nouvelles techniques et avance selon tes objectifs.',
  },
  {
    tag: '🏆 Progression garantie',
    title: 'Abonnement Annuel – Atteins tes objectifs',
    price: '4h à 295,00 CHF/mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316333/calendar/12696798',
    description:
      'Pour progresser sur le moyen terme et atteindre tes objectifs en 10 mois avec un suivi personnalisé et régulier.',
  },
];

export default function GuitarPricing() {
  return (
    <section className="individual-pricing">
      <div className="section">
        <h2>Nos offres Guitar & Bass Craft</h2>
        <h3 className="margin-bottom-sm">
          Découvre des formules adaptées à ton niveau et à tes envies : que tu
          veuilles jouer tes morceaux préférés, créer ta propre musique ou
          perfectionner ta technique.
        </h3>
        <div className="pricing-grid">
          {offers.map((offer, i) => (
            <div className="pricing-card">
              <h3>{offer.title}</h3>
              <strong className="price">{offer.price}</strong>
              <p>{offer.description}</p>
              <button className="cta-button">
                <a target="_blank" rel="noopener noreferrer" href={offer.link}>
                  Réserve ta séance maintenant
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
