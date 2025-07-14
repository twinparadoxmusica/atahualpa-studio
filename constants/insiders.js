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
    url: 'https://open.spotify.com/track/5SdWEDGpzt3IhXcMtuAvjc?si=690d5de4124c426a',
    logo: SPOTIFY_LOGO,
  },
  {
    name: APPLE_MUSIC,
    url: 'https://music.apple.com/us/song/insiders/1790806876',
    logo: APPLE_MUSIC_LOGO,
  },
  {
    name: SOUNDCLOUD,
    url: 'https://soundcloud.com/twin-paradox-musica/twin-paradox-insiders',
    logo: SOUNDCLOUD_LOGO,
  },
  {
    name: YOUTUBE,
    url: 'https://www.youtube.com/watch?v=2VTmfk0gP8Q',
    logo: YOUTUBE_LOGO,
  },
  {
    name: DEEZER,
    url: 'https://dzr.page.link/tBg86ipCYZd2A7Qy6',
    logo: DEEZER_LOGO,
  },
  {
    name: BANDCAMP,
    url: 'https://twinparadoxmusica.bandcamp.com/album/insiders',
    logo: BANDCAMP_LOGO,
  },
];

const insiders = {
  title: 'INSIDERS',
  soundCloudIframe:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017289757&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  platforms,
};

export default insiders;
