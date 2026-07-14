"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { submitPrayerRequest } from "@/app/actions/forms";
import {
  prayerRequestSchema,
  type PrayerRequestFormData,
} from "@/lib/validations";
import { FormSuccessMessage } from "@/components/ui/FormSuccessMessage";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function PrayerRequestForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: { confidential: false },
  });

  const onSubmit = async (data: PrayerRequestFormData) => {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const result = await submitPrayerRequest(data);
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
          <label htmlFor="prayer-name" className="mb-2 block text-sm font-medium text-deep-navy">
            Name <span className="text-well-blue">*</span>
          </label>
          <input
            id="prayer-name"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="prayer-email" className="mb-2 block text-sm font-medium text-deep-navy">
            Email <span className="text-well-blue">*</span>
          </label>
          <input
            id="prayer-email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="prayer-phone" className="mb-2 block text-sm font-medium text-deep-navy">
          Phone
        </label>
        <input
          id="prayer-phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(false)}
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="prayer-request" className="mb-2 block text-sm font-medium text-deep-navy">
          Prayer Request <span className="text-well-blue">*</span>
        </label>
        <textarea
          id="prayer-request"
          rows={5}
          className={inputClass(!!errors.prayerRequest)}
          aria-invalid={!!errors.prayerRequest}
          placeholder="Share your prayer need..."
          {...register("prayerRequest")}
        />
        {errors.prayerRequest && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.prayerRequest.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="prayer-confidential"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-silver text-well-blue focus:ring-well-blue"
          {...register("confidential")}
        />
        <label htmlFor="prayer-confidential" className="text-sm text-deep-navy/80">
          Keep this request confidential (only shared with the prayer team)
        </label>
      </div>

      <p className="text-xs text-deep-navy/50">
        Your information is handled with care. Submissions are routed to{" "}
        {siteConfig.email}. Prayer requests are not publicly shared unless you
        give permission.
      </p>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Prayer Request"
        )}
      </button>
    </form>
  );
}
