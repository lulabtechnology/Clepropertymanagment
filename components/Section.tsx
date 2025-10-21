import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && <p className="section-sub mb-10">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
