'use client';
import './styles.css';

const OfferBox = ({ offers = [] }) => {
  return (
    <div className="offers-grid">
      {offers.map((offer, i) => {
        const linkProps = offer.external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {};
        return (
          <div
            key={i}
            className={`offer-card${offer.highlight ? ' highlight' : ''}`}
          >
            <div className="offer-content margin-bottom-xs">
              {offer.tag && <div className="offer-tag">{offer.tag}</div>}
              <h3 className="offer-title">{offer.title}</h3>
              <div className="offer-price">{offer.price}</div>
              {offer.subPrice && (
                <div className="offer-subprice">{offer.subPrice}</div>
              )}
              <div className="offer-description">{offer.description}</div>
              {offer.items && <div className="offer-items">{offer.items}</div>}
            </div>
            <a href={offer.link} {...linkProps}>
              <button>{offer.textLink}</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default OfferBox;
