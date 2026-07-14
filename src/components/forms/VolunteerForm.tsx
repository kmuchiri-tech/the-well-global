"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { submitVolunteerForm } from "@/app/actions/forms";
import {
  volunteerFormSchema,
  type VolunteerFormData,
} from "@/lib/validations";
import { FormSuccessMessage } from "@/components/ui/FormSuccessMessage";
import { cn } from "@/lib/utils";

const interestOptions = [
  "Events & Gatherings",
  "Prayer Ministry",
  "Youth & Next Generation",
  "Community Outreach",
  "Mentorship Support",
  "Media & Communications",
  "Administrative Support",
  "Other",
];

export function VolunteerForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const result = await submitVolunteerForm(data);
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
          <label htmlFor="volunteer-name" className="mb-2 block text-sm font-medium text-deep-navy">
            Name <span className="text-well-blue">*</span>
          </label>
          <input
            id="volunteer-name"
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
          <label htmlFor="volunteer-email" className="mb-2 block text-sm font-medium text-deep-navy">
            Email <span className="text-well-blue">*</span>
          </label>
          <input
            id="volunteer-email"
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
        <label htmlFor="volunteer-phone" className="mb-2 block text-sm font-medium text-deep-navy">
          Phone
        </label>
        <input
          id="volunteer-phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(false)}
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="volunteer-interest" className="mb-2 block text-sm font-medium text-deep-navy">
          Area of Interest <span className="text-well-blue">*</span>
        </label>
        <select
          id="volunteer-interest"
          className={inputClass(!!errors.areaOfInterest)}
          aria-invalid={!!errors.areaOfInterest}
          defaultValue=""
          {...register("areaOfInterest")}
        >
          <option value="" disabled>
            Select an area
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.areaOfInterest && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.areaOfInterest.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="volunteer-availability" className="mb-2 block text-sm font-medium text-deep-navy">
          Availability <span className="text-well-blue">*</span>
        </label>
        <input
          id="volunteer-availability"
          type="text"
          placeholder="e.g., Weekends, weekday evenings"
          className={inputClass(!!errors.availability)}
          aria-invalid={!!errors.availability}
          {...register("availability")}
        />
        {errors.availability && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.availability.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="volunteer-message" className="mb-2 block text-sm font-medium text-deep-navy">
          Message
        </label>
        <textarea
          id="volunteer-message"
          rows={4}
          className={inputClass(false)}
          placeholder="Tell us about your gifts, experience, or questions..."
          {...register("message")}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Volunteer Application"
        )}
      </button>
    </form>
  );
}
