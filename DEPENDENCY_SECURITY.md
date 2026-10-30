# Dependency security maintenance

Verified on October 30, 2026 using Node 24.22.1 and pnpm 10.32.1.

Next.js is pinned to 16.4.3. This clears the Next.js advisories shown in
Dependabot alerts #140–147 and #151–162, including the critical vulnerabilities
fixed in 16.4.1. The source-map-js resolution requires at least 1.2.2, clearing
alert #148 across the dependency graph.

The dependency resolutions also update fast-uri to 3.1.9, Zod 4 to at least
4.6.6, and postcss-selector-parser 7 to at least 7.1.6 for additional advisories
reported by the registry audit. Commit package.json and pnpm-lock.yaml together.

## Remaining upstream advisory

The full audit still reports one low-severity development dependency:
`ultracite > deepmerge@4.3.1`,
[GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4).
There is no published patched version. This dependency belongs to the lint
tool and is absent from the production dependency audit. The advisory has not
been suppressed. Recheck upstream releases and update or replace the tooling
when a suitable fix is available.

## Validation

- `corepack pnpm install --frozen-lockfile --offline`: passed.
- `corepack pnpm exec tsc --noEmit`: passed.
- `corepack pnpm build`: passed; all application routes prerendered.
- `corepack pnpm audit --prod`: no known vulnerabilities.
- `corepack pnpm audit`: one low-severity advisory described above.
- `corepack pnpm lint`: fails on existing repository formatting issues;
  unrelated source files were left untouched.

GitHub must rescan the updated default branch before its alerts close.
Redeploy the application to put the patched framework into production.
