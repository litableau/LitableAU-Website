# LitableAU-Website

## Project Overview

This repository is a Next.js website for the LitClub AU community. It includes a home page, contact form, gallery, event listing, event registration, and email/Google Sheets integrations.

The site is built with:
- Next.js 14
- React 18
- Tailwind CSS
- styled-components
- Framer Motion
- Nodemailer
- Google Apps Script / Google Sheets integration
- UUID for image/event IDs

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the project root with the required values.

3. Run locally:
```bash
npm run dev
```

4. Open the site at:
```bash
http://localhost:3000
```

## Environment Variables

The app uses environment variables for email and registration integrations.

At minimum, define:
```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
```

For Google Sheets API fallback (advanced):
```env
GOOGLE_SHEETS_ID=your_sheet_id
GOOGLE_SHEETS_API_KEY=your_api_key
```

> Local values go in `.env.local`. For deployment, configure env vars in your hosting platform. See `DEPLOYMENT_ENV_SETUP.md` and `GOOGLE_SHEETS_SETUP.md`.

## Main Features

- `app/page.tsx`: Home page with hero, about section, Instagram carousel, contact section, and footer.
- `app/contact/page.tsx`: Dedicated contact page using the same contact form component.
- `app/events/page.tsx`: Events page that renders the `EventsOutline` component with sample event data.
- `app/events/register/[eventId]/page.tsx`: Dynamic event registration page. It loads selected event data from `data/sampleEvents.tsx` and posts submissions to the server.
- `app/api/contact/route.js`: API route that sends contact form submissions via SMTP using Nodemailer.
- `app/api/register/route.ts`: API route that saves event registrations to Google Sheets or Google Apps Script.
- `app/data/gallery-data.tsx`: Gallery image metadata used for the gallery section.
- `data/sampleEvents.tsx`: Sample event definitions used by the events listing and registration flow.

## Directory Structure

### `app/`
- `app/layout.tsx`: Root layout and page metadata.
- `app/globals.css`: Global styles for the site.
- `app/page.tsx`: Main landing page.
- `app/contact/page.tsx`: Contact page.
- `app/events/page.tsx`: Events listing page.
- `app/events/register/[eventId]/page.tsx`: Event registration page.
- `app/api/contact/route.js`: Contact form backend route.
- `app/api/register/route.ts`: Registration backend route.
- `app/data/gallery-data.tsx`: Static gallery event image list.

### `components/ui/`
This folder contains reusable UI components for the site.
- `navbar.tsx`: Top navigation bar used on all pages.
- `lit-club-hero.tsx`: Homepage hero section.
- `about-section.tsx`: About section on the homepage.
- `insta-carousel.tsx`: Instagram-style carousel section.
- `contact-section.tsx`: Contact form and contact info.
- `footer.tsx`: Footer component.
- `EventsOutline.tsx`: Event cards and listing UI.
- `gallery-section.tsx`: Gallery section for event images.
- `activities-section.tsx`: Activities section styles and content.
- `demo.tsx`: Demo UI component used in the site.

### `data/`
- `sampleEvents.tsx`: Event data used for event listing and registration.

### `public/`
Contains static image assets and generated builds.
- `public/2024/`, `public/2025/`: Event image folders.
- `public/events/`, `public/events-webp/`: Event visuals.
- `public/static/`: Static build files from production output.

### `scripts/`
- `build-team.js`: Script for building or packaging team-related assets.

### Root config files
- `package.json`: Project metadata, scripts, and dependencies.
- `next.config.js`: Next.js configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `tsconfig.json`: TypeScript settings.
- `next-env.d.ts`: Next.js type definitions.

## How Data Flows

### Gallery
- `app/data/gallery-data.tsx` contains gallery entries.
- Each entry includes `id`, `eventName`, `title`, `date`, and `imageUrl`.
- The gallery section renders these image cards and uses `public/` assets.

### Events and Registration
- `data/sampleEvents.tsx` stores events used by `app/events/page.tsx`.
- The `EventsOutline` component renders each event as a card.
- When a user clicks register, they are routed to `/events/register/[eventId]`.
- The registration page posts form data to `/api/register`.
- `app/api/register/route.ts` saves data via Google Apps Script or Google Sheets API.

### Contact Form
- The contact form UI posts to `/api/contact`.
- `app/api/contact/route.js` sends email via SMTP using env vars.

## Deployment Notes

- `npm run dev`: Start local development server.
- `npm run build`: Build the app for production.
- `npm run start`: Start production server after build.

### Important
- `.env.local` is local-only and should not be committed.
- For hosted deployments, env vars must be configured in your deployment platform.
- Use the provided documentation files:
  - `DEPLOYMENT_ENV_SETUP.md`
  - `GOOGLE_SHEETS_SETUP.md`

## Extending the Site

### Add a Gallery Item
- Update `app/data/gallery-data.tsx`.
- Add a new object with `id`, `eventName`, `title`, `date`, and `imageUrl`.
- Put the referenced image in `public/`.

### Add or Update an Event
- Update `data/sampleEvents.tsx`.
- Each event includes details like `title`, `description`, `date`, `location`, `imageUrl`, and registration properties.
- The event listing page uses this file automatically.

### Update Static Images
- Add images to `public/2024/`, `public/2025/`, `public/events/`, or `public/events-webp/`.
- Reference them from event or gallery data.

## Useful Notes

- The project uses both Tailwind CSS and styled-components.
- `EventsOutline` exports the `Event` type used across event pages.
- The registration page is client-side and uses `useParams` + `useRouter` from Next.js.
- The contact form backend uses Nodemailer and requires SMTP configuration.

## Contact

If you need to update integrations or event data, start with:
- `app/api/contact/route.js`
- `app/api/register/route.ts`
- `app/data/gallery-data.tsx`
- `data/sampleEvents.tsx`
- `components/ui/EventsOutline.tsx`
- `components/ui/contact-section.tsx`

---

This README is designed to help contributors understand the site structure, how to run it, and where to change content. If you want a deeper guide for a specific page or integration, I can add that next.