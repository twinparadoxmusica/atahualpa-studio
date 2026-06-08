import './styles.css';
import FAQ from '../FAQ';
import VideosEleves from './videos-eleves';
import Hero from './hero';
import IndividualClass from '../IndividualClass';
import GroupClass from '../GroupClass';
import SummerCamp from '../SummerCamp';
import ReglerBlock from '../ReglerBlock';
import StickyButton from '../StickyButton';

const Lecons = () => (
  <div className="lecons-page">
    <Hero />
    <div className="lecons-page__group lecons-page__surface lecons-page__surface--page">
      <GroupClass />
    </div>
    <div className="lecons-page__individual lecons-page__surface lecons-page__surface--muted">
      <IndividualClass />
    </div>
    <div className="lecons-page__camp lecons-page__surface lecons-page__surface--page">
      <SummerCamp />
    </div>
    <div className="lecons-page__regler lecons-page__surface lecons-page__surface--muted">
      <ReglerBlock />
    </div>
    <div className="lecons-page__surface lecons-page__surface--page">
      <VideosEleves />
    </div>
    <div className="lecons-page__surface lecons-page__surface--muted">
      <FAQ />
    </div>
    <StickyButton />
  </div>
);

export default Lecons;
