export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const mediaQuizzes: QuizQuestion[] = [
  // Introduction - 3 questions
  {
    id: "med-intro-1",
    chapterId: 0,
    question: "According to research, what percentage of people worry about their ability to distinguish real from AI-generated content?",
    options: ["23%", "43%", "63%", "83%"],
    correctAnswer: 2,
    explanation: "Research shows that 63% of people worry about their ability to distinguish real content from AI-generated content, highlighting the growing concern about synthetic media's impact on trust."
  },
  {
    id: "med-intro-2",
    chapterId: 0,
    question: "What is C2PA in the context of media ethics?",
    options: [
      "A copyright law",
      "Coalition for Content Provenance and Authenticity - a standard for content authentication",
      "A social media platform",
      "A video editing software"
    ],
    correctAnswer: 1,
    explanation: "C2PA (Coalition for Content Provenance and Authenticity) is an initiative developing technical standards for content authentication, including cryptographic signatures for provenance and adoption by major platforms and tools."
  },
  {
    id: "med-intro-3",
    chapterId: 0,
    question: "Which states have enacted laws specifically addressing deepfakes?",
    options: [
      "No states have deepfake laws",
      "California and Texas, among others",
      "Only federal laws exist",
      "Only international laws apply"
    ],
    correctAnswer: 1,
    explanation: "Several states including California and Texas have enacted deepfake laws addressing issues like election manipulation and non-consensual intimate imagery, with more states considering similar legislation."
  },

  // Module 1: Synthetic Media - 4 questions
  {
    id: "med-m1-1",
    chapterId: 1,
    question: "When is disclosure of synthetic media essential?",
    options: [
      "Never - it's obvious",
      "When content could be mistaken for authentic, attribution matters, or law requires it",
      "Only for professional productions",
      "Only when asked by viewers"
    ],
    correctAnswer: 1,
    explanation: "Disclosure is essential when content could be mistaken for authentic, when attribution matters (quotes, interviews), when trust is at stake (news, journalism), when law requires it (advertising, political content), or when platform policies mandate it."
  },
  {
    id: "med-m1-2",
    chapterId: 1,
    question: "What are the characteristics of effective synthetic media disclosure?",
    options: [
      "Hidden in fine print",
      "Clear, prominent, persistent, and contextual",
      "Only verbal",
      "Only in metadata"
    ],
    correctAnswer: 1,
    explanation: "Effective disclosure is clear (unambiguous language), prominent (not hidden), persistent (travels with content when shared), and contextual (appropriate for the medium and audience)."
  },
  {
    id: "med-m1-3",
    chapterId: 1,
    question: "What is a beneficial use of synthetic media?",
    options: [
      "Political manipulation",
      "Accessibility applications like text-to-speech for visually impaired users",
      "Creating fake endorsements",
      "Impersonating public figures"
    ],
    correctAnswer: 1,
    explanation: "Legitimate beneficial uses of synthetic media include accessibility (text-to-speech), localization (voice dubbing), creative expression and art, educational demonstrations, and entertainment with clear fictional framing."
  },
  {
    id: "med-m1-4",
    chapterId: 1,
    question: "What labeling approach helps audiences understand AI involvement in content?",
    options: [
      "No labels are helpful",
      "A tiered system: Generated, Modified, Assisted, Authentic",
      "Only 'AI' or 'Not AI'",
      "Color coding only"
    ],
    correctAnswer: 1,
    explanation: "A tiered labeling system helps audiences understand AI involvement: 'Generated' (entirely AI-created), 'Modified' (AI-enhanced authentic content), 'Assisted' (human-created with AI tools), and 'Authentic' (no AI involvement)."
  },

  // Module 2: AI in Newsrooms - 4 questions
  {
    id: "med-m2-1",
    chapterId: 2,
    question: "What type of news content was the Associated Press first to automate with AI?",
    options: [
      "Political analysis",
      "Earnings reports and financial summaries",
      "Weather forecasts",
      "Opinion pieces"
    ],
    correctAnswer: 1,
    explanation: "The Associated Press pioneered automated journalism with AI-written earnings stories starting in 2014, demonstrating that routine, data-driven content could be reliably automated while freeing journalists for more complex work."
  },
  {
    id: "med-m2-2",
    chapterId: 2,
    question: "What editorial standard should AI-generated news content meet?",
    options: [
      "Lower standards since it's automated",
      "The same accuracy and verification standards as human journalism",
      "No standards apply to AI content",
      "Only speed requirements"
    ],
    correctAnswer: 1,
    explanation: "AI-generated content must meet the same editorial standards as human journalism, including fact-checking, source attribution, error correction procedures, and human review proportional to stakes."
  },
  {
    id: "med-m2-3",
    chapterId: 2,
    question: "What type of journalism should typically NOT be AI-led?",
    options: [
      "Sports game recaps",
      "Investigative reporting, opinion, and stories involving vulnerable people",
      "Financial summaries",
      "Weather reports"
    ],
    correctAnswer: 1,
    explanation: "Some journalism requires human judgment: investigative reporting, opinion and analysis, stories involving vulnerable people, complex ethical situations, and breaking news requiring verification should be human-led."
  },
  {
    id: "med-m2-4",
    chapterId: 2,
    question: "What should a newsroom AI policy address?",
    options: [
      "Only technical specifications",
      "Permitted uses, oversight requirements, disclosure standards, quality control, and accountability",
      "Only budget considerations",
      "Only byline formats"
    ],
    correctAnswer: 1,
    explanation: "A comprehensive newsroom AI policy should address what AI can and cannot do, when human review is required, how AI involvement is communicated to readers, quality verification processes, staff training, and accountability for AI content."
  },

  // Module 3: Implementation - 3 questions
  {
    id: "med-m3-1",
    chapterId: 3,
    question: "What is a core principle for media AI ethics?",
    options: [
      "Speed over accuracy",
      "Truth and accuracy - AI must not compromise factual accuracy",
      "Automation maximization",
      "Audience growth at all costs"
    ],
    correctAnswer: 1,
    explanation: "Truth and accuracy is a core principle: AI must not compromise factual accuracy, verification standards apply to AI content, error correction procedures apply to AI mistakes, and human review should match the stakes of the content."
  },
  {
    id: "med-m3-2",
    chapterId: 3,
    question: "Who should be involved in media AI ethics governance?",
    options: [
      "Only the technology team",
      "Editorial leadership, technology, legal, and audience/community input",
      "Only external consultants",
      "Only executive management"
    ],
    correctAnswer: 1,
    explanation: "Media AI ethics governance requires editorial leadership oversight, technology involvement for tool selection and security, legal and compliance review, and audience/community input to ensure decisions maintain credibility and trust."
  },
  {
    id: "med-m3-3",
    chapterId: 3,
    question: "What metrics should be tracked for media AI ethics?",
    options: [
      "Only revenue metrics",
      "Disclosure accuracy, trust measures, staff confidence, and error rates in AI content",
      "Only page views",
      "Only social media shares"
    ],
    correctAnswer: 1,
    explanation: "Key metrics for media AI ethics include compliance metrics (disclosure accuracy), trust metrics (audience trust scores, brand perception), and quality metrics (error rates, staff confidence and concerns about AI use)."
  }
];

export default mediaQuizzes;

