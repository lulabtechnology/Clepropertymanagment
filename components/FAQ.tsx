import Section from "./Section";

const faqs = [
  {
    q: "¿Cuáles son los requisitos? / What are the requirements?",
    a_es: "La propiedad debe estar amoblada, en excelente estado y con servicios activos.",
    a_en: "Your property must be fully furnished, in excellent condition, and have active utilities."
  },
  {
    q: "¿Y si no cumple con todo? / What if it doesn’t meet all requirements?",
    a_es: "Te guiamos paso a paso para adecuarla y alcanzar los estándares Clé.",
    a_en: "We guide you step by step to meet Clé’s quality standards."
  },
  {
    q: "¿Cuánto puedo ganar? / How much can I earn?",
    a_es: "Depende de la ubicación, tamaño y temporada. Te damos una proyección real y rentable.",
    a_en: "It depends on location, size, and season. We’ll provide a realistic income projection."
  },
  {
    q: "¿Qué incluye el servicio? / What’s included?",
    a_es: "Gestión completa: publicación, precios, limpieza, atención al huésped y mantenimiento.",
    a_en: "Full management: listings, pricing, cleaning, guest care, and maintenance."
  }
];

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ">
      <div className="divide-y rounded-2xl border">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none font-medium text-brand-blue">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-brand-blue/90">{f.a_es}</p>
            <p className="mt-1 text-xs text-brand-blue/70 italic">{f.a_en}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
