const links = [
  {
    url: 'mailto:twinparadoxmusica@gmail.com',
    name: 'mail-icon',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=86885&format=png&color=FFFFFF"
        alt="Mail"
        className={className}
      />
    ),
  },
  {
    url: 'https://www.youtube.com/@_twinparadox',
    name: 'youtube',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=62852&format=png&color=FFFFFF"
        alt="YouTube"
        className={className}
      />
    ),
  },
  {
    url: 'https://www.instagram.com/_twinparadox/',
    name: 'instagram',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF"
        alt="Instagram"
        className={className}
      />
    ),
  },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/artist/1yhioOAuZ2fk2Qip3eMWgx',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=11116&format=png&color=FFFFFF"
        alt="Spotify"
        className={className}
      />
    ),
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/twin-paradox/1738057737',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=mpeojql23sni&format=png&color=FFFFFF"
        alt="Apple Music"
        className={className}
      />
    ),
  },
  {
    name: 'bandcamp',
    url: 'https://twinparadoxmusica.bandcamp.com/album/insiders',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=rK25y5HOfE7E&format=png&color=FFFFFF"
        alt="Bandcamp"
        className={className}
      />
    ),
  },
  {
    name: 'soundcloud',
    url: 'https://soundcloud.com/twin-paradox-musica',
    icon: ({ className }) => (
      <img
        src="https://img.icons8.com/?size=100&id=12499&format=png&color=FFFFFF"
        alt="SoundCloud"
        className={className}
      />
    ),
  },
];

export default links;
