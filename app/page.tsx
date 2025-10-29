import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits"; // ahora solo título “Descubre qué hacemos por ti”
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Metrics from "@/components/Metrics";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
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
