'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <AlertTriangle className="w-20 h-20 text-red-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-400 mb-8 text-lg">
          An unexpected error occurred. Don't worry, we're on it!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-all"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all"
          >
            Go Home
          </a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-red-900/20 border border-red-800 rounded-lg text-left">
            <p className="text-red-400 font-mono text-sm break-words">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

