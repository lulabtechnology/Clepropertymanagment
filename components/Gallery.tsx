"use client";

import Section from "./Section";
import Image from "next/image";

const pics = [
  { src: "/images/prop-1.jpg", alt: "Galería 1" },
  { src: "/images/prop-2.jpg", alt: "Galería 2" },
  { src: "/images/prop-3.jpg", alt: "Galería 3" },
  { src: "/images/prop-4.jpg", alt: "Galería 4" },
  { src: "/images/prop-5.jpg", alt: "Galería 5" },
  { src: "/images/prop-6.jpg", alt: "Galería 6" },
];

export default function Gallery() {
  return (
    <Section id="galeria" title="Galería" subtitle={undefined}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pics.map((p) => (
          <div key={p.src} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              placeholder="empty"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
