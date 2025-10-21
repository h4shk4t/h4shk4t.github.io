'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

interface Publication {
  title: string
  conference: string
  year: string
  authors: string
  link?: string
  abstract?: string
  category: 'AI' | 'Security' | 'Blockchain' | 'Infrastructure' | 'Other'
}

interface PublicationsSectionProps {
  publications?: Publication[]
}

const defaultPublications: Publication[] = [
  {
    title: 'Your Publication Title Here',
    conference: 'Conference/Journal Name',
    year: '2024',
    authors: 'Your Name, Co-Author 1, Co-Author 2',
    link: '#',
    abstract: 'Brief abstract or description of your research contribution. You can expand this with more details about the methodology, results, and impact.',
    category: 'AI'
  },
  // Add more publications here
]

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all bg-black/50"
    >
      <div className="flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{publication.title}</h3>
          <div className="text-gray-400 text-sm mb-2">
            <span className="text-green-400">{publication.conference}</span> • {publication.year}
          </div>
          <div className="text-gray-500 text-sm mb-3">{publication.authors}</div>
          
          {publication.abstract && (
            <div className="mb-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Abstract
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show Abstract
                  </>
                )}
              </button>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-400 text-sm mt-2 leading-relaxed"
                >
                  {publication.abstract}
                </motion.p>
              )}
            </div>
          )}

          <div className="flex items-center gap-3">
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
              >
                View Paper <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <span className="text-xs px-2 py-1 rounded-full border border-purple-800 text-purple-400">
              {publication.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PublicationsSection({ publications = defaultPublications }: PublicationsSectionProps) {
  const [filter, setFilter] = useState<string>('All')
  const categories = ['All', 'AI', 'Security', 'Blockchain', 'Infrastructure']

  const filteredPublications = filter === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === filter)

  return (
    <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="publications">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3 gradient-text">~/publications</h2>
          <p className="text-gray-400 mb-8">Research contributions in AI, security, and distributed systems</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === category
                  ? 'bg-green-400/20 text-green-400 border border-green-400'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No publications found in this category.
            </div>
          )}
        </div>

        {/* Note for recruiters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          For a complete list of publications and citations, visit{' '}
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            Google Scholar
          </a>
        </motion.div>
      </div>
    </section>
  )
}

