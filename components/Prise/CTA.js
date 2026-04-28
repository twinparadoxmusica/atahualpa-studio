import { Container } from '../ui';

const PriseCTA = () => (
  <section id="contact" className="prise-cta">
    <Container variant="default" className="prise-cta__inner">
      <div>
        <span className="prise-cta__eyebrow">On en discute&nbsp;?</span>
        <h2 className="prise-cta__title">
          Un concert, un album, un live à diffuser&nbsp;?
        </h2>
        <p className="prise-cta__lede">
          Parlez-nous de votre projet. On revient vers vous rapidement avec une
          proposition adaptée.
        </p>
      </div>

      <div className="prise-cta__actions">
        <a
          className="prise-cta__btn prise-cta__btn--primary"
          href="https://wa.me/41786917441"
          target="_blank"
          rel="noopener noreferrer"
        >
          Écrire sur WhatsApp
        </a>
        <a
          className="prise-cta__btn prise-cta__btn--ghost"
          href="mailto:contact@atahualpamusicstudio.com"
        >
          Envoyer un email
        </a>
      </div>
    </Container>
  </section>
);

export default PriseCTA;
