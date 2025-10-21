'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, GraduationCap, Calendar, ExternalLink } from 'lucide-react'

interface ContactLink {
  name: string
  icon: React.ReactNode
  href: string
  description: string
}

const contactLinks: ContactLink[] = [
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:ashutoshsr@adobe.com',
    description: 'Best for professional inquiries'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/ashutosh-srivastava-1bbb0a223',
    description: 'Connect for opportunities'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/h4shk4t',
    description: 'View my code and contributions'
  },
  {
    name: 'Google Scholar',
    icon: <GraduationCap className="w-5 h-5" />,
    href: 'https://scholar.google.com/citations?user=Oa5hGYgAAAAJ&hl=en',
    description: 'Research publications and citations'
  }
]

export function ContactSection() {
  return (
    <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">~/contact</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 px-4">
            Open to research collaborations, speaking opportunities, and exciting projects
          </p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <a
              href="mailto:ashutoshsr@adobe.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gray-700 transition-all bg-black/50 hover:bg-black/70"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-green-400 mt-1">{link.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white">{link.name}</h3>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-gray-800 rounded-lg p-6 bg-black/30">
            <p className="text-gray-400 mb-2">Current Status</p>
            <p className="text-white font-bold">
              🟢 Open to opportunities in AI Research, Security, and Infrastructure
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

