import { PracticeArea, Attorney, FAQ } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate',
    title: 'Corporate & M&A',
    icon: '💼',
    description: 'High-stakes merger advisory, venture financing, intellectual property shielding, and international restructuring.',
    highlights: ['Venture Capital Rounds', 'Cross-Border Deals', 'IP Portfolio Optimization', 'Regulatory Compliance'],
    leadAttorney: 'Victoria Sterling, Esq.'
  },
  {
    id: 'litigation',
    title: 'Trial & Complex Litigation',
    icon: '⚖️',
    description: 'Relentless courtroom representation for multi-million dollar commercial disputes, antitrust matters, and class actions.',
    highlights: ['Commercial Arbitration', 'Federal Appeals', 'Trade Secret Defense', 'White Collar Defense'],
    leadAttorney: 'Marcus Vance, Senior Partner'
  },
  {
    id: 'estate',
    title: 'Private Wealth & Trust',
    icon: '🏛️',
    description: 'Sophisticated wealth preservation, customized estate restructuring, trust management, and philanthropic planning.',
    highlights: ['Asset Protection Trusts', 'Generational Wealth Transfer', 'Tax Minimization Plans', 'Family Foundations'],
    leadAttorney: 'Eleanor Sterling-Chase'
  },
  {
    id: 'tech',
    title: 'Emerging Tech & IP',
    icon: '🛡️',
    description: 'Legal architects guiding breakthrough artificial intelligence, biotechnology, and cybersecurity ventures.',
    highlights: ['AI Governance Advisory', 'Patent Filings & Licensing', 'Data Privacy Audits', 'Software Copyright Litigation'],
    leadAttorney: 'David Vance, PhD, JD'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'attorney-1',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    education: 'Harvard Law School (JD, Magna Cum Laude)',
    experience: '24+ Years Litigation',
    specialties: ['Class Action Disputes', 'White Collar Defense', 'Antitrust'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    bio: 'Former federal prosecutor who has successfully litigated over $1.2B in civil recoveries and structured defense arguments for Fortune 100 entities.'
  },
  {
    id: 'attorney-2',
    name: 'Victoria Sterling',
    role: 'Senior Partner, Corporate Sector',
    education: 'Yale Law School (JD), Wharton (MBA)',
    experience: '18+ Years Corporate Advisory',
    specialties: ['Mergers & Acquisitions', 'Venture Capital', 'IP Licensing'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    bio: 'Renowned structural strategist advising unicorn technology startups and handling high-value enterprise acquisitions globally.'
  },
  {
    id: 'attorney-3',
    name: 'Eleanor Sterling-Chase',
    role: 'Partner, Private Client Group',
    education: 'Stanford Law School (JD)',
    experience: '15+ Years Trust Law',
    specialties: ['Wealth Preservation', 'Offshore Trusts', 'Tax Planning'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    bio: 'Trusted legal confidante to prominent multi-generational families, delivering ironclad estate frameworks and asset allocation protections.'
  },
  {
    id: 'attorney-4',
    name: 'David Vance, PhD',
    role: 'Of Counsel, IP & Tech',
    education: 'MIT (PhD in CS), Columbia Law School (JD)',
    experience: '11+ Years Tech Patenting',
    specialties: ['AI Regulatory Defense', 'Biotech Patenting', 'SaaS Licensing'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    bio: 'Fuses high-level scientific expertise with advanced intellectual property architecture. Regularly testifies before federal commerce subcommittees.'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What makes Mercy & Co Advocates different from traditional law firms?",
    answer: "Unlike legacy firms, we blend top-tier legal brilliance (averaging 15+ years of elite defense/advisory) with transparent modern technology, customized pricing predictability, and proactive risk defense dashboards for corporate clients."
  },
  {
    question: "Do you offer contingency-fee arrangements?",
    answer: "For premium Commercial Disputes, Intellectual Property infringements, and Complex Civil litigations, we selectively offer structured hybrid or performance-driven fee structures. Our billing structures are entirely tailored to asset alignment."
  },
  {
    question: "How long does a typical custom corporate restructuring take?",
    answer: "Most structural M&A setups or asset transfers take 4 to 8 weeks to audit, draft, secure regulatory approval, and fully execute. We assign dedicated legal managers to ensure rapid, zero-friction workflows."
  },
  {
    question: "Can we book an immediate consultation over secure video conference?",
    answer: "Yes. All initial strategy calls can be routed securely through end-to-end encrypted video link. You can book directly using our online priority portal below."
  }
];
