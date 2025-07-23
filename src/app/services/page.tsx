import ServiceCard from '@/components/ui/ServiceCard';
import { ScissorsIcon, PaletteIcon, ShirtIcon, ZapIcon } from 'lucide-react';

const services = [
  {
    title: 'Robes sur Mesure',
    description: 'Création de robes uniques pour toutes occasions, de la conception à la réalisation finale. Mariages, soirées, cocktails.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'custom dress',
    Icon: ShirtIcon,
  },
  {
    title: 'Retouches & Réparations',
    description: 'Ajustements parfaits pour vos vêtements préférés. Ourlets, reprises, modifications et réparations de qualité.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'clothing alterations',
    Icon: ScissorsIcon,
  },
  {
    title: 'Créations Uniques',
    description: 'Donnez vie à vos idées. Nous concevons et fabriquons des pièces originales selon vos envies et votre style.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'fashion design',
    Icon: PaletteIcon,
  },
  {
    title: 'Conseil en Style',
    description: 'Harmonisez votre garde-robe avec des conseils personnalisés pour mettre en valeur votre silhouette et votre personnalité.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'style consultation',
    Icon: ZapIcon,
  },
  {
    title: 'Vêtements Homme',
    description: 'Confection sur mesure de costumes, chemises et autres pièces masculines alliant élégance et confort.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'mens suit',
    Icon: ShirtIcon,
  },
  {
    title: 'Accessoires Textiles',
    description: 'Création d\'accessoires uniques : foulards, étoles, pochettes, pour parfaire vos tenues.',
    imageUrl: 'https://placehold.co/400x500.png',
    imageHint: 'textile accessories',
    Icon: PaletteIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Nos Services</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-body">
          Découvrez l'étendue de notre savoir-faire. À l'Atelier Harmy'sewing, chaque service est réalisé avec passion et précision.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageHint={service.imageHint}
              Icon={service.Icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
