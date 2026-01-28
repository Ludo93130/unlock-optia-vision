import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { KeyMethodology } from "@/components/KeyMethodology";
import { Solutions } from "@/components/Solutions";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
//import { Chatbot } from "@/components/Chatbot";
import { PrimaryCtas } from "@/components/PrimaryCtas";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Solutions />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <PrimaryCtas />
        </div>
      </section>
      <KeyMethodology />
      <ProcessSection />
      <ContactSection />
      <Footer />
      {/* <Chatbot /> */}
    </div>
  );
};

export default Index;
