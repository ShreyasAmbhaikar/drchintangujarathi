import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { DETAILED_PROCEDURES } from '@/lib/procedures-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // Include all 30 canonical SEO detailed procedures
  const procedureSlugs = Array.from(
    new Set([
      ...SITE_CONFIG.serviceCategories.flatMap((cat) => cat.procedures.map((p) => p.slug)),
      ...SITE_CONFIG.procedures.cosmetic.map((p) => p.slug),
      ...SITE_CONFIG.procedures.reconstructive.map((p) => p.slug),
      ...SITE_CONFIG.procedures.nonSurgical.map((p) => p.slug),
    ])
  );

  const servicePages: MetadataRoute.Sitemap = procedureSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
