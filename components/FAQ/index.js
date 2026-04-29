'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import faqsByLocale from './faqs';
import './styles.css';

export default function FAQAtahualpa({ title, className = '' }) {
  const { locale, t } = useLanguage();
  const faqs = faqsByLocale[locale] || faqsByLocale.fr;
  const heading = title || t('faq.title');

  return (
    <section className={`faq-container ${className}`}>
      <Container variant="narrow">
        <SectionHeader
          eyebrow={t('faq.eyebrow')}
          title={heading}
          lede={t('faq.lede')}
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
