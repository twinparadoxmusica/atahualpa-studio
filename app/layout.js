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

import './global.css'; // optional, create if needed

export const metadata = {
  metadataBase: new URL('https://atahualpamusicstudio.com'),
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5BBK94D');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5BBK94D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18380364358"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node, // Corrected PropTypes type
};

export default RootLayout;
