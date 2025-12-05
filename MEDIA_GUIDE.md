# Media Assets Guide

This guide explains the folder structure for images and videos in the project.

## Folder Structure

```
public/
├── images/
│   ├── products/          # Product category and product images
│   ├── industries/        # Industry images
│   ├── gallery/           # Gallery images
│   ├── certificates/      # Certificate images
│   └── about/             # About page images
└── videos/
    └── hero-background.mp4  # Main hero background video
```

## Current Setup

### Videos
- **Hero Background**: `/videos/hero-background.mp4`
  - Used on the homepage hero section
  - Automatically plays, loops, and is muted
  - Format: MP4 (H.264 recommended)

### Images

#### Products (`/images/products/`)
- `steel.jpg` - Steel pipes category
- `plastic.jpg` - Plastic pipes category
- `copper.jpg` - Copper pipes category
- `stainless.jpg` - Stainless steel pipes category
- `ductile.jpg` - Ductile iron pipes category
- `pvc.jpg` - PVC pipes category
- `steel-standard.jpg` - Standard steel product
- `hdpe.jpg` - HDPE product
- `copper-standard.jpg` - Standard copper product
- `steel-grade-a.jpg` - Grade A steel product item
- `category-{slug}.jpg` - Product category hero images

#### Industries (`/images/industries/`)
- `oil-gas.jpg` - Oil & Gas industry
- `construction.jpg` - Construction industry
- `water-treatment.jpg` - Water treatment industry
- `chemical.jpg` - Chemical processing industry
- `power.jpg` - Power generation industry
- `mining.jpg` - Mining industry
- `hero-{slug}.jpg` - Industry detail page hero images

#### Gallery (`/images/gallery/`)
- `gallery-1.jpg` through `gallery-12.jpg` - Gallery images

#### Certificates (`/images/certificates/`)
- `certificate-1.jpg` through `certificate-8.jpg` - Certificate images

#### About (`/images/about/`)
- `about-hero.jpg` - About page hero image

## Usage in Code

### Hero Component
```tsx
// Video background (homepage)
<Hero video="/videos/hero-background.mp4" />

// Image background (other pages)
<Hero image="/images/about/about-hero.jpg" />
```

### Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/products/steel.jpg"
  alt="Steel Pipes"
  width={500}
  height={300}
/>
```

## Adding New Media

1. **Videos**: Place in `/public/videos/` folder
2. **Images**: Place in appropriate subfolder under `/public/images/`
3. **Update paths**: Update references in:
   - `data/products.ts` for product images
   - `data/industries.ts` for industry images
   - Page components for hero images
   - Gallery/Certificate pages for their respective images

## Best Practices

1. **Image Optimization**:
   - Use WebP format when possible for better compression
   - Optimize images before adding (use tools like ImageOptim, TinyPNG)
   - Keep file sizes reasonable (< 500KB for most images)

2. **Video Optimization**:
   - Use MP4 format (H.264 codec)
   - Keep hero videos under 10MB if possible
   - Consider using WebM format as fallback
   - Videos should be muted and loop for hero sections

3. **Naming Conventions**:
   - Use lowercase with hyphens: `product-name.jpg`
   - Be descriptive: `steel-pipe-grade-a.jpg` not `img1.jpg`
   - Keep consistent naming patterns

4. **Organization**:
   - Group related images in subfolders
   - Use clear, descriptive folder names
   - Keep the structure flat (avoid deep nesting)

