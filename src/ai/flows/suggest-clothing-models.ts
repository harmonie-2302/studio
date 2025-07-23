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
    output: { schema: SuggestionSchema },
    prompt: `Based on the user's request for "{{idea}}", generate one (1) chic and elegant clothing model suggestion. The design should primarily feature "pagne" (African wax print fabric) or other high-quality textiles. Provide a compelling description and generate a representative image for this single suggestion.`,
    config: {
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
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
    const suggestionPromises = Array(3).fill(null).map(async () => {
        const { output } = await suggestionPrompt({ idea: input.description });
        if (!output) throw new Error("Failed to generate a suggestion.");

        const textPart = output.description;
        const imagePart = output.imageDataUri;

        if (!imagePart) {
            throw new Error('Image generation failed for a suggestion.');
        }

        return {
            description: textPart,
            imageDataUri: imagePart,
        };
    });

    const suggestions = await Promise.all(suggestionPromises);

    return { suggestions };
  }
);
