# BikeC - Lessons Learned

A running log of technical gotchas, fixes, and decisions made during development.
Reference this file (alongside `@PRD.md`) before starting any new feature.

---

## #1 — Strict Type Casting: JSON Imports and Union Types

**Date:** February 2026  
**File:** `components/ToursCalendar.tsx`  
**Build Error (Vercel):**
```
Type 'string' is not assignable to type '"easy" | "medium" | "hard"'.
```

### Root Cause
When TypeScript imports a JSON file (via `resolveJsonModule`), it infers all string values as the broad `string` type — never as literal unions. So `"difficultyLevel": "hard"` in JSON becomes `string`, not `'hard'`.

### What Didn't Work
The `as unknown as Tour[]` double-cast fixed it locally but **still failed on Vercel's strict build**. Vercel runs a clean `next build` that can behave differently from the local dev server's type checking.

### The Correct Fix (3 parts)

**1. Use `string` in the interface — match what JSON actually gives you:**
```typescript
// ❌ BREAKS — JSON will never give you a literal union
interface Tour {
  difficultyLevel: 'easy' | 'medium' | 'hard';
}

// ✅ WORKS — matches JSON's actual inferred type
interface Tour {
  difficultyLevel: string;
}
```

**2. Define the union as a separate type with a type guard:**
```typescript
type DifficultyLevel = 'easy' | 'medium' | 'hard';

function isDifficultyLevel(value: string): value is DifficultyLevel {
  return value === 'easy' || value === 'medium' || value === 'hard';
}
```

**3. Use the type guard wherever you need narrowed behavior:**
```typescript
const DIFFICULTY_STYLES: Record<DifficultyLevel, string> = {
  easy: 'bg-green-500/20 text-green-400 border-green-500/50',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  hard: 'bg-red-500/20 text-red-400 border-red-500/50',
};

function getDifficultyStyle(level: string): string {
  return isDifficultyLevel(level) ? DIFFICULTY_STYLES[level] : DEFAULT_STYLE;
}
```

### Why This Pattern is Superior
- **No casts at all** — the interface honestly reflects JSON's types.
- **Runtime safe** — the type guard validates at runtime, not just compile time.
- **Vercel-proof** — no strictness mode can break it because there's no lie.
- **Extensible** — adding a new difficulty level means updating one type + one Record.

### Rule: Strict Type Casting for JSON Imports
> When importing JSON data, **never use union literal types in the interface**. Use `string` in the interface and narrow with a **type guard** at the point of use. This survives all build environments.

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
