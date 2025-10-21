/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Formatos modernos con mejor nitidez a igual peso
    formats: ["image/avif", "image/webp"],
    // Incluye tamaños altos para pantallas grandes / DPR alto
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048, 2560, 3840],
    // (opcional) imageSizes si usas <Image width/height> para thumbs chicos:
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
};
module.exports = nextConfig;
