'use client'

import { motion } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'

interface Contribution {
  project: string
  org: string
  description: string
  highlights: string[]
  link: string
  tags: string[]
}

const contributions: Contribution[] = [
  {
    project: 'Jaeger',
    org: 'CNCF',
    description: 'Distributed tracing platform. Fixed critical goroutine leaks in remote-storage applications, refactored V1/V2 benchmarks, deprecated legacy gRPC plugins, and improved CI pipelines.',
    highlights: ['Goroutine leak fix', 'Benchmark refactor', 'gRPC deprecation'],
    link: 'https://github.com/jaegertracing/jaeger',
    tags: ['Go', 'Distributed Systems']
  },
  {
    project: 'DocArray',
    org: 'LF AI & Data',
    description: 'Extended core AI data structures by adding capabilities to create documents from named tuples and models from dictionaries.',
    highlights: ['Named tuple support', 'Dict-to-model conversion'],
    link: 'https://github.com/docarray/docarray',
    tags: ['Python', 'AI Data']
  },
  {
    project: 'Weaviate',
    org: 'Vector DB',
    description: 'Wrote initial release workflows and GitHub Actions to automate building and distributing Weaviate binaries.',
    highlights: ['Release automation', 'Binary CI/CD'],
    link: 'https://github.com/weaviate/weaviate',
    tags: ['Go', 'CI/CD']
  },
  {
    project: 'WasmEdge',
    org: 'CNCF',
    description: 'Developed WebAssembly-based MySQL binlog-to-Kafka table filtering capabilities for edge computing.',
    highlights: ['MySQL binlog parsing', 'Kafka integration'],
    link: 'https://github.com/WasmEdge/WasmEdge',
    tags: ['Rust', 'WebAssembly']
  }
]

export function OpenSourceSection() {
  return (
    <section className="bg-black/50 backdrop-blur-sm py-16 sm:py-24 px-4" id="opensource">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">~/open-source</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl">
            Contributions to CNCF, LF AI & Data, and other major open source projects
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {contributions.map((contrib, index) => (
            <motion.a
              key={index}
              href={contrib.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-green-800/60 transition-all bg-black/50"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {contrib.project}
                  </h3>
                  <span className="text-xs text-gray-500">{contrib.org}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-gray-400 mb-3">{contrib.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {contrib.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full border border-green-800 text-green-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
