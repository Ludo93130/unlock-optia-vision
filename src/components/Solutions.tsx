import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    title: "Immobilier",
    tagline: "Votre Expert Immobilier 24h/24",
    description:
      "Automatisez les visites, qualifiez les prospects instantanément et associez les acheteurs aux biens parfaits—même pendant votre sommeil.",
    features: [
      "Planification automatique des visites",
      "Qualification intelligente des prospects",
      "Matching propriétés par IA",
      "Engagement client 24h/24",
    ],
    featured: true,
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquoise-mint/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Solutions <span className="gradient-text">Spécialisées</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des agents IA spécifiques à votre secteur, conçus pour comprendre vos
            défis uniques et délivrer des résultats mesurables.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${industry.featured ? "lg:row-span-1" : ""}`}
            >
              <div
                className={`h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  industry.featured
                    ? "bg-sapphire text-primary-foreground shadow-xl glow-cyan"
                    : "glass-card hover:shadow-lg"
                }`}
              >
                {industry.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-electric text-sapphire">
                      En vedette
                    </span>
                  </div>
                )}

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                    industry.featured
                      ? "bg-gradient-to-br from-cyan-electric to-turquoise-mint"
                      : "bg-gradient-to-br from-cyan-electric/20 to-turquoise-mint/20"
                  }`}
                >
                  <industry.icon
                    className={`w-7 h-7 ${
                      industry.featured ? "text-sapphire" : "text-cyan-electric"
                    }`}
                  />
                </div>

                <h3 className="font-display text-2xl font-bold mb-2">
                  {industry.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-4 ${
                    industry.featured ? "text-cyan-electric" : "text-cyan-electric"
                  }`}
                >
                  {industry.tagline}
                </p>
                <p
                  className={`mb-6 ${
                    industry.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {industry.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {industry.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        industry.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          industry.featured
                            ? "bg-cyan-electric"
                            : "bg-turquoise-mint"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={industry.featured ? "hero" : "heroOutline"}
                  className="w-full group"
                >
                  En Savoir Plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
