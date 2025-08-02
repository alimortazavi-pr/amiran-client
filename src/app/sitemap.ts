// app/sitemap.ts
import { MetadataRoute } from "next";

const DOMAIN = "https://amirangroup.co";
const now = new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];

  // Static pages
  routes.push({
    url: `${DOMAIN}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  });

  routes.push({
    url: `${DOMAIN}/blog`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  routes.push({
    url: `${DOMAIN}/contact-us`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  routes.push({
    url: `${DOMAIN}/duty`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  });

  routes.push({
    url: `${DOMAIN}/projects`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  });

  routes.push({
    url: `${DOMAIN}/services`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  });

  routes.push({
    url: `${DOMAIN}/about-us`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  });

  // Blog dynamic pages (manually)
  routes.push({
    url: `${DOMAIN}/blog/seo-tips`,
    lastModified: "2024-12-10T10:00:00.000Z",
    changeFrequency: "weekly",
    priority: 0.7,
  });

  routes.push({
    url: `${DOMAIN}/blog/web-performance`,
    lastModified: "2025-01-25T10:00:00.000Z",
    changeFrequency: "weekly",
    priority: 0.7,
  });

  // Project dynamic pages (manually)
  routes.push({
    url: `${DOMAIN}/projects/modern-villa`,
    lastModified: "2025-04-15T10:00:00.000Z",
    changeFrequency: "weekly",
    priority: 0.9,
  });

  routes.push({
    url: `${DOMAIN}/projects/commercial-complex`,
    lastModified: "2025-06-01T10:00:00.000Z",
    changeFrequency: "weekly",
    priority: 0.9,
  });

  return routes;
}
