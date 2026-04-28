'use client';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'services', label: 'Services' },
  { id: 'approche', label: 'Notre approche' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Sticky in-page navigation that highlights the section currently in view.
 * Helps users skim a long page without losing their place.
 */
const PriseNav = () => {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="prise-nav" aria-label="Sections de la page">
      <ul className="prise-nav__list">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`prise-nav__link ${active === id ? 'is-active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PriseNav;
