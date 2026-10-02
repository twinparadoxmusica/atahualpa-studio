'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';
import PhotoCarousel from '../PhotoCarousel';
import { courseContent } from '../../constants/courseContent';

const imagesCarousel = [
  '/assets/individuals/individual-class-1.webp',
  '/assets/individuals/individual-class-2.webp',
  '/assets/individuals/individual-class-3.webp',
  '/assets/individuals/individual-class-4.webp',
  '/assets/individuals/individual-class-6.webp',
  '/assets/individuals/individual-class-7.webp',
  '/assets/individuals/individual-class-8.webp',
  '/assets/individuals/individual-class-9.webp',
  '/assets/individuals/individual-class-12.webp',
  '/assets/individuals/individual-class-13.webp',
  '/assets/individuals/individual-class-14.webp',
  '/assets/individuals/individual-class-17.webp',
];

const carouselAltByLocale = {
  fr: 'Élève pendant un cours individuel de musique à Atahualpa Music Studio',
  en: 'Student during a private music lesson at Atahualpa Music Studio',
  es: 'Alumno durante una clase individual de música en Atahualpa Music Studio',
  it: 'Allievo durante una lezione individuale di musica all’Atahualpa Music Studio',
};

export default function Hero() {
  const { locale, t } = useLanguage();
  const content = courseContent[locale] || courseContent.fr;

  return (
    <section className="hero-individuals" id="individuels">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('individual.eyebrow')}
          title={content.title}
          lede={content.intro}
          align="left"
        />
        <div className="individual-subjects">
          {content.blocks.map(([title, body], index) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
              {index === 0 && (
                <a href="/cours-guitare-geneve">{content.link}</a>
              )}
            </div>
          ))}
        </div>
        <p className="hero-individuals__paragraph">{content.closing}</p>
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
