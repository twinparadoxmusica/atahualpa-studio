'use client';
import React from 'react';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';

const GroupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="9" cy="9" r="3" />
    <circle cx="17" cy="10" r="2.5" />
    <path d="M3 19a6 6 0 0 1 12 0" />
    <path d="M14 19a4 4 0 0 1 7 0" />
  </svg>
);

const IndividualIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 18V6l11-2v12" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);

const groupBodyByLocale = {
  fr: (
    <>
      <p>
        Un atelier <b>ludique</b> et <b>collectif</b> pour les enfants,
        en <b>petits groupes de 3 à 4 élèves</b>. Les enfants découvrent
        plusieurs instruments — <b>guitare</b>, <b>basse</b>,{' '}
        <b>batterie</b>, <b>clavier</b>, <b>synthétiseur</b> — et
        apprennent en jouant des morceaux adaptés à leur âge et à leurs
        goûts.
      </p>
      <p>
        L’objectif : développer l’<b>écoute</b>, le <b>rythme</b>, la{' '}
        <b>coordination</b> et le <b>plaisir de jouer ensemble</b>.
      </p>
    </>
  ),
  en: (
    <>
      <p>
        A <b>fun</b>, <b>collective</b> workshop for children, in{' '}
        <b>small groups of 3 to 4 students</b>. Kids discover several
        instruments — <b>guitar</b>, <b>bass</b>, <b>drums</b>,{' '}
        <b>keyboard</b>, <b>synth</b> — and learn by playing songs
        chosen for their age and tastes.
      </p>
      <p>
        The goal: developing <b>listening</b>, <b>rhythm</b>,{' '}
        <b>coordination</b> and the <b>joy of playing together</b>.
      </p>
    </>
  ),
  es: (
    <>
      <p>
        Un taller <b>lúdico</b> y <b>colectivo</b> para niños, en{' '}
        <b>grupos reducidos de 3 a 4 alumnos</b>. Los niños descubren
        varios instrumentos — <b>guitarra</b>, <b>bajo</b>,{' '}
        <b>batería</b>, <b>teclado</b>, <b>sintetizador</b> — y
        aprenden tocando temas adaptados a su edad y a sus gustos.
      </p>
      <p>
        El objetivo: desarrollar la <b>escucha</b>, el <b>ritmo</b>, la{' '}
        <b>coordinación</b> y el <b>placer de tocar juntos</b>.
      </p>
    </>
  ),
  it: (
    <>
      <p>
        Un laboratorio <b>ludico</b> e <b>collettivo</b> per bambini, in{' '}
        <b>piccoli gruppi di 3-4 allievi</b>. I bambini scoprono diversi
        strumenti — <b>chitarra</b>, <b>basso</b>, <b>batteria</b>,{' '}
        <b>tastiera</b>, <b>sintetizzatore</b> — e imparano suonando
        brani adatti alla loro età e ai loro gusti.
      </p>
      <p>
        L’obiettivo: sviluppare l’<b>ascolto</b>, il <b>ritmo</b>, la{' '}
        <b>coordinazione</b> e il <b>piacere di suonare insieme</b>.
      </p>
    </>
  ),
};

const individualBodyByLocale = {
  fr: (
    <>
      <p>
        Des cours personnalisés pour progresser à votre rythme à la{' '}
        <b>guitare</b>, à la <b>basse</b>, au <b>DJing</b> ou dans la{' '}
        <b>production musicale</b>. Nous partons de vos morceaux
        préférés pour travailler la <b>technique</b>, le <b>son</b>, le{' '}
        <b>rythme</b>, l’<b>improvisation</b>, la <b>composition</b> ou
        la <b>production musicale</b> selon vos envies.
      </p>
    </>
  ),
  en: (
    <>
      <p>
        Personalized lessons to progress at your own pace on{' '}
        <b>guitar</b>, <b>bass</b>, <b>DJing</b> or in{' '}
        <b>music production</b>. We start from your favourite tracks to
        work on <b>technique</b>, <b>tone</b>, <b>rhythm</b>,{' '}
        <b>improvisation</b>, <b>composition</b> or <b>production</b>{' '}
        — whatever fits you.
      </p>
    </>
  ),
  es: (
    <>
      <p>
        Clases personalizadas para avanzar a tu ritmo en <b>guitarra</b>
        , <b>bajo</b>, <b>DJ</b> o en <b>producción musical</b>.
        Partimos de tus temas favoritos para trabajar la <b>técnica</b>
        , el <b>sonido</b>, el <b>ritmo</b>, la <b>improvisación</b>, la{' '}
        <b>composición</b> o la <b>producción musical</b> según tus
        ganas.
      </p>
    </>
  ),
  it: (
    <>
      <p>
        Lezioni personalizzate per progredire al tuo ritmo con la{' '}
        <b>chitarra</b>, il <b>basso</b>, il <b>DJing</b> o nella{' '}
        <b>produzione musicale</b>. Partiamo dai tuoi brani preferiti
        per lavorare su <b>tecnica</b>, <b>suono</b>, <b>ritmo</b>,{' '}
        <b>improvvisazione</b>, <b>composizione</b> o{' '}
        <b>produzione musicale</b> in base ai tuoi desideri.
      </p>
    </>
  ),
};

export default function Hero() {
  const { locale, t } = useLanguage();

  const lessons = [
    {
      Icon: GroupIcon,
      title: t('lecons.hero.card.group.title'),
      href: '#groupes',
      cta: t('lecons.hero.card.group.cta'),
      body: groupBodyByLocale[locale] || groupBodyByLocale.fr,
    },
    {
      Icon: IndividualIcon,
      title: t('lecons.hero.card.individual.title'),
      href: '#individuels',
      cta: t('lecons.hero.card.individual.cta'),
      body: individualBodyByLocale[locale] || individualBodyByLocale.fr,
    },
  ];

  return (
    <section
      id="lecons"
      className="lecons-hero"
      aria-labelledby="lecons-hero-title"
    >
      <Container variant="default" className="lecons-hero__inner">
        <span className="lecons-hero__eyebrow">
          {t('lecons.hero.eyebrow')}
        </span>
        <h1 id="lecons-hero-title" className="lecons-hero__title">
          {t('lecons.hero.title')}
        </h1>
        <p className="lecons-hero__lede">{t('lecons.hero.lede')}</p>

        <ul className="lecons-hero__cards">
          {lessons.map((item) => (
            <li className="lecons-card" key={item.title}>
              <span className="lecons-card__icon" aria-hidden="true">
                <item.Icon />
              </span>
              <h3 className="lecons-card__title">{item.title}</h3>
              <div className="lecons-card__body">{item.body}</div>
              <a className="lecons-card__cta" href={item.href}>
                {item.cta}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
