# Fizio Ensō - Marketing Website

Premium, minimalist marketing website for a physiotherapy & massage studio.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React 18**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── o-ensu/            # About page
│   ├── tretmani/          # Services page
│   ├── prostor-oprema/    # Space & Equipment page
│   ├── cjenik/            # Pricing page
│   └── kontakt/           # Contact page
├── components/            # Reusable React components
├── content/              # Content data (Croatian text, pricing)
├── public/               # Static assets
│   ├── info/             # Logo and images
│   └── videos/           # Video assets (add hero video here)
└── styles/               # Global styles
```

## Assets

### Logo
- Place the Ensō logo at: `public/info/logo.png`
- The logo should be a transparent PNG

### Hero Video
- Add a looping massage video at: `public/videos/massage-hero.mp4`
- The video will automatically have a black-and-white filter applied
- Recommended: 1920x1080, MP4 format, optimized for web

### Gallery Images
- Replace placeholder images in `/prostor-oprema` with actual studio photos
- Update the gallery section in `app/prostor-oprema/page.tsx`

### Google Maps
- Update the map embed URL in `content/siteContent.ts` under `contact.mapPlaceholder`
- Get the embed URL from Google Maps for the address: Ulica Ivana Rendića 29, Zagreb

## Customization

### Content
All text content is stored in `content/siteContent.ts` for easy editing.

### Colors
Color palette is defined in `tailwind.config.ts`:
- Background: `#FAF9F6` (off-white)
- Foreground: `#1A1A1A` (dark gray/near-black)
- Accent: `#6B6B6B` (warm gray)

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Features

- ✅ Fully responsive (desktop-first, optimized for 16:9)
- ✅ SEO metadata on all pages
- ✅ Smooth scroll-based navigation reveal
- ✅ Hero video with logo overlay
- ✅ Contact form (client-side validation)
- ✅ Pricing tables
- ✅ Testimonials section
- ✅ Minimal animations

## Notes

- The navigation bar is hidden on initial load and appears after scrolling past the hero section
- The hero video should be a looping background video (stock video initially)
- All content is in Croatian
- The contact form currently only validates on the client side (no backend integration)

