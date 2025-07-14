import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import './styles.css';

const Music = () => (
  <section id="music" className="section">
    <h2>Music</h2>
    <p>Discover our music on streaming platforms</p>
    <SocialLinks onlyMusicIcons />
    <ul className="margin-bottom-sm">
      <li>
        <div className="margin-bottom-xs">
          <Link href="/music/outbreak">
            <strong>OUTBREAK</strong>
          </Link>
          <br />
          April 2025
        </div>
        <div className="video-container">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070386344&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </li>
      <li>
        <div className="margin-bottom-xs">
          <Link href="/music/insiders">
            <strong>INSIDERS</strong>
          </Link>
          <br />
          January 2025
        </div>
        <div className="video-container">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017289757&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </li>

      <li>
        <div className="margin-bottom-xs">
          <a
            target="_blank"
            className="music-link"
            href="https://soundcloud.com/twin-paradox-musica/dj-set-at-hama-club-mar-del-plata-argentina"
          >
            <strong>Hypnotic Techno DJ Set at Hama Club</strong>
          </a>
          <br />
          January 2025
        </div>
        <div className="video-container">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2069654668&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </li>
      <li>
        <div className="margin-bottom-xs">
          <a
            target="_blank"
            className="music-link"
            href="https://soundcloud.com/twin-paradox-musica/hypnotic-minimal-house-studio-mix-003-july-2024"
          >
            <strong>Hypnotic Minimal House Studio Mix</strong>
          </a>
          <br />
          July 2024
        </div>
        <iframe
          width="500"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1863839835&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </li>
    </ul>
  </section>
);

export default Music;
