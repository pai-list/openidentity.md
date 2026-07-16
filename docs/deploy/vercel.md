# Vercel Deployment | النشر على Vercel

The repository is configured for a static Vercel deployment from `frontend/`.

## One-Time Setup

1. Import the GitHub repository into Vercel.
2. Set the framework preset to **Other**.
3. Use these project settings:

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Output Directory | `frontend` |
| Install Command | `npm install --ignore-scripts` |
| Development Command | `npm run start` |

4. Add the production domain to the GitHub repository website field.

## CLI Deployment

```bash
npx vercel --prod --yes
```

If the CLI is not authenticated, run:

```bash
npx vercel login
```

or set a token in CI:

```bash
VERCEL_TOKEN=... npx vercel --prod --yes --token "$VERCEL_TOKEN"
```

## Expected Production URL

The recommended Vercel project name is `openidentity-md`, which normally produces:

```text
https://openidentity-md.vercel.app
```

The actual URL must be confirmed after Vercel deployment succeeds.

## Arabic Summary | ملخص عربي

تم تجهيز المستودع للنشر الثابت على Vercel من مجلد `frontend/`. يجب ربط المستودع بحساب Vercel أو استخدام `VERCEL_TOKEN` في CI، ثم تشغيل `npx vercel --prod --yes` للحصول على رابط الإنتاج الفعلي.
