// src/ai/flows/suggest-clothing-models.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting clothing models and designs based on user preferences.
 *
 * - suggestClothingModels - A function that takes a description of desired clothing and returns model suggestions with images.
 * - SuggestClothingModelsInput - The input type for the suggestClothingModels function.
 * - SuggestClothingModelsOutput - The return type for the suggestClothingModels function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestClothingModelsInputSchema = z.object({
  description: z
    .string()
    .describe('A description of the desired clothing, including style, color, and purpose.'),
});
export type SuggestClothingModelsInput = z.infer<typeof SuggestClothingModelsInputSchema>;

const SuggestionSchema = z.object({
    description: z.string().describe("A chic and elegant description of a clothing model, primarily using 'pagne' (wax print fabric) or other fine textiles."),
    imageDataUri: z.string().describe("A data URI of a generated image for the clothing model. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type Suggestion = z.infer<typeof SuggestionSchema>;

const SuggestClothingModelsOutputSchema = z.object({
  suggestions: z
    .array(SuggestionSchema)
    .describe('An array of clothing model and design suggestions, each with a description and an image.'),
});
export type SuggestClothingModelsOutput = z.infer<typeof SuggestClothingModelsOutputSchema>;

export async function suggestClothingModels(
  input: SuggestClothingModelsInput
): Promise<SuggestClothingModelsOutput> {
  return suggestClothingModelsFlow(input);
}

const suggestionPrompt = ai.definePrompt({
    name: 'suggestionPrompt',
    input: { schema: z.object({ idea: z.string() }) },
    // NOTE: We removed the output schema because the image generation model doesn't support JSON output mode.
    // We will process the raw text and media from the response instead.
    prompt: `En vous basant sur la demande de l'utilisateur pour "{{idea}}", générez une (1) suggestion de modèle de vêtement chic et élégant en FRANÇAIS. Le design doit principalement comporter du "pagne" (tissu wax africain) ou d'autres textiles de haute qualité. Fournissez une description convaincante en FRANÇAIS et générez une image représentative pour cette unique suggestion.`,
    model: 'googleai/gemini-2.0-flash-preview-image-generation',
    config: {
        responseModalities: ['TEXT', 'IMAGE'],
    },
});


const suggestClothingModelsFlow = ai.defineFlow(
  {
    name: 'suggestClothingModelsFlow',
    inputSchema: SuggestClothingModelsInputSchema,
    outputSchema: SuggestClothingModelsOutputSchema,
  },
  async (input) => {
    // Generate 3 suggestions in parallel
    const suggestionPromises = Array(3).fill(null).map(async (): Promise<Suggestion> => {
        const response = await suggestionPrompt({ idea: input.description });
        
        const textPart = response.text;
        const imagePart = response.media;

        if (!textPart) {
          throw new Error("Text generation failed for a suggestion.");
        }
        if (!imagePart) {
            throw new Error('Image generation failed for a suggestion.');
        }

        return {
            description: textPart,
            imageDataUri: imagePart.url,
        };
    });

    const suggestions = await Promise.all(suggestionPromises);

    return { suggestions };
  }
);
