"use server";

import { siteConfig } from "@/config/site";
import type {
  ContactFormData,
  PrayerRequestFormData,
  VolunteerFormData,
} from "@/lib/validations";

const DESTINATION_EMAIL =
  process.env.CONTACT_EMAIL ?? siteConfig.email;

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

async function simulateEmailSend(
  type: string,
  data: Record<string, unknown>
): Promise<FormState> {
  // -------------------------------------------------------------------------
  // EMAIL INTEGRATION — connect your provider here
  // -------------------------------------------------------------------------
  // Recommended: Resend (https://resend.com)
  //
  // 1. Add RESEND_API_KEY to .env.local
  // 2. Add SENDER_EMAIL (verified domain) to .env.local
  // 3. Uncomment and configure the Resend example below:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: process.env.SENDER_EMAIL!,
  //   to: DESTINATION_EMAIL,
  //   subject: `[The Well Global] ${type}`,
  //   html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
  // });
  //
  // Alternatives: SendGrid, Formspree, Nodemailer
  //
  // Also consider:
  // - Cloudflare Turnstile or reCAPTCHA for spam protection
  // - Rate limiting (e.g., Upstash Redis) to prevent abuse
  // -------------------------------------------------------------------------

  console.log(`[Form Submission] ${type}`, {
    to: DESTINATION_EMAIL,
    data,
  });

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message:
      "Thank you! Your submission has been received. Our team will respond soon.",
  };
}

export async function submitContactForm(
  data: ContactFormData
): Promise<FormState> {
  return simulateEmailSend("Contact Form", data as unknown as Record<string, unknown>);
}

export async function submitPrayerRequest(
  data: PrayerRequestFormData
): Promise<FormState> {
  return simulateEmailSend("Prayer Request", {
    ...data,
    confidential: data.confidential ? "Yes — keep confidential" : "No",
  });
}

export async function submitVolunteerForm(
  data: VolunteerFormData
): Promise<FormState> {
  return simulateEmailSend("Volunteer Application", data as unknown as Record<string, unknown>);
}
