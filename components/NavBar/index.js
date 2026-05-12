'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  SUPPORTED_LOCALES,
  LOCALE_LABELS,
} from '../../constants/translations';
import './styles.css';

const GlobeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SWITCH_KEY_BY_LOCALE = {
  fr: 'nav.switchToFr',
  en: 'nav.switchToEn',
  es: 'nav.switchToEs',
  it: 'nav.switchToIt',
};

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [coursOpen, setCoursOpen] = useState(false);
  const langWrapperRef = useRef(null);
  const coursWrapperRef = useRef(null);
  const { locale, setLocale, t } = useLanguage();

  const coursItems = [
    {
      href: '/lecons-musique#groupes',
      titleKey: 'nav.cours.atelier.title',
      descKey: 'nav.cours.atelier.desc',
    },
    {
      href: '/lecons-musique#individuels',
      titleKey: 'nav.cours.individuels.title',
      descKey: 'nav.cours.individuels.desc',
    },
    {
      href: '/lecons-musique#regler',
      titleKey: 'nav.cours.regler.title',
      descKey: 'nav.cours.regler.desc',
      highlight: true,
    },
  ];

  const otherLinks = [
    { path: '/prise-son-video', key: 'nav.prise' },
    { path: '/apropos', key: 'nav.apropos' },
    { path: '/contact', key: 'nav.contact' },
  ];

  const isCoursActive = pathname === '/lecons-musique';

  useEffect(() => {
    if (!langOpen) return undefined;
    const handlePointer = (event) => {
      if (
        langWrapperRef.current &&
        !langWrapperRef.current.contains(event.target)
      ) {
        setLangOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [langOpen]);

  useEffect(() => {
    if (!coursOpen) return undefined;
    const handlePointer = (event) => {
      if (
        coursWrapperRef.current &&
        !coursWrapperRef.current.contains(event.target)
      ) {
        setCoursOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setCoursOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [coursOpen]);

  const handleLocaleSelect = (next) => {
    setLocale(next);
    setLangOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setCoursOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <Link href="/" onClick={closeAll}>
            <img
              height="40px"
              src="/assets/atahualpa-music-studio-logo.png"
              alt="Atahualpa Music Studio"
            />
          </Link>
        </div>

        <div className="navbar-actions">
          {/* Language dropdown */}
          <div className="lang-dropdown" ref={langWrapperRef}>
            <button
              type="button"
              className="lang-dropdown__trigger"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('nav.changeLanguage')}
            >
              <GlobeIcon className="lang-dropdown__globe" />
              <span className="lang-dropdown__current">
                {locale.toUpperCase()}
              </span>
              <ChevronIcon
                className={`lang-dropdown__chevron ${langOpen ? 'is-open' : ''}`}
              />
            </button>
            {langOpen && (
              <ul
                className="lang-dropdown__menu"
                role="listbox"
                aria-label={t('nav.languageLabel')}
              >
                {SUPPORTED_LOCALES.map((code) => {
                  const isActive = code === locale;
                  return (
                    <li key={code} role="none">
                      <button
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        className={`lang-dropdown__item ${
                          isActive ? 'is-active' : ''
                        }`}
                        onClick={() => handleLocaleSelect(code)}
                        aria-label={t(SWITCH_KEY_BY_LOCALE[code])}
                      >
                        <span className="lang-dropdown__code">
                          {code.toUpperCase()}
                        </span>
                        <span className="lang-dropdown__label">
                          {LOCALE_LABELS[code]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
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
          {/* Cours de musique — dropdown */}
          <li
            className={`nav-cours ${coursOpen ? 'is-open' : ''}`}
            ref={coursWrapperRef}
          >
            <button
              type="button"
              className={`nav-link nav-cours__trigger ${isCoursActive ? 'active' : ''}`}
              onClick={() => setCoursOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={coursOpen}
              aria-label={t('nav.cours.openLabel')}
            >
              <span>{t('nav.cours')}</span>
              <ChevronIcon
                className={`nav-cours__chevron ${coursOpen ? 'is-open' : ''}`}
              />
            </button>

            {coursOpen && (
              <ul className="nav-cours__menu" role="menu">
                {coursItems.map((item) => (
                  <li key={item.titleKey} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`nav-cours__item ${item.highlight ? 'is-highlight' : ''}`}
                      onClick={closeAll}
                    >
                      <span className="nav-cours__item-title">
                        {t(item.titleKey)}
                      </span>
                      <span className="nav-cours__item-desc">
                        {t(item.descKey)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {otherLinks.map(({ path, key }) => {
            const isActive = pathname === path;
            return (
              <li key={key}>
                <Link
                  href={path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeAll}
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
