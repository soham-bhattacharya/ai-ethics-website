import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WebsiteJsonLd, OrganizationJsonLd, CourseJsonLd, FAQJsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-ethics-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Ethics Playbook | Responsible AI Guide for Businesses & Professionals",
    template: "%s | AI Ethics Playbook"
  },
  description: "Master AI ethics with our comprehensive, free playbook. Practical guides for SMBs, government workers, healthcare professionals, and HR teams. Interactive quizzes, AI teaching assistant, and industry-specific modules.",
  keywords: [
    "AI ethics",
    "responsible AI",
    "AI governance",
    "AI compliance",
    "AI bias",
    "algorithmic fairness",
    "AI policy",
    "SMB AI",
    "small business AI",
    "AI risk management",
    "ethical AI",
    "AI regulations",
    "Colorado AI Act",
    "EU AI Act",
    "CCPA AI",
    "AI hiring",
    "AI healthcare",
    "AI transparency",
    "AI accountability"
  ],
  authors: [{ name: "AI Ethics Playbook Team" }],
  creator: "AI Ethics Playbook",
  publisher: "AI Ethics Playbook",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AI Ethics Playbook",
    title: "AI Ethics Playbook | Responsible AI Guide for Businesses & Professionals",
    description: "Master AI ethics with our comprehensive, free playbook. Practical guides, interactive quizzes, and AI-powered teaching assistant for SMBs, government, healthcare, and HR professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Ethics Playbook - Your Complete AI Ethics Resource",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ethics Playbook | Responsible AI Guide",
    description: "Master AI ethics with our comprehensive, free playbook. Practical guides for SMBs, government, healthcare, and HR professionals.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
        <CourseJsonLd />
        <FAQJsonLd />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
