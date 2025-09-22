'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Bio = ({ hideText }) => {
  const [expanded, setExpanded] = useState(false);

  const shortBio = (
    <>
      Je suis <b>Ezequiel Cappellano</b>, musicien italo-argentin installé à
      Genève depuis huit ans. Mon parcours traverse le rock, la musique
      électronique, la musique contemporaine et classique, le folklore
      sud-américain, le tango, le jazz et la musique hindoustanie, m’offrant une
      palette sonore aussi large que variée.
      {!expanded ? (
        <>
          {'... '}
          <a
            className="btn-link"
            onClick={() => setExpanded(true)}
            aria-expanded={expanded}
            aria-controls="full-bio"
          >
            <b>Lire plus</b>
          </a>
        </>
      ) : null}
    </>
  );

  const fullBioParagraphs = (
    <p>
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
      dirige mon <b>Atahualpa Music Studio</b> à Genève, où j’enseigne depuis
      quatre ans, compose, produis et réalise des captations audio et vidéo pour
      la musique classique, notamment pour le Conservatoire de Musique de Genève
      et l’association Genève Musicale.
      <br />
      <br />
      <b>Ma vision</b>: bâtir des passerelles entre traditions et modernité,
      mêler textures électroniques, instruments acoustiques et styles variés
      pour façonner de nouvelles sonorités. L’innovation est pour moi
      essentielle : la musique est un espace d’expérimentation et de libre
      expression où chaque projet devient l’occasion d’approfondir ma
      personnalité de compositeur.
      <a
        className="btn-link"
        onClick={() => setExpanded(false)}
        aria-expanded={expanded}
        aria-controls="full-bio"
      >
        <b> Lire moins</b>
      </a>
    </p>
  );

  return (
    <div id="bio" className="bio margin-bottom-lg">
      <div className="bio-container">
        <img
          className="bio-image"
          src="/assets/ezequiel-cappellano-professeur.jpg"
          alt="Ezequiel Cappellano"
        />
        <div className="bio-description">
          <h3>Fondateur d’Atahualpa Music Studio</h3>
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
