import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { KeyMethodology } from "@/components/KeyMethodology";
import { Solutions } from "@/components/Solutions";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Solutions />
      <KeyMethodology />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
