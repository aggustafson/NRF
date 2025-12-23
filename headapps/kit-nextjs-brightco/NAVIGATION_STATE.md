# Navigation State Documentation
**Commit:** `a2f887a button change`  
**Date:** Current state after git revert

## Overview
This document describes the working navigation state that can be reverted to if needed.

## Key Files and Their Current State

### 1. `src/components/HeaderST.tsx`
- **Section:** No `bg-background` class, just `${props.params?.styles}`
- **Structure:** Uses `role="navigation"` on a `<div>` (not `<nav>` element)
- **Logo:** `w-24 lg:w-32 h-24 lg:h-32` with `z-100`
- **Navigation container:** `relative flex [.partial-editing-mode_&]:flex-col-reverse justify-between items-start gap-10 grow max-w-7xl lg:px-4 bg-background`
- **Navigation UL:** `hidden lg:flex flex-row lg:[.partial-editing-mode_&]:!flex-col text-left bg-background`

### 2. `src/components/site-three/MegaMenuItemWrapper.tsx`

#### MegaMenuContent Component:
```tsx
<div
  className={`fixed lg:absolute top-14 left-0 right-0 lg:top-full lg:left-0 lg:right-0
    h-[calc(100vh-3.5rem)] lg:h-auto overflow-auto
    ${
      isVisible
        ? 'opacity-100 translate-x-0 lg:translate-y-0 pointer-events-auto z-50'
        : 'opacity-0 translate-x-full lg:translate-x-0 lg:translate-y-2 pointer-events-none'
    }
    bg-background shadow-lg lg:shadow-xl border-t border-border transition-all duration-300 ease-in-out
    [.partial-editing-mode_&]:!static [.partial-editing-mode_&]:!opacity-100 [.partial-editing-mode_&]:!translate-0 [.partial-editing-mode_&]:!pointer-events-auto`}
>
  <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
    {children}
  </div>
</div>
```

**Key Points:**
- Has inner `container mx-auto px-4 lg:px-8 py-8 lg:py-12` wrapper div
- Uses `overflow-auto` (not `lg:overflow-visible`)
- Has `shadow-lg lg:shadow-xl border-t border-border` classes
- `z-50` is in the className when visible (not just in CSS)
- No inline `style` attributes

### 3. `src/components/site-three/MegaMenuItem.tsx`
- **No inline styles** for background colors
- Content structure: `grid lg:grid-cols-[2fr_2fr_3fr] gap-8 items-start pt-18 lg:pt-0 text-left`
- No `bg-background` classes on inner divs
- No `style={{ backgroundColor: '#ffffff', background: '#ffffff' }}` attributes

### 4. `src/app/globals.css`
**Mega Menu Styles (lines 234-243):**
```css
/* Ensure mega menu appears above other content */
header nav ul li [class*="fixed"],
header nav ul li [class*="absolute"] {
  z-index: 50;
}

/* Mega menu content styling */
[class*="MegaMenuContent"] {
  border-top: 1px solid var(--color-border);
}
```

**Key Points:**
- Very minimal CSS - only z-index and border-top
- **NO** `background-color: #ffffff !important` rules
- **NO** `header [role="navigation"]` selectors
- **NO** extensive background color rules for nested elements

### 5. `src/Layout.tsx`
- **Header:** Simple `<header key="header">` with no positioning classes
- **NO** `sticky`, `lg:fixed`, `top-0`, `z-50` classes on header
- **NO** `-mb-[38px] lg:mb-0` margin classes

## Navigation Behavior

### Desktop (lg breakpoint and above):
- Mega menu appears below navigation item on click
- Uses `lg:absolute` positioning with `lg:top-full`
- Has shadow and border-top
- Uses `overflow-auto` (scrollable if content is long)
- Height: `lg:h-auto` (auto height, not fixed)

### Mobile:
- Mega menu slides in from right (`translate-x-full` when hidden)
- Full viewport height: `h-[calc(100vh-3.5rem)]`
- Fixed positioning: `fixed top-14 left-0 right-0`
- Uses `overflow-auto` for scrolling

## Z-Index Hierarchy
- Logo: `z-100`
- Mega Menu (when visible): `z-50` (in className)
- Hero images: `z-10`, `z-20`
- Header: No explicit z-index

## Background Colors
- **NO** explicit white background colors in CSS with `!important`
- Relies on `bg-background` Tailwind class
- **NO** inline styles for background colors

## To Restore This State
```bash
cd headapps/kit-nextjs-brightco
git restore .
git clean -fd
```

Or revert to commit:
```bash
git reset --hard a2f887a
```

## Differences from Working Version (examples/kit-nextjs-product-listing)
1. **Header structure:** Uses `role="navigation"` instead of `<nav>` element
2. **MegaMenuContent:** Has inner container div wrapper
3. **CSS:** Much simpler - no extensive background color rules
4. **Layout header:** No sticky/fixed positioning classes
5. **Mega menu overflow:** Uses `overflow-auto` instead of `lg:overflow-visible`

