"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Check-in / check-out",
  "Limpieza y coordinación de mantenimiento",
  "Marketing y listings",
  "Estrategia de pricing",
  "Atención 24/7",
  "Control financiero y reportes"
];

export default function Services() {
  return (
    <Section
      id="servicios"
      title="Servicios"
      subtitle="Gestión integral para que no te preocupes por nada."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {["Gestión integral", "Mantenimiento y calidad", "Marketing y finanzas"].map(
          (card, idx) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="mb-3 font-semibold text-brand-blue">{card}</h3>
              <ul className="space-y-2 text-sm text-brand-blue/80">
                {bullets.map((b) => (
                  <li key={`${card}-${b}`} className="flex items-center gap-2">
                    <CheckCircle2 className="shrink-0" size={18} aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </Section>
  );
}
