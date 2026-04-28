import React from 'react';
import { Container, SectionHeader } from '../ui';
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
    <section className="hero-individuals" id="individuels">
      <Container variant="default">
        <SectionHeader
          eyebrow="Coaching individuel"
          title={
            <>
              Guitare, basse, DJing
              <br />& production musicale
            </>
          }
          lede="Tu voudrais t’initier ou t’améliorer à la guitare, à la basse, au DJing ou à la production musicale ? Chaque session est pensée pour toi dans une ambiance créative et motivante."
          align="left"
        />
        <p className="hero-individuals__paragraph">
          On construit ensemble un parcours qui te correspond : jouer tes
          morceaux préférés, perfectionner ta technique, apprendre à improviser,
          composer ou enregistrer, selon tes envies.
        </p>
        <div className="hero-individuals__carousel">
          <PhotoCarousel
            images={imagesCarousel}
            slidesPerView={4}
            height="300px"
          />
        </div>
      </Container>
    </section>
  );
}
