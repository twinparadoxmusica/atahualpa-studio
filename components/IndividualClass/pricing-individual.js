import React from 'react';
import './pricing-individual.css';

const offers = [
  {
    title: 'Offre découverte – 1 séance individuelle (60 minutes)',
    price: '55 CHF',
    description:
      'Une séance découverte de 60 minutes pour faire le point, tester la méthode et voir si on continue ensemble.',
  },
  {
    title: 'Offre mensuel – 4 séances d’une heure (1x/semaine)',
    price: '100 CHF',
    description: 'Cours minimum 1 mois.',
  },
  {
    title: 'Offre 6 mois – 18 séances individuelles (1x/semaine)',
    price: '1’100 CHF',
    description:
      'À 85 CHF le cours. Paiement unique : 1’100 CHF ou mensuel (3x 340 CHF, total 1’140 CHF).',
  },
];

export default function GuitarPricing() {
  return (
    <section className="individual-pricing">
      <div className="section">
        <h2>Nos offres Guitar & Bass Craft</h2>
        <h4 className="margin-bottom-sm">
          Ce qu’on pourra faire ensemble : apprendre un morceau, créer une
          composition, apprendre une nouvelle technique.
        </h4>
        <div className="pricing-grid">
          {offers.map((offer, i) => (
            <div key={i} className="pricing-card">
              <h3>{offer.title}</h3>
              <strong>{offer.price}</strong>
              <p>{offer.description}</p>
              <button className="btn-primary">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.acuityscheduling.com/schedule/d9853b7c"
                >
                  Réserver maintenant
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
