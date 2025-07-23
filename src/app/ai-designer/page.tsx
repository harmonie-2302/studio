import ModelSuggester from '@/components/ai/ModelSuggester';

export default function AiDesignerPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">IA Créateur de Mode {"\u{1F609}"} </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-body">
          Besoin d'inspiration ? 
          Décrivez vos envies et laissez notre IA vous surprendre avec des propositions de modèles et de designs uniques, taillés pour vous {"\u{1F60A}"}.
        </p>
      </section>

      <section>
        <ModelSuggester />
      </section>
    </div>
  );
}
