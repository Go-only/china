import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceEntries = Object.keys(services)
    .filter((slug) => slug !== "faq")
    .map((slug) => ({
      url: `${SITE_ORIGIN}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: `${SITE_ORIGIN}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_ORIGIN}/faq/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceEntries,
  ];
}
