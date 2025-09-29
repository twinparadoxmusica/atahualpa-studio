import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section id="lecons" className="lecons margin-bottom-lg">
      <div className="section lecons-container">
        <h2 className="margin-bottom-sm">Leçons De Musique</h2>
        <p className="hero-text margin-bottom-xs">
          Apprends la musique autrement Ici, pas de méthode figée : chaque cours
          est pensé pour toi, selon tes envies, tes goûts et tes objectifs.
        </p>
        <div className="lesson-boxes">
          <div className="lesson-card">
            <h3>
              🥁 <b>Cours en groupe</b>
            </h3>
            <p>
              Libère l’<b>énergie musicale</b> de ton enfant grâce à un{' '}
              <b>atelier ludique</b>, <b>collectif</b> et{' '}
              <b>multi-instrumental</b> en <b>petits groupes</b> (max. 4). Ici,
              pas question de rester bloqué sur un seul <b>instrument</b> ! Les{' '}
              <b>enfants</b> changent régulièrement, ce qui développe leur{' '}
              <b>écoute</b>, leur <b>coordination</b>, et leur{' '}
              <b>compréhension globale de la musique</b>.
            </p>
            <a href="/lecons-musique#groupes" className="btn-secondary">
              Lire plus
            </a>
          </div>
          <div className="lesson-card">
            <h3>
              🎸 <b>Cours individuels</b>
            </h3>
            <p>
              <b>Acheter un instrument</b>, regarder des <b>tutos YouTube</b>…
              et <b>stagner</b>. <b>Apprendre seul</b> sans{' '}
              <b>parcours personnalisé</b> ni <b>retour d’un pro</b>, c’est
              prendre le <b>risque</b> de perdre du <b>temps</b>, d’adopter de{' '}
              <b>mauvaises habitudes</b> et de se <b>décourager</b>. Tu mérites
              mieux qu’une <b>méthode générique</b> : ton <b>jeu</b> est unique,
              ton <b>parcours</b> doit l’être aussi!
            </p>
            <a href="/lecons-musique#individuels" className="btn-secondary">
              Lire plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
