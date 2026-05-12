'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { INDIVIDUAL_DISCOVERY_BOOKING_URL } from '../../constants/translations';
import './styles.css';

/**
 * Booking entry for the individual discovery lesson.
 * Flow: online booking calendar + Stripe — payment required at booking,
 * confirmed only after payment. Until the booking link is configured,
 * the placeholder constant resolves to a non-clickable URL string.
 */

const copyByLocale = {
  fr: {
    title: 'Réservez votre séance découverte',
    body: 'Une première séance individuelle de 60 minutes pour découvrir notre approche. Réservation en ligne via notre calendrier de réservation, avec paiement au moment de la réservation. La séance est confirmée une fois le paiement effectué.',
    cta: 'Réserver une séance découverte — 55 CHF',
  },
  en: {
    title: 'Book your discovery session',
    body: 'A first 60-minute private session to discover our approach. Booking is done online via our booking calendar, with payment at the time of booking. The session is confirmed once payment is completed.',
    cta: 'Book a discovery session — 55 CHF',
  },
  es: {
    title: 'Reserva tu sesión de descubrimiento',
    body: 'Una primera sesión individual de 60 minutos para descubrir nuestra forma de trabajar. La reserva se realiza en línea a través de nuestro calendario de reservas, con pago en el momento de la reserva. La sesión queda confirmada una vez efectuado el pago.',
    cta: 'Reservar una sesión de descubrimiento — 55 CHF',
  },
  it: {
    title: 'Prenota la tua sessione di scoperta',
    body: 'Una prima sessione individuale di 60 minuti per scoprire il nostro approccio. La prenotazione si effettua online tramite il nostro calendario di prenotazione, con pagamento al momento della prenotazione. La sessione è confermata dopo il pagamento.',
    cta: 'Prenotare una sessione di scoperta — 55 CHF',
  },
};

const DateSelector = () => {
  const { locale } = useLanguage();
  const dict = copyByLocale[locale] || copyByLocale.fr;

  return (
    <div className="date-selector-container">
      <div className="calendar-mask" aria-hidden="true">
        <div className="calendar-header">
          <h1>{dict.title}</h1>
          <p>{dict.body}</p>
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="calendar-cta">
          <a
            className="calendar-cta__button"
            href={INDIVIDUAL_DISCOVERY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
