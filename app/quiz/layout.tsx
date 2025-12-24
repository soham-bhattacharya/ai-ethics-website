import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ethics Quiz | Test Your Knowledge",
  description: "Test your AI ethics knowledge with 40 interactive quiz questions. Covers bias, compliance, governance, risk management, and practical implementation across 8 chapters.",
  keywords: [
    "AI ethics quiz",
    "AI ethics test",
    "responsible AI quiz",
    "AI compliance quiz",
    "AI knowledge test",
    "AI ethics assessment"
  ],
  openGraph: {
    title: "AI Ethics Quiz | Test Your Knowledge",
    description: "Test your AI ethics knowledge with 40 interactive questions covering bias, compliance, governance, and implementation.",
    type: "website",
  },
  alternates: {
    canonical: "/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

