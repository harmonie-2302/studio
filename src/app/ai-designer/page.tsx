import ModelSuggester from '@/components/ai/ModelSuggester';

export default function AiDesignerPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">AI Créateur de Mode</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-body">
          Besoin d'inspiration ? Décrivez vos envies et laissez notre intelligence artificielle vous surprendre avec des propositions de modèles et de designs uniques, taillés pour vous.
        </p>
      </section>

      <section>
        <ModelSuggester />
      </section>
    </div>
  );
}
