// Learning Tracks Configuration
// Each track represents a focused learning path for a specific audience

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind gradient classes
  accentColor: string; // Single accent color for badges
  estimatedTime: string;
  chapterCount: number;
  questionCount: number;
  isActive: boolean; // Whether this track is currently available
  comingSoon?: boolean;
  features: string[];
  keywords: string[]; // For SEO
}

export const learningTracks: LearningTrack[] = [
  {
    id: "smb",
    slug: "smb",
    title: "AI Ethics for Small & Medium Businesses",
    shortTitle: "SMB Playbook",
    description: "A practical, hands-on guide to responsible AI adoption tailored for businesses with limited resources. Learn to identify risks, build frameworks, and implement ethical AI practices.",
    audience: "Business owners, IT managers, marketing leads, HR directors, and operations heads at small to medium businesses",
    icon: "Building2",
    color: "from-purple-600 to-indigo-600",
    accentColor: "purple",
    estimatedTime: "45 minutes",
    chapterCount: 8,
    questionCount: 40,
    isActive: true,
    features: [
      "8 comprehensive chapters",
      "40 quiz questions with explanations",
      "AI-powered teaching assistant",
      "Practical checklists and templates",
      "Real-world case studies"
    ],
    keywords: [
      "SMB AI ethics",
      "small business AI",
      "AI compliance small business",
      "responsible AI SMB"
    ]
  },
  {
    id: "government",
    slug: "government",
    title: "AI Policy & Ethics for Government Professionals",
    shortTitle: "Government Track",
    description: "A comprehensive e-book covering state and federal AI regulations with real case studies, implementation templates, and strategic frameworks. From Colorado vs Utah legislative models to G2C compliance, this is the definitive guide for public sector AI governance.",
    audience: "State and federal employees, policy analysts, government contractors, and public sector leaders",
    icon: "Landmark",
    color: "from-blue-600 to-cyan-600",
    accentColor: "blue",
    estimatedTime: "2-3 hours",
    chapterCount: 6,
    questionCount: 20,
    isActive: true,
    comingSoon: false,
    features: [
      "6 in-depth modules (~18,000 words)",
      "Colorado vs Utah legislative analysis",
      "Real case studies (MiDAS, COMPAS, Idaho Medicaid)",
      "90-day implementation roadmap",
      "Ready-to-use policy templates"
    ],
    keywords: [
      "government AI policy",
      "state AI legislation",
      "public sector AI ethics",
      "G2C AI governance"
    ]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "AI Ethics for Healthcare Professionals",
    shortTitle: "Healthcare Track",
    description: "A complete e-book on healthcare AI ethics covering HIPAA, FDA regulation, claims processing, and clinical decision support. Includes detailed case studies of AI failures, implementation checklists, and organizational governance frameworks.",
    audience: "Healthcare administrators, clinical staff, health IT professionals, and medical practice managers",
    icon: "HeartPulse",
    color: "from-rose-600 to-pink-600",
    accentColor: "rose",
    estimatedTime: "2-3 hours",
    chapterCount: 6,
    questionCount: 25,
    isActive: true,
    comingSoon: false,
    features: [
      "6 comprehensive chapters (~17,000 words)",
      "HIPAA compliance deep-dive",
      "FDA SaMD regulation explained",
      "Arizona HB 2175 implementation guide",
      "Alert fatigue & CDS ethics"
    ],
    keywords: [
      "healthcare AI ethics",
      "HIPAA AI compliance",
      "clinical AI",
      "medical AI ethics"
    ]
  },
  {
    id: "hr",
    slug: "hr",
    title: "AI Ethics for HR & Recruitment",
    shortTitle: "HR Track",
    description: "The complete guide to ethical AI in employment. Master AEDT compliance across NYC, Illinois, and Colorado, learn to conduct bias audits, and implement human oversight that satisfies legal requirements while improving hiring outcomes.",
    audience: "HR professionals, recruiters, talent acquisition specialists, and people operations leaders",
    icon: "Users",
    color: "from-amber-600 to-orange-600",
    accentColor: "amber",
    estimatedTime: "90 minutes",
    chapterCount: 5,
    questionCount: 22,
    isActive: true,
    comingSoon: false,
    features: [
      "5 detailed chapters (~14,000 words)",
      "Multi-jurisdiction compliance framework",
      "Step-by-step bias audit methodology",
      "Vendor assessment checklist",
      "90-day implementation plan"
    ],
    keywords: [
      "HR AI ethics",
      "AI hiring bias",
      "AEDT compliance",
      "algorithmic hiring"
    ]
  },
  {
    id: "finance",
    slug: "finance",
    title: "AI Ethics for Financial Services",
    shortTitle: "Finance Track",
    description: "Master fair lending compliance in the age of AI. This comprehensive guide covers ECOA, CFPB requirements, bias detection techniques, and explainability implementation. From disparate impact analysis to adverse action notices—everything you need.",
    audience: "Financial analysts, loan officers, compliance officers, and fintech professionals",
    icon: "TrendingUp",
    color: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
    estimatedTime: "90 minutes",
    chapterCount: 5,
    questionCount: 24,
    isActive: true,
    comingSoon: false,
    features: [
      "5 comprehensive chapters (~14,000 words)",
      "ECOA & Fair Housing Act deep-dive",
      "SHAP/LIME explainability implementation",
      "Adverse action compliance framework",
      "Model risk management templates"
    ],
    keywords: [
      "financial AI ethics",
      "fair lending AI",
      "credit scoring bias",
      "fintech ethics"
    ]
  }
];

// Helper functions
export function getTrackById(id: string): LearningTrack | undefined {
  return learningTracks.find(track => track.id === id);
}

export function getTrackBySlug(slug: string): LearningTrack | undefined {
  return learningTracks.find(track => track.slug === slug);
}

export function getActiveTracks(): LearningTrack[] {
  return learningTracks.filter(track => track.isActive);
}

export function getComingSoonTracks(): LearningTrack[] {
  return learningTracks.filter(track => track.comingSoon);
}

export function getAllTracks(): LearningTrack[] {
  return learningTracks;
}

export default learningTracks;

