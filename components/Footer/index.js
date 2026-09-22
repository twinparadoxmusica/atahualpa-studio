'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const Footer = () => {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const bio = {
    fr: 'Cours de musique, production audio & vidéo, acoustique et insonorisation à Genève. Un même lieu pour apprendre, créer, enregistrer et maîtriser le son.',
    en: 'Music lessons, audio & video production, acoustics and soundproofing in Geneva. One place to learn, create, record and shape sound.',
    es: 'Clases de música, producción de audio y video, acústica e insonorización en Ginebra. Un mismo lugar para aprender, crear, grabar y trabajar el sonido.',
    it: 'Lezioni di musica, produzione audio e video, acustica e insonorizzazione a Ginevra. Un unico luogo per imparare, creare, registrare e lavorare sul suono.',
  }[locale] || t('footer.bio');

  return (
    <footer className="footer">
      <div className="footer-container section margin-bottom-lg">
        {/* Bio */}
        <div className="footer-bio">
          <h3>{t('footer.brand')}</h3>
          <p>{bio}</p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <h3 className="text-align--left">{t('footer.nav.title')}</h3>
          <ul>
            <li>
              <a href="/">{t('footer.nav.home')}</a>
            </li>
            <li>
              <a href="/lecons-musique">{t('nav.branch.music.label')}</a>
            </li>
            <li>
              <a href="/prise-son-video">{t('nav.branch.av.label')}</a>
            </li>
            <li>
              <a href="/acoustique-insonorisation">{t('nav.branch.acoustic.label')}</a>
            </li>
            <li>
              <a href="/apropos">{t('footer.nav.about')}</a>
            </li>
            <li>
              <a href="/contact">{t('footer.nav.contact')}</a>
            </li>
          </ul>

          <div className="footer-students">
            <h4>{t('footer.students.title')}</h4>
            <p>{t('footer.students.body')}</p>
            <a
              href="https://wa.me/41772792514"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav__regler"
            >
              {t('footer.students.cta')}
            </a>
          </div>
        </nav>

        {/* Contact info */}
        <div className="footer-contact">
          <h3>{t('footer.contact.title')}</h3>

          <p>+41 77 279 25 14</p>
          <p>
            <a href="mailto:contact@atahualpamusicstudio.com">
              contact@atahualpamusicstudio.com
            </a>
          </p>
          <br />
          <p>
            {t('footer.contact.address1')} <br /> {t('footer.contact.address2')}
          </p>
        </div>
      </div>
      <img
        src="/assets/atahualpa-music-studio-logo-full.png"
        alt={t('footer.logo.alt')}
        style={{ maxWidth: '200px', marginBottom: '1rem' }}
      />
      <p>
        © {year}
        <br />
        {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
