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

OpenIdentity does not redefine MCP tools. It discovers and links to authoritative MCP servers and tool catalogs from one portable manifest, optionally adding identity, trust, and authorization context around those links.

### A2A agent cards

Agent-to-agent (A2A) agent cards describe how agents present capabilities and communication details to other agents. OpenIdentity can link to A2A agent cards or include summary metadata that helps another agent decide whether to initiate a conversation, delegate a task, or request verification.

Where an A2A card is the runtime-facing discovery document, OpenIdentity can act as the broader identity and trust manifest around it.

OpenIdentity does not redefine A2A agent cards. It discovers and links to authoritative A2A agent cards from one portable manifest, optionally adding identity, trust, and verification context around those links.

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
identity:
  id: agent.example.assistant
  did: did:web:example.com:agents:example-assistant
  name: Example Assistant
  type: ai_agent
  version: 1.2.0
  description: An AI agent that helps with research and workflow automation.
owner:
  type: organization
  name: Example Labs
  url: https://example.com
  contact: security@example.com
verification:
  type: issuer-backed-proof
  method: kya
  issuer: Example Verifier
  subject: did:web:example.com:agents:example-assistant
  proof_url: https://example.com/.well-known/openidentity/example-assistant.json
  status_url: https://verifier.example.com/status/example-assistant
auth:
  authorization_url: https://auth.example.com/oauth/authorize
  provider: example-auth
  delegated_authorization: true
  scopes:
    - read:public-profile
    - request:tool-access
  policies:
    - https://example.com/policies/agent-access
wallet:
  did: did:web:example.com:agents:example-assistant
  blockchain_address: eip155:1:0x0000000000000000000000000000000000000000
  payment_address: https://pay.example.com/example-assistant
  signing_keys:
    - did:web:example.com:agents:example-assistant#key-1
roles:
  - research_assistant
  - workflow_automation_helper
tools:
  - type: mcp
    name: example-tools
    url: https://mcp.example.com
mcp:
  - name: example-tools
    endpoint_url: https://mcp.example.com
    transport: streamable-http
    auth_scopes:
      - tools:read
      - tools:invoke
    tool_categories:
      - research
      - workflow
    description: MCP server exposing Example Assistant's approved research and workflow tools.
a2a:
  agent_card_url: https://example.com/.well-known/agent-card.json
  interaction_modes:
    - task-delegation
    - conversational
  capabilities_summary: Handles research briefs, source collection, and workflow automation requests.
  verification_status: signed-card
memory:
  - provider: example-memory
    type: vector
    uri: https://example.com/memory/public-index
    access: public
    expires_at: null
    description: Public knowledge index used for retrieval-augmented responses.
    schema: https://example.com/schemas/memory-index.json
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

## 5. Required top-level identity sections

OpenIdentity manifests SHOULD define separate top-level sections for stable identity, controller metadata, verification, authorization, wallet references, and roles. Keeping these concerns separate helps consumers distinguish who the agent is, who controls it, who has verified that control relationship, what the agent may access, and how it may sign or receive value.

### `identity`

The `identity` section describes the stable agent identifier and agent-facing metadata. It SHOULD include:

- `id`: A stable, portable identifier for the agent.
- `did`: An optional decentralized identifier associated with the agent.
- `name`: A human-readable agent name.
- `type`: The agent category, such as `ai_agent`, `assistant`, `workflow_agent`, or another explicit type.
- `version`: The agent, product, or deployment version. This is distinct from the manifest format `version`.

### `owner`

The `owner` section describes the human, organization, team, or legal entity that controls or is responsible for the agent. It MAY include fields such as `type`, `name`, `url`, `contact`, organization identifiers, jurisdiction, support contacts, or incident-response contacts.

### `verification`

The `verification` section describes KYA, issuer-backed, signed, or credential-backed proof that the agent is controlled by, operated by, or backed by a verified human or organization. It SHOULD identify the verification method, issuer, subject, proof location, current status location, and revocation or expiry information when available.

`verification` proves who controls or backs the agent. It is a trust signal about identity, controller status, organizational backing, human verification, or issuer attestations. It MUST NOT be interpreted as a grant of access to tools, data, memory, payment accounts, or protected services.

### `auth`

The `auth` section describes how the agent requests or receives authorization for protected resources. It MAY reference OAuth or OIDC authorization endpoints, WorkOS-style organization or tenant metadata, delegated authorization flows, required scopes, roles used by an authorization provider, and policy documents.

`auth` controls what the agent may access. It is the place to describe scopes, consent, authorization URLs, policy references, resource servers, and delegated access constraints. A verified owner in `verification` does not automatically imply any permission in `auth`; consumers MUST still enforce the referenced authorization flow and policy.

### `wallet`

The `wallet` section lists wallet, account, payment, and signing references associated with the agent. It MAY include a DID, blockchain address, payment address, public signing-key references, account aliases, or links to verifiable wallet-binding claims. It MUST NOT include private keys, seed phrases, bearer tokens, or other secrets.

### `roles`

The `roles` section lists declared roles, allowed operating modes, or bounded modes of behavior for the agent. Roles SHOULD be stable strings that a user, orchestrator, policy engine, or verifier can understand, such as `research_assistant`, `customer_support_agent`, `read_only_auditor`, or `payment_initiator_pending_approval`.

## 6. Memory references

OpenIdentity memory entries define references to external memory sources, not raw stored memories. A memory entry MUST identify where an authorized reader or runtime can discover, request, or retrieve memory through the referenced provider. It MUST NOT embed private memory contents directly in the manifest.

Memory entries MAY reference working memory, long-term memory, episodic logs, shared team memory, vector indexes, knowledge bases, files, or access brokers. Access to those resources remains governed by the referenced provider, authorization flow, consent policy, and any external security controls.

Each memory entry SHOULD include:

- `provider`: The memory provider, service, store, broker, or authority responsible for the referenced memory.
- `type`: The memory category, such as `working`, `long_term`, `episodic`, `shared`, or `vector`.
- `uri`: A stable URI for the memory reference, index, access broker, policy, or retrieval endpoint.
- `access`: The access mode for the reference, such as `public`, `signed_url`, `oauth`, `capability_token`, or `private`.
- `expires_at`: The expiration timestamp for temporary links or grants. Non-expiring public references MAY set this to `null` or omit it.
- `description`: A human-readable summary of what the reference represents and how it should be used.
- `schema`: An optional schema URI or inline schema descriptor for the referenced memory resource.

Example:

```yaml
memory:
  - provider: example-memory
    type: vector
    uri: https://example.com/memory/public-index
    access: public
    expires_at: null
    description: Public knowledge index used for retrieval-augmented responses.
    schema: https://example.com/schemas/memory-index.json
  - provider: enterprise-memory-broker
    type: episodic
    uri: https://memory.example.com/grants/agent-session-123
    access: oauth
    expires_at: 2026-08-01T00:00:00Z
    description: OAuth-protected episodic interaction logs available only with user consent.
```

Consumers MUST interpret memory entries as pointers and access instructions only. If a memory reference requires authorization, the consumer MUST obtain access through the declared provider or a compatible authorization flow rather than relying on any credential embedded in the OpenIdentity file.

## 7. Security model

OpenIdentity is a discovery and verification aid, not a secret store or standalone access-control system.

### Avoid embedding secrets

An OpenIdentity manifest MUST NOT contain private memory contents, private keys, passwords, bearer tokens, refresh tokens, API keys, database credentials, wallet seed phrases, session cookies, recovery codes, or unscoped secrets.

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

## 8. Versioning

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
