import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('/apropos');
import Layout from '../../components/Layout';
import About from '../../components/About';
import Team from '../../components/Team';
import Location from '../../components/Location';

const AboutPage = () => {
  return (
    <Layout>
      <About />
      <Team />
      <Location />
    </Layout>
  );
};

export default AboutPage;
