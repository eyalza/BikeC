# BikeC - Bicycle Tours & Gear Platform 🚴

A professional Next.js platform for BikeC brand, featuring bicycle tours, riding groups, and professional gear sales. Built with Hebrew RTL support and a custom rugged design system.

## 🎨 Brand Colors (Extracted from Logo)

| Color | Hex | Usage |
|-------|-----|-------|
| **Yellow-Gold** | `#FDB913` | Primary CTAs, brand accents |
| **Cool Gray** | `#B0B5BA` | Secondary text, UI elements |
| **Deep Charcoal** | `#1A1A1A` | Main background |
| **Charcoal Alt** | `#252525` | Cards, sections |
| **True Black** | `#0F0F0F` | Maximum contrast areas |

See [COLORS_REFERENCE.md](./COLORS_REFERENCE.md) for detailed color documentation.

## 🚀 Quick Start

### Prerequisites
Before you begin, ensure you have Node.js installed:
- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation:
```bash
node --version
npm --version
```

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
/Users/eyalzarfati/Alon/
├── app/
│   └── globals.css          # BikeC theme styles + RTL config
├── components/
│   └── BikeC_Example.tsx    # Example component using BikeC theme
├── public/
│   └── images/
│       ├── logo-main.png   # Main brand logo (source of colors)
│       └── logo-badge.png  # Badge variant
├── tailwind.config.js       # Custom BikeC theme configuration
├── postcss.config.js        # PostCSS setup
├── package.json             # Dependencies
├── PRD.md                   # Product Requirements Document
├── SETUP.md                 # Setup guide and usage examples
├── COLORS_REFERENCE.md      # Detailed color documentation
└── README.md                # This file
```

## 🎯 Key Features

- ✅ **Custom BikeC Theme** - Extracted colors from brand logo
- ✅ **Hebrew RTL Support** - Full right-to-left layout support via `tailwindcss-rtl`
- ✅ **Rugged Design** - High-contrast, professional aesthetic
- ✅ **Next.js 14** - App Router architecture
- ✅ **Tailwind CSS** - Utility-first styling with custom theme
- ✅ **Accessibility** - WCAG AA/AAA compliant color contrasts

## 🎨 Using the BikeC Theme

### Tailwind Classes

```tsx
// Primary Yellow-Gold Button
<button className="bg-bikec-primary text-bikec-black">
  הצטרף עכשיו
</button>

// Card with Dark Background
<div className="card-bikec">
  <h3 className="text-white">כותרת</h3>
  <p className="text-bikec-secondary">תוכן</p>
</div>

// Section with Charcoal Background
<section className="section-bikec bg-bikec-dark">
  {/* Content */}
</section>
```

### Pre-built Components

```tsx
.btn-primary        // Yellow-gold CTA button
.btn-secondary      // Gray bordered button
.card-bikec         // Dark card with subtle border
.section-bikec      // Standard section padding
.border-accent      // Yellow-gold left border (right in RTL)
.text-gradient-bikec // Yellow-to-white text gradient
```

See [BikeC_Example.tsx](./components/BikeC_Example.tsx) for a complete example.

## 🌍 RTL Support

The project is configured for Hebrew right-to-left by default:

```tsx
// In your layout
<html lang="he" dir="rtl">
  <body>
    {/* All content flows RTL automatically */}
  </body>
</html>
```

### RTL Best Practices

- Use `ps-*` (padding-start) instead of `pr-*` (padding-right)
- Use `text-start` instead of `text-left`
- Use `flex-row-reverse` for RTL flex layouts
- Borders automatically flip (e.g., `border-s-4` becomes right border in RTL)

## 📚 Documentation

- **[PRD.md](./PRD.md)** - Product Requirements & Design System
- **[SETUP.md](./SETUP.md)** - Installation & Usage Guide
- **[COLORS_REFERENCE.md](./COLORS_REFERENCE.md)** - Complete Color Documentation

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4+ with custom theme
- **RTL Support:** tailwindcss-rtl
- **Typography:** Heebo (Hebrew) / Inter (Latin)
- **Language:** TypeScript 5

## 🎨 Design Philosophy

1. **High Contrast** - Yellow-gold (#FDB913) pops against deep charcoal (#1A1A1A)
2. **Rugged Aesthetic** - Raw, professional, adventure-ready
3. **Minimalist** - Clean layouts with strategic color usage
4. **Accessible** - WCAG compliant contrast ratios
5. **RTL-First** - Built for Hebrew from the ground up

## 📝 Next Steps

1. ✅ Colors extracted from logo
2. ✅ Tailwind config with BikeC theme
3. ✅ Hebrew RTL support configured
4. ✅ Global styles with brand colors
5. ✅ Example components created
6. ⏳ Build Hero Section
7. ⏳ Create Tours & Events module
8. ⏳ Develop Community/Groups section
9. ⏳ Implement Gear Shop catalog

## 📄 License

Private - BikeC Brand

---

**Built with** ❤️ **for the BikeC community**
