import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)
  const title = (data?.title as string) || slug
  const description = (data?.excerpt as string) || 'Blog post by h4shk4t'

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/blog/${slug}`,
      images: [{ url: '/placeholder.jpg', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/placeholder.jpg'],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">{data.title}</h1>
        <div className="text-gray-400 mb-8">
          {data.date} • {data.author}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: data.title,
              datePublished: data.date,
              author: { '@type': 'Person', name: data.author || 'h4shk4t' },
              image: ['/placeholder.jpg'],
            }),
          }}
        />
        <div 
          className="article"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
        <div className="mt-10 text-sm text-gray-500">
          <Link href="/blog" className="text-green-400 hover:text-green-300">← Back to blog</Link>
        </div>
      </article>
    </div>
  )
}
