// src/components/ai/ModelSuggester.tsx
"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, SparklesIcon, LightbulbIcon, XCircleIcon } from "lucide-react";
import { suggestClothingModels, type SuggestClothingModelsInput, type SuggestClothingModelsOutput } from "@/ai/flows/suggest-clothing-models";

export default function ModelSuggester() {
  const [description, setDescription] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!description.trim()) {
      setError("Veuillez décrire vos préférences.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const input: SuggestClothingModelsInput = { description };
      const result: SuggestClothingModelsOutput = await suggestClothingModels(input);
      if (result.suggestions && result.suggestions.length > 0) {
        setSuggestions(result.suggestions);
      } else {
        setError("Aucune suggestion trouvée. Essayez une description plus détaillée.");
      }
    } catch (e) {
      console.error("Error fetching suggestions:", e);
      setError("Une erreur est survenue lors de la génération des suggestions. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline text-primary">Votre Assistant Créatif AI</CardTitle>
        </div>
        <CardDescription className="font-body text-md">
          Décrivez le vêtement de vos rêves (style, couleur, occasion, etc.) et laissez notre IA vous proposer des idées inspirantes !
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Textarea
              placeholder="Ex: Une robe longue de soirée, couleur bleu nuit, en soie, avec un dos nu et des détails en dentelle pour un gala..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="text-base border-primary/50 focus:border-primary ring-primary"
              disabled={isLoading}
              aria-label="Description de vos préférences vestimentaires"
            />
          </div>
          <div>
            <Button type="submit" disabled={isLoading || !description.trim()} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <LightbulbIcon className="mr-2 h-5 w-5" />
                  Obtenir des Suggestions
                </>
              )}
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6">
             <XCircleIcon className="h-5 w-5" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {suggestions.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-2xl font-headline text-primary mb-4">Nos Suggestions pour Vous :</h3>
            <ul className="space-y-3 list-disc list-inside pl-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="p-3 bg-accent/50 rounded-md shadow-sm font-body text-foreground/90">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {isLoading && (
            <div className="mt-8 pt-6 border-t border-border text-center">
                <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto" />
                <p className="text-lg text-primary font-semibold mt-2">L'inspiration arrive...</p>
                <p className="text-sm text-muted-foreground">Notre IA prépare des idées uniques pour vous.</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
