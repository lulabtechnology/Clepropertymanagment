// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Metrics from "@/components/Metrics";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24"> 
        {/* Hero */}
        <Hero />

        {/* Descubre qué hacemos por ti -> Servicios inmediatamente */}
        <HowItWorks />
        <Services />

        {/* Galería (5 imágenes, carrusel manual con dots) */}
        <Gallery />

        {/* FAQ */}
        <FAQ />

        {/* Barra de contacto (azul/limpia) */}
        <ContactBar />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <Metrics />
    </>
  );
}
