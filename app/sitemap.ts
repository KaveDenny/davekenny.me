import type { MetadataRoute } from 'next'
import { PROJECTS, SITE } from './lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...PROJECTS.map((project) => ({
      url: `${SITE.url}${project.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
