#!/usr/bin/env bash
set -euo pipefail

: "${CF_API_TOKEN:?Set CF_API_TOKEN from your Cloudflare dashboard or CI secret.}"
: "${CF_ACCOUNT_ID:?Set CF_ACCOUNT_ID from your Cloudflare dashboard.}"
: "${WORKER_NAME:=openidentity-md}"
: "${COMPAT_DATE:=2026-08-05}"

python3 scripts/build_agentic_index.py
npm run check

if [ "$1" = "pages-api" ]; then
  echo "Deploying $WORKER_NAME to Cloudflare Pages via API..."
  python3 scripts/providers/pages_deploy.py
else
  echo "Deploying $WORKER_NAME to Cloudflare Workers (CLI)..."

  if ! command -v npx >/dev/null 2>&1; then
    cat >&2 <<MSG
npx not found. Install Node.js 20+ and run:
  npm install -g wrangler
MSG
    exit 127
  fi

  npx wrangler deploy --name "$WORKER_NAME" --assets=frontend --compatibility-date "$COMPAT_DATE"
fi

echo "Deployed. Verify at https://openid.axiomid.app"