export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const governmentQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "gov-intro-1",
    chapterId: 0,
    question: "According to BSA | The Software Alliance, how many AI-related bills were introduced across U.S. states in 2024?",
    options: ["About 200", "About 400", "About 700", "About 1,000"],
    correctAnswer: 2,
    explanation: "Almost 700 AI-related bills were introduced by lawmakers in 45 states in 2024, demonstrating unprecedented legislative velocity."
  },
  {
    id: "gov-intro-2",
    chapterId: 0,
    question: "What is the 'extraterritorial reach' effect of state AI laws?",
    options: [
      "States can regulate international AI companies",
      "The most restrictive state law often becomes the de facto national compliance baseline",
      "Federal law always overrides state law",
      "Each state only regulates within its borders"
    ],
    correctAnswer: 1,
    explanation: "State AI laws typically apply to organizations serving their residents regardless of where the organization is located, meaning the most restrictive law effectively becomes the national standard."
  },
  {
    id: "gov-intro-3",
    chapterId: 0,
    question: "Which of the following is NOT one of the Four Pillars of current state AI legislative focus?",
    options: ["G2C (Government-to-Citizen)", "Employment", "Sector-Specific", "Intellectual Property"],
    correctAnswer: 3,
    explanation: "The Four Pillars are: G2C (Government-to-Citizen), Employment, Sector-Specific (healthcare, finance), and Content/Deepfakes. Intellectual Property is not currently a primary legislative focus."
  },
  {
    id: "gov-intro-4",
    chapterId: 0,
    question: "What is the potential penalty under the Colorado AI Act for non-compliance?",
    options: ["$5,000 per violation", "$10,000 per violation", "$20,000 per violation", "$50,000 per violation"],
    correctAnswer: 2,
    explanation: "The Colorado AI Act provides for civil penalties up to $20,000 per violation, enforced by the Attorney General."
  },

  // Module 1 - 4 questions
  {
    id: "gov-m1-1",
    chapterId: 1,
    question: "What distinguishes Colorado's AI regulatory approach as 'prevention-centric'?",
    options: [
      "It only applies to government agencies",
      "It imposes a general duty of care on developers and deployers to prevent algorithmic discrimination",
      "It focuses solely on disclosure requirements",
      "It bans all AI use in high-risk decisions"
    ],
    correctAnswer: 1,
    explanation: "Colorado's prevention-centric approach imposes a general duty of care on both developers and deployers to prevent known or reasonably foreseeable risks of algorithmic discrimination."
  },
  {
    id: "gov-m1-2",
    chapterId: 1,
    question: "Why was the Colorado AI Act's enforcement date delayed?",
    options: [
      "Technical implementation issues",
      "Governor cited concerns about inhibiting technology innovation and development",
      "Lack of funding for enforcement",
      "Federal preemption concerns"
    ],
    correctAnswer: 1,
    explanation: "Governor Jared Polis signed the bill with reservations, citing concerns that the complex regulatory regime would inhibit beneficial AI development, leading to a delay until February 2026."
  },
  {
    id: "gov-m1-3",
    chapterId: 1,
    question: "What is the primary focus of Utah's disclosure-centric AI regulation approach?",
    options: [
      "Mandatory bias audits",
      "Requiring AI systems to disclose when interactions are AI-generated",
      "Prohibiting AI in regulated professions",
      "Annual impact assessments"
    ],
    correctAnswer: 1,
    explanation: "Utah's approach requires providers of generative AI systems interacting with consumers in regulated occupations to plainly disclose when the interaction is AI-generated."
  },
  {
    id: "gov-m1-4",
    chapterId: 1,
    question: "What unique administrative innovation did Utah create for AI governance?",
    options: [
      "An AI Ethics Court",
      "The first state Office for AI Policy, Regulation, and Innovation",
      "A mandatory AI certification program",
      "An AI vendor registry"
    ],
    correctAnswer: 1,
    explanation: "Utah created the nation's first Office for AI Policy, Regulation, and Innovation, which consults with businesses and academic institutions and can create regulatory mitigation agreements."
  },

  // Module 2 - 4 questions
  {
    id: "gov-m2-1",
    chapterId: 2,
    question: "What does Arizona HB 2175 specifically prohibit?",
    options: [
      "All use of AI in healthcare",
      "AI as the final decision-maker in medical claim denials",
      "AI in patient diagnosis",
      "Telehealth AI consultations"
    ],
    correctAnswer: 1,
    explanation: "Arizona HB 2175 prohibits health insurers from using AI as the sole basis for denying claims for medical necessity or prior authorization without review by a licensed medical professional."
  },
  {
    id: "gov-m2-2",
    chapterId: 2,
    question: "What unique prohibition does Illinois HB 3773 include for employment AI?",
    options: [
      "Ban on AI resume screening",
      "Prohibition on using zip codes as a proxy for protected classes",
      "Mandatory human interviews",
      "Ban on video interview analysis"
    ],
    correctAnswer: 1,
    explanation: "Illinois HB 3773 uniquely prohibits employers from using AI that uses zip codes as a factor if it results in discrimination, recognizing that zip codes correlate strongly with race due to historical segregation."
  },
  {
    id: "gov-m2-3",
    chapterId: 2,
    question: "What does New York's LOADinG Act (S.7543-B) require of state agencies?",
    options: [
      "Complete ban on AI use",
      "Mandatory vendor audits only",
      "Impact assessments before implementation, human oversight, and prohibition on displacing public employees",
      "AI use only for internal operations"
    ],
    correctAnswer: 2,
    explanation: "The LOADinG Act requires agencies to conduct and publish impact assessments, maintain meaningful human oversight, and explicitly prohibits displacing public employees with AI."
  },
  {
    id: "gov-m2-4",
    chapterId: 2,
    question: "Why do many state deepfake laws face legal uncertainty despite high legislative volume?",
    options: [
      "They are too narrow",
      "First Amendment concerns and potential Section 230 preemption",
      "Lack of enforcement mechanisms",
      "Technology moves too fast"
    ],
    correctAnswer: 1,
    explanation: "Despite 28+ states regulating political deepfakes and 45 states covering sexual deepfakes, many face legal challenges on First Amendment grounds and potential preemption under Section 230 of the Communications Decency Act."
  },

  // Module 3 - 4 questions
  {
    id: "gov-m3-1",
    chapterId: 3,
    question: "What is the fundamental conflict government professionals face regarding AI bias mitigation?",
    options: [
      "Budget constraints vs. compliance needs",
      "State laws requiring bias mitigation while federal policy de-emphasizes DEI considerations",
      "Union resistance vs. efficiency gains",
      "Technology limitations vs. regulatory expectations"
    ],
    correctAnswer: 1,
    explanation: "State laws like Colorado's require proactive bias testing and mitigation, while federal policy under the 2025 'America's AI Action Plan' has moved to remove DEI references from AI frameworks."
  },
  {
    id: "gov-m3-2",
    chapterId: 3,
    question: "According to the compliance hierarchy, which should take precedence when state and federal policies conflict?",
    options: [
      "Always federal policy",
      "Always state policy",
      "The law with enforceable obligations (typically state) unless federal law explicitly preempts",
      "Whichever is easier to implement"
    ],
    correctAnswer: 2,
    explanation: "State laws with enforcement mechanisms take precedence over federal guidance documents. Colorado AI Act creates civil liability while NIST framework does not."
  },
  {
    id: "gov-m3-3",
    chapterId: 3,
    question: "What terminology adaptation strategy is recommended for navigating regulatory dissonance?",
    options: [
      "Ignore federal guidance entirely",
      "Reframe 'DEI assessment' as 'accuracy validation across populations'",
      "Stop all bias testing",
      "Wait for court resolution"
    ],
    correctAnswer: 1,
    explanation: "The recommended strategy is to reframe work using neutral terminology (e.g., 'demographic accuracy verification' instead of 'protected class analysis') while doing substantively identical work."
  },
  {
    id: "gov-m3-4",
    chapterId: 3,
    question: "Which of the following is NOT identified as a high-priority compliance area for government agencies?",
    options: [
      "Algorithmic bias testing for employment AI",
      "Generative AI consumer disclosure",
      "Social media monitoring",
      "Government procurement standards (B2G contracts)"
    ],
    correctAnswer: 2,
    explanation: "The three priority areas are: algorithmic bias testing (employment), generative AI disclosure (regulated services), and government procurement standards (B2G contracts)."
  },

  // Module 4 - 4 questions
  {
    id: "gov-m4-1",
    chapterId: 4,
    question: "In the G2C Implementation Blueprint, what is the recommended first action in weeks 1-2?",
    options: [
      "Hire an AI governance officer",
      "Conduct impact assessments",
      "Distribute AI inventory survey to all departments",
      "Publish transparency reports"
    ],
    correctAnswer: 2,
    explanation: "Phase 1 begins with discovery and inventory—distributing surveys to identify all AI systems across departments before any other governance activities."
  },
  {
    id: "gov-m4-2",
    chapterId: 4,
    question: "What vendor contract clause is recommended to ensure ongoing AI compliance?",
    options: [
      "Lowest price guarantee",
      "Unlimited support hours",
      "Model update notification within 48 hours, audit rights, and compliance certification",
      "Exclusive vendor arrangement"
    ],
    correctAnswer: 2,
    explanation: "Recommended contract clauses include 48-hour notification of model changes, audit rights, compliance warranties for applicable laws, and indemnification for compliance failures."
  },
  {
    id: "gov-m4-3",
    chapterId: 4,
    question: "For agencies with 100+ employees using AI, what governance structure is recommended?",
    options: [
      "Outsource all AI governance to consultants",
      "AI Governance Lead (0.5-1.0 FTE), Ethics Liaisons per department, Technical Auditor, Legal/Compliance",
      "Single part-time AI coordinator",
      "No dedicated resources needed"
    ],
    correctAnswer: 1,
    explanation: "Larger agencies should have an AI Governance Lead (0.5-1.0 FTE), Ethics Liaisons (0.25 FTE per major department), Technical Auditor (0.5 FTE), and Legal/Compliance (0.25 FTE)."
  },
  {
    id: "gov-m4-4",
    chapterId: 4,
    question: "What emerging regulatory area involves AI systems that take autonomous actions without human checkpoints?",
    options: [
      "Algorithmic pricing",
      "Deepfake regulation",
      "Agentic AI governance",
      "Data privacy"
    ],
    correctAnswer: 2,
    explanation: "Agentic AI governance addresses AI systems that take autonomous actions without human checkpoints, raising liability and oversight questions not yet addressed by current frameworks."
  }
];

export default governmentQuizzes;

