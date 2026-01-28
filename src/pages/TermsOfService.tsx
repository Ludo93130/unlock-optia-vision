import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl font-bold mb-8">Conditions d'Utilisation</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p><strong>Dernière mise à jour :</strong> Janvier 2026</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Objet</h2>
          <p>
            Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site optia-solutions.fr, édité par Optia Solutions.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Éditeur du site</h2>
          <p>
            Optia Solutions<br />
            Auto-entrepreneur<br />
            Seine-et-Marne (77), France<br />
            Email : contact@optia-solutions.fr<br />
            Téléphone : 07 54 07 34 98
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Accès au site</h2>
          <p>
            L'accès au site est gratuit. Les frais d'accès à internet et d'équipement sont à la charge de l'utilisateur. Nous nous réservons le droit de suspendre ou modifier l'accès au site sans préavis.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Services proposés</h2>
          <p>
            Optia Solutions propose des services d'automatisation par intelligence artificielle destinés aux agences immobilières, incluant :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agents IA de capture et qualification de leads</li>
            <li>Agents IA de relance et conversion</li>
            <li>Agents IA de matching et fidélisation</li>
            <li>Maintenance et support technique</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus du site (textes, images, logos, design) sont la propriété d'Optia Solutions. Toute reproduction sans autorisation est interdite.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Limitation de responsabilité</h2>
          <p>
            Les informations présentes sur le site sont fournies à titre indicatif. Optia Solutions ne saurait être tenu responsable des erreurs ou omissions, ni des dommages résultant de l'utilisation du site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Droit applicable</h2>
          <p>
            Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux français seront compétents.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Contact</h2>
          <p>
            Pour toute question, contactez-nous :<br />
            Email : contact@optia-solutions.fr<br />
            Téléphone : 07 54 07 34 98
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;