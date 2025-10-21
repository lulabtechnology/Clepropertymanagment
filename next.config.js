/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Habilita si usas imágenes remotas en el futuro
      { protocol: "https", hostname: "**" }
    ]
  }
};
module.exports = nextConfig;
