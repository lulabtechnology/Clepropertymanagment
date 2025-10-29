"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const steps = [
  {
    n: 1,
    esTitle: "Evaluamos tu propiedad",
    esText: "Analizamos ubicación, potencial de ocupación y rentabilidad proyectada.",
    enText: "We assess your property’s location, potential occupancy, and projected profitability."
  },
  {
    n: 2,
    esTitle: "Te presentamos la propuesta personalizada",
    esText: "Recibes un plan a medida con estimaciones de ingresos, tarifas sugeridas y servicios incluidos.",
    enText: "We share a tailored proposal with income projections, pricing strategy, and included services."
  },
  {
    n: 3,
    esTitle: "Firmamos y preparamos tu espacio",
    esText:
      "Nos encargamos del mobiliario, decoración, fotografías y configuración de los canales de reserva (Airbnb, Booking, etc.).",
    enText:
      "We handle setup — furniture, décor, professional photos, and listing creation on major platforms."
  },
  {
    n: 4,
    esTitle: "Gestionamos cada detalle",
    esText:
      "Coordinamos limpieza, mantenimiento, check-in/out, comunicación con huéspedes y precios dinámicos.",
    enText:
      "We take care of everything: cleaning, maintenance, guest communication, and dynamic pricing."
  },
  {
    n: 5,
    esTitle: "Tú recibes tus ganancias",
    esText:
      "Recibe tus pagos puntualmente, con reportes claros y acceso a tus reservas en todo momento.",
    enText:
      "You receive your payments on time, with full transparency and access to all booking details."
  }
];

export default function Services() {
  return (
    <Section
      id="servicios"
      title="Servicios"
      subtitle="What we offer"
      tight
      className="pt-0 -mt-4 md:-mt-6"  // tira la sección hacia arriba
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((s, idx) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl bg-white p-6 shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition"
          >
            <div className="mb-2 text-sm font-medium text-brand-gold">Paso {s.n}</div>
            <h3 className="text-brand-blue font-semibold">{s.esTitle}</h3>
            <p className="mt-2 text-sm text-brand-blue/80">{s.esText}</p>
            <p className="mt-2 text-xs text-brand-blue/70 italic">{s.enText}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
