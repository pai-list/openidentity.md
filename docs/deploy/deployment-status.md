# Deployment Status

## Current status

A Vercel production deployment was attempted from this environment with:

```bash
npx vercel --prod --yes
```

The deploy did not complete because the environment does not contain a valid Vercel login session or `VERCEL_TOKEN`.

## Required action to get the production URL

Run one of the following from a machine or CI environment with Vercel access:

```bash
npx vercel login
npx vercel --prod --yes
```

or:

```bash
VERCEL_TOKEN=... npx vercel --prod --yes --token "$VERCEL_TOKEN"
```

After the command succeeds, Vercel will print the live production URL. If the project is named `openidentity-md`, the expected default URL is:

```text
https://openidentity-md.vercel.app
```

Do not treat the expected URL as confirmed until Vercel returns it from a successful deployment.
