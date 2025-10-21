'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-64 sm:w-72 bg-black/95 backdrop-blur-md border-l border-gray-800 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900/50 to-black/50">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-300 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                  <a
                    href="#publications"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Publications
                  </a>
                  <a
                    href="#experience"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>

                  {/* Resume button in menu */}
                  <a
                    href="/resume.pdf"
                    download
                    onClick={closeMenu}
                    className="mt-4 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-all text-center"
                  >
                    Download Resume
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

