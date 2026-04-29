'use client';
import React, { useState } from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const WHATSAPP_URL = 'https://wa.me/41786917441';
const EMAIL = 'atahualpa.music.studio@gmail.com';

const ContactForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    const form = e.target;
    const data = typeof FormData !== 'undefined' ? new FormData(form) : null;
    if (!data) {
      if (typeof window !== 'undefined') {
        window.alert(t('contact.form.errorFormData'));
      }
      setPending(false);
      return;
    }

    try {
      const response = await fetch(`https://formsubmit.co/${EMAIL}`, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else if (typeof window !== 'undefined') {
        window.alert(t('contact.form.errorSend'));
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <Container variant="default" className="contact-hero__inner">
          <span className="contact-hero__eyebrow">
            {t('contact.hero.eyebrow')}
          </span>
          <h1 id="contact-hero-title" className="contact-hero__title">
            {t('contact.hero.title')}
          </h1>
          <p className="contact-hero__lede">{t('contact.hero.lede')}</p>

          <div className="contact-hero__cta">
            <a
              className="contact-hero__btn contact-hero__btn--whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contact.hero.whatsappAria')}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{t('contact.hero.whatsapp')}</span>
            </a>
            <a
              className="contact-hero__btn contact-hero__btn--ghost"
              href={`mailto:${EMAIL}`}
            >
              {t('contact.hero.email')}
            </a>
          </div>

          <ul
            className="contact-hero__meta"
            aria-label={t('contact.hero.metaLabel')}
          >
            <li>
              <span aria-hidden="true">📍</span>
              <span>{t('contact.hero.meta.location')}</span>
            </li>
            <li>
              <span aria-hidden="true">⚡</span>
              <span>{t('contact.hero.meta.response')}</span>
            </li>
            <li>
              <span aria-hidden="true">🌐</span>
              <span>{t('contact.hero.meta.languages')}</span>
            </li>
          </ul>
        </Container>
      </section>

      <section className="contact-form-section">
        <Container variant="narrow">
          <SectionHeader
            eyebrow={t('contact.form.eyebrow')}
            title={t('contact.form.title')}
            lede={t('contact.form.lede')}
          />

          <div className="contact-form-card">
            {submitted ? (
              <p className="contact-form__success">
                {t('contact.form.success')}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value={t('contact.form.subject')}
                />

                <label className="contact-form__field">
                  <span>{t('contact.form.name')}</span>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </label>

                <label className="contact-form__field">
                  <span>{t('contact.form.email')}</span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </label>

                <label className="contact-form__field">
                  <span>{t('contact.form.message')}</span>
                  <textarea
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows="6"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={pending}
                >
                  {pending
                    ? t('contact.form.sending')
                    : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
