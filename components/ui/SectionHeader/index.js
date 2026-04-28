import PropTypes from 'prop-types';
import './styles.css';

/**
 * Eyebrow + heading + lede pattern used at the top of every section.
 * Keeps spacing/typography consistent across the site.
 */
const SectionHeader = ({
  eyebrow,
  title,
  lede,
  align = 'center',
  level = 2,
  className = '',
}) => {
  const Heading = `h${level}`;
  return (
    <header className={`ui-section-header ui-section-header--${align} ${className}`}>
      {eyebrow && <span className="ui-section-header__eyebrow">{eyebrow}</span>}
      {title && <Heading className="ui-section-header__title">{title}</Heading>}
      {lede && <p className="ui-section-header__lede">{lede}</p>}
    </header>
  );
};

SectionHeader.propTypes = {
  eyebrow: PropTypes.node,
  title: PropTypes.node,
  lede: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center']),
  level: PropTypes.oneOf([1, 2, 3]),
  className: PropTypes.string,
};

export default SectionHeader;
