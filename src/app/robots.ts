import type { MetadataRoute } from "next";
import cv from "@/data/cv.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${cv.site.url}/sitemap.xml`,
  };
}
