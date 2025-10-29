"use client";

import Section from "./Section";

/**
 * Renderiza únicamente el título pedido. Nada de tarjetas debajo.
 * Luego, inmediatamente, viene la sección Servicios en la página.
 */
export default function Benefits() {
  return (
    <Section
      id="que-hacemos"
      title="Descubre qué hacemos por ti"
      subtitle={undefined}
    >
      {/* vacío a propósito */}
    </Section>
  );
}
