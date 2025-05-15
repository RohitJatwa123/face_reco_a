

'use client'

import Link from 'next/link'
import { FaRegGrinAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'key-features', 'industry', 'live-demo']
      const scrollPosition = window.scrollY

      setIsScrolled(scrollPosition > 50)

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-900/95' : 'bg-purple-700/90'} backdrop-blur-sm border-b border-purple-500/50`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaRegGrinAlt className="text-white text-2xl group-hover:text-purple-300 transition-colors" />
              </motion.div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">FaceX</span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'how-it-works', 'key-features', 'industry', 'live-demo'].map((link) => (
              <motion.div
                key={link}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={link === 'key-features' ? '#benefits' : link === 'live-demo' ? '#try-it-yourself' : `#${link}`}
                  className={`relative text-sm font-medium tracking-wide ${activeSection === link ? 'text-white' : 'text-purple-300'} hover:text-white transition-colors duration-300`}
                  onMouseEnter={() => {
                    const section = document.getElementById(link === 'key-features' ? 'benefits' : link === 'live-demo' ? 'try-it-yourself' : link);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {link === 'live-demo' ? 'LiveDemo' : link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  {activeSection === link && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full mt-1 h-0.5 w-full bg-gradient-to-r from-purple-400 to-blue-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <motion.button 
            className="md:hidden text-purple-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}