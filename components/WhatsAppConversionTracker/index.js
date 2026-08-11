'use client';

import { useEffect } from 'react';

const WHATSAPP_HOSTS = new Set(['wa.me', 'api.whatsapp.com', 'web.whatsapp.com']);
const CONVERSION_DESTINATION = 'AW-18380364358/ol80CMaP7d8cEMa0uLxE';

const WhatsAppConversionTracker = () => {
  useEffect(() => {
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

      window.gtag?.('event', 'conversion', {
        send_to: CONVERSION_DESTINATION,
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', trackWhatsAppClick, true);

    return () => document.removeEventListener('click', trackWhatsAppClick, true);
  }, []);

  return null;
};

export default WhatsAppConversionTracker;
