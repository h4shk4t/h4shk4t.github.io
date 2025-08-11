'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
}

export function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  )
}
