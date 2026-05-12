'use client';
import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import { buildWhatsAppUrl } from '../../constants/translations';
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
      Un atelier hebdomadaire pour enfants <b>dès 5 ans</b>, en{' '}
      <b>petits groupes de 3 à 4 élèves</b>. Les enfants découvrent
      plusieurs instruments — <b>guitare</b>, <b>basse</b>, <b>piano</b>
      , <b>batterie</b> et <b>synthétiseur</b> — et apprennent la
      musique en jouant ensemble, <b>sans solfège imposé</b>.
      <br />
      <br />
      L’approche est <b>pratique</b>, <b>ludique</b> et{' '}
      <b>multilingue</b> : les morceaux sont adaptés à leur âge, leurs
      goûts et leur niveau, avec la possibilité d’<b>enregistrer une
      chanson</b> en studio.
    </>
  ),
  en: (
    <>
      A weekly workshop for children <b>from age 5</b>, in{' '}
      <b>small groups of 3 to 4 students</b>. Kids discover several
      instruments — <b>guitar</b>, <b>bass</b>, <b>piano</b>,{' '}
      <b>drums</b> and <b>synth</b> — and learn music by playing
      together, <b>with no forced music theory</b>.
      <br />
      <br />
      The approach is <b>hands-on</b>, <b>playful</b> and{' '}
      <b>multilingual</b>: songs are picked for their age, tastes and
      level, with the option to <b>record a song</b> in the studio.
    </>
  ),
  es: (
    <>
      Un taller semanal para niños <b>a partir de 5 años</b>, en{' '}
      <b>grupos reducidos de 3 a 4 alumnos</b>. Los niños descubren
      varios instrumentos — <b>guitarra</b>, <b>bajo</b>, <b>piano</b>,{' '}
      <b>batería</b> y <b>sintetizador</b> — y aprenden música tocando
      juntos, <b>sin solfeo impuesto</b>.
      <br />
      <br />
      El enfoque es <b>práctico</b>, <b>lúdico</b> y <b>multilingüe</b>
      : los temas se adaptan a su edad, sus gustos y su nivel, con la
      posibilidad de <b>grabar una canción</b> en el estudio.
    </>
  ),
  it: (
    <>
      Un laboratorio settimanale per bambini <b>dai 5 anni</b>, in{' '}
      <b>piccoli gruppi di 3-4 allievi</b>. I bambini scoprono diversi
      strumenti — <b>chitarra</b>, <b>basso</b>, <b>pianoforte</b>,{' '}
      <b>batteria</b> e <b>sintetizzatore</b> — e imparano la musica
      suonando insieme, <b>senza solfeggio imposto</b>.
      <br />
      <br />
      L’approccio è <b>pratico</b>, <b>ludico</b> e <b>multilingue</b>:
      i brani sono adattati alla loro età, ai loro gusti e al loro
      livello, con la possibilità di <b>registrare una canzone</b> in
      studio.
    </>
  ),
};

export default function Hero() {
  const { locale, t } = useLanguage();

  const benefits = [
    {
      title: t('group.benefit1.title'),
      body: t('group.benefit1.body'),
    },
    {
      title: t('group.benefit2.title'),
      body: t('group.benefit2.body'),
    },
    {
      title: t('group.benefit3.title'),
      body: t('group.benefit3.body'),
    },
  ];

  const whatsAppHref = buildWhatsAppUrl(locale, 'trial');

  return (
    <section className="hero-group" id="groupes">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('group.eyebrow')}
          title={t('group.title')}
          lede={ledeByLocale[locale] || ledeByLocale.fr}
          align="left"
        />
        <p className="hero-group__schedule">{t('group.schedule')}</p>

        <div className="hero-group__carousel">
          <PhotoCarousel
            images={imagesCarousel}
            slidesPerView={4}
            height="300px"
          />
        </div>

        <ul className="hero-group__benefits">
          {benefits.map((benefit) => (
            <li className="hero-group__benefit" key={benefit.title}>
              <span
                className="hero-group__benefit-bullet"
                aria-hidden="true"
              />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hero-group__cta-wrap">
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-group__cta"
          >
            {t('group.cta')}
            <span aria-hidden="true">→</span>
          </a>
          <p className="hero-group__cta-helper">
            {t('group.cta.helper')}
          </p>
        </div>
      </Container>
    </section>
  );
}
