import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section id="lecons" className="lecons margin-bottom-lg">
      <div className="section lecons-container">
        <h2 className="margin-bottom-sm">Leçons De Musique</h2>
        <p className="margin-bottom-lg">
          Avec une solide expérience en enseignement et en pratique musicale,
          j’adapte mes cours aux besoins de chaque élève : accords, mélodies,
          harmonie, solfège, improvisation, arrangements ou composition. Mon
          approche privilégie avant tout le plaisir d’apprendre et la
          motivation.
        </p>
        <div className="lesson-boxes">
          <div className="lesson-card">
            <h3>🥁 Cours en groupe</h3>
            <p>
              Une approche collective et ludique, idéale pour apprendre en
              s’amusant et partager la musique avec d’autres.
            </p>
            <a href="/lecons-musique#groupes" className="btn-secondary">
              Lire plus
            </a>
          </div>
          <div className="lesson-card">
            <h3>🎸 Cours individuels</h3>
            <p>
              Un accompagnement personnalisé, adapté à ton rythme et tes
              objectifs pour progresser efficacement.
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
