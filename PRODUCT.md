# PRODUCT.md — OpenIdentity Website

> Product brief for Impeccable. Every command reads this before designing.

---

## Product

**Name**: OpenIdentity Website (AxiomID Frontend)
**Type**: Bilingual (EN/AR/ZH) static frontend prototype + discovery spec showcase
**Stage**: MVP / POC → Enterprise trust center
**Repository**: `pai-list/openidentity.md` → `frontend/`

---

## Users

| Persona | Context | Goal | Pain Points |
|---------|---------|------|-------------|
| **Agent Developer** | Terminal, docs, IDE | Find protocol specs, create agent identity, verify controller | Scattered docs, no visual trust signals |
| **Enterprise Buyer** | Boardroom, laptop, mobile | Evaluate trust center, compliance, deployment paths | Unclear ROI, trust gaps, no reference customers |
| **Pi Network User** | Mobile, wallet app | Discover agents, verify passports, grant access | Technical jargon, no wallet integration preview |
| **Researcher** | Desktop, deep focus | Read spec, understand architecture, cite work | No PDF export, no permalinks, messy navigation |

**Primary Mode**: **Operate** (complete tasks fast) + **Persuade** (build trust)
**Secondary**: **Read** (deep understanding), **Experience** (delight)

---

## Brand Voice

- **Calm, clinical, no hype** — like a spec sheet, not a landing page
- **Precision over personality** — "Identity for the agentic era" not "Revolutionize your agents"
- **Bilingual first** — Arabic/English parity; Chinese as stretch
- **Trust signals visible** — verification badges, schema links, live examples

---

## Anti-References (What We're Not)

- ❌ Purple gradients, glassmorphism, "AI shimmer"
- ❌ "Boost your productivity", "Unlock potential", generic SaaS copy
- ❌ Cards-in-cards, nested shadows, rotating decorative elements
- ❌ Emoji as primary icons (use SVG)
- ❌ Hero rotation transform (distracts from content)
- ❌ Generic "AI beige" radial gradients

---

## Competitive Landscape

| Competitor | Strength | Gap |
|------------|----------|-----|
| **DID Method Registries** | Spec completeness | No visual trust layer, no bilingual |
| **Agent Marketplaces (LangChain, AutoGPT)** | Ecosystem | No sovereign identity, no Pi Network |
| **Enterprise Identity (Auth0, Okta)** | Compliance | Not agent-native, no DID/VC |
| **Web3 Identity (ENS, SpruceID)** | Crypto-native | No enterprise trust center, no Arabic |

---

## Key Flows (MVP)

1. **Create Profile** → `openidentity.md` + AxiomID URL
2. **Verify Controller** → DID + domain + wallet + signature
3. **Publish Indexes** → `agentic.md` + `agentic.txt` + `llms.txt`
4. **Search/Discover** → Role, domain, protocol, wallet, org, language, verification
5. **Request Access** → MCP + memory + pilot workspace
6. **Measure Demand** → Consent-gated analytics

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Time to first OpenIdentity** | < 5 min | Funnel analytics |
| **Spec page dwell time** | > 3 min | Scroll depth + time |
| **Bilingual parity** | 100% keys | i18n audit |
| **Schema validation pass** | 100% | CI check |
| **Lighthouse score** | ≥ 95 all | CI budget |
| **WCAG AA** | 100% pass | axe-core CI |

---

## Technical Constraints

- **Static export only** — no server, no build step (vanilla HTML/CSS/JS)
- **Zero dependencies** — Inter font via Google Fonts (preconnect), no framework
- **Edge deploy** — How.now, Cloudflare Pages, Netlify
- **i18n** — 3 languages, RTL for Arabic, localStorage persistence
- **Theme** — Light/Dark/System, `prefers-color-scheme`, localStorage
- **Schema** — JSON Schema v0.1 validation linked from UI

---

## Design Direction for Impeccable

> **Apply these commands in sequence:**
>
> 1. `/impeccable init` → Capture this PRODUCT.md + current DESIGN.md
> 2. `/impeccable shape` → Design brief for each section (hero, protocols, services, docs)
> 3. `/impeccable distill` → Strip to essence: remove rotation, nested cards, generic gradients
> 4. `/impeccable typeset` → Fix hierarchy: display font, tighter clamps, better rhythm
> 5. `/impeccable colorize` → Strategic color: keep brand/gold, add success/warning tokens
> 6. `/impeccable layout` → Fix rhythm: consistent section spacing, container widths
> 7. `/impeccable polish` → Final pass: motion tokens, hover states, focus rings
> 8. `/impeccable harden` → Edge cases: empty states, overflow, i18n overflow, error states
> 9. `/impeccable audit` → 5-dimension check (visual, UX, code, a11y, perf)
> 10. `/impeccable document` → Write DESIGN.md v2 (Google Stitch)

---

## Deliverables

| File | Purpose |
|------|---------|
| `frontend/index.html` | Semantic, accessible, static |
| `frontend/styles.css` | Token-driven, component library |
| `frontend/app.js` | i18n, theme, zero-dep, < 2KB gzipped |
| `frontend/tokens.css` | Extracted design tokens (CSS custom properties) |
| `frontend/components/` | (future) component partials for SSG |
| `DESIGN.md` | v2 — this file updated post-polish |
| `PRODUCT.md` | This file — source of truth |

---

## Cite This Work

```bibtex
@misc{openidentity2026product,
  author       = {PAI-Universe},
  title        = {OpenIdentity Website Product Brief for Impeccable},
  year         = {2026},
  howpublished = {\url{https://github.com/pai-list/openidentity.md}},
  note         = {Mode: Operate + Persuade; Users: Agent Dev, Enterprise, Pi User, Researcher}
}
```