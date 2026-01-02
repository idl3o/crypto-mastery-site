# Crypto Mastery

A comprehensive curriculum for mastering cryptocurrency, blockchain, and decentralized finance.

## Features

- 28 in-depth modules across 5 learning phases
- Topics from foundational concepts to cutting-edge research
- Clean, dark-themed reading experience
- Fully static - no backend required

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Import to Vercel at vercel.com/new
3. Vercel auto-detects Next.js and deploys

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Markdown

## Structure

```
crypto-mastery-site/
├── app/                  # Next.js app router
│   ├── [section]/[module]/ # Dynamic module pages
│   ├── layout.tsx
│   └── page.tsx          # Homepage
├── components/           # React components
├── lib/                  # Curriculum data & content
└── public/              # Static assets
```
