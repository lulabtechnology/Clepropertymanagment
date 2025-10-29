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

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white text-brand-blue shadow border-b border-black/5"
      aria-label="Barra de navegación principal"
    >
      {/* GRID para centrar el CTA: logo | CTA | menú */}
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-4">
        {/* Izquierda: logo (sin texto adicional) */}
        <div className="flex items-center">
          <Link href="#hero" className="flex items-center" onClick={closeMenu}>
            {/* Ajusta h-10 si lo quieres aún más grande */}
            <Image
              src="/images/logo.png"
              alt="Clé Property Management"
              width={200}
              height={48}
              className="h-10 w-auto"
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
            className="rounded-full bg-[color:var(--brand-gold)] px-5 py-2 font-medium text-white shadow-soft hover:opacity-90"
          >
            Contáctenos
          </a>
        </div>

        {/* Derecha: menú (desktop) + hamburguesa (mobile) */}
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

      {/* Mobile menu SIN botón, solo links */}
      {open && (
        <div className="md:hidden bg-white text-brand-blue border-t border-black/5">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <Link href="#servicios" className="py-2" onClick={closeMenu}>
              Servicios
            </Link>
            <Link href="#galeria" className="py-2" onClick={closeMenu}>
              Galería
            </Link>
            <Link href="#faq" className="py-2" onClick={closeMenu}>
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
