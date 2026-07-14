export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
  isSample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "The Well Global gave me a safe place to grow in faith and find mentors who genuinely cared about my journey. I left every gathering feeling encouraged and equipped.",
    name: "Sample: Maria L.",
    context: "Mentorship Participant — Sample content for demonstration",
    isSample: true,
  },
  {
    id: "testimonial-2",
    quote:
      "Morning Manna became a daily anchor for my family. The prayer community showed up for us during a difficult season with compassion and consistency.",
    name: "Sample: James & Keisha T.",
    context: "Prayer Community — Sample content for demonstration",
    isSample: true,
  },
  {
    id: "testimonial-3",
    quote:
      "Through Men of Progress, I found brothers who challenge me to lead at home, at work, and in ministry with integrity and purpose.",
    name: "Sample: David R.",
    context: "Men's Community — Sample content for demonstration",
    isSample: true,
  },
];
