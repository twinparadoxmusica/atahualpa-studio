import React from 'react';
import './pricing-group.css';

const offers = [
  {
    icon: '👧👦',
    title: 'Offre Flexible',
    price: '265 CHF / mois',
    description: (
      <>
        Paiement mensuel flexible
        <br />
        <strong>Prix par mois : 265 CHF</strong>
      </>
    ),
    highlight: false,
  },
  {
    icon: '🎶✨',
    title: 'Offre 10x',
    price: '225 CHF / mois',
    description: (
      <>
        Paiement en 10 fois pour l’année complète
        <br />
        <strong>Prix par mois : 225 CHF</strong>
        <br />
        <strong>Économie de 400 CHF (18%)</strong>
      </>
    ),
    highlight: true,
  },
  {
    icon: '🎸',
    title: 'Offre Annuelle',
    price: "1'980 CHF / an",
    description: (
      <>
        Paiement en une fois pour l’année complète
        <br />
        <strong>Prix total : 1'980 CHF</strong>
        <br />
        <strong>Économie de 670 CHF (25%)</strong>
      </>
    ),
    highlight: false,
  },
];

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="section">
        <header className="offers-header">
          <h2>Nos Offres</h2>
          <p>Choisissez la formule qui correspond le mieux à vos besoins.</p>
        </header>

        <div className="offers-grid">
          {offers.map((offer, i) => (
            <div key={i} className={`offer-card`}>
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <div className="offer-price">{offer.price}</div>
                <div className="offer-description">{offer.description}</div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.acuityscheduling.com/schedule/d9853b7c"
              >
                <button className="offer-button">Choisir cette offre</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
