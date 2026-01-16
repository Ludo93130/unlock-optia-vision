import { motion } from "framer-motion";
import { Building2, Scale, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    tagline: "Your 24/7 Property Expert",
    description:
      "Automate property viewings, qualify leads instantly, and match buyers with perfect properties—all while you sleep.",
    features: [
      "Automated viewing scheduling",
      "Intelligent lead qualification",
      "AI-powered property matching",
      "24/7 client engagement",
    ],
    featured: true,
  },
  {
    icon: Scale,
    title: "Legal Services",
    tagline: "Streamlined Client Intake",
    description:
      "From initial consultation booking to document collection, our agents handle the tedious so you can focus on winning cases.",
    features: [
      "Smart consultation scheduling",
      "Document request automation",
      "Client communication handling",
    ],
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    tagline: "Conversion-Focused Agents",
    description:
      "Turn browsers into buyers with AI agents that answer questions, provide recommendations, and close sales 24/7.",
    features: [
      "Product recommendations",
      "Order status updates",
      "Cart recovery automation",
    ],
    featured: false,
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
            Specialized <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-specific AI agents designed to understand your unique challenges
            and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                      Featured
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
                  Learn More
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
