'use client';
import React, { useState } from 'react';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import { sendContactNotification } from '../../lib/contactNotification';
import './styles.css';

const WHATSAPP_URL = 'https://wa.me/41772792514';
const EMAIL = 'contact@atahualpamusicstudio.com';
const CONTACT_COPY = {
  fr: {
    heroTitle:'Parlons de votre projet',
    heroLede:'Cours de musique, enregistrement & streaming, acoustique ou insonorisation : parlez-nous de votre besoin. Nous vous répondons rapidement, en français, anglais, espagnol ou italien.',
    label:'Objet de votre demande', placeholder:'Choisissez un sujet', music:'Cours de musique', recording:'Enregistrement & streaming', acoustics:'Acoustique & insonorisation', other:'Autre'
  },
  en: {
    heroTitle:'Let’s talk about your project',
    heroLede:'Music lessons, recording & streaming, acoustics or soundproofing: tell us what you need. We reply quickly in French, English, Spanish or Italian.',
    label:'Subject of your request', placeholder:'Choose a subject', music:'Music lessons', recording:'Recording & streaming', acoustics:'Acoustics & soundproofing', other:'Other'
  },
  es: {
    heroTitle:'Hablemos de tu proyecto',
    heroLede:'Clases de música, grabación & streaming, acústica o insonorización: contanos qué necesitás. Respondemos rápidamente en francés, inglés, español o italiano.',
    label:'Motivo de tu consulta', placeholder:'Elegí un tema', music:'Clases de música', recording:'Grabación & streaming', acoustics:'Acústica & insonorización', other:'Otro'
  },
  it: {
    heroTitle:'Parliamo del tuo progetto',
    heroLede:'Lezioni di musica, registrazione & streaming, acustica o insonorizzazione: raccontaci di cosa hai bisogno. Rispondiamo rapidamente in francese, inglese, spagnolo o italiano.',
    label:'Oggetto della richiesta', placeholder:'Scegli un argomento', music:'Lezioni di musica', recording:'Registrazione & streaming', acoustics:'Acustica & insonorizzazione', other:'Altro'
  },
};

const ContactForm = () => {
  const { t, locale } = useLanguage();
  const normalizedLocale = String(locale || 'fr').toLowerCase().slice(0, 2);
  const copy = CONTACT_COPY[normalizedLocale] || CONTACT_COPY.fr;
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); setPending(true);
    const form = e.target;
    const data = typeof FormData !== 'undefined' ? new FormData(form) : null;
    if (!data) { if (typeof window !== 'undefined') window.alert(t('contact.form.errorFormData')); setPending(false); return; }
    const contact = { name:data.get('name'), email:data.get('email'), topic:data.get('topic'), message:data.get('message'), locale };
    try {
      const response = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...contact, website:data.get('website')}) });
      if (response.ok) {
        const result = await response.json(); setSubmitted(true); form.reset();
        void sendContactNotification({ submissionId:result.submissionId, contact }).catch(() => {});
      } else if (typeof window !== 'undefined') window.alert(t('contact.form.errorSend'));
    } catch { if (typeof window !== 'undefined') window.alert(t('contact.form.errorSend')); }
    finally { setPending(false); }
  };

  return <>
    <section className="contact-hero" aria-labelledby="contact-hero-title"><Container variant="default" className="contact-hero__inner">
      <span className="contact-hero__eyebrow">{t('contact.hero.eyebrow')}</span><h1 id="contact-hero-title" className="contact-hero__title">{copy.heroTitle}</h1><p className="contact-hero__lede">{copy.heroLede}</p>
      <div className="contact-hero__cta"><a className="contact-hero__btn contact-hero__btn--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={t('contact.hero.whatsappAria')}><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 6.557.003 11.891 5.338 11.893 11.902-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/></svg><span>{t('contact.hero.whatsapp')}</span></a><a className="contact-hero__btn contact-hero__btn--ghost" href={`mailto:${EMAIL}`}>{t('contact.hero.email')}</a></div>
      <ul className="contact-hero__meta" aria-label={t('contact.hero.metaLabel')}><li><span>📍</span><span>{t('contact.hero.meta.location')}</span></li><li><span>⚡</span><span>{t('contact.hero.meta.response')}</span></li><li><span>🌐</span><span>{t('contact.hero.meta.languages')}</span></li></ul>
    </Container></section>
    <section className="contact-form-section"><Container variant="narrow"><SectionHeader eyebrow={t('contact.form.eyebrow')} title={t('contact.form.title')} lede={t('contact.form.lede')} /><div className="contact-form-card">
      {submitted ? <p className="contact-form__success">{t('contact.form.success')}</p> : <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label className="contact-form__honeypot" aria-hidden="true">Website<input type="text" name="website" tabIndex="-1" autoComplete="off" /></label>
        <label className="contact-form__field"><span>{t('contact.form.name')}</span><input type="text" name="name" placeholder={t('contact.form.namePlaceholder')} required /></label>
        <label className="contact-form__field"><span>{t('contact.form.email')}</span><input type="email" name="email" placeholder={t('contact.form.emailPlaceholder')} required /></label>
        <label className="contact-form__field"><span>{copy.label}</span><select name="topic" defaultValue="" required><option value="" disabled>{copy.placeholder}</option><option value="music">{copy.music}</option><option value="recording">{copy.recording}</option><option value="acoustics">{copy.acoustics}</option><option value="other">{copy.other}</option></select></label>
        <label className="contact-form__field"><span>{t('contact.form.message')}</span><textarea name="message" placeholder={t('contact.form.messagePlaceholder')} rows="6" required /></label>
        <button type="submit" className="contact-form__submit" disabled={pending}>{pending ? t('contact.form.sending') : t('contact.form.submit')}</button>
      </form>}
    </div></Container></section>
  </>;
};
export default ContactForm;
