import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const prayerRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  prayerRequest: z
    .string()
    .min(10, "Please share your prayer request (at least 10 characters)"),
  confidential: z.boolean().default(false),
});

export const volunteerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  areaOfInterest: z.string().min(2, "Please select or describe an area of interest"),
  availability: z.string().min(2, "Please share your availability"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;
export type VolunteerFormData = z.infer<typeof volunteerFormSchema>;
