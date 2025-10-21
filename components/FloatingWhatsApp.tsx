"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+50766799791";
  const url = waUrl(phone, "Hola Clé, me interesa su administración de propiedades.");
  return (
    <Link
      href={url}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg"
    >
      <MessageCircle />
    </Link>
  );
}
