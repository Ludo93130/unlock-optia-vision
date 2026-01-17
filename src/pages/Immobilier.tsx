import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Bot, 
  Calendar, 
  MessageSquare, 
  Search, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const agents = [
  {
    name: "Agent Qualification",
    icon: Users,
    description: "Qualifie automatiquement chaque prospect entrant en analysant ses critères, budget et délai d'achat.",
    features: [
      "Questionnaire conversationnel intelligent",
      "Scoring automatique des prospects",
      "Détection des acheteurs sérieux",
      "Transfert prioritaire aux agents humains"
    ],
    roi: {
      metric: "+40%",
      label: "prospects qualifiés"
    },
    color: "from-cyan-electric to-turquoise-mint"
  },
  {
    name: "Agent Rendez-vous",
    icon: Calendar,
    description: "Planifie et gère les visites automatiquement, en tenant compte des disponibilités de tous.",
    features: [
      "Synchronisation calendriers agents",
      "Rappels automatiques SMS/Email",
      "Reprogrammation en un clic",
      "Confirmation instantanée"
    ],
    roi: {
      metric: "-70%",
      label: "temps de planification"
    },
    color: "from-turquoise-mint to-cyan-electric"
  },
  {
    name: "Agent Matching",
    icon: Search,
    description: "Associe intelligemment les acheteurs aux biens correspondant parfaitement à leurs critères.",
    features: [
      "Analyse des préférences client",
      "Suggestions personnalisées",
      "Alertes nouveaux biens",
      "Apprentissage des goûts"
    ],
    roi: {
      metric: "+35%",
      label: "taux de conversion"
    },
    color: "from-cyan-electric to-turquoise-mint"
  },
  {
    name: "Agent Suivi",
    icon: MessageSquare,
    description: "Maintient le contact avec vos prospects et clients 24h/24, 7j/7 sans intervention humaine.",
    features: [
      "Réponses instantanées",
      "Suivi post-visite automatique",
      "Relances intelligentes",
      "Disponibilité permanente"
    ],
    roi: {
      metric: "24/7",
      label: "disponibilité"
    },
    color: "from-turquoise-mint to-cyan-electric"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Intégration",
    description: "Connexion à vos outils existants (CRM, site web, portails immobiliers) en quelques heures."
  },
  {
    step: "2",
    title: "Configuration",
    description: "Personnalisation des agents selon votre processus commercial et votre identité de marque."
  },
  {
    step: "3",
    title: "Déploiement",
    description: "Mise en production progressive avec supervision pour garantir la qualité des interactions."
  },
  {
    step: "4",
    title: "Optimisation",
    description: "Amélioration continue basée sur les données et retours pour maximiser les résultats."
  }
];

const globalStats = [
  { value: "+25%", label: "de mandats signés", icon: TrendingUp },
  { value: "-60%", label: "temps sur tâches répétitives", icon: Clock },
  { value: "3x", label: "plus de prospects traités", icon: Users },
  { value: "< 30s", label: "temps de réponse moyen", icon: Zap }
];

const Immobilier = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sapphire via-background to-background opacity-50" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-electric/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Agents IA pour{" "}
              <span className="gradient-text">l'Immobilier</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Automatisez votre prospection, qualification et suivi client pour 
              vous concentrer sur ce qui compte vraiment : conclure des ventes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-electric" />
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Nos <span className="gradient-text">Agents IA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe d'agents spécialisés qui travaillent ensemble pour 
              automatiser chaque étape de votre processus commercial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${agent.color}`}>
                    <agent.icon className="w-6 h-6 text-sapphire" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-1">{agent.name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-electric/10 text-cyan-electric text-sm font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {agent.roi.metric} {agent.roi.label}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{agent.description}</p>
                
                <ul className="space-y-3">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-turquoise-mint flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Comment ça <span className="gradient-text">fonctionne</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une mise en place simple et rapide pour des résultats immédiats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-electric to-turquoise-mint flex items-center justify-center text-sapphire font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-electric to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12"
          >
            <Bot className="w-16 h-16 mx-auto mb-6 text-cyan-electric" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Prêt à <span className="gradient-text">transformer</span> votre agence ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez comment nos agents IA peuvent booster vos résultats 
              avec un audit gratuit personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="hero" size="lg" className="group">
                  Demander un Audit Gratuit
                  <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Immobilier;
