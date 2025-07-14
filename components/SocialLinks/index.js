import links from './links';

const SocialLinks = ({ onlyMusicIcons }) => {
  const iconSize = onlyMusicIcons ? 'w-8 h-8' : 'w-6 h-6';
  return (
    <div className="social-links">
      {links
        .filter((elem) =>
          onlyMusicIcons
            ? elem.name !== 'instagram' && elem.name !== 'mail-icon'
            : true
        )
        .map(({ icon: Icon, url, name }) => (
          <a
            key={name}
            data-name={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="hover:text-blue-500 transition-colors"
          >
            <Icon className={iconSize} />
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;
