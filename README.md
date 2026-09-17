# BL&N Electrical & Plumbing

This is the website I built for **BL&N Electrical & Plumbing** in Plettenberg Bay.

The goal was simple: make a local trade business look professional online, make it ridiculously easy for someone to understand what BL&N does, and make contacting them require as little effort as possible.

I built the whole thing with vanilla HTML, CSS and JavaScript. No framework, no build step, no giant dependency folder waiting to surprise me later.

## What I built

- A custom single-page business website
- Mobile-first responsive layouts
- A trade-docket-inspired visual identity based on the real brand
- Clear service and contact sections
- WhatsApp contact flow
- Netlify quote-request form with a honeypot spam field
- Accessible navigation, landmarks and focus states
- Reduced-motion support
- SEO metadata, canonical URL and social sharing metadata
- `LocalBusiness` and `FAQPage` JSON-LD structured data
- A lightweight static deployment with no build tooling

## Design direction

I did not want this to look like another generic blue-and-white tradesman template.

The visual system uses the brand's cobalt blue (`#00308F`) and amber (`#F6B63C`) and borrows from the language of a real job docket: job tickets, service codes, specifications and practical information.

The type system is:

- **Space Grotesk** for display text
- **Inter** for body copy
- **IBM Plex Mono** for small technical labels

The result is meant to feel like a real working business rather than a SaaS dashboard that accidentally learned what a plumber is.

## Structure

```text
index.html        Single-page site and semantic HTML5
css/style.css     Design system and responsive styles
js/main.js        Navigation, reveal effects, testimonials and form handling
assets/            Logo, favicon and brand assets
```

## Accessibility

I treat accessibility as part of the implementation rather than something I sprinkle on at the end.

The site includes:

- semantic HTML landmarks
- a skip link
- visible keyboard focus
- accessible form feedback with `aria-live`
- reduced-motion handling
- meaningful link and button labels
- responsive layouts that remain usable on small screens

## SEO

I included the usual technical foundations rather than relying on Google to magically figure everything out:

- page title and meta description
- canonical URL
- Open Graph metadata
- Twitter/social metadata
- `LocalBusiness` structured data
- `FAQPage` structured data
- semantic heading structure
- crawlable HTML content

The goal is not to "hack SEO". The goal is to give search engines useful, honest information about the business and its services.

## Updating the site

Most business information lives directly in `index.html`.

If I need to update the phone number, I should search for `082 509 8950` and update every occurrence, including the visible text, `tel:` link, WhatsApp link and JSON-LD data.

Testimonials live in the `#reviews` section.

FAQ content uses `<details>/<summary>` elements inside `#faq`. The same questions and answers are also represented in the `FAQPage` JSON-LD, so I need to update both when changing an FAQ.

## Deployment

This is intentionally simple:

```text
VS Code → Git → GitHub → Netlify
```

There is no build command. The repository root is the publish directory.

For Netlify:

```text
Build command: none
Publish directory: /
```

## A note to future me

Do not turn a one-page local business website into a 14-service web application because one button looked lonely.

Keep the content accurate, keep the code readable, test it on a phone, check the form, check the keyboard, check the console, and then leave the poor thing alone until there is a real reason to change it.
