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
    name: 'Mercy',
    role: 'Lead Advocate',
    education: '',
    experience: '',
    specialties: [],
    image: '',
    bio: ''
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
