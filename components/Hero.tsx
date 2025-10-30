"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Recomendación: sube ambas imágenes del slide 1
 *  - /public/images/hero-1-new.jpg        (móvil)
 *  - /public/images/hero-1-new@2x.jpg     (desktop, 2560px+)
 * Resto:
 *  - /public/images/hero-2.jpg
 *  - /public/images/hero-3.jpg
 * Logo Airbnb: /public/images/airbnb.png
 */

type Slide = {
  srcMobile: string;
  srcDesktop?: string;
  alt: string;
  superTitle?: string;
  title: string;
  subtitle: string;
  showAirbnb?: boolean;
  enhance?: boolean; // aplicar blur/scale extra
};

const slides: Slide[] = [
  {
    srcMobile: "/images/hero-1-new.jpg",
    srcDesktop: "/images/hero-1-new@2x.jpg",
    alt: "Superhost Airbnb",
    superTitle: "Administramos tu propiedad",
    title: "Superhost en Airbnb",
    subtitle:
      "Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.",
    showAirbnb: true,
    enhance: true, // blur/scale suaves
  },
  {
    srcMobile: "/images/hero-2.jpg",
    alt: "Por qué elegirnos",
    title: "POR QUÉ ELEGIRNOS",
    subtitle:
      "Cada propiedad es única; nuestra gestión también. En Clé Property Management diseñamos soluciones personalizadas para cada propiedad, adaptándonos a su estilo, sus metas y sus tiempos.",
  },
  {
    srcMobile: "/images/hero-3.jpg",
    alt: "Gestión completa. Resultados reales.",
    title: "Gestión completa. Resultados reales.",
    subtitle:
      "En Clé nos ocupamos de todo para que tu propiedad genere ingresos de forma sencilla y segura.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section id="hero" className="relative h-[86svh] md:h-[92svh] overflow-hidden">
      {/* Slides sin autoplay */}
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
              {/* Mobile */}
              <Image
                src={s.srcMobile}
                alt={s.alt}
                fill
                quality={95}
                sizes="(max-width: 767px) 100vw"
                priority={i === 0}
                className={`object-cover object-center md:hidden ${
                  s.enhance ? "scale-[1.03] [filter:blur(0.8px)]" : ""
                }`}
              />
              {/* Desktop (usa @2x si existe) */}
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

      {/* Texto centrado */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          key={`panel-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl text-center p-2 md:p-4"
        >
          {slides[index].superTitle && (
            <div className="mb-2 text-white/95 font-serif text-2xl md:text-4xl font-semibold">
              {slides[index].superTitle}
            </div>
          )}

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
