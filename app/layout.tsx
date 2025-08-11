import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Portfolio',
  description: 'AI Research, Cybersecurity, CTF, and Infrastructure Development',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} min-h-screen bg-black text-white`}>
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold gradient-text">~/portfolio</Link>
              <div className="space-x-8">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">home</Link>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">blog</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
