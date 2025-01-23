import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO_CONFIG.canonicalBaseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${SEO_CONFIG.canonicalBaseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SEO_CONFIG.canonicalBaseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    }
  ];
}
