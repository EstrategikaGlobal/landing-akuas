import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://akuas.cl/sitemap.xml",
    host: "https://akuas.cl",
  };
}
