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
    skills: ['PyTorch', 'TensorFlow', 'Transformers', 'LLMs', 'Computer Vision', 'NLP', 'MLOps', 'CUDA'],
    color: 'purple'
  },
  {
    title: 'Security & CTF',
    icon: <Shield className="w-6 h-6" />,
    skills: ['Web AppSec', 'Penetration Testing', 'CTF', 'OWASP', 'Cryptography', 'Binary Exploitation', 'Reverse Engineering'],
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
    skills: ['Smart Contracts', 'Solidity', 'Web3.js', 'Consensus Protocols', 'DeFi', 'Security Auditing'],
    color: 'green'
  }
]

const languagesAndTools = [
  'Python', 'Rust', 'Go', 'TypeScript', 'JavaScript', 'C/C++', 
  'SQL', 'Git', 'Linux', 'Next.js', 'React', 'Node.js'
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
          <h2 className="text-3xl font-bold mb-3 gradient-text">~/skills</h2>
          <p className="text-gray-400 mb-12">Technical expertise across multiple domains</p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border ${colors.border} rounded-lg p-6 ${colors.bg} hover:border-opacity-100 transition-all`}
              >
                <div className={`flex items-center gap-3 mb-4 ${colors.text}`}>
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
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
          className="border border-gray-800 rounded-lg p-6 bg-black/30"
        >
          <h3 className="text-lg font-bold text-white mb-4">Languages & Tools</h3>
          <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  )
}

