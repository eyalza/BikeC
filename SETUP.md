# BikeC - Setup Guide

## Prerequisites

Before starting, make sure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** (included with Node.js)

Verify your installation:
```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show 9.0.0 or higher
```

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js, React, React-DOM
- Tailwind CSS, PostCSS, Autoprefixer
- tailwindcss-rtl (for Hebrew RTL support)
- TypeScript and type definitions

### 2. Install Hebrew Fonts
Add to your `app/layout.tsx` or `_app.tsx`:
```tsx
import { Heebo } from 'next/font/google'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700'],
})
```

### 3. Configure RTL
In your root layout, set the `dir` attribute:
```tsx
<html lang="he" dir="rtl" className={heebo.className}>
```

## Using BikeC Theme Colors

### Tailwind Classes
```tsx
// Primary Yellow-Gold
<button className="bg-bikec-primary text-bikec-dark">
  הצטרף לטיול
</button>

// Secondary Gray
<p className="text-bikec-secondary">
  פרטים נוספים
</p>

// Backgrounds
<section className="bg-bikec-dark">
  <div className="bg-bikec-dark-alt rounded-lg">
    // Content
  </div>
</section>
```

### Color Reference
- `bikec-primary` → #FDB913 (Yellow-Gold)
- `bikec-secondary` → #B0B5BA (Cool Gray)
- `bikec-dark` → #1A1A1A (Deep Charcoal)
- `bikec-dark-alt` → #252525 (Lighter Charcoal)
- `bikec-black` → #0F0F0F (True Black)

## RTL Best Practices

### Layout
```tsx
// Padding & Margins (automatically flip)
<div className="ps-4 pe-8">  // ps = padding-start (right in RTL)

// Text Alignment
<h1 className="text-start">  // Aligns right in RTL

// Flexbox Direction
<div className="flex flex-row-reverse">  // For RTL layouts
```

### Testing
Test your site in both LTR and RTL:
```tsx
// Force LTR for testing
<div dir="ltr">English content</div>

// Force RTL (default for Hebrew)
<div dir="rtl">תוכן עברי</div>
```

## Design Guidelines
1. Use `bikec-primary` (yellow-gold) sparingly for CTAs and key highlights
2. Default background should be `bikec-dark` (#1A1A1A)
3. Use `bikec-secondary` for subtle text and UI elements
4. Maintain high contrast for accessibility
5. All text should support Hebrew RTL by default
