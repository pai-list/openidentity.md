# Minimal OpenIdentity Manifest

```yaml
openidentity: "0.1"
agent:
  id: "did:web:example.com:agents:minimal"
  name: "Minimal Agent"
  type: "ai-agent"
controller:
  human:
    name: "Example Controller"
    verification: "https://axiomid.app/u/example"
capabilities:
  roles:
    - "assistant"
  skills:
    - "identity-discovery"
```
