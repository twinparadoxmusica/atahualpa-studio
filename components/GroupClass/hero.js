'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';
import PhotoCarousel from '../PhotoCarousel';

const imagesCarousel = [
  '/assets/groups/group-class-1.jpg',
  '/assets/groups/group-class-2.jpg',
  '/assets/groups/group-class-3.jpg',
  '/assets/groups/group-class-4.jpg',
  '/assets/groups/group-class-5.jpg',
  '/assets/groups/group-class-6.jpg',
  '/assets/groups/group-class-7.jpg',
  '/assets/groups/group-class-8.jpg',
  '/assets/groups/group-class-9.jpg',
  '/assets/groups/group-class-10.jpg',
];

const ledeByLocale = {
  fr: (
    <>
      Atelier hebdomadaire dès 5 ans, en petits groupes : <b>guitare</b>,{' '}
      <b>basse</b>, <b>piano</b>, <b>batterie</b> et <b>synthétiseur</b>. Une
      approche ludique, pratique et multilingue (<b>FR</b>/<b>EN</b>/<b>ES</b>/
      <b>IT</b>), sans solfège imposé. Les enfants jouent ensemble et
      enregistrent une chanson en studio !
    </>
  ),
  en: (
    <>
      Weekly workshop from age 5, in small groups: <b>guitar</b>, <b>bass</b>,{' '}
      <b>piano</b>, <b>drums</b> and <b>synth</b>. A fun, hands-on,
      multilingual approach (<b>FR</b>/<b>EN</b>/<b>ES</b>/<b>IT</b>), with no
      forced music theory. Kids play together and record a song in the studio!
    </>
  ),
  es: (
    <>
      Taller semanal a partir de los 5 años, en grupos pequeños:{' '}
      <b>guitarra</b>, <b>bajo</b>, <b>piano</b>, <b>batería</b> y{' '}
      <b>sintetizador</b>. Un enfoque lúdico, práctico y multilingüe (
      <b>FR</b>/<b>EN</b>/<b>ES</b>/<b>IT</b>), sin solfeo impuesto. ¡Los niños
      tocan juntos y graban una canción en el estudio!
    </>
  ),
  it: (
    <>
      Laboratorio settimanale dai 5 anni, in piccoli gruppi: <b>chitarra</b>,{' '}
      <b>basso</b>, <b>pianoforte</b>, <b>batteria</b> e{' '}
      <b>sintetizzatore</b>. Un approccio ludico, pratico e multilingue (
      <b>FR</b>/<b>EN</b>/<b>ES</b>/<b>IT</b>), senza solfeggio imposto. I
      bambini suonano insieme e registrano una canzone in studio!
    </>
  ),
};

const scheduleByLocale = {
  fr: (
    <>
      Réservation flexible du <b>lundi au vendredi</b>, <b>15 h – 20 h</b> ·
      Cours d’essai <b>gratuit</b>.
    </>
  ),
  en: (
    <>
      Flexible booking <b>Monday to Friday</b>, <b>3pm – 8pm</b> · Trial lesson{' '}
      <b>free</b>.
    </>
  ),
  es: (
    <>
      Reserva flexible de <b>lunes a viernes</b>, <b>15 h – 20 h</b> · Clase
      de prueba <b>gratuita</b>.
    </>
  ),
  it: (
    <>
      Prenotazione flessibile dal <b>lunedì al venerdì</b>,{' '}
      <b>15:00 – 20:00</b> · Lezione di prova <b>gratuita</b>.
    </>
  ),
};

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="hero-group" id="groupes">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('group.eyebrow')}
          title={t('group.title')}
          lede={ledeByLocale[locale] || ledeByLocale.fr}
          align="left"
        />
        <p className="hero-group__schedule">
          {scheduleByLocale[locale] || scheduleByLocale.fr}
        </p>

        <div className="hero-group__carousel">
          <PhotoCarousel
            images={imagesCarousel}
            slidesPerView={4}
            height="300px"
          />
        </div>

        <div className="hero-group__note">
          <h3>{t('group.note.title')}</h3>
          <p>{t('group.note.body')}</p>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83194909/calendar/12696798"
          className="hero-group__cta"
        >
          {t('group.cta')}
          <span aria-hidden="true">→</span>
        </a>
      </Container>
    </section>
  );
}
