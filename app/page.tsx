import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
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
        <HowItWorks />
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
