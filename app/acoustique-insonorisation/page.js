import Layout from '../../components/Layout';
import Acoustique from '../../components/Acoustique';

export const metadata = {
  title: 'Acoustique & insonorisation à Genève | Atahualpa Music Studio',
  description:
    'Mesures acoustiques, analyse du bruit, insonorisation et traitement acoustique sur mesure à Genève. Diagnostic et intervention sur site.',
  alternates: {
    canonical: 'https://atahualpamusicstudio.com/acoustique-insonorisation',
  },
};

export default function AcoustiquePage() {
  return (
    <Layout>
      <Acoustique />
    </Layout>
  );
}
