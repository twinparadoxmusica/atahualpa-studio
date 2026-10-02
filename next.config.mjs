export default {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      {
        source: '/reserver-classe',
        destination: '/lecons-musique#groupes',
        permanent: true,
      },
    ];
  },
};
