import { Mail } from "lucide-react";
import Section from "./Section";

const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@clepropertyinvestment.com";

export default function ContactBar() {
  return (
    <Section id="contacto" title={undefined} subtitle={undefined}>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={`mailto:${email}`}
          className="text-brand-blue hover:underline"
          aria-label="Enviar correo"
        >
          <Mail className="mr-1 inline-block" size={18} />
          {email}
        </a>
      </div>
    </Section>
  );
}
