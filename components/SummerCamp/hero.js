'use client';
import React from 'react';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './hero.css';

const WHATSAPP_BASE = 'https://wa.me/41786917441';

const bodyByLocale = {
  fr: (
    <>
      <p className="camp-hero__body">
        Pendant les <b>vacances d’été</b>, l’atelier multi-instrumental se
        décline en <b>format stage</b> : une semaine pour découvrir{' '}
        <b>plusieurs instruments</b>, jouer en groupe et créer de la musique
        dans un <b>vrai studio</b>.
      </p>
      <p className="camp-hero__body">
        Les enfants explorent la <b>guitare</b>, la <b>basse</b>, le{' '}
        <b>piano</b>, la <b>batterie</b> et les <b>synthétiseurs</b>, avec des
        activités adaptées à leur âge et à leur niveau.
      </p>
      <p className="camp-hero__body">
        C’est aussi une excellente manière de découvrir l’approche{' '}
        <b>Atahualpa</b> avant de rejoindre un groupe régulier à la rentrée.
      </p>
    </>
  ),
  en: (
    <>
      <p className="camp-hero__body">
        During the <b>summer holidays</b>, the multi-instrument workshop becomes
        a <b>holiday camp</b>: one week to discover <b>several instruments</b>,
        play together and create music in a <b>real studio</b>.
      </p>
      <p className="camp-hero__body">
        Kids explore <b>guitar</b>, <b>bass</b>, <b>piano</b>, <b>drums</b> and{' '}
        <b>synths</b>, with activities tailored to their age and level.
      </p>
      <p className="camp-hero__body">
        It’s also a great way to discover the <b>Atahualpa</b> approach before
        joining a regular group in September.
      </p>
    </>
  ),
  es: (
    <>
      <p className="camp-hero__body">
        Durante las <b>vacaciones de verano</b>, el taller multi-instrumental se
        convierte en un <b>campamento</b>: una semana para descubrir{' '}
        <b>varios instrumentos</b>, tocar en grupo y crear música en un{' '}
        <b>verdadero estudio</b>.
      </p>
      <p className="camp-hero__body">
        Los niños exploran la <b>guitarra</b>, el <b>bajo</b>, el <b>piano</b>,
        la <b>batería</b> y los <b>sintetizadores</b>, con actividades adaptadas
        a su edad y su nivel.
      </p>
      <p className="camp-hero__body">
        También es una excelente forma de descubrir el enfoque{' '}
        <b>Atahualpa</b> antes de incorporarse a un grupo regular en septiembre.
      </p>
    </>
  ),
  it: (
    <>
      <p className="camp-hero__body">
        Durante le <b>vacanze estive</b>, il laboratorio multi-strumentale
        diventa un <b>campo estivo</b>: una settimana per scoprire{' '}
        <b>più strumenti</b>, suonare in gruppo e creare musica in un{' '}
        <b>vero studio</b>.
      </p>
      <p className="camp-hero__body">
        I bambini esplorano la <b>chitarra</b>, il <b>basso</b>, il{' '}
        <b>pianoforte</b>, la <b>batteria</b> e i <b>sintetizzatori</b>, con
        attività adatte alla loro età e al loro livello.
      </p>
      <p className="camp-hero__body">
        È anche un ottimo modo per scoprire l’approccio <b>Atahualpa</b> prima
        di unirsi a un gruppo regolare a settembre.
      </p>
    </>
  ),
};

const ctaMessageByLocale = {
  fr: 'Bonjour, je souhaite recevoir des informations sur les disponibilités du stage d’été multi-instrumental. Mon enfant a _ ans. Nous sommes disponibles plutôt la/les semaine(s) suivante(s) : _. Merci !',
  en: 'Hello, I would like to receive information about availability for the multi-instrument summer camp. My child is _ years old. We are available preferably during the following week(s): _. Thank you!',
  es: 'Hola, me gustaría recibir información sobre la disponibilidad del campamento de verano multi-instrumental. Mi hijo/a tiene _ años. Estamos disponibles preferentemente la/s siguiente/s semana/s: _. ¡Gracias!',
  it: 'Buongiorno, vorrei ricevere informazioni sulla disponibilità del campo estivo multi-strumentale. Mio figlio/a ha _ anni. Siamo disponibili preferibilmente la/le seguente/i settimana/e: _. Grazie!',
};

export default function CampHero() {
  const { locale, t } = useLanguage();
  const body = bodyByLocale[locale] || bodyByLocale.fr;
  const message = ctaMessageByLocale[locale] || ctaMessageByLocale.fr;
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <section className="camp-hero" id="stage-ete">
      <Container variant="default">
        <div className="camp-hero__inner">
          <span className="camp-hero__badge">{t('camp.badge')}</span>
          <h2 className="camp-hero__title">{t('camp.title')}</h2>

          {body}

          <ul className="camp-hero__cards">
            <li className="camp-hero__card">
              <h3>{t('camp.card1.title')}</h3>
              <p>{t('camp.card1.body')}</p>
            </li>
            <li className="camp-hero__card">
              <h3>{t('camp.card2.title')}</h3>
              <p>{t('camp.card2.body')}</p>
            </li>
            <li className="camp-hero__card">
              <h3>{t('camp.card3.title')}</h3>
              <p>{t('camp.card3.body')}</p>
            </li>
          </ul>

          <div className="camp-hero__actions">
            <a
              className="camp-hero__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('camp.cta')}
              <span aria-hidden="true">→</span>
            </a>
            <p className="camp-hero__note">{t('camp.cta.note')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
