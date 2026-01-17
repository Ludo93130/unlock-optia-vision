import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-sapphire text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-cyan-electric/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <img src={logo} alt="Optia Solutions" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Libérer le futur des entreprises grâce à l'automatisation IA intelligente.
              Nous concevons des agents autonomes qui travaillent 24h/24 pour que vous n'ayez pas à le faire.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cyan-electric transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cyan-electric transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {["Solutions", "La Clé", "Processus", "À Propos"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-cyan-electric transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-cyan-electric" />
                bonjour@optia.solutions
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-cyan-electric" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-cyan-electric flex-shrink-0" />
                123 Avenue de l'Innovation,
                <br />
                75001 Paris, France
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Optia Solutions. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Politique de Confidentialité
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
