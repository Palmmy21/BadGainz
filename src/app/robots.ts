import { MetadataRoute } from 'next';

const BASE_URL = 'https://badgainz.com'; // Change to actual domain later

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/success'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
