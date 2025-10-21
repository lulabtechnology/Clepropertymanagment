import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const siteName = "Clé Property Management";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const description =
  "Gestión integral de propiedades en Panamá: atención 24/7, mantenimiento, marketing y control financiero.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteName,
  description,
  keywords: ["property management", "alquiler", "Panamá", "administración de propiedades"],
  openGraph: {
    title: siteName,
    description,
    url: baseUrl,
    siteName,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: siteName }],
    type: "website",
    locale: "es_PA"
  },
  icons: { icon: "/favicon.ico" }
};

export const viewport: Viewport = {
  themeColor: "#1F3A68",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
