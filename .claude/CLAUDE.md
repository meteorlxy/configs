# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Monorepo of shared configuration packages (`@meteorlxy/eslint-config`, `@meteorlxy/prettier-config`, `@meteorlxy/oxfmt-config`, `@meteorlxy/tsconfig`) managed with pnpm workspaces and Lerna Lite.

## Commands

```bash
pnpm build              # Build all packages
pnpm lint               # Lint and format check
pnpm format             # Auto-format
pnpm check-types        # TypeScript type checking
pnpm check-rules        # Check ESLint rules coverage (eslint-config package only)
pnpm clean              # Remove dist folders across all packages
pnpm release            # Full release: clean, build, lint, check-types, then version bump
```

## Architecture

### Packages

- **`packages/eslint-config`** - ESLint flat config factory. The main export is the `meteorlxy()` async function (in `src/meteorlxy.ts`) which composes config arrays from modular configs (`src/configs/`) using rule sets (`src/rules/`). Supports optional toggles for TypeScript, React, Vue, Markdown, JSONC. Built with `tsdown` to dual CJS/ESM.
- **`packages/prettier-config`** - Single Prettier config object. Built with `tsdown` to dual CJS/ESM.
- **`packages/oxfmt-config`** - Oxfmt formatter config. Built with `tsdown` to dual CJS/ESM.
- **`packages/tsconfig`** - Pure JSON tsconfig files (`base.json`, `strict.json`, `nestjs.json`). No build step.
- **`test/`** - Private workspace that consumes all three packages for integration validation.

### Dependency Versioning

Shared dependency versions are managed via `pnpm-workspace.yaml` catalogs. Use `catalog:` protocol in package.json instead of hardcoding versions.
