import PropTypes from 'prop-types';
import './styles.css';

/**
 * Centered max-width wrapper with consistent gutters.
 * Variants: 'narrow' (~720), 'default' (~960), 'wide' (~1180).
 */
const Container = ({
  as: Tag = 'div',
  variant = 'default',
  className = '',
  children,
  ...rest
}) => (
  <Tag className={`ui-container ui-container--${variant} ${className}`} {...rest}>
    {children}
  </Tag>
);

Container.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['narrow', 'default', 'wide']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
