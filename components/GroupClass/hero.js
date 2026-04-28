import React from 'react';
import { Container, SectionHeader } from '../ui';
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
    <section className="hero-group" id="groupes">
      <Container variant="default">
        <SectionHeader
          eyebrow="Cours en groupe"
          title="L’atelier multi-instrumental"
          lede={
            <>
              Atelier hebdomadaire dès 5 ans, en petits groupes :{' '}
              <b>guitare</b>, <b>basse</b>, <b>piano</b>, <b>batterie</b> et{' '}
              <b>synthétiseur</b>. Une approche ludique, pratique et multilingue
              (<b>FR</b>/<b>EN</b>/<b>ES</b>/<b>IT</b>), sans solfège imposé.
              Les enfants jouent ensemble et enregistrent une chanson en studio !
            </>
          }
          align="left"
        />
        <p className="hero-group__schedule">
          Réservation flexible du <b>lundi au vendredi</b>, <b>15 h – 20 h</b> ·
          Cours d’essai <b>gratuit</b>.
        </p>

        <div className="hero-group__carousel">
          <PhotoCarousel
            images={imagesCarousel}
            slidesPerView={4}
            height="300px"
          />
        </div>

        <div className="hero-group__note">
          <h3>Groupes réduits</h3>
          <p>
            Maximum 4 enfants par groupe pour garantir un suivi personnalisé et
            une ambiance bienveillante.
          </p>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.acuityscheduling.com/schedule/d9853b7c/appointment/83194909/calendar/12696798"
          className="hero-group__cta"
        >
          Réserve ton cours d’essai gratuit
          <span aria-hidden="true">→</span>
        </a>
      </Container>
    </section>
  );
}
