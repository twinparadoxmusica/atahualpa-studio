'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { INDIVIDUAL_DISCOVERY_BOOKING_URL } from '../../constants/translations';
import OfferBox from '../OfferBox';
import './pricing-individual.css';

const itemsByLocale = {
  fr: {
    discoveryDesc:
      'Une première séance individuelle de 60 minutes pour découvrir notre approche, faire le point sur vos objectifs et définir la formule la plus adaptée.',
    discovery: (
      <ul>
        <li>1 séance individuelle de 60 minutes</li>
        <li>Valable une seule fois par élève</li>
        <li>Idéal avant de choisir une formule régulière</li>
      </ul>
    ),
    monthlyDesc:
      'Une formule flexible pour suivre des cours régulièrement, sans engagement annuel.',
    monthly: (
      <ul>
        <li>4 cours individuels de 60 minutes par mois</li>
        <li>Paiement mensuel : 356 CHF / mois</li>
        <li>Résiliable à la fin de chaque mois</li>
      </ul>
    ),
    annualDesc:
      'La formule la plus avantageuse pour progresser sur le long terme avec un suivi personnalisé et régulier.',
    annual: (
      <ul>
        <li>Engagement sur l’année scolaire, de septembre à juin</li>
        <li>1 cours par semaine de 60 minutes</li>
        <li>
          Paiement par débit automatique mensuel ou en une seule fois
        </li>
        <li>
          Soit 380 CHF d’économie sur l’année scolaire par rapport à la
          formule mensuelle
        </li>
      </ul>
    ),
  },
  en: {
    discoveryDesc:
      'A first 60-minute private session to discover our approach, review your goals and define the plan that fits you best.',
    discovery: (
      <ul>
        <li>1 private 60-minute session</li>
        <li>Available once per student</li>
        <li>Ideal before choosing a regular plan</li>
      </ul>
    ),
    monthlyDesc:
      'A flexible plan to take lessons regularly, with no annual commitment.',
    monthly: (
      <ul>
        <li>4 private 60-minute lessons per month</li>
        <li>Monthly billing: 356 CHF / month</li>
        <li>Cancellable at the end of any month</li>
      </ul>
    ),
    annualDesc:
      'The best-value plan for long-term progress with personalized, regular follow-up.',
    annual: (
      <ul>
        <li>School-year commitment, from September to June</li>
        <li>1 lesson per week, 60 minutes</li>
        <li>Automatic monthly debit or a single annual payment</li>
        <li>
          A saving of 380 CHF over the school year compared with the
          monthly plan
        </li>
      </ul>
    ),
  },
  es: {
    discoveryDesc:
      'Una primera sesión individual de 60 minutos para descubrir nuestra forma de trabajar, hacer un balance de tus objetivos y definir la fórmula más adecuada.',
    discovery: (
      <ul>
        <li>1 sesión individual de 60 minutos</li>
        <li>Válida una sola vez por alumno</li>
        <li>Ideal antes de elegir una fórmula regular</li>
      </ul>
    ),
    monthlyDesc:
      'Una fórmula flexible para tomar clases con regularidad, sin compromiso anual.',
    monthly: (
      <ul>
        <li>4 clases individuales de 60 minutos al mes</li>
        <li>Pago mensual: 356 CHF / mes</li>
        <li>Rescindible al final de cada mes</li>
      </ul>
    ),
    annualDesc:
      'La fórmula más ventajosa para avanzar a largo plazo con un seguimiento personalizado y regular.',
    annual: (
      <ul>
        <li>Compromiso durante el año escolar, de septiembre a junio</li>
        <li>1 clase por semana de 60 minutos</li>
        <li>Débito automático mensual o pago anual en un solo plazo</li>
        <li>
          Hasta 380 CHF de ahorro en el año escolar frente al plan
          mensual
        </li>
      </ul>
    ),
  },
  it: {
    discoveryDesc:
      'Una prima sessione individuale di 60 minuti per scoprire il nostro approccio, fare il punto sui tuoi obiettivi e definire la formula più adatta.',
    discovery: (
      <ul>
        <li>1 sessione individuale di 60 minuti</li>
        <li>Valida una sola volta per allievo</li>
        <li>Ideale prima di scegliere una formula regolare</li>
      </ul>
    ),
    monthlyDesc:
      'Una formula flessibile per seguire le lezioni con regolarità, senza impegno annuale.',
    monthly: (
      <ul>
        <li>4 lezioni individuali da 60 minuti al mese</li>
        <li>Pagamento mensile: 356 CHF / mese</li>
        <li>Disdicibile alla fine di ogni mese</li>
      </ul>
    ),
    annualDesc:
      'La formula più vantaggiosa per progredire a lungo termine con un seguito personalizzato e regolare.',
    annual: (
      <ul>
        <li>Impegno sull’anno scolastico, da settembre a giugno</li>
        <li>1 lezione a settimana, 60 minuti</li>
        <li>
          Addebito automatico mensile o pagamento annuale in un’unica
          soluzione
        </li>
        <li>
          Fino a 380 CHF di risparmio sull’anno scolastico rispetto
          alla formula mensile
        </li>
      </ul>
    ),
  },
};

export default function GuitarPricing() {
  const { locale, t } = useLanguage();
  const dict = itemsByLocale[locale] || itemsByLocale.fr;

  const offers = [
    {
      tag: t('individual.offer.discovery.tag'),
      title: t('individual.offer.discovery.title'),
      price: t('individual.offer.discovery.price'),
      link: INDIVIDUAL_DISCOVERY_BOOKING_URL,
      external: true,
      textLink: t('individual.offer.discovery.cta'),
      description: dict.discoveryDesc,
      items: dict.discovery,
      highlight: true,
    },
    {
      tag: t('individual.offer.monthly.tag'),
      title: t('individual.offer.monthly.title'),
      price: t('individual.offer.monthly.price'),
      subPrice: t('individual.offer.monthly.subPrice'),
      link: '#regler',
      external: false,
      textLink: t('individual.offer.monthly.cta'),
      description: dict.monthlyDesc,
      items: dict.monthly,
    },
    {
      tag: t('individual.offer.annual.tag'),
      title: t('individual.offer.annual.title'),
      price: t('individual.offer.annual.price'),
      subPrice: t('individual.offer.annual.subPrice'),
      link: '#regler',
      external: false,
      textLink: t('individual.offer.annual.cta'),
      description: dict.annualDesc,
      items: dict.annual,
    },
  ];

  return (
    <section className="individual-pricing">
      <div className="section">
        <h2>{t('individual.pricing.title')}</h2>
        <p className="individual-pricing__lede margin-bottom-sm">
          {t('individual.pricing.lede')}
        </p>
        <OfferBox offers={offers} />
      </div>
    </section>
  );
}
