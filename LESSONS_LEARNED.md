# BikeC - Lessons Learned

A running log of technical gotchas, fixes, and decisions made during development.
Reference this file (alongside `@PRD.md`) before starting any new feature.

---

## #1 — TypeScript: JSON Imports Lose Literal Union Types

**Date:** February 2026  
**File:** `components/ToursCalendar.tsx`  
**Build Error:**
```
Type 'string' is not assignable to type '"easy" | "medium" | "hard"'.
```

### Root Cause
When TypeScript imports a JSON file (via `resolveJsonModule`), it infers all string values as the broad `string` type — not as their specific literal values. So even though `tours.json` contains `"difficultyLevel": "hard"`, TypeScript types it as `string`, which is incompatible with the union `'easy' | 'medium' | 'hard'` defined in the interface.

```typescript
// ❌ FAILS at build — TypeScript sees difficultyLevel as `string`, not the union
const tours: Tour[] = toursData.tours;

// ✅ CORRECT — double cast breaks the type mismatch safely
const tours = toursData.tours as unknown as Tour[];
```

### Why `as unknown as Tour[]` and not just `as Tour[]`?
A direct `as Tour[]` can still fail if TypeScript considers the types to have "insufficient overlap." The intermediate `as unknown` resets the type chain, letting the final `as Tour[]` assert cleanly. This is the standard TypeScript pattern for cross-type assertions.

### Prevention Going Forward
- Always use `as unknown as YourType[]` when casting imported JSON to interfaces with **union type fields**.
- Keep interface field names in sync with JSON field names exactly.
- Consider defining a `types/tours.ts` file and importing from there instead of co-locating the interface, so it can be shared and tested independently.

---

## #2 — RTL: Checkmarks and Inline Icons Position

**Date:** February 2026  
**File:** `components/ToursCalendar.tsx`  
**Issue:** Checkmark icons in highlight lists render on the wrong (left) side in Hebrew RTL.

### Root Cause
Using raw `flex` with the icon as the first child renders it on the left in LTR layout. In RTL, `flex` direction reverses visually, but only if `dir="rtl"` is applied up the tree — not always reliable for inline spans.

```tsx
// ❌ Fragile — icon position depends on inherited direction
<li className="flex items-start gap-2">
  <span>✓</span>
  <span>{text}</span>
</li>

// ✅ Correct — use logical margin (me- = margin-end, adapts to RTL)
<li className="flex items-start">
  <span className="me-2">✓</span>
  <span className="flex-1">{text}</span>
</li>
```

### Rule
Per `.cursorrules`: **always use logical CSS properties**:
- `me-` / `ms-` instead of `mr-` / `ml-`
- `ps-` / `pe-` instead of `pl-` / `pr-`
- `text-start` instead of `text-left` / `text-right`

---

## #3 — Module Resolution: `@/` Alias vs. Relative Imports

**Date:** February 2026  
**Files:** `components/BikeC_Example.tsx`  
**Error:**
```
Cannot find module '@/components/ToursCalendar' or its corresponding type declarations.
```

### Root Cause
The TypeScript language server in the IDE can lag when resolving `@/` path aliases for **newly created files** — even though `tsconfig.json` defines `"@/*": ["./*"]` correctly. Next.js resolves it fine at build time, but the IDE TS server can hold a stale cache.

### Fix
When two files are siblings in the same directory, prefer a **relative import**:

```typescript
// ❌ Brittle in IDE for new files
import ToursCalendar from '@/components/ToursCalendar';

// ✅ Always resolves immediately
import ToursCalendar from './ToursCalendar';
```

### Rule
- Use `@/` for cross-directory imports (e.g., importing from `components/` inside `app/`).
- Use `./` for same-directory sibling imports.

---

## #4 — Next.js: Use `npm run dev`, Not `npm start`

**Date:** February 2026  
**Error:**
```
Could not find a production build in the '.next' directory.
```

### Root Cause
`npm start` runs the **production** server (`next start`), which requires a prior `next build`. During development, always use `npm run dev`.

| Command | Purpose |
|---------|---------|
| `npm run dev` | ✅ Development — use this locally |
| `npm run build` | Build production bundle |
| `npm start` | Production server — requires build first |

---

## #5 — Cache: Clear `.next` After Major Version Upgrades

**Date:** February 2026  
**Error:** `ChunkLoadError` — failed to load stale chunk after upgrading Next.js 14 → 16.

### Fix
```bash
rm -rf .next
npm run dev
```

### Rule
Always delete `.next` after:
- Major or minor Next.js version upgrades
- Installing or removing Webpack/Turbopack plugins
- Unexplained ChunkLoadErrors in the browser
