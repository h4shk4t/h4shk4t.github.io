import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

// Site URL can be overridden via NEXT_PUBLIC_SITE_URL env var
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://h4shk4t.github.io'
const siteName = 'h4shk4t — AI Research @ Adobe | Security | Infrastructure | Blockchain'
const siteDescription = 'AI Research Associate at Adobe. Publications in machine learning, expertise in web security, infrastructure engineering, and blockchain. Open for research collaborations and exciting opportunities.'
const defaultOgImage = '/placeholder.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Tech Portfolio',
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  title: {
    default: siteName,
    template: '%s | h4shk4t',
  },
  description: siteDescription,
  keywords: [
    'Ashutosh',
    'h4shk4t',
    'AI Research',
    'Machine Learning',
    'Adobe Research',
    'AI Publications',
    'Artificial Intelligence',
    'LLM',
    'Computer Vision',
    'NLP',
    'Cybersecurity',
    'Web Application Security',
    'CTF',
    'Penetration Testing',
    'DevOps',
    'Infrastructure Engineering',
    'Kubernetes',
    'MLOps',
    'Blockchain',
    'Smart Contracts',
    'Web3',
    'Research Portfolio',
    'Technical Portfolio',
  ],
  authors: [{ name: 'h4shk4t' }],
  creator: 'h4shk4t',
  publisher: 'h4shk4t',
  category: 'technology',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Tech Portfolio — h4shk4t',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/placeholder-logo.png' }],
    apple: [{ url: '/placeholder-logo.png' }],
    other: [
      { rel: 'mask-icon', url: '/placeholder-logo.svg', color: '#00ff99' },
    ],
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': `${siteUrl}#person`,
                  name: 'h4shk4t',
                  alternateName: 'Ashutosh',
                  url: siteUrl,
                  jobTitle: 'Machine Learning Research Associate',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Adobe'
                  },
                  knowsAbout: [
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Computer Vision',
                    'Natural Language Processing',
                    'Web Application Security',
                    'Infrastructure Engineering',
                    'Blockchain Technology',
                    'DevOps'
                  ],
                  sameAs: [
                    'https://github.com/h4shk4t',
                    'https://www.linkedin.com/in/ashutosh-srivastava-1bbb0a223',
                    'https://scholar.google.com/citations?user=Oa5hGYgAAAAJ&hl=en',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}#website`,
                  url: siteUrl,
                  name: siteName,
                  description: siteDescription,
                  publisher: { '@id': `${siteUrl}#person` },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.className} min-h-screen bg-black text-white`}>
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-400 focus:text-black focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4" aria-label="Primary navigation">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold gradient-text" aria-label="Home - Portfolio">
                ~/portfolio
              </Link>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden md:flex items-center gap-6">
                  <a href="#publications" className="text-gray-300 hover:text-white transition-colors text-sm">
                    publications
                  </a>
                  <a href="#experience" className="text-gray-300 hover:text-white transition-colors text-sm">
                    experience
                  </a>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                    projects
                  </a>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                    blog
                  </Link>
                </div>
                <a 
                  href="/resume.pdf" 
                  download
                  className="px-4 py-2 bg-green-400 text-black text-sm font-bold rounded-lg hover:bg-green-300 transition-all"
                  aria-label="Download resume in PDF format"
                >
                  Resume
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <footer className="border-t border-gray-800 bg-black/80" role="contentinfo">
          <div className="container mx-auto px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3 mb-6">
              <div>
                <div className="text-xl font-bold gradient-text mb-2">~/portfolio</div>
                <p className="text-gray-400 max-w-md text-sm">{siteDescription}</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3 text-sm">Quick Links</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="#publications" className="text-gray-400 hover:text-white transition-colors">Publications</a>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3 text-sm">Connect</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="https://github.com/h4shk4t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub profile"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashutosh-srivastava-1bbb0a223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=Oa5hGYgAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Google Scholar profile"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="https://ctftime.org/team/16691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="CTFtime team profile"
                  >
                    CTFtime
                  </a>
                  <a href="/rss.xml" className="text-gray-400 hover:text-white transition-colors">RSS Feed</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} All rights reserved. Built with Next.js</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
