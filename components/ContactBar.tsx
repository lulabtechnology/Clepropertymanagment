// components/ContactBar.tsx
import Section from "./Section";

const FALLBACK_EMAIL = "contact@clepropertyinvestment.com";
const email =
  (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "").trim() || FALLBACK_EMAIL;

export default function ContactBar() {
  return (
    <Section id="contacto" title={undefined} subtitle={undefined} tight>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={`mailto:${email}`}
          className="text-brand-blue underline-offset-2 hover:underline"
          aria-label="Enviar correo"
        >
          {email}
        </a>
      </div>
    </Section>
  );
}
