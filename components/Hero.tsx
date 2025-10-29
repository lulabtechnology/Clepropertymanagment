"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Imágenes: /public/images/hero-1..4.jpg
 * Logo Airbnb: /public/images/airbnb.png  (sube ese archivo)
 */
const slides = [
  {
    src: "/images/hero-1.jpg",
    alt: "Superhost Airbnb",
    title: "Superhost en Airbnb",
    subtitle:
      "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.",
    showAirbnb: true
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Por qué elegirnos",
    title: "POR QUÉ ELEGIRNOS",
    subtitle:
      "Cada propiedad es única; nuestra gestión también. En Clé Property Management diseñamos soluciones personalizadas para cada propiedad, adaptándonos a su estilo, sus metas y sus tiempos.",
    showAirbnb: false
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Gestión completa. Resultados reales.",
    title: "Gestión completa. Resultados reales.",
    subtitle:
      "En Clé nos encargamos de cada detalle para que tú solo recibas tus ingresos: Publicación y reservas en Airbnb y Booking · Limpieza y mantenimiento profesional · Atención personalizada a huéspedes · Reportes de ingresos y pagos seguros.",
    showAirbnb: false
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Gestión financiera transparente",
    title: "Gestión financiera transparente",
    subtitle:
      "Cada número cuenta, y tú lo ves todo. En Clé administramos tus ingresos y gastos con precisión y total visibilidad. Accede a reportes claros de reservas, mantenimientos y pagos, para que tengas siempre el control de tus finanzas.",
    showAirbnb: false
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // autoplay: 12s entre imágenes
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 12000);
    return () => clearInterval(id);
  }, [paused]);

  // Parallax solo en overlay (no escalar imagen para evitar blur)
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

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

      {/* Bloque centrado; texto blanco (título bold y subtítulo cursiva) */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          key={`panel-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl text-center p-2 md:p-4"
        >
          <h1 className="text-white font-serif font-bold tracking-tight text-3xl md:text-5xl leading-tight">
            {slides[index].showAirbnb && (
              <span className="inline-flex items-center justify-center mr-2 align-middle">
                {/* Usamos <img> para evitar el error de Next con SVG faltante */}
                <img
                  src="/images/airbnb.png"
                  alt="Airbnb"
                  width={34}
                  height={34}
                  className="h-7 w-auto md:h-8"
                />
              </span>
            )}
            {slides[index].title}
          </h1>

          <p className="mt-4 mx-auto max-w-4xl text-white/95 italic text-base md:text-lg leading-relaxed">
            {slides[index].subtitle}
          </p>
        </motion.div>
      </div>

      {/* Sin flechas */}
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
