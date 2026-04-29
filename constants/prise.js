/**
 * Data for the "Prise de Son, Vidéo & Streaming" page.
 *
 * Localized strings (titles, dates, descriptions) are now stored in
 * `constants/translations.js` under the `prise.*` keys. This file only
 * keeps the *structural* data: project ids, video URLs, external link
 * hrefs and icon assignments. Components combine the two at render time
 * via `useLanguage()`.
 */

export const PRISE_SERVICE_IDS = ['recording', 'video', 'streaming', 'mixing'];

export const PRISE_PROJECTS = [
  {
    id: 'gm2026',
    link: {
      keyLabel: 'www.genevemusicale.com',
      href: 'https://www.genevemusicale.com',
    },
    paragraphs: 3,
    videos: [
      'https://www.youtube.com/embed/9FjnZwsYOuA',
      'https://www.youtube.com/embed/8CG0ePU7oDU',
    ],
  },
  {
    id: 'gm2025',
    paragraphs: 2,
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
    id: 'victoria',
    paragraphs: 3,
    videos: [
      'https://www.youtube.com/embed/AeeZRHdVg1Y?si=VXYUE5mu0qlUaqE_',
      'https://www.youtube.com/embed/zfthF6SijCk?si=j26bENdNl8xj8NpI',
      'https://www.youtube.com/embed/vGNcRp0I57M?si=lSGhoWwMssXhW-MW',
    ],
  },
];
