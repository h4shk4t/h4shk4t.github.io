'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Cpu, Shield, Terminal, Server, Trophy } from 'lucide-react'
import { ParallaxSection } from '../components/parallax-section'
import { PublicationsSection } from '../components/publications-section'
import { SkillsSection } from '../components/skills-section'
import { ContactSection } from '../components/contact-section'
import Image from 'next/image'

const TypewriterText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
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

const GlitchText = () => {
  const prefix = 'I am ';
  const primaryName = 'hashkat.';
  const secondaryName = 'Ashutosh.';
  const fullPrimary = prefix + primaryName;

  const [displayText, setDisplayText] = useState<string>('');
  const [currentName, setCurrentName] = useState<string>(primaryName);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const primaryRef = useRef<HTMLSpanElement>(null);
  const secondaryRef = useRef<HTMLSpanElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(Math.max(
      primaryRef.current?.offsetWidth || 0,
      secondaryRef.current?.offsetWidth || 0
    ));
  }, []);

  useEffect(() => {
    if (isTyping && currentIndex < fullPrimary.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + fullPrimary[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isTyping) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullPrimary, displayText]);

  useEffect(() => {
    if (!isTyping) {
      const startCycle = () => {
        setTimeout(() => {
          switchTo(secondaryName);
          setTimeout(() => {
            switchTo(primaryName);
            startCycle();
          }, 5000);
        }, 5000);
      };
      startCycle();
    }
  }, [isTyping]);

  const switchTo = (newName: string) => {
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentName(newName);
    }, 500);
    setTimeout(() => {
      setIsGlitching(false);
    }, 1000);
  };

  return (
    <>
      <span ref={primaryRef} className="invisible absolute font-bold text-4xl md:text-6xl">{primaryName}</span>
      <span ref={secondaryRef} className="invisible absolute font-bold text-4xl md:text-6xl">{secondaryName}</span>
      {isTyping ? (
        <span className="typing-cursor">{displayText}</span>
      ) : (
        <span>
          {prefix}
          <span
            style={{ width: maxWidth ? `${maxWidth}px` : 'auto' }}
            className={`inline-block ${isGlitching ? 'glitch' : ''}`}
            data-text={currentName}
          >
            {currentName}
          </span>
        </span>
      )}
    </>
  );
};

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
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

const ExperienceCard = ({ role, company, period, description, delay = 0 }: { role: string; company: string; period: string; description: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="h-full border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gray-700 transition-all hover:translate-y-[-5px] bg-black/50"
  >
    <h3 className="text-lg sm:text-xl font-bold mb-1">{role}</h3>
    <div className="text-green-400 mb-2 text-sm sm:text-base">{company}</div>
    <div className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{period}</div>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </motion.div>
)

const CodePreview = () => (
  <div className="relative w-full max-w-3xl mx-auto mt-8 px-4 sm:px-0">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-red-500/20 to-blue-500/20 blur-3xl" />
    <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-gray-800 px-3 py-2 sm:px-4">
        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
      </div>
      <div className="overflow-x-auto">
        <pre className="p-3 sm:p-4 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre text-left inline-block min-w-full">
          <code>
            <span className='text-gray-400'>//</span> <span className='text-gray-400'>Resume, vibe code: </span>{'\n'}
            <span className="text-purple-400">class</span> <span className="text-green-400">Agent</span> {'{'}
            {'\n'}  <span className="text-blue-400">skills</span> = [
            {'\n'}    <span className="text-yellow-400">"AI Research"</span>,
            {'\n'}    <span className="text-yellow-400">"Full-Stack Dev"</span>,
            {'\n'}    <span className="text-yellow-400">"CTFs"</span>,
            {'\n'}    <span className="text-yellow-400">"DevOps"</span>
            {'\n'}  ];
            {'\n'}
            {'\n'}  <span className="text-blue-400">execute</span>() {'{'}
            {'\n'}    <span className="text-blue-400">return</span> <span className="text-green-400">this</span>.<span className="text-blue-400">skills</span>.<span className="text-purple-400">map</span>(s =&gt; run(s));
            {'\n'}  {'}'} 
            {'\n'}{'}'}
          </code>
        </pre>
      </div>
    </div>
  </div>
)

const IllustrationCard = ({ src, alt }: { src: string; alt: string }) => (
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

      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 sm:py-0">
        <motion.div style={{ opacity: headerOpacity }} className="text-center space-y-4 sm:space-y-6 z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 glow-text">
            <GlitchText />
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            <TypewriterText 
              text="Machine Learning Research Associate @ Adobe" 
              delay={50}
            />
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            AI Research • Web Security • Infrastructure • Blockchain
          </p>

          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-6 sm:mb-8 px-4"
          >
            <a
              href="https://github.com/h4shk4t/csaw_esc_2022"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-yellow-500/50 rounded-lg bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  CSAW ESC 2022 Winner
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Research Track • Adversarial ML Attacks
                </span>
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-all transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all text-center text-sm sm:text-base"
            >
              Download Resume
            </a>
          </motion.div>
          
          <CodePreview />
        </motion.div>
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 animate-bounce"
          style={{ opacity: headerOpacity }}
        >
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Publications Section - High Priority for Research Roles */}
      <ParallaxSection offset={30}>
        <PublicationsSection />
      </ParallaxSection>

      {/* Experience Section */}
      <ParallaxSection>
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="experience">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 gradient-text">~/experience</h2>
            </motion.div>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <ExperienceCard
                role="Machine Learning Research Associate"
                company="Adobe"
                period="Jul 2025 - Present"
                description="Working on personalization research and developing agentic AI solutions for digital media marketing and sales automation."
                delay={0.2}
              />
              <ExperienceCard
                role="Research Intern"
                company="Trinity College Dublin"
                period="Dec 2024 - Mar 2025"
                description="Conducted research in machine learning and AI applications with the primary focus on interdisciplinary application of AI in Brain Tumor Detection"
                delay={0.4}
              />
              <ExperienceCard
                role="Infrastructure Engineer"
                company="Abacus.AI"
                period="Oct 2024 - Feb 2025"
                description="Developed and maintained scalable infrastructure for AI/ML workloads, optimizing cloud systems and deployment pipelines."
                delay={0.6}
              />
              <ExperienceCard
                role="Research Intern"
                company="Adobe"
                period="May 2024 - Jul 2024"
                description="Conducted research in Diffusion based image editing. Developed a novel end-to-end framework for exemplar-based image editing - ReEdit."
                delay={0.8}
              />
              <ExperienceCard
                role="Team Captain"
                company="InfoSecIITR"
                period="Jun 2022 - May 2025"
                description={
                  <>
                    Led cybersecurity initiatives and CTF competitions (Rank #40 globally, #4 in India on CTFtime). Won{' '}
                    <a 
                      href="https://github.com/h4shk4t/csaw_esc_2022" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 underline transition-colors font-semibold"
                    >
                      CSAW ESC 2022
                    </a>
                    {' '}in Research Track for adversarial attacks against ML models. Mentored team members and developed security tools and frameworks. Visit:{' '}
                    <a 
                      href="https://infoseciitr.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline transition-colors"
                    >
                      infoseciitr.in
                    </a>
                  </>
                }
                delay={1.0}
              />
              <ExperienceCard
                role="Developer"
                company="SDSLabs"
                period="Apr 2022 - May 2025"
                description={
                  <>
                    Contributed to open-source projects at SDSLabs, IIT Roorkee. Developed VectorDB, Katana, RusticOS, and participated in multiple hackathons. Visit:{' '}
                    <a 
                      href="https://sdslabs.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline transition-colors"
                    >
                      sdslabs.co
                    </a>
                  </>
                }
                delay={1.2}
              />
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Expertise Section - Reorganized by Domains */}
      <ParallaxSection offset={-50}>
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="expertise">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-3 gradient-text">~/expertise</h2>
              <p className="text-gray-400 mb-12">Multi-domain technical expertise across cutting-edge technologies</p>
            </FadeInSection>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "AI Research & Machine Learning",
                  description: "Building and researching advanced AI models and Agentic AI systems. Experience with LLMs, computer vision, and NLP. Publishing research in top-tier conferences.",
                  tags: ["PyTorch", "TensorFlow", "Research"]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Web Application Security",
                  description: "Web Security testing, CTF competitions, and security research. Led InfoSecIITR (Rank #40 globally on CTFtime) as Team Captain, specializing in web vulnerabilities and exploit development.",
                  tags: ["AppSec", "CTF"]
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Infrastructure & DevOps",
                  description: "Architecting scalable ML infrastructure on Kubernetes. Cloud-native systems, CI/CD pipelines, and infrastructure-as-code for AI/ML workloads.",
                  tags: ["Kubernetes", "AWS", "Terraform"]
                },
                {
                  icon: <Terminal className="w-8 h-8" />,
                  title: "Blockchain & Web3",
                  description: "Smart contract development, zkVM systems (RISC-0), and AVS (Actively Validated Services). Experience with EigenLayer, zero-knowledge proofs, and decentralized consensus protocols.",
                  tags: ["Solidity", "zkVM", "AVS"]
                }
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <div className="gradient-border h-full">
                    <div className="p-8 h-full bg-black/50">
                      <div className="text-green-400 mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full border border-green-800 text-green-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
        <section className="min-h-screen bg-black/50 backdrop-blur-sm py-24 px-4" id="projects">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-3 gradient-text">~/projects</h2>
              <p className="text-gray-400 mb-12">Open-source contributions and personal projects across multiple domains</p>
            </FadeInSection>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "VectorDB",
                  description: "VectorDB is a high-performance vector database for storing and querying embeddings. Built for ML applications with efficient similarity search and HNSW indexing.",
                  tech: ["Rust", "Python", "RocksDB"],
                  image: "/placeholder.jpg",
                  github: "https://github.com/sdslabs/vector-db",
                  category: "AI/ML"
                },
                {
                  title: "RusticOS",
                  description: "Modular operating system kernel written completely in Rust. Features custom memory management, process scheduling, and x86-64 architecture support.",
                  tech: ["Rust", "Assembly"],
                  image: "/placeholder.jpg",
                  github: "https://github.com/sdslabs/rusticos",
                  category: "OS Development"
                },
                {
                  title: "ValidAI",
                  description: "Decentralized AI validation system leveraging Actively Validated Services (AVS). Implements custom consensus for ML model verification on-chain. Winner of EigenLayer Infinite Prize.",
                  tech: ["Solidity", "EigenLayer", "AVS"],
                  image: "/placeholder.jpg",
                  github: "https://github.com/h4shk4t/validAI",
                  category: "Blockchain",
                  featured: true,
                  award: "EigenLayer Infinite Prize"
                },
                {
                  title: "Katana CTF Platform",
                  description: "Production-ready attack and defense CTF platform with automated infrastructure setup.",
                  tech: ["Go", "Kubernetes", "Docker"],
                  image: "/placeholder.jpg",
                  github: "https://github.com/sdslab/katana",
                  category: "Security"
                },
                {
                  title: "Proof of Optima",
                  description: "Zero-knowledge proof system for verifiable computation using zkVM and RISC-0. Demonstrates advanced cryptographic protocols for smart contracts.",
                  tech: ["RISC-0", "zkVM", "Solidity"],
                  image: "/placeholder.jpg",
                  github: "https://github.com/h4shk4t/proof-of-optima",
                  category: "Blockchain"
                }
              ].map((project, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <div className="group h-full">
                    <div className="gradient-border h-full">
                      <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 bg-black/50 h-full flex flex-col">
                        <IllustrationCard
                          src={project.image}
                          alt={project.title}
                        />
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                            <span className="text-xs px-2 py-1 rounded-full border border-purple-800 text-purple-400">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500 text-yellow-400">
                                Featured
                              </span>
                            )}
                          </div>
                          {project.award && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-500/50 w-fit">
                              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                              <span className="text-xs font-semibold text-yellow-300">{project.award}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-2 py-1 rounded-full border border-green-800 text-green-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm mt-auto"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
            
            <FadeInSection delay={0.8}>
              <div className="mt-12 text-center">
                <a
                  href="https://github.com/h4shk4t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all"
                >
                  View All Projects on GitHub
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </ParallaxSection>

      {/* Skills Section */}
      <ParallaxSection offset={-30}>
        <SkillsSection />
      </ParallaxSection>

      {/* Contact Section */}
      <ParallaxSection offset={20}>
        <ContactSection />
      </ParallaxSection>
    </div>
  )
}
