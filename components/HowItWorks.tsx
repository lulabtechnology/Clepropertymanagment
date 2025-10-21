"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const steps = [
  { n: "1", title: "Evaluación y estrategia", text: "Analizamos tu propiedad y definimos plan de renta." },
  { n: "2", title: "Puesta a punto y publicación", text: "Optimización, fotos y publicación en canales." },
  { n: "3", title: "Operación y reportes", text: "Atención diaria y reportes claros de resultados." }
];

export default function HowItWorks() {
  return (
    <Section id="como-funciona" title="¿Cómo funciona?" subtitle="Tres pasos simples para empezar.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, idx) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl bg-brand-blue-100 p-6"
          >
            <div className="mb-2 text-sm font-medium text-brand-gold">Paso {s.n}</div>
            <h3 className="text-brand-blue font-semibold">{s.title}</h3>
            <p className="text-sm text-brand-blue/80 mt-2">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
