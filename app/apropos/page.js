import Layout from '../../components/Layout';
import About from '../../components/About';
import Team from '../../components/Team';
import Location from '../../components/Location';

export const metadata = {
  title: 'À propos | Atahualpa Music Studio Genève',
  description:
    'Découvrez Atahualpa Music Studio à Genève : cours de musique, ateliers en petit groupe, production audiovisuelle, acoustique, insonorisation et projets sur mesure.',
};

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
