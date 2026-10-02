const origin = 'https://atahualpamusicstudio.com';
const id = `${origin}/#business`;
export const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'School'],
      '@id': id,
      name: 'Atahualpa Music Studio',
      url: origin,
      telephone: '+41772792514',
      email: 'contact@atahualpamusicstudio.com',
      image: `${origin}/og-image.png`,
      logo: `${origin}/assets/atahualpa-music-studio-logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rampe de Cologny 1',
        addressLocality: 'Cologny',
        postalCode: '1223',
        addressCountry: 'CH',
      },
      sameAs: ['https://www.instagram.com/atahualpa_studio'],
    },
    ...[
      [
        'lecons-musique',
        'Cours de musique',
        'Guitare, basse et production musicale ; ateliers multi-instrumentaux en petits groupes.',
      ],
      [
        'cours-guitare-geneve',
        'Cours de guitare',
        'Cours de guitare électrique et acoustique pour enfants, adolescents et adultes.',
      ],
      [
        'prise-son-video',
        'Production audiovisuelle',
        'Prise de son, vidéo, streaming, mixage et mastering.',
      ],
      [
        'acoustique-insonorisation',
        'Acoustique et insonorisation',
        'Diagnostic, mesures et solutions acoustiques sur mesure.',
      ],
    ].map(([path, name, description]) => ({
      '@type': 'Service',
      '@id': `${origin}/${path}#service`,
      url: `${origin}/${path}`,
      name,
      description,
      provider: { '@id': id },
    })),
  ],
};
