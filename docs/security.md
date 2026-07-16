# OpenIdentity Security Model

OpenIdentity is a discovery and trust bootstrap document, not a secret store.

## Rules

- Do not embed private keys, API tokens, session cookies, passwords, or private memory content.
- Prefer references to policies, signatures, wallet addresses, and approved memory indexes.
- Treat unsigned manifests as discovery hints until verified by domain, human, wallet, or signature proof.
- Use short-lived authorization grants and publish revocation locations when possible.
- Make controller identity explicit so platforms can decide whether to trust the agent.

## Threats

| Threat | Mitigation |
|---|---|
| Manifest spoofing | Use domain proof, signatures, and AxiomID profile links. |
| Overbroad tool access | Publish scopes and policy pointers for every MCP tool. |
| Memory leakage | Reference approved indexes only; do not embed private content. |
| Controller ambiguity | Include human or organization verification references. |
| Stale authorization | Add revocation, expiration, and policy URLs. |

## Arabic Summary | ملخص عربي

OpenIdentity ليس مخزناً للأسرار. يجب استخدامه كوثيقة اكتشاف وثقة تشير إلى الموارد والسياسات والتوقيعات دون تضمين مفاتيح خاصة أو ذاكرة سرية.
