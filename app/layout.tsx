import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

/** Normaliza una URL de entorno para que siempre tenga protocolo y sea válida */
function normalizeBaseUrl(input?: string | null): string {
  const raw = (input || "").trim();
  if (!raw) return "https://example.com";
  const withProto = raw.startsWith("http://") || raw.startsWith("https://")
    ? raw
    : `https://${raw}`;
  try {
    // valida
    // eslint-disable-next-line no-new
    new URL(withProto);
    return withProto;
  } catch {
    return "https://example.com";
  }
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const siteName = "Clé Property Management";
const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);
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
