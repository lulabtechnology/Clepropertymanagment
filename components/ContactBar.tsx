"use client";

import Button from "./Button";
import { waUrl } from "@/lib/utils";

export default function ContactBar() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@example.com";
  const wa = waUrl(phone, "Hola Clé, me gustaría conversar sobre mi propiedad.");
  return (
    <section id="contacto" className="bg-brand-blue text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl">¿Listo para rentabilizar tu propiedad?</h3>
          <p className="text-white/90">Contáctanos por WhatsApp o correo y empecemos hoy.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={wa}>
            <Button variant="ghost">WhatsApp</Button>
          </a>
          <a href={`mailto:${email}?subject=Interés%20en%20gestión%20de%20propiedad`}>
            <Button variant="outline">Correo</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
