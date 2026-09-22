import Layout from '../../components/Layout';
import About from '../../components/About';
import Team from '../../components/Team';
import Location from '../../components/Location';

export const metadata = {
  title: 'À propos | Atahualpa Music Studio Genève',
  description:
    'Découvrez l’équipe d’Atahualpa Music Studio à Genève : musique, production audiovisuelle, acoustique architecturale, insonorisation et réalisation sur mesure.',
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
