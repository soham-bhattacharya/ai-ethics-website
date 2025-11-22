export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizzes: QuizQuestion[] = [
  // Introduction - 5 questions
  {
    id: "intro-1",
    chapterId: 0,
    question: "According to the Deloitte 2025 survey, what percentage of SMBs now use at least one AI-powered tool?",
    options: ["45%", "62%", "78%", "92%"],
    correctAnswer: 2,
    explanation: "78% of SMBs now use at least one AI-powered tool, up dramatically from 45% in 2022 and just 12% in 2019."
  },
  {
    id: "intro-2",
    chapterId: 0,
    question: "What percentage of SMBs have a formal AI ethics policy according to IBM's 2025 study?",
    options: ["11%", "19%", "32%", "62%"],
    correctAnswer: 2,
    explanation: "Only 32% of SMBs have any formal AI ethics policy, revealing a dangerous gap between adoption and governance."
  },
  {
    id: "intro-3",
    chapterId: 0,
    question: "According to the 2025 Edelman Trust Barometer, what percentage of consumers would stop doing business with a company after a single AI-related ethical incident?",
    options: ["41%", "52%", "67%", "81%"],
    correctAnswer: 2,
    explanation: "67% of consumers would stop doing business after a single AI-related ethical incident, highlighting how critical trust is."
  },
  {
    id: "intro-4",
    chapterId: 0,
    question: "What was the fine amount for the Austin marketing agency that violated CCPA with an AI lead-scoring tool?",
    options: ["$42,000", "$88,000", "$125,000", "$175,000"],
    correctAnswer: 3,
    explanation: "The 42-employee Austin agency was fined $175,000 under CCPA for using an unvetted AI tool without proper consent or bias testing."
  },
  {
    id: "intro-5",
    chapterId: 0,
    question: "What is the maximum fine under the EU AI Act for non-compliance with high-risk AI system requirements?",
    options: ["€10M or 2% of turnover", "€20M or 4% of turnover", "€35M or 7% of turnover", "€50M or 10% of turnover"],
    correctAnswer: 2,
    explanation: "The EU AI Act imposes fines up to €35M or 7% of global turnover for high-risk AI non-compliance."
  },

  // Chapter 1 - 5 questions
  {
    id: "ch1-1",
    chapterId: 1,
    question: "Which of the following is NOT one of the six core principles of AI ethics?",
    options: ["Fairness", "Transparency", "Profitability", "Privacy"],
    correctAnswer: 2,
    explanation: "The six core principles are: Fairness, Transparency, Accountability, Privacy, Safety, and Human-Centric Design. Profitability is a business goal but not an ethics principle."
  },
  {
    id: "ch1-2",
    chapterId: 1,
    question: "What should an SMB do to implement the Accountability principle?",
    options: [
      "Hire a full-time ethics officer",
      "Create an AI Decision Owner (ADO) role with clear responsibility",
      "Outsource all AI decisions to vendors",
      "Implement quarterly financial audits"
    ],
    correctAnswer: 1,
    explanation: "Creating an AI Decision Owner (ADO) role ensures someone is clearly responsible for AI outcomes, which is appropriate for SMB scale."
  },
  {
    id: "ch1-3",
    chapterId: 1,
    question: "According to the chapter, what is a key difference between enterprise and SMB AI ethics approaches?",
    options: [
      "SMBs need more complex frameworks",
      "SMBs can decide and deploy in a week vs. 18-month enterprise cycles",
      "SMBs don't need any policies",
      "Enterprises have lower risk tolerance"
    ],
    correctAnswer: 1,
    explanation: "SMBs can pivot and implement policies much faster (week vs. 18 months), giving them an agility advantage despite fewer resources."
  },
  {
    id: "ch1-4",
    chapterId: 1,
    question: "What happened in the food truck case that used AI to predict ingredient needs?",
    options: [
      "It increased efficiency by 78%",
      "A data glitch caused $1,158 in waste from over-ordering",
      "It was fined $42K for health violations",
      "It went viral for excellent service"
    ],
    correctAnswer: 1,
    explanation: "A data glitch forecasted 400 burgers on a rainy Tuesday, leading to $1,158 in waste when only 42 sold. This illustrates the need for human approval on high-cost predictions."
  },
  {
    id: "ch1-5",
    chapterId: 1,
    question: "According to McKinsey 2025, what revenue growth do companies with strong AI ethics see from customer loyalty?",
    options: ["+8%", "+15%", "+27%", "+42%"],
    correctAnswer: 1,
    explanation: "Companies with strong AI ethics see +15% revenue growth from customer loyalty, proving ethics accelerates growth rather than slowing it."
  },

  // Chapter 2 - 5 questions
  {
    id: "ch2-1",
    chapterId: 2,
    question: "Which risk category has the highest reported incident rate among SMBs in 2025?",
    options: ["Environmental Impact", "Job Displacement", "Bias & Discrimination", "Security Vulnerabilities"],
    correctAnswer: 2,
    explanation: "45% of reported SMB AI incidents in 2025 were bias-related, making it the highest-risk category."
  },
  {
    id: "ch2-2",
    chapterId: 2,
    question: "What was the CCPA fine for the wellness e-commerce store that used AI for health-based retargeting?",
    options: ["$67,000", "$92,000", "$125,000", "$180,000"],
    correctAnswer: 3,
    explanation: "The 28-person wellness store was fined $180,000 for CCPA violation when its AI auto-targeted fertility supplements based on health data inference without consent."
  },
  {
    id: "ch2-3",
    chapterId: 2,
    question: "In the 5-step risk audit methodology, how long should the complete audit take?",
    options: ["30 minutes", "60 minutes", "2 hours", "1 full day"],
    correctAnswer: 1,
    explanation: "The 60-minute methodology includes: 10 mins inventory, 15 mins data flow mapping, 20 mins scoring, 10 mins prioritization, and 5 mins documentation."
  },
  {
    id: "ch2-4",
    chapterId: 2,
    question: "What is the target range for a disparate impact score in the risk scorecard?",
    options: ["0.5 - 0.7", "0.8 - 1.25", "1.5 - 2.0", "Any positive number"],
    correctAnswer: 1,
    explanation: "A disparate impact score between 0.8 and 1.25 is considered acceptable. Scores outside this range indicate potential bias."
  },
  {
    id: "ch2-5",
    chapterId: 2,
    question: "In the ThreadCraft case study, what action did they take after identifying high bias risk in their recommendation engine?",
    options: [
      "They shut down the AI completely",
      "They added a diversity filter and capped similar recommendations at 60%",
      "They switched to a different vendor",
      "They hired more data scientists"
    ],
    correctAnswer: 1,
    explanation: "ThreadCraft added a diversity filter and capped recommendations at 60% similar items, which prevented filter bubbles and increased niche product sales by 22%."
  },

  // Chapter 3 - 5 questions
  {
    id: "ch3-1",
    chapterId: 3,
    question: "What are the five pillars of an SMB AI Ethics Framework?",
    options: [
      "Policy, Technology, Budget, Marketing, Sales",
      "Policy Statement, Governance, Training, Audits, Vendor Assessment",
      "Hiring, Training, Deployment, Monitoring, Termination",
      "Research, Development, Testing, Launch, Support"
    ],
    correctAnswer: 1,
    explanation: "The five pillars are: Policy Statement, Governance, Training, Audits, and Vendor Assessment—creating a complete ethical framework."
  },
  {
    id: "ch3-2",
    chapterId: 3,
    question: "How long does Step 1 (Define Your AI Ethics Principles) take in the 6-step build guide?",
    options: ["15 minutes", "30 minutes", "45 minutes", "2 hours"],
    correctAnswer: 2,
    explanation: "Step 1 takes 45 minutes to customize the six core principles into a one-paragraph mission statement."
  },
  {
    id: "ch3-3",
    chapterId: 3,
    question: "What should be included in a vendor AI ethics clause?",
    options: [
      "Only pricing and delivery terms",
      "Warranty of compliance with fairness/transparency/privacy, bias audit reports on request, 48-hour notice of model updates",
      "Just a general ethics statement",
      "No specific ethics requirements needed"
    ],
    correctAnswer: 1,
    explanation: "A strong vendor clause requires compliance warranties, bias audit availability, and 48-hour notification of model updates to maintain oversight."
  },
  {
    id: "ch3-4",
    chapterId: 3,
    question: "In the NexaPrint case study, how long did it take them to build their complete framework?",
    options: ["1 day", "4 days", "2 weeks", "1 month"],
    correctAnswer: 1,
    explanation: "NexaPrint built their complete framework in just 4 days: policy, governance, training, and bias fix—demonstrating SMB agility."
  },
  {
    id: "ch3-5",
    chapterId: 3,
    question: "What is the target bias score in the Ethics KPI Dashboard?",
    options: ["< 0.05", "< 0.1", "< 0.5", "< 1.0"],
    correctAnswer: 1,
    explanation: "The target bias score is < 0.1 disparate impact, indicating minimal bias in AI decision-making."
  },

  // Chapter 4 - 5 questions
  {
    id: "ch4-1",
    chapterId: 4,
    question: "What does the rule 'Garbage in, ethics out' refer to?",
    options: [
      "Poor code quality leads to bugs",
      "Biased or low-quality training data leads to unethical AI outcomes",
      "Bad user interfaces confuse customers",
      "Insufficient documentation causes problems"
    ],
    correctAnswer: 1,
    explanation: "This principle emphasizes that ethical AI starts with ethical data—biased training data inevitably produces biased AI systems."
  },
  {
    id: "ch4-2",
    chapterId: 4,
    question: "Which model type has the highest interpretability for SMBs?",
    options: ["Neural Networks", "Decision Trees", "Deep Learning Models", "Ensemble Methods"],
    correctAnswer: 1,
    explanation: "Decision Trees offer high interpretability through clear if-then rules, making them ideal for SMBs that need explainable AI."
  },
  {
    id: "ch4-3",
    chapterId: 4,
    question: "What is the Human-in-the-Loop (HITL) requirement for HIGH risk decisions like hiring or pricing over $1K?",
    options: [
      "Optional human review",
      "Human override available within 24 hours",
      "Mandatory human approval required",
      "Quarterly human audits"
    ],
    correctAnswer: 2,
    explanation: "High-risk decisions require mandatory human approval before any action is taken, ensuring critical decisions aren't fully automated."
  },
  {
    id: "ch4-4",
    chapterId: 4,
    question: "In the incident response playbook, how quickly should the AI be paused after detection?",
    options: ["< 5 minutes", "< 15 minutes", "< 1 hour", "< 24 hours"],
    correctAnswer: 1,
    explanation: "After detection (< 5 mins), the AI should be paused within < 15 minutes in the 'Contain' phase to prevent further harm."
  },
  {
    id: "ch4-5",
    chapterId: 4,
    question: "What percentage reduction in AI energy use did GreenLeaf Cafe achieve?",
    options: ["18%", "27%", "43%", "60%"],
    correctAnswer: 2,
    explanation: "GreenLeaf Cafe reduced AI energy use by 43% using tactics like batching predictions and efficient models, then marketed it as 'Carbon-Neutral Ordering'."
  },

  // Chapter 5 - 5 questions
  {
    id: "ch5-1",
    chapterId: 5,
    question: "How much did UrbanThreads increase their plus-size product sales after fixing their AI bias?",
    options: ["18%", "22%", "36%", "48%"],
    correctAnswer: 2,
    explanation: "After adding diverse training data and transparency, UrbanThreads saw plus-size sales increase by 36%."
  },
  {
    id: "ch5-2",
    chapterId: 5,
    question: "What was unique about ProClean's approach to AI-predicted workforce reduction?",
    options: [
      "They ignored the AI recommendations",
      "They laid off workers immediately",
      "They created a Job Transition Fund and retrained all 12 workers into supervisory roles",
      "They sued the AI vendor"
    ],
    correctAnswer: 2,
    explanation: "ProClean achieved zero layoffs by investing $18K in reskilling, involving workers in AI design, and creating transparency—showing automation doesn't require elimination."
  },
  {
    id: "ch5-3",
    chapterId: 5,
    question: "What was the fine for HireFast's biased resume screening AI?",
    options: ["$67,000", "$88,000", "$125,000", "$180,000"],
    correctAnswer: 2,
    explanation: "HireFast was fined $125,000 under the Colorado AI Act after their AI rejected 73% of applicants with non-traditional education."
  },
  {
    id: "ch5-4",
    chapterId: 5,
    question: "What percentage of complainers became repeat buyers for UrbanThreads after they implemented transparency?",
    options: ["22%", "42%", "68%", "92%"],
    correctAnswer: 2,
    explanation: "68% of complainers became repeat buyers after UrbanThreads added transparency and SHAP explainers, proving transparency turns critics into advocates."
  },
  {
    id: "ch5-5",
    chapterId: 5,
    question: "According to the cross-case meta-analysis, what percentage of success cases had pre-launch audits?",
    options: ["33%", "67%", "100%", "None"],
    correctAnswer: 2,
    explanation: "100% of success cases had pre-launch audits, while 0% of failure cases did—showing audits are critical for ethical AI success."
  },

  // Chapter 6 - 5 questions
  {
    id: "ch6-1",
    chapterId: 6,
    question: "Which free tool is recommended for detecting bias and measuring disparate impact?",
    options: ["SHAP", "AIF360", "Guardrails AI", "CodeCarbon"],
    correctAnswer: 1,
    explanation: "AIF360 (IBM's AI Fairness 360) is the recommended free tool for detecting bias and measuring disparate impact in AI systems."
  },
  {
    id: "ch6-2",
    chapterId: 6,
    question: "What is CodeCarbon used for?",
    options: [
      "Detecting bias in models",
      "Tracking CO₂ emissions per model run",
      "Preventing prompt injection",
      "Explaining model decisions"
    ],
    correctAnswer: 1,
    explanation: "CodeCarbon is a free tool that tracks the carbon footprint and CO₂ emissions of AI model training and inference."
  },
  {
    id: "ch6-3",
    chapterId: 6,
    question: "By what year are mandatory AI labels expected across the EU (according to the trends forecast)?",
    options: ["2025", "2026", "2028", "2030"],
    correctAnswer: 1,
    explanation: "By 2026, the EU AI Act extension is expected to require all customer-facing AI to display 'Generated by AI' labels plus risk tier."
  },
  {
    id: "ch6-4",
    chapterId: 6,
    question: "What is the estimated annual cost for AI Liability Insurance for SMBs by 2029?",
    options: ["$500/year", "$1,200/year", "$5,000/year", "$10,000/year"],
    correctAnswer: 1,
    explanation: "AI Liability Insurance is projected to become a standard SMB policy rider costing approximately $1,200/year by 2029."
  },
  {
    id: "ch6-5",
    chapterId: 6,
    question: "What is recommended for the first month of the 90-Day Ethics Roadmap?",
    options: [
      "Build a dashboard with Grafana",
      "Audit 1 AI tool using AIF360",
      "Launch company-wide training",
      "Hire an ethics consultant"
    ],
    correctAnswer: 1,
    explanation: "Month 1 focuses on auditing 1 AI tool using AIF360 to build momentum and identify immediate risks before broader initiatives."
  }
];

export default quizzes;

