# AxiomID Landing Page Blueprint | مخطط صفحة الهبوط

> **Positioning:** AxiomID is the identity, discovery, and trust surface for the agentic era. OpenIdentity is the portable manifest that lets agents, humans, tools, wallets, memories, and policies become discoverable without exposing private data.

> **الرسالة:** AxiomID هي واجهة الهوية والاكتشاف والثقة لعصر الوكلاء. OpenIdentity هو ملف التعريف المحمول الذي يجعل الوكلاء والبشر والأدوات والمحافظ والذاكرة والسياسات قابلة للاكتشاف دون كشف البيانات الخاصة.

## Hero

**Headline:** Identity for the Agentic Era  
**Arabic:** الهوية لعصر الوكلاء الذكيين

**Subheadline:** Publish a secure, bilingual, machine-readable identity page for every AI agent, human controller, organization, tool, memory index, and policy endpoint.

**Arabic:** انشر صفحة هوية آمنة، ثنائية اللغة، وقابلة للقراءة آلياً لكل وكيل ذكاء اصطناعي، متحكم بشري، مؤسسة، أداة، فهرس ذاكرة، ونقطة سياسة.

**Primary CTA:** Create your AxiomID  
**Secondary CTA:** Read the OpenIdentity spec

## Visual Direction

- **Apple-like clarity:** generous spacing, minimal copy, polished product screenshots, and high-contrast typography.
- **Google-like usefulness:** search-first discovery, structured cards, schema-rich snippets, and multilingual accessibility.
- **Vercel-like developer trust:** instant deploy copy, CLI snippets, dark-mode code previews, and crisp docs navigation.
- **zerolang.ai-style agentic energy:** futuristic gradients, protocol badges, agent graphs, and workflow automation storytelling.

## Light / Dark Mode Tokens

| Token | Light | Dark | Use |
|---|---:|---:|---|
| Background | `#ffffff` | `#05070d` | Main canvas |
| Surface | `#f6f8fb` | `#10131f` | Cards and docs panels |
| Text | `#111827` | `#f8fafc` | Body copy |
| Muted | `#5b6472` | `#a1a8b3` | Secondary copy |
| Brand blue | `#0a66c2` | `#58a6ff` | Links and trust accents |
| Agent gold | `#f59e0b` | `#fbbf24` | AxiomID highlights |
| Protocol violet | `#6f42c1` | `#a78bfa` | Interop badges |

## Above-the-Fold Sections

1. **Hero identity card:** show `axiomid.app/u/agent-name` with verified controller, domain, roles, tools, and language switch.
2. **Protocol strip:** show trusted interoperability badges with logo slots:
   - 🧩 **MCP** — Model Context Protocol tools and servers.
   - 🤝 **A2A** — Agent-to-Agent metadata and handoff readiness.
   - 🪪 **DID / W3C Verifiable Credentials** — decentralized identifiers and signed claims.
   - 🔐 **OAuth 2.0 / OpenID Connect** — delegated authorization and login trust.
   - 💳 **Wallet / SIWE / CAIP** — wallet references, chain account identifiers, and ownership proofs.
   - 📄 **LLMs.txt / agentic.txt** — crawler, index, and agent discovery entry points.
3. **Search panel:** “Find agents, tools, memories, and controllers.”
4. **Bilingual toggle:** English / العربية with RTL-aware layout.
5. **Trust statement:** “References, not leaks. AxiomID points to approved resources and policies instead of embedding private memory.”

## Core Page Sections

### 1. Discover

- Search by agent name, DID, domain, wallet, organization, role, tool, protocol, or language.
- Index `openidentity.md`, `agentic.md`, `agentic.txt`, `llms.txt`, and profile metadata.
- Support public profiles, policy-gated profiles, and invite-only proof-of-concept workspaces.

### 2. Verify

- Confirm human controller, organization, domain, wallet, and signature references.
- Display confidence levels: `self-attested`, `domain-verified`, `human-verified`, `signed`, `policy-gated`.
- Keep sensitive proofs behind links and policies.

### 3. Connect

- Route agents to MCP tools, A2A endpoints, memory indexes, and authorization policies.
- Provide copy-paste snippets for developers.
- Offer “request access” and “report stale identity” flows.

### 4. Govern

- Version every identity manifest.
- Show expiration, revocation, controller transfer, and recovery instructions.
- Maintain an audit trail for enterprise proof-of-concept pilots.

## Landing Page Copy Blocks

### English

**Built for humans, parsed by agents.**  
AxiomID turns identity into a discoverable trust layer. Every profile can publish who controls an agent, what the agent can do, which tools it may use, where approved memory indexes live, and which policies govern access.

**No private memory dumps. No blind automation.**  
OpenIdentity uses references, verification links, and policy pointers so platforms can discover trust signals without copying secrets.

### العربية

**مصمم للبشر وقابل للفهم بواسطة الوكلاء.**  
تحوّل AxiomID الهوية إلى طبقة ثقة قابلة للاكتشاف. يمكن لكل ملف نشر المتحكم بالوكيل، قدراته، الأدوات المصرح بها، مواقع فهارس الذاكرة المعتمدة، والسياسات التي تحكم الوصول.

**لا نسخ لذاكرة خاصة. لا أتمتة عمياء.**  
يعتمد OpenIdentity على المراجع وروابط التحقق ومؤشرات السياسات حتى تكتشف المنصات إشارات الثقة دون نسخ الأسرار.

## Conversion Funnel for MVP

1. **Visitor searches or lands from a profile link.**
2. **Visitor sees a bilingual trust card** with controller, role, protocols, and verification state.
3. **Visitor chooses a CTA:** follow profile, request access, verify domain, create profile, or install manifest.
4. **AxiomID captures consented signals:** email, wallet, domain, use case, agent type, language, desired integrations, and enterprise interest.
5. **AxiomID routes the user** into waitlist, pilot workspace, docs, or GitHub examples.

## Consent-First Data Gathering

Avoid dark-pattern “user farming.” Use transparent, opt-in audience development:

- Explain why each field is collected.
- Separate marketing consent from product access.
- Offer export and delete flows.
- Track aggregate use-case demand rather than private agent memory.
- Ask for organization size, role, integrations, and pilot goals only when needed.
- Store discovery metadata separately from secrets, tokens, and private memories.

## Enterprise Proof Points

- **Identity registry:** searchable profiles for agents, controllers, teams, tools, and organizations.
- **Compliance posture:** references to policy, verification, revocation, and audit metadata.
- **Interoperability:** ready for MCP, A2A, DID, verifiable credentials, OAuth, OpenID Connect, wallets, and agent discovery files.
- **Deployment:** works on GitHub, docs sites, AxiomID profiles, and enterprise knowledge portals.


## Frontend Prototype

The static MVP prototype lives in `frontend/index.html` with `frontend/styles.css` and `frontend/app.js`. It demonstrates:

- Responsive landing sections for hero, product, protocols, use cases, and docs.
- English/Arabic language switching with RTL support.
- Light/dark mode with saved user preference.
- Protocol logo slots for MCP, A2A, DID, VC, OAuth/OIDC, wallets, and `agentic.txt`.
- Clear paths into the README, landing blueprint, MVP/POC guide, indexing guide, and discovery files.
