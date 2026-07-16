# Agentic Indexing and Discovery | الفهرسة والاكتشاف للوكلاء

AxiomID should be indexable by humans, search engines, AI crawlers, enterprise catalogs, and autonomous agents. This document defines the recommended discovery files, metadata fields, and indexing script workflow for the MVP.

## Discovery Surface

| Surface | Audience | Content |
|---|---|---|
| `README.md` | Humans, GitHub, search | Product overview, quick start, repository map |
| `agentic.md` | Agents and enterprise catalogs | Rich project index, protocol keywords, preferred behavior |
| `agentic.txt` | Crawlers and lightweight agents | Compact plain-text discovery summary |
| `llms.txt` | Optional LLM crawlers | Curated docs list and usage boundaries |
| `openidentity.md` | Platforms and agents | Portable identity manifest |
| JSON-LD | Search engines and catalogs | Structured profile, software, and docs metadata |
| Sitemap | Web crawlers | Canonical frontend/docs URLs |

## Indexing Rules

1. Index public profile metadata only.
2. Treat memory URLs as pointers, not permission to scrape content.
3. Preserve language, text direction, theme support, protocol support, and verification status.
4. Prefer stable canonical URLs over temporary deployment previews.
5. Store timestamps for first seen, last indexed, manifest version, and revocation status.
6. Never index private keys, secrets, raw chat logs, private identity documents, or unrestricted credentials.

## Recommended Metadata Fields

```json
{
  "name": "Axiom Assistant",
  "canonical_manifest": "openidentity.md",
  "languages": ["en", "ar"],
  "themes": ["light", "dark"],
  "protocols": ["MCP", "A2A", "DID", "VC", "OAuth 2.0", "OpenID Connect", "SIWE", "CAIP"],
  "verification": ["human-verified", "domain-verified", "policy-gated"],
  "discovery_files": ["agentic.md", "agentic.txt", "llms.txt"],
  "safety": {
    "memory_policy": "references-only",
    "lead_capture": "consent-first"
  }
}
```

## Script Workflow

Run the index builder after documentation changes:

```bash
python3 scripts/build_agentic_index.py
```

The script reads repository docs and emits `dist/agentic-index.json`, which can be used by AxiomID, static hosting, crawlers, or future frontend search.

## Arabic Summary | ملخص عربي

يجب أن تكون AxiomID قابلة للفهرسة من البشر ومحركات البحث ووكلاء الذكاء الاصطناعي والكتالوجات المؤسسية. تعتمد الفهرسة على ملفات واضحة مثل `README.md` و`agentic.md` و`agentic.txt` و`openidentity.md` مع احترام الخصوصية، وعدم نسخ الذاكرة الخاصة، واستخدام البيانات التي وافق المستخدم على نشرها فقط.
