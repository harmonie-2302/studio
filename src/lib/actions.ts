// src/lib/actions.ts
"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom complet doit contenir au moins 2 caractères." }),
  address: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères." }),
  phone: z.string().min(10, { message: "Le numéro de téléphone doit être valide." }).regex(/^\+?[0-9\s-()]{10,}$/, { message: "Format de numéro de téléphone invalide."}),
});

export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: {
    fullName?: string[];
    address?: string[];
    phone?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    address: formData.get("address"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      message: "Erreur de validation. Veuillez corriger les champs.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { fullName, address, phone } = validatedFields.data;

  // In a real application, you would process this data (e.g., save to DB, send email)
  console.log("Contact Form Submitted:");
  console.log("Full Name:", fullName);
  console.log("Address:", address);
  console.log("Phone:", phone);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: `Merci ${fullName}, votre message a été envoyé avec succès ! Nous vous contacterons bientôt.`,
    success: true,
  };
}
