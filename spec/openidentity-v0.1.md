---
title: OpenIdentity Specification
version: 0.1
status: draft
format: openidentity.md
---

# OpenIdentity v0.1

OpenIdentity is a portable identity manifest for AI agents. It acts as a discovery layer for identity, authorization, skills, tools, memory references, wallet links, and human verification.

An OpenIdentity manifest is intended to travel with an agent, be published at a stable location, or be referenced by systems that need to understand who or what an agent represents before granting access, invoking tools, sharing memory, or relying on claims.

## 1. Purpose and non-goals

### Purpose

OpenIdentity defines a lightweight, portable manifest that describes an AI agent's identity and related trust metadata. The manifest SHOULD help humans, LLMs, and software systems discover:

- The agent's name, description, owner, operator, or controlling organization.
- The agent's declared capabilities, skills, and intended use cases.
- Tool and service endpoints the agent can use or expose.
- Authorization and access metadata needed to request scoped permissions.
- Memory references and knowledge sources the agent may use.
- Wallet, payment, or account links associated with the agent.
- Human verification, organizational verification, signed claims, or other trust signals.

OpenIdentity is a discovery layer, not a centralized identity provider. It SHOULD complement existing authentication, authorization, agent-discovery, and tool-discovery systems by giving them a common manifest to inspect and exchange.

### Non-goals

OpenIdentity does not attempt to:

- Replace OAuth, OIDC, SAML, passkeys, API keys, capability tokens, or other authentication protocols.
- Define a universal permission model for every tool, memory store, wallet, or runtime.
- Store private keys, passwords, bearer tokens, recovery phrases, or other secrets.
- Guarantee that claims are true without external verification.
- Require a blockchain, decentralized identifier method, registry, or centralized authority.
- Specify a full agent runtime, orchestration protocol, model format, or tool-calling protocol.
- Replace terms of service, compliance controls, audit logs, consent flows, or human review where those are required.

## 2. Core design goals

OpenIdentity v0.1 is guided by the following design goals.

### Human-readable

A manifest SHOULD be understandable by a developer, operator, auditor, or end user reading it directly. Human-readable Markdown provides context that structured metadata alone may not capture.

### LLM-readable

A manifest SHOULD be easy for AI systems to summarize, compare, and reason about. Field names SHOULD be explicit, descriptions SHOULD avoid ambiguous shorthand, and the Markdown body SHOULD explain operational intent in natural language.

### Machine-extractable

A manifest SHOULD include structured metadata that can be parsed deterministically. YAML front matter provides a simple extraction boundary for identity fields, version data, verification references, tool references, and links.

### Portable

A manifest SHOULD be usable across repositories, websites, model providers, agent runtimes, authorization systems, and memory stores. It SHOULD be a plain text file with stable links rather than a platform-specific database record.

### Secure

A manifest SHOULD support verification and least-privilege access without exposing secrets. It SHOULD reference claims, credentials, scopes, and endpoints in ways that can be revoked, rotated, and independently verified.

## 3. Relationship to existing concepts

OpenIdentity is designed to interoperate with, not replace, adjacent agent and identity concepts.

### MCP tools

Model Context Protocol (MCP) tools describe callable capabilities made available to an AI system. OpenIdentity can reference MCP servers, tool catalogs, or allowed tool scopes so a reader can discover which tools are associated with an agent and where authorization may be required.

OpenIdentity SHOULD NOT duplicate the full MCP tool schema when a canonical MCP endpoint or manifest exists. Instead, it SHOULD link to the authoritative MCP source and describe the agent's intended relationship to those tools.

### A2A agent cards

Agent-to-agent (A2A) agent cards describe how agents present capabilities and communication details to other agents. OpenIdentity can link to A2A agent cards or include summary metadata that helps another agent decide whether to initiate a conversation, delegate a task, or request verification.

Where an A2A card is the runtime-facing discovery document, OpenIdentity can act as the broader identity and trust manifest around it.

### WorkOS-style auth metadata

WorkOS-style authentication and enterprise metadata often includes organization identity, domains, directory connections, roles, sessions, and authorization context. OpenIdentity can reference these systems by linking to tenant, organization, or policy metadata without embedding private access material.

OpenIdentity SHOULD treat enterprise auth metadata as an external authority for access decisions. The manifest can point to where authorization is requested, which scopes are expected, and which organization or tenant claims are relevant.

### Soul/skills-style agent self-description

Some agents use soul, character, profile, or skills documents to describe personality, operating principles, capabilities, preferences, and limitations. OpenIdentity can reference those documents or summarize them in its Markdown body.

OpenIdentity SHOULD distinguish self-description from verified identity. A skill declaration is useful discovery data, but it is not by itself proof that the agent is authorized, safe, or operated by a particular person or organization.

### Memory discovery

Agents may rely on memory stores, knowledge bases, embeddings, logs, files, or external context services. OpenIdentity can list memory references so authorized readers can discover what memory sources exist, how access is requested, and what verification or consent rules apply.

OpenIdentity SHOULD link to memory indexes, policies, or access brokers rather than embedding sensitive memory contents directly in the manifest.

## 4. Recommended file format

The recommended file name is:

```text
openidentity.md
```

An OpenIdentity file SHOULD contain structured YAML front matter followed by a human-readable Markdown body.

### YAML front matter

The YAML front matter SHOULD begin and end with `---`. It SHOULD include `version: 0.1` for this draft and MAY include fields such as:

```yaml
---
version: 0.1
id: agent.example.assistant
name: Example Assistant
description: An AI agent that helps with research and workflow automation.
owners:
  - type: organization
    name: Example Labs
    url: https://example.com
verification:
  - type: signed-claim
    url: https://example.com/.well-known/openidentity/example-assistant.json
skills:
  - research
  - summarization
tools:
  - type: mcp
    name: example-tools
    url: https://mcp.example.com
memory:
  - type: index
    name: public-knowledge-index
    url: https://example.com/memory/public
wallets:
  - type: payment-link
    url: https://pay.example.com/example-assistant
auth:
  authorization_url: https://auth.example.com/oauth/authorize
  scopes:
    - read:public-profile
    - request:tool-access
---
```

The exact schema MAY evolve after v0.1. Implementations SHOULD ignore unknown fields and preserve fields they do not understand when editing the file.

### Markdown body

The Markdown body SHOULD explain the structured metadata in prose. It MAY include sections such as:

- Overview
- Operator or owner
- Capabilities and limitations
- Tools and integrations
- Memory and data sources
- Authorization and consent
- Verification and signed claims
- Contact, support, or revocation instructions

The body SHOULD be safe to display to humans and safe for LLMs to consume as context.

## 5. Security model

OpenIdentity is a discovery and verification aid, not a secret store or standalone access-control system.

### Avoid embedding secrets

An OpenIdentity manifest MUST NOT contain private keys, passwords, bearer tokens, API keys, wallet seed phrases, session cookies, recovery codes, or other secrets.

### Use links

A manifest SHOULD link to authoritative resources instead of copying sensitive or frequently changing data. Linked resources can be protected, updated, revoked, or replaced without rewriting every copy of the manifest.

### Use signed claims

Claims about ownership, authorization, domains, wallets, credentials, or human verification SHOULD be signed or otherwise verifiable when they affect trust decisions. A manifest MAY link to signed claim documents, verifiable credentials, transparency logs, or `.well-known` endpoints.

### Use scoped access

Access references SHOULD use narrow scopes and purpose-specific authorization flows. A manifest SHOULD describe requested scopes clearly enough that a human or policy engine can understand what access is being requested.

### Support revocation

Any linked credential, claim, tool authorization, memory grant, or wallet association SHOULD have a revocation or rotation path. The manifest SHOULD include enough information for verifiers to check whether a claim is still valid.

### Verify before trusting

Consumers MUST NOT treat a manifest's claims as true solely because they appear in the file. Consumers SHOULD verify signatures, domains, issuer trust, organization membership, consent, and runtime behavior before granting access or relying on sensitive claims.

## 6. Versioning

OpenIdentity starts with:

```yaml
version: 0.1
```

The `version` field identifies the manifest format version, not the agent's product version. Consumers SHOULD use the `version` field to select parsing and validation behavior.

For v0.1:

- The manifest format is draft and subject to change.
- Unknown fields SHOULD be ignored by readers.
- Unknown fields SHOULD be preserved by editors when possible.
- Breaking schema changes SHOULD use a new version number.
- Human-readable Markdown SHOULD remain a first-class part of the format.

Future versions may define a stricter schema, recommended field registry, validation profile, signing profile, or compatibility rules.

## 7. OpenIdentity positioning for AxiomID

OpenIdentity is also intended to support AxiomID and compatible AI-agent platforms as a portable discovery descriptor.

Suggested project message:

> OpenIdentity is a portable identity manifest for AI agents. It combines identity, human verification, roles, skills, MCP tools, A2A metadata, memory discovery links, wallet references, and authorization pointers into one secure, shareable file.

Short version:

> OpenIdentity is the discovery layer for AI agent identity.

USB metaphor:

> Like a USB descriptor for an AI agent, OpenIdentity lets any compatible platform understand what the agent is, who controls it, what it can do, and where its approved memory and tools live.

### AxiomID compatibility notes

An AxiomID-compatible OpenIdentity manifest SHOULD make the following references explicit when available:

- Human or organization controller verification.
- Roles and skills approved for the agent.
- MCP tool references and allowed scopes.
- A2A agent-card or communication metadata.
- Approved memory discovery links.
- Wallet references, without private keys or seed phrases.
- Authorization URLs, scopes, policies, revocation, or consent pointers.

## 8. Arabic summary | ملخص عربي

OpenIdentity هو ملف هوية محمول لوكلاء الذكاء الاصطناعي. يجمع الهوية، التحقق البشري، الأدوار، المهارات، أدوات MCP، بيانات A2A، روابط اكتشاف الذاكرة، مراجع المحافظ، ومؤشرات التفويض في ملف واحد آمن وقابل للمشاركة.

النسخة المختصرة: OpenIdentity هي طبقة الاكتشاف لهوية وكلاء الذكاء الاصطناعي.

مثل واصف USB لوكيل ذكاء اصطناعي، يتيح OpenIdentity لأي منصة متوافقة فهم ماهية الوكيل، ومن يتحكم به، وما يمكنه فعله، وأين توجد ذاكرته وأدواته المعتمدة.
