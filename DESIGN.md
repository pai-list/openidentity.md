# DESIGN.md — OpenIdentity Website Design System

> Auto-extracted from current frontend. Google Stitch format. Source of truth for all AI agents.

---

## Brand

**Name**: AxiomID / OpenIdentity
**Tagline**: Identity for the agentic era.
**Wordmark**: `A` (brand-mark) + `AxiomID` + `OpenIdentity` (small)
**Mission**: Portable sovereign identity for humans + AI agents on Pi Network

---

## Color Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg` | `oklch(100% 0 0)` | `oklch(05% 0.02 240)` | Page background |
| `--surface` | `oklch(97% 0.01 240)` | `oklch(10% 0.02 240)` | Card/section backgrounds |
| `--surface-strong` | `oklch(92% 0.02 240)` | `oklch(15% 0.03 240)` | Elevated surfaces |
| `--text` | `oklch(15% 0.02 240)` | `oklch(98% 0 0)` | Primary text |
| `--muted` | `oklch(45% 0.02 240)` | `oklch(65% 0.01 240)` | Secondary text |
| `--brand` | `oklch(48% 0.18 250)` | `oklch(68% 0.15 250)` | Primary actions, links |
| `--gold` | `oklch(65% 0.15 85)` | `oklch(75% 0.12 85)` | Eyebrows, accents, CTAs |
| `--violet` | `oklch(55% 0.20 285)` | `oklch(70% 0.15 285)` | Secondary actions |
| `--ring` | `oklch(48% 0.18 250 / 0.28)` | `oklch(68% 0.15 250 / 0.28)` | Focus rings |
| `--shadow` | `0 24px 80px oklch(15% 0.02 240 / 0.14)` | `0 24px 80px oklch(0% 0 0 / 0.42)` | Elevation |

**Semantic aliases**: `--primary = var(--brand)`, `--accent = var(--gold)`, `--success = oklch(55% 0.18 145)`, `--warning = var(--gold)`, `--error = oklch(55% 0.22 25)`

---

## Typography

| Role | Font Family | Weight | Size (clamp) | Line Height | Letter Spacing |
|------|-------------|--------|--------------|-------------|----------------|
| **Display / Hero H1** | Inter / system-ui | 800 | `clamp(3.4rem, 9vw, 7.6rem)` | 0.95 | `-0.055em` |
| **Section H2** | Inter / system-ui | 800 | `clamp(2.4rem, 6vw, 5rem)` | 0.95 | `-0.055em` |
| **Eyebrow** | Inter / system-ui | 800 | `0.875rem` | 1.2 | `0.11em` (uppercase) |
| **Body / Lede** | Inter / system-ui | 400 | `clamp(1.05rem, 2vw, 1.35rem)` | 1.7 | `0` |
| **UI / Button** | Inter / system-ui | 800 | `1rem` | 1.2 | `0` |
| **Caption / Meta** | Inter / system-ui | 400 | `0.75rem` | 1.4 | `0` |
| **Code** | `ui-monospace, SFMono-Regular, Menlo, Consolas` | 400 | `0.875rem` | 1.6 | `0` |

**RTL (Arabic)**: IBM Plex Sans Arabic / Noto Sans Arabic / Tahoma
**CJK (Chinese)**: system-ui fallback

---

## Spacing Scale

| Step | Value | Usage |
|------|-------|-------|
| `space-1` | `0.25rem` | Tight gaps |
| `space-2` | `0.5rem` | Standard gaps |
| `space-3` | `0.75rem` | Component padding |
| `space-4` | `1rem` | Section inner |
| `space-5` | `1.25rem` | Card padding |
| `space-6` | `1.5rem` | Section gap |
| `space-8` | `2rem` | Section margin |
| `space-12` | `3rem` | Large section |
| `space-16` | `4rem` | Hero padding |
| `space-24` | `6rem` | Major section |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-tight` | `0.5rem` | Badges, pills |
| `--radius-standard` | `1rem` | Cards, inputs |
| `--radius-generous` | `1.4rem` | Feature cards |
| `--radius-full` | `999px` | CTAs, avatars |
| `--radius-organic` | `2rem` | Identity card, docs panel |

---

## Shadows & Elevation

| Level | Value | Usage |
|-------|-------|-------|
| `elev-1` | `0 1px 3px oklch(0% 0 0 / 0.1)` | Subtle |
| `elev-2` | `0 4px 12px oklch(0% 0 0 / 0.15)` | Cards |
| `elev-3` | `var(--shadow)` | Identity card, hero aside |
| `elev-4` | `0 32px 96px oklch(0% 0 0 / 0.2)` | Modals |

---

## Components

### 1. Brand Mark
- Grid `2.5rem × 2.5rem`, radius `0.9rem`
- Gradient: `linear-gradient(135deg, var(--gold), var(--brand))`
- Weight 900, dark text on light gradient

### 2. Navigation
- Sticky header, backdrop blur `18px`
- `color-mix(in srgb, var(--bg) 84%, transparent)` background
- Border bottom: `color-mix(in srgb, var(--muted) 20%, transparent)`
- Links: `--muted` → `--text` on hover

### 3. Buttons
| Variant | Background | Border | Text | Shadow |
|---------|------------|--------|------|--------|
| **Primary CTA** | `linear-gradient(135deg, var(--gold), var(--brand))` | none | `#05070d` | `0 0 0 0.35rem var(--ring)` |
| **Secondary CTA** | `var(--surface)` | `color-mix(in srgb, var(--muted) 22%, transparent)` | `--text` | none |
| **Pill / Icon** | `var(--surface)` | `color-mix(in srgb, var(--muted) 22%, transparent)` | `--text` | none |

- Radius: `999px` (full)
- Padding: `0.95rem 1.25rem` (primary), `0.65rem 0.9rem` (pill)

### 4. Identity Card (Hero Aside)
- Radius: `2rem` (`--radius-organic`)
- Transform: `rotate(1.2deg)` (desktop only)
- Gradient: `linear-gradient(180deg, color-mix(in srgb, var(--surface) 88%, transparent), var(--surface))`
- Border: `color-mix(in srgb, var(--muted) 22%, transparent)`
- Shadow: `var(--shadow)` (`elev-3`)
- Avatar: `3.4rem`, radius `1.2rem`, `var(--surface-strong)` bg, `--brand` text
- Profile grid: `2col`, `var(--surface-strong)` bg, radius `1rem`
- Code block: `#05070d` bg, `#dbeafe` text, radius `1rem`

### 5. Feature Cards
- Radius: `1.4rem` (`--radius-generous`)
- Same gradient + border as identity card
- Number badge: `--brand`, weight 900
- Shadow: none (grounded in section)

### 6. Protocol Badges
- Min-width `9rem`, radius `1.2rem`
- Centered, emoji icon `2rem`
- No shadow (marketing strip)

### 7. Timeline Items
- Border-inline-start: `0.3rem solid var(--gold)`
- Radius `1rem`, `var(--surface)` bg

### 8. Doc Links
- Pill `999px`, `var(--surface-strong)` bg, `--muted` text
- Hover: `--text`

---

## Layout Patterns

| Pattern | Grid/Flex | Breakpoint | Notes |
|---------|-----------|------------|-------|
| **Hero** | `grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.75fr)` | `< 900px` → `1fr` | `align-items: center` |
| **Feature Grid** | `repeat(4, minmax(0, 1fr))` | `< 900px` → `1fr` | `gap: 1rem` |
| **Two Column** | `0.8fr 1fr` | `< 900px` → `1fr` | `align-items: start` |
| **Protocol Grid** | Flex wrap, center | Always wrap | `min-width: 9rem` |
| **Section Container** | `max-width: 1180px`, margin auto | - | `padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 5vw, 5rem)` |

---

## Motion & Interaction

| Interaction | Implementation |
|-------------|---------------|
| **Theme toggle** | `data-theme` attr swap, `localStorage` persist |
| **Language toggle** | 3-way cycle (en → ar → zh), `dir` + `lang` swap, `localStorage` |
| **Smooth scroll** | `html { scroll-behavior: smooth }` |
| **Hover states** | Links: color transition; Buttons: implicit (no explicit transition) |
| **Card rotation** | `transform: rotate(1.2deg)` (desktop only) |

---

## Accessibility

- Semantic HTML: `header`, `main`, `section`, `nav`, `aside`, `dl/dt/dd`
- ARIA labels on nav, hero aside, protocol grid
- Focus-visible: `--ring` (implicit via browser)
- Color contrast: WCAG AA target (verify: `--brand` on `--bg`, `--text` on `--surface`)
- RTL support: `dir="rtl"`, Arabic font stack
- `prefers-color-scheme` respected on first load

---

## Anti-Patterns Detected (Impeccable Slop)

| Pattern | Location | Severity |
|---------|----------|----------|
| **AI Beige** (generic gradients) | Hero background radial gradients | Medium |
| **Side-tab border** | Timeline `border-inline-start` | Low |
| **Italic serif display** | None (good) | — |
| **Nested cards** | Identity card inside hero grid | Medium |
| **Clipped labels** | None | — |
| **Generic drop shadows** | `var(--shadow)` reused everywhere | Medium |
| **Hero eyebrow chip** | Eyebrow + gold color | Low |
| **Numbered section labels** | Feature card numbers (01, 02...) | Low |
| **Icon tile stack** | Protocol badges (emoji + text) | Medium |
| **Cards in cards** | Profile grid inside identity card | Medium |

---

## Proposed Design Tokens v2 (Post-Impeccable)

### Refined Palette
- **Primary**: `oklch(48% 0.18 250)` → keep (strong, accessible)
- **Accent**: `oklch(65% 0.15 85)` → keep (gold = trust)
- **Surface**: Add `--surface-subtle = color-mix(in srgb, var(--surface) 60%, transparent)`
- **Border**: `--border = color-mix(in srgb, var(--muted) 15%, transparent)` (thinner)

### Typography Upgrade
- **Display**: Add `--font-display: "Space Grotesk", Inter, system-ui` for headlines (more distinctive)
- **Mono**: `JetBrains Mono` for code blocks
- **Scale**: Tighter clamp ranges, better mobile readability

### Component Evolution
- **Identity Card**: Remove rotation (distracts), add subtle parallax on scroll
- **Feature Cards**: Add `--elev-2` shadow on hover, remove static shadow
- **CTAs**: Add `transition: transform 0.15s, box-shadow 0.15s`; `active: scale(0.98)`
- **Protocol Badges**: Replace emoji with SVG icons (accessibility, crispness)
- **Timeline**: Add connecting line via `::before` pseudo-element

### Layout Polish
- **Section rhythm**: Consistent `space-24` between major sections
- **Container**: `max-width: 72ch` for reading sections, `1180px` for grids
- **Hero**: Reduce `min-height` to `auto`, let content breathe

---

## Implementation Checklist

- [ ] Create `PRODUCT.md` with product brief
- [ ] Extract tokens to `tokens.css` (CSS custom properties)
- [ ] Build component library (`Button`, `Card`, `Badge`, `IdentityCard`, `Timeline`, `ProtocolBadge`)
- [ ] Implement Impeccable commands: `/typeset`, `/colorize`, `/layout`, `/distill`, `/polish`, `/harden`
- [ ] Add motion tokens (duration, easing)
- [ ] Run `npx impeccable detect` in CI
- [ ] Add design hooks for PR review
- [ ] Create `DESIGN.md` v2 (this file updated)

---

## Cite This Work

```bibtex
@misc{openidentity2026design,
  author       = {PAI-Universe},
  title        = {OpenIdentity Website Design System (v1 → v2 via Impeccable)},
  year         = {2026},
  howpublished = {\url{https://github.com/pai-list/openidentity.md}},
  note         = {Google Stitch DESIGN.md format; extracted from frontend/}
}
```