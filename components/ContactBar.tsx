// components/ContactBar.tsx
import Section from "./Section";
import { Mail } from "lucide-react";

const email = "contact@clepropertyinvestment.com";

export default function ContactBar() {
  return (
    <Section id="contacto" title={undefined} subtitle={undefined} tight>
      <div className="rounded-2xl bg-[color:var(--brand-blue)] px-6 py-8 text-center text-white shadow-soft">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold">
          ¿Listo para rentabilizar tu propiedad?
        </h3>
        <p className="mt-2 opacity-95">
          Escríbenos y te enviamos una evaluación sin costo.
        </p>
        <div className="mt-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-medium text-brand-blue hover:bg-white/90"
          >
            <Mail size={18} />
            {email}
          </a>
        </div>
      </div>
    </Section>
  );
}
