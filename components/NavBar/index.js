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
  const [leconsOpen, setLeconsOpen] = useState(false);
  const langWrapperRef = useRef(null);
  const leconsWrapperRef = useRef(null);
  const { locale, setLocale, t } = useLanguage();

  const leconsItems = [
    {
      key: 'atelier',
      href: '/lecons-musique#groupes',
      title: t('nav.lecons.atelier.title'),
      desc: t('nav.lecons.atelier.desc'),
    },
    {
      key: 'individual',
      href: '/lecons-musique#individuels',
      title: t('nav.lecons.individual.title'),
      desc: t('nav.lecons.individual.desc'),
    },
    {
      key: 'regler',
      href: '/reserver-classe',
      title: t('nav.lecons.regler.title'),
      desc: t('nav.lecons.regler.desc'),
      highlight: true,
    },
  ];

  const trailingLinks = [
    { path: '/prise-son-video', key: 'nav.prise' },
    { path: '/apropos', key: 'nav.apropos' },
    { path: '/contact', key: 'nav.contact' },
  ];

  // Close the language dropdown when clicking outside or pressing Escape.
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

  // Close the lecons dropdown on outside click / Escape (mobile-friendly).
  useEffect(() => {
    if (!leconsOpen) return undefined;

    const handlePointer = (event) => {
      if (
        leconsWrapperRef.current &&
        !leconsWrapperRef.current.contains(event.target)
      ) {
        setLeconsOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setLeconsOpen(false);
    };

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [leconsOpen]);

  const handleLocaleSelect = (next) => {
    setLocale(next);
    setLangOpen(false);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setLeconsOpen(false);
  };

  const isLeconsActive = pathname === '/lecons-musique';

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
          {/* Lecons dropdown */}
          <li
            className={`nav-lecons ${leconsOpen ? 'is-open' : ''}`}
            ref={leconsWrapperRef}
            onMouseEnter={() => setLeconsOpen(true)}
            onMouseLeave={() => setLeconsOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-lecons__trigger ${
                isLeconsActive ? 'active' : ''
              }`}
              onClick={() => setLeconsOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={leconsOpen}
              aria-label={t('nav.openLecons')}
            >
              <span>{t('nav.lecons.label')}</span>
              <ChevronIcon
                className={`nav-lecons__chevron ${
                  leconsOpen ? 'is-open' : ''
                }`}
              />
            </button>
            {leconsOpen && (
              <ul className="nav-lecons__menu" role="menu">
                {leconsItems.map((item) => (
                  <li key={item.key} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`nav-lecons__item ${
                        item.highlight ? 'nav-lecons__item--highlight' : ''
                      }`}
                      onClick={closeAllMenus}
                    >
                      <span className="nav-lecons__item-title">
                        {item.title}
                      </span>
                      <span className="nav-lecons__item-desc">
                        {item.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {trailingLinks.map(({ path, key }) => {
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
