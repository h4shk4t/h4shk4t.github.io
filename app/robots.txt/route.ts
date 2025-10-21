// Optional plaintext robots.txt for platforms that expect the file name
import type { NextRequest } from 'next/server'

export async function GET(_req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://h4shk4t.github.io'
  const body = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml\n`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=604800',
    },
  })
}



