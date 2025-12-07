'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

const DateSelector = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    if (window && window.AcuitySchedulingEmbed) {
      // Si ya está cargado, puedes inicializarlo
      window.AcuitySchedulingEmbed.init();
    } else {
      // Cargar el script de Acuity dinámicamente
      const script = document.createElement('script');
      script.src = 'https://embed.acuityscheduling.com/js/embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      // Limpiar al desmontar
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="date-selector-container">
      <div className="calendar-mask" aria-hidden="true">
        <div className="calendar-header">
          <h1>Réservez votre cours de musique</h1>
          <p>Découvrez votre instrument avec un professeur passionné</p>
        </div>
      </div>
      <div className="calendar-wrapper">
        <iframe
          ref={iframeRef}
          src="https://app.acuityscheduling.com/schedule.php?owner=36842757&appointmentType=83194909&ref=embedded_csp&hide=banner"
          title="Schedule Appointment"
          width="100%"
          frameBorder="0"
          allow="payment"
          className="calendar-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default DateSelector;
