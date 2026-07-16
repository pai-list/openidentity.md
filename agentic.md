# agentic.md — AxiomID / OpenIdentity Discovery Index

This file is the agent-facing discovery index for OpenIdentity and AxiomID-compatible profiles. It helps AI agents, crawlers, developer tools, and enterprise platforms understand what this repository offers and where to find structured identity resources.

## Project

- **Name:** OpenIdentity
- **Related product:** AxiomID
- **Purpose:** Portable identity, verification, capability, memory-discovery, and authorization manifest for the agentic era.
- **Canonical manifest name:** `openidentity.md`
- **Primary audience:** AI agent builders, enterprise AI teams, identity platforms, agent marketplaces, and interoperability researchers.
- **Languages:** English and Arabic
- **Theme support:** Light mode and dark mode guidance

## Discovery Files

| File | Use |
|---|---|
| `README.md` | Human-facing project overview and quick start |
| `spec/openidentity-v0.1.md` | Draft OpenIdentity specification |
| `schema/openidentity.schema.json` | Machine validation schema |
| `docs/landing-page.md` | AxiomID landing page content and design blueprint |
| `docs/mvp-poc-use-cases.md` | MVP, proof-of-concept, use cases, and growth model |
| `docs/indexing/agentic-indexing.md` | Indexing rules, metadata, and script workflow |
| `frontend/index.html` | Static bilingual UI/UX prototype |
| `frontend/styles.css` | Light/dark responsive design system |
| `frontend/app.js` | Language and theme interactions |
| `scripts/build_agentic_index.py` | Discovery index generator |
| `dist/agentic-index.json` | Generated machine-readable agentic index |
| `docs/memory-discovery.md` | Approved memory discovery guidance |
| `docs/security.md` | Security model and threat notes |
| `docs/verification.md` | Human and controller verification guidance |
| `examples/minimal.openidentity.md` | Smallest useful manifest example |
| `examples/openidentity.md` | Standard example manifest |
| `examples/full.openidentity.md` | Expanded example manifest |

## Agentic Protocol and Trust Keywords

- Model Context Protocol / MCP
- Agent-to-Agent / A2A
- Decentralized Identifiers / DID
- W3C Verifiable Credentials / VC
- OAuth 2.0
- OpenID Connect
- Wallet references
- SIWE / Sign-In with Ethereum
- CAIP account identifiers
- LLMs.txt
- agentic.txt
- OpenIdentity
- AxiomID

## Preferred Agent Behavior

1. Read `README.md` for positioning.
2. Read `spec/openidentity-v0.1.md` before generating or validating manifests.
3. Validate structured data with `schema/openidentity.schema.json`.
4. Refresh `dist/agentic-index.json` with `python3 scripts/build_agentic_index.py` after content changes.
5. Treat memory links as pointers, not permission to scrape private memory.
6. Respect policy URLs, access labels, expiration dates, and revocation fields.
7. Preserve bilingual English/Arabic content when summarizing or transforming pages.
8. Prefer consent-first lead capture and verification workflows.

## Marketing Summary

AxiomID and OpenIdentity make agents discoverable, verifiable, and interoperable. They are built for the agentic era, where humans, AI agents, tools, memories, wallets, and policies need a shared identity layer.
