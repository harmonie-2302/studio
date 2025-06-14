// src/components/forms/ContactForm.tsx
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircleIcon, Loader2, XCircleIcon } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Le nom complet doit contenir au moins 2 caractères."),
  address: z.string().min(5, "L'adresse doit contenir au moins 5 caractères."),
  phone: z.string().min(10, "Le numéro de téléphone doit être valide.").regex(/^\+?[0-9\s-()]{10,}$/, "Format de numéro de téléphone invalide."),
});

type ContactFormData = z.infer<typeof formSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Envoi en cours...
        </>
      ) : (
        "Envoyer le Message"
      )}
    </Button>
  );
}


export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      form.reset();
    }
    if (state.errors) {
        if (state.errors.fullName) form.setError("fullName", { type: "server", message: state.errors.fullName.join(', ') });
        if (state.errors.address) form.setError("address", { type: "server", message: state.errors.address.join(', ') });
        if (state.errors.phone) form.setError("phone", { type: "server", message: state.errors.phone.join(', ') });
    }
  }, [state, form]);


  return (
    <div className="max-w-2xl mx-auto">
      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"} className="mb-6 transition-all duration-300"
          data-state={state.message ? "open" : "closed"}
        >
          {state.success ? <CheckCircleIcon className="h-5 w-5" /> : <XCircleIcon className="h-5 w-5" />}
          <AlertTitle>{state.success ? "Succès!" : "Erreur"}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form action={formAction} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-headline text-primary">Nom et Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Sophie Dubois" {...field} className="text-base"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-headline text-primary">Adresse</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ex: 123 Rue de la Couture, Paris" {...field} className="text-base min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-headline text-primary">Numéro de Téléphone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Ex: 06 12 34 56 78" {...field} className="text-base"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>
    </div>
  );
}
