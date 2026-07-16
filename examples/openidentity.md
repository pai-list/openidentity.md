---
openidentity: 0.1
identity:
  id: did:key:example
  did: did:key:example
  name: Example Agent
  type: ai_agent
  version: 0.1.0
owner:
  type: human
  name: Example Human Controller
  human_verified: true
  method: kya
  issuer: example-verifier
verification:
  type: issuer-backed-proof
  method: kya
  issuer: example-verifier
  subject: did:key:example
  proof_url: https://example.com/.well-known/openidentity/example-agent-proof.json
  status_url: https://example.com/.well-known/openidentity/example-agent-status.json
auth:
  authorization_url: https://example.com/oauth
  provider: example-auth
  delegated_authorization: true
  scopes:
    - web.research:read
    - memory:request
  policies:
    - https://example.com/policies/example-agent-access
wallet:
  did: did:key:example
  blockchain_address: eip155:1:0x0000000000000000000000000000000000000000
  payment_address: https://pay.example.com/example-agent
  signing_keys:
    - did:key:example#key-1
roles:
  - research_assistant
skills:
  - id: web.research
    description: Can perform source-based research
mcp:
  servers:
    - name: example-tools
      url: https://example.com/mcp
a2a:
  agent_card: https://example.com/.well-known/agent-card.json
memory:
  working:
    - provider: appstash
      uri: https://example.com/memory/working
  long_term:
    - provider: firestore
      uri: https://example.com/memory/long-term
  shared:
    - provider: here.now-drives
      uri: https://example.com/share/memory
wallet:
  did: did:key:example
auth:
  authorization_url: https://example.com/oauth
  scopes:
    - read:public-profile
    - request:tool-access
authorization:
  policy: https://example.com/policies/agent-access.json
  revocation: https://example.com/policies/revocation-list.json
links:
  repository: https://github.com/Moeabdelaziz007/AxiomID
  axiom_id: https://axiomid.app/u/example-agent
security:
  secrets_embedded: false
  signed: true
---

# Example Agent OpenIdentity Profile

## Purpose

Example Agent is a sample AI research assistant profile that demonstrates how an `openidentity.md` document can combine machine-readable identity metadata with human-readable operating context. The agent is intended to help users perform source-based research, organize findings, and reference external tools through declared integrations.

## Operating Boundaries

This example agent should operate only within the roles and capabilities declared in the front matter. It is a `research_assistant`, so it should focus on finding, comparing, and summarizing sources rather than making autonomous decisions outside a research workflow.

The profile explicitly states that no secrets are embedded in the document. Any credentials, tokens, or private keys required for connected tools should be obtained through the declared authorization flow rather than stored in this file.

## Memory Links

The `memory` section describes where the agent may read or write different classes of state:

- Working memory is represented by an Appstash-backed URI for short-lived task context.
- Long-term memory is represented by a Firestore-backed URI for durable knowledge or preferences.
- Shared memory is represented by a Here Now Drives URI for collaborative or cross-agent context.

These links are examples only. Implementations should enforce access controls, retention policies, and user consent before connecting an agent to any memory provider.

## Human Owner Verification

The `owner` metadata identifies the verified human controller responsible for the agent. The separate `verification` section records the KYA method, issuer, subject DID, proof URL, and status URL that a consuming system can use to validate that controller relationship.

A consuming system can use `verification` to distinguish self-asserted agent profiles from profiles whose ownership claims were checked by a verifier. In production, the issuer should be a trusted verification service and the profile should include or reference proof material appropriate for the verification method. Verification proves who controls or backs the agent; it does not grant access to tools, data, memory, or payment accounts.

## Skills

The profile declares one skill, `web.research`, described as source-based research. This means the agent can gather information from web sources and produce research outputs that cite or otherwise identify the sources used.

Additional skills should be listed explicitly with stable identifiers and concise descriptions so users and orchestrators can understand what the agent is expected to do.

## Authorization Model

The `auth.authorization_url` field points to an OAuth authorization endpoint, and `auth.scopes` lists example delegated permissions. Consumers should use this URL to initiate delegated authorization for protected tools, data sources, or memory providers. Authorization controls what the agent may access; it remains separate from owner verification.

The wallet DID, `did:key:example`, provides an example decentralized identifier for agent identity and signing. Because `security.signed` is set to `true`, this profile represents an identity document that is expected to be signed or accompanied by a verifiable signature in a production deployment.


## AxiomID and Portable Discovery

This example can be used as a portable discovery descriptor for AxiomID or any compatible AI-agent platform. Like a USB descriptor for an AI agent, it tells a platform what the agent is, who controls it, which roles and skills it claims, where approved memory links live, and which authorization path should be used before accessing protected tools or data.

The `links.axiom_id` field is an example pointer to an AxiomID profile. Production profiles should replace the placeholder URL with the real verified controller or agent page on `https://axiomid.app/`.
The `wallet` section provides example DID, blockchain address, payment address, and public signing-key references for agent identity, payments, and signing. Because `security.signed` is set to `true`, this profile represents an identity document that is expected to be signed or accompanied by a verifiable signature in a production deployment.
