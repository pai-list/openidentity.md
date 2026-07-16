#!/usr/bin/env python3
"""Build a small agentic discovery index for AxiomID/OpenIdentity docs."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
OUTPUT = DIST / "agentic-index.json"
FRONTEND = ROOT / "frontend"
FRONTEND_INDEX = FRONTEND / "agentic-index.json"

DOCUMENTS = [
    ("README.md", "overview", "Human-facing project overview and quick start"),
    ("agentic.md", "agent-discovery", "Rich agent-facing discovery index"),
    ("agentic.txt", "agent-discovery-text", "Compact crawler and agent discovery summary"),
    ("docs/landing-page.md", "landing", "AxiomID landing page content and UI direction"),
    ("docs/mvp-poc-use-cases.md", "mvp-poc", "MVP, proof-of-concept, and use-case guide"),
    ("docs/indexing/agentic-indexing.md", "indexing", "Agentic indexing and discovery guide"),
    ("docs/deploy/vercel.md", "deploy", "Vercel deployment instructions"),
    ("docs/deploy/deployment-status.md", "deploy-status", "Latest deployment status and URL instructions"),
    ("docs/services/how-now-ghost.md", "agentic-services", "How.now hosting and Ghost database integration plan"),
    ("scripts/providers/deploy_how_now.sh", "deploy-script", "How.now deployment wrapper"),
    ("scripts/providers/ghost_schema.sql", "database-schema", "Ghost Postgres MVP schema"),
    ("spec/openidentity-v0.1.md", "spec", "OpenIdentity draft specification"),
    ("schema/openidentity.schema.json", "schema", "OpenIdentity JSON Schema"),
    ("examples/minimal.openidentity.md", "example", "Minimal manifest example"),
    ("examples/openidentity.md", "example", "Standard manifest example"),
    ("examples/full.openidentity.md", "example", "Full manifest example"),
]

PROTOCOLS = [
    "MCP",
    "A2A",
    "DID",
    "W3C Verifiable Credentials",
    "OAuth 2.0",
    "OpenID Connect",
    "Wallet references",
    "SIWE",
    "CAIP",
    "LLMs.txt",
    "agentic.txt",
]


def first_heading(text: str) -> str:
    for line in text.splitlines():
        if line.startswith("#"):
            return line.lstrip("#").strip()
    return "Untitled"


def build() -> dict:
    docs = []
    for relative_path, kind, description in DOCUMENTS:
        path = ROOT / relative_path
        if not path.exists():
            docs.append({"path": relative_path, "kind": kind, "missing": True, "description": description})
            continue
        text = path.read_text(encoding="utf-8")
        docs.append(
            {
                "path": relative_path,
                "kind": kind,
                "title": first_heading(text),
                "description": description,
                "bytes": len(text.encode("utf-8")),
                "lines": text.count("\n") + 1,
                "missing": False,
            }
        )
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "project": "OpenIdentity",
        "product": "AxiomID",
        "canonical_manifest": "openidentity.md",
        "languages": ["en", "ar"],
        "text_directions": ["ltr", "rtl"],
        "themes": ["light", "dark"],
        "protocols": PROTOCOLS,
        "services": {"hosting": "How.now", "database": "Ghost Postgres", "fallback_hosting": "Vercel"},
        "safety": {
            "memory": "references-only",
            "growth": "consent-first",
            "do_not_index": ["private memories", "raw chat logs", "secret tokens", "private keys", "identity documents"],
        },
        "documents": docs,
    }


def main() -> None:
    DIST.mkdir(exist_ok=True)
    payload = json.dumps(build(), ensure_ascii=False, indent=2) + "\n"
    OUTPUT.write_text(payload, encoding="utf-8")
    if FRONTEND.exists():
        FRONTEND_INDEX.write_text(payload, encoding="utf-8")
        for filename in ("agentic.md", "agentic.txt"):
            source = ROOT / filename
            if source.exists():
                (FRONTEND / filename).write_text(source.read_text(encoding="utf-8"), encoding="utf-8")
    print(f"Wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
