This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Node.js **24.22.1**, pinned in `.nvmrc` and `package.json`. With nvm-windows, run `nvm install 24.22.1` and `nvm use 24.22.1`; with POSIX nvm, run `nvm install` and `nvm use` from this directory. Check `node --version` and restart existing development servers after changing Node.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Node security baseline

Node 24.22.1 includes the October 21, 2026 security fixes, including CVE-2026-111497 in the Brotli decoder. Updating application packages alone does not patch Node. Upgrade Node in local development, CI, and any self-hosted runtime, and restart processes using the old runtime. See the [Node.js security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).

No CI workflow is currently configured in this repository. Any future CI should read the Node version from `.nvmrc`.

Vercel manages patch updates for its Node 22.x and 24.x runtimes. Keep this project on the 24.x line there; the major-version setting alone does not verify the patch used by an existing deployment. Check deployment/runtime evidence and Vercel's rollout status before considering production verified. WAF protection does not replace runtime patching. See the [Vercel advisory](https://vercel.com/kb/bulletin/node-js-security-advisory).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
