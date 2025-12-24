import { MetadataRoute } from "next";
import { getAllTracks } from "@/data/tracks";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-ethics-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tracks`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/ebook`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/quiz`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/virtual-ta`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Add learning track pages dynamically
  const tracks = getAllTracks().filter(t => t.isActive && t.id !== "smb");
  tracks.forEach(track => {
    routes.push({
      url: `${siteUrl}/tracks/${track.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
    routes.push({
      url: `${siteUrl}/tracks/${track.slug}/quiz`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  return routes;
}
