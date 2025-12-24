import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-ethics-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core pages
  const routes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/ebook`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/quiz`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/virtual-ta`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Future: Add learning track pages dynamically
  // const tracks = ["smb", "government", "healthcare", "hr"];
  // tracks.forEach(track => {
  //   routes.push({
  //     url: `${siteUrl}/learn/${track}`,
  //     lastModified: currentDate,
  //     changeFrequency: "weekly" as const,
  //     priority: 0.85,
  //   });
  // });

  return routes;
}

