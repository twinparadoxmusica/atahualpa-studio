import "./styles.css";

const Lecons = () => (
  <>
    {" "}
    <div id="lecons" className="lecons margin-bottom-lg">
      <div className="lecons-container">
        <h2>Leçons De Musique</h2>
        <p>
          With a solid and extensive background in music education and
          experience in the industry, I tailor my teaching methods to suit each
          student’s unique needs and goals. Whether it's chords, melodies,
          solos, harmony, solfeggio, improvisation, arrangements, or
          composition, the lessons are designed to cover a wide range of topics
          based on the student's interests. Above all, my teaching approach is
          rooted in enjoyment and engagement, ensuring that learning remains a
          pleasurable and fulfilling experience
        </p>
        <h3>Online lessons </h3>
        <p>
          A well-balanced combination of webcam lessons, audio recordings,
          videos, and personalized exercises—along with the numerous benefits of
          learning from the comfort of home—makes this approach increasingly
          popular and in high demand. Here are a few testimonials from my
          students:
        </p>
      </div>
    </div>
    <div className="videos-container margin-bottom-lg">
      <h2>Vidéos des élèves</h2>

      <div className="video-container margin-bottom-sm">
        <iframe
          src="https://www.youtube.com/embed/8NryZfrV0TE?enablejsapi=1"
          title="YouTube video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="video-container margin-bottom-sm">
        <iframe
          src="https://www.youtube.com/embed/K1L0NzlrmPE?enablejsapi=1"
          title="YouTube video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="video-container margin-bottom-sm">
        <iframe
          src="https://www.youtube.com/embed/jvirbfoCXDI?enablejsapi=1"
          title="YouTube video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  </>
);

export default Lecons;
