import {
  SPOTIFY,
  SPOTIFY_LOGO,
  APPLE_MUSIC,
  APPLE_MUSIC_LOGO,
  SOUNDCLOUD,
  SOUNDCLOUD_LOGO,
  YOUTUBE,
  YOUTUBE_LOGO,
  DEEZER,
  DEEZER_LOGO,
  BANDCAMP,
  BANDCAMP_LOGO,
} from './platforms.js';

const platforms = [
  {
    name: SPOTIFY,
    url: 'https://open.spotify.com/track/1lV4wtYEsYLkIlBvQOeb4f?si=14d1e3e07128492d',
    logo: SPOTIFY_LOGO,
  },
  {
    name: APPLE_MUSIC,
    url: 'https://music.apple.com/us/song/outbreak/1807299058',
    logo: APPLE_MUSIC_LOGO,
  },
  {
    name: SOUNDCLOUD,
    url: 'https://soundcloud.com/twin-paradox-musica/twin-paradox-outbreak',
    logo: SOUNDCLOUD_LOGO,
  },
  {
    name: YOUTUBE,
    url: 'https://www.youtube.com/watch?v=t3NHdVsFl2c',
    logo: YOUTUBE_LOGO,
  },
  {
    name: DEEZER,
    url: 'https://dzr.page.link/BBj4LriMeYPoq6YS7',
    logo: DEEZER_LOGO,
  },
  {
    name: BANDCAMP,
    url: 'https://twinparadoxmusica.bandcamp.com/track/outbreak',
    logo: BANDCAMP_LOGO,
  },
];

const outbreak = {
  title: 'OUTBREAK',
  soundCloudIframe:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070386344&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  platforms,
};

export default outbreak;
