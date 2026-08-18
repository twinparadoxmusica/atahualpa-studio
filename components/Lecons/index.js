import './styles.css';
import FAQ from '../FAQ';
import VideosEleves from './videos-eleves';
import Hero from './hero';
import IndividualClass from '../IndividualClass';
import GroupClass from '../GroupClass';
import ReglerBlock from '../ReglerBlock';
import StickyButton from '../StickyButton';
import {
  EnrollmentSteps,
  Pedagogy,
  TeachingTeam,
  TrustSignals,
} from './course-story';

const Lecons = () => (
  <div className="lecons-page">
    <Hero />
    <TrustSignals />
    <div className="lecons-page__surface lecons-page__surface--page">
      <Pedagogy />
    </div>
    <TeachingTeam />
    <div className="lecons-page__group lecons-page__surface lecons-page__surface--page">
      <GroupClass />
    </div>
    <div className="lecons-page__individual lecons-page__surface lecons-page__surface--muted">
      <IndividualClass />
    </div>
    <div className="lecons-page__surface lecons-page__surface--page">
      <VideosEleves />
    </div>
    <div className="lecons-page__surface lecons-page__surface--muted">
      <EnrollmentSteps />
    </div>
    <div className="lecons-page__regler lecons-page__surface lecons-page__surface--page">
      <ReglerBlock />
    </div>
    <div className="lecons-page__surface lecons-page__surface--muted">
      <FAQ />
    </div>
    <StickyButton />
  </div>
);

export default Lecons;
