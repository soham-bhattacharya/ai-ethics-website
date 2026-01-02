export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const retailQuizzes: QuizQuestion[] = [
  // Introduction - 3 questions
  {
    id: "ret-intro-1",
    chapterId: 0,
    question: "What percentage of major retailers now use dynamic pricing according to industry research?",
    options: ["20%", "40%", "60%", "80%"],
    correctAnswer: 2,
    explanation: "Approximately 60% of major retailers now use dynamic pricing, adjusting prices based on demand, competition, inventory, and customer characteristics."
  },
  {
    id: "ret-intro-2",
    chapterId: 0,
    question: "What federal law prohibits unfair and deceptive practices in retail, including AI-driven practices?",
    options: [
      "Sherman Antitrust Act",
      "FTC Act",
      "Dodd-Frank Act",
      "Sarbanes-Oxley Act"
    ],
    correctAnswer: 1,
    explanation: "The FTC Act prohibits unfair and deceptive practices, which applies to AI-driven deception, dark patterns in interfaces, and algorithmic harm. The FTC has increased enforcement focus on these issues."
  },
  {
    id: "ret-intro-3",
    chapterId: 0,
    question: "What is 'personalized pricing' in retail AI?",
    options: [
      "Offering the same price to everyone",
      "Setting individual prices based on personal data and perceived willingness to pay",
      "Volume discounts",
      "Seasonal pricing"
    ],
    correctAnswer: 1,
    explanation: "Personalized pricing involves setting individual prices based on personal data such as purchase history, browsing behavior, and inferred price sensitivity, often charging customers their maximum perceived willingness to pay."
  },

  // Module 1: Dynamic Pricing - 4 questions
  {
    id: "ret-m1-1",
    chapterId: 1,
    question: "According to research, what percentage of consumers find personalized pricing unfair?",
    options: ["32%", "52%", "72%", "92%"],
    correctAnswer: 2,
    explanation: "Research consistently shows that 72% of consumers find personalized pricing unfair, with 65% saying they would stop shopping with a retailer that uses it."
  },
  {
    id: "ret-m1-2",
    chapterId: 1,
    question: "What is 'disparate impact' in the context of AI pricing?",
    options: [
      "Different profit margins",
      "When pricing algorithms disadvantage certain demographic groups even without intent",
      "Price differences by product",
      "Competitor price differences"
    ],
    correctAnswer: 1,
    explanation: "Disparate impact in AI pricing occurs when algorithms systematically disadvantage certain groups, such as charging higher prices in lower-income areas or to customers with certain device types, even without discriminatory intent."
  },
  {
    id: "ret-m1-3",
    chapterId: 1,
    question: "What is an ethical guardrail for pricing algorithms?",
    options: [
      "No limits are needed",
      "Maximum price swing limits, protected category testing, and essential goods floors",
      "Only profit maximization",
      "Only competitor matching"
    ],
    correctAnswer: 1,
    explanation: "Ethical guardrails for pricing algorithms include maximum price swing limits, testing for protected category impact, price floors for essential goods, and geographic equity rules to prevent discriminatory outcomes."
  },
  {
    id: "ret-m1-4",
    chapterId: 1,
    question: "What happened when a retailer's location-based pricing was discovered?",
    options: [
      "Customers appreciated it",
      "Social media backlash, lawsuits, regulatory investigation, and competitor gains",
      "Increased sales",
      "Nothing significant"
    ],
    correctAnswer: 1,
    explanation: "When customers discovered a retailer was charging different prices based on location and purchase history, it triggered a social media firestorm, class action lawsuit, regulatory investigation, and competitor gains from promising transparent pricing."
  },

  // Module 2: Recommendations - 4 questions
  {
    id: "ret-m2-1",
    chapterId: 2,
    question: "What is 'popularity bias' in recommendation systems?",
    options: [
      "Recommending popular items fairly",
      "Popular items getting more recommendations, making them more popular, while new items struggle",
      "Customer preference for popular items",
      "Marketing popular items"
    ],
    correctAnswer: 1,
    explanation: "Popularity bias is a self-reinforcing cycle where already popular items get more recommendations (and thus more data), while new or niche products are underexposed and struggle to gain visibility."
  },
  {
    id: "ret-m2-2",
    chapterId: 2,
    question: "What transparency should ethical recommendation systems provide?",
    options: [
      "No transparency needed",
      "Explanation of why items are recommended and distinction between organic and sponsored",
      "Only technical details",
      "Only to regulators"
    ],
    correctAnswer: 1,
    explanation: "Ethical recommendation systems should explain why items are recommended, clearly distinguish organic from sponsored recommendations, show the basis for personalization, and enable preference modification."
  },
  {
    id: "ret-m2-3",
    chapterId: 2,
    question: "What is 'vendor preference bias' in marketplace recommendations?",
    options: [
      "Customers preferring certain vendors",
      "Algorithms promoting certain sellers based on fees rather than customer fit",
      "Vendors preferring certain customers",
      "Seasonal vendor changes"
    ],
    correctAnswer: 1,
    explanation: "Vendor preference bias occurs when marketplace recommendation algorithms promote certain sellers based on factors like fees or advertising spend rather than genuine fit with customer needs."
  },
  {
    id: "ret-m2-4",
    chapterId: 2,
    question: "What customer control should ethical recommendation systems offer?",
    options: [
      "No controls needed",
      "Preference dashboard, 'Why am I seeing this?' explanations, and profile reset options",
      "Only on/off toggle",
      "Only email preferences"
    ],
    correctAnswer: 1,
    explanation: "Ethical recommendation systems should give customers meaningful control including preference dashboards, explanations of why items are recommended, 'Not interested' feedback options, and profile reset capabilities."
  },

  // Module 3: Implementation - 4 questions
  {
    id: "ret-m3-1",
    chapterId: 3,
    question: "What is a core principle for retail AI ethics?",
    options: [
      "Maximum revenue extraction",
      "Customer benefit: AI should genuinely serve customers, not just extract value",
      "Competitor monitoring only",
      "Technology for its own sake"
    ],
    correctAnswer: 1,
    explanation: "Customer benefit is a core principle: AI should genuinely serve customers, create value rather than just extract it, focus on long-term relationships over short-term gains, and default to transparency."
  },
  {
    id: "ret-m3-2",
    chapterId: 3,
    question: "What should a pricing ethics checklist include before deployment?",
    options: [
      "Only profit projections",
      "Fairness testing, geographic impact, exploitation scenarios, transparency, and complaint mechanisms",
      "Only technical specifications",
      "Only competitor analysis"
    ],
    correctAnswer: 1,
    explanation: "A pricing ethics checklist should include fairness testing across demographics, geographic impact assessment, exploitation scenario analysis, transparency requirement verification, customer complaint mechanisms, and audit trail establishment."
  },
  {
    id: "ret-m3-3",
    chapterId: 3,
    question: "How should customer data be assessed for AI use?",
    options: [
      "Collect everything possible",
      "Evaluate necessity, consent, accuracy, security, rights, and retention",
      "Only consider storage costs",
      "Only consider technical feasibility"
    ],
    correctAnswer: 1,
    explanation: "Customer data for AI use should be assessed for necessity (do we need this?), consent (do customers understand and agree?), accuracy (is data reliable?), security (is it protected?), rights (can customers access/delete?), and retention (are we keeping it too long?)."
  },
  {
    id: "ret-m3-4",
    chapterId: 3,
    question: "What metrics should be tracked for retail AI ethics?",
    options: [
      "Only sales metrics",
      "Fairness metrics (price/recommendation distributions), customer trust, privacy concerns, and compliance",
      "Only website traffic",
      "Only inventory turnover"
    ],
    correctAnswer: 1,
    explanation: "Retail AI ethics tracking should include fairness metrics (price and recommendation distributions by demographic), customer metrics (trust scores, privacy concerns), and compliance metrics (disclosure accuracy, policy adherence)."
  }
];

export default retailQuizzes;

