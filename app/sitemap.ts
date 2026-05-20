import 'server-only';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { cms } from '@/lib/cms';

function flattenNav(items: typeof siteConfig.nav): { href: string; priority: number }[] {
  return items.flatMap((item) => [
    { href: item.href, priority: item.href === '/' ? 1 : 0.8 },
    ...(item.children ? item.children.map((child) => ({ href: child.href, priority: 0.7 })) : []),
  ]);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const navEntries: MetadataRoute.Sitemap = flattenNav(siteConfig.nav).map(
    ({ href, priority }) => ({
      url: `${base}${href}`,
      lastModified: now,
      changeFrequency: href === '/' ? 'weekly' : 'monthly',
      priority,
    }),
  );

  if (!siteConfig.features.blog) return navEntries;

  const posts = await cms.listPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...navEntries,
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...postEntries,
  ];
}
