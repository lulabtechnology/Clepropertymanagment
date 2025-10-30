"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Imágenes:
 *  - Slide 1 NUEVA: /public/images/hero-1-new.jpg  <-- súbela tú
 *  - Slide 2:        /public/images/hero-2.jpg
 *  - Slide 3:        /public/images/hero-3.jpg
 * Logo Airbnb (opcional): /public/images/airbnb.png
 */

const slides = [
  {
    src: "/images/hero-1-new.jpg", // <--- CAMBIADA
    alt: "Superhost Airbnb",
    superTitle: "Administramos tu propiedad", // <--- NUEVO arriba del título
    title: "Superhost en Airbnb",
    subtitle: "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.",
    showAirbnb: true,
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Por qué elegirnos",
    title: "POR QUÉ ELEGIRNOS",
    subtitle:
      "Cada propiedad es única; nuestra gestión también. En Clé Property Management diseñamos soluciones personalizadas para cada propiedad, adaptándonos a su estilo, sus metas y sus tiempos.",
    showAirbnb: false,
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Gestión completa. Resultados reales.",
    title: "Gestión completa. Resultados reales.",
    subtitle:
      "En Clé nos ocupamos de todo para que tu propiedad genere ingresos de forma sencilla y segura.", // <--- TEXTO NUEVO
    showAirbnb: false,
  },
  // Slide 4 ELIMINADO
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // autoplay: 12s entre imágenes — SIN pausa por hover
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 12000);
    return () => clearInterval(id);
  }, []);

  // Parallax suave en overlay (no escalar imagen para evitar blur)
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section id="hero" className="relative h-[86svh] md:h-[92svh] overflow-hidden">
      <div ref={containerRef} className="absolute inset-0">
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

      {/* Bloque centrado; texto blanco más grande */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          key={`panel-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl text-center p-2 md:p-4"
        >
          {/* Super-título (solo en slide 1) */}
          {slides[index].superTitle && (
            <div className="mb-2 text-white/95 font-serif text-lg md:text-2xl font-semibold">
              {slides[index].superTitle}
            </div>
          )}

          {/* Título más grande y en negrita; logo Airbnb más grande en slide 1 */}
          <h1 className="text-white font-serif font-extrabold tracking-tight text-4xl md:text-6xl leading-tight">
            {slides[index].showAirbnb && (
              <span className="inline-flex items-center justify-center mr-2 align-middle">
                <img
                  src="/images/airbnb.png"
                  alt="Airbnb"
                  width={40}
                  height={40}
                  className="h-9 w-auto md:h-10"
                />
              </span>
            )}
            {slides[index].title}
          </h1>

          {/* Subtítulo más grande en cursiva */}
          <p className="mt-4 mx-auto max-w-4xl text-white/95 italic text-lg md:text-xl leading-relaxed">
            {slides[index].subtitle}
          </p>
        </motion.div>
      </div>

      {/* Dots (sin flechas) */}
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
