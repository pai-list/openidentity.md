#!/usr/bin/env bash
set -euo pipefail

: "${HOW_NOW_PROJECT:=openidentity-md}"
: "${HOW_NOW_TOKEN:?Set HOW_NOW_TOKEN from your How.now dashboard or CI secret.}"
: "${HOW_NOW_COMMAND:=how}"

python3 scripts/build_agentic_index.py
npm run check

if ! command -v "$HOW_NOW_COMMAND" >/dev/null 2>&1; then
  cat >&2 <<MSG
How.now CLI command '$HOW_NOW_COMMAND' was not found.
Install the official How.now CLI or set HOW_NOW_COMMAND to the provider CLI path, then rerun:
  HOW_NOW_TOKEN=... HOW_NOW_PROJECT=$HOW_NOW_PROJECT $0
MSG
  exit 127
fi

"$HOW_NOW_COMMAND" deploy --project "$HOW_NOW_PROJECT" --token "$HOW_NOW_TOKEN" --prod frontend
