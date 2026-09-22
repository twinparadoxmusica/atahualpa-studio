import Layout from '../../components/Layout';
import Acoustique from '../../components/Acoustique';

export const metadata = {
  title: 'Acoustique & insonorisation à Genève | Atahualpa Music Studio',
  description:
    'Diagnostic, mesures acoustiques, analyse du bruit, conception et réalisation de travaux d’insonorisation et de traitement acoustique sur mesure à Genève.',
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
