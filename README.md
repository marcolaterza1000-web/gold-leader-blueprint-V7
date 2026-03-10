# Marco Laterza Coaching — Website V7

High-performance coaching website for **Marco Laterza**, Zürich.  
Built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080)

## Build for Production

```bash
npm run build
```

## Deploy via Lovable

Push to GitHub → connect repo in Lovable → auto-deploy.

## Project Structure

```
src/
├── assets/          # Images, logos
├── components/      # All page sections
│   ├── ui/          # shadcn/ui base components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsBar.tsx
│   ├── TrustBar.tsx
│   ├── ProblemSection.tsx
│   ├── AboutMarco.tsx
│   ├── MethodSection.tsx
│   ├── VideoTestimonials.tsx   ← NEW: YouTube testimonials grid
│   ├── ResultsSection.tsx
│   ├── TransformationGallery.tsx
│   ├── LocationsSection.tsx    ← NEW: 3 Zürich locations
│   ├── GoogleReviews.tsx
│   ├── BookingSection.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   └── FloatingButtons.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── useInView.ts            ← NEW: scroll-reveal hook
├── pages/
│   └── Index.tsx               ← Updated page order
└── index.css                   ← Global styles + animations
```

## What Changed in V7

| File | Change |
|---|---|
| `Navbar.tsx` | Sticky «Analyse-Gespräch buchen» CTA, always visible |
| `HeroSection.tsx` | Dominant portrait, stronger headline, proof pills, scarcity badge |
| `VideoTestimonials.tsx` | **NEW** — 8 YouTube testimonials, paginated grid |
| `LocationsSection.tsx` | **NEW** — Urdorf · Zürich City · Seefeld dark-mode cards |
| `useInView.ts` | **NEW** — Intersection Observer scroll-reveal hook |
| `Index.tsx` | Updated component order for conversion flow |
| `index.css` | Added scroll-reveal utilities, gold-line separator |

## Contacts & Links

- Calendly: `https://calendly.com/marcolaterza/strategiegesprach`
- WhatsApp: `https://wa.me/41794445851`
- Phone: `+41 79 444 58 51`
- Google Reviews: `https://search.google.com/local/reviews?placeid=ChIJhZrzumoKkEcR9iO2vfn5Uh8`
