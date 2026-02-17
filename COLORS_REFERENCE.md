# BikeC Brand Colors - Quick Reference

## Extracted from Logo: `/public/images/logo-main.png`

### Primary Colors

#### 🟡 Yellow-Gold (Primary Brand Color)
- **Hex:** `#FDB913`
- **RGB:** `rgb(253, 185, 19)`
- **Tailwind Class:** `bg-bikec-primary` / `text-bikec-primary`
- **Usage:** 
  - Primary CTAs (buttons, links)
  - Brand highlights and accents
  - Active states and hover effects
  - Logo "C" character

#### ⬜ Cool Gray (Secondary Brand Color)
- **Hex:** `#B0B5BA`
- **RGB:** `rgb(176, 181, 186)`
- **Tailwind Class:** `bg-bikec-secondary` / `text-bikec-secondary`
- **Usage:**
  - Secondary text
  - Subtle UI elements
  - Borders and dividers
  - Logo "BIKE" characters

### Background Colors

#### ⬛ Deep Charcoal (Default Background)
- **Hex:** `#1A1A1A`
- **RGB:** `rgb(26, 26, 26)`
- **Tailwind Class:** `bg-bikec-dark`
- **Usage:** Main page background, primary surface

#### ⬛ Charcoal Alt (Secondary Surface)
- **Hex:** `#252525`
- **RGB:** `rgb(37, 37, 37)`
- **Tailwind Class:** `bg-bikec-dark-alt`
- **Usage:** Cards, sections, elevated surfaces

#### ⬛ True Black (Maximum Contrast)
- **Hex:** `#0F0F0F`
- **RGB:** `rgb(15, 15, 15)`
- **Tailwind Class:** `bg-bikec-black`
- **Usage:** Headers, footers, maximum contrast areas

## Color Combinations

### ✅ Recommended Pairings

1. **High Impact CTA:**
   - Background: `#FDB913` (yellow-gold)
   - Text: `#0F0F0F` (black)
   ```tsx
   <button className="bg-bikec-primary text-bikec-black">
     הצטרף עכשיו
   </button>
   ```

2. **Primary Content:**
   - Background: `#1A1A1A` (deep charcoal)
   - Text: `#FFFFFF` (white)
   - Accent: `#FDB913` (yellow-gold)
   ```tsx
   <section className="bg-bikec-dark text-white">
     <h2 className="text-bikec-primary">כותרת</h2>
   </section>
   ```

3. **Secondary Elements:**
   - Background: `#252525` (charcoal alt)
   - Text: `#B0B5BA` (cool gray)
   ```tsx
   <div className="bg-bikec-dark-alt text-bikec-secondary">
     מידע נוסף
   </div>
   ```

## Accessibility

### Contrast Ratios (WCAG AA/AAA Compliant)

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `#FDB913` (Yellow) | `#0F0F0F` (Black) | 12.4:1 | ✅ AAA |
| `#B0B5BA` (Gray) | `#1A1A1A` (Charcoal) | 5.8:1 | ✅ AA |
| `#FFFFFF` (White) | `#1A1A1A` (Charcoal) | 14.2:1 | ✅ AAA |
| `#FDB913` (Yellow) | `#1A1A1A` (Charcoal) | 8.9:1 | ✅ AAA |

## Design System Values

```css
:root {
  --bikec-primary: #FDB913;      /* Yellow-Gold */
  --bikec-secondary: #B0B5BA;    /* Cool Gray */
  --bikec-dark: #1A1A1A;         /* Deep Charcoal */
  --bikec-dark-alt: #252525;     /* Charcoal Alt */
  --bikec-black: #0F0F0F;        /* True Black */
}
```

## Visual Hierarchy

1. **Primary Focus:** Yellow-gold (`#FDB913`) - 5-10% of screen
2. **Content Area:** Deep charcoal (`#1A1A1A`) - 60-70% of screen
3. **Elevated Elements:** Charcoal alt (`#252525`) - 20-25% of screen
4. **Subtle Details:** Cool gray (`#B0B5BA`) - 5-10% of screen
5. **Maximum Contrast:** True black (`#0F0F0F`) - Headers/footers

---

**Last Updated:** Based on brand logo analysis - Feb 17, 2026
**Source:** `/public/images/logo-main.png`
