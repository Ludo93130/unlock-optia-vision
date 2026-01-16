import { motion } from "framer-motion";
import { Search, Plug, Gauge, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description:
      "Nous analysons vos workflows actuels, identifions les goulots d'étranglement et découvrons les opportunités d'automatisation intelligente.",
    color: "from-cyan-electric to-cyan-electric/60",
  },
  {
    icon: Plug,
    number: "02",
    title: "Intégration",
    description:
      "Notre équipe intègre les agents IA dans vos systèmes existants sans aucune perturbation de vos opérations.",
    color: "from-turquoise-mint to-turquoise-mint/60",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Optimisation",
    description:
      "Un suivi et un affinage continus garantissent que vos agents IA évoluent et s'améliorent avec votre entreprise.",
    color: "from-cyan-electric to-turquoise-mint",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-muted/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche éprouvée en trois étapes qui vous accompagne de l'audit
            initial à l'automatisation IA entièrement optimisée.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                />

                {/* Step number */}
                <div className="text-6xl font-display font-bold text-muted/30 mb-4">
                  {step.number}
                </div>

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-electric/20 to-turquoise-mint/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-cyan-electric" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (visible on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-cyan-electric" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Prêt à transformer votre agence avec l'IA ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-electric font-semibold hover:gap-3 transition-all duration-300"
          >
            Commencer Votre Audit Gratuit
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
