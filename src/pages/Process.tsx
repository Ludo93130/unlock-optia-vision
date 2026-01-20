import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileSearch,
  Calendar,
  BarChart3,
  Target,
  Rocket,
  Zap,
  MessageSquare,
  Users
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Audit & Analyse",
    duration: "1-2 jours",
    description: "Nous analysons en profondeur vos processus actuels, identifions les goulots d'étranglement et les opportunités d'automatisation.",
    details: [
      "Cartographie de vos flux de travail",
      "Analyse des tâches chronophages",
      "Identification des points de friction",
      "Évaluation du potentiel d'automatisation"
    ],
    icon: FileSearch
  },
  {
    step: "02",
    title: "Stratégie & Roadmap",
    duration: "2-3 jours",
    description: "Nous élaborons une stratégie personnalisée avec un plan d'implémentation clair et des objectifs mesurables.",
    details: [
      "Définition des KPIs cibles",
      "Priorisation des automatisations",
      "Planning d'implémentation",
      "Estimation du ROI par phase"
    ],
    icon: Target
  },
  {
    step: "03",
    title: "Développement & Configuration",
    duration: "1-3 semaines",
    description: "Nos experts configurent et personnalisent les agents IA selon vos besoins spécifiques et votre identité.",
    details: [
      "Configuration des agents IA",
      "Intégration à vos outils existants",
      "Personnalisation du ton et du style",
      "Tests et optimisations"
    ],
    icon: Zap
  },
  {
    step: "04",
    title: "Formation & Déploiement",
    duration: "2-5 jours",
    description: "Nous formons vos équipes et déployons progressivement les solutions pour une transition en douceur.",
    details: [
      "Formation personnalisée de vos équipes",
      "Déploiement progressif",
      "Support technique dédié",
      "Documentation complète"
    ],
    icon: Rocket
  },
  {
    step: "05",
    title: "Suivi & Optimisation",
    duration: "Continu",
    description: "Nous suivons les performances et optimisons continuellement les agents pour maximiser les résultats.",
    details: [
      "Tableaux de bord en temps réel",
      "Rapports de performance mensuels",
      "Optimisations continues",
      "Support prioritaire"
    ],
    icon: BarChart3
  }
];

const useCases = [
  {
    title: "Qualification Automatique des Leads",
    description: "Un agent IA qualifie instantanément chaque demande entrante, collecte les informations clés et planifie les visites.",
    before: {
      time: "45 min / lead",
      conversion: "12%",
      satisfaction: "3.2/5"
    },
    after: {
      time: "5 min / lead",
      conversion: "28%",
      satisfaction: "4.7/5"
    },
    roi: "+133%",
    icon: MessageSquare
  },
  {
    title: "Gestion des Visites",
    description: "Planification automatique des visites, rappels, confirmations et suivi post-visite sans intervention humaine.",
    before: {
      time: "2h / jour",
      noShow: "25%",
      satisfaction: "3.5/5"
    },
    after: {
      time: "15 min / jour",
      noShow: "5%",
      satisfaction: "4.8/5"
    },
    roi: "+87%",
    icon: Calendar
  },
  {
    title: "Suivi Client 24/7",
    description: "Réponses instantanées aux questions des prospects et clients, même en dehors des heures d'ouverture.",
    before: {
      time: "Réponse en 4h",
      disponibilité: "9h-18h",
      satisfaction: "3.0/5"
    },
    after: {
      time: "Réponse en 30s",
      disponibilité: "24/7",
      satisfaction: "4.9/5"
    },
    roi: "+156%",
    icon: Users
  }
];

const globalResults = [
  { metric: "Temps économisé", value: "15h", suffix: "/semaine", description: "en moyenne par agent" },
  { metric: "Augmentation des ventes", value: "+35%", suffix: "", description: "dans les 6 premiers mois" },
  { metric: "Satisfaction client", value: "4.8", suffix: "/5", description: "note moyenne" },
  { metric: "ROI moyen", value: "450%", suffix: "", description: "retour sur investissement" }
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/50 to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-turquoise-mint/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-electric/10 text-cyan-electric text-sm font-medium mb-6">
              Notre Méthodologie
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Comment nous <span className="gradient-text">transformons</span> votre agence
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Une approche éprouvée en 5 étapes pour intégrer l'IA dans votre agence immobilière 
              et obtenir des résultats mesurables dès les premières semaines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.cal.eu/optia-solutions" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Réserver mon audit gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Notre Process en <span className="gradient-text">5 Étapes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie structurée pour garantir le succès de votre transformation digitale.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-electric/10 to-turquoise-mint/10 rounded-bl-full" />
                
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-display font-bold text-cyan-electric/20">{step.step}</span>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-electric to-turquoise-mint flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-sapphire" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                      <span className="flex items-center gap-1 text-sm text-cyan-electric bg-cyan-electric/10 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-cyan-electric flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases with ROI */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-electric/5 rounded-full blur-3xl" />
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
              Exemples Concrets & <span className="gradient-text">ROI Chiffré</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nos clients ont transformé leurs opérations avec des résultats mesurables.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-2xl font-bold text-cyan-electric">{useCase.roi}</span>
                  <span className="text-xs text-muted-foreground block text-right">ROI</span>
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-electric to-turquoise-mint flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-sapphire" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <span className="text-xs font-medium text-destructive uppercase tracking-wider">Avant</span>
                    <div className="mt-2 space-y-1">
                      {Object.entries(useCase.before).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-cyan-electric/10 border border-cyan-electric/20">
                    <span className="text-xs font-medium text-cyan-electric uppercase tracking-wider">Après</span>
                    <div className="mt-2 space-y-1">
                      {Object.entries(useCase.after).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-medium text-cyan-electric">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Results */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Résultats <span className="gradient-text">Globaux</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les chiffres moyens observés chez nos clients après 6 mois d'utilisation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {globalResults.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-display font-bold gradient-text">{result.value}</span>
                  <span className="text-xl text-muted-foreground">{result.suffix}</span>
                </div>
                <h3 className="font-medium text-foreground mb-1">{result.metric}</h3>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Process;
