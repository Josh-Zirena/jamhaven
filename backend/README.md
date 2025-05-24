# JamHaven Backend Service

This directory contains the **backend API service** for the JamHaven Music/Audio Streaming Platform.

---

## Project Context

This codebase is part of a **monorepo** that includes:

- `/backend` (this folder): Fastify + Node.js backend (API, migrations, jobs)
- `/frontend`: React + Vite frontend app
- `/desktop`: Electron desktop app (optional)
- `/mobile`: Capacitor mobile app (optional)
- `/shared`: (optional) shared code, types, or utilities

**Do not place frontend, desktop, or mobile code in this directory.**  
This folder is strictly for the API, storage, database logic, and related backend scripts/config.

---

## Stack & Conventions

- **Language:** TypeScript (`.ts` only, strict mode)
- **Framework:** Fastify (API server)
- **Database:** SQLite (self-hosted) and Postgres (SaaS), via Knex.js
- **Storage:** Local filesystem (self-hosted) or S3-compatible object storage (SaaS)
- **Auth:** JWT (stateless), with RBAC middleware
- **API Style:** REST (see `backend.md` for endpoints)

All tech choices are enforced in [`/techstack.md`](../techs)
