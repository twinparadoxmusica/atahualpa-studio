import dynamic from 'next/dynamic';

import Hero from './Hero';
import PageNav from './PageNav';
import Services from './services';
import Approach from './Approach';
import Showcase from './Showcase';
import CTA from './CTA';

import './styles.css';

// Projects pulls in the LazyVideo + project data; deferring it keeps the
// initial bundle for the Prise page lean.
const Projects = dynamic(() => import('./projects'), {
  loading: () => <div className="prise-projects__loading" aria-hidden="true" />,
});

const Prise = () => (
  <>
    <Hero />
    <PageNav />
    <Services />
    <Approach />
    <Showcase />
    <Projects />
    <CTA />
  </>
);

export default Prise;
