'use client';

import { useEffect } from 'react';

const WHATSAPP_HOSTS = new Set(['wa.me', 'api.whatsapp.com', 'web.whatsapp.com']);
const CONVERSION_DESTINATION = 'AW-18380364358/ol80CMaP7d8cEMa0uLxE';

const WhatsAppConversionTracker = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    window.gtag('js', new Date());
    window.gtag('config', 'AW-18380364358');

    const trackWhatsAppClick = (event) => {
      const link = event.target.closest('a[href]');

      if (!link) return;

      let destination;

      try {
        destination = new URL(link.href);
      } catch {
        return;
      }

      if (!WHATSAPP_HOSTS.has(destination.hostname)) return;

      event.preventDefault();

      let navigationStarted = false;
      const navigateToWhatsApp = () => {
        if (navigationStarted) return;

        navigationStarted = true;
        window.location.assign(destination.href);
      };

      window.gtag('event', 'conversion', {
        send_to: CONVERSION_DESTINATION,
        event_callback: navigateToWhatsApp,
        event_timeout: 2000,
        transport_type: 'beacon',
      });

      window.setTimeout(navigateToWhatsApp, 2000);
    };

    document.addEventListener('click', trackWhatsAppClick, true);

    return () => document.removeEventListener('click', trackWhatsAppClick, true);
  }, []);

  return null;
};

export default WhatsAppConversionTracker;
