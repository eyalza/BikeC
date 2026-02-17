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
- **Hero Section:** High-impact visual of BikeC's riding experience.
- **Tours & Events:** Dynamic calendar for upcoming cycling trips.
- **Community:** Section dedicated to "BikeC Riding Groups".
- **Gear Shop:** Interactive catalog (Next.js commerce ready).