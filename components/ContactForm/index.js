/* eslint-disable no-undef */
"use client";
import React, { useState } from "react";
import "./styles.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // eslint-disable-next-line no-undef
    const data = typeof FormData !== "undefined" ? new FormData(form) : null;
    if (!data) {
      if (typeof window !== "undefined") {
        alert("FormData is not supported in this environment.");
      }
      return;
    }
    // eslint-disable-next-line no-undef
    const response = await fetch(
      "https://formsubmit.co/atahualpa.music.studio@gmail.com",
      {
        method: "POST",
        body: data,
      },
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line no-undef
        alert("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="contact-wrapper">
      <h2 className="margin-bottom-sm">Formulaire de contact</h2>
      {submitted ? (
        <p className="success-message">
          ✅ Votre message a été envoyé avec succès !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <p className="contact-prompt">
            Nous aimerions avoir de vos nouvelles ! Que vous ayez une question,
            des commentaires ou que vous souhaitiez simplement dire bonjour,
            laissez-nous un message ci-dessous — nous vous répondrons dès que
            possible. 🚀
          </p>
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
