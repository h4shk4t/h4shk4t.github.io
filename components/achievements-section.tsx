'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Target, Zap } from 'lucide-react'

interface Achievement {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  link?: string
  year: string
  color: 'yellow' | 'purple' | 'blue' | 'green'
}

const achievements: Achievement[] = [
  {
    title: 'CSAW ESC 2022 Winner',
    subtitle: 'Research Track',
    description: 'Won the Embedded Security Challenge in Research Track for adversarial attacks against machine learning models. CSAW ESC is the world\'s oldest hardware security competition.',
    icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
    link: 'https://github.com/h4shk4t/csaw_esc_2022',
    year: '2022',
    color: 'yellow'
  },
  {
    title: 'EigenLayer Infinite Prize',
    subtitle: 'ValidAI - AVS Development',
    description: 'Won the EigenLayer Infinite Prize for ValidAI, an Actively Validated Service (AVS) leveraging EigenLayer\'s restaking infrastructure for decentralized AI validation.',
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    link: 'https://github.com/h4shk4t',
    year: '2024',
    color: 'purple'
  },
  {
    title: 'CTF Global Rankings',
    subtitle: 'InfoSecIITR Team',
    description: 'Led InfoSecIITR to rank #40 globally and #4 in India on CTFtime, competing in international cybersecurity capture-the-flag competitions.',
    icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
    link: 'https://ctftime.org/team/16691/',
    year: '2022-2025',
    color: 'blue'
  }
]

const colorClasses = {
  yellow: {
    border: 'border-yellow-500/30 hover:border-yellow-400/60',
    bg: 'bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-orange-500/5',
    icon: 'text-yellow-400',
    title: 'text-yellow-400',
    year: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-400/60',
    bg: 'bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-fuchsia-500/5',
    icon: 'text-purple-400',
    title: 'text-purple-400',
    year: 'bg-purple-500/20 text-purple-400 border-purple-500/50'
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-400/60',
    bg: 'bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5',
    icon: 'text-blue-400',
    title: 'text-blue-400',
    year: 'bg-blue-500/20 text-blue-400 border-blue-500/50'
  },
  green: {
    border: 'border-green-500/30 hover:border-green-400/60',
    bg: 'bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5',
    icon: 'text-green-400',
    title: 'text-green-400',
    year: 'bg-green-500/20 text-green-400 border-green-500/50'
  }
}

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const colors = colorClasses[achievement.color]
  
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group h-full border rounded-lg p-4 sm:p-6 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${achievement.link ? 'cursor-pointer' : ''}`}
    >
      <div className="flex flex-col h-full">
        {/* Icon and Year */}
        <div className="flex items-start justify-between mb-4">
          <div className={`${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
            {achievement.icon}
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${colors.year}`}>
            {achievement.year}
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3 className={`text-lg sm:text-xl font-bold mb-1 ${colors.title}`}>
          {achievement.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          {achievement.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed flex-grow">
          {achievement.description}
        </p>

        {/* Link Indicator */}
        {achievement.link && (
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
            <span>View more</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  )

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    )
  }

  return card
}

export function AchievementsSection() {
  return (
    <section className="min-h-screen bg-black/50 backdrop-blur-sm py-16 sm:py-24 px-4" id="achievements">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">~/achievements</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl">
            Recognition for contributions to AI research, blockchain innovation, and cybersecurity competitions
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

