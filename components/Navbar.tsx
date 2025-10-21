"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { waUrl } from "@/lib/utils";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  const wa = waUrl(
    phone,
    "Hola Clé, me gustaría recibir información sobre la gestión de mi propiedad."
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        solid ? "navbar-solid" : "bg-transparent"
      }`}
      aria-label="Barra de navegación principal"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Clé Property Management"
            width={36}
            height={36}
            priority
          />
          <span className="font-serif text-lg text-brand-blue">Clé</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-brand-blue">
          <Link href="#servicios">Servicios</Link>
          <Link href="#como-funciona">¿Cómo funciona?</Link>
          <Link href="#galeria">Galería</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contacto">Contacto</Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Button>Contáctenos</Button>
          </a>
        </nav>
        <a className="md:hidden" href={wa} aria-label="WhatsApp">
          <Button>Contáctenos</Button>
        </a>
      </div>
    </header>
  );
}
