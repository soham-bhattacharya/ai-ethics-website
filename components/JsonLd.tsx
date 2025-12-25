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
    name: "AI Ethics Playbook for Professionals",
    description: "Comprehensive AI ethics training covering industry-specific compliance, bias prevention, governance frameworks, and practical implementation strategies for SMBs, government, healthcare, HR, and financial services.",
    provider: {
      "@type": "Organization",
      name: "AI Ethics Playbook",
      url: siteUrl,
    },
    educationalLevel: "Beginner to Intermediate",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "SMB Track",
        courseMode: "online",
        courseWorkload: "PT60M",
      },
      {
        "@type": "CourseInstance",
        name: "Government Track",
        courseMode: "online",
        courseWorkload: "PT90M",
      },
      {
        "@type": "CourseInstance",
        name: "Healthcare Track",
        courseMode: "online",
        courseWorkload: "PT85M",
      },
      {
        "@type": "CourseInstance",
        name: "HR/Recruitment Track",
        courseMode: "online",
        courseWorkload: "PT70M",
      },
      {
        "@type": "CourseInstance",
        name: "Finance Track",
        courseMode: "online",
        courseWorkload: "PT70M",
      }
    ],
    teaches: [
      "AI Ethics Principles",
      "Bias Detection and Prevention",
      "AI Compliance and Governance",
      "HIPAA AI Compliance",
      "Fair Lending and ECOA",
      "AEDT Compliance",
      "State AI Legislation Analysis",
      "Risk Assessment Frameworks",
      "Practical AI Implementation",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Business professionals, government workers, healthcare administrators, HR professionals, financial analysts"
    }
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
      question: "Why do businesses need AI ethics training?",
      answer: "Businesses face significant risks including legal exposure (EU AI Act, Colorado AI Act, CCPA), reputational damage from AI failures, and customer trust issues. Proper AI ethics training helps organizations implement AI responsibly and avoid costly mistakes.",
    },
    {
      question: "What learning tracks are available?",
      answer: "We offer 5 specialized learning tracks: SMB (small business), Government/Policy, Healthcare, HR/Recruitment, and Financial Services. Each track provides industry-specific guidance, case studies, and compliance frameworks.",
    },
    {
      question: "How long does it take to complete a learning track?",
      answer: "Track completion times vary: SMB (60 min), Government (90 min), Healthcare (85 min), HR (70 min), and Finance (70 min). Each track includes comprehensive reading materials and assessment quizzes.",
    },
    {
      question: "What makes AI Ethics Playbook different from other resources?",
      answer: "We provide industry-specific, practical guidance rather than abstract theory. Our tracks cover real regulations (AEDT, HIPAA, ECOA), include actual case studies, and offer implementation templates you can use immediately.",
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

