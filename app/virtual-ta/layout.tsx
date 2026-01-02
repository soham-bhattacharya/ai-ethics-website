import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ethics Virtual TA | AI-Powered Teaching Assistant",
  description: "Get instant answers to your AI ethics questions with our intelligent Virtual Teaching Assistant. Context-aware responses based on our comprehensive playbook content.",
  keywords: [
    "AI ethics chatbot",
    "AI teaching assistant",
    "AI ethics help",
    "AI ethics questions",
    "virtual teaching assistant",
    "AI ethics support"
  ],
  openGraph: {
    title: "AI Ethics Virtual TA | AI-Powered Teaching Assistant",
    description: "Get instant, context-aware answers to your AI ethics questions with our intelligent Virtual TA.",
    type: "website",
  },
  alternates: {
    canonical: "/virtual-ta",
  },
};

export default function VirtualTALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

