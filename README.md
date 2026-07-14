# The Well Global Website

A faith-centered community website for **The Well Global** — helping visitors understand the organization, explore programs, join groups, submit prayer requests, volunteer, attend events, connect with Pastor Nina Anderson, and give.

Built around four primary pathways: **Grow**, **Gather**, **Pray**, and **Serve**.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- [Framer Motion](https://www.framer.com/motion/) for subtle animations

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages and server actions
├── components/       # Reusable UI components
│   ├── cards/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/           # Site-wide configuration
├── data/             # Structured content (programs, events, etc.)
└── lib/              # Utilities and validation schemas
public/
└── images/           # Logo and media assets
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, pathways, programs, events, testimonials |
| `/about` | Story, mission, vision, values, beliefs, timeline, leadership |
| `/grow` | The Well Academy and The Well Care programs |
| `/gather` | Retreats, events, and community groups |
| `/pray` | Prayer ministries and prayer request form |
| `/serve` | Next Generation, Outreach, Partnerships, volunteer form |
| `/media` | Watch, Listen, Read, and Social Media |
| `/get-involved` | Action cards and decision guide |
| `/contact` | Contact form and social links |
| `/events` | Featured, upcoming, and past events with filters |
| `/privacy` | Privacy policy |

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `CONTACT_EMAIL` | Destination email for form submissions (default: `thewell@newlife.global`) |
| `RESEND_API_KEY` | API key for Resend email service (when configured) |
| `SENDER_EMAIL` | Verified sender email domain (when configured) |

## Form Integration

Forms currently use placeholder server actions in `src/app/actions/forms.ts`. Submissions are logged to the console and simulate a successful response.

To enable real email delivery:

1. Sign up for [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or [Formspree](https://formspree.io)
2. Add your API key to `.env.local`
3. Uncomment and configure the email code in `src/app/actions/forms.ts`
4. Consider adding spam protection (Cloudflare Turnstile, reCAPTCHA) and rate limiting

## Content Editing

Edit structured data files — no need to modify page components:

| File | Content |
|------|---------|
| `src/config/site.ts` | Organization name, tagline, navigation, footer links |
| `src/data/programs.ts` | All program cards across Grow, Gather, Pray, Serve |
| `src/data/events.ts` | Event listings (featured, upcoming, past) |
| `src/data/testimonials.ts` | Testimonial cards (marked as sample content) |
| `src/data/media.ts` | Media items and social platform links |
| `src/data/social-links.ts` | Contact page social link cards |
| `src/data/values.ts` | Mission, vision, core values, beliefs, timeline |

## Image Replacement

- **Logo:** Replace `public/images/the-well-logo.png`
- **Media thumbnails:** Update paths in `src/data/media.ts` or add images to `public/images/`
- **Pastor Nina photo:** Add image to `public/images/` and update `siteConfig.pastorNina.image` in `src/config/site.ts`

## Social Link Editing

Update links in:

- `src/data/social-links.ts` — Contact page grouped links
- `src/config/site.ts` — Footer and navigation external links
- `src/data/media.ts` — Social media platform URLs

## Event Editing

Edit `src/data/events.ts`:

```typescript
{
  id: "unique-id",
  title: "Event Title",
  date: "2026-04-12",        // YYYY-MM-DD
  endDate: "2026-04-14",     // Optional, for multi-day events
  time: "6:30 PM EST",       // Optional
  location: "Venue Name",
  description: "Event description...",
  category: "Worship",       // Worship | Prayer | Community | Retreat | Leadership | Family
  featured: true,            // Optional, for featured event
  registerUrl: "/get-involved",
  isPast: false,             // Set true for past events
}
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Other Platforms

Any platform supporting Next.js 15 works (Netlify, AWS Amplify, self-hosted Node.js):

```bash
npm run build
npm start
```

Update `siteConfig.url` in `src/config/site.ts` to your production domain for correct SEO metadata and sitemap URLs.

## Accessibility

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`)
- Skip-to-content link
- Keyboard-navigable mobile menu with Escape to close
- Visible focus states
- Form labels, error announcements, and ARIA attributes
- `prefers-reduced-motion` support for animations

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Well Purple | `#28346D` | Primary brand, headers, deep accents |
| Violet | `#6B4FA3` | Buttons, links, icons |
| Lilac | `#C4A8E0` | Soft highlights, hovers |
| Lavender | `#E8DDF5` | Light accents, section tint |
| Deep Navy | `#1A2048` | Body text, dark sections |
| Blush | `#F4EFF8` | Soft section backgrounds |

Full palette reference: `src/config/brand.ts`

## License

© 2026 The Well Global. All rights reserved.
