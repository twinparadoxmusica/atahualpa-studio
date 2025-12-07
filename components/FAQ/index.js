import React from 'react';
import faqs from './faqs';
import './styles.css';

export default function FAQAtahualpa({
  title = '❓ FAQ – Questions fréquentes',
  className = '',
}) {
  return (
    <div className={`faq-container margin-bottom-lg ${className}`}>
      <header>
        <h2>{title}</h2>
        <p>
          Toutes les réponses pour bien préparer l’atelier d’Atahualpa Music
          Studio.
        </p>
      </header>

      <div>
        {faqs.map((item, i) => (
          <div key={i} className="margin-bottom-sm">
            <div className="">
              <h3 className="">
                {item.emoji} {item.q}
              </h3>
            </div>
            <div className="">{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
