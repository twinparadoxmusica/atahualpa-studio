import { businessSchema } from '../lib/business';
import { Jost } from 'next/font/google';
const jost = Jost({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-jost',
});
import PropTypes from 'prop-types';
import Script from 'next/script';

import WhatsAppConversionTracker from '../components/WhatsAppConversionTracker';

import './global.css'; // optional, create if needed

export const metadata = {
  metadataBase: new URL('https://atahualpamusicstudio.com'),
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />

        {/* Favicons — transparent PNGs work on any browser tab background */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="theme-color" content="#5b21b6" />

        {/* 🌟 JSON-LD – Google Knowledge Graph / Local Business / School */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body className={jost.variable}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18380364358"
          strategy="afterInteractive"
        />
        <WhatsAppConversionTracker />
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node, // Corrected PropTypes type
};

export default RootLayout;
