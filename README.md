# Sarthak Gandhi: personal site (Version 2)

React, TypeScript, Vite and Tailwind. Fonts are self-hosted (no Google Fonts call).

## Edit content
Every word on the site lives in `src/data/profile.ts`. Each fact appears in one place only, so keep it that way when you add something:
- `figures`: scale and quality numbers under the hero
- `strengths` and `roles`: What I bring, Where I fit
- `engagements`: Selected work case notes (money outcomes live here)
- `career`, `leadership`, `mbaWork`, `recognition`, `education`

## Swap the CV
Replace `public/Sarthak_Gandhi_Resume.pdf` with any PDF of the same name.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push to the GitHub repo connected to Vercel. Vercel builds with `npm run build` and serves `dist`.
Once you have a custom domain, add `<meta property="og:url" content="https://your-domain">` to `index.html`.
