/**
 * Data for the "Prise de Son, Vidéo & Streaming" page.
 * Keeping content here (instead of inline JSX) means copy edits don't
 * require touching presentational components, and it keeps services.js /
 * projects.js as thin renderers.
 */

export const PRISE_SERVICES = [
  {
    id: 'recording',
    icon: '🎼',
    title: 'Enregistrement orchestral & live',
    description:
      "Captation d'orchestres, ensembles et musiciens avec une qualité studio, en salle ou sur site.",
  },
  {
    id: 'video',
    icon: '🎥',
    title: 'Captation vidéo',
    description:
      'Réalisation multicam pour concerts, sessions live et contenus artistiques, avec étalonnage soigné.',
  },
  {
    id: 'streaming',
    icon: '📡',
    title: 'Streaming YouTube',
    description:
      'Gestion complète de la diffusion en direct avec audio synchronisé et image professionnelle.',
  },
  {
    id: 'mixing',
    icon: '🎛️',
    title: 'Mixage & Mastering',
    description:
      'Finalisation sonore pour un rendu clair, équilibré et puissant sur toutes les plateformes.',
  },
];

export const PRISE_PROJECTS = [
  {
    id: 'geneve-musicale-2026',
    title:
      "Festival International Genève Musicale 2026 – Concert d'ouverture",
    date: '26 avril 2026',
    location: "Grande Salle de l'Espace Culturel de Genthod",
    description: [
      'Dimanche 26 avril 2026 à 18h30 — Concert à deux pianos avec les Maîtres du Festival et les musiciens invités.',
      'Au programme : Lutoslawski, Guastavino, Poulenc, Frank Martin, Borodine, Piazzolla et Michel Runtz.',
      'Le Festival International Genève Musicale réunit jeunes lauréats, maîtres du piano et artistes invités autour de concerts, master classes et moments de transmission musicale.',
    ],
    link: {
      label: 'www.genevemusicale.com',
      href: 'https://www.genevemusicale.com',
    },
    videos: [
      'https://www.youtube.com/embed/9FjnZwsYOuA',
      'https://www.youtube.com/embed/8CG0ePU7oDU',
    ],
  },
  {
    id: 'geneve-musicale-2025',
    title: 'Concours International "Genève Musicale"',
    date: 'Juin 2025',
    location: 'Association "Genève Musicale"',
    description: [
      '🎹 2e Concours International pour Jeunes Pianistes "Genève Musicale".',
      "📺 Programme de l'épreuve demi-finale — une compétition internationale où de jeunes pianistes talentueux venus du monde entier se produisent devant un jury international.",
    ],
    videos: [
      'https://www.youtube.com/embed/NRSyVVW0Mbw',
      'https://www.youtube.com/embed/HVG7Z7TopcI',
      'https://www.youtube.com/embed/c3kxbYpxtMw',
      'https://www.youtube.com/embed/TbV8EHTxuUY',
      'https://www.youtube.com/embed/MtHQ0eFCHig',
      'https://www.youtube.com/embed/5xGa3WL6REc',
      'https://www.youtube.com/embed/noOfEmiVzYU',
    ],
  },
  {
    id: 'victoria-hall-2024',
    title: 'Victoria Hall – Orchestre CMGO Musimax',
    date: '23 juin 2024',
    location: 'Conservatoire de Genève – Victoria Hall',
    description: [
      'Pieter-Jelle de BOER, direction. Lucas CHICHE, piano (III mvt).',
      'Atahualpa Music Studio — Ezequiel Cappellano & Mirko Hrubik : recording, mixing and mastering. Louis Hans-Moevi & Nelson Iso : cameraman and video editing.',
      'Ludwig van Beethoven – Piano Concerto op.19 N°2 in B flat Major.',
    ],
    videos: [
      'https://www.youtube.com/embed/AeeZRHdVg1Y?si=VXYUE5mu0qlUaqE_',
      'https://www.youtube.com/embed/zfthF6SijCk?si=j26bENdNl8xj8NpI',
      'https://www.youtube.com/embed/vGNcRp0I57M?si=lSGhoWwMssXhW-MW',
    ],
  },
];
