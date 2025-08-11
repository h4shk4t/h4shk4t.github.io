'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Cpu, Shield, Terminal, Server, Code, ExternalLink } from 'lucide-react'
import { ParallaxSection } from '../components/parallax-section'
import Image from 'next/image'

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span className="typing-cursor">{displayText}</span>
}

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

const ExperienceCard = ({ role, company, period, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="h-full border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all hover:translate-y-[-5px] bg-black/50"
  >
    <h3 className="text-xl font-bold mb-1">{role}</h3>
    <div className="text-green-400 mb-2">{company}</div>
    <div className="text-gray-500 text-sm mb-4">{period}</div>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

const CodePreview = () => (
  <div className="relative w-full max-w-3xl mx-auto mt-8">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-red-500/20 to-blue-500/20 blur-3xl" />
    <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <pre className="p-4 text-sm">
        <code className="font-mono">
          <span className="text-blue-400">function</span>{' '}
          <span className="text-green-400">secureSystem</span>() {'{'}
          <br />
          {'  '}detectThreats();
          <br />
          {'  '}analyzeVulnerabilities();
          <br />
          {'  '}implementDefenses();
          <br />
          {'  '}<span className="text-blue-400">return</span>{' '}
          <span className="text-yellow-400">"System Secured"</span>;
          <br />
          {'}'}</code>
      </pre>
    </div>
  </div>
)

const IllustrationCard = ({ src, alt }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-lg blur-xl transition-all group-hover:blur-3xl" />
    <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-black/50">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
    </div>
  </div>
)

export default function Home() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="min-h-screen gradient-bg">
      <motion.div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-grid-pattern" />
      </motion.div>

      <section className="h-screen flex flex-col items-center justify-center relative">
        <motion.div style={{ opacity: headerOpacity }} className="text-center space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            <TypewriterText text="I am a developer." />
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            <TypewriterText 
              text="AI researcher. Cybersecurity enthusiast. CTF player. Infrastructure developer." 
              delay={50}
            />
          </p>
          <CodePreview />
        </motion.div>
        <motion.div 
          className="absolute bottom-8 animate-bounce"
          style={{ opacity: headerOpacity }}
        >
          <Terminal className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <ParallaxSection>
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 gradient-text">~/experience</h2>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <ExperienceCard
                role="Senior AI Engineer"
                company="TechCorp AI"
                period="2021 - Present"
                description="Leading AI research initiatives and developing cutting-edge machine learning solutions for cybersecurity applications."
                delay={0.2}
              />
              <ExperienceCard
                role="Security Researcher"
                company="CyberGuard Solutions"
                period="2019 - 2021"
                description="Conducted vulnerability assessments and developed automated security testing frameworks."
                delay={0.4}
              />
              <ExperienceCard
                role="DevOps Engineer"
                company="CloudScale Systems"
                period="2018 - 2019"
                description="Architected and maintained large-scale Kubernetes clusters and implemented CI/CD pipelines."
                delay={0.6}
              />
              <ExperienceCard
                role="Software Developer"
                company="InnovateTech"
                period="2016 - 2018"
                description="Developed full-stack applications and contributed to open-source projects."
                delay={0.8}
              />
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Expertise Section */}
      <ParallaxSection offset={-50}>
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-12 gradient-text">~/expertise</h2>
            </FadeInSection>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "AI Research",
                  description: "Exploring the frontiers of artificial intelligence and machine learning."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Cybersecurity",
                  description: "Protecting digital assets and uncovering vulnerabilities in systems."
                },
                {
                  icon: <Terminal className="w-8 h-8" />,
                  title: "CTF Player",
                  description: "Competing in Capture The Flag events, honing problem-solving skills."
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Infrastructure",
                  description: "Building robust and scalable systems for modern applications."
                }
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <div className="gradient-border h-full">
                    <div className="p-8 h-full bg-black/50">
                      <div className="text-green-400 mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Projects Section */}
      <ParallaxSection offset={50}>
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-12 gradient-text">~/projects</h2>
            </FadeInSection>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Threat Detection",
                  description: "Machine learning-based system for detecting cyber threats in real-time.",
                  tech: ["Python", "TensorFlow", "Docker"],
                  image: "/threat-detection.svg"
                },
                {
                  title: "CTF Platform",
                  description: "A modern platform for hosting Capture The Flag competitions.",
                  tech: ["Next.js", "Node.js", "PostgreSQL"],
                  image: "/ctf-platform.svg"
                },
                {
                  title: "K8s Optimizer",
                  description: "Kubernetes cluster optimization tool using AI techniques.",
                  tech: ["Go", "Kubernetes", "React"],
                  image: "/k8s-optimizer.svg"
                }
              ].map((project, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <div className="group h-full">
                    <div className="gradient-border h-full">
                      <div className="p-8 space-y-4 bg-black/50 h-full">
                        <IllustrationCard
                          src={project.image}
                          alt={project.title}
                        />
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-2 py-1 rounded-full border border-green-800 text-green-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  )
}
