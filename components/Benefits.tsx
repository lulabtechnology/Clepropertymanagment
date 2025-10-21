import Section from "./Section";
import { ShieldCheck, Clock, LineChart, Headset } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, title: "Gestión segura", text: "Protocolos y verificación para cuidar tu inversión." },
  { icon: Clock, title: "Atención 24/7", text: "Disponibilidad para huéspedes y propietarios." },
  { icon: LineChart, title: "Rentabilidad", text: "Optimización de precio y ocupación." },
  { icon: Headset, title: "Soporte dedicado", text: "Comunicación clara y reportes periódicos." }
];

export default function Benefits() {
  return (
    <Section
      id="beneficios"
      title="Confían en nosotros"
      subtitle="Beneficios rápidos que elevan tu tranquilidad y rentabilidad."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl bg-white p-6 shadow-soft hover:shadow-lg transition"
          >
            <it.icon className="mb-3" aria-hidden />
            <h3 className="font-semibold text-brand-blue">{it.title}</h3>
            <p className="text-sm text-brand-blue/80 mt-1">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
