"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Imágenes:
 *  - Slide 1 NUEVA: /public/images/hero-1-new.jpg
 *  - Slide 2:        /public/images/hero-2.jpg
 *  - Slide 3:        /public/images/hero-3.jpg
 * Logo Airbnb (opcional): /public/images/airbnb.png
 */

const slides = [
  {
    src: "/images/hero-1-new.jpg",
    alt: "Superhost Airbnb",
    superTitle: "Administramos tu propiedad",
    title: "Superhost en Airbnb",
    subtitle:
      "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.",
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
      "En Clé nos ocupamos de todo para que tu propiedad genere ingresos de forma sencilla y segura.",
    showAirbnb: false,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Parallax del overlay (no escalamos la imagen para evitar blur adicional)
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section id="hero" className="relative h-[86svh] md:h-[92svh] overflow-hidden">
      {/* Slides SIN autoplay: cambian solo con dots */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Capa de color + parallax */}
            <motion.div style={{ y }} className="absolute inset-0 bg-hero-overlay" />
            {/* Imagen con blur suave y calidad alta */}
            <Image
              src={s.src}
              alt={s.alt}
              fill
              quality={95}
              sizes="100vw"
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="object-cover transform-gpu will-change-transform scale-[1.02] [filter:blur(1.2px)]"
              placeholder="empty"
            />
          </motion.div>
        ))}
      </div>

      {/* Texto centrado; tamaños ↑; título bold; subtítulo cursiva */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          key={`panel-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl text-center p-2 md:p-4"
        >
          {/* Super-título SOLO en slide 1 */}
          {slides[index].superTitle && (
            <div className="mb-2 text-white/95 font-serif text-2xl md:text-4xl font-semibold">
              {slides[index].superTitle}
            </div>
          )}

          {/* Título grande; logo Airbnb en slide 1 */}
          <h1 className="text-white font-serif font-extrabold tracking-tight text-5xl md:text-7xl leading-tight">
            {slides[index].showAirbnb && (
              <span className="inline-flex items-center justify-center mr-2 align-middle">
                <img
                  src="/images/airbnb.png"
                  alt="Airbnb"
                  width={44}
                  height={44}
                  className="h-10 w-auto md:h-11"
                />
              </span>
            )}
            {slides[index].title}
          </h1>

          {/* Subtítulo más grande en cursiva */}
          <p className="mt-4 mx-auto max-w-4xl text-white/95 italic text-xl md:text-2xl leading-relaxed">
            {slides[index].subtitle}
          </p>
        </motion.div>
      </div>

      {/* Dots (manual) */}
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
