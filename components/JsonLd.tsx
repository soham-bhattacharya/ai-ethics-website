const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-ethics-website.vercel.app";

export function WebsiteJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Ethics Playbook",
    description: "Comprehensive AI ethics resource for businesses and professionals",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/virtual-ta?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Ethics Playbook",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Educational resource providing AI ethics guidance for businesses, government workers, healthcare professionals, and HR teams.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function CourseJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Ethics Playbook for Businesses",
    description: "A comprehensive, free course on AI ethics covering bias prevention, compliance, governance, and practical implementation strategies.",
    provider: {
      "@type": "Organization",
      name: "AI Ethics Playbook",
      url: siteUrl,
    },
    educationalLevel: "Beginner to Intermediate",
    isAccessibleForFree: true,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT45M",
    },
    teaches: [
      "AI Ethics Principles",
      "Bias Detection and Prevention",
      "AI Compliance and Governance",
      "Risk Assessment Frameworks",
      "Practical AI Implementation",
    ],
    numberOfCredits: 0,
    occupationalCredentialAwarded: "Certificate of Completion (coming soon)",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQJsonLd() {
  const faqs = [
    {
      question: "What is AI ethics?",
      answer: "AI ethics is a set of principles and practices that guide the responsible development and use of artificial intelligence. It covers fairness, transparency, accountability, privacy, safety, and human-centric design.",
    },
    {
      question: "Why do SMBs need AI ethics?",
      answer: "SMBs face unique risks including legal exposure (EU AI Act, CCPA), reputational damage from AI failures, and customer trust issues. A single ethical incident can significantly impact a small business.",
    },
    {
      question: "How long does it take to complete the AI Ethics Playbook?",
      answer: "The complete ebook takes approximately 45 minutes to read. The 40 quiz questions can be completed in about 20 minutes. The Virtual TA is available for instant answers anytime.",
    },
    {
      question: "Is this resource free?",
      answer: "Yes, the AI Ethics Playbook, including the ebook, quizzes, and AI-powered Virtual Teaching Assistant, is completely free to use.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

