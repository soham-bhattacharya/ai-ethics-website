export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const hrQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "hr-intro-1",
    chapterId: 0,
    question: "What percentage of large employers use AI for resume screening as of 2025?",
    options: ["45%", "55%", "65%", "75%"],
    correctAnswer: 3,
    explanation: "75% of large employers use AI for resume screening, making it one of the most widespread HR AI applications."
  },
  {
    id: "hr-intro-2",
    chapterId: 0,
    question: "According to survey data, what percentage of job seekers are concerned about AI bias in hiring?",
    options: ["47%", "57%", "67%", "77%"],
    correctAnswer: 2,
    explanation: "67% of job seekers are concerned about AI bias in hiring, indicating significant public awareness and concern about employment AI."
  },
  {
    id: "hr-intro-3",
    chapterId: 0,
    question: "What does AEDT stand for in employment AI regulation?",
    options: [
      "Automated Employee Decision Tracking",
      "Automated Employment Decision Tool",
      "Algorithmic Evaluation and Decision Technology",
      "Advanced Employment Data Testing"
    ],
    correctAnswer: 1,
    explanation: "AEDT (Automated Employment Decision Tool) refers to computational processes derived from ML, statistical modeling, or AI used to substantially assist or replace discretionary employment decision-making."
  },
  {
    id: "hr-intro-4",
    chapterId: 0,
    question: "What percentage of employees believe humans should make final termination decisions?",
    options: ["61%", "71%", "81%", "91%"],
    correctAnswer: 2,
    explanation: "81% of employees believe humans should make final termination decisions, emphasizing the need for human oversight in high-stakes employment decisions."
  },

  // Chapter 1: AEDT Compliance - 5 questions
  {
    id: "hr-ch1-1",
    chapterId: 1,
    question: "Under NYC Local Law 144, how many business days before AEDT use must candidates be notified?",
    options: ["5 days", "7 days", "10 days", "14 days"],
    correctAnswer: 2,
    explanation: "NYC requires employers to notify candidates at least 10 business days before using an AEDT, including notice of qualifications assessed and data retention."
  },
  {
    id: "hr-ch1-2",
    chapterId: 1,
    question: "What is the 'four-fifths rule' in disparate impact analysis?",
    options: [
      "Four out of five hiring decisions must use AI",
      "A selection rate for any group less than 80% of the highest group indicates potential adverse impact",
      "At least 80% of candidates must be interviewed",
      "AI must agree with human decisions 80% of the time"
    ],
    correctAnswer: 1,
    explanation: "The four-fifths (80%) rule states that a selection rate for any protected group that is less than 80% of the rate for the group with the highest rate is generally evidence of adverse impact."
  },
  {
    id: "hr-ch1-3",
    chapterId: 1,
    question: "What unique prohibition does Illinois HB 3773 contain regarding AI inputs?",
    options: [
      "Ban on using education data",
      "Ban on using work history",
      "Ban on using zip codes as a proxy for protected classes",
      "Ban on using social media"
    ],
    correctAnswer: 2,
    explanation: "Illinois HB 3773 explicitly bans using zip codes as a factor in AI employment decisions if it results in discrimination, recognizing zip codes' correlation with race due to historical segregation."
  },
  {
    id: "hr-ch1-4",
    chapterId: 1,
    question: "Under the Colorado AI Act, how is AI used in hiring decisions classified?",
    options: [
      "Low-risk by default",
      "Medium-risk requiring notification",
      "Automatically high-risk requiring annual impact assessments",
      "Not regulated"
    ],
    correctAnswer: 2,
    explanation: "Colorado automatically classifies AI used in hiring decisions as high-risk, requiring annual impact assessments, reasonable care to prevent discrimination, and consumer notification."
  },
  {
    id: "hr-ch1-5",
    chapterId: 1,
    question: "What is the NYC Local Law 144 penalty structure for violations?",
    options: [
      "$100 per violation",
      "$500 first violation, $500-$1,500 subsequent violations",
      "$1,000 flat rate per violation",
      "$5,000 per violation"
    ],
    correctAnswer: 1,
    explanation: "NYC imposes $500 for first violation and $500-$1,500 for subsequent violations, with each day of non-compliance and each individual denied proper notice counting as separate violations."
  },

  // Chapter 2: Bias Audits - 5 questions
  {
    id: "hr-ch2-1",
    chapterId: 2,
    question: "Which type of bias occurs when training data reflects past discrimination?",
    options: ["Selection bias", "Historical bias", "Measurement bias", "Deployment bias"],
    correctAnswer: 1,
    explanation: "Historical bias occurs when training data reflects past discrimination, such as models trained on successful hires when the company was less diverse."
  },
  {
    id: "hr-ch2-2",
    chapterId: 2,
    question: "What impact ratio threshold generally indicates potential disparate impact requiring investigation?",
    options: ["< 0.5", "< 0.6", "< 0.8", "< 0.9"],
    correctAnswer: 2,
    explanation: "An impact ratio below 0.8 (the four-fifths rule) is flagged for investigation, with ratios below 0.6 indicating significant disparity requiring immediate review."
  },
  {
    id: "hr-ch2-3",
    chapterId: 2,
    question: "What is matched pair analysis used for in bias testing?",
    options: [
      "Comparing AI vendors",
      "Testing for discrimination by comparing outcomes for identical profiles with different protected characteristics",
      "Matching job descriptions to resumes",
      "Pairing managers with candidates"
    ],
    correctAnswer: 1,
    explanation: "Matched pair analysis creates synthetic pairs with identical qualifications but different protected characteristics, submitting them to the AI to detect discriminatory patterns."
  },
  {
    id: "hr-ch2-4",
    chapterId: 2,
    question: "Which tool is mentioned as a free option for bias detection in hiring AI?",
    options: ["TensorFlow", "IBM AIF360", "Google Analytics", "Tableau"],
    correctAnswer: 1,
    explanation: "IBM AIF360 is mentioned as a free tool for bias detection that can calculate disparate impact ratios and other fairness metrics."
  },
  {
    id: "hr-ch2-5",
    chapterId: 2,
    question: "What is 'proxy discrimination' in AI systems?",
    options: [
      "Using a third party to make decisions",
      "Using features correlated with protected class instead of the characteristic directly",
      "Delegating decisions to vendors",
      "Using outdated algorithms"
    ],
    correctAnswer: 1,
    explanation: "Proxy discrimination occurs when AI uses features correlated with protected characteristics (like zip codes correlating with race) to make decisions, producing discriminatory outcomes indirectly."
  },

  // Chapter 3: Human Oversight - 4 questions
  {
    id: "hr-ch3-1",
    chapterId: 3,
    question: "What level of automation is recommended for final hiring decisions?",
    options: [
      "Full automation",
      "Human-on-the-loop",
      "Human-in-the-loop",
      "Human-in-command"
    ],
    correctAnswer: 3,
    explanation: "Final hiring decisions are high-stakes and should use human-in-command automation, where the human decides and AI only informs."
  },
  {
    id: "hr-ch3-2",
    chapterId: 3,
    question: "What constitutes 'meaningful human review' according to best practices?",
    options: [
      "Clicking 'approve' on AI recommendations",
      "Access to AI reasoning plus candidate materials, adequate time, full override authority, and training on AI limitations",
      "Reviewing only candidates above a certain score",
      "Spot-checking 10% of decisions"
    ],
    correctAnswer: 1,
    explanation: "Meaningful review requires seeing AI reasoning AND candidate materials, adequate evaluation time, full override authority, training on AI limitations, and human ownership of the final decision."
  },
  {
    id: "hr-ch3-3",
    chapterId: 3,
    question: "What should happen when a candidate requests an alternative to AI-based selection?",
    options: [
      "Deny the request",
      "Offer a fully human review process or different assessment method",
      "Remove them from consideration",
      "Only proceed if the candidate provides a reason"
    ],
    correctAnswer: 1,
    explanation: "Colorado requires offering an alternative when AI is used for significant decisions—either fully human review on request, a different assessment method, or bypassing automated screening."
  },
  {
    id: "hr-ch3-4",
    chapterId: 3,
    question: "According to the track, what role should AI play in termination decisions?",
    options: [
      "Primary decision-maker",
      "Equal weight with manager opinion",
      "Support and compile data, never primary basis",
      "No role whatsoever"
    ],
    correctAnswer: 2,
    explanation: "AI should NEVER be the primary basis for termination. Its appropriate role is to compile relevant data and flag patterns for review, with manager + HR review and employee opportunity to respond."
  },

  // Chapter 4: Implementation - 4 questions
  {
    id: "hr-ch4-1",
    chapterId: 4,
    question: "What is the typical cost range for a third-party AEDT bias audit?",
    options: [
      "$500 - $2,000",
      "$2,000 - $5,000",
      "$5,000 - $25,000",
      "$25,000 - $100,000"
    ],
    correctAnswer: 2,
    explanation: "Third-party bias audits typically cost $5,000 - $25,000 depending on complexity, with NYC requiring an independent auditor for formal compliance."
  },
  {
    id: "hr-ch4-2",
    chapterId: 4,
    question: "How long should documentation of AI-influenced hiring decisions be retained?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    correctAnswer: 2,
    explanation: "AI recommendations, human decisions, override reasons, and candidate notice confirmations should be retained for 3 years, with audit reports kept for 7 years."
  },
  {
    id: "hr-ch4-3",
    chapterId: 4,
    question: "When evaluating a new HR AI vendor, what should you require regarding zip codes?",
    options: [
      "Zip code is an acceptable input",
      "Vendor must certify zip code is NOT used as an input",
      "Zip code should only be used for location matching",
      "No requirements regarding zip codes"
    ],
    correctAnswer: 1,
    explanation: "Due to Illinois HB 3773 and proxy discrimination risks, vendors should certify that zip codes are not used as AI inputs, as zip codes correlate with protected characteristics."
  },
  {
    id: "hr-ch4-4",
    chapterId: 4,
    question: "What emerging HR AI issue involves algorithms recommending treatments based on genetic data?",
    options: [
      "Ambient clinical intelligence",
      "AI-driven precision medicine",
      "Affective computing",
      "Generative AI documentation"
    ],
    correctAnswer: 1,
    explanation: "While this is more healthcare-focused, AI-driven precision medicine raises equity concerns for underrepresented populations in genetic databases, relevant for health-related employment decisions."
  }
];

export default hrQuizzes;

