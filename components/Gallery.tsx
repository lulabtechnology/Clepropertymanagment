"use client";

import Section from "./Section";
import Image from "next/image";
import { useState } from "react";

const pics = [
  { src: "/images/prop-1.jpg", alt: "Galería 1" },
  { src: "/images/prop-2.jpg", alt: "Galería 2" },
  { src: "/images/prop-3.jpg", alt: "Galería 3" },
  { src: "/images/prop-4.jpg", alt: "Galería 4" },
  { src: "/images/prop-5.jpg", alt: "Galería 5" },
];

export default function Gallery() {
  const [i, setI] = useState(0);

  return (
    <Section id="galeria" title="Galería" subtitle={undefined}>
      <div className="relative overflow-hidden rounded-2xl shadow-soft">
        {/* Pista */}
        <div
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

        {/* Solo DOTS (manual) */}
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
