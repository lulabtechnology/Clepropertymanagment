import Section from "./Section";

const faqs = [
  {
    q: "¿Administran propiedades vacacionales y de largo plazo?",
    a: "Sí, trabajamos con alquileres de corta y larga estancia según el potencial de cada propiedad."
  },
  {
    q: "¿Puedo seguir usando mi propiedad cuando la necesite?",
    a: "Coordinamos bloqueos en el calendario con la debida anticipación."
  },
  {
    q: "¿Cómo reportan los resultados?",
    a: "Recibirás reportes claros con ocupación, ingresos y gastos relevantes."
  },
  {
    q: "¿Ofrecen limpieza y mantenimiento?",
    a: "Sí, coordinamos equipos de limpieza y mantenimiento para mantener la calidad."
  },
  {
    q: "¿Cobran algún porcentaje o cuota fija?",
    a: "Ofrecemos propuestas personalizadas según el tipo de propiedad y objetivos (sin mostrar porcentajes aquí)."
  }
];

export default function FAQ() {
  return (
    <Section id="faq" title="Preguntas frecuentes">
      <div className="divide-y rounded-2xl border">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none font-medium text-brand-blue">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-brand-blue/80">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
