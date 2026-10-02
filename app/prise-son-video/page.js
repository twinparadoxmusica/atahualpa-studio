import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('/prise-son-video');
import Layout from '../../components/Layout';
import Prise from '../../components/Prise';

const ReleasesPage = () => {
  return (
    <Layout>
      <Prise />
    </Layout>
  );
};

export default ReleasesPage;
