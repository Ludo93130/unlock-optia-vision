import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PrimaryCtas = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        variant="hero"
        size="xl"
        className="group"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Obtenir un Audit Gratuit
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      <Button variant="heroOutline" size="xl" asChild>
        <a
          href="https://www.loom.com/share/38ac27bbba3f4b7dbff727b55b6ca7a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Découvrez comment en vidéo
        </a>
      </Button>
    </div>
  );
};

