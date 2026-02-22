# Tours Calendar Feature - Technical Documentation

## Overview
A comprehensive Tours Calendar section displaying upcoming BikeC bicycle tours with full Hebrew RTL support and the BikeC "Rugged" design aesthetic.

## Files Created

### 1. `/data/tours.json`
**Purpose:** Centralized data structure for all tours

**Structure:**
```typescript
interface Tour {
  id: string;                    // Unique identifier (e.g., "tour-001")
  title: string;                 // Hebrew tour name
  titleEn: string;               // English tour name (for reference)
  date: string;                  // ISO date format (YYYY-MM-DD)
  time: string;                  // Start time (HH:MM)
  difficulty: string;            // Hebrew difficulty (קלה/בינונית/קשה)
  difficultyLevel: 'easy' | 'medium' | 'hard';
  location: string;              // Hebrew location
  locationEn: string;            // English location (for reference)
  duration: string;              // Tour duration in Hebrew
  distance: string;              // Distance in Hebrew (e.g., "50 ק״מ")
  elevation: string;             // Elevation gain (e.g., "+450 מ׳")
  spotsAvailable: number;        // Remaining spots
  maxParticipants: number;       // Maximum capacity
  price: number;                 // Price in ILS (₪)
  description: string;           // Short Hebrew description
  highlights: string[];          // Array of key highlights
}
```

**Sample Tours Included:**
1. **טיול הרי ירושלים** - Jerusalem Hills (Hard, ₪180)
2. **סובב הכנרת** - Sea of Galilee Loop (Medium, ₪150)
3. **נחל עמוד וסנפיר** - Amud & Sanfir Stream (Hard, ₪200)
4. **פארק הירקון** - Yarkon Park (Easy, ₪100)
5. **מכתש רמון** - Ramon Crater (Hard, ₪250)
6. **עמק יזרעאל** - Jezreel Valley (Medium, ₪130)

### 2. `/components/ToursCalendar.tsx`
**Purpose:** React component that displays tours in a responsive grid

**Key Features:**

#### Visual Design (Rugged Aesthetic)
- **Cards:** Dark charcoal background (`bg-bikec-dark-alt`) with subtle borders
- **Hover Effects:** Yellow-gold border highlight on card hover
- **Color Coding:** Difficulty badges with semantic colors:
  - Easy: Green (`bg-green-500/20`)
  - Medium: Yellow (`bg-yellow-500/20`)
  - Hard: Red (`bg-red-500/20`)
- **Typography:** Bold headers with Heebo font, high contrast text

#### Layout (RTL-First)
- **Grid:** Responsive 1/2/3 column layout
- **Spacing:** Proper RTL margins and padding using `ps-`/`pe-` instead of `pl-`/`pr-`
- **Alignment:** All text naturally flows right-to-left
- **Icons:** Positioned correctly for RTL (location pin, checkmarks)

#### Information Hierarchy
1. **Header:** Tour title + location
2. **Urgency Badge:** "X מקומות נותרו" (when ≤5 spots)
3. **Date/Time:** Formatted Hebrew date with weekday
4. **Details Grid:** 2×2 grid showing:
   - Difficulty level (color-coded badge)
   - Duration
   - Distance
   - Elevation gain
5. **Description:** Short tour overview
6. **Highlights:** Top 2 features with checkmarks
7. **Footer:** Price (large yellow-gold) + Registration CTA

#### Interactive Elements
- **Hover States:** Card border transitions to yellow-gold
- **CTA Buttons:** "הרשמה לטיול" (Register) on each card
- **View All Button:** Bottom section CTA

#### Date Formatting
- Uses `Intl.DateTimeFormat` with Hebrew locale (`he-IL`)
- Shows: `יום ראשון, 15 במרץ 2026` format
- Properly handles RTL text direction

## Integration

The Tours Calendar is integrated into the main page:

```tsx
// components/BikeC_Example.tsx
import ToursCalendar from '@/components/ToursCalendar';

// Rendered between Hero and Features sections
<ToursCalendar />
```

## Styling System

### BikeC Theme Usage
```tsx
// Primary accent (Yellow-gold)
text-bikec-primary      // #FDB913 - CTAs, prices, highlights

// Secondary (Cool gray)
text-bikec-secondary    // #B0B5BA - Labels, descriptions

// Backgrounds
bg-bikec-dark          // #1A1A1A - Main section background
bg-bikec-dark-alt      // #252525 - Card backgrounds
bg-bikec-black         // #0F0F0F - (unused here, for contrast)

// Borders
border-bikec-secondary/20    // Subtle card borders
border-bikec-primary/50      // Hover state borders
```

### Custom Component Classes
```css
.card-bikec              // Pre-styled card component
.btn-primary             // Yellow-gold CTA button
.btn-secondary           // Gray outlined button
.section-bikec           // Standardized section padding
```

## Responsive Behavior

```
Mobile (< 768px):   1 column  - Full width cards
Tablet (768-1024px): 2 columns - Balanced layout
Desktop (> 1024px):  3 columns - Optimal density
```

## Accessibility

1. **Contrast Ratios:** All text meets WCAG AA standards
2. **Semantic HTML:** Proper heading hierarchy (h2, h3)
3. **Keyboard Navigation:** Buttons are fully keyboard accessible
4. **Screen Readers:** Descriptive labels and alt texts
5. **Color Coding:** Difficulty levels have both color AND text labels

## Future Enhancements

### Phase 2 (Recommended)
- [ ] Filter tours by difficulty level
- [ ] Sort by date, price, or distance
- [ ] Search functionality
- [ ] "Add to Calendar" button (.ics export)
- [ ] Tour detail modal with full information
- [ ] Image gallery for each tour
- [ ] Weather integration for tour dates
- [ ] Real-time spots availability

### Phase 3 (Advanced)
- [ ] Online registration/payment flow
- [ ] User accounts for registered riders
- [ ] Email notifications for upcoming tours
- [ ] Tour reviews and ratings
- [ ] Waitlist functionality when full
- [ ] Integration with mapping services (route preview)

## Data Management

### Adding New Tours
Edit `/data/tours.json` and add a new tour object:

```json
{
  "id": "tour-007",
  "title": "שם הטיול בעברית",
  "titleEn": "English Name",
  "date": "2026-04-15",
  "time": "07:00",
  "difficulty": "בינונית",
  "difficultyLevel": "medium",
  ...
}
```

### Updating Tour Information
- **Spots Available:** Decrease as registrations come in
- **Dates:** Use ISO format (YYYY-MM-DD) for proper sorting
- **Prices:** Integer values in ILS (no decimals)

## Performance

- **Static JSON:** Loaded once at build time
- **No API Calls:** Fast initial render
- **Optimized Grid:** CSS Grid for efficient layout
- **Minimal JavaScript:** TypeScript interfaces, no runtime overhead

## BikeC Brand Alignment

✅ **Rugged Aesthetic:** Dark backgrounds, bold typography, high contrast  
✅ **Professional:** Clean layout, clear information hierarchy  
✅ **Hebrew RTL:** Native right-to-left support throughout  
✅ **Brand Colors:** Yellow-gold and cool gray used strategically  
✅ **Adventure-Ready:** Difficulty badges, elevation data, urgency messaging

---

**Last Updated:** Feb 17, 2026  
**Component Version:** 1.0.0  
**Dependencies:** Next.js 16+, React 18+, Tailwind CSS 3.4+
