# Setup Guide

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Placeholder Images

The website uses placeholder images that need to be added to the `/public` directory:

### Required Images:
- `placeholder-hero.jpg` - Homepage hero image
- `placeholder-about-hero.jpg` - About page hero
- `placeholder-product-steel.jpg` - Steel pipes category
- `placeholder-product-plastic.jpg` - Plastic pipes category
- `placeholder-product-copper.jpg` - Copper pipes category
- `placeholder-product-stainless.jpg` - Stainless steel pipes category
- `placeholder-product-ductile.jpg` - Ductile iron pipes category
- `placeholder-product-pvc.jpg` - PVC pipes category
- `placeholder-product-1.jpg` through `placeholder-product-3.jpg` - Product images
- `placeholder-product-item-1.jpg` - Product detail images
- `placeholder-industry-oil-gas.jpg` - Oil & Gas industry
- `placeholder-industry-construction.jpg` - Construction industry
- `placeholder-industry-water.jpg` - Water treatment industry
- `placeholder-industry-chemical.jpg` - Chemical industry
- `placeholder-industry-power.jpg` - Power generation industry
- `placeholder-industry-mining.jpg` - Mining industry
- `placeholder-industry-hero-*.jpg` - Industry detail page heroes
- `placeholder-product-category-*.jpg` - Product category page heroes
- `placeholder-gallery-1.jpg` through `placeholder-gallery-12.jpg` - Gallery images
- `placeholder-certificate-1.jpg` through `placeholder-certificate-8.jpg` - Certificate images

You can use placeholder image services like:
- https://placeholder.com
- https://via.placeholder.com
- Or add your own images

## Project Structure

```
gulf/
├── app/
│   ├── [locale]/          # Locale-based pages
│   │   ├── layout.tsx     # Locale layout with Navbar/Footer
│   │   ├── page.tsx       # Homepage
│   │   ├── about/
│   │   ├── products/
│   │   ├── industries/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── careers/
│   │   ├── certificates/
│   │   └── faq/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root redirect
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Hero.tsx
│   └── ...
├── data/                  # Static data
├── lib/                   # Utilities
├── messages/              # Translation files
│   ├── en.json
│   └── ar.json
├── public/                # Static assets
└── middleware.ts          # Next-intl middleware
```

## Features

✅ Next.js 14 App Router
✅ Multi-language support (English + Arabic)
✅ RTL support for Arabic
✅ URL-based locale routing (/en/... and /ar/...)
✅ Shadcn UI components
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ Responsive design
✅ SEO optimized

## Customization

1. **Content**: Edit translation files in `/messages/en.json` and `/messages/ar.json`
2. **Products**: Update `/data/products.ts`
3. **Industries**: Update `/data/industries.ts`
4. **Styling**: Modify `/app/globals.css` and Tailwind config
5. **Components**: Customize components in `/components`

## Notes

- All text content uses translations from the messages files
- Images use placeholder paths - replace with actual images
- Contact form is frontend-only (no backend integration)
- Language switcher automatically updates the URL and refreshes

