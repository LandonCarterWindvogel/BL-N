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