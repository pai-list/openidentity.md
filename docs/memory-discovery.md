# PAI-Memory Discovery Guide | دليل اكتشاف PAI-Memory

This document provides guidance for AI agents, crawlers, and developers on discovering and accessing agent memory through PAI-Memory.

## Overview

PAI-Memory is the 7-layer agent memory system behind AxiomID and OpenIdentity. It provides persistent, verifiable, shared memory for agent profiles, access requests, verification states, and discovery events.

## Layers

| Layer | Name | Purpose |
|-------|------|---------|
| L1 | Identity | Sovereign DID + Passport |
| L2 | Durable State | Durable Objects for hot state |
| L3 | Gossip | Durable Objects for peer sync |
| L4 | MCP Gateway | Tool/action routing |
| L5 | Memory | D1 + DO storage for indexes, profiles, requests |
| L6 | Discovery | ADP signaling + agentic.txt indexing |
| L7 | Workspace | GSpace + CLI integration |

## Access Patterns

### Discovery Files (Public, Edge-Served)
- `GET /agentic.txt` — Compact crawler summary
- `GET /agentic.md` — Rich agent-facing index
- `GET /agentic-index.json` — Machine-readable document index
- `GET /openidentity.md` — Concrete agent manifest (when hosted)

### PAI-Memory API (Authenticated)
Agents with valid AxiomID Passport can access:

```bash
# Query profile index
GET /api/memory/profiles?role=research&protocol=MCP

# Check verification state
GET /api/memory/profiles/{id}/verification

# Submit access request
POST /api/memory/access_requests
{
  "profile_id": "...",
  "requester_email": "...",
  "requested_resource": "memory-index"
}
```

### Verification & Trust
- All memory writes require cryptographic signature from AxiomID Passport holder
- Verification states: `self-attested`, `pending`, `verified`, `denied`
- Trust scores derived from KYA/KYC stamps (see AxiomID docs)

## Implementation Notes

- PAI-Memory uses Cloudflare D1 for persistence + Durable Objects for coordination
- L2/L3 Durable Objects provide SQLite-backed hot state with gossip sync
- D1 handles durable storage with SQL queries above
- All data is portability-first: export as openidentity.md or agentic.txt

## Privacy & Consent

- Memory links are pointers, not permission to scrape private memory
- Growth is consent-first: export/delete promises honored
- Do not index: private memories, raw chat logs, secret tokens, private keys, identity documents

## Arabic Summary | ملخص عربي

PAI-Memory هي طبقة الذاكرة الوكيلية من 7 طبقات خلف AxiomID و OpenIdentity. توفر تخزيناً مستقراً، قابلاً للتحقق، ومشتركاً لفهارس الوكلاء، الملفات، طلبات الوصول، وأحداث الاكتشاف. الملفات العامة تُقدَّم من الحافة؛ API الذاكرة يتطلب تصريح AxiomID Passport.