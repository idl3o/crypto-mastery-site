export interface Module {
  id: string;
  title: string;
  description: string;
  file: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  phase: number;
  modules: Module[];
}

export const curriculum: Section[] = [
  {
    id: '00-foundations',
    title: 'Foundations',
    description: 'Building the mental models everything else depends on',
    phase: 1,
    modules: [
      { id: '01-what-is-money', title: 'What Is Money?', description: 'History, properties, and functions of money', file: '01-what-is-money' },
      { id: '02-double-spend', title: 'The Double-Spend Problem', description: 'The core challenge of digital money', file: '02-the-double-spend-problem' },
      { id: '03-game-theory', title: 'Game Theory & Incentives', description: 'Why rational actors behave honestly', file: '03-game-theory-incentives' },
      { id: '04-trust', title: 'Trust & Decentralization', description: 'What decentralization actually means', file: '04-trust-decentralization' },
    ]
  },
  {
    id: '01-cryptography',
    title: 'Cryptography Essentials',
    description: 'The mathematical building blocks',
    phase: 1,
    modules: [
      { id: '01-hash', title: 'Hash Functions', description: 'One-way functions and their uses', file: '01-hash-functions' },
      { id: '02-public-key', title: 'Public-Key Cryptography', description: 'Key pairs, signatures, addresses', file: '02-public-key-cryptography' },
      { id: '03-merkle', title: 'Merkle Trees', description: 'Efficient data verification', file: '03-merkle-trees' },
    ]
  },
  {
    id: '02-economics-of-money',
    title: 'Economics of Money',
    description: 'Understanding monetary theory',
    phase: 1,
    modules: [
      { id: '01-history', title: 'History of Money', description: 'From shells to crypto', file: '01-history-of-money' },
      { id: '02-monetary-policy', title: 'Monetary Policy', description: 'How central banks work', file: '02-monetary-policy' },
      { id: '03-sound-money', title: 'Sound Money Principles', description: 'What makes money "sound"', file: '03-sound-money' },
    ]
  },
  {
    id: '03-blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    description: 'The technical foundation',
    phase: 2,
    modules: [
      { id: '01-distributed', title: 'Distributed Systems', description: 'Distributed computing basics', file: '01-distributed-systems' },
      { id: '02-consensus', title: 'Consensus Mechanisms', description: 'PoW, PoS, and beyond', file: '02-consensus-mechanisms' },
      { id: '03-forks', title: 'Forks & Upgrades', description: 'How blockchains evolve', file: '03-forks-upgrades' },
    ]
  },
  {
    id: '04-bitcoin',
    title: 'Bitcoin Deep Dive',
    description: 'The protocol that started it all',
    phase: 2,
    modules: [
      { id: '01-whitepaper', title: 'The Whitepaper', description: 'Line-by-line analysis', file: '01-bitcoin-whitepaper' },
      { id: '02-utxo', title: 'UTXO Model', description: 'How Bitcoin tracks ownership', file: '02-utxo-model' },
      { id: '03-script', title: 'Bitcoin Script', description: 'Bitcoin\'s smart contract language', file: '03-bitcoin-script' },
      { id: '04-mining', title: 'Mining Economics', description: 'The business of mining', file: '04-mining-economics' },
      { id: '05-lightning', title: 'Lightning Network', description: 'Layer 2 scaling', file: '05-lightning-network' },
    ]
  },
  {
    id: '05-ethereum-smart-contracts',
    title: 'Ethereum & Smart Contracts',
    description: 'The programmable blockchain',
    phase: 2,
    modules: [
      { id: '01-overview', title: 'Ethereum Overview', description: 'The world computer', file: '01-ethereum-overview' },
      { id: '02-evm', title: 'EVM Deep Dive', description: 'How the EVM works', file: '02-evm-deep-dive' },
      { id: '03-solidity', title: 'Solidity Fundamentals', description: 'Writing smart contracts', file: '03-solidity-fundamentals' },
      { id: '04-erc', title: 'ERC Standards', description: 'Token standards', file: '04-erc-standards' },
    ]
  },
  {
    id: '06-defi',
    title: 'DeFi',
    description: 'Decentralized Finance',
    phase: 3,
    modules: [
      { id: '01-primitives', title: 'DeFi Primitives', description: 'Building blocks of DeFi', file: '01-defi-primitives' },
      { id: '02-amm', title: 'AMMs & Liquidity', description: 'How DEXs work', file: '02-amms-liquidity' },
      { id: '03-lending', title: 'Lending & Borrowing', description: 'DeFi credit markets', file: '03-lending-borrowing' },
      { id: '04-stablecoins', title: 'Stablecoins', description: 'The foundation of DeFi', file: '04-stablecoins' },
    ]
  },
  {
    id: '07-trading-markets',
    title: 'Trading & Markets',
    description: 'Understanding crypto markets',
    phase: 3,
    modules: [
      { id: '01-structure', title: 'Market Structure', description: 'How crypto markets work', file: '01-market-structure' },
      { id: '02-ta', title: 'Technical Analysis', description: 'Reading charts', file: '02-technical-analysis' },
      { id: '03-mev', title: 'MEV & Trading Dynamics', description: 'MEV and market dynamics', file: '03-mev-trading' },
    ]
  },
  {
    id: '08-advanced-protocols',
    title: 'Advanced Protocols',
    description: 'Cutting-edge technology',
    phase: 4,
    modules: [
      { id: '01-l2', title: 'Layer 2 Scaling', description: 'Rollups and L2s', file: '01-layer2-scaling' },
      { id: '02-zk', title: 'Zero-Knowledge Proofs', description: 'ZK proofs explained', file: '02-zero-knowledge' },
      { id: '03-bridges', title: 'Interoperability', description: 'Bridges and cross-chain', file: '03-interoperability' },
    ]
  },
  {
    id: '09-security',
    title: 'Security',
    description: 'Protecting against attacks',
    phase: 4,
    modules: [
      { id: '01-contracts', title: 'Smart Contract Security', description: 'Vulnerabilities and defenses', file: '01-smart-contract-security' },
      { id: '02-hacks', title: 'Famous Hacks', description: 'Learning from history', file: '02-famous-hacks' },
    ]
  },
  {
    id: '10-building',
    title: 'Building',
    description: 'Practical development',
    phase: 4,
    modules: [
      { id: '01-setup', title: 'Development Setup', description: 'Dev environment setup', file: '01-development-setup' },
      { id: '02-dapp', title: 'Your First dApp', description: 'Build a complete dApp', file: '02-first-dapp' },
    ]
  },
  {
    id: '11-research-frontier',
    title: 'Research Frontier',
    description: 'Where the field is heading',
    phase: 5,
    modules: [
      { id: '01-research', title: 'Current Research', description: 'Active research areas', file: '01-current-research' },
    ]
  },
];

export const phases = [
  { number: 1, title: 'Foundations', description: 'Building mental models' },
  { number: 2, title: 'Core Protocols', description: 'Bitcoin & Ethereum' },
  { number: 3, title: 'Financial Systems', description: 'DeFi & Markets' },
  { number: 4, title: 'Advanced Topics', description: 'L2s, Security, Building' },
  { number: 5, title: 'Frontier', description: 'Research & Future' },
];
