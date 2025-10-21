"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { waUrl } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/hero-1.jpg", alt: "Propiedad destacada 1" },
  { src: "/images/hero-2.jpg", alt: "Propiedad destacada 2" },
  { src: "/images/hero-3.jpg", alt: "Propiedad destacada 3" },
  { src: "/images/hero-4.jpg", alt: "Propiedad destacada 4" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Parallax leve SOLO en el overlay (no escalar la imagen para no suavizar)
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  const wa = waUrl(
    phone,
    "Hola Clé, tengo una propiedad en Panamá y quiero más información."
  );

  return (
    <section id="hero" className="relative h-[86svh] md:h-[92svh] overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Overlay con parallax suave (NO tocar la imagen para evitar blur) */}
            <motion.div style={{ y }} className="absolute inset-0 bg-hero-overlay" />
            <Image
              src={s.src}
              alt={s.alt}
              fill
              // Calidad alta (sigue siendo comprimido a AVIF/WebP)
              quality={90}
              // MUY IMPORTANTE: indica el ancho real del viewport para un srcset correcto
              sizes="100vw"
              // En el primer slide pedimos alta prioridad (mejor nítidez inicial)
              priority={i === 0}
              // Para el primer slide también sube fetchPriority
              fetchPriority={i === 0 ? "high" : "auto"}
              // NO usar scale grande: usar GPU para mayor nitidez en movimiento
              className="object-cover transform-gpu will-change-transform"
              placeholder="empty"
            />
          </motion.div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-3xl md:text-5xl font-serif tracking-tight"
        >
          ¿Tienes una propiedad vacía en Panamá? <br className="hidden md:block" />
          Conviértela en ingresos mensuales sin esfuerzo.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-white/90"
        >
          Si vives en Panamá y tienes una propiedad para invertir o alquilar, Clé
          Property Management te ofrece una gestión integral: atención 24/7, mantenimiento,
          marketing y control financiero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6"
        >
          <a href={wa}>
            <Button variant="ghost" aria-label="Contacto por WhatsApp">Contáctenos</Button>
          </a>
        </motion.div>
      </div>

      {/* Controles */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-2">
        <button
          aria-label="Anterior"
          className="pointer-events-auto rounded-full bg-black/30 p-2 text-white"
          onClick={prev}
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Siguiente"
          className="pointer-events-auto rounded-full bg-black/30 p-2 text-white"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              className={`dot ${i === index ? "dot-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
