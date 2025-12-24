import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ethics Ebook | Free Comprehensive Guide",
  description: "Read our free 8-chapter AI Ethics Playbook covering bias prevention, compliance frameworks, risk assessment, and practical implementation strategies for businesses of all sizes.",
  keywords: [
    "AI ethics ebook",
    "AI ethics guide",
    "responsible AI book",
    "AI compliance guide",
    "AI bias prevention",
    "AI risk management",
    "ethical AI implementation"
  ],
  openGraph: {
    title: "AI Ethics Ebook | Free Comprehensive Guide",
    description: "Read our free 8-chapter AI Ethics Playbook. Learn bias prevention, compliance, and practical AI ethics implementation.",
    type: "article",
  },
  alternates: {
    canonical: "/ebook",
  },
};

export default function EbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

