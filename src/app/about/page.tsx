import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SewingPinIcon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">À Propos de Nous</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-body">
          Rencontrez la passion et l'expertise derrière chaque création.
        </p>
      </section>

      <section className="flex justify-center">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/30 w-full max-w-2xl overflow-hidden">
          <CardHeader className="text-center p-6">
            <div className="relative w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="/images/zawadi-bashizi.jpg"
                alt="Madame Zawadi Bashizi"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            <CardTitle className="text-3xl font-headline text-primary">Zawadi Bashizi</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-xl text-center text-foreground/80 font-body italic">
              "Moi c'est madame Zawadi Bashizi votre cheffe en couture ☺️🙂"
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
