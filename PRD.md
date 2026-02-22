# PRD: BikeC - Bicycle Tours & Gear Platform

## Project Overview
A professional platform for Alon's brand, "BikeC". The site serves as the digital hub for riding groups, Israeli cycling tours, and professional gear sales.

## Goals
1. Establish a premium online presence for the BikeC brand.
2. Streamline the process of joining riding groups and booking tours.
3. Build a scalable product catalog for professional cycling gear.

## Technical Requirements
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS with custom BikeC theme.
- **Language:** Hebrew (Full RTL support via tailwindcss-rtl).
- **Design Vibe:** Rugged, professional, high-contrast.

## Brand & Design System

### Color Palette (BikeC Theme)
Extracted from official brand logo (`/public/images/logo-main.png`):

- **Primary (Yellow-Gold):** `#FDB913`
  - Use for: CTAs, highlights, active states, brand accents
  - Represents: Energy, adventure, premium quality

- **Secondary (Cool Gray):** `#B0B5BA`
  - Use for: Secondary text, borders, subtle UI elements
  - Represents: Professional, technical, reliability

- **Background Colors:**
  - **Deep Charcoal:** `#1A1A1A` (default background)
  - **Charcoal Alt:** `#252525` (sections, cards)
  - **True Black:** `#0F0F0F` (maximum contrast areas)

### Typography
- **Primary Font:** Inter (Latin) / Heebo (Hebrew)
- **RTL Support:** Configured via `tailwindcss-rtl` plugin
- **Direction:** Hebrew text flows right-to-left

### Design Principles
1. **High Contrast:** Yellow-gold pops against deep charcoal/black
2. **Rugged Aesthetic:** Raw, professional, adventure-ready
3. **Accessibility:** Strong color contrast ratios for readability
4. **RTL-First:** All layouts support Hebrew right-to-left flow

## Key Modules
- **Hero Section:** High-impact visual of BikeC's riding experience. ✅
- **Tours & Events:** Dynamic calendar for upcoming cycling trips. ✅
- **Community:** Section dedicated to "BikeC Riding Groups".
- **Gear Shop:** Interactive catalog (Next.js commerce ready).

## Implementation Status

### ✅ Completed Features

#### 1. Tours Calendar (`/components/ToursCalendar.tsx`)
**Status:** Production-ready  
**Data Source:** `/data/tours.json`

**Features:**
- Responsive 3-column grid (mobile: 1, tablet: 2, desktop: 3)
- 6 sample tours with complete data (Jerusalem, Galilee, Ramon Crater, etc.)
- Color-coded difficulty badges (Easy/Medium/Hard)
- Hebrew date formatting with weekday display
- Urgency badges for low availability (≤5 spots)
- Tour details: duration, distance, elevation, price
- Hover effects with yellow-gold border transitions
- "Register" CTA on each card
- "View All Tours" bottom CTA

**Tour Data Structure:**
```
- ID, Title (Hebrew & English)
- Date/Time with Hebrew formatting
- Difficulty level (3 tiers)
- Location (Hebrew & English)
- Distance, Duration, Elevation
- Spots available / Max participants
- Price (ILS)
- Description + Highlights (3 per tour)
```

**Design Implementation:**
- Rugged aesthetic with dark charcoal cards
- High-contrast typography (white on dark)
- Strategic use of yellow-gold primary color
- Cool gray for secondary information
- Full Hebrew RTL support with proper alignment

### 🔄 In Progress
- None currently

### 📋 Planned Features
- Community/Groups section
- Gear shop catalog
- User authentication
- Tour registration flow