"use client";

import { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  /** children es opcional para permitir secciones “título solo” */
  children?: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {/* Renderiza children solo si viene algo */}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
