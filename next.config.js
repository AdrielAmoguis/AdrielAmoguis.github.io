/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use export mode for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: 'https://adrielamoguis.com',
  }),
  
  // Development and general config
  images: {
    domains: ['localhost'],
  },
  
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig