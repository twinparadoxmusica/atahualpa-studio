import Hero from './Hero';
import WhyCall from './WhyCall';
import ForWho from './ForWho';
import Method from './Method';
import Steps from './Steps';
import Testimonials from './Testimonials';
import FAQ from '../FAQ';
import DateSelector from '../DateSelector';
import StickyButton from './StickyButton';
import './styles.css';

const Reserver = () => (
  <div className="margin-bottom-lg">
    <Hero />
    <WhyCall />
    <ForWho />
    <Method />
    <Testimonials />
    <Steps />
    <DateSelector />
    <FAQ />
    <StickyButton />
  </div>
);

export default Reserver;
