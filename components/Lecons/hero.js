'use client';
import React from 'react';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';

const groupBodyByLocale = {
  fr: (
    <>
      Libère l’<b>énergie musicale</b> de ton enfant grâce à un{' '}
      <b>atelier ludique</b>, <b>collectif</b> et <b>multi-instrumental</b> en{' '}
      <b>petits groupes</b> (max. 4). Les <b>enfants</b> changent régulièrement
      d’instrument, ce qui développe leur <b>écoute</b>, leur{' '}
      <b>coordination</b> et leur <b>compréhension globale de la musique</b>.
    </>
  ),
  en: (
    <>
      Unleash your child’s <b>musical energy</b> in a <b>fun</b>,{' '}
      <b>collective</b> and <b>multi-instrument</b> workshop in{' '}
      <b>small groups</b> (max 4). <b>Kids</b> rotate instruments regularly,
      which sharpens their <b>listening</b>, <b>coordination</b> and{' '}
      <b>overall understanding of music</b>.
    </>
  ),
  es: (
    <>
      Libera la <b>energía musical</b> de tu hijo con un{' '}
      <b>taller lúdico</b>, <b>colectivo</b> y <b>multi-instrumental</b> en{' '}
      <b>grupos pequeños</b> (máx. 4). Los <b>niños</b> cambian regularmente de
      instrumento, lo que desarrolla su <b>escucha</b>, su{' '}
      <b>coordinación</b> y su <b>comprensión global de la música</b>.
    </>
  ),
  it: (
    <>
      Libera l’<b>energia musicale</b> di tuo figlio grazie a un{' '}
      <b>laboratorio ludico</b>, <b>collettivo</b> e <b>multi-strumentale</b>{' '}
      in <b>piccoli gruppi</b> (max. 4). I <b>bambini</b> cambiano regolarmente
      strumento, sviluppando l’<b>ascolto</b>, la <b>coordinazione</b> e la{' '}
      <b>comprensione globale della musica</b>.
    </>
  ),
};

const individualBodyByLocale = {
  fr: (
    <>
      <b>Acheter un instrument</b>, regarder des <b>tutos YouTube</b>… et{' '}
      <b>stagner</b>. <b>Apprendre seul</b> sans <b>parcours personnalisé</b> ni{' '}
      <b>retour d’un pro</b>, c’est prendre le <b>risque</b> d’adopter de
      mauvaises habitudes. Tu mérites mieux qu’une <b>méthode générique</b> :
      ton <b>jeu</b> est unique, ton <b>parcours</b> doit l’être aussi !
    </>
  ),
  en: (
    <>
      <b>Buying an instrument</b>, watching <b>YouTube tutorials</b>… and{' '}
      <b>plateauing</b>. <b>Learning alone</b> without a <b>tailored path</b> or{' '}
      <b>professional feedback</b> means risking bad habits. You deserve better
      than a <b>generic method</b>: your <b>playing</b> is unique, your{' '}
      <b>path</b> should be too!
    </>
  ),
  es: (
    <>
      <b>Comprar un instrumento</b>, mirar <b>tutoriales de YouTube</b>… y{' '}
      <b>estancarte</b>. <b>Aprender solo</b>, sin un{' '}
      <b>itinerario personalizado</b> ni el <b>feedback de un profesional</b>,
      es arriesgarse a adquirir malos hábitos. Mereces algo mejor que un{' '}
      <b>método genérico</b>: tu <b>forma de tocar</b> es única, ¡tu{' '}
      <b>recorrido</b> también debe serlo!
    </>
  ),
  it: (
    <>
      <b>Comprare uno strumento</b>, guardare <b>tutorial su YouTube</b>… e{' '}
      <b>fermarti</b>. <b>Imparare da solo</b> senza un{' '}
      <b>percorso personalizzato</b> né il <b>parere di un professionista</b>{' '}
      significa rischiare di prendere cattive abitudini. Meriti di meglio di un{' '}
      <b>metodo generico</b>: il tuo <b>modo di suonare</b> è unico, anche il
      tuo <b>percorso</b> deve esserlo!
    </>
  ),
};

export default function Hero() {
  const { locale, t } = useLanguage();

  const lessons = [
    {
      icon: '🥁',
      title: t('lecons.hero.card.group.title'),
      href: '/lecons-musique#groupes',
      body: groupBodyByLocale[locale] || groupBodyByLocale.fr,
    },
    {
      icon: '🎸',
      title: t('lecons.hero.card.individual.title'),
      href: '/lecons-musique#individuels',
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
        <span className="lecons-hero__eyebrow">{t('lecons.hero.eyebrow')}</span>
        <h1 id="lecons-hero-title" className="lecons-hero__title">
          {t('lecons.hero.title')}
        </h1>
        <p className="lecons-hero__lede">{t('lecons.hero.lede')}</p>

        <ul className="lecons-hero__cards">
          {lessons.map((item) => (
            <li className="lecons-card" key={item.title}>
              <span className="lecons-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="lecons-card__title">{item.title}</h3>
              <p className="lecons-card__body">{item.body}</p>
              <a className="lecons-card__cta" href={item.href}>
                {t('common.readMore')}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
