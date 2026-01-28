import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              À propos d’<span className="gradient-text">Optia Immo Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Nous aidons les agences immobilières à automatiser leurs tâches répétitives
              grâce à des agents IA sur-mesure, pour qu’elles se concentrent sur ce qui compte vraiment :
              la relation client et la croissance.
            </p>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-semibold mb-4">
                Notre mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Libérer le potentiel de votre agence en supprimant les frictions opérationnelles :
                suivi des leads, relances, qualification, préparation des dossiers… Nous concevons
                des systèmes qui travaillent 24h/24 pour ne plus laisser passer aucune opportunité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-semibold mb-4">
                Pour qui travaillons-nous ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous accompagnons principalement des agences immobilières et réseaux qui veulent
                structurer leur croissance : directeurs d’agences, responsables marketing,
                équipes commerciales et back-office qui souhaitent gagner en efficacité sans
                recruter immédiatement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-semibold mb-4">
                Notre approche
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Chaque collaboration commence par un audit détaillé de vos processus. Nous
                identifions les gains rapides possibles, concevons un agent IA adapté à votre
                façon de travailler, puis l’itérons avec vos équipes jusqu’à obtenir un
                résultat concret et mesurable sur votre chiffre d’affaires et votre temps gagné.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

