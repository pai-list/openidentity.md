# Verification

Verification helps platforms understand who controls an agent and whether the manifest is trustworthy.

## Verification Types

| Type | Example |
|---|---|
| Human | AxiomID profile URL for the controller. |
| Domain | `.well-known/openidentity.md` hosted on a verified domain. |
| Wallet | DID, EVM address, or other public wallet reference. |
| Signature | Detached JWS or signed manifest pointer. |
| Organization | Company domain, registry page, or verified AxiomID organization profile. |

## Recommended Verification Block

```yaml
verification:
  human_verification: "https://axiomid.app/u/example"
  domain_proof: "https://example.com/.well-known/openidentity.md"
  signature:
    type: "jws"
    uri: "https://example.com/openidentity.md.jws"
```

## Arabic Summary | ملخص عربي

يساعد التحقق المنصات على معرفة المتحكم في الوكيل ومدى موثوقية ملف OpenIdentity، ويمكن أن يتم عبر AxiomID أو النطاق أو المحفظة أو التوقيع.
