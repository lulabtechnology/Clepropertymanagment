"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { waUrl } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al navegar
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
      className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur shadow border-b border-black/5"
      aria-label="Barra de navegación principal"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Clé Property Management"
            width={36}
            height={36}
            priority
          />
          <span className="font-serif text-lg text-brand-blue">Clé</span>

          {/* Slogan pill (fondo azul). Cambia bg a black si lo prefieren negro */}
          <span
            className="ml-2 hidden sm:inline-flex items-center rounded-full bg-brand-blue px-2.5 py-1 text-xs font-medium text-white"
            title="Slogan"
          >
            Tu propiedad, nuestra pasión
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-brand-blue">
          <Link href="#servicios">Servicios</Link>
          <Link href="#galeria">Galería</Link>
          <Link href="#faq">FAQ</Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Button>Contáctenos</Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-lg p-2 text-brand-blue"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-black/5">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-brand-blue">
            <Link href="#servicios" className="py-2" onClick={closeMenu}>
              Servicios
            </Link>
            <Link href="#galeria" className="py-2" onClick={closeMenu}>
              Galería
            </Link>
            <Link href="#faq" className="py-2" onClick={closeMenu}>
              FAQ
            </Link>
            <a href={wa} className="pt-2 pb-3 w-fit" onClick={closeMenu}>
              <Button>Contáctenos</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
