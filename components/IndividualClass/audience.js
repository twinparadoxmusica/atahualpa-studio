import React from 'react';
import './audience.css';

export default function AudienceSection() {
  return (
    <div className="audience-section">
      <h2>À qui s'adresse l'atelier</h2>

      <ul>
        <li>
          Débutants passionnés, intermédiaires motivés, ou musiciens avancés
          souhaitant affiner leur jeu.
        </li>
        <li>
          À partir de 7 ans, cours en français, espagnol, anglais ou italien.
        </li>
      </ul>

      <h3>🎶 Ce que tu vas apprendre</h3>
      <ul>
        <li>
          Techniques modernes et traditionnelles adaptées à ton style (rock,
          pop, bossa-nova, blues, folklore, tango, etc.).
        </li>
        <li>
          Développement du son personnel avec du matériel pro (pédales, amplis,
          Kemper, logiciels comme Ableton Live, etc).
        </li>
        <li>
          Approches de l’improvisation et de la composition, si tu es
          intéressé(e).
        </li>
        <li>
          Utilisation d'outils d’enregistrement pour progresser encore plus
          vite.
        </li>
      </ul>

      <h3>⚡ Comment ça se passe</h3>
      <ul>
        <li>
          Cours 100% pratiques, orientés morceaux et styles choisis ensemble.
        </li>
        <li>
          Flexibilité totale : pas de programme figé, le parcours évolue selon
          ton rythme et tes objectifs.
        </li>
      </ul>

      <h3>🎸 Ton coach</h3>
      <ul>
        <li>
          13 ans d’expérience en enseignement, formation universitaire en
          composition (Hochschule der Künste Bern & Conservatoire Populaire de
          Genève).
        </li>
        <li>
          Guitariste et bassiste actif, également formé auprès de Dave Colquhoun
          (guitariste de Rick Wakeman et pro de session UK).
        </li>
      </ul>
    </div>
  );
}
