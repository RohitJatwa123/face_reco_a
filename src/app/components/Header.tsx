

import Link from 'next/link'
import { FaRegGrinAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrollingDown = currentScrollPos > prevScrollPos

      setVisible(() => {
        if (currentScrollPos < 100) return true
        return !isScrollingDown
      })
      
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header className={`sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 transform transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg group-hover:rotate-12 transition-transform">
              <FaRegGrinAlt className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">FaceX</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['features', 'how-it-works', 'industries', 'demo'].map((link) => (
              <Link 
                key={link}
                href={`#${link}`} 
                className="text-gray-300 hover:text-purple-400 transition-all relative group"
              >
                {link.replace('-', ' ')}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          
          <button className="md:hidden text-gray-300 hover:text-purple-400 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}