import './styles.css';

const DateSelector = () => {
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
          src="https://app.acuityscheduling.com/schedule.php?owner=36842757&appointmentType=83194909&ref=embedded_csp&hide=banner"
          title="Schedule Appointment"
          width="100%"
          height="900"
          frameBorder="0"
          allow="payment"
          className="calendar-iframe"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
};

export default DateSelector;
