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
  es: (
    <>
      Guitarra, bajo, DJing
      <br />y producción musical
    </>
  ),
  it: (
    <>
      Chitarra, basso, DJing
      <br />e produzione musicale
    </>
  ),
};

const paragraphByLocale = {
  fr: 'Nous construisons ensemble un parcours progressif qui vous correspond : jouer vos morceaux préférés, perfectionner votre technique, improviser, composer ou enregistrer. Chaque étape répond à des objectifs définis avec vous.',
  en: 'Together we build a progressive path that fits you: playing your favourite tracks, sharpening your technique, improvising, composing or recording. Each step responds to goals defined with you.',
  es: 'Construimos juntos un recorrido progresivo a su medida: tocar sus temas favoritos, perfeccionar su técnica, improvisar, componer o grabar. Cada etapa responde a objetivos definidos con usted.',
  it: 'Costruiamo insieme un percorso progressivo su misura: suonare i suoi brani preferiti, perfezionare la tecnica, improvvisare, comporre o registrare. Ogni tappa risponde a obiettivi definiti insieme.',
};

const carouselAltByLocale = {
  fr: 'Élève pendant un cours individuel de musique à Atahualpa Music Studio',
  en: 'Student during a private music lesson at Atahualpa Music Studio',
  es: 'Alumno durante una clase individual de música en Atahualpa Music Studio',
  it: 'Allievo durante una lezione individuale di musica all’Atahualpa Music Studio',
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
            altText={carouselAltByLocale[locale] || carouselAltByLocale.fr}
          />
        </div>
      </Container>
    </section>
  );
}
