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
    description: "Strategic analysis of state and federal AI regulations for policy professionals. Covers legislative frameworks, compliance requirements, and implementation strategies for public sector AI governance.",
    audience: "State and federal employees, policy analysts, government contractors, and public sector leaders",
    icon: "Landmark",
    color: "from-blue-600 to-cyan-600",
    accentColor: "blue",
    estimatedTime: "60 minutes",
    chapterCount: 4,
    questionCount: 20,
    isActive: false,
    comingSoon: true,
    features: [
      "4 policy-focused modules",
      "State legislation analysis (CO, UT, NY, AZ)",
      "Federal vs state regulatory navigation",
      "G2C implementation guidelines",
      "Policy quiz assessments"
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
    description: "Navigate AI ethics in clinical settings, from diagnostic tools to claims processing. Covers HIPAA compliance, patient safety, and regulatory requirements for AI in healthcare.",
    audience: "Healthcare administrators, clinical staff, health IT professionals, and medical practice managers",
    icon: "HeartPulse",
    color: "from-rose-600 to-pink-600",
    accentColor: "rose",
    estimatedTime: "50 minutes",
    chapterCount: 5,
    questionCount: 25,
    isActive: false,
    comingSoon: true,
    features: [
      "HIPAA and AI compliance",
      "Clinical decision support ethics",
      "Arizona HB 2175 analysis",
      "Patient consent frameworks",
      "AI in claims processing"
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
    description: "Essential guidance for using AI in hiring, performance management, and workforce analytics. Covers bias prevention, AEDT compliance, and fair algorithmic decision-making.",
    audience: "HR professionals, recruiters, talent acquisition specialists, and people operations leaders",
    icon: "Users",
    color: "from-amber-600 to-orange-600",
    accentColor: "amber",
    estimatedTime: "40 minutes",
    chapterCount: 4,
    questionCount: 20,
    isActive: false,
    comingSoon: true,
    features: [
      "AEDT compliance (NYC, IL, CO)",
      "Bias testing methodologies",
      "Fair hiring algorithms",
      "Illinois HB 3773 requirements",
      "Colorado AI Act for HR"
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
    description: "Responsible AI practices for lending, credit scoring, fraud detection, and financial advisory. Covers fair lending laws, explainability requirements, and CFPB guidelines.",
    audience: "Financial analysts, loan officers, compliance officers, and fintech professionals",
    icon: "Landmark",
    color: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
    estimatedTime: "45 minutes",
    chapterCount: 4,
    questionCount: 20,
    isActive: false,
    comingSoon: true,
    features: [
      "Fair lending AI compliance",
      "Credit scoring transparency",
      "CFPB AI guidelines",
      "Algorithmic pricing ethics",
      "Fraud detection fairness"
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

