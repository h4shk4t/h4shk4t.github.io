import Link from 'next/link'
import { Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Terminal className="w-20 h-20 text-green-400" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-all"
          >
            Go Home
          </Link>
          <Link 
            href="/blog"
            className="px-8 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all"
          >
            View Blog
          </Link>
        </div>
        
        <div className="mt-12 text-gray-500 font-mono text-sm">
          <p>~/404 - Resource not found</p>
        </div>
      </div>
    </div>
  )
}

