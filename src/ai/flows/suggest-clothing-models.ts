// src/ai/flows/suggest-clothing-models.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting clothing models and designs based on user preferences.
 *
 * - suggestClothingModels - A function that takes a description of desired clothing and returns model suggestions.
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

const SuggestClothingModelsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of clothing model and design suggestions.'),
});
export type SuggestClothingModelsOutput = z.infer<typeof SuggestClothingModelsOutputSchema>;

export async function suggestClothingModels(
  input: SuggestClothingModelsInput
): Promise<SuggestClothingModelsOutput> {
  return suggestClothingModelsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestClothingModelsPrompt',
  input: {schema: SuggestClothingModelsInputSchema},
  output: {schema: SuggestClothingModelsOutputSchema},
  prompt: `You are a fashion design assistant. A user will provide a description of clothing they want. Suggest clothing models and designs that match their preferences.

Description: {{{description}}}

Suggestions:`, // Ensure the suggestions are returned as an array of strings.
});

const suggestClothingModelsFlow = ai.defineFlow(
  {
    name: 'suggestClothingModelsFlow',
    inputSchema: SuggestClothingModelsInputSchema,
    outputSchema: SuggestClothingModelsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
