import type { MetadataRoute } from "next";
import cv from "@/data/cv.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: cv.site.url,
      lastModified: cv.site.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
