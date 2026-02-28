# CLAUDE.md

## Commands
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint (flat config, ESLint 9)

## Architecture
- **Next.js 16** App Router with React 19, TypeScript strict mode
- **Tailwind CSS v4** (PostCSS plugin, no tailwind.config — configured in `app/globals.css`)
- **shadcn/ui** (radix-maia style, stone base color, CSS variables, RSC-first)
- UI components live in `components/ui/`, added via `pnpm dlx shadcn@latest add <component>`
- `cn()` utility at `lib/utils.ts` (clsx + tailwind-merge)
- Icons: lucide-react

## Path Aliases
- `@/*` maps to project root (e.g., `@/components/ui/button`, `@/lib/utils`)

## Skills
- **frontend-design** — use `/frontend-design` for building polished, production-grade UI
- **vercel-react-best-practices** — use `/vercel-react-best-practices` when writing or reviewing React/Next.js code for performance
- Skills are located in `.claude/skills/`

## Conventions
- Use React Server Components by default; add `"use client"` only when needed
- Style with Tailwind utility classes; use `cn()` for conditional/merged classes
- Package manager is **pnpm** — do not use npm or yarn
