import Layout from '../../components/Layout';
import Lecons from '../../components/Lecons';

export const metadata = {
  title: 'Cours de musique à Genève | Atahualpa Music Studio',
  description:
    'Atelier multi-instrumental en petits groupes dès 5 ans et cours individuels à Cologny, Genève. Une pédagogie structurée, créative et personnalisée.',
  alternates: {
    canonical: 'https://atahualpamusicstudio.com/lecons-musique',
  },
};

const ReleasesPage = () => {
  return (
    <Layout>
      <Lecons />
    </Layout>
  );
};

export default ReleasesPage;
