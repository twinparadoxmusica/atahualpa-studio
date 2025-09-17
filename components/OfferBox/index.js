'use client';
import './styles.css';

const OfferBox = ({ offers = [] }) => {
  return (
    <div className="offers-grid">
      {offers.map((offer, i) => (
        <div key={i} className={`offer-card`}>
          <div className="offer-content margin-bottom-xs">
            <h3 className="offer-title">{offer.title}</h3>
            <div className="offer-price">{offer.price}</div>
            <div className="offer-description">{offer.description}</div>
            <div className="offer-items">{offer.items}</div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={offer.link}>
            <button>{offer.textLink}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default OfferBox;
