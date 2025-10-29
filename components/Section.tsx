"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  /** reduce el padding vertical de la sección */
  tight?: boolean;
  className?: string;
};

export default function Section({ id, title, subtitle, children, tight, className }: Props) {
  return (
    <section
      id={id}
      className={clsx("section", tight && "py-6 md:py-8", className)}
    >
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="section-title mb-4">{title}</h2>}
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
