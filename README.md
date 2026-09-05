# BL&N Electrical & Plumbing — Website

Production website for **BL&N Electrical & Plumbing**, Plettenberg Bay.
Vanilla HTML / CSS / JS — no build step, no framework — deployed on Netlify.

## Structure

```
index.html        Single-page site (semantic HTML5 + JSON-LD structured data)
css/style.css      Design system & styles (CSS custom properties, mobile-first)
js/main.js         Nav, scroll reveal, testimonial scroller, Netlify form handling
assets/            Logo, favicon/icon set, brand mark
```

## Design system

Colors are drawn directly from the brand mark: cobalt blue (`#00308F`) and
amber (`#F6B63C`). The layout borrows the visual language of a real trade
docket — job tickets, spec sheets, service codes — instead of a generic
SaaS template look.

Fonts: **Space Grotesk** (display) + **Inter** (body) + **IBM Plex Mono**
(small labels), loaded from Google Fonts.

## Features

- Fully responsive: tested at mobile (390px), tablet (820px), desktop
  (1440px) and wide desktop (1920px)
- Accessible: semantic landmarks, skip link, visible focus states,
  `aria-live` form feedback, reduced-motion support
- SEO: meta description, canonical URL, Open Graph/Twitter cards,
  `LocalBusiness` + `FAQPage` JSON-LD structured data
- Working Netlify form (`quote-request`) with a honeypot field for spam
- WhatsApp deep link + floating action button
- No build tooling required — deploy the folder as-is

## Deploying

Drag-and-drop the whole folder onto Netlify, or connect this repo and set:
- Build command: *(none)*
- Publish directory: `/` (repo root)

## Updating content

- Business info (phone, email, hours, service areas) lives directly in
  `index.html` — search for the phone number `082 509 8950` to find every
  place it's referenced (`tel:`, `wa.me`, visible text, JSON-LD).
- Testimonials are static blocks inside the `#reviews` section.
- FAQ entries are `<details>/<summary>` pairs inside `#faq` — the visible
  copy is duplicated in the `FAQPage` JSON-LD block near the end of the
  file, so update both when you add/change a question.
