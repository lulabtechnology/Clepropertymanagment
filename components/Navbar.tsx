"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          {/* Logo centrado verticalmente; quitamos el texto "Clé" al lado */}
          <Image
            src="/images/logo.png"
            alt="Clé Property Management"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          {/* Slogan en azul, discreto */}
          <span
            className="ml-2 hidden sm:inline-flex items-center text-xs font-medium text-brand-blue"
            title="Slogan"
          >
            Tu propiedad, nuestra pasión
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#servicios" className="hover:opacity-90">Servicios</Link>
          <Link href="#galeria" className="hover:opacity-90">Galería</Link>
          <Link href="#faq" className="hover:opacity-90">FAQ</Link>
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
            <a href={wa} className="pt-2 pb-3 w-fit" onClick={closeMenu}>
              <Button>Contáctenos</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
