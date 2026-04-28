import React from 'react';
import { Container } from '../ui';
import './hero.css';

const lessons = [
  {
    icon: '🥁',
    title: 'Cours en groupe',
    href: '/lecons-musique#groupes',
    body: (
      <>
        Libère l’<b>énergie musicale</b> de ton enfant grâce à un{' '}
        <b>atelier ludique</b>, <b>collectif</b> et <b>multi-instrumental</b>{' '}
        en <b>petits groupes</b> (max. 4). Les <b>enfants</b> changent
        régulièrement d’instrument, ce qui développe leur <b>écoute</b>, leur{' '}
        <b>coordination</b> et leur <b>compréhension globale de la musique</b>.
      </>
    ),
  },
  {
    icon: '🎸',
    title: 'Cours individuels',
    href: '/lecons-musique#individuels',
    body: (
      <>
        <b>Acheter un instrument</b>, regarder des <b>tutos YouTube</b>… et{' '}
        <b>stagner</b>. <b>Apprendre seul</b> sans <b>parcours personnalisé</b>{' '}
        ni <b>retour d’un pro</b>, c’est prendre le <b>risque</b> d’adopter de
        mauvaises habitudes. Tu mérites mieux qu’une <b>méthode générique</b>{' '}
        : ton <b>jeu</b> est unique, ton <b>parcours</b> doit l’être aussi !
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section id="lecons" className="lecons-hero" aria-labelledby="lecons-hero-title">
      <Container variant="default" className="lecons-hero__inner">
        <span className="lecons-hero__eyebrow">Atelier de musique · Genève</span>
        <h1 id="lecons-hero-title" className="lecons-hero__title">
          Leçons de musique
        </h1>
        <p className="lecons-hero__lede">
          Apprends la musique autrement. Pas de méthode figée : chaque cours est
          pensé pour toi, selon tes envies, tes goûts et tes objectifs.
        </p>

        <ul className="lecons-hero__cards">
          {lessons.map((item) => (
            <li className="lecons-card" key={item.title}>
              <span className="lecons-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="lecons-card__title">{item.title}</h3>
              <p className="lecons-card__body">{item.body}</p>
              <a className="lecons-card__cta" href={item.href}>
                Lire plus
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
