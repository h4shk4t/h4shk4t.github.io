import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">{data.title}</h1>
        <div className="text-gray-400 mb-8">
          {data.date} • {data.author}
        </div>
        <div 
          className="article"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </article>
    </div>
  )
}
