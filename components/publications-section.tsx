'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Award } from 'lucide-react'

interface Publication {
  title: string
  venue: string
  venueShort?: string
  year: string
  authors: string[]
  affiliations?: string[]
  link?: string
  projectPage?: string
  code?: string
  abstract?: string
}

interface PublicationsSectionProps {
  publications?: Publication[]
}

const defaultPublications: Publication[] = [
  {
    title: 'ReEdit: Multimodal Exemplar-Based Image Editing with Diffusion Models',
    venue: 'Winter Conference on Applications of Computer Vision (WACV) & ECCV 2024 Workshop (AI4VA)',
    venueShort: 'WACV 2025',
    year: '2025',
    authors: [
      'Ashutosh Srivastava',
      'Tarun Ram Menta',
      'Abhinav Java',
      'Avadhoot Jadhav',
      'Silky Singh',
      'Surgan Jandial',
      'Balaji Krishnamurthy'
    ],
    affiliations: [
      'IIT Roorkee',
      'Adobe Research',
      'Microsoft Research',
      'IIT Bombay',
      'Stanford University',
      'Carnegie Mellon University'
    ],
    link: 'https://reedit-diffusion.github.io/',
    projectPage: 'https://reedit-diffusion.github.io/',
    code: 'https://github.com/your-repo/reedit',
    abstract: 'Modern Text-to-Image (T2I) Diffusion models have revolutionized image editing by enabling the generation of high-quality photorealistic images. We propose ReEdit, a modular and efficient end-to-end framework that captures edits in both text and image modalities while ensuring the fidelity of the edited image.'
  },
  {
    title: 'Towards Efficient Exemplar Based Image Editing with Multimodal VLMs',
    venue: 'European Conference on Computer Vision Workshop (ECCV 2024 - AI4VA)',
    venueShort: 'ECCV 2024W',
    year: '2024',
    authors: [
      'Avadhoot Jadhav',
      'Ashutosh Srivastava',
      'Abhinav Java',
      'Silky Singh',
      'Tarun Ram Menta',
      'Surgan Jandial',
      'Balaji Krishnamurthy'
    ],
    affiliations: [
      'IIT Bombay',
      'IIT Roorkee',
      'Microsoft Research',
      'Stanford University',
      'Adobe Research',
      'Carnegie Mellon University'
    ],
    link: 'https://arxiv.org/abs/2506.20155',
    abstract: 'Text-to-Image Diffusion models have enabled a wide array of image editing applications. However, capturing all types of edits through text alone can be challenging and cumbersome. We tackle exemplar-based image editing by leveraging pretrained text-to-image diffusion models and multimodal VLMs. Our optimization-free end-to-end pipeline outperforms baselines on multiple types of edits while being ~4x faster.'
  }
]

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gray-700 transition-all bg-black/50"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="hidden sm:block">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
        </div>
        <div className="flex-1 min-w-0">
          {/* Venue Badge */}
          {publication.venueShort && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 text-xs px-2 sm:px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500 text-purple-300 font-semibold">
                <Award className="w-3 h-3" />
                {publication.venueShort}
              </span>
              <span className="text-gray-500 text-xs">{publication.year}</span>
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{publication.title}</h3>
          
          {/* Authors */}
          <div className="text-gray-400 text-sm mb-2">
            {publication.authors.map((author, idx) => (
              <span key={idx}>
                {author}
                {idx < publication.authors.length - 1 && ', '}
              </span>
            ))}
          </div>
          
          {/* Affiliations - Key Feature for Recruiters */}
          {publication.affiliations && publication.affiliations.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
              {publication.affiliations.map((affiliation, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-blue-500/10 border border-blue-800 text-blue-400"
                  title="Institution affiliation"
                >
                  {affiliation}
                </span>
              ))}
            </div>
          )}
          
          {/* Venue */}
          <div className="text-gray-500 text-sm mb-3">
            {publication.venue}
          </div>
          
          {/* Abstract */}
          {publication.abstract && (
            <div className="mb-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                aria-expanded={isExpanded}
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

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {publication.projectPage && (
              <a
                href={publication.projectPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Project Page
              </a>
            )}
            {publication.link && publication.link !== publication.projectPage && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Paper
              </a>
            )}
            {publication.code && (
              <a
                href={publication.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PublicationsSection({ publications = defaultPublications }: PublicationsSectionProps) {
  return (
    <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="publications">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">~/publications</h2>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Research in AI/ML and computer vision with collaborators from top institutions
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
            {publications.length} {publications.length === 1 ? 'publication' : 'publications'} • Collaborations with Stanford, Adobe Research, Microsoft Research, CMU, and premier IITs
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-4 sm:space-y-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>

        {/* Google Scholar Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://scholar.google.com/citations?user=Oa5hGYgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
            </svg>
            View Full Profile on Google Scholar
          </a>
        </motion.div>
      </div>
    </section>
  )
}

