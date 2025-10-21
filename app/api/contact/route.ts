import { NextResponse } from "next/server";

/**
 * Placeholder para integrar email provider (Resend, SendGrid, SES, etc.)
 * Hoy solo responde 501 para que el front haga fallback a WhatsApp/mailto.
 */
export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  console.log("Contacto recibido (placeholder):", data);
  return NextResponse.json(
    { ok: false, message: "Email API no configurada: usar WhatsApp/mailto fallback." },
    { status: 501 }
  );
}
