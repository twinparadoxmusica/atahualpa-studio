import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import History from '../components/History';
import StageDetails from '../components/StageDetails';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <StageDetails />
      <History />
    </Layout>
  );
};

export default App;
