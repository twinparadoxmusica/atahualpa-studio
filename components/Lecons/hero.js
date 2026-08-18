'use client';
import React from 'react';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';

const cardContentByLocale = {
  fr: {
    group: {
      audience: 'Pour les enfants dès 5 ans.',
      benefit:
        'Découvrir plusieurs instruments, jouer ensemble et construire des bases musicales solides.',
      features: [
        'Petits groupes · maximum 4 élèves',
        'Guitare, basse, piano, batterie et synthétiseur',
        'Cours d’essai gratuit',
      ],
      cta: 'Découvrir l’atelier',
    },
    individual: {
      audience: 'Pour adolescents et adultes, du niveau débutant à avancé.',
      benefit:
        'Construire un parcours clair autour de votre instrument, de vos goûts et de vos objectifs.',
      features: [
        'Guitare, basse, DJing et production musicale',
        'Technique, improvisation, création et enregistrement',
        'Séance découverte · 55 CHF',
      ],
      cta: 'Voir les cours individuels',
    },
  },
  en: {
    group: {
      audience: 'For children aged 5 and up.',
      benefit:
        'Discover several instruments, play together and build strong musical foundations.',
      features: [
        'Small groups · maximum 4 students',
        'Guitar, bass, piano, drums and synth',
        'Free trial lesson',
      ],
      cta: 'Discover the workshop',
    },
    individual: {
      audience: 'For teenagers and adults, from beginner to advanced.',
      benefit:
        'Build a clear path around your instrument, your musical tastes and your goals.',
      features: [
        'Guitar, bass, DJing and music production',
        'Technique, improvisation, creation and recording',
        'Discovery session · 55 CHF',
      ],
      cta: 'View private lessons',
    },
  },
  es: {
    group: {
      audience: 'Para niños a partir de 5 años.',
      benefit:
        'Descubrir varios instrumentos, tocar en grupo y construir bases musicales sólidas.',
      features: [
        'Grupos pequeños · máximo 4 alumnos',
        'Guitarra, bajo, piano, batería y sintetizador',
        'Clase de prueba gratuita',
      ],
      cta: 'Descubrir el taller',
    },
    individual: {
      audience:
        'Para adolescentes y adultos, desde principiantes hasta avanzados.',
      benefit:
        'Construir un recorrido claro alrededor de su instrumento, sus gustos y sus objetivos.',
      features: [
        'Guitarra, bajo, DJing y producción musical',
        'Técnica, improvisación, creación y grabación',
        'Sesión de descubrimiento · 55 CHF',
      ],
      cta: 'Ver las clases individuales',
    },
  },
  it: {
    group: {
      audience: 'Per bambini dai 5 anni.',
      benefit:
        'Scoprire più strumenti, suonare insieme e costruire solide basi musicali.',
      features: [
        'Piccoli gruppi · massimo 4 allievi',
        'Chitarra, basso, pianoforte, batteria e sintetizzatore',
        'Lezione di prova gratuita',
      ],
      cta: 'Scoprire il laboratorio',
    },
    individual: {
      audience:
        'Per adolescenti e adulti, dal livello principiante all’avanzato.',
      benefit:
        'Costruire un percorso chiaro attorno allo strumento, ai gusti e agli obiettivi personali.',
      features: [
        'Chitarra, basso, DJing e produzione musicale',
        'Tecnica, improvvisazione, creazione e registrazione',
        'Sessione di scoperta · 55 CHF',
      ],
      cta: 'Vedere le lezioni individuali',
    },
  },
};

export default function Hero() {
  const { locale, t } = useLanguage();
  const content = cardContentByLocale[locale] || cardContentByLocale.fr;

  const lessons = [
    {
      icon: '🥁',
      title: t('lecons.hero.card.group.title'),
      href: '/lecons-musique#groupes',
      ...content.group,
    },
    {
      icon: '🎸',
      title: t('lecons.hero.card.individual.title'),
      href: '/lecons-musique#individuels',
      ...content.individual,
    },
  ];

  return (
    <section
      id="lecons"
      className="lecons-hero"
      aria-labelledby="lecons-hero-title"
    >
      <Container variant="default" className="lecons-hero__inner">
        <span className="lecons-hero__eyebrow">{t('lecons.hero.eyebrow')}</span>
        <h1 id="lecons-hero-title" className="lecons-hero__title">
          {t('lecons.hero.title')}
        </h1>
        <p className="lecons-hero__lede">{t('lecons.hero.lede')}</p>

        <ul className="lecons-hero__cards">
          {lessons.map((item) => (
            <li className="lecons-card" key={item.title}>
              <span className="lecons-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h2 className="lecons-card__title">{item.title}</h2>
              <p className="lecons-card__audience">{item.audience}</p>
              <p className="lecons-card__body">{item.benefit}</p>
              <ul className="lecons-card__features">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="lecons-card__cta" href={item.href}>
                {item.cta}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
