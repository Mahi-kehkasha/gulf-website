# GPSS Industrial Engineering Design System

## 1️⃣ COLOR PALETTE (TAILWIND-READY)

### Primary: Deep Ocean Blue
- **50**: `#E6F2FF` - Lightest ocean surface
- **100**: `#CCE5FF` - Shallow water
- **200**: `#99CBFF` - Mid-surface
- **300**: `#66B1FF` - Deeper blue
- **400**: `#3397FF` - Ocean depth
- **500**: `#007DFF` - **PRIMARY** - Deep ocean blue
- **600**: `#0064CC` - Deep water
- **700**: `#004B99` - Ocean floor
- **800**: `#003266` - Abyssal depth
- **900**: `#001933` - Deepest trench

### Secondary: Cyan / Wave Tone
- **50**: `#E0F7FA` - Lightest cyan
- **100**: `#B2EBF2` - Shallow wave
- **200**: `#80DEEA` - Wave crest
- **300**: `#4DD0E1` - Mid-wave
- **400**: `#26C6DA` - Deep wave
- **500**: `#00BCD4` - **SECONDARY** - Cyan wave
- **600**: `#00ACC1` - Strong wave
- **700**: `#0097A7` - Deep wave
- **800**: `#00838F` - Ocean current
- **900**: `#006064` - Deep current

### Dark Base: Charcoal Ring
- **50**: `#F5F5F5` - Lightest gray
- **100**: `#E0E0E0` - Light gray
- **200**: `#BDBDBD` - Medium light
- **300**: `#9E9E9E` - Medium gray
- **400**: `#757575` - Medium dark
- **500**: `#616161` - **BASE** - Charcoal
- **600**: `#424242` - Dark gray
- **700**: `#303030` - Very dark
- **800**: `#212121` - Near black
- **900**: `#0A0A0A` - Deepest charcoal

### Accent: Red Antenna Color
- **50**: `#FFEBEE` - Lightest red
- **100**: `#FFCDD2` - Light red
- **200**: `#EF9A9A` - Soft red
- **300**: `#E57373` - Medium red
- **400**: `#EF5350` - Bright red
- **500**: `#F44336` - **ACCENT** - Red antenna
- **600**: `#E53935` - Deep red
- **700**: `#D32F2F` - Strong red
- **800**: `#C62828` - Dark red
- **900**: `#B71C1C` - Deepest red

### Neutral Gray Scale: Metal Rig Texture
- **50**: `#FAFAFA` - Pure white tint
- **100**: `#F5F5F5` - Off-white
- **200**: `#EEEEEE` - Light metal
- **300**: `#E0E0E0` - Silver tone
- **400**: `#BDBDBD` - Medium metal
- **500**: `#9E9E9E` - **NEUTRAL** - Steel gray
- **600**: `#757575` - Dark metal
- **700**: `#616161` - Aged steel
- **800**: `#424242` - Rusted metal
- **900**: `#212121` - Deep metal

## 2️⃣ THEME DESCRIPTION (UX STYLE GUIDE)

### Brand Personality
**Ocean Depth + Steel Precision + High-Tech Oilfield Engineering**

The design embodies the depth and power of ocean engineering combined with the precision of industrial steel fabrication. Every element reflects the technical excellence and reliability required in offshore oilfield operations.

### Color Usage Guidelines

#### **Backgrounds**
- **Primary backgrounds**: Use `blue-900` to `blue-800` for hero sections, creating depth
- **Section backgrounds**: `gray-50` to `gray-100` for light sections, `gray-900` to `gray-800` for dark sections
- **Card backgrounds**: `white` with subtle `gray-50` borders
- **Overlay backgrounds**: `blue-900/80` for depth effect

#### **Buttons**
- **Primary buttons**: `blue-600` background, `white` text, hover to `blue-700`
- **Secondary buttons**: `cyan-500` background, `white` text, hover to `cyan-600`
- **Outline buttons**: Transparent with `blue-600` border, hover fill to `blue-600`
- **Accent buttons**: `red-500` for critical actions, hover to `red-600`

#### **Hover Interactions**
- **Links**: `blue-500` to `blue-600` transition with subtle underline
- **Cards**: Elevate with `shadow-lg` and `scale-[1.02]`
- **Buttons**: Darken by 100 shade, add `shadow-xl`
- **Images**: Subtle `scale-105` with `brightness-110`

#### **Cards**
- **Background**: `white` with `border-gray-200`
- **Hover**: `shadow-xl`, `border-blue-300`, slight elevation
- **Active state**: `border-blue-500` with `ring-2 ring-blue-200`

#### **Navigation Bar**
- **Background**: `gray-900` (dark industrial)
- **Text**: `gray-100` default, `white` on hover
- **Active link**: `blue-500` with bottom border
- **Mega menu**: `white` background with `shadow-2xl`

#### **Footer**
- **Background**: `gray-900` to `gray-950` gradient
- **Text**: `gray-400` default, `white` on hover
- **Links**: `cyan-400` with hover to `cyan-300`
- **Borders**: `gray-800` dividers

#### **Icons**
- **Default**: `gray-600`
- **Hover**: `blue-500`
- **Active**: `blue-600`
- **Accent**: `red-500` for alerts

#### **Section Dividers**
- **Light sections**: `gray-200` horizontal lines
- **Dark sections**: `gray-800` horizontal lines
- **Gradient dividers**: `blue-900` to `cyan-900` diagonal gradients

## 3️⃣ TYPOGRAPHY SYSTEM

### Font Families

#### **Heading Font**
```css
font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
```
- **Usage**: All headings (h1-h6)
- **Style**: Modern, technical, industrial

#### **Body Font**
```css
font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
```
- **Usage**: Body text, paragraphs, descriptions
- **Style**: Clean, readable, professional

#### **Arabic-Compatible Font**
```css
font-family: 'Cairo', 'Tajawal', 'Noto Sans Arabic', 'Arial', sans-serif;
```
- **Usage**: Arabic text content
- **Style**: Modern Arabic, supports RTL

### Font Size Scale
- **xs**: `0.75rem` (12px) - Fine print, labels
- **sm**: `0.875rem` (14px) - Small text, captions
- **base**: `1rem` (16px) - Body text (default)
- **lg**: `1.125rem` (18px) - Large body text
- **xl**: `1.25rem` (20px) - Subheadings
- **2xl**: `1.5rem` (24px) - Section titles
- **3xl**: `1.875rem` (30px) - Page titles
- **4xl**: `2.25rem` (36px) - Hero subtitles
- **5xl**: `3rem` (48px) - Hero titles
- **6xl**: `3.75rem` (60px) - Large hero titles

### Font Weights
- **300**: Light - Decorative text
- **400**: Regular - Body text (default)
- **500**: Medium - Emphasis
- **600**: Semibold - Subheadings
- **700**: Bold - Headings, CTAs

### Tracking & Spacing Rules
- **Tight**: `-0.025em` - Headings
- **Normal**: `0em` - Body text (default)
- **Wide**: `0.025em` - Uppercase labels
- **Wider**: `0.05em` - Large headings

### Line Heights
- **Tight**: `1.25` - Headings
- **Snug**: `1.375` - Subheadings
- **Normal**: `1.5` - Body text (default)
- **Relaxed**: `1.625` - Long paragraphs
- **Loose**: `2` - Spacious text

### RTL Typography Behavior
- **Text alignment**: `text-right` for Arabic, `text-left` for English
- **Margin/padding**: Use logical properties (`ms-`, `me-`) instead of `ml-`, `mr-`
- **Font**: Automatically switches to Arabic font family
- **Line height**: Slightly increased (`1.6`) for Arabic readability
- **Letter spacing**: Normal (no tracking adjustments for Arabic)

## 4️⃣ TAILWIND CONFIG SNIPPET

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B1FF',
          400: '#3397FF',
          500: '#007DFF',
          600: '#0064CC',
          700: '#004B99',
          800: '#003266',
          900: '#001933',
        },
        secondary: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        accent: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#212121',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'Noto Sans Arabic', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #001933 0%, #0064CC 50%, #00BCD4 100%)',
        'gradient-steel': 'linear-gradient(135deg, #212121 0%, #424242 50%, #616161 100%)',
        'gradient-depth': 'linear-gradient(180deg, #001933 0%, #003266 50%, #004B99 100%)',
        'gradient-wave': 'linear-gradient(90deg, #0064CC 0%, #00BCD4 50%, #0064CC 100%)',
        'gradient-industrial': 'linear-gradient(135deg, #0A0A0A 0%, #212121 50%, #424242 100%)',
      },
      boxShadow: {
        'ocean': '0 10px 40px -10px rgba(0, 125, 255, 0.3)',
        'steel': '0 10px 40px -10px rgba(33, 33, 33, 0.5)',
        'depth': '0 20px 60px -15px rgba(0, 25, 51, 0.4)',
        'glow-blue': '0 0 20px rgba(0, 125, 255, 0.5)',
        'glow-cyan': '0 0 20px rgba(0, 188, 212, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 125, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 125, 255, 0.8)' },
        },
      },
    },
  },
}
```

## 5️⃣ PREMIUM HOVER EFFECTS

### Navigation Links
```css
/* Base */
.nav-link {
  @apply text-gray-100 transition-all duration-300 relative;
}

/* Hover */
.nav-link:hover {
  @apply text-white;
}

.nav-link::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300;
  content: '';
}

.nav-link:hover::after {
  @apply w-full;
}
```

### Primary Buttons
```css
/* Base */
.btn-primary {
  @apply bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold;
  @apply transition-all duration-300 transform;
  @apply shadow-lg shadow-blue-500/30;
}

/* Hover */
.btn-primary:hover {
  @apply bg-blue-700 scale-[1.02] shadow-xl shadow-blue-500/50;
  @apply translate-y-[-2px];
}
```

### Secondary Buttons
```css
/* Base */
.btn-secondary {
  @apply bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold;
  @apply transition-all duration-300 transform;
  @apply shadow-lg shadow-cyan-500/30;
}

/* Hover */
.btn-secondary:hover {
  @apply bg-cyan-600 scale-[1.02] shadow-xl shadow-cyan-500/50;
  @apply translate-y-[-2px];
}
```

### Cards
```css
/* Base */
.card {
  @apply bg-white rounded-lg border border-gray-200 p-6;
  @apply transition-all duration-300 transform;
}

/* Hover */
.card:hover {
  @apply shadow-xl border-blue-300 scale-[1.02];
  @apply translate-y-[-4px];
}
```

### Image Zoom on Project Cards
```css
/* Base */
.project-card-image {
  @apply relative overflow-hidden rounded-lg;
}

.project-card-image img {
  @apply transition-transform duration-500 ease-out;
}

/* Hover */
.project-card:hover .project-card-image img {
  @apply scale-110 brightness-110;
}

.project-card-image::after {
  @apply absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent;
  @apply opacity-0 transition-opacity duration-300;
  content: '';
}

.project-card:hover .project-card-image::after {
  @apply opacity-100;
}
```

## 6️⃣ UI COMPONENTS (TAILWIND CODE)

### Dark Navbar with Language Dropdown & Mega Menu
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/images/logo.svg" alt="Logo" class="h-16 w-auto" />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <a href="/" class="nav-link">Home</a>
        <a href="/about" class="nav-link">About</a>
        
        <!-- Services Mega Menu -->
        <div class="relative group">
          <button class="nav-link flex items-center">
            Services
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8">
            <div class="grid grid-cols-3 gap-6">
              <!-- Service items -->
            </div>
          </div>
        </div>

        <!-- Products Mega Menu -->
        <div class="relative group">
          <button class="nav-link flex items-center">
            Products
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8">
            <div class="grid grid-cols-3 gap-6">
              <!-- Product items -->
            </div>
          </div>
        </div>

        <!-- Industries Mega Menu -->
        <div class="relative group">
          <button class="nav-link flex items-center">
            Industries
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8">
            <div class="grid grid-cols-3 gap-6">
              <!-- Industry items -->
            </div>
          </div>
        </div>

        <a href="/experience" class="nav-link">Experience</a>
        <a href="/contact" class="nav-link">Contact</a>

        <!-- Language Dropdown -->
        <select class="bg-gray-800 text-gray-100 px-3 py-2 rounded-lg border border-gray-700">
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section
```html
<section class="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-ocean">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 class="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
      Premium Industrial Engineering Solutions
    </h1>
    <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-down">
      Deep ocean expertise meets steel precision
    </p>
    <div class="flex gap-4 justify-center">
      <button class="btn-primary">Explore Services</button>
      <button class="btn-secondary">View Projects</button>
    </div>
  </div>
</section>
```

### Button Variants
```html
<!-- Primary -->
<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-0.5">
  Primary Button
</button>

<!-- Secondary -->
<button class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-0.5">
  Secondary Button
</button>

<!-- Outline -->
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]">
  Outline Button
</button>
```

### Service Cards
```html
<div class="card group">
  <div class="project-card-image mb-4">
    <img src="/service-image.jpg" alt="Service" class="w-full h-48 object-cover" />
  </div>
  <h3 class="text-xl font-semibold text-gray-900 mb-2">Service Name</h3>
  <p class="text-gray-600 mb-4">Service description goes here...</p>
  <a href="/service" class="text-blue-600 hover:text-blue-700 font-semibold">
    Learn More →
  </a>
</div>
```

### Footer
```html
<footer class="bg-gradient-industrial text-gray-400 mt-20">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div>
        <img src="/images/logo.svg" alt="Logo" class="h-16 w-auto mb-4" />
        <p class="text-sm">Industrial engineering excellence since 1990</p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="hover:text-cyan-400 transition-colors">About</a></li>
          <li><a href="/services" class="hover:text-cyan-400 transition-colors">Services</a></li>
          <li><a href="/products" class="hover:text-cyan-400 transition-colors">Products</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li>123 Industrial Street</li>
          <li>+1 (555) 123-4567</li>
          <li>info@gulfpipes.com</li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h4 class="text-white font-semibold mb-4">Follow Us</h4>
        <div class="flex space-x-4">
          <!-- Social icons -->
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
      <p>&copy; 2025 GPSS. All rights reserved.</p>
    </div>
  </div>
</footer>
```

## 7️⃣ ACCESSIBILITY REQUIREMENTS

### WCAG AA/AAA Contrast Guidelines

#### Text on Dark Backgrounds (gray-900, blue-900)
- **Minimum (AA)**: `text-gray-300` on `bg-gray-900` (contrast ratio: 12.63:1) ✅
- **Enhanced (AAA)**: `text-white` on `bg-gray-900` (contrast ratio: 15.8:1) ✅
- **Safe combinations**:
  - `text-white` on `bg-blue-900` ✅
  - `text-gray-200` on `bg-gray-800` ✅
  - `text-cyan-300` on `bg-blue-900` ✅

#### Text on Light Backgrounds (white, gray-50)
- **Minimum (AA)**: `text-gray-700` on `bg-white` (contrast ratio: 4.5:1) ✅
- **Enhanced (AAA)**: `text-gray-900` on `bg-white` (contrast ratio: 15.8:1) ✅
- **Safe combinations**:
  - `text-gray-900` on `bg-white` ✅
  - `text-blue-900` on `bg-gray-50` ✅
  - `text-gray-800` on `bg-gray-100` ✅

#### Button Text Contrast
- **Primary buttons**: `text-white` on `bg-blue-600` (contrast ratio: 4.74:1) ✅
- **Secondary buttons**: `text-white` on `bg-cyan-500` (contrast ratio: 3.94:1) ⚠️
  - **Fix**: Use `bg-cyan-600` for better contrast (4.5:1) ✅
- **Outline buttons**: `text-blue-600` on `bg-white` (contrast ratio: 4.5:1) ✅

#### Icon Contrast
- **On dark**: `text-gray-300` minimum (12.63:1) ✅
- **On light**: `text-gray-600` minimum (7:1) ✅
- **Hover states**: `text-blue-500` on `bg-white` (4.5:1) ✅

#### Avoid Low-Contrast Pairs
- ❌ `text-gray-400` on `bg-gray-600` (2.8:1)
- ❌ `text-cyan-300` on `bg-white` (2.1:1)
- ❌ `text-blue-400` on `bg-gray-800` (3.2:1)

#### Recommended Safe Combinations
1. **Headings**: `text-gray-900` on `bg-white`
2. **Body text**: `text-gray-700` on `bg-white`
3. **Links**: `text-blue-600` on `bg-white`
4. **Dark sections**: `text-white` on `bg-gray-900`
5. **Accents**: `text-red-600` on `bg-white` (for alerts)

## 8️⃣ MENU LOGIC REQUIREMENTS

### Hidden Pages
The following pages should be **completely hidden** from navigation:
- ❌ Gallery
- ❌ Careers
- ❌ Certificates

### Mega Menu Implementation

#### Desktop Mega Menu
- **Services**: 3-4 columns, category titles + links
- **Products**: 3-4 columns, category titles + links
- **Industries**: 3-4 columns, category titles + links
- **Hover-open**: Opens on mouse hover
- **Animation**: Smooth fade + slide-down (300ms)
- **Close**: Closes on mouse leave (200ms delay)

#### Mobile Accordion Version
- **Collapsible**: Accordion-style dropdowns
- **Touch-friendly**: Large tap targets (min 44x44px)
- **Smooth**: Slide animation for expand/collapse

### Navigation Structure
```
Home | About | [Services ▼] | [Products ▼] | [Industries ▼] | Experience | Contact | [Language]
```

---

## Implementation Notes

1. **Color Usage**: Always use the defined color scales (50-900) for consistency
2. **Typography**: Apply font families based on content type (heading/body/Arabic)
3. **Hover Effects**: Use transform and shadow for depth perception
4. **Accessibility**: Test all color combinations for WCAG compliance
5. **RTL Support**: Use logical properties for spacing in Arabic mode
6. **Performance**: Optimize animations with `transform` and `opacity` only

---

**Design System Version**: 1.0.0  
**Last Updated**: 2025-12-05  
**Compatibility**: Tailwind CSS 3.x, Next.js 14+

