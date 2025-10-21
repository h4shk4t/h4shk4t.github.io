import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://h4shk4t.github.io'

  const routes: MetadataRoute.Sitemap = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.6,
  }))

  // Include blog posts
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory)
    for (const fileName of fileNames) {
      const slug = fileName.replace(/\.md$/, '')
      routes.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  } catch (e) {
    // no-op if posts directory missing
  }

  return routes
}



