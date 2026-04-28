import PropTypes from 'prop-types';
import { Container } from '../ui';
import './styles.css';

/**
 * Layered hero used across the site. Mirrors the visual language of
 * the Prise page (purple radial + dark linear overlay + cover photo)
 * so each landing screen feels cohesive.
 */
const Hero = ({
  eyebrow,
  title,
  subtitle,
  description,
  ctas = [],
  chips = [],
  align = 'left',
  image,
  variant = 'default',
}) => {
  const inlineStyle = image
    ? { backgroundImage: `var(--hero-overlay), url('${image}')` }
    : undefined;

  return (
    <section
      className={`hero hero--${variant} hero--align-${align}`}
      style={inlineStyle}
    >
      <Container variant="default" className="hero__inner">
        {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <h2 className="hero__subtitle">{subtitle}</h2>}
        {description && <div className="hero__lede">{description}</div>}

        {ctas.length > 0 && (
          <div className="hero__cta">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? '_blank' : undefined}
                rel={cta.external ? 'noopener noreferrer' : undefined}
                className={`hero__btn hero__btn--${cta.variant || 'primary'}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}

        {chips.length > 0 && (
          <ul className="hero__chips" aria-label="Spécialités">
            {chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

Hero.propTypes = {
  eyebrow: PropTypes.node,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  ctas: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['primary', 'ghost']),
      external: PropTypes.bool,
    }),
  ),
  chips: PropTypes.arrayOf(PropTypes.string),
  align: PropTypes.oneOf(['left', 'center']),
  image: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'compact']),
};

export default Hero;
