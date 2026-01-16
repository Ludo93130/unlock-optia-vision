import { motion } from "framer-motion";
import { Key, Zap, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Key,
    title: "Unlock Hidden Potential",
    description:
      "Our Key methodology identifies bottlenecks in your workflow and unlocks new pathways to efficiency that you never knew existed.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      "Once deployed, your AI agents activate immediately, handling tasks around the clock without delays or downtime.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Every interaction is optimized. Our agents learn and adapt to deliver personalized responses that convert leads into clients.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description:
      "As your business grows, your AI agents scale with you—no additional hiring, training, or management required.",
  },
];

export const KeyMethodology = () => {
  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-electric/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-electric to-turquoise-mint mb-6">
            <Key className="w-8 h-8 text-sapphire" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Key</span> Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proprietary methodology is designed to unlock maximum efficiency
            for your agency through intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-electric/20 to-turquoise-mint/20" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-electric/20 to-turquoise-mint/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-electric" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
