import Layout from '../components/Layout';
import HomeHero from '../components/Hero/HomeHero';
import Intro from '../components/Intro';
import History from '../components/History';
import StageDetails from '../components/StageDetails';

const App = () => {
  return (
    <Layout>
      <HomeHero />
      <Intro />
      <StageDetails />
      <History />
    </Layout>
  );
};

export default App;
