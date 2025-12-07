import './styles.css';

const Hero = ({ title, subtitle, description }) => {
  return (
    <div className="hero margin-bottom-lg">
      <div className="hero-title">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {description && <div>{description}</div>}
      </div>
    </div>
  );
};

export default Hero;
