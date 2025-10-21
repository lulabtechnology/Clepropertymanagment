"use client";

import Section from "./Section";
import Image from "next/image";
import { useEffect, useState } from "react";

const pics = [
  { src: "/images/prop-1.jpg", caption: "Apartamento moderno en Costa del Este" },
  { src: "/images/prop-2.jpg", caption: "Vista al mar – Punta Pacífica" },
  { src: "/images/prop-3.jpg", caption: "Casa familiar en Clayton" },
  { src: "/images/prop-4.jpg", caption: "Estudio elegante en Obarrio" },
  { src: "/images/prop-5.jpg", caption: "Loft luminoso en San Francisco" }
];

export default function Gallery() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % pics.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Section id="galeria" title="Propiedades" subtitle="Un vistazo a la experiencia Clé.">
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
              <Image src={p.src} alt={p.caption} fill className="object-cover" />
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
