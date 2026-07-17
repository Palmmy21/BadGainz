import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/markdown';

const BASE_URL = 'https://badgainz.com'; // Change to actual domain later

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const routes = [
    '',
    '/services',
    '/blog',
    '/checkout',
    '/free',
    '/proof'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Blog routes
  const posts = getPostSlugs()
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => ({
      url: `${BASE_URL}/blog/${slug.replace(/\.md$/, '')}`,
      lastModified: new Date().toISOString(), // In a real app, read file modified date
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [...routes, ...posts];
}
