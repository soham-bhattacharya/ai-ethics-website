export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const marketingQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "mkt-intro-1",
    chapterId: 0,
    question: "What percentage of digital display ads are now bought programmatically?",
    options: ["45%", "65%", "85%", "95%"],
    correctAnswer: 2,
    explanation: "Approximately 85% of digital display ads are now bought programmatically, with AI optimizing billions of ad placements in real-time."
  },
  {
    id: "mkt-intro-2",
    chapterId: 0,
    question: "Which federal agency enforces truth in advertising and has authority over AI-related deceptive practices?",
    options: [
      "Securities and Exchange Commission",
      "Federal Trade Commission",
      "Federal Communications Commission",
      "Consumer Financial Protection Bureau"
    ],
    correctAnswer: 1,
    explanation: "The Federal Trade Commission (FTC) enforces truth in advertising, endorsement guidelines, native advertising rules, and prohibits unfair or deceptive data practices, including those involving AI."
  },
  {
    id: "mkt-intro-3",
    chapterId: 0,
    question: "What is 'persuasion profiling' in AI marketing?",
    options: [
      "Creating customer personas",
      "Tailoring manipulation techniques to individual psychology",
      "Standard market segmentation",
      "A/B testing of advertisements"
    ],
    correctAnswer: 1,
    explanation: "Persuasion profiling refers to the concerning practice of using AI to identify psychological vulnerabilities and tailor manipulation techniques to individual customers based on their specific psychology."
  },
  {
    id: "mkt-intro-4",
    chapterId: 0,
    question: "Which law gives California consumers the right to opt out of the sale or sharing of their personal information?",
    options: [
      "CCPA/CPRA",
      "GDPR",
      "FTC Act",
      "CAN-SPAM Act"
    ],
    correctAnswer: 0,
    explanation: "The California Consumer Privacy Act (CCPA) and its successor, the California Privacy Rights Act (CPRA), give consumers rights to data access, deletion, and the ability to opt out of the sale or sharing of their personal information."
  },

  // Module 1: Personalization - 4 questions
  {
    id: "mkt-m1-1",
    chapterId: 1,
    question: "When do customers generally accept data use for personalization?",
    options: [
      "Only when required by law",
      "When value is clear, use is expected, control exists, and trust is present",
      "Never - customers don't want personalization",
      "Only for premium products"
    ],
    correctAnswer: 1,
    explanation: "Customers generally accept data use when they receive obvious benefits, the use matches their mental model, they can control what's collected, and they believe the company will act responsibly."
  },
  {
    id: "mkt-m1-2",
    chapterId: 1,
    question: "What is 'context collapse' in personalization?",
    options: [
      "When websites crash",
      "When data from one context unexpectedly appears in another context",
      "When personalization engines fail",
      "When customer profiles are deleted"
    ],
    correctAnswer: 1,
    explanation: "Context collapse occurs when data collected in one context (like browsing health websites) unexpectedly appears in another context (like seeing related ads on social media), making customers feel surveilled."
  },
  {
    id: "mkt-m1-3",
    chapterId: 1,
    question: "What lesson does the 'pregnancy prediction' case study teach about personalization?",
    options: [
      "AI predictions are always accurate",
      "Just because you can infer something doesn't mean you should use it for marketing",
      "Customers appreciate highly targeted personalization",
      "Retail personalization is illegal"
    ],
    correctAnswer: 1,
    explanation: "The pregnancy prediction case, where a retailer's AI identified pregnant customers before they told friends and family, teaches that sensitive inferences require extreme care and that some knowledge is not appropriate for marketing purposes."
  },
  {
    id: "mkt-m1-4",
    chapterId: 1,
    question: "Which of these is an ethical personalization practice?",
    options: [
      "Using health inferences for targeting",
      "Tracking across contexts without consent",
      "Providing clear dashboards showing what data you have about customers",
      "Charging different prices based on perceived desperation"
    ],
    correctAnswer: 2,
    explanation: "Ethical personalization involves transparency, including providing dashboards showing what data is collected, giving just-in-time explanations when data is collected, and honest explanations of how personalization works."
  },

  // Module 2: Targeting - 4 questions
  {
    id: "mkt-m2-1",
    chapterId: 2,
    question: "What is 'algorithmic discrimination' in ad targeting?",
    options: [
      "When ads are shown to everyone equally",
      "When AI learns to show ads differently to demographic groups, even without explicit targeting",
      "When ad platforms crash",
      "When marketers set intentional exclusions"
    ],
    correctAnswer: 1,
    explanation: "Algorithmic discrimination occurs when AI optimization learns to show ads differently to demographic groups based on historical click and conversion patterns, reinforcing biases even without explicit discriminatory targeting."
  },
  {
    id: "mkt-m2-2",
    chapterId: 2,
    question: "Which law prohibits discrimination in housing advertising?",
    options: [
      "CAN-SPAM Act",
      "Fair Housing Act",
      "Children's Online Privacy Protection Act",
      "Digital Millennium Copyright Act"
    ],
    correctAnswer: 1,
    explanation: "The Fair Housing Act prohibits discrimination in housing advertising based on race, color, national origin, religion, sex, familial status, and disability."
  },
  {
    id: "mkt-m2-3",
    chapterId: 2,
    question: "What changes did Meta (Facebook) agree to after the HUD lawsuit regarding housing ads?",
    options: [
      "To stop all housing advertising",
      "To remove discriminatory targeting options and build systems to detect discriminatory delivery",
      "To increase advertising prices",
      "To only show ads in California"
    ],
    correctAnswer: 1,
    explanation: "After the HUD lawsuit, Meta agreed to remove discriminatory targeting options for housing, employment, and credit ads, build systems to detect discriminatory delivery, create Special Ad Categories with restrictions, and submit to independent audits."
  },
  {
    id: "mkt-m2-4",
    chapterId: 2,
    question: "What should advertisers do to ensure fair campaign delivery?",
    options: [
      "Only run campaigns on one platform",
      "Monitor delivery metrics across demographics and adjust if disparities emerge",
      "Avoid all targeting",
      "Only target high-income demographics"
    ],
    correctAnswer: 1,
    explanation: "Advertisers should use Special Ad Categories when required, avoid proxy targeting, monitor delivery metrics across demographics during campaigns, and be prepared to adjust if demographic disparities emerge."
  },

  // Module 3: Transparency and Consent - 3 questions
  {
    id: "mkt-m3-1",
    chapterId: 3,
    question: "What makes consent 'meaningful' according to ethical standards?",
    options: [
      "Any checkbox is sufficient",
      "It must be informed, voluntary, specific, and revocable",
      "Only written signatures count",
      "Implied consent is always sufficient"
    ],
    correctAnswer: 1,
    explanation: "Meaningful consent requires that the person understands what they're agreeing to (informed), has a real choice without coercion (voluntary), agrees to specific uses rather than blanket agreements (specific), and can easily withdraw consent later (revocable)."
  },
  {
    id: "mkt-m3-2",
    chapterId: 3,
    question: "According to the FTC's updated 2023 Endorsement Guidelines, what must be disclosed about AI?",
    options: [
      "Nothing - AI endorsements are exempt",
      "AI-generated endorsements and synthetic influencers require clear and conspicuous disclosure",
      "Only the technical specifications",
      "Only if asked by consumers"
    ],
    correctAnswer: 1,
    explanation: "The FTC's 2023 Endorsement Guidelines require that AI-generated endorsements, synthetic influencers, and reviews generated or manipulated by AI must be clearly and conspicuously disclosed to consumers."
  },
  {
    id: "mkt-m3-3",
    chapterId: 3,
    question: "What is a 'dark pattern' in consent design?",
    options: [
      "Using dark colors in website design",
      "Design that tricks people into consenting through manipulation",
      "Showing consent options at night",
      "Password-protected consent forms"
    ],
    correctAnswer: 1,
    explanation: "Dark patterns are design elements that trick or manipulate people into consenting or making choices they wouldn't otherwise make, such as making the 'accept all' button prominent while hiding decline options."
  },

  // Module 4: Implementation - 3 questions
  {
    id: "mkt-m4-1",
    chapterId: 4,
    question: "When evaluating an AI marketing tool, which factor should be assessed?",
    options: [
      "Only the price",
      "Privacy (data use), transparency (explainability), consent, fairness, and compliance",
      "Only the user interface",
      "Only the speed"
    ],
    correctAnswer: 1,
    explanation: "When evaluating AI marketing tools, organizations should assess privacy (how much personal data it uses), transparency (whether you can explain how it works), consent quality, fairness (discrimination potential), manipulation risk, and legal compliance."
  },
  {
    id: "mkt-m4-2",
    chapterId: 4,
    question: "What should be included in a campaign review process for ethical AI marketing?",
    options: [
      "Only checking the budget",
      "Pre-launch ethics assessment, monitoring during campaign, and post-campaign demographic analysis",
      "Only reviewing final sales numbers",
      "Only checking creative assets"
    ],
    correctAnswer: 1,
    explanation: "An ethical campaign review process should include pre-launch ethics assessment of targeting, content, and personalization, monitoring for concerning patterns during the campaign, and post-campaign demographic delivery analysis and feedback review."
  },
  {
    id: "mkt-m4-3",
    chapterId: 4,
    question: "How can transparency about AI use become a competitive advantage?",
    options: [
      "It can't - transparency only costs money",
      "By building customer trust, differentiation, and avoiding regulatory penalties",
      "By confusing competitors",
      "By increasing ad prices"
    ],
    correctAnswer: 1,
    explanation: "Transparency about AI use can be a competitive advantage by building customer trust and loyalty, differentiating from competitors with opaque practices, and avoiding the regulatory penalties and reputational damage that come from hidden practices."
  }
];

export default marketingQuizzes;

