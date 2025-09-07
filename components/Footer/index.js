import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container section margin-bottom-lg">
        {/* Bio */}
        <div className="footer-bio">
          <h3>Atahualpa Music Studio</h3>
          <p>
            Un espace musical dédié à l’apprentissage, la création et le
            partage. Des cours personnalisés et un studio équipé pour vivre la
            musique à fond.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <h3 className="text-align--left">Navigation</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/lecons">Leçons</a>
            </li>
            <li>
              <a href="/prise">Studio d’enregistrement</a>
            </li>
            <li>
              <a href="/apropos">À propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Contact info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>+41 77 279 25 14</p>
          <p>atahualpa.music.studio@gmail.com</p>
          <br />
          <p>
            Rampe de Cologny 1 <br /> 1223 Cologny, Genève
          </p>
        </div>
      </div>
      <img
        src="/assets/atahualpa-music-studio-logo-full.png"
        alt="Atahualpa Music Studio Logo"
        style={{ maxWidth: '200px', marginBottom: '1rem' }}
      />
      <p>
        &copy; 2025
        <br />
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
