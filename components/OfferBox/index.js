'use client';
import './styles.css';

const OfferBox = ({ offers = [] }) => {
  return (
    <div className="offers-grid">
      {offers.map((offer) => (
        <article
          key={offer.title}
          className={`offer-card ${offer.highlight ? 'offer-card--highlight' : ''}`}
        >
          <div className="offer-content margin-bottom-xs">
            {offer.tag ? <p className="offer-tag">{offer.tag}</p> : null}
            <h3 className="offer-title">{offer.title}</h3>
            <div className="offer-price">{offer.price}</div>
            {offer.subPrice ? (
              <div className="offer-subprice">{offer.subPrice}</div>
            ) : null}
            <div className="offer-description">{offer.description}</div>
            <div className="offer-items">{offer.items}</div>
          </div>
          <a
            className="offer-card__cta"
            target="_blank"
            rel="noopener noreferrer"
            href={offer.link}
          >
            {offer.textLink}
          </a>
        </article>
      ))}
    </div>
  );
};

export default OfferBox;
