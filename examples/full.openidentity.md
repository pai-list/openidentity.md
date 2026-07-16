# Full OpenIdentity Manifest Example

```yaml
openidentity: "0.1"
agent:
  id: "did:web:example.com:agents:enterprise-agent"
  name: "Enterprise Agent"
  type: "ai-agent"
  version: "1.0.0"
  description: "Enterprise AI agent with approved tools, memory discovery, verification, and authorization references."
controller:
  human:
    name: "Enterprise Controller"
    verification: "https://axiomid.app/u/enterprise-controller"
  organization:
    name: "Example Enterprise"
    domain: "example.com"
verification:
  human_verification: "https://axiomid.app/u/enterprise-controller"
  domain_proof: "https://example.com/.well-known/openidentity.md"
  signature:
    type: "jws"
    uri: "https://example.com/openidentity.md.jws"
capabilities:
  roles:
    - "customer-support"
    - "research"
    - "workflow-automation"
  skills:
    - "identity-discovery"
    - "memory-routing"
    - "tool-orchestration"
    - "policy-aware-delegation"
mcp_tools:
  - name: "approved-memory-index"
    server: "https://example.com/mcp/memory"
    scopes:
      - "memory:read:index"
    approval: "controller-approved"
  - name: "ticket-workflow"
    server: "https://example.com/mcp/tickets"
    scopes:
      - "tickets:create"
      - "tickets:read"
    approval: "organization-approved"
a2a:
  protocol: "draft"
  endpoint: "https://example.com/a2a/enterprise-agent"
  supported_messages:
    - "capability-query"
    - "handoff-request"
    - "verification-check"
discovery:
  memory:
    - label: "public-profile-memory"
      uri: "https://example.com/memory/public-index.json"
      access: "public-read"
    - label: "restricted-project-memory"
      uri: "https://example.com/memory/project-index.json"
      access: "policy-gated"
      policy: "https://example.com/policies/project-memory-access.json"
wallets:
  - type: "did"
    address: "did:web:example.com:agents:enterprise-agent"
  - type: "evm"
    address: "0x0000000000000000000000000000000000000000"
    note: "Reference only; never include private keys."
authorization:
  policy: "https://example.com/policies/agent-access.json"
  scopes:
    - "profile:read"
    - "memory:index:read"
    - "tools:invoke:approved"
  revocation: "https://example.com/policies/revocation-list.json"
links:
  homepage: "https://example.com/agents/enterprise-agent"
  repository: "https://github.com/Moeabdelaziz007/AxiomID"
  axiom_id: "https://axiomid.app/u/enterprise-agent"
```
