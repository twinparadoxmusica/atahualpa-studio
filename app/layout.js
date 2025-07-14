import PropTypes from 'prop-types';
import Script from 'next/script';

import './global.css'; // optional, create if needed

export const metadata = {
  title: 'Atahualpa Music Studio',
  description:
    'Atahualpa Music Studio',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GTM) */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WG5WZF7R');
            `,
          }}
        />
        <base href="/" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        {/* Preload Images */}
        <link
          rel="preload"
          href="/assets/twin-paradox-typography.png"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-dj-set.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-ezequiel-guitar.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-mirko-synthesizer.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-live-set.jpg"
          as="image"
        />

        {/* SEO Meta Tags */}
        <meta
          name="title"
          content="Atahualpa Music Studio"
        />
        <meta
          name="description"
          content="Atahualpa Music Studio"
        />
        <meta
          name="keywords"
          content="Atahualpa Music Studio"
        />
      
        <title>Atahualpa Music Studio Website</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node, // Corrected PropTypes type
};

export default RootLayout;
