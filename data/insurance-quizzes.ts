export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const insuranceQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "ins-intro-1",
    chapterId: 0,
    question: "What entity provides primary oversight of insurance regulation in the United States?",
    options: [
      "Federal Insurance Agency",
      "State insurance departments",
      "Securities and Exchange Commission",
      "Federal Trade Commission"
    ],
    correctAnswer: 1,
    explanation: "Insurance regulation in the United States is primarily a state responsibility, with each state having its own insurance department or commission that oversees insurers operating in that state."
  },
  {
    id: "ins-intro-2",
    chapterId: 0,
    question: "Which state was the first to require insurers to test AI for unfair discrimination?",
    options: ["California", "New York", "Colorado", "Texas"],
    correctAnswer: 2,
    explanation: "Colorado became the first state to require insurers to test for unfair discrimination in AI models through SB 21-169, with enforcement beginning in 2023."
  },
  {
    id: "ins-intro-3",
    chapterId: 0,
    question: "Which organization develops model regulations for insurance that are often adopted by states?",
    options: [
      "Federal Insurance Office",
      "National Association of Insurance Commissioners (NAIC)",
      "Insurance Information Institute",
      "American Insurance Association"
    ],
    correctAnswer: 1,
    explanation: "The National Association of Insurance Commissioners (NAIC) develops model laws and regulations that promote regulatory uniformity across states and provides guidance on emerging issues like AI."
  },
  {
    id: "ins-intro-4",
    chapterId: 0,
    question: "What is a key challenge that 'black box' AI models create for insurance regulation?",
    options: [
      "They are more expensive to operate",
      "They challenge transparency requirements for explaining decisions",
      "They cannot process enough data",
      "They require more human oversight"
    ],
    correctAnswer: 1,
    explanation: "Many state insurance regulations require insurers to explain rating factors, but complex 'black box' AI models make it difficult to explain why specific premiums were calculated or to demonstrate actuarial justification to regulators."
  },

  // Module 1: Underwriting AI - 4 questions
  {
    id: "ins-m1-1",
    chapterId: 1,
    question: "What is 'proxy discrimination' in the context of AI underwriting?",
    options: [
      "When an AI system directly uses protected characteristics",
      "When AI uses variables that correlate with protected characteristics, effectively discriminating indirectly",
      "When a third party provides discriminatory data",
      "When discrimination occurs accidentally"
    ],
    correctAnswer: 1,
    explanation: "Proxy discrimination occurs when AI uses variables like ZIP code, education level, or credit score that correlate with protected characteristics, effectively enabling indirect discrimination even when protected characteristics are excluded from the model."
  },
  {
    id: "ins-m1-2",
    chapterId: 1,
    question: "What testing should be conducted before deploying an underwriting AI model?",
    options: [
      "Only accuracy testing",
      "Disparate impact analysis, feature importance review, and proxy detection",
      "User interface testing only",
      "Speed and performance testing only"
    ],
    correctAnswer: 1,
    explanation: "Before deploying an underwriting model, insurers should conduct disparate impact analysis across protected classes, feature importance review, proxy detection, and counterfactual testing to ensure fair outcomes."
  },
  {
    id: "ins-m1-3",
    chapterId: 1,
    question: "Under Colorado's SB 21-169, what must insurers do regarding AI?",
    options: [
      "Ban all AI use in underwriting",
      "Test AI for unfairly discriminatory outcomes and maintain governance frameworks",
      "Report all AI use to federal regulators",
      "Only use AI approved by the state"
    ],
    correctAnswer: 1,
    explanation: "Colorado's SB 21-169 requires insurers to conduct testing to determine if AI produces unfairly discriminatory outcomes, document methodology and results, take corrective action if discrimination is found, and maintain governance frameworks for AI oversight."
  },
  {
    id: "ins-m1-4",
    chapterId: 1,
    question: "What is the 'training data problem' in AI underwriting?",
    options: [
      "Training data is too expensive",
      "There isn't enough data to train AI models",
      "AI models learn from historical decisions that may have been discriminatory",
      "Training data takes too long to collect"
    ],
    correctAnswer: 2,
    explanation: "The training data problem refers to the fact that AI models learn from historical underwriting decisions, and if past decisions were discriminatory, the models will learn and perpetuate those patterns."
  },

  // Module 2: Claims Processing - 4 questions
  {
    id: "ins-m2-1",
    chapterId: 2,
    question: "What is a key ethical concern with aggressive AI fraud detection in claims?",
    options: [
      "It's too expensive",
      "Legitimate claims may be flagged, with minority populations disproportionately affected",
      "It slows down processing",
      "It requires too much human oversight"
    ],
    correctAnswer: 1,
    explanation: "Aggressive fraud detection algorithms can flag legitimate claims as suspicious, and minority populations may be disproportionately flagged, causing delays, investigations, and reputation damage for innocent customers."
  },
  {
    id: "ins-m2-2",
    chapterId: 2,
    question: "What type of claims should typically receive 'high-touch' human-primary handling?",
    options: [
      "All claims under $1,000",
      "Complex claims, sensitive situations, significant financial impact, or customer requests",
      "Only claims over $1 million",
      "Claims from new customers only"
    ],
    correctAnswer: 1,
    explanation: "High-touch human-primary handling is appropriate for complex or disputed claims, sensitive situations involving death or serious injury, significant financial impact, and when customers specifically request human handling."
  },
  {
    id: "ins-m2-3",
    chapterId: 2,
    question: "What do most state Unfair Claims Settlement Practices Acts prohibit?",
    options: [
      "Using any technology in claims",
      "Failing to investigate claims reasonably and denying claims without proper investigation",
      "Processing claims in under 30 days",
      "Offering any settlement amount"
    ],
    correctAnswer: 1,
    explanation: "State Unfair Claims Settlement Practices Acts prohibit misrepresenting policy provisions, failing to acknowledge or investigate claims promptly, denying claims without reasonable investigation, and delaying payment unreasonably."
  },
  {
    id: "ins-m2-4",
    chapterId: 2,
    question: "What is 'automation bias' in claims processing?",
    options: [
      "AI systems being biased",
      "Adjusters uncritically accepting AI recommendations without proper review",
      "Preferring manual over automated processes",
      "Training data being biased"
    ],
    correctAnswer: 1,
    explanation: "Automation bias refers to the tendency of human adjusters to uncritically accept AI recommendations, which can lead to hasty decisions and unfairly denied valid claims."
  },

  // Module 3: State Regulations - 4 questions
  {
    id: "ins-m3-1",
    chapterId: 3,
    question: "Which of these is one of the NAIC's five core principles on AI in insurance?",
    options: [
      "Profit maximization",
      "Fair and Ethical (AI should avoid unfair discrimination)",
      "Automation first",
      "Minimal human oversight"
    ],
    correctAnswer: 1,
    explanation: "The NAIC's five core principles are: Fair and Ethical, Accountable, Compliant, Transparent, and Secure. The Fair and Ethical principle states that AI should be designed to avoid unfair discrimination."
  },
  {
    id: "ins-m3-2",
    chapterId: 3,
    question: "What is a recommended strategy for insurers operating in multiple states with varying AI regulations?",
    options: [
      "Only operate in states without AI regulations",
      "Design to the highest state standard (like Colorado) nationally",
      "Ignore state-specific requirements",
      "Wait for federal preemption"
    ],
    correctAnswer: 1,
    explanation: "A recommended strategy is to design AI governance to the highest state standard (such as Colorado or New York) nationally, which simplifies multi-state compliance while ensuring all requirements are met."
  },
  {
    id: "ins-m3-3",
    chapterId: 3,
    question: "What does New York's Circular Letter 2024-01 require regarding AI governance?",
    options: [
      "A complete ban on AI use",
      "Risk management frameworks and board oversight for AI/ML models",
      "Only federal approval for AI use",
      "AI can only be used for marketing"
    ],
    correctAnswer: 1,
    explanation: "New York's Department of Financial Services guidance requires insurers to ensure AI doesn't produce unfairly discriminatory outcomes, maintain risk management frameworks for AI/ML models, and have board oversight of AI governance."
  },
  {
    id: "ins-m3-4",
    chapterId: 3,
    question: "What is the McCarran-Ferguson Act's significance for insurance AI regulation?",
    options: [
      "It created federal AI standards for insurance",
      "It delegated insurance regulation to the states, creating today's state-based system",
      "It banned AI in insurance",
      "It established the NAIC"
    ],
    correctAnswer: 1,
    explanation: "The McCarran-Ferguson Act of 1945 delegated insurance regulation to the states, which is why insurance is primarily regulated at the state level today, creating a patchwork of AI requirements."
  },

  // Module 4: Implementation - 4 questions
  {
    id: "ins-m4-1",
    chapterId: 4,
    question: "What should be included in an AI Ethics Committee's membership?",
    options: [
      "Only technology staff",
      "Cross-functional representation including actuarial, legal, IT, operations, and compliance",
      "Only executive leadership",
      "Only external consultants"
    ],
    correctAnswer: 1,
    explanation: "An effective AI Ethics Committee should have cross-functional membership including actuarial, legal, IT, operations, and compliance representatives to ensure diverse perspectives on AI governance decisions."
  },
  {
    id: "ins-m4-2",
    chapterId: 4,
    question: "During the first phase of implementing an AI ethics program, what is a key activity?",
    options: [
      "Training all staff on policies",
      "Cataloging all AI systems and documenting data sources",
      "Public relations announcements",
      "Launching new AI products"
    ],
    correctAnswer: 1,
    explanation: "The first phase (Assessment) involves inventorying and cataloging all AI systems in use, identifying owners and stakeholders, documenting data sources and outputs, and mapping AI to business processes."
  },
  {
    id: "ins-m4-3",
    chapterId: 4,
    question: "What should be assessed when using third-party AI vendors in insurance?",
    options: [
      "Only the price of the service",
      "Whether they provide documentation, testing results, and meet the same ethical standards",
      "Only their market reputation",
      "Only their technical performance"
    ],
    correctAnswer: 1,
    explanation: "When using third-party AI, insurers should assess whether vendors provide documentation of methodology, testing for bias, explainability capabilities, disclosed data practices, and contractual commitments to fair use."
  },
  {
    id: "ins-m4-4",
    chapterId: 4,
    question: "How often should an AI Ethics Committee conduct a formal review of AI systems?",
    options: [
      "Only when problems arise",
      "Quarterly, with automated monitoring continuously",
      "Once every five years",
      "Only during regulatory examinations"
    ],
    correctAnswer: 1,
    explanation: "AI Ethics Committees should conduct formal reviews quarterly, while automated monitoring runs continuously and dashboard reviews occur weekly, ensuring ongoing oversight of AI systems."
  }
];

export default insuranceQuizzes;

