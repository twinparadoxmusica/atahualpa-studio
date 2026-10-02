const origin = 'https://atahualpamusicstudio.com';
const pages = {
  '/': [
    'Atahualpa Music Studio à Cologny, Genève',
    'Cours de musique, captation audio et vidéo, acoustique et insonorisation à Cologny, Genève. Découvrez le studio, son équipe et ses services.',
  ],
  '/lecons-musique': [
    'Cours de musique & guitare à Cologny, Genève | Atahualpa',
    'Cours de guitare, basse et production musicale à Cologny, ainsi que des ateliers multi-instrumentaux en petits groupes dès 5 ans.',
  ],
  '/cours-guitare-geneve': [
    'Cours de guitare à Cologny, Genève | Atahualpa Music Studio',
    'Cours de guitare électrique et acoustique pour enfants, adolescents et adultes à Cologny. Débutants ou avancés, avec un parcours adapté à vos goûts et objectifs.',
  ],
  '/prise-son-video': [
    'Enregistrement & captation vidéo à Genève | Atahualpa',
    'Enregistrement de concerts, captation multicam, streaming, mixage et mastering à Genève. Découvrez nos réalisations et parlons de votre projet.',
  ],
  '/acoustique-insonorisation': [
    'Acoustique & insonorisation à Genève | Atahualpa',
    'Diagnostic, mesures et solutions sur mesure pour l’isolation phonique et le traitement acoustique à Genève. Parlons de votre espace.',
  ],
  '/apropos': [
    'Notre équipe à Cologny, Genève | Atahualpa Music Studio',
    'Découvrez l’équipe d’Atahualpa : enseignement musical, production audiovisuelle et acoustique. Retrouvez le studio à Cologny, face au lac Léman.',
  ],
  '/contact': [
    'Contact & accès à Cologny | Atahualpa Music Studio',
    'Contactez Atahualpa Music Studio pour un cours ou un projet. Rampe de Cologny 1, 1223 Cologny. WhatsApp, email et formulaire de contact.',
  ],
};
export function pageMetadata(path) {
  const [title, description] = pages[path];
  const url = `${origin}${path}`;
  const images = [
    {
      url: `${origin}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Atahualpa Music Studio',
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Atahualpa Music Studio',
      locale: 'fr_CH',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}
