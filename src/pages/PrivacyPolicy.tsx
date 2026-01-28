import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p><strong>Dernière mise à jour :</strong> Janvier 2026</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Introduction</h2>
          <p>
            Optia Solutions (« nous », « notre ») s'engage à protéger la vie privée des visiteurs de son site web optia-solutions.fr. Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Données collectées</h2>
          <p>Nous pouvons collecter les informations suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email professionnelle</li>
            <li>Numéro de téléphone</li>
            <li>Nom de votre agence immobilière</li>
            <li>Données de navigation (cookies, adresse IP)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Utilisation des données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Vous proposer nos services d'automatisation IA</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Hébergement des données</h2>
          <p>
            Vos données sont hébergées en France, sur des serveurs sécurisés conformes au RGPD. Nous ne transférons pas vos données en dehors de l'Union Européenne.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à : contact@optia-solutions.fr</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Contact</h2>
          <p>
            Pour toute question concernant cette politique, contactez-nous :<br />
            Email : contact@optia-solutions.fr<br />
            Téléphone : 07 54 07 34 98
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;