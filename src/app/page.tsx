import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SparklesIcon, ArrowRightIcon } from 'lucide-react';

// Custom Sewing Pin Icon SVG
const SewingPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M15.5 7.5L9 14" />
    <path d="M14 9l-1.5 1.5" />
    <circle cx="6.5" cy="17.5" r="1.5" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 opacity-20">
           <Image 
            src="https://placehold.co/1200x600.png" 
            alt="Atelier de couture Harmy'sewing" 
            layout="fill"
            objectFit="cover"
            data-ai-hint="fashion workshop"
            className="animate-pulse"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <SewingPinIcon className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-headline text-primary-foreground mb-4">
            Bienvenue à l'Atelier Harmy'sewing
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-body">
            L'art de la couture, sublimé pour vous. Découvrez des créations uniques et un savoir-faire d'exception.
          </p>
          <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center items-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto">
              <Link href="/services" className="flex items-center gap-2">
                Découvrir nos Services <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto">
              <Link href="/ai-designer" className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5" /> Essayez l'AI Créateur
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-headline text-primary">Notre Passion, Votre Style</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/80 space-y-6 leading-relaxed font-body text-justify">
            <p>
              À l'Atelier Harmy'sewing, nous croyons que chaque vêtement est une œuvre d'art, une extension de votre personnalité. 
              Notre mission est de transformer vos rêves en réalité textile, avec une attention méticuleuse aux détails et une passion pour la perfection.
            </p>
            <p>
              Que vous recherchiez une robe de soirée époustouflante, un tailleur sur mesure impeccable, ou simplement des conseils pour sublimer votre garde-robe, 
              notre équipe d'artisans qualifiés est à votre écoute. Nous combinons techniques traditionnelles et tendances modernes pour créer des pièces qui vous ressemblent.
            </p>
             <div className="flex justify-center mt-6">
                <Button asChild variant="link" className="text-primary hover:text-accent text-lg font-semibold">
                    <Link href="/contact">
                        Prenez rendez-vous pour une consultation personnalisée <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-secondary/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-headline text-primary text-center mb-10">Pourquoi Choisir Harmy'sewing ?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <SewingPinIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">Savoir-Faire Artisanal</h3>
            <p className="text-foreground/70 font-body">Des années d'expérience et une passion pour la couture de haute qualité.</p>
          </div>
          <div className="p-6">
            <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">Créations Uniques</h3>
            <p className="text-foreground/70 font-body">Des designs personnalisés qui reflètent votre style et votre individualité.</p>
          </div>
          <div className="p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <h3 className="text-2xl font-headline text-primary mb-2">Service d'Excellence</h3>
            <p className="text-foreground/70 font-body">Une écoute attentive et des conseils personnalisés pour chaque client.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
