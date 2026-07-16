# Memory Discovery

OpenIdentity can point compatible platforms to approved memory locations without exposing private memory directly.

## Recommended Memory Entry

```yaml
discovery:
  memory:
    - label: "approved-public-memory"
      uri: "https://example.com/memory/index.json"
      access: "public-read"
      policy: "https://example.com/policies/memory-access.json"
```

## Guidance

- Use memory indexes, not raw private memory dumps.
- Label each memory source clearly.
- Describe access level such as `public-read`, `policy-gated`, or `controller-approved`.
- Attach policy URLs for restricted sources.
- Keep private memory in the system that owns access control.

## Arabic Summary | ملخص عربي

تستخدم خاصية اكتشاف الذاكرة للإشارة إلى مواقع ذاكرة معتمدة دون كشف المحتوى الخاص مباشرة. يفضل استخدام فهارس ذاكرة وسياسات وصول واضحة.
