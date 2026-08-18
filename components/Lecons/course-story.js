'use client';

import React from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './course-story.css';

const WHATSAPP_BASE = 'https://wa.me/41772792514';

const contentByLocale = {
  fr: {
    trust: [
      ['👥', 'Petits groupes · maximum 4 élèves'],
      ['🌍', 'Cours en français, anglais, espagnol ou italien'],
      ['🎛️', 'Studio professionnel équipé'],
      ['🧭', 'Parcours structuré et personnalisé'],
      ['🎁', 'Cours d’essai gratuit pour l’atelier'],
    ],
    pedagogy: {
      eyebrow: 'Notre pédagogie',
      title: 'Apprendre en jouant, comprendre en faisant',
      lede: 'Une pratique vivante, guidée par des objectifs clairs et adaptée à chaque élève.',
      cards: [
        {
          icon: '🎸',
          title: 'Jouer dès le départ',
          body: 'On explore les instruments et les morceaux dès les premières séances, tout en développant l’écoute, le rythme, la coordination et la technique.',
        },
        {
          icon: '💡',
          title: 'Comprendre et créer',
          body: 'La théorie et le solfège sont intégrés progressivement à la pratique, lorsqu’ils deviennent utiles. L’improvisation et la composition ouvrent l’espace de création.',
        },
        {
          icon: '🎙️',
          title: 'Partager et progresser',
          body: 'Jouer avec d’autres, enregistrer des projets et réécouter son travail permettent de reconnaître le chemin parcouru. Le programme évolue selon les goûts, le niveau et les objectifs.',
        },
      ],
    },
    team: {
      eyebrow: 'L’équipe',
      title: 'Des musiciens qui enseignent et créent',
      paragraphs: [
        'Ezequiel Cappellano, musicien italo-argentin, fondateur et professeur, s’est formé à la composition à la Haute École des Arts de Berne (HKB), à la musique contemporaine au Conservatoire Populaire de Genève, ainsi qu’à la guitare, au sitar, à la prise de son et au mixage.',
        'Son parcours traverse le rock, les musiques électronique, contemporaine et classique, le folklore sud-américain, le tango, le jazz et la musique hindoustanie. Il travaille au quotidien avec une petite équipe de professeurs, ingénieurs du son et techniciens vidéo, tous musiciens actifs.',
      ],
      cta: 'Découvrir l’équipe et le studio',
      imageAlt:
        'Ezequiel Cappellano, fondateur et professeur à Atahualpa Music Studio',
    },
    steps: {
      eyebrow: 'Inscription',
      title: 'Commencer en trois étapes',
      lede: 'Un échange simple permet de choisir le bon groupe, le bon horaire et la formule adaptée.',
      items: [
        [
          '1',
          'Demander une première séance',
          'Un cours d’essai gratuit pour l’atelier ou une séance découverte pour les cours individuels.',
        ],
        [
          '2',
          'Faire connaissance',
          'Nous échangeons sur l’âge, le niveau, les goûts, les objectifs et les disponibilités.',
        ],
        [
          '3',
          'Confirmer le parcours',
          'Nous validons ensemble le créneau, le groupe éventuel et la formule la plus adaptée.',
        ],
      ],
      cta: 'Échanger avec nous sur WhatsApp',
      message:
        'Bonjour, je souhaite recevoir des informations sur les cours de musique. Il s’agit de _ (âge et niveau), avec un intérêt pour _. Nos disponibilités sont plutôt : _. Merci !',
    },
  },
  en: {
    trust: [
      ['👥', 'Small groups · maximum 4 students'],
      ['🌍', 'Lessons in French, English, Spanish or Italian'],
      ['🎛️', 'Fully equipped professional studio'],
      ['🧭', 'Structured, personalised learning path'],
      ['🎁', 'Free trial lesson for the workshop'],
    ],
    pedagogy: {
      eyebrow: 'Our approach',
      title: 'Learn by playing, understand by doing',
      lede: 'A lively practice guided by clear goals and shaped around each student.',
      cards: [
        {
          icon: '🎸',
          title: 'Play from the start',
          body: 'Students explore instruments and music from the first sessions while developing listening, rhythm, coordination and technique.',
        },
        {
          icon: '💡',
          title: 'Understand and create',
          body: 'Theory and notation are introduced gradually through practice, when they become useful. Improvisation and composition create space for personal expression.',
        },
        {
          icon: '🎙️',
          title: 'Share and progress',
          body: 'Playing with others, recording projects and listening back make progress tangible. The programme evolves with each student’s tastes, level and goals.',
        },
      ],
    },
    team: {
      eyebrow: 'The team',
      title: 'Musicians who teach and create',
      paragraphs: [
        'Ezequiel Cappellano, an Italian-Argentinian musician, founder and teacher, trained in composition at the Bern University of the Arts (HKB), in contemporary music at the Conservatoire Populaire de Genève, and in guitar, sitar, recording and mixing.',
        'His path spans rock, electronic, contemporary and classical music, South American folklore, tango, jazz and Hindustani music. He works day to day with a small team of teachers, sound engineers and video technicians, all active musicians.',
      ],
      cta: 'Meet the team and discover the studio',
      imageAlt:
        'Ezequiel Cappellano, founder and teacher at Atahualpa Music Studio',
    },
    steps: {
      eyebrow: 'Enrolment',
      title: 'Get started in three steps',
      lede: 'A simple conversation helps us find the right group, schedule and plan.',
      items: [
        [
          '1',
          'Request a first session',
          'Choose a free workshop trial or a private discovery session.',
        ],
        [
          '2',
          'Tell us about the student',
          'We discuss age, level, tastes, goals and availability.',
        ],
        [
          '3',
          'Confirm the learning path',
          'Together we confirm the time, possible group and most suitable plan.',
        ],
      ],
      cta: 'Chat with us on WhatsApp',
      message:
        'Hello, I would like information about music lessons. The student is _ (age and level) and is interested in _. Our preferred availability is: _. Thank you!',
    },
  },
  es: {
    trust: [
      ['👥', 'Grupos pequeños · máximo 4 alumnos'],
      ['🌍', 'Clases en francés, inglés, español o italiano'],
      ['🎛️', 'Estudio profesional equipado'],
      ['🧭', 'Recorrido estructurado y personalizado'],
      ['🎁', 'Clase de prueba gratuita para el taller'],
    ],
    pedagogy: {
      eyebrow: 'Nuestra pedagogía',
      title: 'Aprender tocando, comprender haciendo',
      lede: 'Una práctica viva, guiada por objetivos claros y adaptada a cada alumno.',
      cards: [
        {
          icon: '🎸',
          title: 'Tocar desde el comienzo',
          body: 'Los alumnos exploran instrumentos y música desde las primeras sesiones mientras desarrollan escucha, ritmo, coordinación y técnica.',
        },
        {
          icon: '💡',
          title: 'Comprender y crear',
          body: 'La teoría y el solfeo se integran progresivamente en la práctica, cuando resultan útiles. La improvisación y la composición abren un espacio de expresión personal.',
        },
        {
          icon: '🎙️',
          title: 'Compartir y progresar',
          body: 'Tocar con otros, grabar proyectos y volver a escucharse permite reconocer el camino recorrido. El programa evoluciona según los gustos, el nivel y los objetivos.',
        },
      ],
    },
    team: {
      eyebrow: 'El equipo',
      title: 'Músicos que enseñan y crean',
      paragraphs: [
        'Ezequiel Cappellano, músico ítalo-argentino, fundador y profesor, se formó en composición en la Escuela Superior de Artes de Berna (HKB), en música contemporánea en el Conservatoire Populaire de Genève y también en guitarra, sitar, grabación y mezcla.',
        'Su recorrido atraviesa el rock, la música electrónica, contemporánea y clásica, el folclore sudamericano, el tango, el jazz y la música indostánica. Trabaja a diario con un pequeño equipo de profesores, ingenieros de sonido y técnicos de video, todos músicos activos.',
      ],
      cta: 'Conocer al equipo y descubrir el estudio',
      imageAlt:
        'Ezequiel Cappellano, fundador y profesor de Atahualpa Music Studio',
    },
    steps: {
      eyebrow: 'Inscripción',
      title: 'Comenzar en tres pasos',
      lede: 'Una conversación sencilla permite encontrar el grupo, el horario y la fórmula adecuados.',
      items: [
        [
          '1',
          'Solicitar una primera sesión',
          'Elija una prueba gratuita del taller o una sesión de descubrimiento individual.',
        ],
        [
          '2',
          'Conocernos',
          'Conversamos sobre edad, nivel, gustos, objetivos y disponibilidad.',
        ],
        [
          '3',
          'Confirmar el recorrido',
          'Validamos juntos el horario, el posible grupo y la fórmula más adecuada.',
        ],
      ],
      cta: 'Hablar con nosotros por WhatsApp',
      message:
        'Hola, quisiera recibir información sobre las clases de música. El/la alumno/a tiene _ (edad y nivel) y le interesa _. Nuestra disponibilidad preferida es: _. ¡Gracias!',
    },
  },
  it: {
    trust: [
      ['👥', 'Piccoli gruppi · massimo 4 allievi'],
      ['🌍', 'Lezioni in francese, inglese, spagnolo o italiano'],
      ['🎛️', 'Studio professionale attrezzato'],
      ['🧭', 'Percorso strutturato e personalizzato'],
      ['🎁', 'Lezione di prova gratuita per il laboratorio'],
    ],
    pedagogy: {
      eyebrow: 'La nostra pedagogia',
      title: 'Imparare suonando, capire facendo',
      lede: 'Una pratica viva, guidata da obiettivi chiari e adattata a ogni allievo.',
      cards: [
        {
          icon: '🎸',
          title: 'Suonare fin dall’inizio',
          body: 'Gli allievi esplorano strumenti e musica dalle prime sessioni, sviluppando ascolto, ritmo, coordinazione e tecnica.',
        },
        {
          icon: '💡',
          title: 'Capire e creare',
          body: 'La teoria e il solfeggio vengono integrati progressivamente nella pratica, quando diventano utili. Improvvisazione e composizione aprono uno spazio di espressione personale.',
        },
        {
          icon: '🎙️',
          title: 'Condividere e progredire',
          body: 'Suonare con gli altri, registrare progetti e riascoltarsi rende visibili i progressi. Il programma evolve secondo gusti, livello e obiettivi.',
        },
      ],
    },
    team: {
      eyebrow: 'Il team',
      title: 'Musicisti che insegnano e creano',
      paragraphs: [
        'Ezequiel Cappellano, musicista italo-argentino, fondatore e insegnante, si è formato in composizione alla Hochschule der Künste Bern (HKB), in musica contemporanea al Conservatoire Populaire de Genève, oltre che in chitarra, sitar, registrazione e missaggio.',
        'Il suo percorso attraversa rock, musica elettronica, contemporanea e classica, folklore sudamericano, tango, jazz e musica indostana. Lavora ogni giorno con un piccolo team di insegnanti, ingegneri del suono e tecnici video, tutti musicisti attivi.',
      ],
      cta: 'Conoscere il team e scoprire lo studio',
      imageAlt:
        'Ezequiel Cappellano, fondatore e insegnante di Atahualpa Music Studio',
    },
    steps: {
      eyebrow: 'Iscrizione',
      title: 'Iniziare in tre passi',
      lede: 'Un semplice scambio ci aiuta a trovare il gruppo, l’orario e la formula giusti.',
      items: [
        [
          '1',
          'Richiedere una prima sessione',
          'Scelga una prova gratuita del laboratorio o una sessione individuale di scoperta.',
        ],
        [
          '2',
          'Conoscerci',
          'Parliamo di età, livello, gusti, obiettivi e disponibilità.',
        ],
        [
          '3',
          'Confermare il percorso',
          'Confermiamo insieme l’orario, l’eventuale gruppo e la formula più adatta.',
        ],
      ],
      cta: 'Parlare con noi su WhatsApp',
      message:
        'Buongiorno, vorrei ricevere informazioni sulle lezioni di musica. L’allievo/a ha _ (età e livello) ed è interessato/a a _. La disponibilità preferita è: _. Grazie!',
    },
  },
};

const useCourseContent = () => {
  const { locale } = useLanguage();
  return contentByLocale[locale] || contentByLocale.fr;
};

export const TrustSignals = () => {
  const content = useCourseContent();

  return (
    <section className="course-trust" aria-label="Atahualpa Music Studio">
      <Container variant="wide">
        <ul className="course-trust__list">
          {content.trust.map(([icon, label]) => (
            <li key={label} className="course-trust__item">
              <span aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export const Pedagogy = () => {
  const { pedagogy } = useCourseContent();

  return (
    <section className="course-pedagogy">
      <Container variant="default">
        <SectionHeader
          eyebrow={pedagogy.eyebrow}
          title={pedagogy.title}
          lede={pedagogy.lede}
        />
        <ul className="course-pedagogy__grid">
          {pedagogy.cards.map((card) => (
            <li key={card.title} className="course-pedagogy__card">
              <span className="course-pedagogy__icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export const TeachingTeam = () => {
  const { team } = useCourseContent();

  return (
    <section className="course-team">
      <Container variant="default" className="course-team__inner">
        <img
          className="course-team__image"
          src="/assets/ezequiel-cappellano-professeur.jpg"
          alt={team.imageAlt}
        />
        <div className="course-team__content">
          <span className="course-team__eyebrow">{team.eyebrow}</span>
          <h2>{team.title}</h2>
          {team.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="course-team__cta" href="/apropos">
            {team.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export const EnrollmentSteps = () => {
  const { steps } = useCourseContent();
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(steps.message)}`;

  return (
    <section className="course-steps">
      <Container variant="default">
        <SectionHeader
          eyebrow={steps.eyebrow}
          title={steps.title}
          lede={steps.lede}
        />
        <ol className="course-steps__grid">
          {steps.items.map(([number, title, body]) => (
            <li key={number} className="course-steps__item">
              <span className="course-steps__number" aria-hidden="true">
                {number}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="course-steps__action">
          <a
            className="course-steps__cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {steps.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
};
