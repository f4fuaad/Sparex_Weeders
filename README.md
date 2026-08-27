# Sparex India — B2B Paper Products Website

Premium B2B website for **Sparex India**, a Chennai-based paper products supplier serving packaging manufacturers, printers, converters, wholesalers, and distributors.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS v4** — styling (Material Noir design system)
- **GSAP + ScrollTrigger** — scroll animations and parallax
- **React Router** — client-side routing
- **Lucide React** — icons
- **React Helmet Async** — SEO metadata

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

Output is in the `dist/` folder, ready for static hosting.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, UtilityBar, WhatsAppFloat
│   ├── sections/     # Hero, Products, Applications, EnquiryForm, etc.
│   ├── seo/          # SEOHead with structured data
│   └── ui/           # Button, ChapterMarker, SectionHeading
├── hooks/            # useReducedMotion, useScrollHeader
├── lib/              # constants, WhatsApp URL helpers
├── pages/            # Home, Products, About, Contact, 404
├── App.tsx
├── main.tsx
└── index.css         # Tailwind theme + Material Noir utilities
public/
├── sparex-logo.png      # Full supplied business card image (OG / social)
├── sparex-wordmark.png  # Cropped SPAREX wordmark for header & footer
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Deployment

### Static Hosting (Recommended)

Deploy the `dist/` folder to any HTTPS static host:

- **Vercel** — connect repo, set build command `npm run build`, output `dist`
- **Netlify** — same settings
- **Cloudflare Pages** — same settings
- **AWS S3 + CloudFront** — upload `dist/`, enable HTTPS

### Custom Domain

1. Purchase a domain (e.g. `sparexindia.com`).
2. Point DNS A/CNAME records to your hosting provider.
3. Enable HTTPS (most hosts provide free SSL via Let's Encrypt).
4. Update `COMPANY.canonicalBase` in `src/lib/constants.ts` to your live domain.
5. Update URLs in `public/robots.txt` and `public/sitemap.xml`.

### Environment Variables

Create a `.env` file for future backend integration (never commit secrets):

```env
VITE_CONTACT_API_URL=https://your-api.example.com/enquiry
VITE_CANONICAL_BASE=https://www.sparexindia.com
```

## Business Email Setup

Current contact email: **sparexind@gmail.com**

After purchasing a domain, set up professional email addresses:

| Address | Purpose |
|---------|---------|
| info@sparexindia.com | General enquiries |
| sales@sparexindia.com | Sales and quotes |
| contact@sparexindia.com | Contact form routing |

### DNS Records (via your email provider — Google Workspace, Zoho, etc.)

1. **MX records** — point to your email provider's mail servers.
2. **SPF** — `v=spf1 include:_spf.google.com ~all` (adjust for provider).
3. **DKIM** — add the DKIM TXT record from your provider.
4. **DMARC** — `v=DMARC1; p=none; rua=mailto:admin@sparexindia.com`

Update the website email in `src/lib/constants.ts` once configured.

## Enquiry Form — Backend Integration

The form currently uses a **mailto fallback** (opens the user's email client with a pre-filled message). For production, connect a secure backend:

### Option A: Form Service (Easiest)

Use [Formspree](https://formspree.io), [Getform](https://getform.io), or [Web3Forms](https://web3forms.com):

1. Create an account and get an endpoint URL.
2. Add `VITE_FORM_ENDPOINT` to `.env`.
3. Update `EnquiryForm.tsx` to POST form data to the endpoint.
4. Never expose API keys in client code — use environment variables.

### Option B: Custom Backend

Create a serverless function (Vercel/Netlify/AWS Lambda) that:

1. Receives POST with form fields.
2. Validates input server-side.
3. Sends email via SMTP or a transactional service (SendGrid, Resend, AWS SES).
4. Stores credentials in environment variables only.

Example endpoint shape:

```
POST /api/enquiry
Content-Type: application/json

{
  "fullName": "...",
  "company": "...",
  "email": "...",
  "phone": "...",
  "product": "...",
  "quantity": "...",
  "location": "...",
  "message": "...",
  "consent": true
}
```

## WhatsApp Sales Integration

All WhatsApp links use the confirmed number: **+91 63798 06475**

Format: `https://wa.me/916379806475?text=ENCODED_MESSAGE`

WhatsApp actions appear in:
- Hero section
- Product sections (product-specific prefilled messages)
- Contact page and enquiry form
- Floating button (desktop and mobile)
- Footer

Prefilled messages are defined in `src/lib/whatsapp.ts`.

**Important:** Clicking opens WhatsApp with a pre-filled message. The sales person receives the enquiry only after the customer sends the message.

## SEO

Implemented on every page:

- Unique `<title>` and meta description
- Open Graph and Twitter Card metadata
- Canonical URL placeholder (`https://www.sparexindia.com`)
- LocalBusiness JSON-LD structured data
- Semantic HTML with proper heading hierarchy
- `robots.txt` and `sitemap.xml`
- Descriptive alt text on meaningful images

Update `COMPANY.canonicalBase` when the domain goes live.

## Accessibility

- `prefers-reduced-motion` disables parallax and heavy GSAP effects
- Keyboard navigation with visible focus states
- ARIA labels on WhatsApp and icon-only buttons
- Form validation with error announcements
- Sufficient colour contrast across the Material Noir palette

## Company Information

| Field | Value |
|-------|-------|
| Company | Sparex India |
| Address | No. 201, GNT Road, Puzhal, Chennai – 600066, Tamil Nadu, India |
| Phone | +91 63798 06475 |
| Email | sparexind@gmail.com |
| GSTIN | 33DPZPB6496G1ZA |
| State | 33 – Tamil Nadu |

## License

Private — © Sparex India. All rights reserved.
