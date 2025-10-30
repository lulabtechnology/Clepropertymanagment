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
      {/* PT EXACTO = altura del header (móvil 64px, desktop 72px) */}
      <main className="pt-16 md:pt-[72px]">
        <Hero />
        <HowItWorks />
        <Services />
        <Gallery />
        <FAQ />
        <ContactBar />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Metrics />
    </>
  );
}
