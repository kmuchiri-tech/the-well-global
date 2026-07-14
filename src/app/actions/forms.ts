"use server";

import { siteConfig } from "@/config/site";
import type {
  ContactFormData,
  PrayerRequestFormData,
  VolunteerFormData,
} from "@/lib/validations";

/**
 * ALL form submissions (join, contact, prayer, volunteer) are routed to:
 * thewell@newlife.global
 *
 * Override only via CONTACT_EMAIL in .env.local if ever needed.
 */
const DESTINATION_EMAIL =
  process.env.CONTACT_EMAIL ?? siteConfig.email; // thewell@newlife.global

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
  // Destination (always): thewell@newlife.global
  //
  // Recommended: Resend (https://resend.com)
  //
  // 1. Add RESEND_API_KEY to .env.local
  // 2. Add SENDER_EMAIL (verified domain) to .env.local
  // 3. Uncomment and configure:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: process.env.SENDER_EMAIL!,
  //   to: 'thewell@newlife.global',
  //   subject: `[The Well Global] ${type}`,
  //   replyTo: typeof data.email === 'string' ? data.email : undefined,
  //   html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
  // });
  //
  // Alternatives: SendGrid, Formspree, Nodemailer
  // -------------------------------------------------------------------------

  console.log(`[Form Submission → ${DESTINATION_EMAIL}] ${type}`, { data });

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message:
      "Thank you! Your submission has been received. Our team will respond soon at thewell@newlife.global.",
  };
}

export async function submitContactForm(
  data: ContactFormData
): Promise<FormState> {
  // Join The Well / general inquiries
  return simulateEmailSend("Join / Contact Inquiry", data as unknown as Record<string, unknown>);
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
  return simulateEmailSend("Volunteer / Serve Application", data as unknown as Record<string, unknown>);
}
