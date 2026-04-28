import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import History from '../components/History';
import StageDetails from '../components/StageDetails';

const App = () => {
  return (
    <Layout>
      <Hero
        eyebrow="Atahualpa Studio · Genève"
        title="Un studio, deux passions"
        subtitle="Enseigner et capturer la musique"
        description={
          <p>
            Face au lac Léman, deux salles dédiées à la pédagogie musicale et à
            la production audio-vidéo. Une équipe de musiciens passionnés,
            au service des élèves comme des artistes.
          </p>
        }
        ctas={[
          { label: 'Découvrir les cours', href: '/lecons-musique', variant: 'primary' },
          { label: 'Prise de son & vidéo', href: '/prise-son-video', variant: 'ghost' },
        ]}
        chips={['Cours individuels', 'Ateliers', 'Studio', 'Captation live']}
        align="left"
      />
      <Intro />
      <StageDetails />
      <History />
    </Layout>
  );
};

export default App;
