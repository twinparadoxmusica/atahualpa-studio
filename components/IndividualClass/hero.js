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
      Guitarra, bajo, DJ
      <br />y producción musical
    </>
  ),
  it: (
    <>
      Chitarra, basso, DJ
      <br />e produzione musicale
    </>
  ),
};

const ledeByLocale = {
  fr: 'Vous souhaitez débuter ou progresser à la guitare, à la basse, au DJing ou dans la production musicale ? Chaque cours est personnalisé selon votre niveau, vos goûts musicaux et vos objectifs.',
  en: 'Would you like to start out or progress on guitar, bass, DJing or music production? Every lesson is tailored to your level, your tastes and your goals.',
  es: '¿Quieres iniciarte o avanzar en guitarra, bajo, DJ o producción musical? Cada clase es personalizada según tu nivel, tus gustos musicales y tus objetivos.',
  it: 'Vuoi iniziare o migliorare con la chitarra, il basso, il DJing o la produzione musicale? Ogni lezione è personalizzata in base al tuo livello, ai tuoi gusti musicali e ai tuoi obiettivi.',
};

const paragraphByLocale = {
  fr: 'Nous construisons ensemble un parcours adapté à votre personnalité musicale : jouer vos morceaux préférés, développer votre technique, improviser, composer, enregistrer ou créer votre propre musique.',
  en: 'Together we shape a path that fits your musical personality: playing your favourite tracks, sharpening your technique, improvising, composing, recording or creating your own music.',
  es: 'Construimos juntos un recorrido a la medida de tu personalidad musical: tocar tus temas favoritos, perfeccionar tu técnica, improvisar, componer, grabar o crear tu propia música.',
  it: 'Costruiamo insieme un percorso su misura per la tua personalità musicale: suonare i tuoi brani preferiti, sviluppare la tecnica, improvvisare, comporre, registrare o creare la tua musica.',
};

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="hero-individuals" id="individuels">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('individual.eyebrow')}
          title={titleByLocale[locale] || titleByLocale.fr}
          lede={ledeByLocale[locale] || ledeByLocale.fr}
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
