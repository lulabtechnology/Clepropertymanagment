"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Asegúrate de tener:
 *  - /public/images/hero-1-new.jpg       (móvil)
 *  - /public/images/hero-1-new@2x.jpg    (desktop 2560px+)
 *  - /public/images/airbnb.png
 */

type Slide = {
  srcMobile: string;
  srcDesktop?: string;
  alt: string;
  lines: { text: string; withAirbnb?: boolean }[];
  subtitle: string;
  enhance?: boolean;
};

const slides: Slide[] = [
  {
    srcMobile: "/images/hero-1-new.jpg",
    srcDesktop: "/images/hero-1-new@2x.jpg",
    alt: "Superhost Airbnb",
    lines: [
      { text: "Administramos tu propiedad" },
      { text: "Superhost en Airbnb", withAirbnb: true },
    ],
    subtitle:
      "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.",
    enhance: true,
  },
  {
    srcMobile: "/images/hero-2.jpg",
    alt: "Por qué elegirnos",
    lines: [{ text: "POR QUÉ ELEGIMOS" }],
    subtitle:
      "Cada propiedad es única; nuestra gestión también. En Clé Property Management diseñamos soluciones personalizadas para cada propiedad, adaptándonos a su estilo, sus metas y sus tiempos.",
  },
  {
    srcMobile: "/images/hero-3.jpg",
    alt: "Gestión completa. Resultados reales.",
    lines: [{ text: "Gestión completa. Resultados reales." }],
    subtitle:
      "En Clé nos ocupamos de todo para que tu propiedad genere ingresos de forma sencilla y segura.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  const slide = slides[index];

  return (
    <section id="hero" className="relative h-[86svh] md:h-[92svh] overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        {slides.map((s, i) => {
          const src = s.srcDesktop ?? s.srcMobile;
          return (
            <motion.div
              key={`${s.srcMobile}-${i}`}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div style={{ y }} className="absolute inset-0 bg-hero-overlay" />
              {/* Móvil */}
              <Image
                src={s.srcMobile}
                alt={s.alt}
                fill
                quality={95}
                sizes="(max-width: 767px) 100vw"
                priority={i === 0}
                className={`md:hidden object-cover object-center ${
                  s.enhance ? "scale-[1.03] [filter:blur(0.8px)]" : ""
                }`}
              />
              {/* Desktop */}
              <Image
                src={src}
                alt={s.alt}
                fill
                quality={95}
                sizes="(min-width: 768px) 100vw"
                priority={i === 0}
                className={`hidden md:block object-cover object-center ${
                  s.enhance ? "scale-[1.04] [filter:blur(1.1px)]" : ""
                }`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Texto */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          key={`panel-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl text-center p-2 md:p-4"
        >
          {/* Título: mismas clases para ambas líneas.
              En el slide 1, damos más separación entre línea 1 y 2 (mb-3 md:mb-4) */}
          <h1 className="font-serif font-extrabold tracking-tight text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] leading-[1.08] text-4xl md:text-6xl lg:text-7xl">
  {slide.lines.map((ln, idx) => (
    <span
      key={idx}
      className={`block ${
        index === 0 && idx === 0 ? "mb-6 md:mb-8 lg:mb-10" : ""
      }`}
    >
      {ln.withAirbnb && (
        <span className="inline-flex items-center justify-center mr-2 align-middle">
          <img
            src="/images/airbnb.png"
            alt="Airbnb"
            width={44}
            height={44}
            className="h-9 w-auto md:h-10"
          />
        </span>
      )}
      {ln.text}
    </span>
  ))}
</h1>


          <p className="mt-4 mx-auto max-w-4xl text-white/95 italic text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            {slide.subtitle}
          </p>
        </motion.div>
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
