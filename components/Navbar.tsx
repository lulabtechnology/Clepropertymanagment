"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { waUrl } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  const wa = waUrl(
    phone,
    "Hola Clé, me gustaría recibir información sobre la gestión de mi propiedad."
  );

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white text-brand-blue shadow border-b border-black/5"
      aria-label="Barra de navegación principal"
    >
      {/* Header más alto en desktop para alojar logo grande */}
      <div className="mx-auto grid h-20 md:h-28 max-w-6xl grid-cols-3 items-center px-4">
        {/* Logo MUY grande (controlado por altura) */}
        <div className="flex items-center">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Clé Property Management"
              width={560}
              height={140}
              // móvil: h-14 ; desktop: h-24
              className="h-14 w-auto md:h-24"
              priority
            />
          </Link>
        </div>

        {/* Centro: ÚNICO botón Contáctenos */}
        <div className="flex items-center justify-center">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="rounded-full bg-[color:var(--brand-gold)] px-7 py-3 font-medium text-white shadow-soft hover:opacity-90"
          >
            Contáctenos
          </a>
        </div>

        {/* Menú derecha + hamburguesa móvil */}
        <div className="flex items-center justify-end">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#servicios" className="hover:opacity-90">Servicios</Link>
            <Link href="#galeria" className="hover:opacity-90">Galería</Link>
            <Link href="#faq" className="hover:opacity-90">FAQ</Link>
          </nav>
          <button
            className="md:hidden rounded-lg p-2 text-brand-blue"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú móvil sin CTA */}
      {open && (
        <div className="md:hidden bg-white text-brand-blue border-t border-black/5">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <Link href="#servicios" className="py-2" onClick={() => setOpen(false)}>
              Servicios
            </Link>
            <Link href="#galeria" className="py-2" onClick={() => setOpen(false)}>
              Galería
            </Link>
            <Link href="#faq" className="py-2" onClick={() => setOpen(false)}>
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
