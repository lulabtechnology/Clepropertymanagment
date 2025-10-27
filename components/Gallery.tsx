"use client";

import Section from "./Section";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Reemplaza las imágenes por las de TU departamento en /public/images.
 * (Rutas mantienen el esquema; tú subes los archivos definitivos).
 */
const pics = [
  { src: "/images/prop-1.jpg", caption: "Espacio social" },
  { src: "/images/prop-2.jpg", caption: "Dormitorio principal" },
  { src: "/images/prop-3.jpg", caption: "Cocina equipada" },
  { src: "/images/prop-4.jpg", caption: "Balcón con vista" },
  { src: "/images/prop-5.jpg", caption: "Área de trabajo" }
];

export default function Gallery() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % pics.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Section id="galeria" title="Galería" subtitle={undefined}>
      <div
        className="relative overflow-hidden rounded-2xl shadow-soft"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {pics.map((p) => (
            <figure key={p.src} className="relative aspect-[16/9] w-full shrink-0">
              <Image
                src={p.src}
                alt={p.caption}
                fill
                quality={90}
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) 704px, 100vw"
                className="object-cover"
                placeholder="empty"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-white text-sm">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-3">
          <div className="flex gap-2">
            {pics.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === i ? "dot-active" : ""}`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
