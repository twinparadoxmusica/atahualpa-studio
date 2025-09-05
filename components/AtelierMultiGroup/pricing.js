import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing">
      <h2>💰 Offres & Tarifs</h2>
      <div className="pricing-grid">
        <div className="card">
          <h3>Offre découverte</h3>
          <p>1 séance individuelle (60 min)</p>
          <strong>55 CHF</strong>
        </div>
        <div className="card highlight">
          <h3>Offre mensuelle</h3>
          <p>1 séance/semaine</p>
          <strong>395 CHF / mois</strong>
        </div>
        <div className="card">
          <h3>Offre 6 mois</h3>
          <p>18 séances (1h)</p>
          <strong>1’100 CHF</strong>
        </div>
      </div>
    </section>
  );
}