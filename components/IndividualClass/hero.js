import React from 'react';
import './hero.css';
import PhotoCarousel from '../PhotoCarousel';

const imagesCarousel = [
  '/assets/individuals/individual-class-1.jpg',
  '/assets/individuals/individual-class-2.jpg',
  '/assets/individuals/individual-class-3.jpg',
  '/assets/individuals/individual-class-4.jpg',
  '/assets/individuals/individual-class-6.jpg',
  '/assets/individuals/individual-class-7.jpg',
  '/assets/individuals/individual-class-8.jpg',
  '/assets/individuals/individual-class-9.jpg',
  '/assets/individuals/individual-class-12.jpg',
  '/assets/individuals/individual-class-13.jpg',
  '/assets/individuals/individual-class-14.jpg',
  '/assets/individuals/individual-class-17.jpg',
];

const highlights = [
  {
    icon: '🎶',
    text: 'Un apprentissage sur mesure : adapté à ton niveau et à tes envies',
  },
  {
    icon: '🎵',
    text: 'Tous les styles : rock, pop, bossa, blues, tango, folklore, etc.',
  },
  {
    icon: '🎼',
    text: 'Techniques variées : improvisation, composition et enregistrement',
  },
  {
    icon: '🎛️',
    text: 'Matériel professionnel : pédales, amplis, logiciels comme Ableton Live, etc.',
  },
  {
    icon: '⚡',
    text: 'Flexibilité totale : pas de programme figé, ton parcours évolue avec toi',
  },
  {
    icon: '👨‍🏫',
    text: 'Un coach expérimenté : plus de 13 ans d’expérience, actif comme guitariste et bassiste',
  },
];

export default function Hero() {
  return (
    <section className="section hero-individuals" id="individuels">
      <h1>🎸 Guitar & Bass Craft : L’Atelier sur mesure</h1>
      <p>
        Développe ton style unique avec un programme personnalisé pour guitare
        ou basse. Chaque session est pensée spécialement pour toi, dans une
        ambiance créative et motivante.
      </p>
      <div className="margin-bottom-lg">
        <PhotoCarousel
          images={imagesCarousel}
          slidesPerView={4}
          height="300px"
        />
      </div>
      <h2>Pourquoi choisir cet atelier ?</h2>
      <div className="atelier-list-container">
        <ul className="atelier-list">
          {highlights.map((item, index) => (
            <li key={index}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
