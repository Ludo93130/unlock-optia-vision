import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Zap, Clock, Shield, Euro, Users, Cog, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqCategories = [
  {
    title: "Général",
    icon: HelpCircle,
    questions: [
      {
        question: "Qu'est-ce qu'un agent IA pour l'immobilier ?",
        answer: "Un agent IA est un assistant virtuel intelligent qui automatise les tâches répétitives de votre agence : réponse aux demandes clients 24/7, qualification des leads, prise de rendez-vous, relances automatiques, et bien plus. Il travaille sans interruption pour maximiser votre efficacité commerciale."
      },
      {
        question: "Est-ce adapté à toutes les tailles d'agences ?",
        answer: "Oui ! Nos solutions sont modulaires et s'adaptent aussi bien aux agents indépendants qu'aux réseaux de plusieurs dizaines d'agences. Nous personnalisons chaque déploiement selon vos besoins spécifiques et votre volume d'activité."
      },
      {
        question: "Quelle est la différence avec un chatbot classique ?",
        answer: "Contrairement aux chatbots basiques qui suivent des scripts figés, nos agents IA comprennent le contexte, s'adaptent à chaque conversation et prennent des décisions intelligentes. Ils apprennent de vos processus métier pour offrir une expérience vraiment personnalisée à vos prospects."
      }
    ]
  },
  {
    title: "Intégration & Technique",
    icon: Cog,
    questions: [
      {
        question: "Comment se passe l'intégration avec mes outils existants ?",
        answer: "Nous nous connectons à vos outils actuels : CRM immobilier (Hektor, Apimo, Périclès...), calendrier, messagerie, site web. L'intégration est transparente et ne perturbe pas vos processus existants. Notre équipe technique gère tout le paramétrage."
      },
      {
        question: "Combien de temps faut-il pour déployer la solution ?",
        answer: "Le déploiement complet prend généralement 2 à 4 semaines : 1 semaine d'audit et configuration, 1-2 semaines d'intégration technique, puis 1 semaine de tests et ajustements. Vous êtes opérationnel rapidement avec un accompagnement continu."
      },
      {
        question: "Faut-il des compétences techniques pour utiliser la solution ?",
        answer: "Absolument pas ! Notre interface est conçue pour être intuitive. Vous pouvez suivre les performances, ajuster les paramètres et consulter les statistiques sans aucune connaissance technique. Nous formons également votre équipe lors du déploiement."
      }
    ]
  },
  {
    title: "Performance & Résultats",
    icon: Zap,
    questions: [
      {
        question: "Quels résultats puis-je attendre ?",
        answer: "Nos clients constatent en moyenne : +40% de leads qualifiés, -60% de temps passé sur les tâches administratives, +25% de taux de conversion, et une disponibilité 24/7 pour leurs prospects. Le ROI est généralement atteint dès le 2ème mois."
      },
      {
        question: "Comment mesurez-vous les performances ?",
        answer: "Nous fournissons un tableau de bord complet avec des métriques clés : nombre de conversations, leads qualifiés, rendez-vous pris, temps de réponse moyen, satisfaction client. Vous avez une visibilité totale sur l'impact de la solution."
      },
      {
        question: "L'IA peut-elle vraiment remplacer un humain ?",
        answer: "L'IA ne remplace pas vos collaborateurs, elle les augmente ! Elle gère les tâches répétitives et chronophages pour que votre équipe se concentre sur ce qui compte vraiment : la relation client, les visites et la négociation. C'est un multiplicateur de productivité."
      }
    ]
  },
  {
    title: "Délais & Disponibilité",
    icon: Clock,
    questions: [
      {
        question: "L'agent IA est-il disponible 24h/24 ?",
        answer: "Oui ! C'est l'un des principaux avantages. Votre agent IA répond instantanément aux demandes, même à 3h du matin ou le dimanche. Plus aucun lead ne reste sans réponse, ce qui améliore considérablement votre taux de conversion."
      },
      {
        question: "Que se passe-t-il si l'IA ne sait pas répondre ?",
        answer: "L'agent IA est formé pour reconnaître ses limites. Quand une demande dépasse ses compétences ou nécessite une expertise humaine, il transfère automatiquement la conversation à un membre de votre équipe avec tout le contexte nécessaire."
      },
      {
        question: "Quel est le temps de réponse moyen ?",
        answer: "L'agent IA répond en moins de 3 secondes, 24h/24 et 7j/7. Comparé aux 4-6 heures de délai moyen dans le secteur immobilier, c'est un avantage concurrentiel majeur qui impressionne vos prospects."
      }
    ]
  },
  {
    title: "Tarification",
    icon: Euro,
    questions: [
      {
        question: "Comment fonctionne la tarification ?",
        answer: "Nous proposons un forfait unique à l'installation, compris entre 2 000 € et 3 000 € selon la complexité de votre projet et vos besoins spécifiques. Ce forfait inclut l'audit, l'intégration complète, la configuration personnalisée et la formation de votre équipe."
      },
      {
        question: "Y a-t-il des frais récurrents ?",
        answer: "Oui, nous proposons un forfait de maintenance mensuelle représentant 10 % à 15 % du coût d'installation. Ce forfait couvre l'hébergement, les mises à jour, le support technique prioritaire et l'optimisation continue de votre agent IA."
      },
      {
        question: "Puis-je essayer avant de m'engager ?",
        answer: "Nous proposons un audit gratuit de 30 minutes pour analyser vos besoins et vous montrer concrètement comment notre solution peut vous aider. Cet audit vous permettra d'obtenir un devis précis et personnalisé."
      }
    ]
  },
  {
    title: "Sécurité & Confidentialité",
    icon: Shield,
    questions: [
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument. Nous utilisons un chiffrement de bout en bout et nos serveurs sont hébergés chez OVH, en France. Vos données et celles de vos clients sont protégées selon les standards les plus stricts du marché et restent sur le territoire français."
      },
      {
        question: "Qui a accès aux conversations ?",
        answer: "Seuls vous et les membres de votre équipe que vous autorisez ont accès aux conversations. Nos équipes techniques n'y accèdent qu'en cas de support technique, avec votre accord explicite."
      },
      {
        question: "Comment gérez-vous le RGPD ?",
        answer: "Nous sommes 100% conformes au RGPD. Les données sont hébergées en France chez OVH, le consentement est recueilli, et vos prospects peuvent exercer leurs droits (accès, rectification, suppression) à tout moment. Nous vous accompagnons sur tous les aspects légaux."
      }
    ]
  }
];

const FAQ = () => {
  const navigate = useNavigate();

  const handleAuditClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-electric/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-electric/10 border border-cyan-electric/20 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-electric" />
              <span className="text-sm text-cyan-electric font-medium">Centre d'aide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Questions{" "}
              <span className="bg-gradient-to-r from-cyan-electric to-blue-500 bg-clip-text text-transparent">
                Fréquentes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Retrouvez les réponses aux questions les plus courantes sur nos solutions 
              d'automatisation IA pour les agences immobilières.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-electric/20 to-blue-500/20">
                    <category.icon className="w-5 h-5 text-cyan-electric" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-xl px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/10 via-transparent to-blue-500/10" />
              
              <div className="relative z-10">
                <Users className="w-12 h-12 text-cyan-electric mx-auto mb-6" />
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Vous avez d'autres questions ?
                </h2>
                
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous 
                  accompagner dans votre projet d'automatisation IA.
                </p>
                
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={handleAuditClick}
                  className="group"
                >
                  Réserver mon audit gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default FAQ;
