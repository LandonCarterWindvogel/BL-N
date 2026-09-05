<<<<<<< HEAD
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
=======
# BL&N Electrical & Plumbing

A fast, conversion-focused website for BL&N Electrical & Plumbing in Plettenberg Bay, Western Cape.

**Live site:** https://bl-n-site.netlify.app/

## Purpose

The site is designed around the way a local trade customer actually behaves: identify the service, understand the offering, establish confidence, and make contact quickly.

## Highlights

- Fully responsive, mobile-first layout
- Strong call / WhatsApp / quote actions throughout the journey
- Dedicated electrical, plumbing and property-maintenance service sections
- Clear three-step service process
- Local service-area coverage content
- Netlify-compatible quote form with honeypot spam protection
- Semantic HTML and keyboard-accessible controls
- Reduced-motion support
- Vanilla CSS and modern JavaScript with no frontend framework
- Local SEO metadata, Open Graph tags and Schema.org LocalBusiness data
- Netlify security headers including a same-origin Content Security Policy
- Long-lived caching for static assets

## Structure

```text
/
├── index.html
├── robots.txt
├── sitemap.xml
├── _headers
└── assets/
    ├── favicon.png
    ├── favicon_t.png
    ├── logo.png
    ├── logo_w.png
    ├── name
    ├── site.css
    └── site.js
```

## Deployment

The repository is intentionally static so it can deploy directly through GitHub + Netlify with no build step.

For a future custom domain, update the canonical URL, Open Graph URL/image paths, `robots.txt` sitemap URL and the Schema.org `url`/`@id` values in `index.html`.

## Technology

- Semantic HTML5
- CSS3
- Modern ES6+ JavaScript
- Netlify Forms
- Schema.org structured data
- Netlify `_headers`

## Project status

**Client website — production-ready static build**

The implementation keeps the existing BL&N branding assets while replacing the previous single-file Tailwind CDN approach with a cleaner, self-contained frontend architecture focused on speed, accessibility, maintainability and conversion.
>>>>>>> c36c0029d150535a3097e8a1ca0ac1b07de75566
