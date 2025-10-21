import { NextResponse } from "next/server";

function normalizeBaseUrl(input?: string | null): string {
  const raw = (input || "").trim();
  if (!raw) return "https://example.com";
  const withProto = raw.startsWith("http://") || raw.startsWith("https://")
    ? raw
    : `https://${raw}`;
  try { new URL(withProto); return withProto; } catch { return "https://example.com"; }
}

export async function GET() {
  const base = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);
  const paths = ["", "#servicios", "#como-funciona", "#galeria", "#faq", "#contacto"];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths.map(p => `<url><loc>${base}/${p}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join("")}
  </urlset>`;
  return new NextResponse(body, { headers: { "Content-Type": "application/xml" } });
}
