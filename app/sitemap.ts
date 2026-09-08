import type { MetadataRoute } from "next";
import { work } from "@/components/Data";

const baseUrl = "https://nxenable.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/solutions", "/industries", "/process", "/work", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...work.map((item) => ({ url: `${baseUrl}/work/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
