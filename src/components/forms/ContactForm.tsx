"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/forms";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations";
import { FormSuccessMessage } from "@/components/ui/FormSuccessMessage";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setSuccessMessage(result.message);
        reset();
      } else {
        setServerError(result.message);
      }
    } catch {
      setServerError("Something went wrong. Please try again later.");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full rounded-xl border px-4 py-3 text-deep-navy transition-colors focus:border-well-blue focus:outline-none focus:ring-2 focus:ring-well-blue/20",
      hasError ? "border-red-400" : "border-silver"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {successMessage && <FormSuccessMessage message={successMessage} />}
      {serverError && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          {serverError}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-deep-navy">
            Name <span className="text-well-blue">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-deep-navy">
            Email <span className="text-well-blue">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-deep-navy">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(false)}
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-deep-navy">
          Subject <span className="text-well-blue">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          className={inputClass(!!errors.subject)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-deep-navy">
          Message <span className="text-well-blue">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={inputClass(!!errors.message)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
