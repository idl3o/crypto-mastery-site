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

---

## Why Study Money's History?

Understanding money's evolution reveals:
- What problems money solves
- Why certain forms succeeded or failed
- Where cryptocurrency fits in the arc of history
- Patterns that predict what comes next

> "Those who cannot remember the past are condemned to repeat it." — George Santayana

---

## Stage 1: Commodity Money (Prehistory - 1800s)

### What It Is
Money that **is** the valuable thing itself. The monetary medium has intrinsic value.

### Examples Throughout History

| Commodity | Region/Era | Why It Worked |
|-----------|------------|---------------|
| Cowrie shells | Africa, Asia, Pacific | Scarce, durable, portable |
| Salt | Roman Empire | Essential, divisible ("salary" from *salarium*) |
| Cattle | Ancient cultures | Valuable, but poor divisibility |
| Wampum beads | Native Americans | Labor-intensive to create |
| Tobacco | Colonial America | Useful commodity, widely valued |
| Gold/Silver | Global | Best overall monetary properties |

### Why Gold Won

Gold emerged as the dominant commodity money because it excels on all properties:

- **Scarcity**: Can't be synthesized; mining is expensive
- **Durability**: Doesn't rust, corrode, or decay
- **Divisibility**: Can be melted and divided precisely
- **Portability**: High value-to-weight ratio
- **Fungibility**: Pure gold is identical everywhere
- **Verifiability**: Density and softness tests

### The Problem

Physical gold has limitations:
- Heavy for large transactions
- Risky to transport
- Requires verification expertise
- Can be clipped or adulterated

---

## Stage 2: Representative Money (1700s - 1971)

### What It Is
Paper or tokens that **represent** a claim on something valuable (usually gold).

### How It Evolved

**1. Goldsmith Notes (1600s)**
- Goldsmiths stored gold and issued receipts
- Receipts began circulating as money
- Easier than carrying gold

**2. Bank Notes**
- Banks issued notes "payable in gold on demand"
- Notes traded at face value if bank was trusted
- Birth of fractional reserve banking

**3. The Gold Standard**
- Governments standardized gold-backed currency
- Fixed exchange rate: $20.67 = 1 oz gold (US, 1834-1933)
- International trade settled in gold

### The Classical Gold Standard (1870-1914)

**How it worked:**
- Major currencies fixed to gold
- Free gold movement between countries
- Automatic balance of payments adjustment

**Benefits:**
- Price stability over long periods
- Discipline on government spending
- Predictable exchange rates

**Drawbacks:**
- Deflationary pressure during growth
- Gold supply determined money supply
- Countries couldn't respond to crises flexibly

### The Breakdown

**World War I (1914)**
- Countries suspended gold convertibility to finance war
- Printed money without gold backing

**Bretton Woods (1944-1971)**
- US dollar backed by gold at $35/oz
- Other currencies pegged to dollar
- Only central banks could redeem dollars for gold

**Nixon Shock (August 15, 1971)**
- Nixon "temporarily" suspended gold convertibility
- Never restored
- Birth of pure fiat money

---

## Stage 3: Fiat Money (1971 - Present)

### What It Is
Money by government **decree** (fiat = "let it be done" in Latin). No physical backing.

### How It Works

Fiat money has value because:
1. Government declares it legal tender
2. Taxes must be paid in it
3. Everyone accepts it (network effect)
4. Central bank manages supply

### The Great Experiment

We're only ~50 years into pure fiat. Historical perspective:

| Currency | Lifespan | Fate |
|----------|----------|------|
| Roman Denarius | ~500 years | Debased to worthlessness |
| French Assignat | 7 years | Hyperinflation |
| German Papiermark | 4 years | Hyperinflation (1923) |
| Zimbabwe Dollar | 29 years | Hyperinflation (2009) |
| Venezuelan Bolivar | Ongoing | Hyperinflation |
| US Dollar | 53 years (fiat) | Lost 85%+ purchasing power |

### Fiat Advantages

- **Flexible monetary policy**: Respond to crises
- **Elastic supply**: Grow with economy
- **No deflation constraint**: Not limited by gold mining
- **Crisis response**: Lender of last resort

### Fiat Risks

- **Inflation**: Purchasing power erosion
- **Political temptation**: Print to fund spending
- **Currency crises**: Loss of confidence
- **Moral hazard**: Bailouts encourage risk-taking
- **Wealth redistribution**: Cantillon effects

---

## Stage 4: Digital/Crypto Money (2009 - Future)

### The Bitcoin Innovation

Bitcoin introduced something new: **digital scarcity without a trusted party**.

| Property | Gold | Fiat | Bitcoin |
|----------|------|------|---------|
| Scarcity | Natural | Political | Mathematical |
| Portability | Poor | Good | Excellent |
| Verifiability | Moderate | Moderate | Perfect |
| Divisibility | Physical limits | Cents | 8 decimals |
| Seizure resistance | Poor | Poor | High |
| Censorship resistance | Moderate | None | High |

### Where We Are

- **2009**: Bitcoin launched
- **2015**: Ethereum enables programmable money
- **2020s**: Institutional adoption begins
- **Future**: Uncertain but transformative

---

## Patterns in Monetary History

### 1. The Debasement Cycle
Governments consistently debase currency to fund spending:
- Roman emperors reduced silver content
- Kings clipped coins
- Central banks print money

### 2. Gresham's Law
"Bad money drives out good" — people hoard good money and spend bad money.

### 3. Technology Enables Transitions
- Metallurgy → standardized coins
- Printing → paper money
- Telegraph → wire transfers
- Internet → digital payments
- Cryptography → cryptocurrency

### 4. Trust Eventually Breaks
Every monetary system based on human promises eventually fails when incentives misalign.

---

## Key Takeaways

1. **Money evolves** to solve problems of its era
2. **Gold dominated** because of superior properties, not arbitrary choice
3. **Fiat is an experiment** — 50 years is short in monetary history
4. **All fiat currencies have failed** given enough time
5. **Bitcoin represents** a return to rules-based money with digital properties
6. **The pattern**: Trust in humans → Trust in math

---

## Questions to Consider

1. Why do you think all fiat currencies eventually fail?
2. Could we return to a gold standard? What would happen?
3. What properties does Bitcoin have that gold doesn't?
4. Is "trust in code" really better than "trust in institutions"?
`,

  "02-economics-of-money/02-monetary-policy": `# Monetary Policy and Central Banking

*Module 2 of Economics of Money*

---

## Why This Matters

To understand why Bitcoin was created, you must understand what it's an alternative to. Bitcoin's genesis block famously contains:

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

This wasn't random. It was a statement about monetary policy and the 2008 financial crisis.

---

## What Is a Central Bank?

A **central bank** is the institution that:
1. Issues the national currency
2. Sets monetary policy (interest rates, money supply)
3. Acts as "lender of last resort" to banks
4. Regulates the banking system

### Major Central Banks

| Central Bank | Currency | Founded |
|--------------|----------|---------|
| Federal Reserve (Fed) | USD | 1913 |
| European Central Bank (ECB) | EUR | 1998 |
| Bank of England (BoE) | GBP | 1694 |
| Bank of Japan (BoJ) | JPY | 1882 |
| People's Bank of China (PBoC) | CNY | 1948 |

---

## How Money Is Actually Created

Most people think governments "print money." The reality is more complex.

### The Money Supply Pyramid

\`\`\`
                    /\\
                   /  \\
                  / M0 \\        ← Physical cash + bank reserves
                 /------\\
                /   M1   \\      ← M0 + checking accounts
               /----------\\
              /     M2     \\    ← M1 + savings, money markets
             /--------------\\
            /      M3        \\  ← M2 + large deposits, repos
           /------------------\\
\`\`\`

**Key insight**: Most "money" isn't printed — it's created by banks through lending.

### Fractional Reserve Banking

When you deposit $100 at a bank:
1. Bank keeps ~10% as reserves ($10)
2. Bank lends out ~90% ($90)
3. That $90 gets deposited elsewhere
4. That bank keeps $9, lends $81
5. Repeat...

**Result**: $100 of base money becomes ~$1,000 of total money supply.

This is called the **money multiplier effect**.

### Where Money Really Comes From

| Source | How It Works | Who Benefits First |
|--------|--------------|-------------------|
| Central bank | Creates reserves, buys assets | Banks, government |
| Commercial banks | Loans create deposits | Borrowers (often wealthy) |
| Government deficit | Spending exceeds taxes | Government contractors, recipients |

---

## Central Bank Tools

### 1. Interest Rates (Federal Funds Rate)

The rate banks charge each other for overnight loans.

**Lower rates:**
- Cheaper borrowing → more lending → more spending
- Stimulates economy
- Risk: Inflation, asset bubbles

**Higher rates:**
- Expensive borrowing → less lending → less spending
- Cools economy
- Risk: Recession, unemployment

### 2. Open Market Operations

Central bank buys/sells government bonds:
- **Buy bonds** → inject money → lower rates
- **Sell bonds** → remove money → higher rates

### 3. Reserve Requirements

How much banks must hold vs. lend:
- Higher requirements → less lending
- Lower requirements → more lending
- (Many countries eliminated these during COVID)

### 4. Quantitative Easing (QE)

When interest rates hit zero, central banks:
1. Create new money electronically
2. Buy government bonds, mortgages, even stocks
3. Flood the system with liquidity

**Scale of QE:**
- 2008-2014: Fed created ~$3.5 trillion
- 2020-2022: Fed created ~$5 trillion
- Total Fed balance sheet: ~$8 trillion

---

## The Cantillon Effect

Named after 18th-century economist Richard Cantillon.

> **New money doesn't enter the economy evenly.** Those who receive it first benefit at the expense of those who receive it last.

### How It Works

1. Fed creates $1 trillion
2. Banks and financial institutions get it first
3. They buy assets (stocks, real estate)
4. Asset prices rise
5. By the time workers get raises, prices have already increased

### Who Benefits?

**First receivers (benefit most):**
- Banks and financial institutions
- Government contractors
- Asset owners (stocks, real estate)
- Large corporations (cheap debt)

**Last receivers (harmed):**
- Wage workers
- Savers (cash loses value)
- Fixed-income retirees
- The unbanked

### Why This Matters for Crypto

Bitcoin's issuance is:
- Predetermined and transparent
- Distributed to miners (who provide work)
- Cannot be changed by any institution
- No Cantillon effect — everyone knows the schedule

---

## The Dual Mandate Problem

The Federal Reserve has two goals:
1. **Maximum employment**
2. **Stable prices** (2% inflation target)

These often conflict:
- Low unemployment → higher wages → inflation
- Fighting inflation → higher rates → unemployment

### The Phillips Curve

Traditional view: Inflation and unemployment trade off.

\`\`\`
Inflation
    ^
    |     *
    |   *
    |  *
    | *
    |*
    +---------> Unemployment
\`\`\`

**Reality**: This relationship has broken down repeatedly (stagflation in 1970s, low inflation with low unemployment in 2010s).

---

## Historical Monetary Policy Failures

### 1. Weimar Germany (1921-1923)
- Printed money to pay war debts
- Hyperinflation: Prices doubled every few days
- 1 USD = 4.2 trillion marks

### 2. Zimbabwe (2007-2009)
- Printed money to fund government
- 79.6 billion percent monthly inflation
- 100 trillion dollar notes

### 3. Argentina (Recurring)
- Multiple currency crises
- Current inflation: 100%+ annually
- Peso lost 99%+ vs USD since 2000

### 4. The 2008 Financial Crisis
- Easy money created housing bubble
- Banks overleveraged
- Bailouts for banks, losses for citizens
- Led directly to Bitcoin's creation

---

## The Case Against Central Banking

Critics argue:

1. **Moral hazard**: Bailouts encourage risk-taking
2. **Boom-bust cycles**: Easy money creates bubbles
3. **Wealth inequality**: Cantillon effects
4. **Loss of purchasing power**: Dollar lost 96% since 1913
5. **Political capture**: Central banks serve banks, not citizens
6. **No accountability**: Unelected officials control money

### Bitcoin as Alternative

Bitcoin offers:
- Fixed supply (21 million, ever)
- Predictable issuance schedule
- No central authority
- Rules without rulers
- Transparent monetary policy

---

## Key Takeaways

1. **Most money is created by banks** through lending, not "printing"
2. **Central banks control money** through rates, QE, and reserves
3. **The Cantillon Effect** means new money benefits first receivers
4. **Monetary policy has tradeoffs** — no free lunch
5. **Historical failures are common** — every fiat currency eventually fails
6. **Bitcoin was designed as an alternative** to this system

---

## Questions to Consider

1. Who benefits from low interest rates? Who is harmed?
2. Is a 2% inflation target really "stable prices"?
3. Should unelected officials control the money supply?
4. Could Bitcoin's fixed supply work for a national economy?
`,

  "02-economics-of-money/03-sound-money": `# Sound Money Principles

*Module 3 of Economics of Money*

---

## What Is Sound Money?

**Sound money** is money that:
- Maintains purchasing power over time
- Cannot be arbitrarily created or debased
- Is chosen by the market, not imposed by force
- Serves as a reliable store of value

> "Sound money is money that is not liable to sudden appreciation or depreciation in value." — Ludwig von Mises

---

## The Six Properties of Good Money

### 1. Scarcity

The supply must be limited and difficult to increase.

| Money | Scarcity Mechanism | Rating |
|-------|-------------------|--------|
| Gold | Geological rarity, mining cost | Excellent |
| Fiat | Central bank discretion | Poor |
| Bitcoin | Mathematical cap (21M) | Perfect |

**Why it matters**: If anyone can create more, existing units lose value. Scarcity protects holders.

### 2. Durability

Money must not decay, corrode, or deteriorate over time.

| Money | Durability | Notes |
|-------|------------|-------|
| Cattle | Poor | They die |
| Paper | Moderate | Wears out, burns |
| Gold | Excellent | Lasts millennia |
| Bitcoin | Perfect | Digital, infinitely copyable |

### 3. Divisibility

Must be splittable for transactions of any size.

| Money | Smallest Unit | Practical? |
|-------|---------------|------------|
| Real estate | House | No |
| Gold | ~$5 flake | Difficult |
| USD | $0.01 | Yes |
| Bitcoin | 1 satoshi (0.00000001 BTC) | Yes |

**Bitcoin advantage**: 100 million satoshis per bitcoin enables micropayments.

### 4. Portability

Easy to transport value across distance.

| Money | $1 Million Weighs | Transport |
|-------|-------------------|-----------|
| Gold | ~25 kg | Difficult, risky |
| Cash | ~10 kg | Bulky, risky |
| Bank wire | 0 kg | Requires permission |
| Bitcoin | 0 kg | Permissionless, instant |

### 5. Fungibility

Each unit is interchangeable with any other.

| Money | Fungibility | Issue |
|-------|-------------|-------|
| Diamonds | Poor | Each unique |
| Gold bars | Good | Serial numbers exist |
| USD | Excellent | A dollar is a dollar |
| Bitcoin | Good* | Blockchain history visible |

*Bitcoin's transparency creates some fungibility concerns (tainted coins).

### 6. Verifiability

Easy to confirm authenticity.

| Money | Verification | Difficulty |
|-------|--------------|------------|
| Gold | Acid test, density | Requires expertise |
| Cash | UV, watermarks | Moderate |
| Bank balance | Trust the bank | Counterparty risk |
| Bitcoin | Cryptographic proof | Anyone can verify |

---

## Hard Money vs. Easy Money

### Hard Money
- Difficult to produce more
- Maintains value over time
- Discipline on spending
- Examples: Gold, Bitcoin

### Easy Money
- Can be created at will
- Loses value over time
- Enables deficit spending
- Examples: Fiat currencies

### The Stock-to-Flow Ratio

**Stock**: Total existing supply
**Flow**: Annual new production

**S2F = Stock ÷ Flow**

| Asset | Stock-to-Flow | Years to Double Supply |
|-------|---------------|----------------------|
| Gold | ~62 | 62 years |
| Silver | ~22 | 22 years |
| Bitcoin (2024) | ~57 | 57 years |
| Bitcoin (post-2140) | ∞ | Never |
| Fiat | ~0.1-5 | Variable |

Higher S2F = Harder money = Better store of value.

---

## The Austrian School Perspective

Austrian economists emphasize:

### 1. Time Preference
Sound money lowers time preference, encouraging saving and investment.

- **High time preference**: Spend now, don't save
- **Low time preference**: Save, invest, build for future

Inflationary money raises time preference (spend before it loses value).

### 2. Economic Calculation
Accurate prices require stable money. Inflation distorts price signals.

### 3. Malinvestment
Artificially cheap money causes bad investments that must eventually liquidate (boom-bust cycles).

### 4. Spontaneous Order
The best money emerges from voluntary market choice, not government decree.

---

## Historical Sound Money

### The Classical Gold Standard (1870-1914)

**Results:**
- Price stability (slight deflation in some periods)
- Real wage growth
- Rapid industrialization
- Global trade expansion

**Average annual inflation**: ~0%

Compare to fiat era (1971-present): ~3-4% average.

### Purchasing Power Preservation

$100 in 1913 dollars:
- Worth ~$4 today (96% loss)

$100 in gold (1913):
- Worth ~$3,000+ today (30x gain)

---

## The Case for Sound Money

### Economic Benefits

1. **Encourages saving**: Money holds value
2. **Accurate price signals**: No inflation distortion
3. **Lower time preference**: Long-term thinking
4. **Prevents bubbles**: No artificial credit expansion
5. **Protects workers**: Wages maintain purchasing power

### Social Benefits

1. **Reduces inequality**: No Cantillon effects
2. **Limits government**: Can't print to fund wars/programs
3. **Financial privacy**: Less surveillance
4. **Individual sovereignty**: Control your own wealth

---

## Critiques of Sound Money

### Keynesian Objections

1. **Deflationary spirals**: People hoard, don't spend
2. **Sticky wages**: Can't cut nominal wages → unemployment
3. **Crisis response**: Need flexibility to stimulate
4. **Gold supply**: Mining determines money supply (arbitrary)

### Responses

1. Deflation isn't necessarily harmful (technology shows this)
2. Real wages matter more than nominal
3. Crises are often caused by easy money in the first place
4. Bitcoin's supply is more predictable than gold

---

## Bitcoin as Sound Money

Bitcoin scores highly on all properties:

| Property | Bitcoin's Score | Why |
|----------|----------------|-----|
| Scarcity | 10/10 | Hard cap of 21 million |
| Durability | 10/10 | Digital, cannot decay |
| Divisibility | 10/10 | 8 decimal places |
| Portability | 10/10 | Send anywhere instantly |
| Fungibility | 8/10 | Transparent chain |
| Verifiability | 10/10 | Cryptographic proof |

### Bitcoin's Monetary Policy

\`\`\`
Block Reward Schedule:
2009-2012: 50 BTC per block
2012-2016: 25 BTC per block
2016-2020: 12.5 BTC per block
2020-2024: 6.25 BTC per block
2024-2028: 3.125 BTC per block
...
2140: 0 BTC per block (21M cap reached)
\`\`\`

**Key feature**: Everyone knows the rules. No surprises. No manipulation.

---

## Key Takeaways

1. **Sound money preserves value** over time
2. **Six properties** determine money quality
3. **Stock-to-flow** measures hardness
4. **Fiat fails** the sound money test
5. **Gold was sound** but has physical limitations
6. **Bitcoin combines** gold's soundness with digital advantages

---

## Questions to Consider

1. Would you rather be paid in 1970 dollars or 1970 gold?
2. Does sound money limit government too much?
3. Can an economy function with deflationary money?
4. Is Bitcoin "too volatile" to be sound money?
`,

  "03-blockchain-fundamentals/01-distributed-systems": `# Distributed Systems Basics

*Module 1 of Blockchain Fundamentals*

---

## What Is a Distributed System?

A **distributed system** is a collection of independent computers that appear to users as a single coherent system.

Examples:
- The internet itself
- Google Search (millions of servers)
- Netflix (globally distributed)
- Blockchain networks (thousands of nodes)

> "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable." — Leslie Lamport

---

## Why Distributed Systems Matter for Blockchain

Blockchain is fundamentally a distributed system problem:
- How do thousands of computers agree on one truth?
- How do we handle computers that fail or lie?
- How do we maintain consistency without a central authority?

Understanding distributed systems is essential to understanding blockchain.

---

## Core Challenges

### 1. Partial Failures

In centralized systems, it either works or it doesn't. In distributed systems:
- Some nodes fail while others work
- Failures are often silent (no response)
- Hard to distinguish slow from dead

\`\`\`
Node A: Working ✓
Node B: Crashed ✗
Node C: Working ✓
Node D: Slow (is it dead?)
Node E: Working ✓
\`\`\`

### 2. Unreliable Networks

Networks are not reliable. Messages can be:
- **Lost**: Packet never arrives
- **Delayed**: Arrives much later
- **Duplicated**: Arrives multiple times
- **Reordered**: Arrives out of sequence

You cannot tell the difference between:
- A crashed node
- A very slow node
- A network partition

### 3. No Global Clock

Each computer has its own clock. Clocks drift:
- CPU clocks drift ~50ppm (50 microseconds per second)
- Over a day: ~4 seconds of drift
- Network latency adds uncertainty

**Consequence**: "What happened first?" is surprisingly hard to answer.

### 4. Byzantine Failures

Nodes might not just fail — they might actively lie or attack.

| Failure Type | Behavior |
|--------------|----------|
| Crash failure | Node stops responding |
| Omission failure | Node drops some messages |
| Byzantine failure | Node sends arbitrary/malicious data |

Blockchain must handle Byzantine failures (the hardest kind).

---

## The CAP Theorem

In a distributed system, you can have at most 2 of 3:

\`\`\`
        Consistency
           /\\
          /  \\
         /    \\
        /      \\
       /   ??   \\
      /          \\
     /____________\\
Availability    Partition
                Tolerance
\`\`\`

### Definitions

- **Consistency (C)**: All nodes see the same data at the same time
- **Availability (A)**: Every request gets a response
- **Partition Tolerance (P)**: System works despite network splits

### The Reality

Network partitions WILL happen. So you must choose:
- **CP**: Consistent but may be unavailable (traditional databases)
- **AP**: Available but may be inconsistent (many web services)

### Where Does Blockchain Fit?

Bitcoin chooses **eventual consistency** with partition tolerance:
- During partition: chains may diverge
- After partition heals: longest chain wins
- Consistency is probabilistic, not immediate

---

## Consensus

**Consensus** = Getting all nodes to agree on a single value.

### Why It's Hard

The **Two Generals Problem**:

\`\`\`
General A                    General B
    |                            |
    |---"Attack at dawn"-------->|
    |                            |
    |<---"Confirmed"-------------|
    |                            |
    |---"Got confirmation"------>|
    |                            |
    ...continues forever...
\`\`\`

Neither general can be certain the other will attack. No number of messages can fix this.

### The Byzantine Generals Problem

Even worse: some generals might be traitors who send conflicting messages.

**The Result (Lamport, 1982)**:
- With f Byzantine nodes, you need 3f+1 total nodes
- Requires 2/3 honest majority

### Practical Solutions

| Algorithm | Type | Speed | Byzantine Tolerant |
|-----------|------|-------|-------------------|
| Paxos | Crash fault | Fast | No |
| Raft | Crash fault | Fast | No |
| PBFT | Byzantine | Slow | Yes |
| Nakamoto | Byzantine | Slow | Yes |
| Tendermint | Byzantine | Medium | Yes |

---

## Replication Strategies

### Primary-Backup

One leader handles writes, replicates to followers.
- Simple
- Single point of failure
- Not Byzantine tolerant

### State Machine Replication

All nodes execute same commands in same order.
- Consistent state
- Requires consensus on ordering
- Foundation of blockchain

### Blockchain Approach

- Block producers propose state transitions
- Network reaches consensus on which blocks to accept
- State machine replication without fixed leader

---

## Timing Models

How you model time affects what's possible:

### Synchronous
- Known upper bound on message delay
- Known upper bound on processing time
- Easier to design, unrealistic in practice

### Asynchronous
- No timing guarantees
- Messages can be delayed arbitrarily
- **FLP Impossibility**: Cannot guarantee consensus with even one crash failure

### Partially Synchronous
- Asynchronous, but eventually becomes synchronous
- Realistic model for internet
- Blockchain operates here

---

## Key Distributed Systems Concepts for Blockchain

### 1. Eventual Consistency
Nodes may temporarily disagree, but will eventually converge.

### 2. Idempotency
Operations can be safely repeated (important when messages duplicate).

### 3. Atomic Broadcast
All nodes receive messages in the same order (what blockchain provides).

### 4. State Machine Replication
All nodes maintain identical state by processing identical inputs.

---

## Key Takeaways

1. **Distributed systems are hard** — failures and timing are unpredictable
2. **CAP theorem forces tradeoffs** — blockchain chooses eventual consistency
3. **Byzantine fault tolerance is expensive** — but necessary for trustless systems
4. **Consensus is the core problem** — blockchain's main innovation
5. **Timing matters** — blockchain works in partial synchrony model
6. **State machine replication** — the foundation of blockchain architecture

---

## Questions to Consider

1. Why can't traditional databases solve blockchain's problem?
2. What happens if more than 1/3 of nodes are malicious?
3. How does Bitcoin handle network partitions?
4. Why is "eventual consistency" acceptable for money?
`,

  "03-blockchain-fundamentals/02-consensus-mechanisms": `# Consensus Mechanisms

*Module 2 of Blockchain Fundamentals*

---

## What Is Consensus?

**Consensus** is how distributed nodes agree on a single version of truth without a central authority.

The challenge: Nodes can be slow, offline, or malicious. How do honest nodes agree?

---

## The Sybil Problem

In digital systems, identities are free. One attacker could create millions of fake identities.

**Sybil attack**: Overwhelm a vote-based system with fake identities.

**Solution**: Make creating an identity costly.
- Proof of Work: Cost = computation/electricity
- Proof of Stake: Cost = locked capital
- Proof of Authority: Cost = reputation

---

## Proof of Work (PoW)

### How It Works

1. Transactions are broadcast to the network
2. Miners collect transactions into a block
3. Miners race to find a valid hash (computationally expensive)
4. First miner to find it broadcasts the block
5. Other nodes verify and add to their chain
6. Miner receives block reward + fees

### The Mining Puzzle

Find a nonce such that:
\`\`\`
SHA256(block_header + nonce) < target

Example target: 0000000000000000000abc...
Hash must start with many zeros
\`\`\`

**Properties:**
- Hard to find (brute force only)
- Easy to verify (one hash check)
- Difficulty adjusts to maintain ~10 min blocks (Bitcoin)

### Security Model

Attack cost = cost to acquire 51% of hash power

**Current Bitcoin security**:
- ~400 EH/s network hashrate
- Would cost billions to attack
- Attack would likely crash BTC price (self-defeating)

### Advantages

- Battle-tested (15+ years)
- Simple and elegant
- No stake grinding attacks
- Fair launch possible (anyone can mine from day 1)

### Disadvantages

- High energy consumption (~100 TWh/year for Bitcoin)
- Mining centralization (economies of scale)
- Slow finality (need 6+ confirmations)
- Hardware arms race (ASICs)

---

## Proof of Stake (PoS)

### How It Works

1. Validators lock up stake (collateral)
2. Protocol selects validator to propose block
3. Other validators attest to validity
4. Valid blocks are added to chain
5. Validator receives rewards
6. Misbehavior → stake is slashed (destroyed)

### Selection Mechanisms

| Method | How It Works | Used By |
|--------|--------------|---------|
| Random selection | Weighted by stake | Ethereum |
| Coin age | Stake × time held | Peercoin |
| Round robin | Validators take turns | Some private chains |
| Delegated | Token holders vote for validators | EOS, Cosmos |

### Security Model

Attack cost = cost to acquire 33%+ of staked tokens

**Ethereum security**:
- ~30M ETH staked
- Would cost $60B+ to attack
- Attacker's stake would be slashed

### Advantages

- ~99.9% less energy than PoW
- Lower barrier to participation (no special hardware)
- Faster finality possible
- Native slashing for misbehavior

### Disadvantages

- "Nothing at stake" problem (partially solved)
- Long-range attacks (checkpoints solve this)
- Wealth concentration (rich get richer)
- More complex than PoW

---

## PoW vs PoS Comparison

| Property | Proof of Work | Proof of Stake |
|----------|---------------|----------------|
| Sybil resistance | Computation | Capital |
| Energy use | Very high | Very low |
| Hardware | Specialized (ASICs) | Consumer grade |
| Finality | Probabilistic | Economic/Deterministic |
| Attack cost | Buy/build hardware | Buy tokens |
| Fair launch | Possible | Difficult |
| Decentralization | Mining pools | Stake concentration |

---

## Other Consensus Mechanisms

### Delegated Proof of Stake (DPoS)

Token holders vote for a small set of validators (21-100).

**Used by**: EOS, Tron, BSC

**Tradeoff**: Faster/cheaper, but more centralized.

### Proof of Authority (PoA)

Known, trusted validators (identity = stake).

**Used by**: Private chains, testnets

**Tradeoff**: Fast and cheap, but requires trust.

### Proof of Space/Storage

Stake = allocated disk space.

**Used by**: Chia, Filecoin

**Tradeoff**: Less energy than PoW, repurposes hardware.

### Proof of History (PoH)

Cryptographic clock for ordering without consensus.

**Used by**: Solana

**Tradeoff**: Very fast, but adds complexity.

---

## Byzantine Fault Tolerance (BFT)

Classical consensus for known validator sets.

### PBFT (Practical BFT)

1. Leader proposes block
2. Validators exchange "prepare" messages
3. Validators exchange "commit" messages
4. Block is finalized (no reverts)

**Properties**:
- Instant finality
- Tolerates f failures with 3f+1 nodes
- Doesn't scale well (O(n²) messages)

### Tendermint

PBFT variant optimized for blockchain.

**Used by**: Cosmos ecosystem

**Properties**:
- Instant finality
- Better performance than classic PBFT
- Requires 2/3 honest validators

---

## Finality

When is a transaction "final" (irreversible)?

### Probabilistic Finality (PoW)

Never truly final, but increasingly unlikely to revert.

\`\`\`
Confirmations    Probability of Revert
1                ~10%
3                ~1%
6                ~0.01%
100              Effectively zero
\`\`\`

### Economic Finality (PoS)

Reverting would cost attackers more than they'd gain.

\`\`\`
Ethereum:
After 2 epochs (~13 min): Would cost 1/3 of stake to revert
After finalization: Cannot revert without social consensus
\`\`\`

### Absolute Finality (BFT)

Once committed, mathematically impossible to revert.

\`\`\`
Tendermint: Finality in ~6 seconds
\`\`\`

---

## The Blockchain Trilemma

Vitalik Buterin's observation: Hard to optimize all three simultaneously.

\`\`\`
        Security
           /\\
          /  \\
         /    \\
        / Pick \\
       /   2    \\
      /          \\
     /____________\\
Decentralization  Scalability
\`\`\`

| Chain | Security | Decentralization | Scalability |
|-------|----------|------------------|-------------|
| Bitcoin | High | High | Low (~7 TPS) |
| Ethereum | High | Medium | Medium (~30 TPS) |
| Solana | Medium | Low | High (~65k TPS) |
| BSC | Medium | Low | High |

**L2 solutions attempt to break the trilemma** by inheriting L1 security while scaling.

---

## Key Takeaways

1. **Consensus solves the Sybil problem** by making identities costly
2. **PoW uses energy**, PoS uses capital — both create security
3. **Finality varies**: Probabilistic, economic, or absolute
4. **Tradeoffs are unavoidable** — the blockchain trilemma
5. **No perfect consensus** — choose based on requirements
6. **Hybrid approaches** are emerging (Ethereum's PoS + checkpoints)

---

## Questions to Consider

1. Is PoW's energy use justified by its security properties?
2. Does PoS centralize power with wealthy stakeholders?
3. How many confirmations do you wait for large transactions?
4. Can the blockchain trilemma ever be solved?
`,

  "03-blockchain-fundamentals/03-forks-upgrades": `# Forks and Upgrades

*Module 3 of Blockchain Fundamentals*

---

## What Is a Fork?

A **fork** occurs when the blockchain diverges into two potential paths. This can happen:
- Naturally (temporary disagreement)
- Intentionally (protocol upgrade)
- Contentiously (community split)

---

## Types of Forks

### 1. Temporary Forks (Orphan Blocks)

Normal operation — two miners find blocks simultaneously.

\`\`\`
        Block N
       /       \\
  Block N+1a   Block N+1b  ← Two valid blocks
       |
  Block N+2
       |
  (Chain A wins, Block N+1b orphaned)
\`\`\`

**Resolution**: Longest chain wins. Orphaned blocks are discarded.

**Frequency**: Happens regularly (Bitcoin: ~1-2 per day)

### 2. Soft Forks

Backward-compatible upgrades. Old nodes still work but don't understand new features.

\`\`\`
Old rules: "Blocks up to 2MB are valid"
New rules: "Blocks up to 1MB are valid"

New blocks satisfy BOTH old and new rules
Old nodes accept new blocks (they're valid)
New nodes reject old-style blocks (if >1MB)
\`\`\`

**Key property**: Tightens rules (subset of previous valid states)

**Examples**:
- SegWit (Bitcoin, 2017) — new transaction format
- Taproot (Bitcoin, 2021) — improved scripts and privacy

**Activation**: Typically requires miner/validator signaling

### 3. Hard Forks

Non-backward-compatible changes. Old nodes reject new blocks.

\`\`\`
Old rules: "Blocks up to 1MB are valid"
New rules: "Blocks up to 8MB are valid"

Old nodes: REJECT new 8MB blocks (invalid!)
New nodes: ACCEPT new 8MB blocks
→ Chain splits permanently (unless old nodes upgrade)
\`\`\`

**Key property**: Loosens or changes rules

**Examples**:
- Ethereum Constantinople — new opcodes
- Bitcoin Cash fork — increased block size

**Requirement**: All nodes must upgrade or be left behind

### 4. Contentious Forks

Hard forks where the community disagrees, resulting in two surviving chains.

| Original | Fork | Date | Dispute |
|----------|------|------|---------|
| Bitcoin | Bitcoin Cash | Aug 2017 | Block size |
| Bitcoin Cash | Bitcoin SV | Nov 2018 | Block size again |
| Ethereum | Ethereum Classic | Jul 2016 | DAO hack response |

**Result**: Two separate cryptocurrencies with shared history up to fork point.

---

## Soft Fork vs Hard Fork

| Aspect | Soft Fork | Hard Fork |
|--------|-----------|-----------|
| Compatibility | Backward compatible | NOT backward compatible |
| Non-upgraded nodes | Still work (limited) | Left on old chain |
| Rule change | Tighter (more restrictive) | Any change possible |
| Risk | Lower | Higher |
| Coordination | Miner majority sufficient | All nodes must upgrade |
| Reversibility | Easier | Permanent split |

---

## Fork Activation Mechanisms

### 1. Flag Day

Activate at a specific block height or date.

\`\`\`
if (block.height >= 500000) {
  useNewRules();
}
\`\`\`

**Pro**: Simple, predictable
**Con**: No guarantee of miner support

### 2. Miner Signaling (BIP9)

Miners signal readiness in block headers.

\`\`\`
Activation threshold: 95% of blocks in period
Signaling period: 2016 blocks (~2 weeks)

If 95% signal: Activate after delay
If not: Try again or give up
\`\`\`

**Pro**: Ensures miner support
**Con**: Gives miners veto power

### 3. User-Activated Soft Fork (UASF)

Nodes enforce new rules regardless of miner signaling.

\`\`\`
August 1, 2017: Nodes reject non-SegWit blocks
Miners forced to comply or mine worthless blocks
\`\`\`

**Pro**: Economic nodes have power
**Con**: Contentious, risky

### 4. Speedy Trial (BIP8)

Hybrid approach — quick signaling window, then UASF.

\`\`\`
3-month signaling period
If 90% signal: Activate
If not: UASF activates anyway after delay
\`\`\`

**Used for**: Taproot (2021)

---

## The DAO Fork: A Case Study

### What Happened (2016)

1. **The DAO**: A $150M decentralized investment fund
2. **The Hack**: Attacker exploited reentrancy bug, drained $60M
3. **The Debate**: Should we "undo" the hack?

### Arguments

**For rollback (eventually Ethereum)**:
- Obvious theft should be reversed
- DAO was 14% of all ETH
- Attacker shouldn't profit

**Against rollback (eventually Ethereum Classic)**:
- "Code is law"
- Sets dangerous precedent
- Who decides what's "theft"?

### Result

- Hard fork to recover funds → Ethereum (ETH)
- Original chain continues → Ethereum Classic (ETC)
- Both chains still exist today

### Lessons

1. Immutability has nuances
2. Social consensus can override code
3. Controversial decisions split communities
4. Both positions have legitimate arguments

---

## Bitcoin's Block Size War

### The Conflict (2015-2017)

Bitcoin hit ~7 TPS limit. Two camps emerged:

**Big Blockers**:
- Increase block size (2MB, 8MB, unlimited)
- On-chain scaling
- Bitcoin as payment system

**Small Blockers**:
- Keep 1MB blocks
- Layer 2 scaling (Lightning)
- Bitcoin as settlement layer

### Key Events

- **2015-2016**: Debate intensifies
- **Feb 2016**: Hong Kong Agreement (failed)
- **May 2017**: New York Agreement (failed)
- **Aug 2017**: SegWit activates via UASF
- **Aug 2017**: Bitcoin Cash forks off

### Result

- Bitcoin: 1MB blocks + SegWit + Lightning
- Bitcoin Cash: 8MB→32MB blocks
- BTC remains dominant by market cap

### Lessons

1. Governance is hard without authority
2. Economics (market cap) resolves disputes
3. Both visions can coexist as separate chains
4. Soft forks can avoid splits

---

## Upgrade Governance Models

### Bitcoin: Conservative

- Slow, deliberate changes
- High bar for activation (95%)
- Prioritizes stability
- Major upgrades rare

### Ethereum: Progressive

- Regular hard forks (every ~6 months)
- Core devs coordinate upgrades
- More willing to change
- "Move fast" mentality (relatively)

### Comparison

| Aspect | Bitcoin | Ethereum |
|--------|---------|----------|
| Upgrade frequency | Rare | Every 6-12 months |
| Fork type | Mostly soft forks | Hard forks |
| Coordination | BIPs, mailing lists | Core dev calls |
| Philosophy | "Don't break things" | "Iterate quickly" |

---

## How to Survive a Fork

### For Users

1. **Don't transact** during uncertainty
2. **Control your keys** (not on exchange)
3. **Wait for clarity** before moving coins
4. **Back up before fork** (you'll have coins on both chains)

### Replay Attacks

After a fork, transactions might be valid on both chains.

\`\`\`
You send 1 BTC on the BTC chain
Attacker replays same transaction on BCH chain
You lose 1 BCH too
\`\`\`

**Protection**: Forks should implement replay protection (different transaction formats).

---

## Key Takeaways

1. **Forks are normal** — temporary forks happen constantly
2. **Soft forks are safer** — backward compatible, lower split risk
3. **Hard forks can split chains** — contentious ones create new coins
4. **Governance is the real challenge** — who decides what changes?
5. **Market resolves disputes** — value flows to preferred chain
6. **Both positions can be valid** — forks let communities diverge

---

## Questions to Consider

1. Should The DAO hack have been reversed?
2. Who should have power to change Bitcoin?
3. Is "code is law" realistic or desirable?
4. How many Bitcoin forks can you name?
`,

  "04-bitcoin/01-bitcoin-whitepaper": `# The Bitcoin Whitepaper

*Module 1 of Bitcoin Deep Dive*

---

## The Document That Changed Everything

On **October 31, 2008**, an anonymous person (or group) called **Satoshi Nakamoto** published a 9-page paper titled:

> "Bitcoin: A Peer-to-Peer Electronic Cash System"

This whitepaper launched a trillion-dollar industry and inspired thousands of cryptocurrencies.

---

## Historical Context

### The Cypherpunk Movement

Bitcoin didn't come from nowhere. Decades of prior work:

| Year | Project | Innovation | Why It Failed |
|------|---------|------------|---------------|
| 1983 | eCash (Chaum) | Blind signatures | Centralized, company failed |
| 1997 | HashCash (Back) | Proof of work | Didn't solve double-spend |
| 1998 | B-Money (Dai) | Distributed ledger | Never implemented |
| 1998 | Bit Gold (Szabo) | PoW + property titles | Never implemented |
| 2004 | RPOW (Finney) | Reusable PoW | Centralized server |

Satoshi combined these ideas in a novel way.

### The 2008 Financial Crisis

Bitcoin's timing wasn't accidental. The genesis block contains:

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

A direct commentary on monetary policy and bank bailouts.

---

## Section-by-Section Analysis

### 1. Introduction

**Problem**: Online commerce relies on financial institutions as trusted third parties.

**Issues with current system**:
- Non-reversible transactions impossible
- Mediation costs increase transaction costs
- Minimum transaction size limits micropayments
- Merchants require excessive customer information

**Solution**: "What is needed is an electronic payment system based on cryptographic proof instead of trust."

### 2. Transactions

**Key insight**: Define a coin as a chain of digital signatures.

\`\`\`
Owner 1 → signs(hash + Owner 2's public key) → Owner 2
Owner 2 → signs(hash + Owner 3's public key) → Owner 3
\`\`\`

**Problem**: Payee can't verify that owner didn't double-spend.

**Traditional solution**: Trusted mint checks every transaction.

**Satoshi's challenge**: Eliminate the mint without enabling double-spend.

### 3. Timestamp Server

**Solution**: Publicly announce transactions and agree on order.

**Mechanism**: Hash transactions into blocks, publish hash widely.

\`\`\`
Block hash = Hash(Previous hash + Transactions + Timestamp)
\`\`\`

Each timestamp proves data existed at that time. Each block reinforces previous blocks.

### 4. Proof-of-Work

**Problem**: How to agree on the "true" chain without a central authority?

**Solution**: Make extending the chain computationally expensive.

\`\`\`
Find nonce such that:
SHA256(block header + nonce) < target

Example: Hash must start with 00000000...
\`\`\`

**Key properties**:
- Expensive to produce (requires computation)
- Cheap to verify (one hash check)
- Difficulty adjusts to maintain target time

**Security**: To rewrite history, attacker must redo ALL subsequent work.

### 5. Network

**How the network operates**:

1. New transactions broadcast to all nodes
2. Each node collects transactions into a block
3. Each node works on finding PoW for its block
4. When found, broadcasts block to all nodes
5. Nodes accept block if all transactions valid and unspent
6. Nodes express acceptance by working on next block

**Tolerant of imperfection**:
- Messages can be dropped
- Nodes can join/leave
- Longest chain is always accepted as truth

### 6. Incentive

**The economic magic**: Align self-interest with network security.

**Block reward**: First transaction in block creates new coins for miner.

**Benefits**:
- Distributes coins without central issuer
- Incentivizes honest behavior
- Miners profit more from supporting network than attacking

**Game theory**: "If a greedy attacker is able to assemble more CPU power than all the honest nodes, he would have to choose between using it to defraud people by stealing back his payments, or using it to generate new coins. He ought to find it more profitable to play by the rules."

### 7. Reclaiming Disk Space

**Problem**: Blockchain grows forever.

**Solution**: Prune spent transactions using Merkle trees.

\`\`\`
Block header (80 bytes) contains Merkle root
Old transactions can be discarded
Only header needed to verify chain
\`\`\`

**Result**: Bitcoin nodes don't need to store all history.

### 8. Simplified Payment Verification (SPV)

**Idea**: Not everyone needs to run a full node.

**Light clients**:
- Store only block headers
- Query full nodes for transaction inclusion proofs
- Verify via Merkle proofs

**Tradeoff**: Trusts that longest chain is honest majority.

**Warning**: SPV is less secure than full validation.

### 9. Combining and Splitting Value

**Problem**: Handling transactions of arbitrary amounts.

**Solution**: Transactions can have multiple inputs and outputs.

\`\`\`
Input 1 (5 BTC) ─┐
                 ├──→ Output 1 (7 BTC to recipient)
Input 2 (3 BTC) ─┘    Output 2 (1 BTC change to sender)
\`\`\`

No need for fixed denominations. Any amount can be sent.

### 10. Privacy

**The tradeoff**: All transactions public, but identities pseudonymous.

\`\`\`
Traditional:  Bank ←→ User (private transaction, known identity)
Bitcoin:      Public transaction ←→ Anonymous keys
\`\`\`

**Recommendation**: Use new key pair for each transaction.

**Limitation**: Chain analysis can link addresses. Bitcoin is pseudonymous, not anonymous.

### 11. Calculations

**The math behind security**: Probability of attacker catching up.

**Assumptions**:
- Honest chain grows 1 block per time unit with probability p
- Attacker grows 1 block per time unit with probability q
- Attacker starts z blocks behind

**Result**: Attacker success probability drops exponentially with z.

\`\`\`
z=0: 100%
z=1: 20.4% (if q=0.1)
z=5: 0.003%
z=10: 0.00000006%
\`\`\`

**Conclusion**: Wait for confirmations based on transaction value.

### 12. Conclusion

> "We have proposed a system for electronic transactions without relying on trust."

**Key innovations summarized**:
1. Coins as chains of signatures
2. Proof-of-Work consensus
3. Economic incentives for honesty
4. Longest chain as source of truth

---

## What the Whitepaper Got Right

1. **Core mechanism works** — 15+ years, no fundamental failures
2. **Incentives align** — miners are honest because it's profitable
3. **Decentralization holds** — no single point of failure
4. **Security scales** — attack cost grows with network value

---

## What the Whitepaper Didn't Anticipate

1. **Mining centralization** — pools control most hashrate
2. **ASIC dominance** — CPU mining became impractical
3. **Scaling debate** — 7 TPS limit became contentious
4. **Fee market** — block space became valuable commodity
5. **Store of value narrative** — "digital gold" over "digital cash"

---

## Key Takeaways

1. **9 pages changed finance** — elegance over complexity
2. **Combined existing ideas** — cryptography + incentives + distributed systems
3. **Solved double-spend** without trusted third party
4. **Created digital scarcity** — 21 million cap, ever
5. **Launched an industry** — thousands of cryptocurrencies followed
6. **Still mysterious** — Satoshi's identity remains unknown

---

## Questions to Consider

1. Why did Satoshi stay anonymous?
2. Could the whitepaper be improved? What would you add?
3. Which aspect was most innovative: technical or economic?
4. Why did Bitcoin succeed where predecessors failed?
`,

  "04-bitcoin/02-utxo-model": `# The UTXO Model

*Module 2 of Bitcoin Deep Dive*

---

## What Is a UTXO?

**UTXO** = Unspent Transaction Output

Bitcoin doesn't track account balances like a bank. Instead, it tracks individual "coins" — outputs from previous transactions that haven't been spent yet.

Your "balance" = Sum of all UTXOs you control.

---

## The Mental Model: Digital Cash

Think of UTXOs like physical bills:

\`\`\`
Traditional Bank:
  Alice's account balance: $100

UTXO Model:
  Alice controls:
    - UTXO #1: 50 BTC (from transaction abc...)
    - UTXO #2: 30 BTC (from transaction def...)
    - UTXO #3: 20 BTC (from transaction ghi...)
    Total: 100 BTC
\`\`\`

Each UTXO is like a separate bill. To spend, you must use entire bills and get change back.

---

## How Transactions Work

### Structure of a Transaction

\`\`\`
INPUTS:                          OUTPUTS:
┌─────────────────────┐         ┌─────────────────────┐
│ Reference to UTXO 1 │         │ 7 BTC to Address X  │
│ Signature proving   │   ──→   │ (new UTXO #1)       │
│ ownership           │         ├─────────────────────┤
├─────────────────────┤         │ 2.999 BTC to me     │
│ Reference to UTXO 2 │         │ (new UTXO #2 change)│
│ Signature           │         └─────────────────────┘
└─────────────────────┘
\`\`\`

**Inputs**: References to existing UTXOs + proof of ownership (signature)
**Outputs**: New UTXOs created by this transaction

### Example Transaction

Alice wants to send 7 BTC to Bob:

**Alice's UTXOs**:
- UTXO A: 5 BTC
- UTXO B: 4 BTC

**Transaction**:
- Inputs: UTXO A (5 BTC) + UTXO B (4 BTC) = 9 BTC
- Output 1: 7 BTC to Bob
- Output 2: 1.999 BTC to Alice (change)
- Fee: 0.001 BTC (implicit: input - output)

**Result**:
- UTXO A and B are "spent" (removed from UTXO set)
- Two new UTXOs created (one for Bob, one for Alice's change)

---

## The UTXO Set

The **UTXO set** is the complete database of all unspent outputs.

\`\`\`
Current UTXO Set (~80 million UTXOs, ~5GB)
┌──────────────────────────────────────────┐
│ txid: abc123, output: 0, value: 5 BTC    │
│ txid: def456, output: 1, value: 0.5 BTC  │
│ txid: ghi789, output: 0, value: 100 BTC  │
│ ...                                      │
└──────────────────────────────────────────┘
\`\`\`

**Properties**:
- Every valid UTXO is in this set
- When spent, UTXO is removed
- New outputs are added
- Full nodes maintain this set in memory

### Why It Matters

Validating a transaction only requires:
1. Check inputs exist in UTXO set
2. Verify signatures
3. Confirm input sum ≥ output sum

Don't need to scan entire blockchain history!

---

## UTXO vs Account Model

Ethereum uses an account model. How do they compare?

| Aspect | UTXO (Bitcoin) | Account (Ethereum) |
|--------|---------------|-------------------|
| State | Set of coins | Map of balances |
| Transaction | Consumes + creates UTXOs | Modifies balances |
| Parallelism | High (independent UTXOs) | Low (sequential nonces) |
| Privacy | Better (new addresses) | Worse (same address) |
| Complexity | Complex coin selection | Simpler logic |
| Smart contracts | Limited | Native support |
| Light clients | Easier (Merkle proofs) | Harder |

---

## Coin Selection

When spending, wallet must choose which UTXOs to use.

### Strategies

**1. Largest First**
Use biggest UTXOs first.
- Pro: Fewer inputs, lower fees
- Con: May create many small change outputs

**2. Smallest First**
Use smallest UTXOs first.
- Pro: Consolidates dust
- Con: More inputs, higher fees

**3. Branch and Bound**
Find exact match to avoid change.
- Pro: Optimal fee, no change output
- Con: Computationally expensive

**4. Random**
Random selection weighted by value.
- Pro: Privacy (less predictable)
- Con: May not be optimal

### Example

Want to send 1 BTC. Available UTXOs:
- 0.5 BTC
- 0.3 BTC
- 0.25 BTC
- 0.8 BTC

**Option A**: 0.8 + 0.25 = 1.05 BTC (2 inputs, 0.05 change)
**Option B**: 0.5 + 0.3 + 0.25 = 1.05 BTC (3 inputs, higher fee)

Good wallets optimize for fee vs. privacy tradeoffs.

---

## Dust and UTXO Bloat

### What Is Dust?

**Dust** = UTXOs so small that spending them costs more in fees than they're worth.

\`\`\`
UTXO value: 500 satoshis
Cost to spend: 1000 satoshis in fees
→ This UTXO is "dust" - uneconomical to spend
\`\`\`

### The Problem

Too many small UTXOs:
- Bloat the UTXO set
- Increase node resource requirements
- May become permanently unspendable

### Solutions

1. **Dust limits**: Nodes reject outputs below threshold
2. **Consolidation**: Combine small UTXOs when fees are low
3. **Batching**: Combine multiple payments into one transaction

---

## Transaction Fees

Fees in Bitcoin are calculated per byte, not per value.

\`\`\`
Fee = Transaction size (bytes) × Fee rate (sat/byte)
\`\`\`

### What Affects Size?

| Component | Approximate Size |
|-----------|-----------------|
| Input (P2PKH) | ~148 bytes |
| Input (P2WPKH) | ~68 bytes |
| Output (P2PKH) | ~34 bytes |
| Output (P2WPKH) | ~31 bytes |
| Overhead | ~10-12 bytes |

**Example**:
- 2 inputs (P2WPKH): 136 bytes
- 2 outputs: 62 bytes
- Overhead: 10 bytes
- Total: ~208 bytes
- At 50 sat/byte: 10,400 sats (~$4)

### UTXO Implications

More inputs = larger transaction = higher fee

This is why UTXO management matters!

---

## Privacy Implications

### Address Reuse

UTXOs enable better privacy than accounts:

\`\`\`
Bad: Receive all funds to same address
     → All transactions linked

Good: New address for each receive
      → Harder to link ownership
\`\`\`

### Change Address Problem

Change reveals information:

\`\`\`
Inputs: 10 BTC from Address A
Outputs:
  - 3 BTC to Address B (recipient)
  - 6.999 BTC to Address C (change)

Observer can guess:
  - Address C is probably the spender's
  - A and C likely same owner
\`\`\`

### Heuristics Analysts Use

1. **Common input ownership**: Inputs likely from same person
2. **Change detection**: Round numbers usually payments
3. **Address reuse**: Links transactions
4. **Timing analysis**: Transaction patterns

---

## CoinJoin and Privacy

**CoinJoin**: Multiple users combine transactions.

\`\`\`
Normal:
Alice: 1 BTC → Bob (clearly Alice paid Bob)

CoinJoin:
Alice + Carol + Eve combine:
  Inputs: A(1), C(1), E(1)
  Outputs: B(1), D(1), F(1)

Who paid whom? Unclear!
\`\`\`

UTXO model enables this privacy technique.

---

## Key Takeaways

1. **Bitcoin has no balances** — only UTXOs
2. **Transactions consume and create UTXOs** — like spending and receiving bills
3. **UTXO set is the state** — all you need to validate new transactions
4. **Coin selection matters** — affects fees and privacy
5. **More inputs = higher fees** — optimize UTXO management
6. **Better privacy than accounts** — but not anonymous

---

## Questions to Consider

1. Why didn't Satoshi use a simpler account model?
2. How does UTXO model affect Lightning Network design?
3. What's the ideal UTXO count for a wallet?
4. Can dust UTXOs ever become spendable again?
`,

  "04-bitcoin/03-bitcoin-script": `# Bitcoin Script

*Module 3 of Bitcoin Deep Dive*

---

## What Is Bitcoin Script?

**Bitcoin Script** is the programming language that defines how bitcoins can be spent. Every UTXO has a "locking script" that specifies the conditions for spending.

Think of it as a lock (on the output) that requires the right key (in the input) to open.

---

## Design Philosophy

Bitcoin Script is intentionally limited:

| Feature | Bitcoin Script | Why |
|---------|---------------|-----|
| Turing-complete | No | Prevents infinite loops |
| Loops | No | Predictable execution time |
| State | No | Stateless verification |
| Complexity | Low | Reduces attack surface |

> "Bitcoin Script is designed to be simple enough that any valid script will execute in a bounded amount of time."

---

## Stack-Based Execution

Script uses a **stack** — a Last-In-First-Out (LIFO) data structure.

\`\`\`
Operations:
PUSH: Add item to top of stack
POP: Remove item from top
Operations work on top items

Example: 2 3 OP_ADD
Stack: []
Push 2: [2]
Push 3: [2, 3]
OP_ADD: Pop 3, Pop 2, Push 5 → [5]
\`\`\`

---

## How Scripts Work

### Locking Script (scriptPubKey)

Placed on the output. Defines conditions to spend.

\`\`\`
Example: "Provide signature matching public key X"
\`\`\`

### Unlocking Script (scriptSig)

Placed on the input. Provides data to satisfy locking script.

\`\`\`
Example: "<signature>"
\`\`\`

### Verification

Concatenate and execute:

\`\`\`
<unlocking script> + <locking script>

If stack ends with TRUE (non-zero), transaction is valid.
\`\`\`

---

## Common Script Types

### 1. P2PKH (Pay-to-Public-Key-Hash)

The original standard. Most common historically.

**Locking Script**:
\`\`\`
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
\`\`\`

**Unlocking Script**:
\`\`\`
<signature> <publicKey>
\`\`\`

**Execution**:
\`\`\`
1. <sig> <pubKey>                    - Push signature and public key
2. OP_DUP                            - Duplicate public key
3. OP_HASH160                        - Hash the public key
4. <pubKeyHash>                      - Push expected hash
5. OP_EQUALVERIFY                    - Verify hashes match
6. OP_CHECKSIG                       - Verify signature
\`\`\`

### 2. P2SH (Pay-to-Script-Hash)

Hide complex script behind a hash. Introduced in BIP 16.

**Use case**: Multisig, time locks, complex conditions

**Locking Script**:
\`\`\`
OP_HASH160 <scriptHash> OP_EQUAL
\`\`\`

**Unlocking Script**:
\`\`\`
<data> <serializedScript>
\`\`\`

**Benefit**: Sender only sees a hash. Complexity is receiver's responsibility.

### 3. P2WPKH (Native SegWit)

Modern standard. Lower fees, better security.

**Address format**: Starts with "bc1q..."

**Locking Script**:
\`\`\`
OP_0 <20-byte-pubKeyHash>
\`\`\`

**Witness data** (separate from transaction):
\`\`\`
<signature> <publicKey>
\`\`\`

### 4. P2TR (Taproot)

Latest upgrade (2021). Best privacy and efficiency.

**Address format**: Starts with "bc1p..."

**Features**:
- Key path: Spend with single signature (looks like any other)
- Script path: Complex conditions hidden unless used
- Better privacy: All spends look similar

---

## Useful Opcodes

### Stack Operations

| Opcode | Effect |
|--------|--------|
| OP_DUP | Duplicate top item |
| OP_DROP | Remove top item |
| OP_SWAP | Swap top two items |
| OP_ROT | Rotate top three items |

### Arithmetic

| Opcode | Effect |
|--------|--------|
| OP_ADD | Add top two items |
| OP_SUB | Subtract |
| OP_1ADD | Add 1 |
| OP_NEGATE | Negate top item |

### Crypto

| Opcode | Effect |
|--------|--------|
| OP_SHA256 | SHA256 hash |
| OP_HASH160 | SHA256 then RIPEMD160 |
| OP_CHECKSIG | Verify signature |
| OP_CHECKMULTISIG | Verify m-of-n signatures |

### Flow Control

| Opcode | Effect |
|--------|--------|
| OP_IF | If top is true, execute |
| OP_ELSE | Else branch |
| OP_ENDIF | End if block |
| OP_VERIFY | Fail if top is false |

### Time Locks

| Opcode | Effect |
|--------|--------|
| OP_CHECKLOCKTIMEVERIFY | Block height/time lock |
| OP_CHECKSEQUENCEVERIFY | Relative time lock |

---

## Advanced Scripts

### Multisig (m-of-n)

Require m signatures from n possible keys.

\`\`\`
2-of-3 Multisig:

Locking: OP_2 <pubK1> <pubK2> <pubK3> OP_3 OP_CHECKMULTISIG
Unlocking: OP_0 <sig1> <sig2>
\`\`\`

**Use cases**: Corporate treasuries, escrow, family funds

### Hash Time-Locked Contract (HTLC)

Foundation of Lightning Network.

\`\`\`
IF
  OP_HASH160 <hash> OP_EQUALVERIFY
  <recipientPubKey> OP_CHECKSIG
ELSE
  <timeout> OP_CHECKLOCKTIMEVERIFY OP_DROP
  <senderPubKey> OP_CHECKSIG
ENDIF
\`\`\`

**Meaning**:
- Recipient can claim with preimage of hash
- OR sender can reclaim after timeout

### Time-Locked Savings

\`\`\`
<futureTime> OP_CHECKLOCKTIMEVERIFY OP_DROP
<pubKey> OP_CHECKSIG
\`\`\`

Can't spend until specified time. Enforced by consensus!

---

## Script Limitations

### Disabled Opcodes

Some opcodes were disabled for security:
- OP_CAT (concatenate)
- OP_SUBSTR (substring)
- OP_MUL (multiply)
- OP_DIV (divide)

These could enable DoS attacks or unexpected behaviors.

### Why Not Turing-Complete?

1. **Predictable execution**: Know max resource usage
2. **No halting problem**: Script always terminates
3. **Simpler security analysis**: Easier to audit
4. **DoS prevention**: Can't create infinite loops

---

## SegWit: Script Evolution

**Segregated Witness** (2017) moved signatures outside the main transaction.

### Benefits

1. **Fix malleability**: Signatures don't affect txid
2. **Lower fees**: Witness data discounted
3. **Better upgrade path**: Versioned witness programs
4. **Enable Lightning**: Required for payment channels

### Weight Units

\`\`\`
Transaction weight = Base size × 4 + Witness size
Block limit: 4 million weight units
\`\`\`

Witness data only counts 1/4 toward limit!

---

## Taproot: The Latest Upgrade

Activated November 2021 via Schnorr signatures + MAST.

### Key Innovations

**1. Schnorr Signatures**
- More efficient than ECDSA
- Native multisig (n signatures → 1 signature)
- Better privacy

**2. MAST (Merkelized Abstract Syntax Trees)**
Only reveal the script branch you use.

\`\`\`
Traditional: Reveal entire script
MAST: Reveal only executed branch + Merkle proof

Script has 10 conditions?
Only reveal the 1 condition used.
\`\`\`

**3. Key Path vs Script Path**
- Key path: Single signature (most common case)
- Script path: Complex script (fallback)

Both look identical on-chain until script path is used!

---

## Key Takeaways

1. **Script defines spending conditions** — a lock on every output
2. **Stack-based and limited** — security through simplicity
3. **Not Turing-complete by design** — prevents DoS and complexity
4. **Evolution**: P2PKH → P2SH → SegWit → Taproot
5. **Enables complex contracts** — multisig, HTLCs, time locks
6. **Taproot improves privacy** — all transactions look similar

---

## Questions to Consider

1. Why were some opcodes disabled?
2. Could Bitcoin have a more expressive scripting language?
3. How does Script compare to Ethereum's EVM?
4. What new capabilities does Taproot enable?
`,

  "04-bitcoin/04-mining-economics": `# Mining Economics

*Module 4 of Bitcoin Deep Dive*

---

## What Is Bitcoin Mining?

**Mining** is the process of:
1. Collecting pending transactions
2. Assembling them into a block
3. Finding a valid proof-of-work hash
4. Broadcasting the block
5. Earning the block reward + fees

Miners are the backbone of Bitcoin's security model.

---

## The Mining Process

### Step-by-Step

\`\`\`
1. Collect transactions from mempool
2. Verify each transaction is valid
3. Assemble block header:
   - Previous block hash
   - Merkle root of transactions
   - Timestamp
   - Difficulty target
   - Nonce (starts at 0)
4. Hash the header: SHA256(SHA256(header))
5. Is hash < target?
   - No: Increment nonce, try again
   - Yes: Broadcast block, collect reward!
\`\`\`

### The Numbers

- **Hashrate**: ~400 EH/s (400 quintillion hashes/second globally)
- **Block time target**: 10 minutes
- **Attempts per block**: ~10^21 (sextillion)
- **Energy consumed**: ~100 TWh/year

---

## Block Rewards

### The Subsidy

New bitcoins are created with each block:

| Period | Block Subsidy | Total Issued |
|--------|---------------|--------------|
| 2009-2012 | 50 BTC | 10.5M |
| 2012-2016 | 25 BTC | 15.75M |
| 2016-2020 | 12.5 BTC | 18.375M |
| 2020-2024 | 6.25 BTC | 19.6875M |
| 2024-2028 | 3.125 BTC | 20.34M |
| ... | ... | ... |
| 2140+ | 0 BTC | 21M (cap) |

**Halving**: Every 210,000 blocks (~4 years), subsidy cuts in half.

### Transaction Fees

In addition to subsidy, miners collect all transaction fees in their block.

\`\`\`
Fee = Sum of inputs - Sum of outputs

Typical block revenue (2024):
  Subsidy: 3.125 BTC (~$150,000)
  Fees: 0.1-1 BTC (~$5,000-50,000)
  Total: ~$150,000-200,000 per block
\`\`\`

### The Long-Term Transition

As subsidy shrinks, fees must replace it:

\`\`\`
Now:    |████████████████░░| ~95% subsidy, 5% fees
2030:   |████████████░░░░░░| ~85% subsidy, 15% fees
2040:   |████████░░░░░░░░░░| ~50% subsidy, 50% fees
2100+:  |░░░░░░░░░░░░░░░░░░| 0% subsidy, 100% fees
\`\`\`

Can fees alone secure the network? Open question.

---

## Mining Hardware Evolution

### The Arms Race

| Era | Hardware | Hash Rate | Efficiency |
|-----|----------|-----------|------------|
| 2009 | CPU | ~10 MH/s | Poor |
| 2010 | GPU | ~100 MH/s | Better |
| 2011 | FPGA | ~1 GH/s | Good |
| 2013+ | ASIC | 100+ TH/s | Optimal |

### What Is an ASIC?

**Application-Specific Integrated Circuit** — chip designed ONLY for SHA256 hashing.

**Advantages**:
- 10,000x more efficient than CPUs
- Optimized for one algorithm

**Disadvantages**:
- Expensive ($2,000-15,000 per unit)
- Only useful for Bitcoin mining
- Rapid obsolescence (new gen every 1-2 years)

### Current Leading Miners

| Model | Hash Rate | Power | Efficiency |
|-------|-----------|-------|------------|
| Antminer S21 | 200 TH/s | 3,500W | 17.5 J/TH |
| Whatsminer M60 | 186 TH/s | 3,422W | 18.4 J/TH |
| Antminer S19 XP | 140 TH/s | 3,010W | 21.5 J/TH |

---

## Mining Economics 101

### Revenue

\`\`\`
Daily Revenue = (Your Hashrate / Network Hashrate) × Daily Block Rewards

Example:
  Your hashrate: 100 TH/s
  Network: 500 EH/s = 500,000,000 TH/s
  Daily blocks: 144
  Reward per block: 3.125 BTC

  Daily revenue = (100 / 500,000,000) × 144 × 3.125
                = 0.00009 BTC/day
                = ~$4.50/day at $50k/BTC
\`\`\`

### Costs

| Cost | Type | Typical Range |
|------|------|---------------|
| Hardware | Capital | $2,000-15,000 per unit |
| Electricity | Operating | $0.03-0.10 per kWh |
| Cooling | Operating | 10-30% of electricity |
| Facility | Fixed | Rent, security, staff |
| Maintenance | Operating | 5-10% of hardware/year |

### Breakeven Analysis

\`\`\`
Breakeven electricity price = BTC price × (Daily BTC / Daily kWh)

Example:
  Daily BTC: 0.00009
  Daily kWh: 84 (3,500W × 24h)
  BTC price: $50,000

  Breakeven = $50,000 × (0.00009 / 84)
            = $0.054/kWh

If your electricity < $0.054/kWh, you're profitable.
\`\`\`

---

## Mining Pools

### Why Pools Exist

Solo mining has high variance:

\`\`\`
With 100 TH/s, expected time to find a block:
  Network: 500 EH/s
  Your share: 0.00002%
  Expected blocks/year: ~0.01
  Average wait: ~100 years!
\`\`\`

**Pools** combine hashrate and share rewards proportionally.

### Major Pools (2024)

| Pool | Hashrate Share |
|------|----------------|
| Foundry USA | ~30% |
| AntPool | ~20% |
| F2Pool | ~15% |
| ViaBTC | ~10% |
| Binance Pool | ~8% |

### Pool Payout Schemes

| Scheme | How It Works | Risk |
|--------|--------------|------|
| PPS | Pay Per Share - fixed rate | Pool bears variance |
| PPLNS | Pay Per Last N Shares | Miner bears variance |
| PPS+ | PPS + share of fees | Hybrid |
| FPPS | Full Pay Per Share | Pool pays subsidy + avg fees |

---

## Difficulty Adjustment

### The Algorithm

Every 2,016 blocks (~2 weeks):

\`\`\`
New Difficulty = Old Difficulty × (Actual Time / Target Time)

Target Time = 2,016 × 10 minutes = 20,160 minutes

If blocks came too fast: Difficulty increases
If blocks came too slow: Difficulty decreases
\`\`\`

### Why It Matters

- **Maintains 10-minute average** regardless of hashrate
- **Adjusts to hardware improvements** and price changes
- **Limits adjustment to 4x** per period (up or down)

### Historical Trend

\`\`\`
2009: Difficulty 1
2013: Difficulty ~10 million
2017: Difficulty ~1 trillion
2024: Difficulty ~80 trillion
\`\`\`

Difficulty has only gone down during major miner capitulations.

---

## Geographic Distribution

### Where Miners Operate

Miners seek cheap electricity:

| Region | Electricity Source | Cost |
|--------|-------------------|------|
| Texas, USA | Natural gas, renewables | $0.02-0.05 |
| Kazakhstan | Coal | $0.03-0.04 |
| Russia | Hydroelectric | $0.03-0.05 |
| Iceland | Geothermal | $0.04-0.06 |
| Paraguay | Hydroelectric | $0.03-0.04 |

### The China Ban (2021)

Before May 2021: ~65% of hashrate in China
After: Hashrate redistributed globally

**Result**: More geographically decentralized network.

---

## Environmental Debate

### The Criticism

- ~100 TWh/year (0.5% of global electricity)
- Carbon footprint of a small country
- "Wasteful" computation

### The Defense

1. **Security has a cost**: Banking system uses more energy
2. **Renewable incentives**: Miners seek stranded/cheap energy
3. **Grid stabilization**: Flexible load helps balance grids
4. **Methane mitigation**: Flared gas → mining

### Current Energy Mix

Estimates vary, but approximately:
- 50-60% renewable/nuclear
- 40-50% fossil fuels

---

## The Future of Mining

### Challenges

1. **Halving pressure**: Revenue cuts every 4 years
2. **Fee dependency**: Must replace subsidy
3. **Hardware costs**: Constant reinvestment
4. **Regulatory risk**: Environmental concerns

### Opportunities

1. **Stranded energy**: Monetize otherwise wasted power
2. **Heat recovery**: Use waste heat for heating
3. **Grid services**: Demand response programs
4. **Vertical integration**: Own generation + mining

---

## Key Takeaways

1. **Mining secures Bitcoin** through proof-of-work
2. **Revenue = subsidy + fees** (subsidy dominates today)
3. **ASIC arms race** makes mining highly competitive
4. **Pools reduce variance** for individual miners
5. **Difficulty adjusts** to maintain 10-minute blocks
6. **Economics are tight** — electricity cost is key

---

## Questions to Consider

1. Is Bitcoin's energy use justified?
2. Can fees alone secure the network long-term?
3. Does pool concentration threaten decentralization?
4. What happens to security as subsidy approaches zero?
`,

  "04-bitcoin/05-lightning-network": `# The Lightning Network

*Module 5 of Bitcoin Deep Dive*

---

## What Is the Lightning Network?

The **Lightning Network** is Bitcoin's Layer 2 scaling solution:
- Off-chain payment channels
- Near-instant transactions
- Extremely low fees
- Inherits Bitcoin's security

> "If Bitcoin is digital gold, Lightning is digital cash."

---

## The Scaling Problem

### Bitcoin's Limitations

\`\`\`
Block size: ~1-4 MB (with SegWit)
Block time: ~10 minutes
Transactions per block: ~2,000-3,000
TPS: ~7 transactions per second
\`\`\`

For comparison:
- Visa: ~65,000 TPS capacity
- Cash: Unlimited parallel transactions

### Why Not Just Bigger Blocks?

1. **Decentralization**: Larger blocks = fewer can run nodes
2. **Propagation**: Big blocks take longer to broadcast
3. **Verification**: More transactions = more computation
4. **Storage**: Blockchain already ~500 GB

**Solution**: Move transactions off-chain, settle on-chain.

---

## How Lightning Works

### The Core Idea

Instead of broadcasting every transaction to the blockchain:

1. **Open a channel** (one on-chain transaction)
2. **Transact off-chain** (unlimited, instant, free)
3. **Close the channel** (one on-chain transaction)

Thousands of transactions → 2 on-chain transactions.

### Payment Channels

Two parties lock funds in a 2-of-2 multisig:

\`\`\`
Opening Transaction (on-chain):
┌─────────────────────────────┐
│ 2-of-2 Multisig             │
│ Alice: 0.5 BTC              │
│ Bob: 0.5 BTC                │
│ Total: 1 BTC locked         │
└─────────────────────────────┘
\`\`\`

Now they can update balances off-chain:

\`\`\`
State 1: Alice 0.5, Bob 0.5
State 2: Alice 0.4, Bob 0.6 (Alice paid Bob 0.1)
State 3: Alice 0.35, Bob 0.65 (Alice paid Bob 0.05)
...
\`\`\`

Each state is a signed transaction that COULD be broadcast, but isn't.

### Closing the Channel

When done, broadcast the final state:

\`\`\`
Closing Transaction (on-chain):
Alice receives: 0.35 BTC
Bob receives: 0.65 BTC
\`\`\`

All intermediate transactions never hit the blockchain!

---

## Channel Security

### The Cheating Problem

What if Alice broadcasts an old state (where she had more)?

### The Solution: Revocation

Each state update includes a **revocation key**:

\`\`\`
If Alice broadcasts old state:
  Bob has revocation key for that state
  Bob can take ALL funds as penalty
\`\`\`

This makes cheating economically irrational.

### Commitment Transactions

Each party holds their own version:

\`\`\`
Alice's version: Alice can spend after 144 blocks, Bob immediately
Bob's version: Bob can spend after 144 blocks, Alice immediately

This delay allows the other party to catch cheaters.
\`\`\`

---

## Multi-Hop Payments

### The Network Effect

You don't need a direct channel with everyone:

\`\`\`
Alice ←→ Bob ←→ Carol ←→ Dave

Alice can pay Dave through Bob and Carol!
\`\`\`

### Hash Time-Locked Contracts (HTLCs)

Enable trustless multi-hop payments:

\`\`\`
1. Dave generates secret R, gives hash H(R) to Alice
2. Alice → Bob: "I'll pay you if you show me R" (locked with H)
3. Bob → Carol: Same deal
4. Carol → Dave: Same deal
5. Dave reveals R to Carol (gets paid)
6. Carol reveals R to Bob (gets paid)
7. Bob reveals R to Alice (gets paid)
\`\`\`

**Key properties**:
- Atomic: Either all hops succeed or none do
- Trustless: No one can steal funds
- Fast: Happens in seconds

### Routing

Finding paths through the network:

| Algorithm | How It Works |
|-----------|--------------|
| Source routing | Sender computes full path |
| Onion routing | Each hop only knows next step |
| MPP | Split payment across multiple paths |

---

## Lightning in Practice

### Node Operations

Running a Lightning node:
1. Run Bitcoin full node
2. Run Lightning implementation (LND, c-lightning, Eclair)
3. Open channels with other nodes
4. Maintain liquidity

### Channel Capacity

\`\`\`
Your channel capacity: Amount locked in channel
Outbound liquidity: How much you can send
Inbound liquidity: How much you can receive

Example:
  Total: 1 BTC
  Your side: 0.3 BTC (can send 0.3)
  Their side: 0.7 BTC (can receive 0.7)
\`\`\`

### Liquidity Challenges

**Problem**: Need inbound liquidity to receive payments.

**Solutions**:
- Buy inbound liquidity
- Loop out (submarine swaps)
- Balanced channel opens
- Liquidity marketplaces

---

## Network Statistics

### Current State (2024)

| Metric | Value |
|--------|-------|
| Nodes | ~15,000 |
| Channels | ~60,000 |
| Total Capacity | ~5,000 BTC |
| Avg. Channel Size | ~$5,000 |

### Growth Trajectory

\`\`\`
2018: 100 BTC capacity
2020: 1,000 BTC capacity
2022: 4,000 BTC capacity
2024: 5,000+ BTC capacity
\`\`\`

---

## Use Cases

### 1. Micropayments

Pay-per-use services previously impossible:

\`\`\`
Traditional minimum: ~$0.30 (credit card fees)
Lightning minimum: <$0.01 (or less)

Examples:
- Pay per article read
- Pay per API call
- Streaming sats for content
\`\`\`

### 2. Instant Payments

No waiting for confirmations:

\`\`\`
On-chain: 10-60 minutes
Lightning: <1 second
\`\`\`

### 3. Gaming

In-game economies with real value:

- Earn sats playing games
- Instant deposits/withdrawals
- Microtransactions without friction

### 4. Remittances

Send money internationally:

- No bank required
- Near-zero fees
- Instant settlement
- 24/7 availability

---

## Wallet Types

### Custodial Wallets

Someone else manages your Lightning node.

| Wallet | Type | Pros | Cons |
|--------|------|------|------|
| Wallet of Satoshi | Custodial | Easy | Trust required |
| Strike | Custodial | Great UX | Requires KYC |

### Non-Custodial Wallets

You control your keys.

| Wallet | Type | Pros | Cons |
|--------|------|------|------|
| Phoenix | Non-custodial | Easy + sovereign | Channel fees |
| Breez | Non-custodial | Good UX | Setup complexity |
| Zeus | Self-hosted | Full control | Technical |

---

## Challenges and Tradeoffs

### Current Limitations

1. **Channel management**: Requires active management
2. **Liquidity**: Need balanced channels
3. **Online requirement**: Must be online to receive
4. **Complexity**: Harder than on-chain
5. **Routing failures**: Payments can fail

### Security Considerations

1. **Hot wallet**: Keys must be online
2. **Watchtowers**: Need monitoring for cheating
3. **Force closes**: Can be expensive in high-fee environments
4. **Backup complexity**: Static channel backups

---

## Technical Deep Dive

### BOLT Specifications

Lightning is defined by **BOLTs** (Basis of Lightning Technology):

| BOLT | Topic |
|------|-------|
| 1 | Base protocol |
| 2 | Peer protocol |
| 3 | Transactions |
| 4 | Onion routing |
| 7 | P2P node discovery |
| 11 | Invoice format |

### Implementations

| Implementation | Language | Maintainer |
|----------------|----------|------------|
| LND | Go | Lightning Labs |
| c-lightning/CLN | C | Blockstream |
| Eclair | Scala | ACINQ |
| LDK | Rust | Spiral |

---

## Future Developments

### Taproot Channels

Using Taproot for improved:
- Privacy (channels look like normal transactions)
- Efficiency (smaller on-chain footprint)

### Point Time-Locked Contracts (PTLCs)

Replace HTLCs with:
- Better privacy
- No hash reuse
- Stuckless payments

### Splicing

Resize channels without closing:
- Add or remove funds
- Seamless capacity management

### Trampoline Routing

Let someone else route for you:
- Better for mobile
- Reduces client complexity

---

## Key Takeaways

1. **Lightning scales Bitcoin** with off-chain channels
2. **Security inherits from Bitcoin** — can always settle on-chain
3. **HTLCs enable trustless routing** through multiple hops
4. **Instant and cheap** — milliseconds, sub-penny fees
5. **Liquidity management is key** — the main challenge
6. **Rapidly improving** — better UX every year

---

## Questions to Consider

1. Will Lightning make on-chain Bitcoin obsolete for payments?
2. How does Lightning affect Bitcoin's fee market?
3. Can Lightning ever be as easy as Venmo?
4. What happens if most Lightning nodes become large institutions?
`,

  "05-ethereum-smart-contracts/01-ethereum-overview": `# Ethereum Overview

*Module 1 of Ethereum & Smart Contracts*

---

## What Is Ethereum?

Ethereum is a **decentralized computing platform** that runs smart contracts — self-executing programs stored on the blockchain.

| Bitcoin | Ethereum |
|---------|----------|
| Decentralized money | Decentralized computation |
| Limited scripting | Turing-complete programs |
| UTXO model | Account model |
| Store of value | Programmable platform |

> "Ethereum is a global, decentralized platform for money and new kinds of applications." — ethereum.org

---

## The Vision

### Vitalik's Insight (2013)

Bitcoin showed you could have decentralized money. But why stop there?

What if you could decentralize:
- Exchanges
- Lending
- Insurance
- Identity
- Voting
- Any application?

**The World Computer**: A global, censorship-resistant computer that anyone can program.

---

## Key Components

### 1. Ether (ETH)

The native cryptocurrency:
- Pays for computation (gas)
- Secures the network (staking)
- Store of value
- Medium of exchange within dApps

### 2. Smart Contracts

Programs that:
- Live on the blockchain
- Execute automatically
- Cannot be modified once deployed
- Have their own state and balance

### 3. The Ethereum Virtual Machine (EVM)

The runtime environment:
- Executes smart contract code
- Deterministic (same input = same output)
- Sandboxed (isolated from system)
- Runs on every node

### 4. Accounts

Two types:

| External Accounts (EOAs) | Contract Accounts |
|--------------------------|-------------------|
| Controlled by private keys | Controlled by code |
| Can initiate transactions | Cannot initiate (only respond) |
| No code | Has code |
| Human users | Smart contracts |

---

## How Ethereum Works

### Transaction Flow

\`\`\`
1. User signs transaction with private key
2. Transaction broadcast to network
3. Validators include in block
4. EVM executes the transaction
5. State is updated
6. Block is finalized
\`\`\`

### State Machine

Ethereum is a giant state machine:

\`\`\`
State N + Transaction → State N+1

State includes:
- All account balances
- All contract storage
- All contract code
\`\`\`

Every transaction transitions the world state.

---

## Gas: Paying for Computation

### Why Gas Exists

Problem: Infinite loops would halt the network.

Solution: Make computation cost money.

\`\`\`
Gas = Unit of computation
Gas Price = ETH per unit of gas
Transaction Fee = Gas Used × Gas Price
\`\`\`

### Gas Economics

| Operation | Gas Cost |
|-----------|----------|
| Addition | 3 gas |
| Storage write (new) | 20,000 gas |
| Storage write (existing) | 5,000 gas |
| ETH transfer | 21,000 gas |
| Contract deployment | 32,000+ gas |

### EIP-1559 (London Upgrade)

New fee structure:
- **Base fee**: Burned (destroyed)
- **Priority fee**: Tip to validators
- **Max fee**: Upper limit you're willing to pay

\`\`\`
If block is >50% full: Base fee increases
If block is <50% full: Base fee decreases

Result: More predictable fees
\`\`\`

---

## From PoW to PoS: The Merge

### The Merge (September 2022)

Ethereum switched from Proof-of-Work to Proof-of-Stake.

| Before (PoW) | After (PoS) |
|--------------|-------------|
| Miners | Validators |
| Energy: ~80 TWh/year | Energy: ~0.01 TWh/year |
| Hardware: GPUs | Hardware: Consumer PC |
| Minimum: Expensive rigs | Minimum: 32 ETH |

### 99.95% Energy Reduction

One of the largest decarbonization events in tech history.

### How PoS Works

1. Validators stake 32 ETH
2. Randomly selected to propose blocks
3. Other validators attest to validity
4. Rewards for honest behavior
5. Slashing for misbehavior

---

## Key Differences from Bitcoin

| Aspect | Bitcoin | Ethereum |
|--------|---------|----------|
| Purpose | Money | Platform |
| Smart Contracts | Limited Script | Turing-complete |
| Block Time | 10 minutes | 12 seconds |
| Supply | 21M cap | No hard cap (but issuance low) |
| State | UTXO set | World state (accounts + storage) |
| Consensus | PoW (Nakamoto) | PoS (Casper) |
| Programming | Bitcoin Script | Solidity, Vyper |

---

## The Ethereum Roadmap

### Completed

- **The Merge (2022)**: PoW → PoS
- **Shapella (2023)**: Staking withdrawals enabled

### In Progress

- **Proto-Danksharding (EIP-4844)**: Cheaper L2 data
- **Account Abstraction**: Smart contract wallets
- **Single Slot Finality**: Faster finalization

### Future

- **Full Danksharding**: Massive L2 scaling
- **Statelessness**: Lighter nodes
- **Quantum Resistance**: Post-quantum crypto

---

## The Ethereum Ecosystem

### Layer 2s

Scaling solutions that inherit Ethereum security:
- **Optimistic Rollups**: Optimism, Arbitrum, Base
- **ZK Rollups**: zkSync, Starknet, Polygon zkEVM

### DeFi

Financial applications:
- Exchanges (Uniswap)
- Lending (Aave, Compound)
- Stablecoins (DAI, USDC)

### NFTs

Non-fungible tokens:
- Digital art
- Gaming assets
- Identity/credentials

### DAOs

Decentralized organizations:
- Treasury management
- Governance
- Coordination

---

## Criticisms and Challenges

### Scalability

- Base layer: ~30 TPS
- Solution: Layer 2 rollups

### Complexity

- Larger attack surface than Bitcoin
- More bugs possible
- Harder to audit

### Centralization Concerns

- Staking concentration
- Infrastructure (Infura, Alchemy)
- MEV dynamics

### Monetary Policy

- No fixed supply
- "Ultrasound money" vs. "Ethereum is not money"

---

## Key Takeaways

1. **Ethereum extends Bitcoin's vision** to general computation
2. **Smart contracts enable** complex applications
3. **The EVM provides** deterministic, sandboxed execution
4. **Gas prevents** infinite loops and spam
5. **The Merge reduced** energy use by 99.95%
6. **L2s are scaling** Ethereum for mass adoption

---

## Questions to Consider

1. Is Ethereum a competitor to Bitcoin or complementary?
2. What can't be decentralized on Ethereum?
3. How decentralized is Ethereum really?
4. Will L2s make the base layer irrelevant?
`,

  "05-ethereum-smart-contracts/02-evm-deep-dive": `# The EVM Deep Dive

*Module 2 of Ethereum & Smart Contracts*

---

## What Is the EVM?

The **Ethereum Virtual Machine (EVM)** is the runtime environment for smart contracts. Every Ethereum node runs an identical copy.

Think of it as:
- The "CPU" of Ethereum's world computer
- A sandboxed execution environment
- A deterministic state machine

---

## Key Properties

### 1. Deterministic

Same input ALWAYS produces same output.

\`\`\`
Given:
  - Current state
  - Transaction

Output is completely predictable.
No randomness, no external data (without oracles).
\`\`\`

### 2. Isolated

Contracts can only interact through defined interfaces.
- Cannot access filesystem
- Cannot access network
- Cannot access other contracts' storage directly

### 3. Stack-Based

Operations work on a Last-In-First-Out stack.

\`\`\`
Stack size: 1024 elements max
Element size: 256 bits (32 bytes)
\`\`\`

### 4. Resource-Metered

Every operation costs gas. This:
- Prevents infinite loops
- Compensates validators
- Creates a fee market

---

## EVM Architecture

### Memory Model

\`\`\`
┌─────────────────────────────────────┐
│ STACK                               │
│ - 1024 max depth                    │
│ - 256-bit words                     │
│ - Cheapest computation              │
├─────────────────────────────────────┤
│ MEMORY                              │
│ - Byte-addressable                  │
│ - Volatile (cleared after call)     │
│ - Expansion costs gas               │
├─────────────────────────────────────┤
│ STORAGE                             │
│ - Key-value store (256-bit → 256-bit)│
│ - Persistent across calls           │
│ - Most expensive operations         │
├─────────────────────────────────────┤
│ CALLDATA                            │
│ - Read-only input data              │
│ - Passed in transaction             │
├─────────────────────────────────────┤
│ CODE                                │
│ - Immutable contract bytecode       │
│ - Can be read with CODECOPY         │
└─────────────────────────────────────┘
\`\`\`

### Gas Costs by Area

| Operation | Gas Cost | Why |
|-----------|----------|-----|
| Stack (ADD, MUL) | 3-5 | Cheap, in-memory |
| Memory read/write | 3 | Volatile, ephemeral |
| Storage read (warm) | 100 | Persistent, cached |
| Storage read (cold) | 2,100 | Persistent, uncached |
| Storage write (new) | 20,000 | Permanent state change |
| Storage write (existing) | 5,000 | Modifying existing |

---

## Bytecode and Opcodes

### What Is Bytecode?

Compiled smart contract code:

\`\`\`
Solidity:
function add(uint a, uint b) returns (uint) {
    return a + b;
}

Bytecode:
6080604052... (hex string)

Opcodes:
PUSH1 0x80
PUSH1 0x40
MSTORE
...
ADD
\`\`\`

### Common Opcodes

#### Stack Operations
| Opcode | Hex | Description |
|--------|-----|-------------|
| PUSH1 | 0x60 | Push 1 byte |
| POP | 0x50 | Remove top |
| DUP1 | 0x80 | Duplicate top |
| SWAP1 | 0x90 | Swap top two |

#### Arithmetic
| Opcode | Hex | Description |
|--------|-----|-------------|
| ADD | 0x01 | Addition |
| MUL | 0x02 | Multiplication |
| SUB | 0x03 | Subtraction |
| DIV | 0x04 | Division |

#### Comparison
| Opcode | Hex | Description |
|--------|-----|-------------|
| LT | 0x10 | Less than |
| GT | 0x11 | Greater than |
| EQ | 0x14 | Equality |

#### Memory/Storage
| Opcode | Hex | Description |
|--------|-----|-------------|
| MLOAD | 0x51 | Load from memory |
| MSTORE | 0x52 | Store to memory |
| SLOAD | 0x54 | Load from storage |
| SSTORE | 0x55 | Store to storage |

#### Control Flow
| Opcode | Hex | Description |
|--------|-----|-------------|
| JUMP | 0x56 | Unconditional jump |
| JUMPI | 0x57 | Conditional jump |
| STOP | 0x00 | Halt execution |
| RETURN | 0xF3 | Return data |
| REVERT | 0xFD | Revert with data |

---

## Execution Context

### Transaction Context

Available during execution:

\`\`\`solidity
msg.sender  // Immediate caller address
msg.value   // ETH sent with call
msg.data    // Calldata (function + args)
tx.origin   // Original EOA (dangerous!)
tx.gasprice // Gas price of transaction
\`\`\`

### Block Context

\`\`\`solidity
block.number     // Current block number
block.timestamp  // Current block timestamp
block.coinbase   // Block validator address
block.gaslimit   // Block gas limit
block.basefee    // Current base fee (EIP-1559)
\`\`\`

---

## Contract Interactions

### Types of Calls

| Call Type | State Change | Gas | Returns |
|-----------|--------------|-----|---------|
| CALL | Yes (other contract) | Forwarded | Yes |
| DELEGATECALL | Yes (this contract) | Forwarded | Yes |
| STATICCALL | No | Forwarded | Yes |
| CALLCODE | Deprecated | - | - |

### CALL vs DELEGATECALL

\`\`\`
CALL:
  Caller → Contract B
  - msg.sender = Caller
  - Modifies B's storage

DELEGATECALL:
  Caller → Contract B (as library)
  - msg.sender = Original sender
  - Modifies Caller's storage
  - B's code runs in Caller's context
\`\`\`

**DELEGATECALL is powerful but dangerous** — used in proxy patterns.

---

## Contract Creation

### CREATE

Deploy at deterministic address:

\`\`\`
address = keccak256(deployer, nonce)[-20:]
\`\`\`

Address depends on deployer's nonce (changes each transaction).

### CREATE2

Deploy at predictable address:

\`\`\`
address = keccak256(0xff, deployer, salt, keccak256(bytecode))[-20:]
\`\`\`

Same salt + bytecode = same address (before deployment).

**Use case**: Counterfactual contracts, deterministic deployments.

---

## Error Handling

### REVERT

Returns unused gas, reverts all state changes.

\`\`\`solidity
require(condition, "Error message");
// If false, reverts with message
\`\`\`

### Out of Gas

When gas runs out:
- All state changes reverted
- Gas is NOT refunded
- Transaction marked as failed

### Assert Failures

\`\`\`solidity
assert(condition);
// If false, consumes ALL remaining gas
// Use for invariants that should never fail
\`\`\`

---

## Precompiled Contracts

Special contracts at low addresses with native implementations:

| Address | Function | Gas | Use Case |
|---------|----------|-----|----------|
| 0x01 | ECRECOVER | 3000 | Signature recovery |
| 0x02 | SHA256 | 60+ | Hashing |
| 0x03 | RIPEMD160 | 600+ | Hashing |
| 0x04 | IDENTITY | 15+ | Data copy |
| 0x05 | MODEXP | Variable | RSA verification |
| 0x06-0x08 | BN128 ops | Variable | ZK proofs |
| 0x09 | BLAKE2B | Variable | Zcash compatibility |

These are much cheaper than implementing in Solidity.

---

## EVM Limitations

### 1. No Floating Point

Only integers. Use fixed-point math:

\`\`\`solidity
// Instead of 0.5
uint256 HALF = 5 * 10**17; // 0.5 * 10**18
\`\`\`

### 2. No Randomness

Blockchain is deterministic. "Random" solutions:
- Commit-reveal schemes
- Chainlink VRF (external oracle)
- Block hash (weak, manipulable)

### 3. No External Data

Can't fetch APIs or URLs. Solutions:
- Oracles (Chainlink, API3)
- User-provided data (with verification)

### 4. 256-bit Words

Smaller types still use full word:
\`\`\`solidity
uint8 a = 1;  // Still 256 bits in storage
\`\`\`

Pack multiple values to save gas.

---

## The Future: EVM Evolution

### EVM Object Format (EOF)

New bytecode format:
- Separation of code and data
- Better static analysis
- Removal of dynamic jumps

### Verkle Trees

Replace Merkle Patricia Tries:
- Smaller proofs
- Enable stateless clients

### Alternative VMs

Some chains use different VMs:
- SVM (Solana)
- MoveVM (Aptos, Sui)
- WASM (Polkadot, Near)

---

## Key Takeaways

1. **EVM is a stack-based, deterministic VM**
2. **Three memory areas**: Stack (cheap), Memory (volatile), Storage (expensive)
3. **Gas meters all computation** — prevents abuse
4. **Opcodes are low-level** — Solidity abstracts them
5. **Different call types** have different security implications
6. **Precompiles** provide efficient cryptographic operations

---

## Questions to Consider

1. Why is storage so expensive compared to memory?
2. When would you use CREATE2 vs CREATE?
3. What makes DELEGATECALL dangerous?
4. Could the EVM be replaced with WASM?
`,

  "05-ethereum-smart-contracts/03-solidity-fundamentals": `# Solidity Fundamentals

*Module 3 of Ethereum & Smart Contracts*

---

## What Is Solidity?

**Solidity** is the most popular smart contract language:
- Designed specifically for the EVM
- Statically typed
- Object-oriented with inheritance
- Compiles to EVM bytecode

> Similar syntax to JavaScript/C++, but with blockchain-specific features.

---

## Basic Structure

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    // State variables
    uint256 private storedValue;

    // Events
    event ValueChanged(uint256 newValue);

    // Functions
    function set(uint256 value) public {
        storedValue = value;
        emit ValueChanged(value);
    }

    function get() public view returns (uint256) {
        return storedValue;
    }
}
\`\`\`

---

## Data Types

### Value Types

\`\`\`solidity
// Integers
uint256 a = 100;        // Unsigned, 0 to 2^256-1
int256 b = -50;         // Signed, -2^255 to 2^255-1
uint8 c = 255;          // Smaller sizes available

// Boolean
bool isActive = true;

// Address
address user = 0x1234...;
address payable recipient = payable(user);  // Can receive ETH

// Bytes
bytes32 hash = keccak256("hello");
bytes1 singleByte = 0xff;
\`\`\`

### Reference Types

\`\`\`solidity
// Arrays
uint256[] dynamicArray;
uint256[10] fixedArray;

// Strings
string name = "Ethereum";

// Mappings
mapping(address => uint256) balances;
mapping(address => mapping(address => uint256)) allowances;

// Structs
struct User {
    address addr;
    uint256 balance;
    bool isActive;
}
\`\`\`

---

## Functions

### Visibility

\`\`\`solidity
function publicFunc() public {}     // Anyone can call
function externalFunc() external {} // Only external calls
function internalFunc() internal {} // This + derived contracts
function privateFunc() private {}   // Only this contract
\`\`\`

### State Mutability

\`\`\`solidity
function readWrite() public {}              // Modifies state
function viewOnly() public view {}          // Reads state only
function pureCalc() public pure {}          // No state access
function receiveETH() public payable {}     // Can receive ETH
\`\`\`

### Function Modifiers

\`\`\`solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;  // Continue with function
}

function sensitiveAction() public onlyOwner {
    // Only owner can call
}
\`\`\`

---

## Control Structures

\`\`\`solidity
// If/Else
if (amount > 100) {
    // do something
} else if (amount > 50) {
    // do something else
} else {
    // default
}

// Loops
for (uint i = 0; i < 10; i++) {
    // iterate (be careful of gas!)
}

while (condition) {
    // loop while true
}

// Error Handling
require(amount > 0, "Amount must be positive");
assert(totalSupply == expectedSupply);
revert("Something went wrong");
\`\`\`

---

## Important Concepts

### msg Object

\`\`\`solidity
msg.sender  // Caller's address
msg.value   // ETH sent (in wei)
msg.data    // Complete calldata
\`\`\`

### Ether Units

\`\`\`solidity
1 wei = 1
1 gwei = 10^9 wei
1 ether = 10^18 wei

require(msg.value >= 1 ether, "Send at least 1 ETH");
\`\`\`

### Events

\`\`\`solidity
event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
);

function transfer(address to, uint256 amount) public {
    // ... logic ...
    emit Transfer(msg.sender, to, amount);
}
\`\`\`

- Indexed parameters are searchable
- Events are cheap (stored in logs, not state)
- Essential for dApp frontends

---

## Inheritance

\`\`\`solidity
contract Ownable {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
}

contract MyContract is Ownable {
    // Inherits owner and onlyOwner

    function adminOnly() public onlyOwner {
        // Protected function
    }
}
\`\`\`

### Multiple Inheritance

\`\`\`solidity
contract Child is Parent1, Parent2 {
    // Inherits from both
    // Order matters for constructor calls
}
\`\`\`

---

## Interfaces

\`\`\`solidity
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract MyContract {
    function sendTokens(address token, address to, uint256 amount) external {
        IERC20(token).transfer(to, amount);
    }
}
\`\`\`

---

## Common Patterns

### Checks-Effects-Interactions

\`\`\`solidity
function withdraw(uint256 amount) public {
    // CHECKS
    require(balances[msg.sender] >= amount, "Insufficient");

    // EFFECTS
    balances[msg.sender] -= amount;

    // INTERACTIONS
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}
\`\`\`

### Pull Over Push

\`\`\`solidity
// BAD: Push payments
function distribute() public {
    for (uint i = 0; i < users.length; i++) {
        payable(users[i]).transfer(amounts[i]);  // Can fail!
    }
}

// GOOD: Pull payments
mapping(address => uint256) public pendingWithdrawals;

function withdraw() public {
    uint256 amount = pendingWithdrawals[msg.sender];
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
\`\`\`

---

## Gas Optimization Tips

1. **Use calldata for external function arrays**
\`\`\`solidity
function process(uint256[] calldata data) external {} // Cheaper
\`\`\`

2. **Pack storage variables**
\`\`\`solidity
// Uses 2 slots
uint256 a;
uint128 b;
uint128 c;

// Uses 2 slots (packed)
uint128 b;
uint128 c;  // Packed with b
uint256 a;
\`\`\`

3. **Use immutable for constants**
\`\`\`solidity
address public immutable WETH;  // Set once in constructor, no SLOAD
\`\`\`

4. **Cache storage reads**
\`\`\`solidity
uint256 cachedBalance = balances[user];
// Use cachedBalance multiple times
\`\`\`

---

## Security Best Practices

1. **Use latest Solidity** (0.8+ has overflow protection)
2. **Check return values** of external calls
3. **Use ReentrancyGuard** for state-changing functions
4. **Validate all inputs**
5. **Use OpenZeppelin** battle-tested contracts
6. **Get audited** before mainnet

---

## Key Takeaways

1. **Solidity is EVM-specific** — different from web development
2. **State changes cost gas** — optimize storage
3. **Security is critical** — code handles real money
4. **Events are essential** — for off-chain tracking
5. **Inheritance and interfaces** enable composability
6. **Follow patterns** — Checks-Effects-Interactions, etc.

---

## Questions to Consider

1. Why is there no floating-point in Solidity?
2. When should you use memory vs calldata?
3. What's the cost difference between storage and memory?
4. How do you test Solidity contracts?
`,

  "05-ethereum-smart-contracts/04-erc-standards": `# ERC Standards

*Module 4 of Ethereum & Smart Contracts*

---

## What Are ERCs?

**ERC** = Ethereum Request for Comments

ERCs are standards that define common interfaces, enabling:
- Interoperability between contracts
- Composability (DeFi legos)
- Wallet support
- Exchange listings

> If everyone follows the same interface, everything works together.

---

## ERC-20: Fungible Tokens

The most important standard. Enables tokens like USDC, UNI, LINK.

### The Interface

\`\`\`solidity
interface IERC20 {
    // Total supply of tokens
    function totalSupply() external view returns (uint256);

    // Balance of an address
    function balanceOf(address account) external view returns (uint256);

    // Transfer tokens
    function transfer(address to, uint256 amount) external returns (bool);

    // Allowance: how much spender can spend from owner
    function allowance(address owner, address spender) external view returns (uint256);

    // Approve spender to spend tokens
    function approve(address spender, uint256 amount) external returns (bool);

    // Spend approved tokens
    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
\`\`\`

### The Approve/TransferFrom Pattern

Why two-step transfers?

\`\`\`
Direct transfer: User → Recipient
  - User calls transfer()

DeFi interaction: User → Protocol → Action
  1. User approves protocol (approve)
  2. Protocol pulls tokens (transferFrom)
  3. Protocol does something
\`\`\`

This lets protocols operate on your behalf.

### Common Extensions

| Extension | Purpose |
|-----------|---------|
| ERC-20Permit | Gasless approvals via signatures |
| ERC-20Burnable | Tokens can be destroyed |
| ERC-20Pausable | Emergency pause functionality |
| ERC-20Snapshot | Historical balance queries |

---

## ERC-721: Non-Fungible Tokens (NFTs)

Each token is unique. Used for digital art, collectibles, gaming.

### Key Difference from ERC-20

\`\`\`
ERC-20:  "You have 100 tokens"
ERC-721: "You own token #42, token #108, and token #3256"
\`\`\`

### The Interface

\`\`\`solidity
interface IERC721 {
    // Number of tokens owned
    function balanceOf(address owner) external view returns (uint256);

    // Owner of a specific token
    function ownerOf(uint256 tokenId) external view returns (address);

    // Transfer (requires approval)
    function transferFrom(address from, address to, uint256 tokenId) external;

    // Safe transfer (checks receiver can handle NFTs)
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    // Approve one token
    function approve(address to, uint256 tokenId) external;

    // Approve all tokens
    function setApprovalForAll(address operator, bool approved) external;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
}
\`\`\`

### Metadata Extension

\`\`\`solidity
interface IERC721Metadata {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
\`\`\`

The tokenURI returns a link to JSON metadata:

\`\`\`json
{
  "name": "CryptoPunk #7804",
  "description": "An alien punk",
  "image": "ipfs://...",
  "attributes": [
    { "trait_type": "Type", "value": "Alien" }
  ]
}
\`\`\`

---

## ERC-1155: Multi-Token Standard

Combines fungible and non-fungible in one contract.

### Use Cases

- Gaming: Swords (NFT) + Gold (fungible) in one contract
- Batch transfers: Move multiple token types atomically
- Gas efficiency: Shared contract logic

### The Interface

\`\`\`solidity
interface IERC1155 {
    // Balance of specific token ID for an owner
    function balanceOf(address account, uint256 id) external view returns (uint256);

    // Batch balance check
    function balanceOfBatch(
        address[] calldata accounts,
        uint256[] calldata ids
    ) external view returns (uint256[] memory);

    // Transfer single token type
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    // Transfer multiple token types
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}
\`\`\`

### Comparison

| Feature | ERC-20 | ERC-721 | ERC-1155 |
|---------|--------|---------|----------|
| Token types | 1 | Many (each unique) | Many (fungible or not) |
| Batch transfers | No | No | Yes |
| Multiple tokens/contract | No | Yes | Yes |
| Gas efficiency | Good | Poor | Best |

---

## ERC-4626: Tokenized Vaults

Standard for yield-bearing tokens (staking, lending, etc.)

### The Problem Before

Every yield product had different interfaces:
- aTokens (Aave)
- cTokens (Compound)
- yTokens (Yearn)

Wallets and aggregators had to integrate each separately.

### The Solution

Standard vault interface:

\`\`\`solidity
interface IERC4626 is IERC20 {
    // Underlying asset (e.g., USDC)
    function asset() external view returns (address);

    // Total assets under management
    function totalAssets() external view returns (uint256);

    // Deposit assets, receive shares
    function deposit(uint256 assets, address receiver) external returns (uint256 shares);

    // Withdraw assets by burning shares
    function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares);

    // How many shares for X assets?
    function convertToShares(uint256 assets) external view returns (uint256);

    // How many assets for X shares?
    function convertToAssets(uint256 shares) external view returns (uint256);
}
\`\`\`

### Benefits

- Universal vault interface
- Easy DeFi aggregation
- Standardized accounting

---

## Other Important ERCs

### ERC-2612: Permit (Gasless Approvals)

Approve via signature instead of transaction:

\`\`\`solidity
function permit(
    address owner,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v, bytes32 r, bytes32 s
) external;
\`\`\`

User signs message, protocol submits it → saves gas for user.

### ERC-4337: Account Abstraction

Smart contract wallets with:
- Social recovery
- Gas sponsorship
- Batch transactions
- Any signature scheme

### ERC-6551: Token Bound Accounts

NFTs that own assets:

\`\`\`
NFT #42 owns:
  - 100 USDC
  - NFT #101
  - 0.5 ETH

Transfer NFT #42 → Transfer everything it owns
\`\`\`

### ERC-7201: Namespaced Storage

Safe storage layout for upgradeable contracts.

---

## Creating an ERC-20 Token

Using OpenZeppelin:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("My Token", "MTK") {
        _mint(msg.sender, 1000000 * 10**18);  // 1M tokens
    }
}
\`\`\`

That's it! Full ERC-20 implementation in 10 lines.

---

## Why Standards Matter

### Interoperability

\`\`\`
Any ERC-20 token works with:
  - Every DEX (Uniswap, Curve, etc.)
  - Every wallet (MetaMask, Rainbow, etc.)
  - Every lending protocol (Aave, Compound, etc.)
  - Every bridge
  - Every aggregator
\`\`\`

### Composability

DeFi "money legos":

\`\`\`
1. Deposit USDC into Aave → get aUSDC (ERC-20)
2. Deposit aUSDC into Yearn → get yvUSDC (ERC-4626)
3. Use yvUSDC as collateral on Maker → get DAI (ERC-20)

All possible because of standards.
\`\`\`

---

## Key Takeaways

1. **ERC-20 is foundational** — fungible tokens
2. **ERC-721 powers NFTs** — unique tokens
3. **ERC-1155 is versatile** — multiple token types
4. **ERC-4626 standardizes yield** — vaults
5. **Standards enable composability** — the DeFi magic
6. **Use OpenZeppelin** — don't reinvent the wheel

---

## Questions to Consider

1. Why does ERC-20 need approve + transferFrom?
2. When would you use ERC-1155 vs ERC-721?
3. How does ERC-4626 simplify DeFi integrations?
4. What new standards are emerging?
`,

  "06-defi/01-defi-primitives": `# DeFi Primitives

*Module 1 of DeFi*

---

## What Is DeFi?

**DeFi** = Decentralized Finance

Financial services built on blockchain without traditional intermediaries:
- No banks
- No brokers
- No centralized exchanges
- 24/7/365 operation
- Permissionless access

> "Be your own bank" — but actually.

---

## The DeFi Stack

\`\`\`
┌─────────────────────────────────────┐
│      AGGREGATORS & FRONTENDS        │ User interfaces
├─────────────────────────────────────┤
│      YIELD OPTIMIZERS               │ Auto-compound, strategies
├─────────────────────────────────────┤
│      DERIVATIVES                    │ Options, perps, synthetics
├─────────────────────────────────────┤
│      LENDING/BORROWING              │ Aave, Compound
├─────────────────────────────────────┤
│      DECENTRALIZED EXCHANGES        │ Uniswap, Curve
├─────────────────────────────────────┤
│      STABLECOINS                    │ USDC, DAI, USDT
├─────────────────────────────────────┤
│      BASE LAYER (Ethereum, L2s)     │ Settlement
└─────────────────────────────────────┘
\`\`\`

Each layer builds on the ones below. This is **composability**.

---

## Primitive 1: Stablecoins

Tokens pegged to stable assets (usually $1 USD).

### Types

| Type | Examples | Mechanism | Trade-off |
|------|----------|-----------|-----------|
| Fiat-backed | USDC, USDT | Reserves in bank | Centralized, censurable |
| Crypto-backed | DAI | Over-collateralized loans | Capital inefficient |
| Algorithmic | FRAX | Partial collateral + algo | Risk of de-peg |

### Why They Matter

Stablecoins are DeFi's foundation:
- Unit of account
- Medium of exchange
- Escape crypto volatility
- On-ramp from TradFi

---

## Primitive 2: Decentralized Exchanges (DEXs)

Trade without intermediaries.

### Order Book vs AMM

| Order Book (Traditional) | AMM (DeFi) |
|--------------------------|------------|
| Buyers/sellers post orders | Liquidity pools |
| Market makers needed | Anyone provides liquidity |
| Complex, gas-intensive | Simple, gas-efficient |
| Examples: dYdX, Serum | Examples: Uniswap, Curve |

### How AMMs Work

Liquidity providers deposit token pairs:

\`\`\`
Pool: 100 ETH + 200,000 USDC
Price = 200,000 / 100 = $2,000/ETH

Buy 1 ETH:
  New pool: 99 ETH + 202,020 USDC
  Paid: 2,020 USDC (includes slippage)
\`\`\`

### Key Protocols

| Protocol | Specialty |
|----------|-----------|
| Uniswap | General purpose AMM |
| Curve | Stablecoin/pegged assets |
| Balancer | Multi-asset pools |
| SushiSwap | Uniswap fork + extras |

---

## Primitive 3: Lending & Borrowing

Earn yield or access leverage without selling.

### How It Works

**Suppliers**:
1. Deposit assets (ETH, USDC, etc.)
2. Receive interest-bearing tokens
3. Earn yield from borrowers

**Borrowers**:
1. Deposit collateral
2. Borrow against it (typically 50-80% LTV)
3. Pay interest
4. Liquidated if collateral ratio falls

### Key Protocols

| Protocol | TVL | Key Feature |
|----------|-----|-------------|
| Aave | $10B+ | Flash loans, multiple markets |
| Compound | $2B+ | cTokens, governance |
| MakerDAO | $8B+ | DAI stablecoin |

### Liquidations

If collateral value drops too much:

\`\`\`
Deposit: $10,000 ETH
Borrow: $6,000 USDC (60% LTV)
Liquidation threshold: 80% LTV

If ETH drops to $7,500 value:
  LTV = 6,000 / 7,500 = 80% → LIQUIDATED
  Liquidator repays debt, takes collateral at discount
\`\`\`

---

## Primitive 4: Derivatives

Synthetic exposure to assets or events.

### Types

| Derivative | Description | Examples |
|------------|-------------|----------|
| Perpetual Swaps | Futures without expiry | dYdX, GMX |
| Options | Right to buy/sell | Dopex, Lyra |
| Synthetics | Tokens tracking any asset | Synthetix |
| Prediction Markets | Bet on outcomes | Polymarket |

### Perpetual Swaps

Most popular DeFi derivative:
- No expiry date
- Funding rate keeps price aligned
- High leverage (up to 100x)
- $100B+ daily volume

---

## Primitive 5: Yield Aggregators

Automatically optimize yield across protocols.

### How They Work

\`\`\`
1. User deposits asset
2. Protocol finds best yield opportunity
3. Auto-compounds rewards
4. Socializes gas costs

Example:
  Without aggregator: 10% APY, manual claims
  With aggregator: 12% APY (compounding), no effort
\`\`\`

### Key Protocols

| Protocol | Strategy |
|----------|----------|
| Yearn | Multi-strategy vaults |
| Convex | Curve yield boosting |
| Beefy | Cross-chain yield |

---

## DeFi Composability

The magic of DeFi: protocols interact seamlessly.

### Example: Yield Farming Loop

\`\`\`
1. Deposit ETH as collateral (Aave)
2. Borrow stablecoins (Aave)
3. Provide liquidity (Curve)
4. Stake LP tokens (Convex)
5. Earn:
   - Aave deposit interest
   - Curve trading fees
   - CRV rewards
   - CVX rewards
\`\`\`

All in one transaction with flash loans!

---

## Risks in DeFi

### Smart Contract Risk

Code bugs = lost funds. Major hacks:
- The DAO ($60M, 2016)
- Wormhole ($320M, 2022)
- Ronin ($625M, 2022)

### Oracle Risk

Price feeds can be manipulated.

### Liquidation Risk

Volatility can trigger cascading liquidations.

### Regulatory Risk

Uncertain legal status in many jurisdictions.

### Rug Pulls

Anonymous teams can steal funds.

---

## DeFi vs TradFi

| Aspect | TradFi | DeFi |
|--------|--------|------|
| Access | Permissioned | Permissionless |
| Hours | Business hours | 24/7/365 |
| Settlement | T+2 days | Seconds/minutes |
| Custody | Counterparty | Self-custody |
| Transparency | Opaque | Fully auditable |
| Composability | Siloed | Interoperable |
| Innovation | Slow (regulation) | Fast (open source) |

---

## Key Takeaways

1. **Stablecoins are foundational** — DeFi's unit of account
2. **AMMs replaced order books** — democratized market making
3. **Lending enables leverage** — capital efficiency
4. **Derivatives add sophistication** — hedging, speculation
5. **Composability is the superpower** — protocols build on each other
6. **Risks are real** — smart contract bugs, liquidations, hacks

---

## Questions to Consider

1. Can DeFi ever be as safe as TradFi?
2. What happens when a major stablecoin de-pegs?
3. Is over-collateralization sustainable long-term?
4. How will regulation affect DeFi?
`,

  "06-defi/02-amms-liquidity": `# AMMs and Liquidity

*Module 2 of DeFi*

---

## What Is an AMM?

**Automated Market Maker** — a smart contract that holds token reserves and enables trading via mathematical formulas instead of order books.

No counterparty needed. Trade against the pool.

---

## The Constant Product Formula

Uniswap V2's core equation:

\`\`\`
x × y = k

x = Reserve of Token A
y = Reserve of Token B
k = Constant (invariant)
\`\`\`

### Example Trade

\`\`\`
Pool: 100 ETH × 200,000 USDC = 20,000,000 (k)

Buy 1 ETH:
  New ETH: 99
  New USDC: 20,000,000 / 99 = 202,020
  Cost: 202,020 - 200,000 = 2,020 USDC
  Effective price: $2,020/ETH
\`\`\`

Larger trades = more slippage (worse price).

---

## Liquidity Provision

### How It Works

1. Deposit equal value of both tokens
2. Receive LP tokens (pool shares)
3. Earn trading fees (typically 0.3%)
4. Withdraw anytime with accumulated fees

### LP Token Value

\`\`\`
Your share = Your LP tokens / Total LP tokens

If pool has: 100 ETH + 200,000 USDC
You hold: 10% of LP tokens
Your value: 10 ETH + 20,000 USDC
\`\`\`

---

## Impermanent Loss

The risk of providing liquidity.

### What Is It?

When prices change, LPs end up with different ratios than if they'd just held.

\`\`\`
Initial: 10 ETH ($2,000) + 20,000 USDC = $40,000

ETH 2x to $4,000:
  If HELD: 10 ETH ($40,000) + 20,000 USDC = $60,000
  As LP:   ~7.07 ETH + 28,284 USDC = $56,568

Impermanent Loss: $3,432 (5.7%)
\`\`\`

### When Is It Worst?

| Price Change | Impermanent Loss |
|--------------|------------------|
| 1.25x | 0.6% |
| 1.50x | 2.0% |
| 2x | 5.7% |
| 3x | 13.4% |
| 4x | 20.0% |
| 5x | 25.5% |

### Mitigations

- Collect enough fees to offset IL
- Use stablecoin pairs (minimal IL)
- Use concentrated liquidity carefully
- Hedge with options

---

## AMM Variations

### Uniswap V3: Concentrated Liquidity

LPs choose price ranges:

\`\`\`
Instead of: Liquidity from $0 to ∞
You choose: Liquidity from $1,800 to $2,200

Result:
  - More capital efficient (up to 4000x)
  - Earn more fees in range
  - But: Out of range = earning nothing
\`\`\`

### Curve: StableSwap

Optimized for similar-priced assets:

\`\`\`
Constant Product: High slippage
StableSwap: Low slippage for stables

USDC/USDT trade:
  Uniswap V2: 0.3% slippage
  Curve: 0.01% slippage
\`\`\`

### Balancer: Weighted Pools

Multi-asset pools with custom weights:

\`\`\`
Traditional: 50/50 ratio
Balancer: 80/20, 60/20/20, any combination
\`\`\`

---

## Key Metrics

### TVL (Total Value Locked)

Assets in the protocol:
- Uniswap: ~$5B
- Curve: ~$2B
- Balancer: ~$1B

### Volume

Daily trading volume indicates usage.

### APR/APY

Yield for liquidity providers:
\`\`\`
APR = (Fees × 365) / TVL
APY = APR with compounding
\`\`\`

---

## Key Takeaways

1. **AMMs use math, not order books**
2. **x × y = k** is the foundation
3. **Impermanent loss** is the main LP risk
4. **Concentrated liquidity** improves efficiency but adds complexity
5. **Different curves** for different use cases

---

## Questions to Consider

1. When is providing liquidity profitable?
2. Why do stablecoin pools have lower IL?
3. How does concentrated liquidity change the game?
`,

  "06-defi/03-lending-borrowing": `# Lending and Borrowing

*Module 3 of DeFi*

---

## How DeFi Lending Works

### The Basics

1. **Suppliers** deposit assets → earn interest
2. **Borrowers** post collateral → borrow assets → pay interest
3. **Smart contracts** manage everything automatically

No credit checks. No KYC. Just collateral.

---

## Over-Collateralization

Unlike traditional loans, DeFi requires more collateral than you borrow:

\`\`\`
Traditional: Borrow $100,000 with income proof
DeFi: Deposit $150,000 ETH → Borrow $100,000 USDC

Collateral Factor: 66% (100k/150k)
\`\`\`

### Why Over-Collateralized?

- No identity verification
- No legal recourse
- Volatile collateral
- Trustless liquidation

---

## Interest Rates

Rates adjust automatically based on utilization:

\`\`\`
Utilization = Borrowed / Supplied

Low utilization (20%): 2% APR
Medium (50%): 5% APR
High (80%): 15% APR
Very high (95%): 50%+ APR
\`\`\`

This incentivizes balance:
- High rates attract suppliers
- High rates discourage borrowing

---

## Liquidations

When collateral ratio falls below threshold:

\`\`\`
Deposit: 10 ETH at $2,000 = $20,000
Borrow: $15,000 USDC (75% LTV)
Liquidation threshold: 80%

ETH drops to $1,875:
  Collateral: $18,750
  LTV: 15,000 / 18,750 = 80%
  → LIQUIDATION

Liquidator:
  - Repays part of debt
  - Receives collateral + bonus (5-15%)
\`\`\`

### Liquidation Cascades

In crashes, liquidations cause more selling → more liquidations.

---

## Flash Loans

Borrow millions with zero collateral — if repaid in same transaction.

\`\`\`
Single transaction:
1. Borrow 1M USDC (no collateral!)
2. Arbitrage, liquidate, or refinance
3. Repay 1M + fee
4. If not repaid → entire tx reverts
\`\`\`

Use cases:
- Arbitrage
- Collateral swaps
- Self-liquidation
- One-click leverage

---

## Key Protocols

| Protocol | Key Features |
|----------|--------------|
| Aave | Flash loans, variable/stable rates, multi-chain |
| Compound | COMP governance, cTokens |
| MakerDAO | CDP-based, DAI stablecoin creation |

---

## Key Takeaways

1. **Over-collateralization** replaces credit checks
2. **Interest rates** are algorithmic
3. **Liquidations** keep the system solvent
4. **Flash loans** enable complex atomic operations
`,

  "06-defi/04-stablecoins": `# Stablecoins Deep Dive

*Module 4 of DeFi*

---

## What Are Stablecoins?

Tokens designed to maintain stable value, usually pegged to $1 USD.

**Market size**: $130B+ (2024)
**Daily volume**: $50B+ (more than most stocks)

---

## Types of Stablecoins

### 1. Fiat-Backed (Centralized)

Real dollars in a bank account.

| Stablecoin | Issuer | Reserves |
|------------|--------|----------|
| USDC | Circle | Cash, T-bills |
| USDT | Tether | "Reserves" (less transparent) |
| BUSD | Paxos | Cash, T-bills (discontinued) |

**Pros**: Simple, redeemable 1:1
**Cons**: Centralized, censurable, counterparty risk

### 2. Crypto-Backed (Decentralized)

Backed by over-collateralized crypto.

\`\`\`
DAI (MakerDAO):
  Deposit $150 ETH
  Mint $100 DAI
  150% collateralization ratio
\`\`\`

**Pros**: Decentralized, transparent
**Cons**: Capital inefficient, liquidation risk

### 3. Algorithmic (Experimental)

Maintain peg through supply/demand mechanics.

\`\`\`
Price > $1: Increase supply
Price < $1: Decrease supply
\`\`\`

**Warning**: UST/LUNA collapsed in 2022 ($40B lost)

---

## The Terra/LUNA Collapse

### What Happened (May 2022)

1. UST was algorithmic stablecoin
2. Large sell pressure broke the peg
3. Death spiral: UST down → LUNA minted → LUNA down → repeat
4. $40B wiped out in days

### Lesson

Pure algorithmic stables are high-risk. Collateral matters.

---

## Comparing Stablecoins

| Type | Example | Collateral | Decentralized | Risk |
|------|---------|------------|---------------|------|
| Fiat-backed | USDC | 100% USD | No | Bank failure, censorship |
| Crypto-backed | DAI | 150%+ crypto | Yes | Liquidation cascade |
| Algorithmic | FRAX | Partial | Yes | De-peg spiral |

---

## Key Takeaways

1. **Fiat-backed dominates** but is centralized
2. **Crypto-backed is trustless** but capital inefficient
3. **Algorithmic is risky** — Terra proved it
4. **No perfect stablecoin** — all have tradeoffs
`,

  "07-trading-markets/01-market-structure": `# Market Structure

*Module 1 of Trading & Markets*

---

## Crypto Market Characteristics

### Key Differences from Traditional Markets

| Aspect | Traditional | Crypto |
|--------|-------------|--------|
| Hours | 9:30-4:00 weekdays | 24/7/365 |
| Settlement | T+2 days | Minutes |
| Custody | Broker holds | Self-custody possible |
| Fragmentation | Few exchanges | 500+ exchanges |
| Regulation | Heavy | Light/varies |

---

## Exchange Types

### Centralized Exchanges (CEX)

Traditional order book model, custodial.

| Exchange | Type | Features |
|----------|------|----------|
| Binance | CEX | Largest, many pairs |
| Coinbase | CEX | Regulated, US-focused |
| Kraken | CEX | Established, fiat on-ramp |

**Pros**: Deep liquidity, fiat support, fast
**Cons**: Custodial risk, KYC required

### Decentralized Exchanges (DEX)

Smart contract-based, non-custodial.

| Exchange | Type | Specialty |
|----------|------|-----------|
| Uniswap | AMM | General trading |
| dYdX | Order book | Perpetuals |
| Curve | AMM | Stablecoins |

**Pros**: Self-custody, permissionless
**Cons**: Higher slippage, gas costs

---

## Order Types

| Order | Description | Use Case |
|-------|-------------|----------|
| Market | Execute immediately at best price | Fast execution |
| Limit | Execute at specified price or better | Price control |
| Stop-loss | Sell if price drops below level | Risk management |
| Stop-limit | Limit order triggered by stop | Precise exits |

---

## Liquidity

### What Is Liquidity?

Ability to trade without moving the price.

\`\`\`
Deep liquidity: Trade $1M, price moves 0.1%
Shallow liquidity: Trade $1M, price moves 5%
\`\`\`

### Measuring Liquidity

- **Bid-ask spread**: Tighter = more liquid
- **Order book depth**: More orders = more liquid
- **Volume**: Higher = more liquid

---

## Key Takeaways

1. **24/7 markets** mean constant opportunity and risk
2. **CEXs dominate** but DEXs growing
3. **Fragmentation** creates arbitrage opportunities
4. **Liquidity varies** widely across venues
`,

  "07-trading-markets/02-technical-analysis": `# Technical Analysis

*Module 2 of Trading & Markets*

---

## What Is Technical Analysis?

**Technical Analysis (TA)** studies price and volume to predict future movements. Unlike fundamental analysis (which asks "what is this worth?"), TA asks "what are other traders likely to do?"

### Core Assumptions
1. **Market action discounts everything** - All information is reflected in price
2. **Prices move in trends** - Momentum tends to continue
3. **History repeats** - Patterns recur due to human psychology

### The Debate

Critics argue TA is self-fulfilling prophecy or astrology. Supporters counter that it captures market psychology. The truth: TA works because enough people believe it works, creating real effects.

---

## Chart Types

### Candlestick Charts
The most popular format, showing four prices per period:

\`\`\`
    ▲
    │   ← Wick/Shadow (High)
┌───┴───┐
│       │ ← Body (Open to Close)
│ GREEN │   Green/White = Close > Open (Bullish)
│       │   Red/Black = Close < Open (Bearish)
└───┬───┘
    │   ← Wick/Shadow (Low)
    ▼
\`\`\`

### Common Candlestick Patterns

| Pattern | Shape | Signal |
|---------|-------|--------|
| Doji | + shape | Indecision |
| Hammer | Small body, long lower wick | Reversal (bullish) |
| Shooting Star | Small body, long upper wick | Reversal (bearish) |
| Engulfing | Large candle engulfs previous | Strong reversal |
| Morning Star | 3-candle reversal pattern | Bullish reversal |

---

## Support and Resistance

### Support
Price level where buying pressure exceeds selling - price "bounces" off this floor.

### Resistance
Price level where selling pressure exceeds buying - price "rejected" at this ceiling.

\`\`\`
Price
  │
──┼────────────────────
  │     Resistance      ▼
  │  ╱╲    ╱╲    ╱╲    Price rejected
  │ ╱  ╲  ╱  ╲  ╱  ╲
  │╱    ╲╱    ╲╱    ╲
──┼─────────────────────
  │     Support         ▲
  │                     Price bounces
\`\`\`

### Key Concepts
- **Role reversal**: Broken support becomes resistance (and vice versa)
- **Round numbers**: Psychological levels (\$50,000 BTC, \$1 for altcoins)
- **Multiple tests**: More touches = stronger level

---

## Trend Analysis

### Identifying Trends

\`\`\`
Uptrend:
  Higher Highs (HH) and Higher Lows (HL)
         ╱╲ HH
        ╱  ╲
   ╱╲ HL    ╲╱╲ HH
  ╱  ╲        ╱
 ╱ HL ╲──────╱

Downtrend:
  Lower Highs (LH) and Lower Lows (LL)
 ╲    LH
  ╲  ╱╲
   ╲╱  ╲  LH
   LL   ╲╱╲
          ╲
          LL
\`\`\`

### Trendlines
Connect lows in uptrend, highs in downtrend:
- Minimum 2 touches to establish
- 3+ touches = stronger line
- Breaking trendline = potential reversal

---

## Moving Averages

Smooth price data to identify trends:

### Simple Moving Average (SMA)
Average of last N periods:
\`\`\`
SMA(20) = (P₁ + P₂ + ... + P₂₀) / 20
\`\`\`

### Exponential Moving Average (EMA)
Weights recent prices more heavily - faster to react.

### Common Uses
| MA Period | Use |
|-----------|-----|
| 9/12 EMA | Short-term trend |
| 20 SMA | Swing trading |
| 50 SMA | Medium-term trend |
| 200 SMA | Long-term trend |

### Golden Cross / Death Cross
- **Golden Cross**: 50 SMA crosses ABOVE 200 SMA → Bullish
- **Death Cross**: 50 SMA crosses BELOW 200 SMA → Bearish

---

## Key Indicators

### Relative Strength Index (RSI)
Momentum oscillator (0-100):
- **Above 70**: Overbought (potential reversal down)
- **Below 30**: Oversold (potential reversal up)
- **Divergence**: Price makes new high but RSI doesn't = weakness

### MACD (Moving Average Convergence Divergence)
Trend-following momentum indicator:
- **MACD Line**: 12 EMA - 26 EMA
- **Signal Line**: 9 EMA of MACD Line
- **Histogram**: MACD - Signal

**Signals:**
- MACD crosses above signal = bullish
- MACD crosses below signal = bearish

### Bollinger Bands
Volatility indicator - 20 SMA with 2 standard deviation bands:
- **Squeeze**: Bands narrow = low volatility, big move coming
- **Walk the band**: Strong trend rides upper/lower band
- **Mean reversion**: Price returns to middle band

### Volume
**Volume confirms moves:**
- Price up + volume up = strong buying
- Price up + volume down = weak rally
- Breakout + high volume = legitimate
- Breakout + low volume = likely false

---

## Chart Patterns

### Continuation Patterns
Signal trend will continue:

| Pattern | Description |
|---------|-------------|
| Flag | Small rectangle against trend |
| Pennant | Small triangle against trend |
| Triangle | Converging trendlines |

### Reversal Patterns
Signal trend may reverse:

| Pattern | Description |
|---------|-------------|
| Head & Shoulders | Three peaks, middle highest |
| Double Top/Bottom | Two peaks/troughs at same level |
| Triple Top/Bottom | Three tests of resistance/support |

### Measuring Moves
Many patterns have "measured move" targets:
- **Head & Shoulders**: Target = neckline - (head - neckline)
- **Double Top**: Target = neckline - (top - neckline)
- **Breakout**: Target = base of pattern projected from breakout

---

## Crypto-Specific Considerations

### Volatility
Crypto is more volatile than traditional markets:
- Wider stop losses needed
- Patterns can break faster
- 24/7 trading means no gaps (usually)

### Manipulation
Lower liquidity enables manipulation:
- Watch for stop hunts (wicks through obvious levels)
- Whale walls can create artificial S/R
- Be skeptical of "perfect" patterns

### Timeframes
| Timeframe | Use |
|-----------|-----|
| 1m-5m | Scalping (not recommended) |
| 15m-1h | Day trading |
| 4h-1D | Swing trading |
| 1W-1M | Position trading, macro view |

Higher timeframes = more reliable signals

---

## Risk Management

### Position Sizing
Never risk more than you can afford to lose on any trade:
\`\`\`
Position Size = (Account × Risk%) / (Entry - Stop Loss)

Example:
Account: $10,000
Risk per trade: 2% = $200
Entry: $50,000 BTC
Stop: $48,000 BTC
Position = $200 / $2,000 = 0.1 BTC
\`\`\`

### Stop Losses
- **Fixed**: Set percentage below entry
- **Technical**: Below support/trendline
- **Trailing**: Follows price up, locks in profit

### Risk/Reward
Target minimum 2:1 reward/risk:
- Risk \$100 to make \$200
- Only need to be right 40% of time to profit

---

## Key Takeaways

1. **TA is probabilistic** - not prediction, pattern recognition
2. **Combine indicators** - no single indicator is reliable alone
3. **Higher timeframes** are more reliable than lower
4. **Risk management** matters more than entry signals
5. **Psychology** - TA works because traders make it work
6. **Crypto is manipulated** - be skeptical of "obvious" setups
`,

  "07-trading-markets/03-mev-trading": `# MEV and Trading Dynamics

*Module 3 of Trading & Markets*

---

## What Is MEV?

**MEV (Maximal Extractable Value)** is the value that can be extracted by reordering, inserting, or censoring transactions within a block. Originally called "Miner Extractable Value," now "Maximal" since validators (not just miners) can extract it.

### Why Does MEV Exist?

In traditional finance, trade execution order is based on arrival time. In blockchain:
- Block producers choose transaction order
- Pending transactions are visible in the mempool
- Profitable orderings create extraction opportunities

\`\`\`
       Mempool (Pending Transactions)
       ┌─────────────────────────────┐
       │  Tx1: Buy 10 ETH @ market   │  ← Visible to everyone!
       │  Tx2: Sell 5 ETH @ 3000     │
       │  Tx3: Swap USDC → DAI       │
       └─────────────────────────────┘
                    │
                    ▼
       Block Producer orders them:
       [Tx_attacker_front] → [Tx1] → [Tx_attacker_back]
\`\`\`

---

## Types of MEV

### 1. Frontrunning
Placing your transaction BEFORE a target transaction:

**Example - DEX Trade Frontrunning:**
1. Attacker sees: "Buy 100 ETH on Uniswap"
2. Attacker submits: Buy ETH (higher gas to go first)
3. Price increases from attacker's buy
4. Victim's trade executes at worse price
5. Attacker sells for profit

\`\`\`
Price
   │
   │     ╱── Attacker sells here
   │    ╱
   │   ╱── Victim buys here (slipped)
   │  ╱
   │ ╱── Attacker buys here
   │╱
   └────────────────────► Time
       ↑     ↑      ↑
      Buy  Victim  Sell
\`\`\`

### 2. Backrunning
Placing your transaction AFTER a target transaction:

**Example - Liquidation Backrunning:**
1. Large oracle update makes position liquidatable
2. Bots race to liquidate and claim reward
3. First transaction after oracle update wins

### 3. Sandwich Attacks
Combination of front AND back running:

\`\`\`
Transaction Order:
1. Attacker BUY  (frontrun) → Price goes up
2. Victim BUY   (target)    → Price goes up more
3. Attacker SELL (backrun)  → Profit from victim's slippage
\`\`\`

**Victim Impact:**
- Worse execution price (slippage)
- Paid MEV to attacker unknowingly
- Same final token balance, fewer dollars

### 4. Arbitrage
Profiting from price differences across venues:

\`\`\`
Uniswap: 1 ETH = 3000 USDC
Sushiswap: 1 ETH = 3010 USDC

Arbitrage:
1. Buy 10 ETH on Uniswap for 30,000 USDC
2. Sell 10 ETH on Sushiswap for 30,100 USDC
3. Profit: 100 USDC (minus gas)
\`\`\`

This is generally considered "good MEV" - it aligns prices across venues.

### 5. Liquidations
DeFi loans become liquidatable when collateral value drops:

\`\`\`solidity
// Simplified liquidation
if (collateralValue < debtValue * 1.5) {
    // Position is liquidatable
    // Liquidator repays debt, claims collateral + bonus
}
\`\`\`

Liquidation bots compete for the bonus (often 5-10%).

---

## MEV Supply Chain

### Pre-Merge (PoW)
\`\`\`
Searchers → Flashbots → Miners → Block
   │           │          │
   │      Bundle relay    │
   │                     Select highest bid
   Find MEV
\`\`\`

### Post-Merge (PoS) - PBS Architecture
\`\`\`
Searchers → Builders → Relays → Proposers → Block
    │           │         │          │
 Find MEV   Build      Validate   Propose
          optimal     & relay     to chain
           block
\`\`\`

**Proposer-Builder Separation (PBS):**
- **Searchers**: Find MEV opportunities
- **Builders**: Construct optimal blocks from bundles
- **Relays**: Connect builders to proposers, verify blocks
- **Proposers**: Validators who propose blocks

---

## Flashbots and MEV Infrastructure

### What Is Flashbots?
Research organization and infrastructure for:
- Democratizing MEV extraction
- Reducing negative externalities
- Enabling private transaction submission

### Flashbots Protect
Users can submit transactions privately:
- Transaction not visible in public mempool
- Protected from frontrunning/sandwiching
- Goes directly to Flashbots builders

### MEV-Boost
Middleware connecting validators to block builders:

\`\`\`
Validator running MEV-Boost:
1. Receives bids from multiple builders
2. Selects highest-paying block
3. Proposes that block
4. Earns MEV share via bid
\`\`\`

---

## MEV Impact on Users

### Costs to Regular Users

| Activity | MEV Risk |
|----------|----------|
| Large DEX swap | Sandwich attack |
| NFT mint | Frontrunning |
| DeFi position | Liquidation race |
| Any pending tx | Potential extraction |

### Quantifying Impact
Estimated MEV extracted on Ethereum:
- 2021: ~$600M
- 2022: ~$300M
- Cumulative: Billions extracted from users

### Hidden Costs
MEV often invisible to users:
- No explicit fee
- Just worse execution
- Hard to measure individually

---

## Protecting Against MEV

### For Users

**1. Use Private Transaction Services**
- Flashbots Protect
- MEV Blocker (by CoW Protocol)
- Private RPCs

**2. Set Tight Slippage**
\`\`\`
Slippage tolerance: 0.5%
- Less profit for sandwichers
- Risk: Transaction may fail
\`\`\`

**3. Use MEV-Resistant DEXs**
- CoW Swap (batch auctions)
- 1inch Fusion
- MEV-aware routing

**4. Timing**
- Low activity periods = less MEV competition
- But also less liquidity

### For Developers

**1. Use Commit-Reveal Schemes**
\`\`\`solidity
// Phase 1: Commit
function commit(bytes32 hashedOrder) {
    commitments[msg.sender] = hashedOrder;
}

// Phase 2: Reveal (after commit period)
function reveal(uint256 amount, bytes32 salt) {
    require(hash(amount, salt) == commitments[msg.sender]);
    // Execute trade - no frontrunning possible
}
\`\`\`

**2. Batch Auctions**
- Collect orders over time
- Execute at single clearing price
- No ordering advantage

**3. Time-Weighted Average Price (TWAP)**
- Split large orders over time
- Harder to sandwich
- Reduces price impact

---

## MEV and Network Health

### Negative Effects
- **User harm**: Worse prices, extracted value
- **Network congestion**: Priority gas auctions
- **Centralization**: Sophisticated actors dominate
- **Chain reorganization risk**: Large MEV incentivizes reorgs

### Positive Effects
- **Price efficiency**: Arbitrage aligns prices
- **Liquidation health**: Ensures DeFi solvency
- **Validator revenue**: MEV increases staking rewards

### The Debate

> "MEV is a tax on users"
vs.
> "MEV is the cost of decentralization - centralized systems hide these costs"

Reality: MEV is inherent to blockchain design. Goal is minimizing harmful MEV while preserving useful MEV.

---

## Cross-Domain MEV

### Multi-Chain MEV
With multiple chains, new opportunities emerge:
- Cross-chain arbitrage
- Bridge exploitation
- Rollup-to-L1 MEV

### Example: L2 to L1 Arbitrage
\`\`\`
Arbitrum: ETH = $3000
Mainnet: ETH = $3005

Arbitrager:
1. Buy on Arbitrum
2. Bridge to Mainnet
3. Sell at higher price
4. Pocket difference minus fees
\`\`\`

### Sequencer MEV
L2 sequencers have ultimate ordering power:
- Can extract MEV from L2 transactions
- Some protocols share MEV with users
- Decentralized sequencers reduce this risk

---

## Future of MEV

### MEV Minimization
- Better AMM designs (less predictable)
- Order flow auctions
- Encrypted mempools

### MEV Redistribution
- Share MEV back to users
- Protocol-captured MEV for public goods
- Token holder MEV distribution

### MEV-Resistant Designs
- Threshold encryption for transactions
- Trusted execution environments (TEEs)
- Verifiable delay functions

---

## Key Takeaways

1. **MEV is inherent** to transparent blockchains with ordering control
2. **Sandwich attacks** extract billions from regular users
3. **Flashbots/PBS** institutionalized MEV extraction
4. **Protection exists**: Private tx services, tight slippage, MEV-resistant DEXs
5. **Developers** can design against MEV (commit-reveal, batch auctions)
6. **Some MEV is good** (arbitrage, liquidations maintain system health)
7. **The future** is minimization and redistribution, not elimination
`,

  "08-advanced-protocols/01-layer2-scaling": `# Layer 2 Scaling

*Module 1 of Advanced Protocols*

---

## The Scaling Problem

Ethereum processes ~15 transactions per second. Visa processes ~65,000. This limitation comes from blockchain's core trade-off: every node must verify every transaction.

### The Trilemma
\`\`\`
         Decentralization
              ╱╲
             ╱  ╲
            ╱    ╲
           ╱  ??  ╲
          ╱________╲
    Security ────── Scalability
\`\`\`

Traditional blockchains sacrifice scalability. Layer 2s try to have all three.

---

## How L2s Work

**Core Insight**: Execute transactions off-chain, inherit L1 security.

\`\`\`
Layer 2 (Fast, Cheap)          Layer 1 (Secure, Slow)
┌──────────────────┐           ┌──────────────────┐
│  Tx1, Tx2, Tx3   │           │                  │
│  Tx4, Tx5, Tx6   │──Batch───▶│  Proof/Data      │
│  Tx7, Tx8, Tx9   │           │  Posted          │
└──────────────────┘           └──────────────────┘
   1000s of TPS                   15 TPS
   $0.01/tx                       $10/tx
\`\`\`

L2s batch many transactions and post a summary to L1. Security comes from the ability to verify this summary on L1.

---

## Rollup Types

### Optimistic Rollups
**Philosophy**: Assume transactions are valid, challenge if fraud detected.

\`\`\`
Transaction Flow:
1. Batch posted to L1
2. 7-day challenge period begins
3. Anyone can submit fraud proof if invalid
4. No challenge? Batch finalized

┌─────────────────────────────────────────┐
│  Batch Posted  │  Challenge Window  │ Final
└────────────────┴─────────────────────┘
     Day 0              Days 1-7        Day 7+
\`\`\`

**Pros:**
- EVM compatible (easy to deploy existing code)
- Lower computation overhead
- Mature ecosystem (Arbitrum, Optimism, Base)

**Cons:**
- 7-day withdrawal delay
- Requires active fraud watchers
- Data still on-chain

### ZK Rollups
**Philosophy**: Prove validity mathematically, no trust required.

\`\`\`
Transaction Flow:
1. Execute transactions off-chain
2. Generate cryptographic proof
3. Post proof + data to L1
4. L1 verifies proof → immediately valid

┌─────────────────────────────────────────┐
│  Execute  │  Prove  │  Verify  │ Final
└───────────┴─────────┴──────────┘
   Fast        Slow      Instant    Instant
\`\`\`

**Pros:**
- Instant finality (no challenge period)
- Stronger security guarantees
- More data compression possible

**Cons:**
- Expensive proof generation
- EVM compatibility harder (zkEVMs)
- Less mature

---

## Major L2 Comparison

| L2 | Type | TPS | Avg Fee | TVL |
|-----|------|-----|---------|-----|
| Arbitrum One | Optimistic | ~40 | $0.10 | ~$10B |
| Optimism | Optimistic | ~40 | $0.10 | ~$7B |
| Base | Optimistic | ~40 | $0.05 | ~$5B |
| zkSync Era | ZK | ~100 | $0.15 | ~$1B |
| Starknet | ZK | ~100 | $0.05 | ~$500M |
| Polygon zkEVM | ZK | ~50 | $0.02 | ~$100M |

*Values approximate and fluctuate*

---

## Data Availability

Rollups must make transaction data available so anyone can reconstruct state and verify/challenge.

### Options

**1. On-Chain (Rollup)**
- All data posted to L1
- Most expensive but most secure
- Used by: Arbitrum, Optimism, zkSync

**2. Off-Chain (Validium)**
- Data stored elsewhere (committee, DA layer)
- Cheaper but additional trust assumptions
- Used by: Immutable X, some Starknet modes

**3. Hybrid (Volition)**
- Users choose per-transaction
- Security vs cost trade-off per use case

### EIP-4844 (Proto-Danksharding)
Introduced "blob" transactions:
- Temporary data storage (~18 days)
- 10-100x cheaper than calldata
- Rollups post data in blobs
- Reduced L2 fees significantly

---

## Bridging to L2

### Deposit (L1 → L2)
\`\`\`
1. Lock funds on L1 bridge contract
2. L2 sees deposit transaction
3. Mint equivalent tokens on L2
4. User can transact on L2

Time: ~10 minutes (depends on L2)
\`\`\`

### Withdrawal (L2 → L1)

**Optimistic Rollups:**
\`\`\`
1. Initiate withdrawal on L2
2. Wait 7 days challenge period
3. Prove withdrawal on L1
4. Claim funds

Time: 7+ days (can use fast bridges)
\`\`\`

**ZK Rollups:**
\`\`\`
1. Initiate withdrawal on L2
2. Wait for next proof submission
3. Claim funds on L1

Time: Hours (depends on proof frequency)
\`\`\`

### Fast Bridges
Services that front liquidity to avoid withdrawal delays:
- Hop Protocol
- Across
- Stargate

User pays small fee, receives funds quickly.

---

## zkEVM Types

Not all ZK rollups are created equal:

| Type | EVM Compatibility | Proof Efficiency |
|------|-------------------|------------------|
| Type 1 | Full Ethereum equivalence | Slowest proofs |
| Type 2 | EVM equivalent | Slow proofs |
| Type 2.5 | EVM equiv + gas changes | Medium |
| Type 3 | Almost EVM equivalent | Faster |
| Type 4 | Compiles Solidity to ZK | Fastest |

**Trade-off**: More compatibility = slower proofs

- **Polygon zkEVM**: Type 2 (high compatibility)
- **zkSync Era**: Type 4 (custom compiler)
- **Starknet**: Type 4 (Cairo language)

---

## L3s and Appchains

### Layer 3s
L2s on top of L2s:

\`\`\`
L1 (Ethereum)
    └── L2 (Arbitrum)
            └── L3 (Your App Chain)
\`\`\`

**Use cases:**
- Application-specific chains
- Custom execution environments
- Further cost reduction

### Appchains
Dedicated chains for single applications:
- Custom parameters
- Dedicated blockspace
- Can use any DA layer

**Examples:**
- dYdX (moved from L2 to Cosmos appchain)
- Immutable X (gaming-focused)

---

## Sequencers and Decentralization

### Current State
Most L2s have centralized sequencers:
- Single entity orders transactions
- Can censor transactions
- Can extract MEV
- Single point of failure

### Decentralization Roadmap
\`\`\`
Current           Near-term          Long-term
Centralized  →   Permissioned   →   Fully
Sequencer        Sequencer Set      Decentralized
\`\`\`

### Shared Sequencing
Multiple L2s share decentralized sequencer:
- Atomic cross-L2 transactions
- Reduced fragmentation
- Network effects

---

## Security Considerations

### Optimistic Rollup Risks
- **Sequencer down**: L1 escape hatch exists
- **No challengers**: Need at least one honest watcher
- **Long delays**: 7 days for withdrawals

### ZK Rollup Risks
- **Prover centralization**: Most have centralized provers
- **Upgrade risk**: Many have upgradeable contracts
- **New cryptography**: Less battle-tested

### What to Check
Before using an L2:
1. Is there an L1 escape hatch?
2. Who can upgrade contracts?
3. How decentralized is sequencing?
4. What's the challenge/proof mechanism?

---

## The L2 Landscape

\`\`\`
                    L2 Ecosystem
    ┌─────────────────────────────────────────┐
    │         Optimistic Rollups              │
    │  ┌──────────┐ ┌──────────┐ ┌────────┐   │
    │  │ Arbitrum │ │ Optimism │ │  Base  │   │
    │  └──────────┘ └──────────┘ └────────┘   │
    ├─────────────────────────────────────────┤
    │            ZK Rollups                   │
    │  ┌──────────┐ ┌──────────┐ ┌────────┐   │
    │  │  zkSync  │ │ Starknet │ │  Scroll│   │
    │  └──────────┘ └──────────┘ └────────┘   │
    └─────────────────────────────────────────┘
                        │
                   All settle to
                        │
                        ▼
                ┌───────────────┐
                │   Ethereum    │
                │   Layer 1     │
                └───────────────┘
\`\`\`

---

## Key Takeaways

1. **L2s inherit L1 security** while providing cheap, fast transactions
2. **Optimistic rollups** are mature and EVM-compatible but have withdrawal delays
3. **ZK rollups** offer faster finality but are more complex
4. **Data availability** is the key trade-off (cost vs security)
5. **Sequencer decentralization** is still in progress
6. **EIP-4844** dramatically reduced L2 costs
7. **The future is multi-L2** with shared sequencing and interoperability
`,

  "08-advanced-protocols/02-zero-knowledge": `# Zero-Knowledge Proofs

*Module 2 of Advanced Protocols*

---

## What Are Zero-Knowledge Proofs?

A **zero-knowledge proof (ZKP)** lets you prove you know something without revealing what you know.

### The Classic Example: Ali Baba's Cave
\`\`\`
     ┌─────────────────┐
     │                 │
     │    A ←───┐      │
     │         │      │
     │    ┌────┴────┐ │
Entrance │         │ │
────────►│  Magic  │ │
     │   │  Door   │ │
     │   │         │ │
     │   └────┬────┘ │
     │        │      │
     │    B ──┘      │
     │               │
     └───────────────┘

Peggy (Prover) knows the magic word.
Victor (Verifier) wants proof.

1. Victor waits at entrance
2. Peggy enters, chooses path A or B (Victor doesn't see)
3. Victor shouts "come out path A!" or "come out path B!"
4. Peggy comes out the requested path
5. Repeat 20 times

If Peggy doesn't know the word, she has 50% chance each time.
20 successes = 99.9999% confidence she knows.
Victor learns NOTHING about the word itself.
\`\`\`

---

## Properties of Zero-Knowledge Proofs

### 1. Completeness
If the statement is true and both parties are honest, the verifier will be convinced.

### 2. Soundness
If the statement is false, no cheating prover can convince an honest verifier (except with negligible probability).

### 3. Zero-Knowledge
The verifier learns nothing beyond the validity of the statement. They couldn't distinguish a real proof from a simulation.

---

## Why ZKPs Matter for Blockchain

### Scalability (ZK Rollups)
Prove 10,000 transactions are valid with one small proof:
\`\`\`
Without ZK: Verify each of 10,000 txs = 10,000 operations
With ZK:    Verify one proof = 1 operation

Result: Orders of magnitude more throughput
\`\`\`

### Privacy
Prove transaction validity without revealing:
- Who sent it
- Who received it
- How much was sent

### Compliance
Prove you're on a whitelist without revealing identity:
\`\`\`
Traditional: "I'm John Smith, here's my ID"
With ZK: "I can prove I'm on the approved list" (reveals nothing else)
\`\`\`

---

## ZK Proof Systems Comparison

| System | Proof Size | Verify Time | Trusted Setup | Quantum Safe |
|--------|------------|-------------|---------------|--------------|
| Groth16 | ~200 bytes | ~3ms | Yes (per circuit) | No |
| PLONK | ~400 bytes | ~5ms | Yes (universal) | No |
| STARKs | ~50 KB | ~10ms | No | Yes |
| Bulletproofs | ~1 KB | ~30ms | No | No |

---

## ZK-SNARKs

**Succinct Non-interactive ARgument of Knowledge**

### Properties
- **Succinct**: Small proof size, fast verification
- **Non-interactive**: Single message from prover to verifier
- **ARgument**: Computationally sound (not information-theoretic)
- **Knowledge**: Prover must "know" the witness

### How They Work (Simplified)
\`\`\`
1. Computation → Arithmetic Circuit
   "I know x where hash(x) = y"
   ↓
   Converted to mathematical constraints

2. Circuit → R1CS (Rank-1 Constraint System)
   ↓
   System of equations

3. R1CS → QAP (Quadratic Arithmetic Program)
   ↓
   Polynomial representation

4. QAP → Proof
   ↓
   Cryptographic proof using elliptic curves
\`\`\`

### The Trusted Setup Problem
Groth16 SNARKs require a "toxic waste" ceremony:
\`\`\`
Generate parameters:
τ (tau) = random secret

Public parameters derived from τ
τ must be DESTROYED

If anyone knows τ, they can create fake proofs!
\`\`\`

**Solution: Multi-Party Computation (MPC)**
- Many participants contribute randomness
- Only ONE needs to be honest
- Zcash ceremony had 87 participants

---

## ZK-STARKs

**Scalable Transparent ARgument of Knowledge**

### Key Differences from SNARKs
| Aspect | SNARKs | STARKs |
|--------|--------|--------|
| Trusted Setup | Required | Not needed |
| Proof Size | ~200 bytes | ~50 KB |
| Quantum Resistance | No | Yes |
| Prover Time | Faster | Slower |
| Cryptographic Basis | Elliptic curves | Hash functions |

### How STARKs Work (Simplified)
\`\`\`
1. Algebraic Intermediate Representation (AIR)
   ↓
   Computation as polynomial constraints

2. FRI Protocol (Fast Reed-Solomon IOP)
   ↓
   Commit to polynomial using Merkle trees

3. Verification
   ↓
   Check random points satisfy constraints
\`\`\`

### Advantages
- No trusted setup (transparent)
- Quantum-resistant (uses hash functions only)
- Scales better for large computations

### Disadvantages
- Larger proof sizes
- More complex implementation

---

## PLONK and Universal Setup

**Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge**

### The Universal Setup Advantage
\`\`\`
Groth16: New ceremony for each circuit
         Circuit A → Setup A
         Circuit B → Setup B

PLONK:   One ceremony for all circuits
         Universal Setup → Works for A, B, C, ...
\`\`\`

### Popular Variants
- **TurboPLONK**: Optimized lookup tables
- **UltraPLONK**: Custom gates for efficiency
- **Halo 2**: Recursive proofs without trusted setup

---

## Recursive Proofs

Proofs that verify other proofs:
\`\`\`
Proof₁ (valid txs 1-100)
Proof₂ (valid txs 101-200)
Proof₃ (valid txs 201-300)
        ↓
Recursive Proof: "Proof₁, Proof₂, Proof₃ are all valid"
        ↓
Final Proof: One proof covers all 300 txs
\`\`\`

### Applications
- **Mina Protocol**: Entire blockchain in 22KB
- **Incrementally Verifiable Computation**: Prove long computations
- **Proof Aggregation**: Combine many proofs into one

---

## ZK in Practice: Use Cases

### 1. ZK Rollups
\`\`\`solidity
// Simplified ZK rollup verifier
contract Rollup {
    function submitBatch(
        bytes32 newStateRoot,
        bytes calldata proof
    ) external {
        require(
            verifier.verify(
                [oldStateRoot, newStateRoot, txHash],
                proof
            ),
            "Invalid proof"
        );
        stateRoot = newStateRoot;
    }
}
\`\`\`

### 2. Private Transactions (Zcash, Tornado Cash)
\`\`\`
Prove:
- "I have a valid unspent note in the commitment tree"
- "I know the secret key for this note"
- "The nullifier prevents double-spending"

Without revealing:
- Which note is being spent
- Who is sending/receiving
- The amount
\`\`\`

### 3. Identity/Credentials
\`\`\`
Traditional: "Here's my passport showing I'm over 18"
ZK: "I can prove I'm over 18 without revealing my age or identity"

Applications:
- KYC without data exposure
- Voting eligibility
- Professional credentials
\`\`\`

### 4. Gaming
- Prove you made a valid move (chess, card games)
- Hidden information games (fog of war)
- Provably fair randomness

---

## Building ZK Applications

### Tooling Landscape

| Tool | Language | Use Case |
|------|----------|----------|
| Circom | DSL | General circuits |
| Noir | Rust-like | General purpose |
| Cairo | Custom | StarkNet apps |
| Halo2 | Rust | Advanced circuits |
| ZoKrates | DSL | Ethereum proofs |

### Simple Example: Hash Preimage
\`\`\`circom
// Circom circuit: prove you know preimage of hash
pragma circom 2.0.0;

include "circomlib/circuits/poseidon.circom";

template HashPreimage() {
    signal input preimage;  // Private input (witness)
    signal input hash;      // Public input

    component hasher = Poseidon(1);
    hasher.inputs[0] <== preimage;

    // Constraint: hash(preimage) must equal claimed hash
    hash === hasher.out;
}

component main {public [hash]} = HashPreimage();
\`\`\`

### Workflow
\`\`\`
1. Write circuit (define constraints)
2. Compile to R1CS/arithmetic circuit
3. Generate proving/verification keys
4. Create proof (with private witness)
5. Verify proof (with public inputs)
\`\`\`

---

## Performance Considerations

### Prover Time
Creating proofs is expensive:
\`\`\`
Small circuit (1K constraints): ~1 second
Medium circuit (100K constraints): ~30 seconds
Large circuit (10M constraints): ~10 minutes

Hardware acceleration helps:
- GPU proving: 10-100x faster
- ASICs: Even faster (in development)
\`\`\`

### Circuit Optimization
\`\`\`
Fewer constraints = faster proving

Expensive operations:
- Division (many constraints)
- Comparisons
- Non-native field arithmetic

Cheap operations:
- Addition
- Multiplication by constant
- Hash functions (if designed for ZK)
\`\`\`

---

## Future Developments

### Folding Schemes (Nova, SuperNova)
Incrementally build proofs without full recursion overhead:
- Proof for step 1
- "Fold" step 2 into proof
- Continue folding...
- Final verification is cheap

### Client-Side Proving
Run provers in browsers/phones:
- WASM-based provers
- Lightweight proof systems
- Privacy without infrastructure

### ZK Coprocessors
Offload ZK computation:
- Prove heavy computation happened correctly
- Verify cheaply on-chain
- Examples: Axiom, RISC Zero

---

## Key Takeaways

1. **ZKPs prove knowledge without revealing it** - revolutionary for privacy and scaling
2. **SNARKs**: Small proofs, fast verification, need trusted setup
3. **STARKs**: No trusted setup, quantum resistant, larger proofs
4. **PLONK**: Universal setup, flexible, widely used
5. **ZK Rollups** use ZKPs for L2 scaling
6. **Privacy applications**: Transactions, identity, compliance
7. **Prover efficiency** is the main bottleneck - improving rapidly
8. **The future**: Recursive proofs, client-side proving, ZK everywhere
`,

  "08-advanced-protocols/03-interoperability": `# Interoperability and Bridges

*Module 3 of Advanced Protocols*

---

## The Multi-Chain Problem

Each blockchain is an isolated system:
\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Ethereum   │     │   Solana    │     │   Cosmos    │
│             │     │             │     │             │
│  State A    │     │  State B    │     │  State C    │
│  Rules A    │     │  Rules B    │     │  Rules C    │
└─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │
      └───────────────────┼───────────────────┘
                          │
                     No direct
                    communication
\`\`\`

Blockchains can't natively verify each other's state. Bridges solve this.

---

## How Bridges Work

### Basic Mechanism: Lock and Mint
\`\`\`
Source Chain (Ethereum)          Destination Chain (Polygon)
┌──────────────────────┐        ┌──────────────────────┐
│                      │        │                      │
│  User: Lock 1 ETH    │───────▶│  Bridge: Mint wETH   │
│  in Bridge Contract  │  msg   │  to User             │
│                      │        │                      │
└──────────────────────┘        └──────────────────────┘

On Return:
┌──────────────────────┐        ┌──────────────────────┐
│                      │        │                      │
│  Bridge: Unlock ETH  │◀───────│  User: Burn wETH     │
│  to User             │  msg   │                      │
│                      │        │                      │
└──────────────────────┘        └──────────────────────┘
\`\`\`

The hard part: How does the destination chain know the lock really happened?

---

## Bridge Trust Models

### 1. Externally Verified (Multisig)
\`\`\`
Validators: Alice, Bob, Carol, Dave, Eve (3 of 5 required)

Lock on Ethereum
      │
      ▼
Validators observe and sign attestation
      │
      ▼
Submit attestation to Polygon
      │
      ▼
Polygon mints wETH
\`\`\`

**Trust**: Majority of validators are honest
**Examples**: WBTC, Multichain (defunct), many early bridges

### 2. Optimistic (Fraud Proofs)
\`\`\`
Relayer posts claim: "User locked 1 ETH"
      │
      ▼
Challenge period: Anyone can dispute
      │
      ▼
No dispute? → Execute
Dispute? → Verify on-chain, slash if fraud
\`\`\`

**Trust**: At least one honest watcher
**Examples**: Connext, Across (in part)

### 3. Light Client (Header Verification)
\`\`\`
Run light client of source chain on destination:

Source Block Header
      │
      ├── Block Hash
      ├── State Root
      └── Signatures/Proofs
      │
      ▼
Destination verifies header is valid
      │
      ▼
Prove transaction inclusion via Merkle proof
\`\`\`

**Trust**: Source chain consensus
**Examples**: IBC (Cosmos), Snowbridge

### 4. ZK Light Client
\`\`\`
Source chain produces blocks
      │
      ▼
Generate ZK proof of header validity
      │
      ▼
Destination verifies proof (cheap!)
      │
      ▼
Prove transaction inclusion
\`\`\`

**Trust**: Source chain consensus + cryptographic proof
**Examples**: Succinct, zkBridge, Polyhedra

### Trust Spectrum
\`\`\`
More Trust Required                    Less Trust Required
      │                                      │
      ▼                                      ▼
Custodian → Multisig → Optimistic → Light Client → ZK Light Client
   1/1        3/5      1-of-N      Consensus      Consensus+Math
\`\`\`

---

## Types of Bridged Assets

### Wrapped/Synthetic Assets
Representation of locked asset:
\`\`\`
1 ETH locked on Ethereum → 1 wETH minted on Polygon

wETH is an IOU backed by locked ETH
Risk: If bridge is hacked, wETH loses backing
\`\`\`

### Canonical vs Non-Canonical
\`\`\`
Canonical wETH: Official bridge, one version
Non-Canonical: Multiple bridges → Multiple versions!

Problem: USDC.e vs axlUSDC vs ceUSDC
         All represent USDC, but different bridges
         Not fungible with each other!
\`\`\`

### Native Asset Transfers
Some bridges move actual assets (not wrapped):
- Use liquidity pools on each chain
- Market makers provide liquidity
- No wrapping, but limited by pool size

---

## Bridge Security Incidents

### Largest Bridge Hacks

| Hack | Amount | Cause |
|------|--------|-------|
| Ronin (2022) | $624M | Compromised validator keys (5/9) |
| Wormhole (2022) | $325M | Signature verification bug |
| Nomad (2022) | $190M | Merkle proof validation bug |
| Harmony (2022) | $100M | Compromised multisig (2/5) |
| BNB Bridge (2022) | $570M | IAVL tree proof bug |

### Common Vulnerabilities

**1. Key Compromise**
\`\`\`
Multisig: 3 of 5 keys required
Attacker: Compromises 3 keys
Result: Full control of bridge funds
\`\`\`

**2. Smart Contract Bugs**
\`\`\`solidity
// Vulnerable pattern (simplified)
function processMessage(bytes calldata proof) {
    // Bug: Didn't verify proof correctly
    if (proof.length > 0) {  // Too weak!
        mint(receiver, amount);
    }
}
\`\`\`

**3. Replay Attacks**
\`\`\`
Valid message on Chain A
      │
      ▼
Replayed on Chain B (where it shouldn't work)
      │
      ▼
Free minting!
\`\`\`

---

## Modern Bridge Designs

### Liquidity Networks
\`\`\`
Instead of Lock-Mint:

Chain A                              Chain B
┌─────────────┐                    ┌─────────────┐
│  Pool: USDC │                    │  Pool: USDC │
│  Liquidity  │◀──────────────────▶│  Liquidity  │
└─────────────┘   Rebalancing      └─────────────┘
      │                                  │
   User deposits                    User receives
   1000 USDC                        1000 USDC
      │                             (from pool)
      ▼                                  ▲
  Pool balance                    Pool balance
  increases                       decreases
\`\`\`

**Advantages**: Native assets, fast, no wrapped tokens
**Disadvantages**: Limited by liquidity, slippage

**Examples**: Hop, Across, Stargate

### Intent-Based Bridges
\`\`\`
User: "I want 1 ETH on Arbitrum"
      │
      ▼
Solver/Relayer: Fills order on Arbitrum
      │
      ▼
User: Sends ETH on Mainnet to relayer
      │
      ▼
Settlement ensures atomicity
\`\`\`

**Examples**: Across, Socket, Li.Fi

### Canonical Rollup Bridges
\`\`\`
Ethereum ←→ Arbitrum (Native Bridge)

Security: Inherits L1 security
Speed: 7 days for withdrawal (optimistic)
       Hours (ZK rollups)
Cost: Cheapest per tx
\`\`\`

---

## Cross-Chain Communication

### Message Passing
Beyond asset transfer - send arbitrary messages:
\`\`\`
Contract A (Ethereum)           Contract B (Polygon)
┌─────────────────────┐        ┌─────────────────────┐
│  function send() {  │        │  function receive() │
│    bridge.send(     │───────▶│    // Execute       │
│      chainId,       │  msg   │    // cross-chain   │
│      data           │        │    // logic         │
│    );               │        │  }                  │
│  }                  │        │                     │
└─────────────────────┘        └─────────────────────┘
\`\`\`

**Use Cases:**
- Cross-chain governance
- Multi-chain NFTs
- Cross-chain DeFi

### Protocols

| Protocol | Model | Chains |
|----------|-------|--------|
| LayerZero | Ultra Light Node | 50+ |
| Axelar | Validator set | 40+ |
| Wormhole | Guardian set | 25+ |
| Hyperlane | Modular security | 30+ |
| CCIP (Chainlink) | Oracle network | 10+ |

---

## IBC: The Cosmos Standard

Inter-Blockchain Communication - the most mature cross-chain protocol:

\`\`\`
Chain A (Cosmos SDK)            Chain B (Cosmos SDK)
┌──────────────────┐           ┌──────────────────┐
│  IBC Module      │◀─────────▶│  IBC Module      │
│                  │           │                  │
│  Light Client B  │           │  Light Client A  │
└──────────────────┘           └──────────────────┘
         │                              │
    Relayers observe and relay packets
\`\`\`

### How IBC Works
1. **Connection**: Chains establish relationship
2. **Channel**: Applications create channels over connections
3. **Packets**: Data sent through channels
4. **Light Clients**: Each chain tracks other's consensus

### IBC Advantages
- Trust-minimized (light client verification)
- Standardized (works across Cosmos ecosystem)
- Battle-tested (billions transferred)

---

## Aggregators and Meta-Bridges

Finding the best route across bridges:
\`\`\`
User Request: 10,000 USDC from Ethereum to Arbitrum

Aggregator checks:
├── Stargate: $9,990 received, 2 min
├── Hop: $9,985 received, 5 min
├── Official Bridge: $9,995 received, 7 days
└── Across: $9,992 received, 1 min

Recommendation: Across (best speed/cost ratio)
\`\`\`

**Examples**: Li.Fi, Socket, Bungee

---

## Security Best Practices

### For Users
1. **Use canonical bridges** when possible (slower but safest)
2. **Check bridge TVL** and track record
3. **Diversify** across bridges for large amounts
4. **Wait for confirmations** before considering finalized
5. **Verify contract addresses** independently

### For Protocols
1. **Minimize trust assumptions** (ZK > Light Client > Multisig)
2. **Rate limiting** - cap transfer amounts
3. **Monitoring** - detect anomalies quickly
4. **Bug bounties** - incentivize finding bugs
5. **Upgrade delays** - time to respond to issues

---

## The Future of Interoperability

### Shared Security
Multiple chains sharing validator set:
- EigenLayer restaking
- Mesh security
- Cross-chain slashing

### ZK Everywhere
- ZK light clients for all chains
- Proof aggregation
- Near-instant finality

### Chain Abstraction
User doesn't think about chains:
\`\`\`
User: "I want to buy this NFT"
System: Automatically routes funds from wherever
        Executes on target chain
        User never knows which chain
\`\`\`

---

## Key Takeaways

1. **Bridges are high-value targets** - billions stolen in hacks
2. **Trust models vary widely** - ZK > Light Client > Multisig > Custodian
3. **No perfect bridge** - trade-offs between speed, cost, security
4. **Wrapped assets have risk** - dependent on bridge security
5. **Liquidity networks** offer native asset transfers
6. **IBC is the gold standard** for trust-minimized bridging
7. **Aggregators** help find optimal routes
8. **The future is chain abstraction** - users shouldn't see chains
`,

  "09-security/01-smart-contract-security": `# Smart Contract Security

*Module 1 of Security*

---

## Why Smart Contract Security Is Different

In crypto, **code is money**. Unlike traditional software:

| Traditional Bug | Smart Contract Bug |
|-----------------|-------------------|
| Crash → Restart | Loss of funds |
| Patch → Deploy | Immutable (often) |
| Internal review | Adversarial environment |
| Limited exposure | $100B+ at risk |

A single vulnerability can drain millions instantly. There are no do-overs.

---

## The Attacker's Mindset

Thinking like an attacker:
\`\`\`
For every function:
1. What if I call this 1000 times?
2. What if I call this with max/min values?
3. What if I call this from another contract?
4. What if I call functions in unexpected order?
5. What if I'm both sender AND receiver?
6. What if I manipulate external data?
\`\`\`

---

## Vulnerability: Reentrancy

### The Classic Attack
\`\`\`solidity
// VULNERABLE CONTRACT
contract VulnerableBank {
    mapping(address => uint256) public balances;

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount);

        // 1. Send ETH (EXTERNAL CALL!)
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success);

        // 2. Update balance
        balances[msg.sender] -= amount;  // TOO LATE!
    }
}

// ATTACKER
contract Attacker {
    VulnerableBank bank;

    receive() external payable {
        // Re-enter before balance is updated!
        if (address(bank).balance >= 1 ether) {
            bank.withdraw(1 ether);
        }
    }

    function attack() public {
        bank.withdraw(1 ether);
    }
}
\`\`\`

### The Attack Flow
\`\`\`
Attacker.attack()
    └── Bank.withdraw(1 ETH)
            ├── Check: balance >= 1 ETH ✓
            ├── Send 1 ETH to Attacker
            │       └── Attacker.receive()
            │               └── Bank.withdraw(1 ETH)  // RE-ENTER!
            │                       ├── Check: balance >= 1 ETH ✓ (not updated!)
            │                       ├── Send 1 ETH
            │                       │       └── ... (repeat)
            │                       └── Update balance
            └── Update balance
\`\`\`

### Prevention: Checks-Effects-Interactions
\`\`\`solidity
// SAFE VERSION
function withdraw(uint256 amount) public {
    // 1. CHECKS
    require(balances[msg.sender] >= amount);

    // 2. EFFECTS (update state FIRST)
    balances[msg.sender] -= amount;

    // 3. INTERACTIONS (external call LAST)
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
}
\`\`\`

### Additional Protection: Reentrancy Guard
\`\`\`solidity
bool private locked;

modifier nonReentrant() {
    require(!locked, "Reentrancy detected");
    locked = true;
    _;
    locked = false;
}

function withdraw(uint256 amount) public nonReentrant {
    // Now safe from reentrancy
}
\`\`\`

---

## Vulnerability: Access Control

### Missing Access Control
\`\`\`solidity
// VULNERABLE
contract Token {
    function mint(address to, uint256 amount) public {
        // Anyone can mint unlimited tokens!
        _mint(to, amount);
    }
}

// SAFE
contract Token {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
\`\`\`

### tx.origin Vulnerability
\`\`\`solidity
// VULNERABLE - uses tx.origin
function withdraw() public {
    require(tx.origin == owner);  // BAD!
    payable(owner).transfer(balance);
}

// Attack: Trick owner to call malicious contract
// Malicious contract calls withdraw()
// tx.origin = owner, but msg.sender = attacker

// SAFE - uses msg.sender
function withdraw() public {
    require(msg.sender == owner);
    payable(owner).transfer(balance);
}
\`\`\`

---

## Vulnerability: Integer Issues

### Overflow/Underflow (Pre-0.8.0)
\`\`\`solidity
// Solidity < 0.8.0: VULNERABLE
uint8 balance = 255;
balance += 1;  // Wraps to 0!

uint8 balance = 0;
balance -= 1;  // Wraps to 255!

// Solidity >= 0.8.0: Safe by default
// Uses checked arithmetic, reverts on overflow
\`\`\`

### Precision Loss
\`\`\`solidity
// VULNERABLE - division before multiplication
uint256 fee = amount / 100 * feePercent;  // Precision lost!

// SAFE - multiply first
uint256 fee = amount * feePercent / 100;

// Example:
// amount = 150, feePercent = 3
// Bad:  150 / 100 * 3 = 1 * 3 = 3
// Good: 150 * 3 / 100 = 450 / 100 = 4
\`\`\`

---

## Vulnerability: Oracle Manipulation

### Spot Price Manipulation
\`\`\`solidity
// VULNERABLE - uses spot price
function getPrice() public view returns (uint256) {
    // Attacker can manipulate in same block!
    return tokenA.balanceOf(pool) / tokenB.balanceOf(pool);
}

// ATTACK FLOW
// 1. Flash loan huge amount of tokenA
// 2. Dump into pool (manipulates ratio)
// 3. Call vulnerable function (gets wrong price)
// 4. Profit from mispricing
// 5. Restore pool, repay flash loan
\`\`\`

### Safe Oracle Patterns
\`\`\`solidity
// SAFE - Use TWAP (Time-Weighted Average Price)
function getPrice() public view returns (uint256) {
    // Average price over time, resistant to manipulation
    return oracle.consult(token, 1 hours);
}

// SAFE - Use Chainlink
function getPrice() public view returns (uint256) {
    (, int256 price,,,) = priceFeed.latestRoundData();
    require(price > 0, "Invalid price");
    return uint256(price);
}
\`\`\`

---

## Vulnerability: Flash Loan Attacks

### The Pattern
\`\`\`
1. Borrow huge sum (no collateral needed)
2. Manipulate something (price, governance, etc.)
3. Profit from manipulation
4. Repay loan + fee
5. Keep profit

All in ONE transaction - no capital at risk!
\`\`\`

### Example: Governance Attack
\`\`\`solidity
// Vulnerable governance
function propose(bytes calldata action) public {
    require(token.balanceOf(msg.sender) >= threshold);
    // Attacker flash loans tokens, proposes, returns tokens
}

// Safe governance
function propose(bytes calldata action) public {
    require(token.getPastVotes(msg.sender, block.number - 1) >= threshold);
    // Uses HISTORICAL balance - can't flash loan
}
\`\`\`

---

## Vulnerability: Signature Issues

### Missing Nonce (Replay Attack)
\`\`\`solidity
// VULNERABLE
function executeWithSig(
    address to,
    uint256 amount,
    bytes calldata signature
) public {
    bytes32 hash = keccak256(abi.encodePacked(to, amount));
    address signer = ECDSA.recover(hash, signature);
    require(signer == owner);
    // Same signature can be replayed!
}

// SAFE
mapping(bytes32 => bool) public usedHashes;

function executeWithSig(
    address to,
    uint256 amount,
    uint256 nonce,
    bytes calldata signature
) public {
    bytes32 hash = keccak256(abi.encodePacked(to, amount, nonce));
    require(!usedHashes[hash], "Already used");
    usedHashes[hash] = true;

    address signer = ECDSA.recover(hash, signature);
    require(signer == owner);
}
\`\`\`

### Signature Malleability
\`\`\`solidity
// ECDSA signatures have two valid forms: (v, r, s) and (v', r, -s mod n)
// Use OpenZeppelin's ECDSA library which handles this
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
\`\`\`

---

## Vulnerability: Logic Errors

### Incorrect Comparison
\`\`\`solidity
// VULNERABLE
function isWhitelisted(address user) public view returns (bool) {
    return whitelist[user] = true;  // ASSIGNMENT, not comparison!
}

// SAFE
function isWhitelisted(address user) public view returns (bool) {
    return whitelist[user] == true;
}
\`\`\`

### Missing Validation
\`\`\`solidity
// VULNERABLE
function transfer(address to, uint256 amount) public {
    balances[msg.sender] -= amount;
    balances[to] += amount;
    // What if to == address(0)?
    // What if amount > balance?
}

// SAFE
function transfer(address to, uint256 amount) public {
    require(to != address(0), "Invalid recipient");
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount;
    balances[to] += amount;
}
\`\`\`

---

## Security Tools

### Static Analysis
| Tool | Type | Use |
|------|------|-----|
| Slither | Static analyzer | Find common bugs |
| Mythril | Symbolic execution | Deep analysis |
| Securify | Pattern matching | Security properties |

### Testing
\`\`\`solidity
// Foundry fuzz testing
function testFuzz_Transfer(address to, uint256 amount) public {
    vm.assume(to != address(0));
    vm.assume(amount <= balanceOf(address(this)));

    uint256 balanceBefore = balanceOf(to);
    transfer(to, amount);
    assertEq(balanceOf(to), balanceBefore + amount);
}
\`\`\`

### Formal Verification
Prove properties mathematically:
\`\`\`
Property: "Total supply never changes"
Prove: For all possible function calls,
       totalSupply_before == totalSupply_after
\`\`\`

---

## Audit Process

### Pre-Audit Checklist
1. **Documentation**: Explain what the code should do
2. **Tests**: 90%+ coverage
3. **Comments**: Explain non-obvious logic
4. **Specification**: Define invariants

### During Audit
\`\`\`
Auditors will:
1. Manual line-by-line review
2. Run automated tools
3. Test edge cases
4. Review economic incentives
5. Check external dependencies
\`\`\`

### Audit ≠ Guaranteed Security
- Auditors are human, miss things
- Code can change after audit
- Economic attacks may not be caught
- Still valuable, but not a silver bullet

---

## Best Practices

### Development
1. **Use battle-tested libraries** (OpenZeppelin)
2. **Keep contracts simple** - complexity = bugs
3. **Test extensively** - fuzzing, invariant tests
4. **Document everything** - future you will thank you

### Deployment
1. **Start with limits** - cap deposits initially
2. **Use timelocks** - delay sensitive operations
3. **Have a pause mechanism** - for emergencies
4. **Monitor continuously** - detect anomalies

### Emergency Response
\`\`\`solidity
// Emergency pause
bool public paused;

modifier whenNotPaused() {
    require(!paused, "Contract paused");
    _;
}

function pause() external onlyOwner {
    paused = true;
}
\`\`\`

---

## Key Takeaways

1. **Reentrancy** - Follow checks-effects-interactions, use guards
2. **Access control** - Never forget authorization, use msg.sender not tx.origin
3. **Oracle manipulation** - Use TWAPs or Chainlink, never spot prices
4. **Integer issues** - Use Solidity 0.8+, multiply before divide
5. **Audits help** but aren't guarantees
6. **Test extensively** - fuzzing finds what you miss
7. **Start limited** - you can always increase limits
8. **Have emergency plans** - pause mechanisms, monitoring
`,

  "09-security/02-famous-hacks": `# Famous Hacks Analysis

*Module 2 of Security*

---

## Why Study Hacks?

The crypto industry has lost over **$10 billion** to hacks and exploits. Each incident teaches valuable lessons about:
- Common vulnerability patterns
- Security best practices
- The importance of defense in depth

> "Those who cannot remember the past are condemned to repeat it." - George Santayana

---

## The DAO Hack (2016)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | June 17, 2016 |
| Loss | ~$60M (3.6M ETH) |
| % of ETH Supply | ~15% |
| Vulnerability | Reentrancy |

### What Was The DAO?
The first major decentralized venture fund:
- Crowdfunded 11.5M ETH (~$150M at the time)
- Token holders vote on investments
- Largest crowdfund in history at the time

### The Attack
\`\`\`solidity
// Vulnerable withdrawal function (simplified)
function splitDAO() public {
    // 1. Check balance
    require(balances[msg.sender] > 0);

    // 2. Send ETH (EXTERNAL CALL!)
    msg.sender.call{value: balances[msg.sender]}("");

    // 3. Update balance (TOO LATE!)
    balances[msg.sender] = 0;
}

// Attacker contract
receive() external payable {
    if (address(dao).balance > 0) {
        dao.splitDAO();  // Re-enter before balance updated
    }
}
\`\`\`

### The Aftermath
- Ethereum community split on response
- **Hard fork** to return funds (Ethereum)
- **No fork** chain continued (Ethereum Classic)
- First major demonstration of reentrancy danger

### Lessons
1. Always use checks-effects-interactions pattern
2. Consider reentrancy guards
3. Governance for emergency response is crucial
4. Immutability vs. pragmatic recovery trade-off

---

## Mt. Gox (2014)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | February 2014 |
| Loss | 850,000 BTC (~$450M then, $40B+ at peak) |
| % of Exchange | 100% |
| Cause | Poor security, inside job suspected |

### What Happened?
Mt. Gox handled 70% of all Bitcoin trades:
- Hot wallet compromised over years
- Transaction malleability exploited
- Inadequate internal controls
- Possibly inside involvement

\`\`\`
Timeline:
2011: First hack (~80,000 BTC)
2011-2014: Slow drain of funds
2014: Trading halted
2014: Bankruptcy filed
2023: Creditors finally receiving partial refunds
\`\`\`

### Lessons
1. **Not your keys, not your coins**
2. Exchanges are honeypots - minimize holdings
3. Proof of reserves matters
4. Centralized custody = centralized risk

---

## Ronin Bridge Hack (2022)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | March 23, 2022 |
| Loss | $624M (173,600 ETH + 25.5M USDC) |
| Detection Time | 6 days later |
| Cause | Compromised validator keys |

### What Was Ronin?
Axie Infinity's Ethereum sidechain:
- 9 validators, 5-of-9 multisig
- Bridged billions in assets

### The Attack
\`\`\`
Step 1: Social engineering (fake job offer)
        ↓
Step 2: Compromised Sky Mavis employee
        ↓
Step 3: Access to 4 Sky Mavis validator keys
        ↓
Step 4: Axie DAO validator also compromised
        (Sky Mavis had temporary access from Nov 2021)
        ↓
Step 5: 5/9 keys = full control
        ↓
Step 6: Drain bridge contract
\`\`\`

### Why 6 Days to Detect?
- No automated monitoring
- Manual processes
- Alert only when user couldn't withdraw

### Lessons
1. **Multisig threshold matters** (5/9 too low for this value)
2. **Key distribution** - don't concentrate with one entity
3. **Active monitoring** is essential
4. **Social engineering** is often the weakest link
5. **Temporary access** must be revoked

---

## Wormhole Hack (2022)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | February 2, 2022 |
| Loss | $325M (120,000 wETH) |
| Cause | Signature verification bypass |
| Recovery | Jump Crypto (VC) made users whole |

### The Vulnerability
\`\`\`solidity
// Simplified vulnerable code
function complete_transfer(bytes memory vaa) public {
    // Verify guardian signatures
    // BUG: Used deprecated verification that could be bypassed!
    verify_signatures(vaa);

    // Mint wrapped tokens
    mint(destination, amount);
}
\`\`\`

The attacker:
1. Found deprecated "verify_signatures" allowed bypass
2. Forged valid-looking message
3. Minted 120,000 wETH from nothing
4. Bridged to Ethereum, cashed out

### Lessons
1. **Upgrade carefully** - deprecated code is dangerous
2. **Signature verification** is critical, get it reviewed
3. **Cross-chain bridges** are high-value targets
4. **Quick response** - Jump's bailout preserved trust

---

## Nomad Bridge Hack (2022)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | August 1, 2022 |
| Loss | $190M |
| Unique Aspect | "Crowd-sourced" exploit |
| Cause | Merkle proof validation bug |

### What Made This Unique?
First "crowd-sourced" hack:
\`\`\`
Normal hack:
  Hacker finds bug → Drains funds

Nomad hack:
  Hacker finds bug → Posts exploit tx
        ↓
  Anyone can copy → Just change address
        ↓
  Hundreds of copycats join
        ↓
  ~300+ addresses drain remaining funds
\`\`\`

### The Bug
\`\`\`solidity
// The fatal flaw (simplified)
function process(bytes memory message, bytes32[] calldata proof) {
    bytes32 root = calculateRoot(message, proof);

    // BUG: Initialization left root as 0x00...00
    // ANY message with empty proof matched!
    require(acceptableRoots[root], "Invalid root");

    // Process message (release funds)
}
\`\`\`

After a routine upgrade, the acceptable root was set to \`0x00...00\`, making ANY message valid!

### Lessons
1. **Upgrade testing** must be rigorous
2. **Initialization bugs** are common and critical
3. **Public exploits** enable copycats
4. **Speed matters** - funds drain in hours

---

## Poly Network Hack (2021)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | August 10, 2021 |
| Loss | $611M |
| Returned | 100% |
| Unique Aspect | Attacker returned funds |

### The Attack
Cross-chain protocol vulnerability:
\`\`\`
1. Attacker exploits cross-chain message handling
2. Changes "keeper" (admin) to attacker's address
3. With keeper access, drains all funds
4. Poly Network begs for return
5. Attacker claims "for fun" - returns everything
6. Poly Network offers $500K bounty, job offer
\`\`\`

### Why Did They Return?
Attacker claimed:
- "Hacking for fun"
- "Not interested in money"
- Wanted to expose vulnerability

Reality likely:
- Blockchain traceability
- Difficulty laundering $611M
- Legal pressure

### Lessons
1. **Access control** in cross-chain systems is critical
2. **Blockchain transparency** deters some attackers
3. **Communication channels** with attackers can help
4. **Bounty programs** provide legitimate alternatives

---

## Euler Finance Hack (2023)

### The Numbers
| Metric | Value |
|--------|-------|
| Date | March 13, 2023 |
| Loss | $197M |
| Returned | 100% (after negotiation) |
| Cause | Donation attack + liquidation logic |

### The Attack Vector
Complex multi-step attack:
\`\`\`
1. Flash loan USDC and DAI
2. Deposit in Euler, mint eTokens
3. Use eTokens as collateral, borrow more
4. Self-liquidate with reserved funds
5. Donate (not repay) tokens to reserve
6. Creates accounting imbalance
7. Drain remaining value
\`\`\`

### The Recovery
\`\`\`
Day 0: Hack occurs
Day 1: Euler offers 10% bounty
Day 7: On-chain messages between parties
Day 20: Negotiations via intermediary
Day 23: 100% returned

Attacker sent message: "I want to make this easy on
all those affected. Not my intention to keep stolen
funds."
\`\`\`

### Lessons
1. **Donation mechanics** are attack vectors
2. **Self-liquidation** edge cases need review
3. **Negotiation** can work for recovery
4. **On-chain messages** enable communication

---

## Common Attack Patterns

### Smart Contract Bugs

| Pattern | Examples |
|---------|----------|
| Reentrancy | The DAO, Cream Finance |
| Access Control | Poly Network, Wintermute |
| Price Manipulation | Harvest, bZx, Mango |
| Logic Errors | Nomad, Wormhole |
| Integer Issues | BatchOverflow |

### Operational Failures

| Pattern | Examples |
|---------|----------|
| Key Compromise | Ronin, Harmony |
| Insider Threat | Mt. Gox (suspected) |
| Poor Key Management | Slope wallet leak |
| Upgrade Bugs | Nomad |

### Economic Exploits

| Pattern | Examples |
|---------|----------|
| Flash Loans + Oracle | Cream, Harvest |
| Governance Attacks | Beanstalk |
| Arbitrage | Many MEV incidents |

---

## Attack Statistics

### By Year
\`\`\`
2016: $60M (The DAO)
2017: $500M+ (Parity multisig)
2018: $1B+ (exchange hacks)
2019: $300M+
2020: $500M+ (DeFi summer)
2021: $3B+
2022: $4B+ (bridges)
2023: $2B+
\`\`\`

### By Category
\`\`\`
Bridges: ~50% of funds lost
DeFi protocols: ~30%
Exchanges: ~15%
Other: ~5%
\`\`\`

### Recovery Rate
- Less than 20% of hacked funds recovered
- Recovery more likely when:
  - Attacker identified
  - Negotiation possible
  - Quick response

---

## Key Takeaways

1. **Reentrancy** caused the first major hack, still relevant today
2. **Bridges** are the #1 target - billions lost
3. **Social engineering** bypasses technical security
4. **Multisigs** need sufficient threshold AND key distribution
5. **Upgrades** introduce new risks
6. **Monitoring and alerts** reduce damage
7. **Negotiation** sometimes recovers funds
8. **Security is never "done"** - continuous process

---

## Resources

### Hack Databases
- **rekt.news** - Leaderboard of DeFi hacks
- **DeFiYield** - REKT database
- **SlowMist** - Hacked database

### Post-Mortems
Reading official post-mortems is invaluable:
- Root cause analysis
- Remediation steps
- Lessons learned
`,

  "10-building/01-development-setup": `# Development Setup

*Module 1 of Building*

---

## Development Framework Comparison

| Feature | Foundry | Hardhat |
|---------|---------|---------|
| Language | Rust/Solidity | JavaScript/TypeScript |
| Speed | Very fast | Moderate |
| Testing | Solidity | JS/TS + Solidity |
| Scripting | Solidity | JavaScript |
| Community | Growing | Large |
| Best For | Contract devs | Full-stack devs |

**Recommendation**: Use Foundry for smart contract work, Hardhat for JS-heavy projects.

---

## Foundry Setup

### Installation
\`\`\`bash
# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Verify installation
forge --version
cast --version
anvil --version
\`\`\`

### Create New Project
\`\`\`bash
# Initialize new project
forge init my-project
cd my-project

# Project structure
├── src/              # Solidity contracts
│   └── Counter.sol
├── test/             # Test files
│   └── Counter.t.sol
├── script/           # Deployment scripts
├── lib/              # Dependencies
└── foundry.toml      # Configuration
\`\`\`

### Install Dependencies
\`\`\`bash
# Install OpenZeppelin
forge install OpenZeppelin/openzeppelin-contracts

# Install other libraries
forge install transmissions11/solmate
forge install foundry-rs/forge-std

# Update remappings
forge remappings > remappings.txt
\`\`\`

### Configuration (foundry.toml)
\`\`\`toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.20"
optimizer = true
optimizer_runs = 200

[rpc_endpoints]
mainnet = "\${MAINNET_RPC_URL}"
sepolia = "\${SEPOLIA_RPC_URL}"

[etherscan]
mainnet = { key = "\${ETHERSCAN_API_KEY}" }
sepolia = { key = "\${ETHERSCAN_API_KEY}" }
\`\`\`

---

## Hardhat Setup

### Installation
\`\`\`bash
# Create new project
mkdir my-hardhat-project
cd my-hardhat-project
npm init -y

# Install Hardhat
npm install --save-dev hardhat

# Initialize project
npx hardhat init
# Select "Create a TypeScript project"

# Install common dependencies
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
\`\`\`

### Project Structure
\`\`\`
├── contracts/        # Solidity contracts
├── scripts/          # Deployment scripts
├── test/             # Test files
├── hardhat.config.ts # Configuration
└── package.json
\`\`\`

### Configuration (hardhat.config.ts)
\`\`\`typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY
        ? [process.env.PRIVATE_KEY]
        : []
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY
        ? [process.env.PRIVATE_KEY]
        : []
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
\`\`\`

---

## Essential Libraries

### OpenZeppelin Contracts
Battle-tested implementations:

\`\`\`solidity
// ERC-20 Token
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10**18);
    }
}

// ERC-721 NFT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 private _tokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to) public {
        _mint(to, _tokenId++);
    }
}
\`\`\`

### Solmate (Gas-Optimized)
\`\`\`solidity
import "solmate/tokens/ERC20.sol";
import "solmate/auth/Owned.sol";

contract GasOptimizedToken is ERC20, Owned {
    constructor() ERC20("Token", "TKN", 18) Owned(msg.sender) {
        _mint(msg.sender, 1000000e18);
    }
}
\`\`\`

---

## Local Development

### Anvil (Foundry)
\`\`\`bash
# Start local node
anvil

# With forking
anvil --fork-url https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY

# Custom options
anvil --port 8545 --accounts 10 --balance 10000
\`\`\`

### Hardhat Network
\`\`\`bash
# Start local node
npx hardhat node

# With forking
npx hardhat node --fork https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
\`\`\`

---

## Testing

### Foundry Testing
\`\`\`solidity
// test/Counter.t.sol
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/Counter.sol";

contract CounterTest is Test {
    Counter counter;

    function setUp() public {
        counter = new Counter();
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }

    function testFail_Decrement() public {
        // Expect this to revert
        counter.decrement(); // Would underflow
    }
}
\`\`\`

### Run Tests
\`\`\`bash
# Run all tests
forge test

# With verbosity
forge test -vvv

# Specific test
forge test --match-test test_Increment

# With gas report
forge test --gas-report

# Coverage
forge coverage
\`\`\`

### Hardhat Testing
\`\`\`typescript
// test/Counter.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  it("Should increment", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    await counter.increment();
    expect(await counter.number()).to.equal(1);
  });
});
\`\`\`

---

## Deployment

### Foundry Script
\`\`\`solidity
// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Counter.sol";

contract DeployScript is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        Counter counter = new Counter();
        console.log("Counter deployed to:", address(counter));

        vm.stopBroadcast();
    }
}
\`\`\`

### Run Deployment
\`\`\`bash
# Dry run (simulation)
forge script script/Deploy.s.sol --rpc-url sepolia

# Actual deployment
forge script script/Deploy.s.sol \\
  --rpc-url sepolia \\
  --broadcast \\
  --verify

# Resume failed verification
forge script script/Deploy.s.sol \\
  --rpc-url sepolia \\
  --resume
\`\`\`

### Hardhat Deployment
\`\`\`typescript
// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();

  console.log("Counter deployed to:", await counter.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
\`\`\`

\`\`\`bash
# Deploy
npx hardhat run scripts/deploy.ts --network sepolia

# Verify
npx hardhat verify --network sepolia DEPLOYED_ADDRESS
\`\`\`

---

## Useful Cast Commands

Cast is Foundry's CLI for interacting with contracts:

\`\`\`bash
# Read contract
cast call 0x... "balanceOf(address)" 0xYourAddress --rpc-url mainnet

# Send transaction
cast send 0x... "transfer(address,uint256)" 0xTo 1000000000000000000 \\
  --private-key $PRIVATE_KEY \\
  --rpc-url mainnet

# Get ETH balance
cast balance 0x... --rpc-url mainnet

# Convert units
cast to-wei 1.5 ether  # 1500000000000000000
cast from-wei 1500000000000000000  # 1.5

# Decode calldata
cast 4byte-decode 0xa9059cbb...

# Get storage slot
cast storage 0x... 0 --rpc-url mainnet

# Gas price
cast gas-price --rpc-url mainnet
\`\`\`

---

## Environment Setup

### .env File
\`\`\`bash
# .env (NEVER commit this!)
PRIVATE_KEY=0x...
MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/...
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/...
ETHERSCAN_API_KEY=...
\`\`\`

### .gitignore
\`\`\`
# Foundry
out/
cache/
broadcast/

# Hardhat
artifacts/
cache/
typechain-types/

# Environment
.env
.env.local

# Dependencies
node_modules/
lib/
\`\`\`

---

## VS Code Setup

### Extensions
- **Solidity** by Juan Blanco
- **Solidity Visual Developer** by tintinweb
- **Prettier Solidity**

### settings.json
\`\`\`json
{
  "solidity.formatter": "prettier",
  "[solidity]": {
    "editor.defaultFormatter": "JuanBlanco.solidity"
  },
  "solidity.compileUsingRemoteVersion": "v0.8.20",
  "editor.formatOnSave": true
}
\`\`\`

---

## Key Takeaways

1. **Foundry** for contract-focused development (fast, Solidity tests)
2. **Hardhat** for full-stack dApps (JS/TS integration)
3. **OpenZeppelin** for battle-tested implementations
4. **Always use testnets** before mainnet
5. **Never commit private keys** - use .env
6. **Verify contracts** on Etherscan for transparency
7. **Write tests first** - they'll save you
`,

  "10-building/02-first-dapp": `# Building Your First dApp

*Module 2 of Building*

---

## What We're Building

A simple **Tip Jar** dApp:
- Users can send ETH tips
- Owner can withdraw tips
- Shows tip history
- Displays total received

This covers all fundamentals: state, events, access control, and frontend integration.

---

## Part 1: Smart Contract

### The Contract
\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TipJar {
    address public owner;
    uint256 public totalTips;

    // Events for frontend to track
    event TipReceived(address indexed sender, uint256 amount, string message);
    event Withdrawn(address indexed owner, uint256 amount);

    // Store tip history
    struct Tip {
        address sender;
        uint256 amount;
        string message;
        uint256 timestamp;
    }
    Tip[] public tips;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // Receive tips with a message
    function tip(string calldata message) external payable {
        require(msg.value > 0, "Must send ETH");

        tips.push(Tip({
            sender: msg.sender,
            amount: msg.value,
            message: message,
            timestamp: block.timestamp
        }));

        totalTips += msg.value;

        emit TipReceived(msg.sender, msg.value, message);
    }

    // Owner withdraws all tips
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds");

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Transfer failed");

        emit Withdrawn(owner, balance);
    }

    // Get all tips
    function getTips() external view returns (Tip[] memory) {
        return tips;
    }

    // Allow receiving ETH directly
    receive() external payable {
        tips.push(Tip({
            sender: msg.sender,
            amount: msg.value,
            message: "",
            timestamp: block.timestamp
        }));
        totalTips += msg.value;
        emit TipReceived(msg.sender, msg.value, "");
    }
}
\`\`\`

### Test the Contract
\`\`\`solidity
// test/TipJar.t.sol
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/TipJar.sol";

contract TipJarTest is Test {
    TipJar tipJar;
    address owner = address(this);
    address tipper = address(0x1);

    function setUp() public {
        tipJar = new TipJar();
        vm.deal(tipper, 10 ether);
    }

    function test_Tip() public {
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}("Great content!");

        assertEq(tipJar.totalTips(), 1 ether);
        assertEq(address(tipJar).balance, 1 ether);
    }

    function test_Withdraw() public {
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}("Thanks!");

        uint256 ownerBalanceBefore = owner.balance;
        tipJar.withdraw();

        assertEq(owner.balance, ownerBalanceBefore + 1 ether);
        assertEq(address(tipJar).balance, 0);
    }

    function testFail_WithdrawNotOwner() public {
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}("Tip");

        vm.prank(tipper);
        tipJar.withdraw(); // Should fail
    }
}
\`\`\`

### Deploy Script
\`\`\`solidity
// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/TipJar.sol";

contract DeployScript is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        TipJar tipJar = new TipJar();
        console.log("TipJar deployed to:", address(tipJar));

        vm.stopBroadcast();
    }
}
\`\`\`

### Deploy to Sepolia
\`\`\`bash
# Run tests first
forge test -vvv

# Deploy
forge script script/Deploy.s.sol \\
  --rpc-url sepolia \\
  --broadcast \\
  --verify

# Note the deployed address!
\`\`\`

---

## Part 2: Frontend Setup

### Create React App
\`\`\`bash
# Create Vite React app
npm create vite@latest tipjar-frontend -- --template react-ts
cd tipjar-frontend

# Install dependencies
npm install wagmi viem @tanstack/react-query
npm install @rainbow-me/rainbowkit
\`\`\`

### Project Structure
\`\`\`
tipjar-frontend/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── TipForm.tsx
│   │   ├── TipList.tsx
│   │   └── WithdrawButton.tsx
│   ├── config/
│   │   └── wagmi.ts
│   └── abi/
│       └── TipJar.json
└── package.json
\`\`\`

---

## Part 3: Wallet Connection

### Wagmi Config
\`\`\`typescript
// src/config/wagmi.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TipJar',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [sepolia, mainnet],
  ssr: false,
});
\`\`\`

### Main Entry
\`\`\`typescript
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { config } from './config/wagmi';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
\`\`\`

---

## Part 4: Contract ABI

### Copy ABI from Foundry
\`\`\`bash
# After compiling, get the ABI
cat out/TipJar.sol/TipJar.json | jq '.abi' > frontend/src/abi/TipJar.json
\`\`\`

### Contract Address
\`\`\`typescript
// src/config/contracts.ts
export const TIPJAR_ADDRESS = '0x...' as const;  // Your deployed address
export const TIPJAR_ABI = [...] as const;  // ABI from JSON
\`\`\`

---

## Part 5: Main App

### App Component
\`\`\`typescript
// src/App.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract } from 'wagmi';
import { formatEther } from 'viem';

import { TipForm } from './components/TipForm';
import { TipList } from './components/TipList';
import { WithdrawButton } from './components/WithdrawButton';
import { TIPJAR_ADDRESS, TIPJAR_ABI } from './config/contracts';

function App() {
  const { address, isConnected } = useAccount();

  const { data: totalTips } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: TIPJAR_ABI,
    functionName: 'totalTips',
  });

  const { data: owner } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: TIPJAR_ABI,
    functionName: 'owner',
  });

  const isOwner = address?.toLowerCase() === owner?.toLowerCase();

  return (
    <div className="container">
      <h1>Tip Jar</h1>

      <ConnectButton />

      {totalTips !== undefined && (
        <p>Total Tips: {formatEther(totalTips)} ETH</p>
      )}

      {isConnected && <TipForm />}

      <TipList />

      {isOwner && <WithdrawButton />}
    </div>
  );
}

export default App;
\`\`\`

---

## Part 6: Components

### Tip Form
\`\`\`typescript
// src/components/TipForm.tsx
import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { TIPJAR_ADDRESS, TIPJAR_ABI } from '../config/contracts';

export function TipForm() {
  const [amount, setAmount] = useState('0.01');
  const [message, setMessage] = useState('');

  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } =
    useWaitForTransactionReceipt({ hash });

  const handleTip = () => {
    writeContract({
      address: TIPJAR_ADDRESS,
      abi: TIPJAR_ABI,
      functionName: 'tip',
      args: [message],
      value: parseEther(amount),
    });
  };

  return (
    <div className="tip-form">
      <h2>Send a Tip</h2>

      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in ETH"
      />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Leave a message..."
      />

      <button onClick={handleTip} disabled={isPending || isConfirming}>
        {isPending
          ? 'Confirm in wallet...'
          : isConfirming
          ? 'Confirming...'
          : 'Send Tip'}
      </button>

      {isSuccess && <p>Tip sent! Tx: {hash}</p>}
    </div>
  );
}
\`\`\`

### Tip List
\`\`\`typescript
// src/components/TipList.tsx
import { useReadContract } from 'wagmi';
import { formatEther } from 'viem';
import { TIPJAR_ADDRESS, TIPJAR_ABI } from '../config/contracts';

export function TipList() {
  const { data: tips, isLoading } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: TIPJAR_ABI,
    functionName: 'getTips',
  });

  if (isLoading) return <p>Loading tips...</p>;
  if (!tips || tips.length === 0) return <p>No tips yet!</p>;

  return (
    <div className="tip-list">
      <h2>Recent Tips</h2>
      {tips.map((tip, i) => (
        <div key={i} className="tip">
          <p>
            <strong>{formatEther(tip.amount)} ETH</strong>
            from {tip.sender.slice(0, 6)}...{tip.sender.slice(-4)}
          </p>
          {tip.message && <p>"{tip.message}"</p>}
          <p className="timestamp">
            {new Date(Number(tip.timestamp) * 1000).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

### Withdraw Button
\`\`\`typescript
// src/components/WithdrawButton.tsx
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { TIPJAR_ADDRESS, TIPJAR_ABI } from '../config/contracts';

export function WithdrawButton() {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } =
    useWaitForTransactionReceipt({ hash });

  const handleWithdraw = () => {
    writeContract({
      address: TIPJAR_ADDRESS,
      abi: TIPJAR_ABI,
      functionName: 'withdraw',
    });
  };

  return (
    <div className="withdraw">
      <h2>Owner Actions</h2>
      <button onClick={handleWithdraw} disabled={isPending || isConfirming}>
        {isPending
          ? 'Confirm in wallet...'
          : isConfirming
          ? 'Withdrawing...'
          : 'Withdraw All'}
      </button>
      {isSuccess && <p>Withdrawn! Tx: {hash}</p>}
    </div>
  );
}
\`\`\`

---

## Part 7: Listening to Events

### Real-time Updates
\`\`\`typescript
// src/hooks/useTipEvents.ts
import { useWatchContractEvent } from 'wagmi';
import { TIPJAR_ADDRESS, TIPJAR_ABI } from '../config/contracts';

export function useTipEvents(onTip: (tip: any) => void) {
  useWatchContractEvent({
    address: TIPJAR_ADDRESS,
    abi: TIPJAR_ABI,
    eventName: 'TipReceived',
    onLogs(logs) {
      logs.forEach((log) => {
        const { sender, amount, message } = log.args;
        onTip({ sender, amount, message });
      });
    },
  });
}
\`\`\`

### Use in App
\`\`\`typescript
// In App.tsx
import { useTipEvents } from './hooks/useTipEvents';

function App() {
  const [newTips, setNewTips] = useState([]);

  useTipEvents((tip) => {
    setNewTips((prev) => [tip, ...prev]);
    // Or refetch the tips list
  });

  // ...
}
\`\`\`

---

## Part 8: Deployment

### Build Frontend
\`\`\`bash
npm run build
\`\`\`

### Deploy Options
1. **Vercel**: Connect GitHub repo, auto-deploy
2. **Netlify**: Drag & drop dist folder
3. **GitHub Pages**: Push to gh-pages branch
4. **IPFS**: Decentralized hosting

### IPFS Deployment
\`\`\`bash
# Install IPFS CLI
npm install -g ipfs-deploy

# Deploy
ipd -p pinata dist/

# Returns IPFS hash like: QmX...
# Access at: https://ipfs.io/ipfs/QmX...
\`\`\`

---

## Common Issues

### Transaction Reverted
\`\`\`typescript
// Check the error
const { error } = useWriteContract();
if (error) {
  console.log(error.message);
  // "execution reverted: Not owner"
}
\`\`\`

### Wallet Not Connected
\`\`\`typescript
// Guard components
if (!isConnected) {
  return <p>Please connect wallet</p>;
}
\`\`\`

### Wrong Network
\`\`\`typescript
import { useChainId } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const chainId = useChainId();
if (chainId !== sepolia.id) {
  return <p>Please switch to Sepolia</p>;
}
\`\`\`

---

## Next Steps

After building this basic dApp:

1. **Add ENS support** - Resolve names to addresses
2. **Improve UX** - Loading states, error handling
3. **Add notifications** - Toast on successful tip
4. **Mobile responsive** - CSS media queries
5. **Gasless transactions** - ERC-4337 or relayers
6. **Multi-chain** - Deploy to multiple networks

---

## Key Takeaways

1. **Contract → Test → Deploy → Verify** is the workflow
2. **Wagmi + RainbowKit** makes wallet connection easy
3. **useReadContract** for view functions
4. **useWriteContract** for state-changing functions
5. **Events** enable real-time updates
6. **Guard against edge cases** - wrong network, not connected
7. **Start on testnet** before mainnet
`,

  "11-research-frontier/01-current-research": `# Current Research Frontiers

*Module 1 of Research Frontier*

---

## Why Research Matters

The crypto space moves fast. Understanding active research helps you:
- Anticipate future developments
- Evaluate new projects critically
- Identify emerging opportunities
- Separate innovation from hype

---

## 1. Scaling: The Endgame

### Data Availability Sampling (DAS)
The bottleneck in rollups is data availability - proving data was posted:

\`\`\`
Current: Every node downloads ALL rollup data
Future:  Nodes sample random pieces → statistical guarantee

EIP-4844 (Done):
- Introduced "blobs" for cheaper data
- 10-100x reduction in L2 costs

Danksharding (Coming):
- Full DAS implementation
- Nodes only download ~1% of data
- Proves availability with high confidence
\`\`\`

### Proposed Architecture
\`\`\`
              Validator samples
                    │
                    ▼
        ┌─────────────────────┐
        │ █ ░ ░ █ ░ █ ░ ░ █ ░ │  Data blobs
        │ ░ █ ░ ░ █ ░ █ ░ ░ █ │
        │ █ ░ █ ░ ░ ░ ░ █ ░ ░ │
        └─────────────────────┘
              │
              ▼
        If samples valid →
        Data is available with 99.9% probability
\`\`\`

### PeerDAS
Peer-to-peer data availability sampling:
- Nodes request samples from peers
- Distributed verification
- Reduces individual node burden

---

## 2. MEV: Mitigating the Dark Forest

### The Problem
MEV (Maximal Extractable Value) harms users through:
- Sandwich attacks
- Frontrunning
- Just-in-time liquidity attacks

### Current Research

**Encrypted Mempools**
\`\`\`
Traditional:
User → Public Mempool → Block Builder → Attack!

Encrypted:
User → Encrypted Tx → Block Built → Decrypted & Executed
         │
         └── Can't see tx contents to attack
\`\`\`

Technologies being explored:
- Threshold encryption
- Commit-reveal schemes
- Trusted Execution Environments (TEEs)

**MEV-Share**
Instead of eliminating MEV, redistribute it:
\`\`\`
User submits tx
    │
    ▼
Searcher finds MEV opportunity
    │
    ▼
Profit split: User gets 90%, Searcher gets 10%
              (configurable)
\`\`\`

**Order Flow Auctions**
\`\`\`
Users bundle transactions
    │
    ▼
Builders bid for right to execute
    │
    ▼
Highest bidder's payment goes to users
\`\`\`

---

## 3. Account Abstraction: Smart Wallets

### The Vision
Replace EOAs (Externally Owned Accounts) with smart contract wallets:

| EOA (Current) | Smart Wallet (Future) |
|---------------|----------------------|
| Single key | Multi-sig, social recovery |
| ETH for gas | Any token for gas |
| Manual signing | Session keys, automation |
| No logic | Custom validation |

### ERC-4337 Architecture
\`\`\`
User Intent (UserOperation)
        │
        ▼
    Bundler (collects UserOps)
        │
        ▼
    EntryPoint Contract
        │
        ▼
    Your Smart Wallet
        │
        ▼
    Target Contract
\`\`\`

### Key Features

**1. Gas Sponsorship (Paymasters)**
\`\`\`
App pays gas → User pays nothing
or
User pays in USDC → Paymaster converts to ETH
\`\`\`

**2. Social Recovery**
\`\`\`
Lost key?
    │
    ▼
5 of 7 guardians approve
    │
    ▼
New key set (24hr delay)
\`\`\`

**3. Session Keys**
\`\`\`
"Allow this game to spend up to 0.1 ETH
 for the next 1 hour"
    │
    ▼
Game uses session key
    │
    ▼
No popups for each transaction!
\`\`\`

---

## 4. Privacy: Beyond Pseudonymity

### The Gap
Blockchain is pseudonymous, not private:
- All transactions visible
- Addresses linkable to identity
- On-chain analysis firms thrive

### Research Directions

**Private State**
\`\`\`
Current: Everyone sees all contract state
Goal: Only relevant parties see relevant data

Approaches:
- Aztec: Private transactions on Ethereum
- Aleo: Private-by-default L1
- Penumbra: Private Cosmos chain
\`\`\`

**Fully Homomorphic Encryption (FHE)**
Compute on encrypted data without decrypting:
\`\`\`
f(encrypt(x)) = encrypt(f(x))

Example:
- Encrypted vote: E(1) = support, E(0) = oppose
- Sum encrypted votes: E(1) + E(1) + E(0) = E(2)
- Only decrypt final result: 2 supporters

No one sees individual votes!
\`\`\`

**Current State of FHE**
- Very slow (1000x+ overhead)
- Active research to improve
- Promising for specific use cases

**Privacy Pools**
Tornado Cash with compliance:
\`\`\`
Prove: "My funds are NOT from hacks/sanctions"
Without revealing: Which specific deposit is yours
\`\`\`

---

## 5. Cross-Chain: Connecting Everything

### Shared Sequencing
Multiple L2s share a sequencer:
\`\`\`
Current:
L2-A Sequencer → Orders A's txs
L2-B Sequencer → Orders B's txs
(No coordination)

Shared:
Shared Sequencer → Orders A + B txs
                   Can do atomic cross-L2
\`\`\`

Benefits:
- Atomic cross-L2 transactions
- Reduced fragmentation
- Better composability

### ZK Bridges
Verify one chain's state on another using ZK proofs:
\`\`\`
Chain A                          Chain B
┌───────────┐                   ┌───────────┐
│ Block 100 │                   │           │
│ State: X  │──ZK Proof────────▶│ Verify    │
│           │                   │ State is X│
└───────────┘                   └───────────┘

No trusted committee needed!
\`\`\`

Projects: Succinct, zkBridge, Polymer

### Interoperability Layers
\`\`\`
Current: Every chain pair needs a bridge
Future: Universal messaging layer

              ┌─────────────┐
              │  Universal  │
              │   Layer     │
              └──────┬──────┘
                     │
     ┌───────┬───────┼───────┬───────┐
     │       │       │       │       │
   Chain   Chain   Chain   Chain   Chain
     A       B       C       D       E
\`\`\`

---

## 6. AI x Crypto: Convergence

### Decentralized Compute
Training large models requires massive compute:
\`\`\`
Centralized: AWS, Google, Azure monopoly
Decentralized: Network of GPU providers

Projects:
- Render Network: GPU rendering
- Akash: General compute
- io.net: ML-focused compute
\`\`\`

### Verifiable ML
Prove a model was run correctly:
\`\`\`
Problem:
- I claim GPT-X gave this output
- How do you verify without rerunning?

Solution: ZK proofs of ML inference
- Prove: "Output Y came from model M on input X"
- Without revealing model weights

Status: Early research, high overhead
\`\`\`

### AI Agents + Crypto
Autonomous agents that can transact:
\`\`\`
Agent has wallet
    │
    ▼
Agent decides to buy service
    │
    ▼
Signs and submits transaction
    │
    ▼
Receives service, continues task
\`\`\`

Challenges: Who's liable? How to limit risk?

---

## 7. Proof Systems Evolution

### Folding Schemes
More efficient recursive proofs:
\`\`\`
Traditional: Proof of (Proof of (Proof of x))
             Each level adds overhead

Folding: Accumulate proofs incrementally
         Constant overhead regardless of depth
\`\`\`

Projects: Nova, SuperNova, HyperNova

### Client-Side Proving
Run ZK provers in browsers/phones:
\`\`\`
Current: Proofs generated on servers
Future: Your phone generates proofs

Enables:
- True privacy (data never leaves device)
- Decentralized ZK applications
- No trusted prover infrastructure
\`\`\`

### Lookup Arguments
More efficient proof systems using lookup tables:
- Plookup, Caulk, flookup
- Can prove more complex statements efficiently

---

## 8. Ethereum Roadmap

### The Merge ✓ (Done - 2022)
PoW → PoS transition

### The Surge (In Progress)
Scalability improvements:
- EIP-4844 ✓ (Proto-danksharding)
- Full Danksharding (Future)
- 100,000+ TPS across L2s

### The Scourge
MEV and stake centralization:
- PBS (Proposer-Builder Separation)
- Inclusion lists
- Distributed block building

### The Verge
Statelessness:
- Verkle trees (replacing Merkle tries)
- No need to store full state
- Lighter clients

### The Purge
State and history expiry:
- Old data can be pruned
- Reduces node requirements

### The Splurge
Everything else:
- Account abstraction improvements
- EVM upgrades
- Miscellaneous improvements

---

## 9. Alternative Approaches

### Move Language VMs
Different smart contract paradigm:
\`\`\`
Solidity: Account-based, flexible
Move: Resource-oriented, safer by default

Resources in Move:
- Cannot be copied
- Must be explicitly destroyed
- Prevents many common bugs
\`\`\`

Chains: Aptos, Sui, Movement

### Parallel Execution
Current: Transactions execute sequentially
Future: Execute non-conflicting transactions in parallel
\`\`\`
Tx1: A → B
Tx2: C → D
Tx3: B → C

Tx1 and Tx2 can parallelize (no conflict)
Tx3 waits for Tx1
\`\`\`

Implementations: Monad, Sei, Aptos

### Modular Blockchains
Separate concerns:
\`\`\`
Monolithic: One chain does everything

Modular:
┌─────────────────────────────────────┐
│ Execution: Rollups, AppChains      │
├─────────────────────────────────────┤
│ Settlement: Ethereum               │
├─────────────────────────────────────┤
│ Data Availability: Celestia, EigenDA│
├─────────────────────────────────────┤
│ Consensus: PoS, PoW                │
└─────────────────────────────────────┘
\`\`\`

---

## 10. Open Problems

### Unsolved Challenges

| Problem | Status |
|---------|--------|
| True privacy at scale | Expensive, early research |
| Cross-chain atomicity | Partial solutions |
| MEV elimination | Mitigation, not elimination |
| Key management UX | Improving slowly |
| Regulatory clarity | Jurisdiction-dependent |
| Sybil resistance | Unsolved without identity |

### Fundamental Trade-offs

\`\`\`
Decentralization ←→ Efficiency
Privacy ←→ Compliance
Security ←→ Usability
Sovereignty ←→ Recoverability
\`\`\`

---

## Staying Current

### Resources
- **Research Papers**: arXiv, IACR ePrint
- **Protocol Forums**: Ethereum Magicians, research forums
- **Twitter/X**: Researchers, protocol teams
- **Podcasts**: Bankless, Zero Knowledge
- **Newsletters**: Week in Ethereum, The Daily Gwei

### Conferences
- Devcon (Ethereum)
- ETHGlobal hackathons
- Stanford Blockchain Conference
- ZK Summit

---

## Key Takeaways

1. **Scaling** is being solved through data availability sampling and rollups
2. **MEV** is being mitigated through encrypted mempools and redistribution
3. **Account abstraction** makes wallets smart and user-friendly
4. **Privacy** research explores FHE and private state
5. **Cross-chain** future involves shared sequencing and ZK bridges
6. **AI x Crypto** is an emerging convergence
7. **The field is evolving rapidly** - stay curious and critical
8. **Trade-offs exist** - no perfect solutions, only better trade-offs
`,
};
