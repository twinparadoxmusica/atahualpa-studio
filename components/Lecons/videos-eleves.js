import React from 'react';
import './videos-eleves.css';

const VideosEleves = () => {
  return (
    <div className="videos-container margin-bottom-lg">
      <h2 className="margin-bottom-lg">Vidéos des élèves</h2>

      <div className="videos-grid">
        <div className="video-container-eleves">
          <iframe
            src="https://www.youtube.com/embed/8NryZfrV0TE?enablejsapi=1"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="video-container-eleves">
          <iframe
            src="https://www.youtube.com/embed/K1L0NzlrmPE?enablejsapi=1"
            title="YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="video-container-eleves">
          <iframe
            src="https://www.youtube.com/embed/jvirbfoCXDI?enablejsapi=1"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="video-container-eleves">
          <iframe
            src="https://www.youtube.com/embed/x7zeUqTIo1c?enablejsapi=1"
            title="YouTube video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideosEleves;
