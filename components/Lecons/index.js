import './styles.css';
import FAQ from '../FAQ';
import VideosEleves from './videos-eleves';
import Hero from './hero';
import IndividualClass from '../IndividualClass';
import GroupClass from '../GroupClass';

const Lecons = () => (
  <div className="groupes margin-bottom-lg">
    <Hero />
    <GroupClass />
    <IndividualClass />
    <VideosEleves />
    <FAQ />
  </div>
);

export default Lecons;
