"use client";

import Section from "./Section";
import Image from "next/image";
import { useEffect, useState } from "react";

const pics = [
  { src: "/images/prop-1.jpg", alt: "Galería 1" },
  { src: "/images/prop-2.jpg", alt: "Galería 2" },
  { src: "/images/prop-3.jpg", alt: "Galería 3" },
  { src: "/images/prop-4.jpg", alt: "Galería 4" },
  { src: "/images/prop-5.jpg", alt: "Galería 5" }
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
            <div key={p.src} className="relative aspect-[16/9] w-full shrink-0">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                quality={90}
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) 704px, 100vw"
                className="object-cover"
                placeholder="empty"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-3">
          <div className="flex gap-2">
            {pics.map((_, idx) => (
              <span key={idx} className={`dot ${idx === i ? "dot-active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
