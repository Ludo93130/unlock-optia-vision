import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { KeyMethodology } from "@/components/KeyMethodology";
import { Solutions } from "@/components/Solutions";
import { ProcessSection } from "@/components/ProcessSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <KeyMethodology />
      <Solutions />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
