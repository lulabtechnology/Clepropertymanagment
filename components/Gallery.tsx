"use client";

import Section from "./Section";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const pics = [
  { src: "/images/prop-1.jpg", alt: "Galería 1" },
  { src: "/images/prop-2.jpg", alt: "Galería 2" },
  { src: "/images/prop-3.jpg", alt: "Galería 3" },
  { src: "/images/prop-4.jpg", alt: "Galería 4" },
  { src: "/images/prop-5.jpg", alt: "Galería 5" },
];

export default function Gallery() {
  const [i, setI] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setI((p) => (p - 1 + pics.length) % pics.length);
  const next = () => setI((p) => (p + 1) % pics.length);

  // Accesibilidad: flechas teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="galeria" title="Galería" subtitle={undefined}>
      <div className="relative overflow-hidden rounded-2xl shadow-soft">
        {/* Pista */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {pics.map((p) => (
            <div key={p.src} className="relative aspect-[16/9] w-full shrink-0">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                quality={95}
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) 704px, 100vw"
                className="object-cover"
                placeholder="empty"
                priority={p.src === pics[0].src}
              />
            </div>
          ))}
        </div>

        {/* Flechas (manual) */}
        <button
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-2 text-brand-blue shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-2 text-brand-blue shadow hover:bg-white"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {pics.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir a imagen ${idx + 1}`}
              className={`dot ${idx === i ? "dot-active" : ""}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
