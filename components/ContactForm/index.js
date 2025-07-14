/* eslint-disable no-undef */
'use client';
import React, { useState } from 'react';
import './styles.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // eslint-disable-next-line no-undef
    const data = typeof FormData !== 'undefined' ? new FormData(form) : null;
    if (!data) {
      if (typeof window !== 'undefined') {
        alert('FormData is not supported in this environment.');
      }
      return;
    }
    // eslint-disable-next-line no-undef
    const response = await fetch(
      'https://formsubmit.co/twinparadoxmusica@gmail.com',
      {
        method: 'POST',
        body: data,
      },
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        alert('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="contact-wrapper">
      <h2 className="margin-bottom-sm section">Contact Form</h2>
      {submitted ? (
        <p className="success-message">
          ✅ Your message was sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <p className="contact-prompt">
            We&apos;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, drop us a message below —
            we&rsquo;ll get back to you as soon as we can. 🚀
          </p>
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
