'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { path: '/lecons-musique', key: 'nav.lecons' },
    { path: '/prise-son-video', key: 'nav.prise' },
    { path: '/apropos', key: 'nav.apropos' },
    { path: '/contact', key: 'nav.contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img
              height="40px"
              src="/assets/atahualpa-music-studio-logo.png"
              alt="Atahualpa Music Studio"
            />
          </Link>
        </div>

        <div className="navbar-actions">
          {/* Language switcher */}
          <div
            className="lang-switch"
            role="group"
            aria-label={t('nav.languageLabel')}
          >
            <button
              type="button"
              className={`lang-switch__btn ${locale === 'fr' ? 'is-active' : ''}`}
              onClick={() => setLocale('fr')}
              aria-pressed={locale === 'fr'}
              aria-label={t('nav.switchToFr')}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-switch__btn ${locale === 'en' ? 'is-active' : ''}`}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              aria-label={t('nav.switchToEn')}
            >
              EN
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t('nav.toggleMenu')}
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ path, key }) => {
            const isActive = pathname === path;
            return (
              <li key={key}>
                <Link
                  href={path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
