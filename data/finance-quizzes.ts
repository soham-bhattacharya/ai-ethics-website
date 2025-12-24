export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const financeQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "fin-intro-1",
    chapterId: 0,
    question: "What percentage of lenders use AI for credit scoring/underwriting as of 2025?",
    options: ["67%", "77%", "87%", "97%"],
    correctAnswer: 2,
    explanation: "87% of lenders use AI for credit scoring and underwriting, making it one of the most pervasive applications of AI in financial services."
  },
  {
    id: "fin-intro-2",
    chapterId: 0,
    question: "According to a 2024 Brookings study, how much more likely were Black applicants to be denied mortgages by AI systems compared to comparable white applicants?",
    options: ["20% more likely", "40% more likely", "60% more likely", "80% more likely"],
    correctAnswer: 3,
    explanation: "A 2024 Brookings study found Black applicants were 80% more likely to be denied mortgages by AI systems than comparable white applicants, even when controlling for income, debt, and credit history."
  },
  {
    id: "fin-intro-3",
    chapterId: 0,
    question: "Which regulation requires lenders to provide specific reasons when denying credit?",
    options: ["Fair Housing Act", "ECOA/Regulation B", "Bank Secrecy Act", "Dodd-Frank Act"],
    correctAnswer: 1,
    explanation: "ECOA (Equal Credit Opportunity Act) and its implementing Regulation B require lenders to provide specific reasons for adverse actions, creating the 'explainability' requirement for AI."
  },
  {
    id: "fin-intro-4",
    chapterId: 0,
    question: "What fundamental question should guide ethical financial AI evaluation?",
    options: [
      "Does it maximize profit?",
      "Does it reduce operational costs?",
      "Does it expand or contract access to credit for underserved populations?",
      "Does it match competitor offerings?"
    ],
    correctAnswer: 2,
    explanation: "The fundamental ethical question is whether AI expands access to credit for underserved populations or perpetuates historical exclusion—if the latter, it fails regardless of efficiency."
  },

  // Chapter 1: Fair Lending Laws - 5 questions
  {
    id: "fin-ch1-1",
    chapterId: 1,
    question: "Under ECOA, which type of discrimination occurs when AI produces different outcomes by protected class, even if unintentional?",
    options: ["Direct discrimination", "Disparate treatment", "Disparate impact", "Implicit discrimination"],
    correctAnswer: 2,
    explanation: "Disparate impact is a facially neutral practice that produces discriminatory effects. Even unintentional AI bias constitutes a violation if it has disparate impact without business necessity."
  },
  {
    id: "fin-ch1-2",
    chapterId: 1,
    question: "What did the CFPB's 2022 circular clarify about adverse action notices for AI decisions?",
    options: [
      "AI decisions don't require adverse action notices",
      "Creditors cannot use model complexity as an excuse for failing to provide specific and accurate reasons",
      "Generic reasons are acceptable for AI decisions",
      "Only denials require notices, not unfavorable terms"
    ],
    correctAnswer: 1,
    explanation: "The CFPB clarified that 'creditors cannot use the complexity of their models as an excuse for failing to provide specific and accurate reasons for adverse actions.'"
  },
  {
    id: "fin-ch1-3",
    chapterId: 1,
    question: "AVMs (Automated Valuation Models) have been found to systematically undervalue homes in majority-Black neighborhoods by what percentage range?",
    options: ["3-8%", "8-12%", "12-23%", "23-35%"],
    correctAnswer: 2,
    explanation: "AVMs have been found to systematically undervalue homes in majority-Black neighborhoods by 12-23%, creating a self-reinforcing cycle of reduced equity and borrowing capacity."
  },
  {
    id: "fin-ch1-4",
    chapterId: 1,
    question: "Which of the following is NOT a protected characteristic under ECOA?",
    options: ["Receipt of public assistance", "Marital status", "Political affiliation", "National origin"],
    correctAnswer: 2,
    explanation: "ECOA prohibits discrimination based on race, religion, national origin, sex, marital status, age, receipt of public assistance, and exercise of rights—but not political affiliation."
  },
  {
    id: "fin-ch1-5",
    chapterId: 1,
    question: "What is the consequence of using vendor AI that discriminates?",
    options: [
      "Only the vendor is liable",
      "The lender is fully liable as if it developed the AI itself",
      "Liability is shared 50/50",
      "No liability if vendor certified compliance"
    ],
    correctAnswer: 1,
    explanation: "Per EEOC/CFPB guidance, creditors remain liable for vendor AI systems. Using a vendor does not shield the lender from fair lending violations."
  },

  // Chapter 2: Bias Detection - 5 questions
  {
    id: "fin-ch2-1",
    chapterId: 2,
    question: "Which type of bias occurs when a model trained only on approved loans underperforms for applicants similar to those historically denied?",
    options: ["Historical bias", "Selection bias", "Label bias", "Deployment bias"],
    correctAnswer: 1,
    explanation: "Selection bias occurs when training data is non-representative—training only on approved loans means the model never learns patterns from denied (often minority) applicants."
  },
  {
    id: "fin-ch2-2",
    chapterId: 2,
    question: "Which variable is mentioned as a high proxy risk for race in lending models?",
    options: ["Credit score", "Zip code", "Debt-to-income ratio", "Loan amount"],
    correctAnswer: 1,
    explanation: "Zip codes are high proxy risk for race due to historical segregation and redlining patterns—they strongly correlate with race/ethnicity and can encode discrimination."
  },
  {
    id: "fin-ch2-3",
    chapterId: 2,
    question: "In matched pair analysis for bias detection, what is tested?",
    options: [
      "Whether AI matches human decisions",
      "Whether identical credit profiles with different protected characteristics receive different outcomes",
      "Whether the model matches historical patterns",
      "Whether different AI vendors produce the same results"
    ],
    correctAnswer: 1,
    explanation: "Matched pair analysis creates synthetic pairs with identical creditworthiness but different protected characteristics, comparing outcomes to detect discrimination."
  },
  {
    id: "fin-ch2-4",
    chapterId: 2,
    question: "What is 'optimization bias' in financial AI?",
    options: [
      "Bias toward efficient processing",
      "Bias in hyperparameter tuning",
      "Objective function that rewards disparate outcomes without fairness constraints",
      "Preference for simpler models"
    ],
    correctAnswer: 2,
    explanation: "Optimization bias occurs when the model's objective function (e.g., pure profit maximization) rewards disparate outcomes without incorporating fairness constraints."
  },
  {
    id: "fin-ch2-5",
    chapterId: 2,
    question: "What mitigation technique adds fairness objectives directly to the model training process?",
    options: [
      "Resampling",
      "Post-processing threshold adjustment",
      "In-processing fairness constraints",
      "Data suppression"
    ],
    correctAnswer: 2,
    explanation: "In-processing fairness constraints add fairness objectives to the optimization process during training, building fairness into the model rather than fixing outcomes afterward."
  },

  // Chapter 3: Explainability - 5 questions
  {
    id: "fin-ch3-1",
    chapterId: 3,
    question: "According to CFPB standards, which adverse action reason is UNACCEPTABLE?",
    options: [
      "'Credit history too short (less than 2 years)'",
      "'Debt-to-income ratio exceeds 43%'",
      "'Model score insufficient'",
      "'Recent delinquency on revolving accounts'"
    ],
    correctAnswer: 2,
    explanation: "'Model score insufficient' is unacceptable because it doesn't provide specific enough information for the consumer to understand or address the issue."
  },
  {
    id: "fin-ch3-2",
    chapterId: 3,
    question: "What does SHAP (SHapley Additive exPlanations) do for credit AI?",
    options: [
      "Encrypts sensitive data",
      "Allocates prediction to each feature to explain individual decisions",
      "Removes protected characteristics",
      "Validates model accuracy"
    ],
    correctAnswer: 1,
    explanation: "SHAP allocates the model's prediction to each feature based on game-theoretic principles, enabling generation of specific, accurate adverse action reasons from complex models."
  },
  {
    id: "fin-ch3-3",
    chapterId: 3,
    question: "What type of model offers the highest interpretability for credit decisions?",
    options: ["Neural networks", "Random forests", "Logistic regression / Decision trees", "Gradient boosting"],
    correctAnswer: 2,
    explanation: "Logistic regression (clear coefficients) and decision trees (if-then rules) offer high interpretability, allowing direct explanation of decisions without post-hoc techniques."
  },
  {
    id: "fin-ch3-4",
    chapterId: 3,
    question: "What is a 'counterfactual explanation' in credit AI?",
    options: [
      "Explanation of what would have happened without AI",
      "Explanation of what would need to change for approval",
      "Historical comparison of similar applicants",
      "Alternative model predictions"
    ],
    correctAnswer: 1,
    explanation: "Counterfactual explanations tell the applicant what would need to change for approval (e.g., 'score of 700+ OR income of $60,000+'), providing actionable guidance."
  },
  {
    id: "fin-ch3-5",
    chapterId: 3,
    question: "What should be documented to prepare for regulatory examination of AI adverse action notices?",
    options: [
      "Only the final notices sent",
      "Reason code methodology, feature mapping, accuracy testing, sample notices, and complaint analysis",
      "Just the model documentation",
      "Vendor certifications only"
    ],
    correctAnswer: 1,
    explanation: "Complete documentation should include reason code methodology, feature-to-reason mapping, accuracy testing results, sample notices, and consumer complaint analysis."
  },

  // Chapter 4: Governance - 5 questions
  {
    id: "fin-ch4-1",
    chapterId: 4,
    question: "What regulatory guidance establishes model risk management requirements for banks?",
    options: ["Regulation B", "SR 11-7 / OCC 2011-12", "FDIC Guidelines", "Basel III"],
    correctAnswer: 1,
    explanation: "SR 11-7 (Federal Reserve) and OCC 2011-12 establish model risk management requirements including validation, monitoring, inventory, governance, and documentation."
  },
  {
    id: "fin-ch4-2",
    chapterId: 4,
    question: "In the Three Lines of Defense model, who is responsible for independent testing of AI models?",
    options: ["First line (business units)", "Second line (risk management)", "Third line (internal audit)", "External auditors only"],
    correctAnswer: 2,
    explanation: "The Third Line of Defense (internal audit) provides independent testing, while First Line (business) owns usage/monitoring and Second Line (risk) handles validation/policy."
  },
  {
    id: "fin-ch4-3",
    chapterId: 4,
    question: "At what phase of the model lifecycle should fair lending testing occur?",
    options: [
      "Only during development",
      "Only before initial deployment",
      "During validation AND as ongoing monitoring",
      "Only when issues are reported"
    ],
    correctAnswer: 2,
    explanation: "Fair lending testing should occur during validation before deployment AND continue as ongoing monitoring (quarterly minimum for fair lending, monthly for performance)."
  },
  {
    id: "fin-ch4-4",
    chapterId: 4,
    question: "What emerging AI application raises concerns about unfair pricing for vulnerable consumers?",
    options: [
      "Fraud detection",
      "Algorithmic/personalized pricing",
      "Document processing",
      "Account verification"
    ],
    correctAnswer: 1,
    explanation: "Algorithmic pricing that personalizes rates or fees based on AI predictions raises concerns about unfair treatment of vulnerable consumers and potential discrimination."
  },
  {
    id: "fin-ch4-5",
    chapterId: 4,
    question: "What is the recommended first step in a 90-day financial AI governance quick start?",
    options: [
      "Hire a Chief AI Officer",
      "Deploy bias monitoring tools",
      "Complete AI model inventory and risk tiering",
      "Conduct external audit"
    ],
    correctAnswer: 2,
    explanation: "The first step (weeks 1-4) is completing a comprehensive AI model inventory and risk tiering before validation, monitoring, or governance activities can be properly prioritized."
  }
];

export default financeQuizzes;

