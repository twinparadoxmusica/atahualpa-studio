import React from 'react';
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

export default function Hero() {
  return (
    <section className="section hero-group" id="groupes">
      <div>
        <h2>Atelier Multi-Instrumental en petits groupes</h2>
        <p className="group-description">
          Atelier hebdomadaire dès 5 ans, en petits groupes : <b>guitare</b>,
          <b> basse</b>, <b>piano</b>, <b>batterie</b> et <b>synthétiseur</b>.
          Une approche ludique, pratique et multilingue (<b>FR</b>/<b>EN</b>/
          <b>ES</b>/<b>IT</b>), sans solfège imposé. Les enfants jouent ensemble
          et enregistrent une chanson en studio !
        </p>{' '}
        <p className="text-align--left">
          Réservation flexible du Lundi au Vendredi, <b>15h-20h</b> - Cours
          d’essai <b>gratuit</b>.
        </p>
      </div>
      <div className="margin-bottom-lg">
        <PhotoCarousel
          images={imagesCarousel}
          slidesPerView={4}
          height="300px"
        />
      </div>
      <div className="text-align--center">
        <h3>Groupes Réduits</h3>
        <p>
          Maximum 4 enfants par groupe pour garantir un suivi personnalisé et
          une ambiance bienveillante.
        </p>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.acuityscheduling.com/schedule/d9853b7c"
      >
        <button className="offer-reserve">
          <b>Réserve ton cours d’essai gratuit</b>
        </button>
      </a>
    </section>
  );
}
