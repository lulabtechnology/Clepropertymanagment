// components/FAQ.tsx
import Section from "./Section";

const items = [
  {
    q: "¿Cuáles son los requisitos? / What are the requirements?",
    a: "La propiedad debe estar amoblada, en excelente estado y con servicios activos.",
  },
  {
    q: "¿Y si no cumple con todo? / What if it doesn’t meet all requirements?",
    a: "Te guiamos paso a paso para adecuarla y alcanzar los estándares Clé.",
  },
  {
    q: "¿Cuánto puedo ganar? / How much can I earn?",
    a: "Depende de la ubicación, tamaño y temporada. Te damos una proyección real y rentable.",
  },
  {
    q: "¿Qué incluye el servicio? / What’s included?",
    a: "Gestión completa: publicación, precios, limpieza, atención al huésped y mantenimiento.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ" subtitle={undefined}>
      <div className="divide-y divide-brand-blue/10 overflow-hidden rounded-2xl border border-brand-blue/10 bg-white">
        {items.map((it, i) => (
          <details
            key={i}
            className="group open:bg-brand-blue/5 px-4 py-4 md:px-6 md:py-5"
          >
            <summary className="cursor-pointer list-none font-medium text-brand-blue">
              {it.q}
            </summary>
            <div className="mt-2 text-brand-blue/90">
              {it.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
