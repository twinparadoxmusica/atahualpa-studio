import React from 'react';
import './pricing-group.css';

const offers = [
  {
    icon: '🎶✨',
    title: 'Cours d’essai gratuit',
    price: '0 CHF',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83194909/calendar/12696798',
    description: (
      <>
        Réserve ton cours d’essai gratuit et choisis ce que tu aimerais
        apprendre
      </>
    ),
    highlight: true,
  },
  {
    icon: '👧👦',
    title: 'Offre Flexible',
    price: '265 CHF / mois',
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83067503/calendar/12696798',
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
    icon: '🎸',
    title: 'Offre Annuelle',
    price: "1'980 CHF / an",
    link: 'https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83316538/calendar/12696798',
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
              <div className="offer-content margin-bottom-xs">
                <h3 className="offer-title">{offer.title}</h3>
                <div className="offer-price">{offer.price}</div>
                <div className="offer-description">{offer.description}</div>
              </div>
              <a target="_blank" rel="noopener noreferrer" href={offer.link}>
                <button>Choisir cette offre</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
