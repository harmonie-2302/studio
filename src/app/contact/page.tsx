import ContactForm from '@/components/forms/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Contactez-Nous</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-body">
          Nous sommes ravis de discuter de vos projets de couture. Remplissez le formulaire ci-dessous ou contactez-nous directement.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Vos Coordonnées</CardTitle>
            <CardDescription className="font-body text-md">Laissez-nous vos informations et nous vous recontacterons dans les plus brefs délais.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Informations de l'Atelier</CardTitle>
             <CardDescription className="font-body text-md">Retrouvez-nous ou contactez-nous par d'autres moyens.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <MapPinIcon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Adresse</h3>
                <p className="text-foreground/80 font-body">123 Rue de la Mode, 75001 Paris, France</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Téléphone</h3>
                <p className="text-foreground/80 font-body">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MailIcon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-foreground/80 font-body">contact@harmysewing.com</p>
              </div>
            </div>
            <div>
                 <h3 className="font-semibold text-primary mb-2">Horaires d'ouverture</h3>
                 <p className="text-foreground/80 font-body">Lundi - Vendredi : 9h00 - 18h00</p>
                 <p className="text-foreground/80 font-body">Samedi : 10h00 - 16h00 (sur rendez-vous)</p>
                 <p className="text-foreground/80 font-body">Dimanche : Fermé</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
