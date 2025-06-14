// src/components/ui/ServiceCard.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  Icon?: LucideIcon; // Optional icon
}

export default function ServiceCard({ title, description, imageUrl, imageHint, Icon }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0">
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-7 w-7 text-primary mr-3" />}
          <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
        </div>
        <CardDescription className="text-foreground/80 font-body flex-grow">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
