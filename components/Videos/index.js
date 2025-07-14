import SocialLinks from '../SocialLinks';
import './styles.css';

const Videos = () => (
  <section id="videos" className="section">
    <h2 className="margin-bottom-sm">Videos</h2>

    <div className="margin-bottom-xs">
      <a
        target="_blank"
        className="video-link"
        href="https://www.youtube.com/watch?v=GEH6M5wipNk"
      >
        <strong>Insiders (Official Music Video)</strong>
      </a>
      <br />
      January 2025
    </div>
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GEH6M5wipNk?si=KqaSQNbyuCt7Mbnf?enablejsapi=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="margin-bottom-xs">
      <a
        target="_blank"
        className="video-link"
        href="https://www.youtube.com/watch?v=GEH6M5wipNk"
      >
        <strong>Hypnotic Techno DJ Set at Hama Club</strong>
      </a>
      <br />
      January 2025
    </div>
    <div className="video-container margin-bottom-sm">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/P361vVvKCXg?si=5we2CFduNi58eQ8L?enablejsapi=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <SocialLinks />
  </section>
);

export default Videos;
