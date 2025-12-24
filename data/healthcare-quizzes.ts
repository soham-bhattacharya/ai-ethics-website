export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const healthcareQuizzes: QuizQuestion[] = [
  // Introduction - 5 questions
  {
    id: "health-intro-1",
    chapterId: 0,
    question: "What percentage of hospitals use diagnostic imaging AI as of 2025?",
    options: ["45%", "57%", "67%", "82%"],
    correctAnswer: 2,
    explanation: "67% of hospitals use diagnostic imaging AI for radiology, pathology, and dermatology applications, making it one of the most widely adopted healthcare AI applications."
  },
  {
    id: "health-intro-2",
    chapterId: 0,
    question: "According to 2025 survey data, what percentage of patients want to know when AI is involved in their care?",
    options: ["67%", "76%", "89%", "94%"],
    correctAnswer: 2,
    explanation: "89% of patients want to know when AI is involved in their care, indicating strong demand for transparency in healthcare AI use."
  },
  {
    id: "health-intro-3",
    chapterId: 0,
    question: "Which principle from the traditional medical ethics framework emphasizes that AI 'must not cause harm'?",
    options: ["Beneficence", "Non-maleficence", "Autonomy", "Justice"],
    correctAnswer: 1,
    explanation: "Non-maleficence ('first, do no harm') is the principle that AI systems must not cause harm, extending the Hippocratic tradition to algorithmic systems."
  },
  {
    id: "health-intro-4",
    chapterId: 0,
    question: "AI diagnostic tools have been found to show what level of lower accuracy for patients with darker skin tones?",
    options: ["5-10%", "10-15%", "15-20%", "20-25%"],
    correctAnswer: 2,
    explanation: "AI diagnostic tools, particularly in dermatology, show 15-20% lower accuracy for patients with darker skin tones, highlighting a significant health equity concern."
  },
  {
    id: "health-intro-5",
    chapterId: 0,
    question: "What percentage of patients believe doctors should have final say over AI recommendations?",
    options: ["67%", "74%", "81%", "89%"],
    correctAnswer: 2,
    explanation: "81% of patients believe doctors should have final say over AI recommendations, emphasizing the importance of human oversight in clinical decisions."
  },

  // Chapter 1: HIPAA - 5 questions
  {
    id: "health-ch1-1",
    chapterId: 1,
    question: "How many specific identifiers must be removed under HIPAA's Safe Harbor de-identification method?",
    options: ["12", "15", "18", "21"],
    correctAnswer: 2,
    explanation: "The Safe Harbor method requires removing 18 specific identifiers, including names, geographic data smaller than state, dates (except year) for ages >89, and various identification numbers."
  },
  {
    id: "health-ch1-2",
    chapterId: 1,
    question: "What is required before sharing PHI with an AI vendor?",
    options: [
      "Just verbal approval",
      "A signed Business Associate Agreement (BAA)",
      "Email confirmation",
      "No specific requirement"
    ],
    correctAnswer: 1,
    explanation: "Any AI vendor processing PHI is a Business Associate and requires a signed BAA before receiving data, covering AI-specific uses, breach notification, and data handling."
  },
  {
    id: "health-ch1-3",
    chapterId: 1,
    question: "Which of the following consumer AI services is generally NOT HIPAA-eligible by default?",
    options: ["AWS HealthLake", "Google Cloud Healthcare API", "OpenAI API", "Azure Health Bot"],
    correctAnswer: 2,
    explanation: "OpenAI API (like ChatGPT) is not HIPAA-eligible by default. Using consumer AI tools with PHI violates HIPAA unless a specific BAA is in place."
  },
  {
    id: "health-ch1-4",
    chapterId: 1,
    question: "What HIPAA principle requires limiting PHI access to the minimum necessary for the intended purpose?",
    options: ["Privacy Rule", "Security Rule", "Minimum Necessary Standard", "Breach Notification Rule"],
    correctAnswer: 2,
    explanation: "The Minimum Necessary Standard requires limiting PHI access to what's essential for the intended purpose, applying to AI training data and model inputs."
  },
  {
    id: "health-ch1-5",
    chapterId: 1,
    question: "According to a 2024 study, what percentage of de-identified medical records could be re-identified when combined with public data?",
    options: ["8%", "15%", "23%", "34%"],
    correctAnswer: 2,
    explanation: "A 2024 study found that 23% of de-identified medical records could be re-identified through AI pattern matching combined with publicly available data."
  },

  // Chapter 2: FDA - 5 questions
  {
    id: "health-ch2-1",
    chapterId: 2,
    question: "What does SaMD stand for in FDA regulation?",
    options: [
      "Standardized Medical Devices",
      "Software as a Medical Device",
      "Systematic Medical Diagnostics",
      "Supervised Algorithm for Medicine and Diagnosis"
    ],
    correctAnswer: 1,
    explanation: "SaMD (Software as a Medical Device) refers to software intended to be used for medical purposes without being part of a hardware device."
  },
  {
    id: "health-ch2-2",
    chapterId: 2,
    question: "Under what conditions is Clinical Decision Support (CDS) software exempt from FDA regulation?",
    options: [
      "When it's free to use",
      "When healthcare professionals independently review the basis for recommendations and aren't expected to rely primarily on the AI",
      "When it only displays medical information",
      "When it's used in outpatient settings only"
    ],
    correctAnswer: 1,
    explanation: "CDS is exempt when: it displays/analyzes information, supports healthcare professionals, allows independent review of the basis, and professionals aren't expected to rely primarily on it."
  },
  {
    id: "health-ch2-3",
    chapterId: 2,
    question: "What is the standard FDA review timeline for a 510(k) premarket notification?",
    options: ["30 days", "60 days", "90 days", "180 days"],
    correctAnswer: 2,
    explanation: "The 510(k) pathway has a 90-day FDA review period, though in practice it often takes 3-6 months when questions arise."
  },
  {
    id: "health-ch2-4",
    chapterId: 2,
    question: "What does a Predetermined Change Control Plan (PCCP) allow for AI medical devices?",
    options: [
      "Complete redesign without approval",
      "Pre-approved modifications and updates within defined protocols without new 510(k)",
      "Unlimited changes to training data",
      "Removal of human oversight"
    ],
    correctAnswer: 1,
    explanation: "PCCPs allow AI devices that learn and adapt over time to make pre-specified modifications within approved protocols without requiring a new 510(k) for each update."
  },
  {
    id: "health-ch2-5",
    chapterId: 2,
    question: "What AI-specific transparency does FDA guidance recommend including in device labeling?",
    options: [
      "Source code",
      "Complete training dataset",
      "Training data description, known performance differences by subgroups, and update history",
      "Competitor comparisons"
    ],
    correctAnswer: 2,
    explanation: "FDA guidance recommends AI devices include training data demographics, known performance differences across population subgroups, and update history."
  },

  // Chapter 3: Claims AI - 5 questions
  {
    id: "health-ch3-1",
    chapterId: 3,
    question: "What does Arizona HB 2175 require when AI flags a claim for denial?",
    options: [
      "Automatic denial is permitted",
      "Review by any employee",
      "Review by a licensed medical professional",
      "Appeal must be offered within 48 hours"
    ],
    correctAnswer: 2,
    explanation: "Arizona HB 2175 mandates that a licensed medical professional must review any AI-flagged denial, with individual case analysis and exercise of medical judgment."
  },
  {
    id: "health-ch3-2",
    chapterId: 3,
    question: "According to allegations in the UnitedHealth lawsuit, what was the accuracy rate of the naviHealth AI in predicting patient recovery?",
    options: ["About 10%", "About 30%", "About 50%", "About 70%"],
    correctAnswer: 0,
    explanation: "The lawsuit alleged the naviHealth AI was accurate only 10% of the time in predicting patient recovery, yet was used to terminate coverage."
  },
  {
    id: "health-ch3-3",
    chapterId: 3,
    question: "What documentation is required for each AI-influenced denial under Arizona HB 2175?",
    options: [
      "Just the AI recommendation",
      "AI system used, licensed reviewer name/credentials, case-specific factors, clinical rationale, and date/time",
      "Patient consent form",
      "Cost-benefit analysis"
    ],
    correctAnswer: 1,
    explanation: "Documentation must include: AI system and recommendation, licensed reviewer name/credentials, individual case factors, clinical rationale, and date/time of human review."
  },
  {
    id: "health-ch3-4",
    chapterId: 3,
    question: "Which of the following is a prohibited practice under ethical claims AI principles?",
    options: [
      "Using AI for initial claim screening",
      "Using AI to meet denial quotas",
      "Displaying AI recommendations to human reviewers",
      "Logging AI recommendations for audit purposes"
    ],
    correctAnswer: 1,
    explanation: "Using AI to meet denial quotas is explicitly prohibited, as are applying AI recommendations without individual review and hiding AI involvement from patients/providers."
  },
  {
    id: "health-ch3-5",
    chapterId: 3,
    question: "Which federal agency is examining AI discrimination in coverage decisions?",
    options: ["FDA", "CMS", "HHS OCR", "CDC"],
    correctAnswer: 2,
    explanation: "HHS Office for Civil Rights (OCR) is examining AI discrimination in coverage decisions, alongside CFPB investigating deceptive AI claims practices."
  },

  // Chapter 4: CDS Ethics - 5 questions
  {
    id: "health-ch4-1",
    chapterId: 4,
    question: "What is the typical alert override rate in clinical decision support systems?",
    options: ["10-25%", "25-49%", "49-96%", "96-99%"],
    correctAnswer: 2,
    explanation: "Alert override rates typically range from 49-96%, with about 80% of overrides being appropriate, demonstrating the alert fatigue problem in CDS."
  },
  {
    id: "health-ch4-2",
    chapterId: 4,
    question: "According to ethical CDS design principles, what level of automation is appropriate for final cancer diagnosis?",
    options: [
      "Full automation",
      "Human-on-the-loop",
      "Human-in-the-loop (AI presents findings, human diagnoses)",
      "AI decides, human communicates"
    ],
    correctAnswer: 2,
    explanation: "For cancer diagnosis, AI should present findings while the human clinician makes the final diagnosis and communicates with the patient—a human-in-the-loop approach."
  },
  {
    id: "health-ch4-3",
    chapterId: 4,
    question: "What is an example of a 'good' CDS alert according to the design principles?",
    options: [
      "'AKI risk. Action required.'",
      "'High risk of AKI (score: 0.78). Contributing factors: creatinine trend, NSAIDs, age. Consider: hold NSAIDs.'",
      "'Alert: Check kidney function.'",
      "'System notification: Review patient.'"
    ],
    correctAnswer: 1,
    explanation: "A good alert provides the risk level, contributing factors, patient-specific context, and actionable recommendations with options to see evidence or override."
  },
  {
    id: "health-ch4-4",
    chapterId: 4,
    question: "What red flag should be monitored in CDS bias monitoring?",
    options: [
      "High usage rates",
      "Fast response times",
      "Higher false positive rates for certain populations",
      "Frequent system updates"
    ],
    correctAnswer: 2,
    explanation: "Higher false positive rates for certain populations, lower sensitivity for underrepresented groups, and different clinician response patterns by patient demographics are bias red flags."
  },
  {
    id: "health-ch4-5",
    chapterId: 4,
    question: "What should patient-facing AI always provide according to ethical requirements?",
    options: [
      "Medical diagnosis",
      "Prescription recommendations",
      "Clear disclosure, limitations, easy escalation to human, and emergency handling",
      "Insurance billing codes"
    ],
    correctAnswer: 2,
    explanation: "Patient-facing AI must provide clear disclosure of AI involvement, its limitations, easy path to human assistance, appropriate emergency handling, and clear privacy explanation."
  }
];

export default healthcareQuizzes;

