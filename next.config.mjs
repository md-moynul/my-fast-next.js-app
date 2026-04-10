/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1761839258044-e59f324b5a7f
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
