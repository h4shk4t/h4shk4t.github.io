'use client'

import { motion } from 'framer-motion'
import { Cpu, Shield, Server, Blocks } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['PyTorch', 'Diffusion Models', 'Transformers', 'LLMs', 'Computer Vision', 'NLP', 'MLOps', 'Agentic AI'],
    color: 'purple'
  },
  {
    title: 'Security & CTF',
    icon: <Shield className="w-6 h-6" />,
    skills: ['Web AppSec', 'Penetration Testing', 'CTFs'],
    color: 'red'
  },
  {
    title: 'Infrastructure & DevOps',
    icon: <Server className="w-6 h-6" />,
    skills: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform', 'CI/CD', 'Monitoring', 'Linux'],
    color: 'blue'
  },
  {
    title: 'Blockchain & Web3',
    icon: <Blocks className="w-6 h-6" />,
    skills: ['Smart Contracts', 'Solidity', 'zkVM', 'AVS'],
    color: 'green'
  }
]

const languagesAndTools = [
  'Python', 'Rust', 'Go', 'C/C++', 
  'SQL', 'Git', 'Linux'
]

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  purple: { border: 'border-purple-800', text: 'text-purple-400', bg: 'bg-purple-500/10' },
  red: { border: 'border-red-800', text: 'text-red-400', bg: 'bg-red-500/10' },
  blue: { border: 'border-blue-800', text: 'text-blue-400', bg: 'bg-blue-500/10' },
  green: { border: 'border-green-800', text: 'text-green-400', bg: 'bg-green-500/10' }
}

export function SkillsSection() {
  return (
    <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">~/skills</h2>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">Technical expertise across multiple domains</p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border ${colors.border} rounded-lg p-4 sm:p-5 md:p-6 ${colors.bg} hover:border-opacity-100 transition-all`}
              >
                <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${colors.text}`}>
                  {category.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-xs px-3 py-1 rounded-full border ${colors.border} ${colors.text} bg-black/50`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Languages & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 bg-black/30"
        >
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Languages & Tools</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {languagesAndTools.map((item, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 bg-gray-900/50 hover:border-gray-600 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
        >
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Certifications</h3>
          <a
            href="https://www.credly.com/badges/61f8e0a5-af56-4033-a2b7-2ef1142209b0/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-blue-700 rounded-lg hover:border-blue-600 transition-all bg-blue-500/10 group"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white group-hover:text-blue-300 transition-colors text-sm sm:text-base">
                GIAC Foundational Cybersecurity Technologies (GFACT)
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Global Information Assurance Certification</div>
            </div>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

