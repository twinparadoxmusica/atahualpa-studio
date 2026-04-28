import React from 'react';
import { Container, SectionHeader } from '../ui';
import faqs from './faqs';
import './styles.css';

export default function FAQAtahualpa({
  title = 'FAQ — Questions fréquentes',
  className = '',
}) {
  return (
    <section className={`faq-container ${className}`}>
      <Container variant="narrow">
        <SectionHeader
          eyebrow="❓ Questions fréquentes"
          title={title}
          lede="Toutes les réponses pour bien préparer l’atelier d’Atahualpa Music Studio."
        />
        <ul className="faq-list">
          {faqs.map((item, i) => (
            <li key={i} className="faq-item">
              <h3 className="faq-item__question">
                {item.emoji} {item.q}
              </h3>
              <div className="faq-item__answer">{item.a}</div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
