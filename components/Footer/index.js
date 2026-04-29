'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container section margin-bottom-lg">
        {/* Bio */}
        <div className="footer-bio">
          <h3>{t('footer.brand')}</h3>
          <p>{t('footer.bio')}</p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <h3 className="text-align--left">{t('footer.nav.title')}</h3>
          <ul>
            <li>
              <a href="/">{t('footer.nav.home')}</a>
            </li>
            <li>
              <a href="/lecons-musique">{t('footer.nav.lecons')}</a>
            </li>
            <li>
              <a href="/prise-son-video">{t('footer.nav.prise')}</a>
            </li>
            <li>
              <a href="/apropos">{t('footer.nav.about')}</a>
            </li>
            <li>
              <a href="/contact">{t('footer.nav.contact')}</a>
            </li>
          </ul>
        </nav>

        {/* Contact info */}
        <div className="footer-contact">
          <h3>{t('footer.contact.title')}</h3>

          <p>+41 77 279 25 14</p>
          <p>atahualpa.music.studio@gmail.com</p>
          <br />
          <p>
            {t('footer.contact.address1')} <br />{' '}
            {t('footer.contact.address2')}
          </p>
        </div>
      </div>
      <img
        src="/assets/atahualpa-music-studio-logo-full.png"
        alt={t('footer.logo.alt')}
        style={{ maxWidth: '200px', marginBottom: '1rem' }}
      />
      <p>
        {t('footer.copyright')}
        <br />
        {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
