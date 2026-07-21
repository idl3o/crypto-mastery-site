# Crypto Mastery

*A comprehensive, self-paced curriculum for mastering cryptocurrency, blockchain, and decentralised finance.*

Crypto Mastery is a static learning site that takes you from first principles — what money actually is — through the cryptography, protocols, and financial systems that make crypto work, up to the current research frontier. The material is written to build genuine understanding rather than hype: each module explains *why* a design decision was made, not just *what* it is. It's part of a wider body of work by [S. Lavi](https://github.com/idl3o) exploring the intersection of Web3, AI, and philosophy.

## Curriculum

37 modules across 12 sections, grouped into 5 learning phases that progress from foundations to frontier.

**Phase 1 — Foundations**
- *Foundations* — What Is Money?, The Double-Spend Problem, Game Theory & Incentives, Trust & Decentralisation
- *Cryptography Essentials* — Hash Functions, Public-Key Cryptography, Merkle Trees
- *Economics of Money* — History of Money, Monetary Policy, Sound Money Principles

**Phase 2 — Core Protocols**
- *Blockchain Fundamentals* — Distributed Systems, Consensus Mechanisms, Forks & Upgrades
- *Bitcoin Deep Dive* — The Whitepaper, UTXO Model, Bitcoin Script, Mining Economics, Lightning Network
- *Ethereum & Smart Contracts* — Ethereum Overview, EVM Deep Dive, Solidity Fundamentals, ERC Standards

**Phase 3 — Financial Systems**
- *DeFi* — DeFi Primitives, AMMs & Liquidity, Lending & Borrowing, Stablecoins
- *Trading & Markets* — Market Structure, Technical Analysis, MEV & Trading Dynamics

**Phase 4 — Advanced Topics**
- *Advanced Protocols* — Layer 2 Scaling, Zero-Knowledge Proofs, Interoperability
- *Security* — Smart Contract Security, Famous Hacks
- *Building* — Development Setup, Your First dApp

**Phase 5 — Frontier**
- *Research Frontier* — Current Research

## Tech stack

- **Next.js** (App Router) with static export
- **TypeScript**
- **Tailwind CSS**
- **react-markdown** with **remark-gfm** and **gray-matter** for rendering module content

The site is fully static — no backend required — with a clean, dark-themed reading experience.

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build a production (static) export
npm run build
```

Other scripts: `npm start` (serve a production build) and `npm run lint`.

## Live site

Deployed to GitHub Pages via a GitHub Actions workflow on every push to `main`:

**https://idl3o.github.io/crypto-mastery-site/**

## Status

Actively developed. The full curriculum structure is in place and the modules are written out as long-form content, rendered directly from the site's content library. Expect ongoing additions and refinements — the Research Frontier phase in particular is intended to grow over time.

## Related

- [derivation-of-value](https://github.com/idl3o/derivation-of-value)
- [vectorised-money](https://github.com/idl3o/vectorised-money)

## Licence

Released under the [MIT Licence](LICENSE).

---

Built by [S. Lavi](https://github.com/idl3o) · [@modsias](https://x.com/modsias)
