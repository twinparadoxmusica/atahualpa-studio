export default function HeroBackground({ name }) {
  return (
    <picture className="hero-background" aria-hidden="true">
      <source media="(max-width: 800px)" srcSet={`/assets/${name}-800.webp`} />
      <img
        src={`/assets/${name}-1600.webp`}
        alt=""
        width="1600"
        height="1067"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}
