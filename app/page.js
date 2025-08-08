import Layout from '../components/Layout';
import Collage from '../components/Collage';
import About from '../components/About';
import StageDetails from '../components/StageDetails';

const App = () => {
  return (
    <Layout>
      <Collage />
      <About />
      <StageDetails />
    </Layout>
  );
};

export default App;
