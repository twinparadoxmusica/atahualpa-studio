import PropTypes from 'prop-types';
import Script from 'next/script';

import './global.css'; // optional, create if needed

export const metadata = {
  title: 'Atahualpa Music Studio',
  description: 'Atahualpa Music Studio',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <base href="/" />
        <meta charSet="utf-8" />

        {/* Favicons — transparent PNGs work on any browser tab background */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#5b21b6" />

        {/* 🌟 Canonical URL */}
        <link rel="canonical" href="https://atahualpamusicstudio.com/" />

        {/* 🌟 SEO Meta Tags */}
        <title>Atahualpa Music Studio – Cours de musique à Genève</title>
        <meta
          name="description"
          content="Cours de musique pour enfants et adultes à Genève : guitare, synthétiseur, batterie, piano, basse. Ateliers créatifs, cours d’essai gratuit. En français, espagnol, anglais ou italien."
        />

        {/* 🌟 OPEN GRAPH (Facebook, WhatsApp, LinkedIn) */}
        <meta
          property="og:title"
          content="Atahualpa Music Studio – Cours de musique à Genève"
        />
        <meta
          property="og:description"
          content="Cours de musique pour enfants et adultes à Genève. Réservez votre cours d’essai gratuit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atahualpamusicstudio.com/" />
        <meta
          property="og:image"
          content="https://atahualpamusicstudio.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Atahualpa Music Studio – Genève"
        />
        <meta property="og:site_name" content="Atahualpa Music Studio" />

        {/* 🌟 TWITTER CARDS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Atahualpa Music Studio – Cours de musique à Genève"
        />
        <meta
          name="twitter:description"
          content="Cours de musique pour enfants et adultes. Réservez votre cours d’essai gratuit."
        />
        <meta
          name="twitter:image"
          content="https://atahualpamusicstudio.com/og-image.png"
        />

        {/* 🌟 JSON-LD – Google Knowledge Graph / Local Business / School */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicSchool',
              name: 'Atahualpa Music Studio',
              url: 'https://atahualpamusicstudio.com',
              telephone: '+41 77 279 25 14',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rampe de Cologny 1',
                addressLocality: 'Cologny',
                postalCode: '1223',
                addressCountry: 'CH',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 46.2139,
                longitude: 6.15,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '14:00',
                  closes: '20:00',
                },
              ],
              sameAs: ['https://www.instagram.com/atahualpa_studio'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node, // Corrected PropTypes type
};

export default RootLayout;
