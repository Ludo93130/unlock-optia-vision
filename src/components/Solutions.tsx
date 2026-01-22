import { motion } from "framer-motion";
import { Building2, ArrowRight, MessageSquare, Calendar, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const roiStats = [
  { value: "+40%", label: "de prospects qualifiés" },
  { value: "-60%", label: "de temps sur les tâches répétitives" },
  { value: "24/7", label: "disponibilité client" },
  { value: "+25%", label: "de mandats signés" },
];

const aiAgentExamples = [
  {
    icon: Phone,
    name: "Agent Vocal 24/7",
    description: "Répond aux appels entrants jour et nuit, qualifie les prospects en temps réel, prend les rendez-vous et transfère les urgences à vos équipes. Voix naturelle et personnalisée à l'image de votre agence.",
    roi: "0 appel manqué • +50% de RDV",
    roiColor: "text-cyan-electric",
  },
  {
    icon: MessageSquare,
    name: "Agent Qualification & Relance",
    description: "Qualifie automatiquement chaque lead selon vos critères (budget, secteur, délai). Relance intelligemment par SMS, email ou WhatsApp au moment optimal pour maximiser les conversions.",
    roi: "+35% de leads qualifiés",
    roiColor: "text-turquoise-mint",
  },
  {
    icon: Calendar,
    name: "Agent Planning & Visites",
    description: "Gère les demandes de visites, coordonne les agendas de vos agents, envoie les rappels automatiques et optimise les tournées pour gagner du temps sur le terrain.",
    roi: "10h gagnées / semaine",
    roiColor: "text-cyan-electric",
  },
  {
    icon: Home,
    name: "Agent Matching & Suivi",
    description: "Associe automatiquement les acheteurs aux biens correspondant à leurs critères. Maintient le contact avec vos anciens clients pour générer des recommandations et fidéliser.",
    roi: "+25% de mandats signés",
    roiColor: "text-turquoise-mint",
  },
];

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

        {/* AI Agent Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-center mb-8">
            Exemples d'<span className="gradient-text">Agents IA</span> pour votre agence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiAgentExamples.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-electric/20 to-turquoise-mint/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-electric/30 group-hover:to-turquoise-mint/30 transition-all">
                    <agent.icon className="w-6 h-6 text-cyan-electric" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{agent.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{agent.description}</p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-background/50 border border-current/20 text-sm font-semibold ${agent.roiColor}`}>
                      {agent.roi}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {roiStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass-card p-6 text-center rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
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

                <Link to="/immobilier" className="block w-full">
                  <Button
                    variant={industry.featured ? "hero" : "heroOutline"}
                    className="w-full group"
                  >
                    En Savoir Plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
