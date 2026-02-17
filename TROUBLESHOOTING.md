# BikeC - Troubleshooting Guide

## Common Issues & Solutions

### ❌ Error: "Cannot find module 'react' or its corresponding type declarations"

**Cause:** Node modules are not installed.

**Solution:**
1. **First, ensure Node.js is installed:**
   ```bash
   node --version
   ```
   
   If you get "command not found", install Node.js:
   - Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
   - Or use a version manager:
     - **macOS/Linux:** [nvm](https://github.com/nvm-sh/nvm)
     - **Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows)

2. **Install project dependencies:**
   ```bash
   cd /Users/eyalzarfati/Alon
   npm install
   ```

3. **Verify installation:**
   ```bash
   ls node_modules/react  # Should show the react directory
   ```

---

### ❌ Error: "This JSX tag requires 'React' to be in scope"

**Cause:** Missing React import in component file.

**Solution:** Add this line at the top of your component file:
```tsx
import React from 'react';
```

✅ **Status:** Already fixed in `components/BikeC_Example.tsx`

---

### ❌ Error: "Module not found: Can't resolve 'tailwindcss-rtl'"

**Cause:** RTL plugin not installed.

**Solution:**
```bash
npm install tailwindcss-rtl
```

---

### ❌ Tailwind classes not working

**Possible causes:**
1. Missing `postcss.config.js`
2. Missing `tailwind.config.js`
3. Global CSS not imported

**Solution:**
1. Verify these files exist:
   - `postcss.config.js` ✅
   - `tailwind.config.js` ✅
   - `app/globals.css` ✅

2. Make sure `globals.css` is imported in your root layout:
   ```tsx
   // app/layout.tsx
   import './globals.css'
   ```

---

### ❌ Hebrew text showing left-to-right

**Cause:** RTL not configured in HTML.

**Solution:** In your root layout (`app/layout.tsx`):
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
```

---

### ❌ Colors not displaying correctly

**Cause:** Theme colors not loaded.

**Solution:**
1. Verify `tailwind.config.js` includes BikeC theme
2. Check that you're using correct class names:
   - ✅ `bg-bikec-primary`
   - ❌ `bg-bikec-yellow`

---

### ✅ Quick Health Check

Run these commands to verify your setup:

```bash
# 1. Check Node.js
node --version  # Should show v18+

# 2. Check npm
npm --version   # Should show v9+

# 3. Check dependencies
ls node_modules/react node_modules/next node_modules/tailwindcss

# 4. Check config files
ls tailwind.config.js postcss.config.js package.json

# 5. Try to build
npm run build
```

---

## Need More Help?

### Useful Commands

```bash
# Clean install (if things are broken)
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

### File Structure Checklist

```
✅ /Users/eyalzarfati/Alon/
  ✅ package.json
  ✅ tailwind.config.js
  ✅ postcss.config.js
  ✅ app/
    ✅ globals.css
  ✅ components/
    ✅ BikeC_Example.tsx
  ✅ public/
    ✅ images/
      ✅ logo-main.png
      ✅ logo-badge.png
```

---

**Last Updated:** Feb 17, 2026
