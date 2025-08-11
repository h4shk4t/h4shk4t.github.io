import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      ...data,
    }
  })

  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 gradient-text">~/blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <article>
                <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
