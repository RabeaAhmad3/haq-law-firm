import { type MetadataRoute } from 'next'

import { loadArticles } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let articles = await loadArticles()

  let blogEntries = articles.map((article) => ({
    url: `https://haqlegal.com${article.href}`,
    lastModified: new Date(article.date),
  }))

  return [
    {
      url: 'https://haqlegal.com',
      lastModified: new Date(),
    },
    {
      url: 'https://haqlegal.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://haqlegal.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://haqlegal.com/blog',
      lastModified: new Date(),
    },
    ...blogEntries,
  ]
}
