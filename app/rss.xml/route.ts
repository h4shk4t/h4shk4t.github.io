import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://h4shk4t.github.io'
  const postsDirectory = path.join(process.cwd(), 'posts')
  let items = ''

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return { slug, data, content }
    })
    // sort by date desc if available
    posts.sort((a, b) => {
      const d1 = a.data?.date ? new Date(a.data.date as string).getTime() : 0
      const d2 = b.data?.date ? new Date(b.data.date as string).getTime() : 0
      return d2 - d1
    })

    items = posts
      .map(({ slug, data }) => {
        const title = (data?.title as string) || slug
        const description = (data?.excerpt as string) || ''
        const pubDate = data?.date ? new Date(data.date as string).toUTCString() : new Date().toUTCString()
        const url = `${siteUrl}/blog/${slug}`
        return `
          <item>
            <title>${escapeXml(title)}</title>
            <link>${url}</link>
            <guid>${url}</guid>
            <pubDate>${pubDate}</pubDate>
            <description>${escapeXml(description)}</description>
          </item>
        `
      })
      .join('\n')
  } catch (e) {
    items = ''
  }

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>h4shk4t — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Articles on AI, cybersecurity, CTFs, and infrastructure.</description>
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=1800, stale-while-revalidate=86400',
    },
  })
}

function escapeXml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}



