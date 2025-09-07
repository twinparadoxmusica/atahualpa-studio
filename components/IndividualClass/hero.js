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

export default function Hero() {
  return (
    <section className="section hero-individuals" id="individuels">
      <h1>🎸 Guitar & Bass Craft : L’Atelier sur mesure</h1>
      <p className="text-align--left">
        Développe ton style unique avec un programme personnalisé pour guitare
        ou basse. Je propose un coaching individuel où chaque session est pensée
        pour toi.
      </p>

      <p className="text-align--left">
        On construit ensemble un parcours qui te correspond : jouer tes morceaux
        préférés, perfectionner ta technique, apprendre à improviser, composer
        ou enregistrer, selon tes envies.
      </p>
      <div className="margin-bottom-lg">
        <PhotoCarousel
          images={imagesCarousel}
          slidesPerView={4}
          height="300px"
        />
      </div>
      <button className="btn-primary">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.acuityscheduling.com/schedule/d9853b7c"
        >
          Réserver ma séance
        </a>
      </button>
    </section>
  );
}
