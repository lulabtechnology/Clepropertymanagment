export default function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@example.com";
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  return (
    <footer className="bg-brand-blue-100">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-brand-blue">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-serif text-lg">Clé Property Management</div>
            <div className="text-brand-blue/80">
              Tu propiedad, nuestra pasión. Tu rentabilidad, nuestro objetivo.
            </div>
          </div>
          <div className="space-y-1">
            <div>WhatsApp: {phone}</div>
            <div>Correo: {email}</div>
            <div className="flex gap-3">
              <a href="#servicios">Servicios</a>
              <a href="#como-funciona">¿Cómo funciona?</a>
              <a href="#galeria">Galería</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-brand-blue/70">
          © {new Date().getFullYear()} Clé Property Management. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
