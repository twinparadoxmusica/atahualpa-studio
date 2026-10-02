import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('/lecons-musique');
import Layout from '../../components/Layout';
import Lecons from '../../components/Lecons';

const ReleasesPage = () => {
  return (
    <Layout>
      <Lecons />
    </Layout>
  );
};

export default ReleasesPage;
