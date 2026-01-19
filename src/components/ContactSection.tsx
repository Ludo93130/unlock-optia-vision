import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          agency: formData.agency.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les 24h.",
      });
      
      setFormData({ name: "", email: "", agency: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
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
            Prêt à <span className="gradient-text">Transformer</span> Votre Agence ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit ou réservez directement un appel
            avec notre équipe d'experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-electric to-turquoise-mint flex items-center justify-center">
                  <Mail className="w-6 h-6 text-sapphire" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Envoyez-nous un message</h3>
                  <p className="text-sm text-muted-foreground">Réponse sous 24h garantie</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-cyan-electric"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email professionnel"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-cyan-electric"
                    />
                  </div>
                </div>
                <Input
                  name="agency"
                  placeholder="Nom de votre agence"
                  value={formData.agency}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-cyan-electric"
                />
                <Textarea
                  name="message"
                  placeholder="Comment pouvons-nous vous aider ? *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-cyan-electric resize-none"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Book a Call */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-turquoise-mint to-cyan-electric flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-sapphire" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Réservez un appel gratuit</h3>
                  <p className="text-sm text-muted-foreground">30 min avec un expert IA</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Discutons de vos besoins spécifiques et découvrez comment nos agents IA
                peuvent transformer votre agence immobilière. Sans engagement.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Analyse de vos processus actuels",
                  "Identification des opportunités d'automatisation",
                  "Estimation du ROI personnalisée",
                  "Démonstration de nos solutions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" size="lg" className="w-full group">
                  Réserver un appel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
