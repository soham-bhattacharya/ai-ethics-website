export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const manufacturingQuizzes: QuizQuestion[] = [
  // Introduction - 3 questions
  {
    id: "mfg-intro-1",
    chapterId: 0,
    question: "What does the OSHA General Duty Clause require regarding AI-introduced hazards?",
    options: [
      "Nothing - AI is exempt",
      "Employers must provide a workplace free from recognized hazards, including those from AI",
      "Only reporting requirements",
      "Only training requirements"
    ],
    correctAnswer: 1,
    explanation: "The OSHA General Duty Clause requires employers to provide a workplace free from recognized hazards, which covers AI-related hazards and requires understanding and mitigating risks introduced by AI systems."
  },
  {
    id: "mfg-intro-2",
    chapterId: 0,
    question: "What does ISO/TS 15066 address?",
    options: [
      "Environmental standards",
      "Collaborative robot safety",
      "Accounting practices",
      "Marketing ethics"
    ],
    correctAnswer: 1,
    explanation: "ISO/TS 15066 is the international standard specifically addressing collaborative robot (cobot) safety, providing guidelines for safe human-robot collaboration in manufacturing environments."
  },
  {
    id: "mfg-intro-3",
    chapterId: 0,
    question: "What ethical concern does AI-powered worker monitoring raise?",
    options: [
      "It's always beneficial",
      "Surveillance intensity, purpose limitation, and worker agency",
      "Only cost concerns",
      "Only technical concerns"
    ],
    correctAnswer: 1,
    explanation: "AI-powered worker monitoring raises ethical concerns about surveillance intensity, whether data is used only for legitimate purposes (purpose limitation), and maintaining worker agency and dignity in the workplace."
  },

  // Module 1: Automation Ethics - 4 questions
  {
    id: "mfg-m1-1",
    chapterId: 1,
    question: "What are 'just transition' principles in manufacturing automation?",
    options: [
      "Moving quickly to automation",
      "Advance notice, retraining, internal mobility, fair severance, and community support for displaced workers",
      "Only legal compliance",
      "Only cost considerations"
    ],
    correctAnswer: 1,
    explanation: "Just transition principles protect workers affected by automation through advance notice, retraining opportunities, prioritizing internal redeployment, fair compensation for displaced workers, outplacement support, and mitigating local economic impact."
  },
  {
    id: "mfg-m1-2",
    chapterId: 1,
    question: "What is 'automation bias' in manufacturing?",
    options: [
      "Preferring manual processes",
      "When workers over-rely on automated systems without proper verification",
      "Bias in training data",
      "Cost bias toward automation"
    ],
    correctAnswer: 1,
    explanation: "Automation bias occurs when workers over-rely on automated systems, accepting AI recommendations without proper verification. This can lead to reduced vigilance and slower response when AI fails."
  },
  {
    id: "mfg-m1-3",
    chapterId: 1,
    question: "What ethical monitoring principle limits how surveillance data can be used?",
    options: [
      "Maximum collection",
      "Purpose limitation - data should only be used for stated, legitimate purposes",
      "Unlimited use",
      "Sales to third parties"
    ],
    correctAnswer: 1,
    explanation: "Purpose limitation means surveillance data should only be used for clear, legitimate reasons and not for unrelated purposes. Regular review of monitoring necessity helps ensure this principle is maintained."
  },
  {
    id: "mfg-m1-4",
    chapterId: 1,
    question: "What should ethical human-machine collaboration systems allow?",
    options: [
      "Complete machine control",
      "Human override of AI decisions, transparency into reasoning, and support for skill development",
      "No human intervention",
      "Only emergency stops"
    ],
    correctAnswer: 1,
    explanation: "Ethical human-machine collaboration systems should allow human override of AI decisions, provide transparency into AI reasoning, support rather than replace human judgment, and enable workers to develop skills."
  },

  // Module 2: Safety-Critical AI - 4 questions
  {
    id: "mfg-m2-1",
    chapterId: 2,
    question: "What is a 'false negative' in AI safety systems?",
    options: [
      "Correctly detecting a hazard",
      "Failing to detect a hazard when one exists",
      "Detecting a hazard that doesn't exist",
      "A system shutdown"
    ],
    correctAnswer: 1,
    explanation: "A false negative in AI safety systems occurs when the system fails to detect a hazard that actually exists, potentially leading to worker injury or other harm if the hazard isn't addressed."
  },
  {
    id: "mfg-m2-2",
    chapterId: 2,
    question: "What is 'automation complacency' in safety-critical systems?",
    options: [
      "Proper system trust",
      "Workers over-relying on AI safety systems, leading to reduced vigilance",
      "Excessive manual checking",
      "System optimization"
    ],
    correctAnswer: 1,
    explanation: "Automation complacency is the risk that workers over-rely on AI safety systems, leading to reduced vigilance, skill degradation for backup tasks, and slower response when AI fails."
  },
  {
    id: "mfg-m2-3",
    chapterId: 2,
    question: "When should humans have override capability in AI systems?",
    options: [
      "Never - AI should always control",
      "When AI decisions could cause serious harm or situations fall outside AI training",
      "Only for cost decisions",
      "Only for scheduling"
    ],
    correctAnswer: 1,
    explanation: "Humans should have override capability when AI decisions could cause serious harm, when situations may fall outside AI training, when worker experience adds important context, and when legal or regulatory requirements mandate it."
  },
  {
    id: "mfg-m2-4",
    chapterId: 2,
    question: "What documentation is required for safety-critical AI accountability?",
    options: [
      "Only purchase records",
      "Risk assessments, testing results, maintenance records, incident reports, and training records",
      "Only marketing materials",
      "Only vendor contracts"
    ],
    correctAnswer: 1,
    explanation: "For safety-critical AI accountability, organizations must maintain risk assessments, testing and validation results, maintenance and modification records, incident reports and investigations, training records, and override/exception logs."
  },

  // Module 3: Implementation - 3 questions
  {
    id: "mfg-m3-1",
    chapterId: 3,
    question: "What is a core principle of manufacturing AI ethics?",
    options: [
      "Maximize automation at all costs",
      "Worker welfare: safety is paramount, fair treatment, meaningful work, and voice in decisions",
      "Only consider efficiency",
      "Only consider cost reduction"
    ],
    correctAnswer: 1,
    explanation: "Worker welfare is a core principle: safety is paramount, displaced workers should be treated fairly, meaningful work should be preserved, and workers should have voice in automation decisions."
  },
  {
    id: "mfg-m3-2",
    chapterId: 3,
    question: "Who should be involved in manufacturing AI governance?",
    options: [
      "Only executives",
      "Operations, safety, HR/labor relations, legal/compliance, and worker representatives",
      "Only the IT department",
      "Only external auditors"
    ],
    correctAnswer: 1,
    explanation: "Manufacturing AI governance requires cross-functional oversight including operations and engineering, safety and environmental, HR and labor relations, legal and compliance, and worker involvement through unions or representatives."
  },
  {
    id: "mfg-m3-3",
    chapterId: 3,
    question: "What metrics should be tracked for manufacturing AI ethics?",
    options: [
      "Only production output",
      "Safety metrics, worker metrics (displacement, satisfaction), and operational metrics",
      "Only financial metrics",
      "Only speed metrics"
    ],
    correctAnswer: 1,
    explanation: "Manufacturing AI ethics should track safety metrics (incident rates, near-misses), worker metrics (displacement, retraining, satisfaction, grievances), and operational metrics (quality, efficiency, compliance status)."
  }
];

export default manufacturingQuizzes;

