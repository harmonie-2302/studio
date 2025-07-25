// src/components/ui/ServiceCard.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon; // Optional icon
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-6">
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-7 w-7 text-primary mr-3" />}
          <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
        <CardDescription className="text-foreground/80 font-body flex-grow">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
