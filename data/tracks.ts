// Learning Tracks Configuration - Restructured for 4 Main Categories
// From Principles to Practice to Proof

export interface SubTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string;
  icon: string;
  color: string;
  accentColor: string;
  estimatedTime: string;
  chapterCount: number;
  questionCount: number;
  isActive: boolean;
  isPlaceholder?: boolean; // For tracks with skeleton content
  features: string[];
  keywords: string[];
}

export interface TrackCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  accentColor: string;
  gradient: string; // Full gradient for backgrounds
  tracks?: SubTrack[]; // For categories with sub-tracks (Regulated/Non-Regulated)
  isSingleTrack?: boolean; // For AI Policy and SMB which are standalone
  singleTrackData?: SubTrack; // Data for standalone tracks
}

// ============================================
// SUB-TRACKS FOR REGULATED INDUSTRIES
// ============================================
export const regulatedIndustryTracks: SubTrack[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "AI Ethics for Healthcare Professionals",
    shortTitle: "Healthcare",
    description: "Complete guide to healthcare AI ethics covering HIPAA, FDA regulation, clinical decision support, and claims processing. Includes detailed case studies of AI failures and organizational governance frameworks.",
    audience: "Healthcare administrators, clinical staff, health IT professionals, medical practice managers",
    icon: "HeartPulse",
    color: "from-rose-600 to-pink-600",
    accentColor: "rose",
    estimatedTime: "85 min",
    chapterCount: 6,
    questionCount: 25,
    isActive: true,
    features: [
      "HIPAA compliance deep-dive",
      "FDA SaMD regulation explained",
      "Clinical decision support ethics",
      "Claims processing AI governance",
      "Alert fatigue management"
    ],
    keywords: ["healthcare AI ethics", "HIPAA AI compliance", "clinical AI", "medical AI ethics"]
  },
  {
    id: "finance",
    slug: "finance",
    title: "AI Ethics for Financial Services",
    shortTitle: "Finance",
    description: "Master fair lending compliance in the age of AI. Covers ECOA, CFPB requirements, bias detection techniques, and explainability implementation from disparate impact analysis to adverse action notices.",
    audience: "Financial analysts, loan officers, compliance officers, fintech professionals",
    icon: "TrendingUp",
    color: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
    estimatedTime: "70 min",
    chapterCount: 5,
    questionCount: 24,
    isActive: true,
    features: [
      "ECOA & Fair Housing Act deep-dive",
      "SHAP/LIME explainability",
      "Adverse action compliance",
      "Model risk management",
      "Bias detection techniques"
    ],
    keywords: ["financial AI ethics", "fair lending AI", "credit scoring bias", "fintech ethics"]
  },
  {
    id: "insurance",
    slug: "insurance",
    title: "AI Ethics for Insurance Professionals",
    shortTitle: "Insurance",
    description: "Navigate AI ethics in underwriting, claims processing, and risk assessment. Covers state insurance regulations, algorithmic rating laws, and fair pricing requirements.",
    audience: "Insurance underwriters, actuaries, claims adjusters, compliance professionals",
    icon: "Shield",
    color: "from-sky-600 to-blue-600",
    accentColor: "sky",
    estimatedTime: "60 min",
    chapterCount: 5,
    questionCount: 20,
    isActive: true,
    isPlaceholder: true,
    features: [
      "Underwriting AI ethics",
      "Claims processing automation",
      "State insurance regulations",
      "Algorithmic rating compliance",
      "Fair pricing requirements"
    ],
    keywords: ["insurance AI ethics", "underwriting AI", "claims AI", "actuarial AI"]
  }
];

// ============================================
// SUB-TRACKS FOR NON-REGULATED INDUSTRIES
// ============================================
export const nonRegulatedIndustryTracks: SubTrack[] = [
  {
    id: "hr",
    slug: "hr",
    title: "AI Ethics for HR & Recruitment",
    shortTitle: "HR & Recruiting",
    description: "Complete guide to ethical AI in employment. Master AEDT compliance across NYC, Illinois, and Colorado, conduct bias audits, and implement human oversight that satisfies legal requirements.",
    audience: "HR professionals, recruiters, talent acquisition specialists, people operations leaders",
    icon: "Users",
    color: "from-amber-600 to-orange-600",
    accentColor: "amber",
    estimatedTime: "70 min",
    chapterCount: 5,
    questionCount: 22,
    isActive: true,
    features: [
      "Multi-jurisdiction compliance",
      "Bias audit methodology",
      "Vendor assessment checklist",
      "Human oversight frameworks",
      "90-day implementation plan"
    ],
    keywords: ["HR AI ethics", "AI hiring bias", "AEDT compliance", "algorithmic hiring"]
  },
  {
    id: "marketing",
    slug: "marketing",
    title: "AI Ethics for Marketing & Advertising",
    shortTitle: "Marketing",
    description: "Ethical AI practices for digital marketing, advertising targeting, personalization engines, and customer analytics. Navigate FTC guidelines and consumer protection laws.",
    audience: "Marketing managers, digital advertisers, growth leads, customer analytics teams",
    icon: "Megaphone",
    color: "from-fuchsia-600 to-purple-600",
    accentColor: "fuchsia",
    estimatedTime: "55 min",
    chapterCount: 5,
    questionCount: 18,
    isActive: true,
    isPlaceholder: true,
    features: [
      "FTC advertising guidelines",
      "Personalization ethics",
      "Customer data governance",
      "Targeting transparency",
      "Consent management"
    ],
    keywords: ["marketing AI ethics", "advertising AI", "personalization ethics", "FTC AI"]
  },
  {
    id: "education",
    slug: "education",
    title: "AI Ethics for Education",
    shortTitle: "Education",
    description: "Ethical AI implementation in educational settings. Covers FERPA compliance, student privacy, adaptive learning systems, and academic integrity in the age of generative AI.",
    audience: "Educators, administrators, EdTech professionals, academic integrity officers",
    icon: "GraduationCap",
    color: "from-indigo-600 to-violet-600",
    accentColor: "indigo",
    estimatedTime: "50 min",
    chapterCount: 5,
    questionCount: 16,
    isActive: true,
    isPlaceholder: true,
    features: [
      "FERPA AI compliance",
      "Student data privacy",
      "Adaptive learning ethics",
      "Academic integrity policies",
      "Generative AI guidelines"
    ],
    keywords: ["education AI ethics", "FERPA AI", "EdTech ethics", "academic AI"]
  },
  {
    id: "media",
    slug: "media",
    title: "AI Ethics for Media & Communications",
    shortTitle: "Media & Comms",
    description: "Navigate AI ethics in journalism, content creation, and communications. Covers deepfake policies, AI-generated content disclosure, and maintaining audience trust.",
    audience: "Journalists, content creators, communications professionals, media executives",
    icon: "Radio",
    color: "from-cyan-600 to-teal-600",
    accentColor: "cyan",
    estimatedTime: "45 min",
    chapterCount: 4,
    questionCount: 14,
    isActive: true,
    isPlaceholder: true,
    features: [
      "AI content disclosure",
      "Deepfake policies",
      "Editorial AI guidelines",
      "Audience trust maintenance",
      "Synthetic media ethics"
    ],
    keywords: ["media AI ethics", "journalism AI", "deepfake policies", "content AI"]
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "AI Ethics for Manufacturing",
    shortTitle: "Manufacturing",
    description: "Ethical AI in manufacturing operations, quality control, predictive maintenance, and worker safety. Covers automation ethics and human-machine collaboration.",
    audience: "Manufacturing managers, quality engineers, operations leaders, safety officers",
    icon: "Factory",
    color: "from-slate-600 to-zinc-600",
    accentColor: "slate",
    estimatedTime: "45 min",
    chapterCount: 4,
    questionCount: 14,
    isActive: true,
    isPlaceholder: true,
    features: [
      "Automation ethics",
      "Worker safety AI",
      "Quality control systems",
      "Predictive maintenance",
      "Human-machine collaboration"
    ],
    keywords: ["manufacturing AI ethics", "industrial AI", "automation ethics", "factory AI"]
  },
  {
    id: "retail",
    slug: "retail",
    title: "AI Ethics for Retail & E-Commerce",
    shortTitle: "Retail",
    description: "Ethical AI practices for retail operations, pricing algorithms, inventory management, and customer experience. Navigate dynamic pricing ethics and recommendation systems.",
    audience: "Retail managers, e-commerce directors, pricing analysts, customer experience leads",
    icon: "ShoppingCart",
    color: "from-orange-600 to-red-600",
    accentColor: "orange",
    estimatedTime: "50 min",
    chapterCount: 4,
    questionCount: 15,
    isActive: true,
    isPlaceholder: true,
    features: [
      "Dynamic pricing ethics",
      "Recommendation transparency",
      "Customer data practices",
      "Inventory AI governance",
      "Personalization fairness"
    ],
    keywords: ["retail AI ethics", "e-commerce AI", "pricing AI", "recommendation ethics"]
  }
];

// ============================================
// MAIN TRACK CATEGORIES
// ============================================
export const trackCategories: TrackCategory[] = [
  {
    id: "policy",
    slug: "policy",
    title: "AI Policy & Governance",
    shortTitle: "AI Policy",
    tagline: "Navigate the regulatory landscape",
    description: "Comprehensive coverage of state and federal AI regulations with real case studies, implementation templates, and strategic frameworks for public sector and policy professionals.",
    icon: "Landmark",
    color: "from-blue-600 to-cyan-600",
    accentColor: "blue",
    gradient: "from-blue-950 via-cyan-950 to-slate-950",
    isSingleTrack: true,
    singleTrackData: {
      id: "government",
      slug: "government",
      title: "AI Policy & Ethics for Government Professionals",
      shortTitle: "AI Policy",
      description: "Comprehensive e-book covering state and federal AI regulations with real case studies, implementation templates, and strategic frameworks. From Colorado vs Utah legislative models to G2C compliance.",
      audience: "State and federal employees, policy analysts, government contractors, public sector leaders",
      icon: "Landmark",
      color: "from-blue-600 to-cyan-600",
      accentColor: "blue",
      estimatedTime: "90 min",
      chapterCount: 6,
      questionCount: 20,
      isActive: true,
      features: [
        "6 in-depth modules",
        "Colorado vs Utah analysis",
        "Real case studies",
        "90-day implementation roadmap",
        "Policy templates"
      ],
      keywords: ["government AI policy", "state AI legislation", "public sector AI ethics"]
    }
  },
  {
    id: "regulated",
    slug: "regulated",
    title: "Regulated Industries",
    shortTitle: "Regulated Industries",
    tagline: "Compliance-focused AI ethics",
    description: "Specialized AI ethics training for heavily regulated sectors including healthcare, finance, and insurance. Build compliant, audit-friendly AI governance tailored to your regulatory requirements.",
    icon: "Shield",
    color: "from-rose-600 to-emerald-600",
    accentColor: "rose",
    gradient: "from-rose-950 via-slate-950 to-emerald-950",
    tracks: regulatedIndustryTracks
  },
  {
    id: "non-regulated",
    slug: "non-regulated",
    title: "Non-Regulated Industries",
    shortTitle: "Non-Regulated",
    tagline: "Ethical AI for every sector",
    description: "Guidance for sectors with lighter regulation, focusing on ethical AI adoption across HR, marketing, education, media, manufacturing, and retail. Build trust through responsible practices.",
    icon: "Briefcase",
    color: "from-amber-600 to-fuchsia-600",
    accentColor: "amber",
    gradient: "from-amber-950 via-slate-950 to-fuchsia-950",
    tracks: nonRegulatedIndustryTracks
  },
  {
    id: "smb",
    slug: "smb",
    title: "Small & Medium Business",
    shortTitle: "SMB",
    tagline: "Practical AI ethics for growing businesses",
    description: "The foundational playbook for small and medium businesses. Practical guardrails for adopting AI responsibly without heavy overhead or complex governance structures.",
    icon: "Building2",
    color: "from-purple-600 to-indigo-600",
    accentColor: "purple",
    gradient: "from-purple-950 via-indigo-950 to-slate-950",
    isSingleTrack: true,
    singleTrackData: {
      id: "smb",
      slug: "smb",
      title: "AI Ethics for Small & Medium Businesses",
      shortTitle: "SMB Playbook",
      description: "A practical, hands-on guide to responsible AI adoption tailored for businesses with limited resources. Learn to identify risks, build frameworks, and implement ethical AI practices.",
      audience: "Business owners, IT managers, marketing leads, HR directors, operations heads",
      icon: "Building2",
      color: "from-purple-600 to-indigo-600",
      accentColor: "purple",
      estimatedTime: "60 min",
      chapterCount: 8,
      questionCount: 40,
      isActive: true,
      features: [
        "8 comprehensive chapters",
        "40 quiz questions",
        "AI-powered assistant",
        "Practical checklists",
        "Real-world case studies"
      ],
      keywords: ["SMB AI ethics", "small business AI", "AI compliance small business"]
    }
  }
];

// ============================================
// LEGACY SUPPORT - Flat list of all tracks
// ============================================
export interface LearningTrack extends SubTrack {
  category?: string;
}

export const learningTracks: LearningTrack[] = [
  // SMB
  { ...trackCategories.find(c => c.id === "smb")!.singleTrackData!, category: "smb" },
  // Policy/Government
  { ...trackCategories.find(c => c.id === "policy")!.singleTrackData!, category: "policy" },
  // Regulated Industries
  ...regulatedIndustryTracks.map(t => ({ ...t, category: "regulated" })),
  // Non-Regulated Industries
  ...nonRegulatedIndustryTracks.map(t => ({ ...t, category: "non-regulated" }))
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getTrackById(id: string): LearningTrack | undefined {
  return learningTracks.find(track => track.id === id);
}

export function getTrackBySlug(slug: string): LearningTrack | undefined {
  return learningTracks.find(track => track.slug === slug);
}

export function getActiveTracks(): LearningTrack[] {
  return learningTracks.filter(track => track.isActive);
}

export function getTracksByCategory(categoryId: string): LearningTrack[] {
  return learningTracks.filter(track => track.category === categoryId);
}

export function getCategoryById(id: string): TrackCategory | undefined {
  return trackCategories.find(cat => cat.id === id);
}

export function getCategoryBySlug(slug: string): TrackCategory | undefined {
  return trackCategories.find(cat => cat.slug === slug);
}

export function getAllCategories(): TrackCategory[] {
  return trackCategories;
}

export function getAllTracks(): LearningTrack[] {
  return learningTracks;
}

export function getRegulatedTracks(): SubTrack[] {
  return regulatedIndustryTracks;
}

export function getNonRegulatedTracks(): SubTrack[] {
  return nonRegulatedIndustryTracks;
}

// Get total stats across all tracks
export function getTrackStats() {
  const allTracks = getActiveTracks();
  return {
    totalTracks: allTracks.length,
    totalChapters: allTracks.reduce((sum, t) => sum + t.chapterCount, 0),
    totalQuestions: allTracks.reduce((sum, t) => sum + t.questionCount, 0),
    totalMinutes: allTracks.reduce((sum, t) => sum + parseInt(t.estimatedTime), 0)
  };
}

export default learningTracks;
