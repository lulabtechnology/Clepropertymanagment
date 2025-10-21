/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],   // <-- formatos modernos más nítidos
    // deviceSizes por defecto ya incluye 1920/2048/3840; si quieres, puedes forzar:
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840]
  }
};
module.exports = nextConfig;
