import React from 'react';
import './styles.css';

export default function GoogleReviews() {
  return (
    <section className="google-reviews margin-bottom-lg">
      <h2>Location – Atahualpa Music Studio</h2>
      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.9362044960776!2d6.170832677042798!3d46.2117240710959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65d07cdb0353%3A0x8fcae3e8c48a0de0!2sAtahualpa%20Music%20Studio!5e0!3m2!1sen!2sch!4v1757269707328!5m2!1sen!2sch"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Reviews Atahualpa Music Studio"
        ></iframe>
      </div>
    </section>
  );
}
