import Link from "next/link";

const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@clepropertyinvestment.com";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-brand-blue/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Clé Property Management</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            <Link href="#servicios" className="hover:underline">Servicios</Link>
            <Link href="#galeria" className="hover:underline">Galería</Link>
            <Link href="#faq" className="hover:underline">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
