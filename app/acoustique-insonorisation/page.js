import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('/acoustique-insonorisation');
import Layout from '../../components/Layout';
import Acoustique from '../../components/Acoustique';

export default function AcoustiquePage() {
  return (
    <Layout>
      <Acoustique />
    </Layout>
  );
}
