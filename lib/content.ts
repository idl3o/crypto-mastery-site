// Content map - generated from markdown files
// Each key is "section/module" and value is the markdown content

export const contentMap: Record<string, string> = {
  "00-foundations/01-what-is-money": `# What Is Money?

*Module 1 of Foundations*

---

## Why This Matters

Before we can understand cryptocurrency, we need to understand money itself. This isn't as obvious as it seems. Ask ten people "what is money?" and you'll get ten different answers - most of them incomplete.

Understanding money deeply will help you:
- Evaluate whether Bitcoin/crypto "is real money"
- Understand why certain design decisions were made
- Recognize what problems crypto is actually solving
- Think clearly about monetary policy debates

---

## The Origin Story: Before Money

Imagine you're a farmer with extra wheat. You need shoes. The shoemaker needs meat, not wheat. The butcher needs tools. The toolmaker needs... wheat!

This is the **coincidence of wants problem**. For barter to work, you need to find someone who:
1. Has what you want
2. Wants what you have
3. At the same time
4. In the right quantities

This is incredibly inefficient. Anthropologists estimate barter economies severely limited trade and specialization.

---

## Money as a Solution

Money solves this by being an **intermediary good** - something everyone accepts, not because they want it directly, but because they know others will accept it.

Now the farmer can:
1. Sell wheat → get money
2. Use money → buy shoes

The shoemaker doesn't need to want wheat. They just need to want money (which everyone does, because everyone accepts it).

### Key Insight
> Money's value comes from a **coordination game**. It works because everyone believes everyone else will accept it. This is a self-fulfilling belief.

---

## The Three Functions of Money

Economists identify three core functions:

### 1. Medium of Exchange
Money is what you use to buy things. This is the "solve the barter problem" function.

**Requirements:**
- Widely accepted
- Easy to transact with
- Divisible (can make change)

### 2. Store of Value
Money lets you save purchasing power for later. Earn today, spend tomorrow.

**Requirements:**
- Doesn't decay or spoil
- Maintains value over time
- Scarcity (can't be created arbitrarily)

### 3. Unit of Account
Money is how we measure and compare value. "This costs $50" is meaningful because we price everything in dollars.

**Requirements:**
- Stable value (so prices are meaningful)
- Widely understood
- Divisible into standard units

### The Tension
These three functions can conflict:
- A volatile asset might be a great store of value long-term but terrible unit of account
- Something widely accepted (medium of exchange) might inflate away (poor store of value)

*Bitcoin enthusiasts and critics often talk past each other because they weight these functions differently.*

---

## Properties of Good Money

Throughout history, certain things have been used as money: shells, beads, salt, cattle, precious metals, paper, digital entries. What makes something *good* money?

### 1. Scarcity
Cannot be easily created. If anyone could make more, it would lose value.
- Gold: Hard to mine
- Dollars: Controlled by Federal Reserve
- Bitcoin: Capped at 21 million, enforced by code

### 2. Durability
Doesn't decay, break, or spoil.
- Cattle: Poor (they die)
- Gold: Excellent (lasts forever)
- Digital: Perfect (information doesn't decay)

### 3. Divisibility
Can be split into smaller units for small purchases.
- Real estate: Poor (can't buy coffee with 0.00001 houses)
- Gold: Good (can be divided, though impractical)
- Bitcoin: Excellent (divisible to 8 decimal places)

### 4. Portability
Easy to move and transport.
- Gold: Poor for large amounts
- Paper money: Good
- Digital: Excellent

### 5. Fungibility
Each unit is interchangeable with any other.
- Diamonds: Poor (each is unique)
- Dollars: Excellent (any dollar equals any other dollar)
- Bitcoin: Mostly good (but blockchain history creates some complications)

### 6. Verifiability
Easy to confirm it's real, not counterfeit.
- Gold: Moderate (requires expertise/testing)
- Paper: Moderate (counterfeit detection)
- Bitcoin: Excellent (cryptographically verifiable)

---

## The Evolution of Money

### Stage 1: Commodity Money
The money *is* the valuable thing.
- Examples: Gold, silver, salt, shells
- Advantage: Intrinsic value
- Disadvantage: Heavy, hard to transport and divide

### Stage 2: Representative Money
Paper that represents a claim on something valuable.
- Examples: Gold-backed dollars (pre-1971)
- Advantage: Portable, divisible
- Disadvantage: Requires trust in the issuer

### Stage 3: Fiat Money
Money by government decree, backed by nothing physical.
- Examples: Modern USD, EUR, all major currencies
- Advantage: Flexible monetary policy
- Disadvantage: Can be inflated, requires trust in government

### Stage 4: Digital/Crypto Money (?)
Money as pure information, governed by code.
- Examples: Bitcoin, Ethereum
- Advantage: Programmable, trustless, borderless
- Disadvantage: Volatility, complexity, adoption challenges

---

## The Trust Problem

All money systems require trust somewhere:

| Money Type | Trust Required |
|------------|---------------|
| Gold | Trust that gold will remain valuable |
| Fiat | Trust that government won't over-print |
| Bank deposits | Trust that bank won't fail |
| Bitcoin | Trust in mathematics and code |

### The Bitcoin Proposition
Bitcoin's innovation wasn't eliminating trust entirely - it was **changing what you need to trust**:
- Instead of trusting people/institutions → trust mathematics
- Instead of trusting promises → trust code that executes deterministically
- Instead of trusting a single party → trust a decentralized network

Whether this is "better" depends on your beliefs about math vs institutions.

---

## Why Digital Money Is Hard

This is crucial to understand before we discuss blockchain.

### Physical money solves double-spending automatically
If I hand you a $20 bill, I no longer have it. The physical nature prevents me from spending it twice.

### Digital information can be copied infinitely
If I send you a digital file, I still have a copy. What stops me from sending the same "digital dollar" to ten different people?

### Pre-Bitcoin solutions required trusted intermediaries
- Banks maintain ledgers saying who owns what
- When you "send" money, the bank updates its database
- The bank prevents double-spending by being the single source of truth

### The problem with intermediaries
- Single point of failure
- Can censor transactions
- Can be hacked
- Can be pressured by governments
- Charge fees
- Require permission to use

### The Bitcoin question
> Can we create digital money that prevents double-spending WITHOUT a trusted intermediary?

This is what Satoshi Nakamoto solved in 2008. Understanding why this was hard and how it was solved is the key to understanding blockchain.

---

## Key Takeaways

1. **Money is a coordination game** - it works because we all agree it works
2. **Money has three functions** - medium of exchange, store of value, unit of account
3. **Good money has specific properties** - scarcity, durability, divisibility, portability, fungibility, verifiability
4. **All money requires trust** - the question is *what* you're trusting
5. **Digital money has unique challenges** - specifically, the double-spend problem
6. **Bitcoin's innovation** was solving double-spend without trusted intermediaries

---

## Questions to Consider

Before moving on, think about:

1. Is your national currency good money? How does it score on each property?
2. Why do you think gold was used as money for thousands of years?
3. What are the tradeoffs between trusting institutions vs trusting code?
4. Can you think of situations where double-spending actually happens today?
`,

  "00-foundations/02-the-double-spend-problem": `# The Double-Spend Problem

*Module 2 of Foundations*

---

## The Core Challenge

The double-spend problem is **the** fundamental challenge of digital money. Understanding it deeply is essential - it's the problem that Bitcoin was specifically designed to solve.

> **Double-spending**: Using the same digital money more than once.

This sounds simple, but solving it without a central authority was considered impossible for decades.

---

## Why Physical Money Doesn't Have This Problem

When you hand someone a $20 bill:
1. The bill physically leaves your possession
2. It enters their possession
3. You cannot spend that same bill again

Physics enforces this. No trust required. No verification needed beyond confirming the bill is real.

---

## Why Digital Money Has This Problem

Digital information is fundamentally different:

\`\`\`
Physical: If I give you my apple, I no longer have an apple.
Digital:  If I give you my file, we both have the file.
\`\`\`

A "digital dollar" is just data - a string of bits. Data can be:
- Copied perfectly and infinitely
- Sent to multiple recipients simultaneously
- Stored in multiple places at once

### The Attack

Imagine digital cash as a file that says "This is worth $100, owned by Alice."

1. Alice sends the file to Bob (buying something)
2. Alice sends the **same file** to Carol (buying something else)
3. Alice sends it to Dave, Eve, and Frank too

Without some mechanism to prevent this, digital money is worthless.

---

## Traditional Solutions: Trusted Third Parties

Before Bitcoin, every digital payment system solved double-spending the same way: **a central authority that maintains the "truth."**

### How Banks Solve It

\`\`\`
Alice's Account: $1000
Bob's Account:   $500

Alice wants to pay Bob $100:
1. Alice tells bank "send $100 to Bob"
2. Bank checks: Does Alice have $100? Yes.
3. Bank updates its ledger:
   - Alice's Account: $900
   - Bob's Account:   $600
4. Transaction complete
\`\`\`

The bank's ledger is the single source of truth. Alice can't double-spend because the bank won't allow it.

### The Problem with Trusted Third Parties

Central authorities create vulnerabilities:

1. **Single Point of Failure** - Server goes down → no transactions
2. **Censorship** - Can freeze accounts or block transactions
3. **Privacy** - Sees all your transactions
4. **Fees and Friction** - Charges for services
5. **Trust Requirements** - Must trust they won't steal

### The Bitcoin Question

> Can we create digital money that prevents double-spending WITHOUT a trusted intermediary?

This is what Satoshi Nakamoto solved in 2008.

---

## Key Takeaways

1. **Double-spending is the core problem** of digital money
2. **Traditional solutions use trusted intermediaries** - banks, payment processors
3. **Trusted intermediaries have serious drawbacks** - censorship, surveillance, fees
4. **Decentralized consensus was thought impossible** - the Byzantine Generals Problem
5. **Bitcoin found a practical solution** by combining cryptography, game theory, and economics
`,

  "00-foundations/03-game-theory-incentives": `# Game Theory and Incentives

*Module 3 of Foundations*

---

## Why This Matters

Blockchain systems don't work because participants are good people. They work because **being honest is more profitable than cheating**.

This is the magic of mechanism design: creating systems where self-interested actors naturally behave in ways that benefit everyone.

---

## Core Concepts

### Game Theory Basics

**Game theory** studies strategic decision-making - situations where your outcome depends on others' choices, and theirs depends on yours.

Key elements:
- **Players**: Decision makers
- **Strategies**: Available choices
- **Payoffs**: Outcomes for each combination of strategies
- **Equilibrium**: Stable states where no one wants to change

### Rational Actors

Game theory assumes **rational actors** - entities that:
- Have preferences
- Act to maximize their outcomes
- Have consistent beliefs

> In crypto, we don't trust people to be good. We design systems where being good is the best strategy.

---

## The Prisoner's Dilemma

The most famous game theory example, crucial for understanding cooperation problems.

Both players have dominant strategy to defect, even though mutual cooperation is better.

**Why This Matters for Crypto**: Many situations look like prisoner's dilemmas. Blockchain systems must be designed so cooperation is the dominant strategy.

---

## Nash Equilibrium

A stable state where no player benefits from changing strategy (assuming others don't change).

### Example: Mining

Consider Bitcoin mining:
- Honest mining → Receive block rewards
- Cheating → Blocks rejected, wasted electricity, no reward

Honest behavior is a Nash Equilibrium because no individual miner benefits from deviating.

---

## Key Crypto Incentive Mechanisms

### 1. Block Rewards
Pay miners with new coins for honest validation.

### 2. Transaction Fees
Users pay for transaction inclusion, creating a market.

### 3. Slashing (Proof of Stake)
Validators lose stake for misbehavior, making attacks expensive.

---

## Key Takeaways

1. **Don't trust, verify - and incentivize**: Blockchain security comes from making honesty profitable
2. **Nash Equilibrium is the goal**: Design systems where following rules is everyone's best strategy
3. **Mechanism design is the art**: Creating rules that produce desired outcomes from self-interested actors
4. **Economic security, not perfect security**: Attacks aren't impossible, just economically irrational
`,

  "00-foundations/04-trust-decentralization": `# Trust and Decentralization

*Module 4 of Foundations*

---

## The Central Question

"Decentralization" is crypto's most used and abused word. Everyone claims to be decentralized. Few can define what it means or why it matters.

---

## What Is Decentralization?

**Decentralization** is the distribution of power, control, and points of failure across many independent parties.

It's a **spectrum**, not a binary. Nothing is perfectly centralized or decentralized.

### Three Axes of Decentralization

1. **Architectural Decentralization**: How many physical computers make up the system?
2. **Political Decentralization**: How many individuals/organizations control those computers?
3. **Logical Decentralization**: Does the system behave as one unit or many?

---

## Why Decentralization Matters

1. **Censorship Resistance**: No single party can block transactions
2. **Fault Tolerance**: No single point of failure
3. **Collusion Resistance**: Harder for participants to coordinate harm
4. **Capture Resistance**: Harder for external forces to control
5. **Neutrality**: No privileged parties, uniform rules

---

## The Trust Spectrum

"Trustless" is misleading. All systems require some trust. The question is: **who/what do you trust, and how much?**

| Money Type | Trust Required |
|------------|---------------|
| Gold | Trust that gold will remain valuable |
| Fiat | Trust that government won't over-print |
| Bank deposits | Trust that bank won't fail |
| Bitcoin | Trust in mathematics and code |

---

## Measuring Decentralization

### The Nakamoto Coefficient

The minimum number of entities required to compromise a critical system component.

**Higher is better** - more entities must collude to attack.

---

## Key Takeaways

1. **Decentralization is a spectrum**, not binary
2. **Three types**: Architectural, political, logical
3. **"Trustless" is a misnomer** - systems minimize trust, not eliminate it
4. **Measure with Nakamoto Coefficient** and analyze all components
5. **Tradeoffs are real** - more decentralization often means less efficiency
`,

  // Continue with more content entries...
  "01-cryptography/01-hash-functions": `# Hash Functions

*Module 1 of Cryptography*

---

## What Is a Hash Function?

A **hash function** takes any input and produces a fixed-size output (the "hash" or "digest").

\`\`\`
Input (any size)  →  Hash Function  →  Output (fixed size)

"Hello"           →     SHA-256     →  "185f8db32271fe25f561a6fc938b2e26..."
"Hello World"     →     SHA-256     →  "a591a6d40bf420404a011733cfb7b190..."
War and Peace     →     SHA-256     →  "2c5d36be542f8f0e2ff4e801e9749966..."
\`\`\`

No matter if input is 5 characters or 5 million, output is always the same size.

---

## Properties of Cryptographic Hash Functions

### 1. Deterministic
Same input **always** produces same output.

### 2. One-Way (Pre-image Resistance)
Given a hash, you can't figure out the input.

### 3. Avalanche Effect
Tiny input change → completely different output.

### 4. Collision Resistance
Practically impossible to find two different inputs with the same hash.

---

## Why These Properties Matter for Blockchain

- **One-Way**: Proof of Work mining
- **Deterministic**: Anyone can verify work instantly
- **Avalanche Effect**: Tamper evidence
- **Collision Resistance**: Unique identifiers

---

## Common Hash Functions

| Function | Output Size | Used By |
|----------|-------------|---------|
| SHA-256 | 256 bits | Bitcoin |
| Keccak-256 | 256 bits | Ethereum |
| RIPEMD-160 | 160 bits | Bitcoin addresses |

---

## Key Takeaways

1. Hash functions compress arbitrary input to fixed output
2. Cryptographic hashes are one-way, deterministic, with avalanche effect
3. Blockchain uses hashes everywhere: block IDs, transaction IDs, addresses, mining
`,

  "01-cryptography/02-public-key-cryptography": `# Public-Key Cryptography

*Module 2 of Cryptography*

---

## The Key Exchange Problem

Before public-key cryptography, secure communication required sharing a secret key through a secure channel.

**The paradox**: To communicate securely, you need to share a key securely. But if you had a secure channel, why do you need encryption?

---

## The Breakthrough: Asymmetric Cryptography

**Key pair**:
- **Public key**: Share with everyone
- **Private key**: Keep absolutely secret

**Magical property**:
- What one key encrypts, only the other can decrypt
- Knowing the public key doesn't reveal the private key

---

## Digital Signatures

Signatures prove:
1. **Authentication**: The message came from the key owner
2. **Integrity**: The message wasn't modified
3. **Non-repudiation**: The signer can't deny signing

### How It Works

**Signing** (with private key):
\`\`\`
signature = sign(message, private_key)
\`\`\`

**Verification** (with public key):
\`\`\`
valid = verify(message, signature, public_key)
\`\`\`

---

## Key Takeaways

1. Public-key crypto uses key pairs: Public (share freely) + Private (keep secret)
2. Private key = Identity: Whoever has it controls the funds
3. Digital signatures prove ownership without revealing the private key
4. Key management is critical: You are your own bank
`,

  "01-cryptography/03-merkle-trees": `# Merkle Trees

*Module 3 of Cryptography*

---

## What Is a Merkle Tree?

A **Merkle tree** (or hash tree) is a data structure where:
- Leaf nodes contain hashes of data items
- Parent nodes contain hashes of their children
- The root hash commits to ALL data below

\`\`\`
                    Root Hash
                   /          \\
            Hash AB            Hash CD
           /      \\           /      \\
       Hash A    Hash B   Hash C    Hash D
          |         |        |         |
        Tx A      Tx B     Tx C      Tx D
\`\`\`

---

## The Power: Merkle Proofs

To prove Transaction C is in the block, you don't need all transactions.

**You need**:
1. Hash C
2. Hash D (sibling)
3. Hash AB (uncle)

For N transactions:
- **Without Merkle tree**: Need all N transactions
- **With Merkle tree**: Need only log₂(N) hashes

---

## Key Takeaways

1. Merkle trees commit to data with a single hash (the root)
2. Proofs are logarithmic - verify one item without all data
3. Bitcoin uses Merkle trees for transaction lists
4. Ethereum uses Merkle Patricia Tries for key-value state
`,

  // Add placeholder entries for remaining modules
  "02-economics-of-money/01-history-of-money": `# The History of Money

*Module 1 of Economics of Money*

Understanding money's evolution reveals what problems money solves, why certain forms succeeded or failed, and where cryptocurrency fits in the arc of history.

## Key Stages

1. **Commodity Money** (Gold, silver, salt)
2. **Representative Money** (Gold-backed paper)
3. **Fiat Money** (Government decree, since 1971)
4. **Digital/Crypto Money** (Bitcoin, 2009+)

Each transition enabled new capabilities while introducing new tradeoffs.
`,

  "02-economics-of-money/02-monetary-policy": `# Monetary Policy and Central Banking

*Module 2 of Economics of Money*

To understand why Bitcoin was created, you must understand what it's an alternative to.

## Key Concepts

- **Money creation**: Most money is created by banks through lending
- **Interest rates**: Central bank's primary tool
- **Quantitative Easing**: Emergency money creation
- **The Cantillon Effect**: Who benefits from new money first
`,

  "02-economics-of-money/03-sound-money": `# Sound Money Principles

*Module 3 of Economics of Money*

**Sound money** is money that:
- Maintains purchasing power over time
- Cannot be arbitrarily created or debased
- Is chosen by the market, not imposed by force

## Key Properties

1. **Scarcity** - Hard to produce
2. **Durability** - Doesn't decay
3. **Verifiability** - Easy to authenticate
4. **Portability** - Easy to move
5. **Divisibility** - Can split for small transactions
6. **Fungibility** - Units are interchangeable
`,

  "03-blockchain-fundamentals/01-distributed-systems": `# Distributed Systems Basics

*Module 1 of Blockchain Fundamentals*

A **distributed system** is a collection of independent computers that appear to users as a single coherent system.

## Core Challenges

1. **Partial Failures** - Some parts fail while others work
2. **Unreliable Networks** - Messages can be lost, delayed, duplicated
3. **No Global Clock** - Each computer has its own clock
4. **Consistency vs. Availability** - The CAP theorem tradeoff
`,

  "03-blockchain-fundamentals/02-consensus-mechanisms": `# Consensus Mechanisms

*Module 2 of Blockchain Fundamentals*

## Proof of Work (PoW)

Miners compete to solve computational puzzles. Energy expenditure proves commitment.

## Proof of Stake (PoS)

Validators stake cryptocurrency as collateral. Capital at risk ensures honest behavior.

| Property | PoW | PoS |
|----------|-----|-----|
| Energy | High | Low |
| Sybil Resistance | Compute | Capital |
| Finality | Probabilistic | Economic/Deterministic |
`,

  "03-blockchain-fundamentals/03-forks-upgrades": `# Forks and Upgrades

*Module 3 of Blockchain Fundamentals*

## Types of Forks

1. **Temporary forks**: Normal operation, quickly resolved
2. **Soft forks**: Backward-compatible upgrades
3. **Hard forks**: Non-backward-compatible changes
4. **Contentious forks**: Community splits (e.g., BTC/BCH)
`,

  "04-bitcoin/01-bitcoin-whitepaper": `# The Bitcoin Whitepaper

*Module 1 of Bitcoin Deep Dive*

On October 31, 2008, Satoshi Nakamoto published "Bitcoin: A Peer-to-Peer Electronic Cash System" - 9 pages that launched a trillion-dollar industry.

## Key Innovations

1. Proof-of-Work for Sybil resistance
2. Blockchain for ordering
3. Economic incentives for honesty
4. Digital scarcity (21 million cap)
`,

  "04-bitcoin/02-utxo-model": `# The UTXO Model

*Module 2 of Bitcoin Deep Dive*

**UTXO** = Unspent Transaction Output

Bitcoin doesn't track "balances." It tracks unspent outputs from previous transactions. Your "balance" is the sum of all UTXOs you can spend.
`,

  "04-bitcoin/03-bitcoin-script": `# Bitcoin Script

*Module 3 of Bitcoin Deep Dive*

Bitcoin Script is a simple, stack-based programming language that defines spending conditions for UTXOs.

It's intentionally limited:
- Not Turing-complete
- No loops
- Deterministic execution
`,

  "04-bitcoin/04-mining-economics": `# Mining Economics

*Module 4 of Bitcoin Deep Dive*

Mining is the process of:
1. Collecting transactions
2. Building blocks
3. Finding valid proof-of-work
4. Earning rewards

It's a competitive business with thin margins.
`,

  "04-bitcoin/05-lightning-network": `# The Lightning Network

*Module 5 of Bitcoin Deep Dive*

The Lightning Network is Bitcoin's Layer 2 scaling solution:
- Payment channels for off-chain transactions
- Inherit Bitcoin security
- Near-instant, low-fee payments
`,

  "05-ethereum-smart-contracts/01-ethereum-overview": `# Ethereum Overview

*Module 1 of Ethereum & Smart Contracts*

Ethereum is a **decentralized computing platform** that runs smart contracts.

**Bitcoin's vision**: Decentralized money
**Ethereum's vision**: Decentralized computation
`,

  "05-ethereum-smart-contracts/02-evm-deep-dive": `# The EVM Deep Dive

*Module 2 of Ethereum & Smart Contracts*

The **Ethereum Virtual Machine** is:
- A stack-based virtual machine
- Deterministic execution environment
- The "CPU" of Ethereum's world computer
`,

  "05-ethereum-smart-contracts/03-solidity-fundamentals": `# Solidity Fundamentals

*Module 3 of Ethereum & Smart Contracts*

Solidity is the primary language for Ethereum smart contracts:
- Statically typed
- Object-oriented
- Compiles to EVM bytecode
`,

  "05-ethereum-smart-contracts/04-erc-standards": `# ERC Standards

*Module 4 of Ethereum & Smart Contracts*

**ERC** = Ethereum Request for Comments

Key standards:
- **ERC-20**: Fungible tokens
- **ERC-721**: NFTs
- **ERC-1155**: Multi-token
- **ERC-4626**: Tokenized vaults
`,

  "06-defi/01-defi-primitives": `# DeFi Primitives

*Module 1 of DeFi*

**DeFi** = Decentralized Finance

Financial services built on blockchain without traditional intermediaries.

## Building Blocks

1. Stablecoins
2. DEXs
3. Lending protocols
4. Derivatives
5. Yield aggregators
`,

  "06-defi/02-amms-liquidity": `# AMMs and Liquidity

*Module 2 of DeFi*

**Automated Market Makers** replace order books with liquidity pools and mathematical pricing.

## Constant Product Formula

**x * y = k**

The product of reserves stays constant, determining price automatically.
`,

  "06-defi/03-lending-borrowing": `# Lending and Borrowing

*Module 3 of DeFi*

DeFi lending works through:
1. Over-collateralization
2. Algorithmic interest rates
3. Automated liquidations
4. Permissionless access
`,

  "06-defi/04-stablecoins": `# Stablecoins Deep Dive

*Module 4 of DeFi*

## Types

1. **Fiat-backed**: USDC, USDT
2. **Crypto-backed**: DAI
3. **Algorithmic**: FRAX (partially)

Each with different trust assumptions and risks.
`,

  "07-trading-markets/01-market-structure": `# Market Structure

*Module 1 of Trading & Markets*

Crypto markets operate differently:
- 24/7/365 trading
- Global, fragmented liquidity
- Mix of CEX and DEX
- Less regulation
- Higher volatility
`,

  "07-trading-markets/02-technical-analysis": `# Technical Analysis

*Module 2 of Trading & Markets*

**Technical Analysis (TA)** studies price and volume to predict future movements.

Core belief: Price patterns repeat because human behavior repeats.
`,

  "07-trading-markets/03-mev-trading": `# MEV and Trading Dynamics

*Module 3 of Trading & Markets*

**MEV** = Maximal Extractable Value

The value that can be extracted by reordering, inserting, or censoring transactions within a block.
`,

  "08-advanced-protocols/01-layer2-scaling": `# Layer 2 Scaling

*Module 1 of Advanced Protocols*

L2s scale by:
1. Execute transactions off-chain
2. Post proof/data to L1
3. Inherit L1 security

## Types

- **Optimistic Rollups**: Assume valid, challenge if fraud
- **ZK Rollups**: Prove validity mathematically
`,

  "08-advanced-protocols/02-zero-knowledge": `# Zero-Knowledge Proofs

*Module 2 of Advanced Protocols*

A **zero-knowledge proof (ZKP)** lets you prove you know something without revealing it.

## Key Systems

- **ZK-SNARKs**: Small proofs, trusted setup
- **ZK-STARKs**: Larger proofs, no trusted setup
`,

  "08-advanced-protocols/03-interoperability": `# Interoperability and Bridges

*Module 3 of Advanced Protocols*

Bridges connect isolated chains but are high-risk targets.

## Trust Models

From most to least trustless:
1. ZK light client proofs
2. Optimistic with fraud proofs
3. Honest majority light client
4. Multisig
5. Single custodian
`,

  "09-security/01-smart-contract-security": `# Smart Contract Security

*Module 1 of Security*

In crypto, **code is money**. Bugs don't just crash programs—they lose millions.

## Common Vulnerabilities

1. Reentrancy
2. Access control
3. Oracle manipulation
4. Integer overflow
5. Front-running
`,

  "09-security/02-famous-hacks": `# Famous Hacks Analysis

*Module 2 of Security*

Learning from history:

| Hack | Year | Loss | Cause |
|------|------|------|-------|
| The DAO | 2016 | $60M | Reentrancy |
| Ronin | 2022 | $625M | Compromised validators |
| Wormhole | 2022 | $320M | Signature bypass |
`,

  "10-building/01-development-setup": `# Development Setup

*Module 1 of Building*

## Core Tools

- **Foundry**: Modern, fast, Rust-based
- **Hardhat**: JavaScript-based, plugin ecosystem
- **OpenZeppelin**: Battle-tested contracts
`,

  "10-building/02-first-dapp": `# Building Your First dApp

*Module 2 of Building*

A complete decentralized application:
1. Smart contract (Solidity)
2. Frontend (React + ethers.js)
3. Deployment (testnet)
4. Verification (Etherscan)
`,

  "11-research-frontier/01-current-research": `# Current Research Frontiers

*Module 1 of Research Frontier*

Active research areas:

1. **Scaling**: Data availability sampling, full danksharding
2. **MEV**: Encrypted mempools, MEV-share
3. **Account Abstraction**: Smart contract wallets
4. **Privacy**: FHE, private state
5. **Cross-chain**: Shared sequencing, ZK bridges
6. **AI x Crypto**: Decentralized compute, verifiable ML
`,
};
