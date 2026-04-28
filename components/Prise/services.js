import { Container, SectionHeader } from '../ui';
import { PRISE_SERVICES } from '../../constants/prise';

const Services = () => (
  <section id="services" className="prise-services">
    <Container variant="default">
      <SectionHeader
        eyebrow="Nos prestations"
        title="Un studio, quatre métiers"
        lede="De la captation à la diffusion, nous accompagnons chaque projet avec un soin artisanal et un matériel professionnel."
      />

      <ul className="prise-services__grid">
        {PRISE_SERVICES.map(({ id, icon, title, description }) => (
          <li key={id} className="prise-services__card">
            <span className="prise-services__icon" aria-hidden="true">
              {icon}
            </span>
            <h3 className="prise-services__title">{title}</h3>
            <p className="prise-services__desc">{description}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Services;
