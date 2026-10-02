import Layout from '../../components/Layout';
import Guitar from '../../components/Guitar';
import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('/cours-guitare-geneve');
export default function GuitarPage() {
  return (
    <Layout>
      <Guitar />
    </Layout>
  );
}
