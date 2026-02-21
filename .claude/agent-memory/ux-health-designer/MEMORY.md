# Private Pilates - UX Design Memory

## Project Overview
- Single-page landing site for a private mobility & core strength coaching program
- Target audience: Men 35-65, NYC tech/finance professionals
- Stack: Vue 3 + TypeScript + Tailwind CSS + Vite
- Submits to Google Apps Script endpoint

## Design Direction (PRD Pivot - Feb 2026)
- FROM: Women's wellness spa aesthetic (sage green, cream, Playfair/Nunito)
- TO: Executive men's performance program (minimalist, dark, structured, NYC)
- Tone: Professional, structured, performance-oriented, calm, credible
- Avoid: Fitness influencer aesthetic, bright colors, yoga-flow tone, playful language

## Proposed Design System Tokens (Advisory Issued)
- See `redesign-direction.md` for full color/type/layout specifications
- Primary palette: Charcoal/Navy/White/Slate
- Fonts: Inter (body/UI), DM Serif Display (headlines)
- Layout: Full-width sections, max-w-3xl content, generous vertical rhythm

## Key Files
- `/mnt/c/workspace/pilate/src/App.vue` - Page layout, header, footer
- `/mnt/c/workspace/pilate/src/components/RegistrationForm.vue` - Form logic + UI
- `/mnt/c/workspace/pilate/src/style.css` - Global styles + Tailwind component layer
- `/mnt/c/workspace/pilate/tailwind.config.ts` - Color/font token definitions
- `/mnt/c/workspace/pilate/index.html` - HTML shell with font preconnects
- `/mnt/c/workspace/pilate/product/PRD.txt` - Product requirements document

## Form Fields (Current)
- Required: Full Name, Email
- Optional: Age Range (select), Biggest Hurdle (textarea), Improve in 6 Weeks (textarea)
- Validation: on-blur touch-based, computed reactive errors
- Honeypot anti-spam field present

## Previous Observations
- See `ux-review-findings.md` for earlier UX critique (pre-pivot)
