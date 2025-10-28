"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { waUrl } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Cada slide con su título/subtítulo. El texto se muestra en AZUL (brand-blue).
 * Tú subes las imágenes: /public/images/hero-1..4.jpg
 */
const slides = [
  {
    src: "/images/hero-1.jpg",
    alt: "Superhost Airbnb",
    title: "Superhost en Airbnb",
    subtitle:
      "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo."
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Por qué elegirnos",
    title: "POR QUÉ ELEGIRNOS",
    subtitle:
      "Cada propiedad es única; nuestra gestión también. En Clé Property Management diseñamos soluciones personalizadas para cada propiedad, adaptándonos a su estilo, sus metas y sus tiempos."
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Gestión completa. Resultados reales.",
    title: "Gestión completa. Resultados reales.",
    subtitle:
      "En Clé nos encargamos de cada detalle para que tú solo recibas tus ingresos: Publicación y reservas en Airbnb y Booking · Limpieza y mantenimiento profesional · Atención personalizada a huéspedes · Reportes de ingresos y pagos seguros."
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Gestión financiera transparente",
    title: "Gestión financiera transparente",
    subtitle:
      "Cada número cuenta, y tú lo ves todo. En Clé administramos tus ingresos y gastos con precisión y total visibilidad. Accede a reportes claros de reservas, mantenimientos y pagos, para que tengas siempre el control de tus finanzas."
  }
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

  // Parallax leve en overlay (no escalamos la imagen para evitar blur)
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
            {/* Overlay con parallax suave */}
            <motion.div style={{ y }} className="absolute inset-0 bg-hero-overlay" />
            <Image
              src={s.src}
              alt={s.alt}
              fill
              quality={90}
              sizes="100vw"
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="object-cover transform-gpu will-change-transform"
              placeholder="empty"
            />
          </motion.div>
        ))}
      </div>

      {/* Contenido: AHORA en AZUL */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
        <motion.h1
          key={`title-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-3xl md:text-5xl font-serif tracking-tight text-brand-blue"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={`subtitle-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-brand-blue/90"
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.div
          key={`cta-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6"
        >
          <a href={wa}>
            <Button aria-label="Contacto por WhatsApp">Contáctenos</Button>
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
