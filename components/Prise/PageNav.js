'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const SECTION_IDS = ['services', 'approche', 'projets', 'contact'];

/**
 * Sticky in-page navigation that highlights the section currently in view.
 * Helps users skim a long page without losing their place.
 */
const PriseNav = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(SECTION_IDS[0]);

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

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'services', label: t('prise.nav.services') },
    { id: 'approche', label: t('prise.nav.approche') },
    { id: 'projets', label: t('prise.nav.projets') },
    { id: 'contact', label: t('prise.nav.contact') },
  ];

  return (
    <nav className="prise-nav" aria-label={t('common.pageSections')}>
      <ul className="prise-nav__list">
        {sections.map(({ id, label }) => (
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
