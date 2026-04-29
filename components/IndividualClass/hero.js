'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
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

const titleByLocale = {
  fr: (
    <>
      Guitare, basse, DJing
      <br />& production musicale
    </>
  ),
  en: (
    <>
      Guitar, bass, DJing
      <br />& music production
    </>
  ),
};

const paragraphByLocale = {
  fr: 'On construit ensemble un parcours qui te correspond : jouer tes morceaux préférés, perfectionner ta technique, apprendre à improviser, composer ou enregistrer, selon tes envies.',
  en: 'Together we build a path that fits you: playing your favourite tracks, sharpening your technique, learning to improvise, composing or recording — whatever you’re after.',
};

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="hero-individuals" id="individuels">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('individual.eyebrow')}
          title={titleByLocale[locale] || titleByLocale.fr}
          lede={t('individual.lede')}
          align="left"
        />
        <p className="hero-individuals__paragraph">
          {paragraphByLocale[locale] || paragraphByLocale.fr}
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
