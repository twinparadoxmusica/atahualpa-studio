'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const shortBioByLocale = {
  fr: (
    <>
      Je suis <b>Ezequiel Cappellano</b>, musicien italo-argentin installé à
      Genève depuis huit ans, et j’ai fondé <b>Atahualpa Music Studio</b> avec
      une petite équipe de musiciens et techniciens passionnés qui m’entourent
      au quotidien. Mon parcours traverse le rock, la musique électronique, la
      musique contemporaine et classique, le folklore sud-américain, le tango,
      le jazz et la musique hindoustanie, m’offrant une palette sonore aussi
      large que variée.
    </>
  ),
  en: (
    <>
      I’m <b>Ezequiel Cappellano</b>, an Italian-Argentinian musician based in
      Geneva for eight years, and I founded <b>Atahualpa Music Studio</b> with a
      small team of passionate musicians and technicians who work alongside me
      every day. My path runs through rock, electronic music, contemporary and
      classical music, South-American folklore, tango, jazz and Hindustani
      music — giving me a sonic palette as wide as it is varied.
    </>
  ),
};

const fullBioByLocale = {
  fr: (
    <>
      Formé à la guitare électrique pendant dix ans avec <b>Diego Ramón</b> en
      Argentine, j’ai étudié la musique contemporaine au Conservatoire Populaire
      de Genève avec <b>Arturo Corrales</b>, puis obtenu un Bachelor et un
      Master en composition à la <b>Haute École des Arts de Berne (HKB)</b>{' '}
      auprès de <b>Xavier Dayer</b>, <b>Gilbert Nouno</b> et{' '}
      <b>Simon Steen-Andersen</b>. J’ai aussi étudié la guitare classique avec{' '}
      <b>Elena Casoli</b>, approfondi la prise de son et le mixage avec{' '}
      <b>Benoît Piccand</b>, exploré le sitar avec <b>Ikhlaq Hussain</b>, et je
      poursuis aujourd’hui ma formation en guitare électrique avec{' '}
      <b>Dave Colquhoun</b>, guitariste de <b>Rick Wakeman</b> (<i>"Yes"</i>).
      <br />
      <br />
      Après mes études à la HKB, je me suis consacré à temps plein à
      <b> Twin Paradox</b>, un duo de musique électronique où nous fusionnons
      l’énergie brute du rock avec l’essence hypnotique de la techno, mêlant
      riffs et mélodies à une base électronique puissante. En parallèle, je
      dirige <b>Atahualpa Music Studio</b> à Genève, entouré d’une{' '}
      <b>petite équipe</b> de professeurs, ingénieurs du son et techniciens
      vidéo avec qui nous enseignons depuis quatre ans, composons, produisons
      et réalisons des captations audio et vidéo pour la musique classique,
      notamment pour le Conservatoire de Musique de Genève et l’association
      Genève Musicale.
      <br />
      <br />
      <b>Notre vision</b> : bâtir des passerelles entre traditions et
      modernité, mêler textures électroniques, instruments acoustiques et
      styles variés pour façonner de nouvelles sonorités. L’innovation est pour
      nous essentielle : la musique est un espace d’expérimentation et de libre
      expression, et chaque projet — qu’il vienne d’un élève ou d’un artiste —
      devient l’occasion d’avancer ensemble.
    </>
  ),
  en: (
    <>
      Trained on electric guitar for ten years with <b>Diego Ramón</b> in
      Argentina, I studied contemporary music at the Conservatoire Populaire of
      Geneva with <b>Arturo Corrales</b>, then earned a Bachelor’s and a
      Master’s in composition at the <b>Bern University of the Arts (HKB)</b>{' '}
      with <b>Xavier Dayer</b>, <b>Gilbert Nouno</b> and{' '}
      <b>Simon Steen-Andersen</b>. I also studied classical guitar with{' '}
      <b>Elena Casoli</b>, went deeper into recording and mixing with{' '}
      <b>Benoît Piccand</b>, explored the sitar with <b>Ikhlaq Hussain</b>, and
      I keep training on electric guitar today with <b>Dave Colquhoun</b>,
      guitarist of <b>Rick Wakeman</b> (<i>"Yes"</i>).
      <br />
      <br />
      After my studies at HKB, I went full-time on
      <b> Twin Paradox</b>, an electronic music duo where we fuse the raw
      energy of rock with the hypnotic essence of techno, weaving riffs and
      melodies into a powerful electronic base. In parallel, I run{' '}
      <b>Atahualpa Music Studio</b> in Geneva, surrounded by a{' '}
      <b>small team</b> of teachers, sound engineers and video technicians
      with whom I’ve been teaching for four years, composing, producing and
      capturing classical music projects — notably for the Geneva Conservatory
      and the Geneva Musicale association.
      <br />
      <br />
      <b>Our vision</b>: to build bridges between tradition and modernity,
      to weave electronic textures, acoustic instruments and varied styles
      into new sonic shapes. Innovation matters to us: music is a space for
      experimentation and free expression, and every project — from a student
      or a fellow artist — is a chance to move forward together.
    </>
  ),
};

const Bio = ({ hideText }) => {
  const { locale, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const shortBio = (
    <>
      {shortBioByLocale[locale] || shortBioByLocale.fr}
      {!expanded ? (
        <>
          {'... '}
          <a
            className="btn-link"
            onClick={() => setExpanded(true)}
            aria-expanded={expanded}
            aria-controls="full-bio"
          >
            <b>{t('common.readMore')}</b>
          </a>
        </>
      ) : null}
    </>
  );

  const fullBioParagraphs = (
    <p>
      {fullBioByLocale[locale] || fullBioByLocale.fr}
      <a
        className="btn-link"
        onClick={() => setExpanded(false)}
        aria-expanded={expanded}
        aria-controls="full-bio"
      >
        <b> {t('common.readLess')}</b>
      </a>
    </p>
  );

  return (
    <div id="bio" className="bio margin-bottom-lg">
      <div className="bio-container">
        <img
          className="bio-image"
          src="/assets/ezequiel-cappellano-professeur.jpg"
          alt={t('bio.image.alt')}
        />
        <div className="bio-description">
          <h3>{t('bio.title')}</h3>
          <p className="text-base leading-7 text-neutral-800">{shortBio}</p>
        </div>
      </div>
      {expanded ? <div className="full-bio">{fullBioParagraphs}</div> : null}
    </div>
  );
};

Bio.propTypes = {
  hideText: PropTypes.bool,
};

export default Bio;
