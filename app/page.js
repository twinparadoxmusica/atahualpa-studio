import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import StageDetails from "../components/StageDetails";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <StageDetails />
    </Layout>
  );
};

export default App;
