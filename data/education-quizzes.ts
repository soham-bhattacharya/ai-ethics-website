export interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const educationQuizzes: QuizQuestion[] = [
  // Introduction - 4 questions
  {
    id: "edu-intro-1",
    chapterId: 0,
    question: "What is the foundational federal law protecting student privacy in the United States?",
    options: [
      "COPPA",
      "FERPA (Family Educational Rights and Privacy Act)",
      "HIPAA",
      "CCPA"
    ],
    correctAnswer: 1,
    explanation: "FERPA (Family Educational Rights and Privacy Act) is the foundational federal law that requires consent for disclosure of student records, gives parents and eligible students access rights, and limits how educational records can be used."
  },
  {
    id: "edu-intro-2",
    chapterId: 0,
    question: "Why is student data particularly sensitive?",
    options: [
      "It's not more sensitive than other data",
      "Students are often minors, data follows them for years, and records affect life opportunities",
      "Only because of cost concerns",
      "Only because parents request it"
    ],
    correctAnswer: 1,
    explanation: "Student data is particularly sensitive because students are often minors, educational data can follow students for years, records affect life opportunities like college admissions and employment, and there's a power imbalance between institutions and students."
  },
  {
    id: "edu-intro-3",
    chapterId: 0,
    question: "What is California SOPIPA's main focus?",
    options: [
      "Increasing AI in education",
      "Prohibiting targeted advertising to students and restricting non-educational profiling",
      "Requiring more data collection",
      "Setting graduation standards"
    ],
    correctAnswer: 1,
    explanation: "California's Student Online Personal Information Protection Act (SOPIPA) prohibits targeted advertising to students based on their data, restricts building profiles for non-educational purposes, and requires reasonable security."
  },
  {
    id: "edu-intro-4",
    chapterId: 0,
    question: "What fundamental educational value does generative AI challenge?",
    options: [
      "Class attendance",
      "The concept of 'original work' when AI can write essays and solve problems",
      "Physical textbooks",
      "Teacher-student ratios"
    ],
    correctAnswer: 1,
    explanation: "Generative AI challenges the concept of 'original work' since AI can write essays and solve problems, raising questions about how to assess learning versus AI capability and when AI assistance crosses into academic dishonesty."
  },

  // Module 1: Student Data Privacy - 4 questions
  {
    id: "edu-m1-1",
    chapterId: 1,
    question: "Under FERPA, when can a third-party vendor access student data as a 'school official'?",
    options: [
      "Whenever they want",
      "When they perform a service the school would otherwise perform, are under school control, and use data only for authorized purposes",
      "Only with written parent consent for every access",
      "Only for marketing purposes"
    ],
    correctAnswer: 1,
    explanation: "Under the 'school official' exception, third-party vendors can access data when they perform a service the school would otherwise perform, are under direct control of the school, use data only for authorized purposes, and maintain data appropriately."
  },
  {
    id: "edu-m1-2",
    chapterId: 1,
    question: "What question should schools ask AI vendors about data use?",
    options: [
      "Only how fast the system is",
      "How data is used for AI training and who has access",
      "Only the subscription price",
      "Only the user interface design"
    ],
    correctAnswer: 1,
    explanation: "When evaluating AI educational tools, schools should ask what specific data is collected, how data is used for AI training and improvement, who has access, how long data is retained, and what happens to data if the contract ends."
  },
  {
    id: "edu-m1-3",
    chapterId: 1,
    question: "What does 'data minimization' mean in educational AI?",
    options: [
      "Deleting all student data",
      "Collecting only what's necessary and deleting data when no longer needed",
      "Minimizing data storage costs",
      "Using smaller databases"
    ],
    correctAnswer: 1,
    explanation: "Data minimization means auditing what data AI tools actually need, negotiating with vendors for minimal collection, deleting data when no longer needed, and considering aggregated or anonymized alternatives."
  },
  {
    id: "edu-m1-4",
    chapterId: 1,
    question: "What requirement does New York Education Law 2-d add beyond FERPA?",
    options: [
      "Mandatory AI use in all classes",
      "Data privacy agreements and parent notification requirements",
      "Prohibition of all technology",
      "Weekly data reports to parents"
    ],
    correctAnswer: 1,
    explanation: "New York Education Law 2-d adds requirements including mandatory data privacy agreements with vendors, parent notification about data practices, and specific security requirements beyond basic FERPA protections."
  },

  // Module 2: Adaptive Learning - 4 questions
  {
    id: "edu-m2-1",
    chapterId: 2,
    question: "What is the 'labeling problem' in adaptive learning?",
    options: [
      "Difficulty naming products",
      "Student models creating categories that can become self-fulfilling and limiting",
      "Issues with product packaging",
      "Problems with classroom signage"
    ],
    correctAnswer: 1,
    explanation: "The labeling problem occurs when adaptive systems create student categories (like 'struggling reader') that can become self-fulfilling prophecies, with algorithms restricting access to advanced content based on early assessments."
  },
  {
    id: "edu-m2-2",
    chapterId: 2,
    question: "Why might adaptive learning systems show bias?",
    options: [
      "They are designed to be biased",
      "Training data may underrepresent some populations, and content may favor dominant cultures",
      "Teachers input biased data",
      "Students are inherently biased"
    ],
    correctAnswer: 1,
    explanation: "Adaptive systems can show bias because training data may not represent all student populations, content and approaches may favor dominant cultures, they may not work well for all learning styles, and language bias may affect non-native speakers."
  },
  {
    id: "edu-m2-3",
    chapterId: 2,
    question: "What is the 'engagement trap' in adaptive learning?",
    options: [
      "Students becoming too engaged",
      "Optimizing for engagement may prioritize easy content over challenging growth",
      "Teachers being distracted",
      "Too many notifications"
    ],
    correctAnswer: 1,
    explanation: "The engagement trap occurs when adaptive systems optimize for engagement metrics, which may lead to showing easy content that keeps students clicking rather than challenging content that promotes growth and learning."
  },
  {
    id: "edu-m2-4",
    chapterId: 2,
    question: "What transparency should ethical adaptive learning systems provide?",
    options: [
      "No transparency is needed",
      "Clear explanation of how the system works, visibility into student models, and ability to override",
      "Only technical documentation",
      "Only teacher access"
    ],
    correctAnswer: 1,
    explanation: "Ethical adaptive learning systems should provide clear explanations of how they work, visibility into student models and labels, rationale for recommendations, and the ability for teachers and students to override recommendations."
  },

  // Module 3: Academic Integrity - 4 questions
  {
    id: "edu-m3-1",
    chapterId: 3,
    question: "What is a major limitation of AI detection tools for academic integrity?",
    options: [
      "They are too expensive",
      "High false positive rates and easy circumvention make them unreliable for high-stakes decisions",
      "They work too well",
      "They only work on mobile devices"
    ],
    correctAnswer: 1,
    explanation: "AI detection tools have significant limitations including high false positive rates (flagging human work as AI), are easily circumvented with paraphrasing, and their accuracy varies by writing style and language, making them unreliable for high-stakes decisions."
  },
  {
    id: "edu-m3-2",
    chapterId: 3,
    question: "What is a 'process-focused' approach to assessment in the age of generative AI?",
    options: [
      "Only grading final products",
      "Requiring drafts, in-class components, oral explanations, and assessment of learning development",
      "Eliminating all assessment",
      "Only using multiple choice tests"
    ],
    correctAnswer: 1,
    explanation: "Process-focused assessment shifts focus to the learning process by requiring drafts showing development, including in-class components, asking students to explain their work, using oral examinations, and assessing metacognition about learning."
  },
  {
    id: "edu-m3-3",
    chapterId: 3,
    question: "What should each assignment specify regarding AI use?",
    options: [
      "Nothing - assume students know",
      "Whether AI is allowed, what types are permitted, disclosure requirements, and learning objectives",
      "Only the due date",
      "Only the grading rubric"
    ],
    correctAnswer: 1,
    explanation: "Each assignment should clearly specify whether AI use is allowed, what types of AI use are permitted, what must be disclosed, how AI assistance should be cited, and what the learning objectives are."
  },
  {
    id: "edu-m3-4",
    chapterId: 3,
    question: "What is 'AI literacy' in the educational context?",
    options: [
      "Learning to code AI systems",
      "Teaching students how AI works, when its use is appropriate, and how to evaluate outputs critically",
      "Reading AI-generated content",
      "Memorizing AI company names"
    ],
    correctAnswer: 1,
    explanation: "AI literacy involves teaching students how generative AI works and its limitations, when AI use is appropriate and when it isn't, how to evaluate AI outputs critically, and their responsibility for AI-generated content."
  },

  // Module 4: Implementation - 4 questions
  {
    id: "edu-m4-1",
    chapterId: 4,
    question: "Who should be involved in developing institutional AI policies?",
    options: [
      "Only the IT department",
      "Faculty, students, IT, legal, academic integrity committees, and other stakeholders",
      "Only external consultants",
      "Only administrators"
    ],
    correctAnswer: 1,
    explanation: "AI policy development should involve cross-functional participation including faculty governance, student representatives, IT and data governance, academic integrity committees, legal and compliance, and curriculum planning."
  },
  {
    id: "edu-m4-2",
    chapterId: 4,
    question: "What should an AI tool assessment rubric include for educational tools?",
    options: [
      "Only the price",
      "Privacy, fairness, transparency, efficacy evidence, control options, and compliance",
      "Only user ratings",
      "Only technical specifications"
    ],
    correctAnswer: 1,
    explanation: "An AI tool assessment rubric should evaluate privacy (what data is collected and how used), fairness (bias testing and effectiveness for all students), transparency, efficacy evidence, educator/student control options, and FERPA/state law compliance."
  },
  {
    id: "edu-m4-3",
    chapterId: 4,
    question: "What is a key difference in AI ethics considerations between K-12 and higher education?",
    options: [
      "There are no differences",
      "K-12 requires more parental consent and age-appropriate policies; higher ed considers academic freedom",
      "Higher education has stricter rules",
      "K-12 doesn't use AI"
    ],
    correctAnswer: 1,
    explanation: "K-12 has specific requirements for parental consent and notification, age-appropriate AI use policies, and special education considerations, while higher education must balance AI governance with academic freedom and distinguish between graduate and undergraduate needs."
  },
  {
    id: "edu-m4-4",
    chapterId: 4,
    question: "How should AI policies be communicated to students?",
    options: [
      "Only in the student handbook",
      "Through orientation, syllabi, library resources, ongoing education, and peer programs",
      "Only through email once",
      "Only if students ask"
    ],
    correctAnswer: 1,
    explanation: "AI policies should be communicated through multiple channels including orientation sessions, course syllabi, library resources on AI literacy, ongoing education integrated into courses, and peer education opportunities."
  }
];

export default educationQuizzes;

