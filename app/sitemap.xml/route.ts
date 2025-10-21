import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const urls = ["", "#servicios", "#como-funciona", "#galeria", "#faq", "#contacto"];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `<url><loc>${base}/${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      )
      .join("")}
  </urlset>`;
  return new NextResponse(body, { headers: { "Content-Type": "application/xml" } });
}
