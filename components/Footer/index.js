'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { WHATSAPP_NUMBER } from '../../constants/translations';
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
        <nav className="footer-nav" aria-label={t('footer.nav.title')}>
          <h3>{t('footer.nav.title')}</h3>
          <ul>
            <li>
              <a href="/">{t('footer.nav.home')}</a>
            </li>
            <li>
              <a href="/lecons-musique">{t('footer.nav.cours')}</a>
            </li>
            <li>
              <a className="footer-nav__highlight" href="/lecons-musique#regler">
                {t('footer.nav.regler')}
              </a>
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

        {/* Existing students */}
        <div className="footer-students">
          <h3>{t('footer.students.title')}</h3>
          <p>{t('footer.students.body')}</p>
          <a
            className="footer-students__cta"
            href="/lecons-musique#regler"
          >
            {t('footer.students.cta')}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Contact info */}
        <div className="footer-contact">
          <h3>{t('footer.contact.title')}</h3>
          <p>
            <span className="footer-contact__label">
              {t('footer.contact.phoneLabel')} :
            </span>{' '}
            <a href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`}>
              {t('footer.contact.phone')}
            </a>
          </p>
          <p>
            <a href={`mailto:${t('footer.contact.email')}`}>
              {t('footer.contact.email')}
            </a>
          </p>
          <p className="footer-contact__address">
            {t('footer.contact.address1')}
            <br />
            {t('footer.contact.address2')}
          </p>
          <a
            className="footer-contact__whatsapp"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('footer.contact.whatsappCta')}
          </a>
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
