---
layout: ../../layouts/BaseLayout.astro
title: FolderBot
description: A durable, resumable AI workspace backed by OneDrive for Business. No custom infrastructure required.
---

# FolderBot

> A sub-project of [OpenMaja](/)

**FolderBot** is a durable, resumable AI workspace built entirely on your Microsoft 365 tenant — no custom servers, no infrastructure to manage.

## The problem

Copilot Studio conversations are ephemeral. After 30 minutes of inactivity, 60 minutes of total session duration, or 100 conversation turns, the session resets and context is lost.

FolderBot solves this by giving every session a persistent workspace backed by OneDrive for Business.

## What FolderBot does

Every session gets its own folder in OneDrive containing the agent's state, working memory, active plan, conversation log, and any files it creates. Close the browser, come back the next day, type `/resume` — and the agent picks up exactly where it left off.

## How it works

```
User (M365 Copilot / Teams / web)
        │
        ▼
FolderBot Orchestrator        ← routes sessions, enforces policy
        │
        ▼
FolderBot SessionBot          ← file operations, memory, plan, results
        │
        ▼
Power Automate                ← OneDrive CRUD via standard M365 connectors
        │
        ▼
OneDrive for Business         ← durable workspace (all session state lives here)
```

## Key features

- **Durable sessions** — state, memory, and plan survive Copilot Studio resets; resume any session with `/resume`
- **File operations** — create, read, update, and delete text files (`.md`, `.json`, `.txt`, `.csv`, `.log`, `.xml`, `.drawio`) within your session folder
- **File as context** — drop a file into your session folder and ask the agent to reason over it
- **No custom infrastructure** — built entirely on standard Power Automate connectors; works in any M365 tenant
- **Portable** — no hardcoded tenant IDs, paths, or UPNs; fully configurable per deployment
- **Multi-agent** — Orchestrator + SessionBot split keeps agent instructions lean and routing clean

## Session workspace

Each session is a folder in OneDrive:

```
FolderBot/
  SOUL.md                    ← global behavior rules (customize per tenant)
  sessions/
    20260520-MyProject/
      state.json             ← authoritative session state
      memory.md              ← compact working memory
      plan.md                ← active task plan
      history.jsonl          ← full conversation log
      inputs/                ← user-supplied input files
      outputs/               ← agent-produced output files
```

## Components

| Component | Requires |
|---|---|
| FolderBot | M365 tenant · Copilot Studio · Power Automate |

FolderBot does not require OpenMaja itself. It deploys entirely within standard M365 tooling using native connectors.

## Status

**Initial release** — the Core (text-only) system is feature-complete and tested end-to-end.

[→ View on GitHub](https://github.com/openmaja/openmaja-folderbot)

---

> **Disclaimer:** FolderBot is a hobby project and proof of concept, not intended for production use. If you plan to deploy in a corporate environment, always verify compliance with your organization's IT and security policies.
