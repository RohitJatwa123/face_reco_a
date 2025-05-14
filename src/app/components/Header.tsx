

import Link from 'next/link'
import { FaRegGrinAlt } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-purple-700/90 backdrop-blur-sm border-b border-purple-500">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FaRegGrinAlt className="text-white text-xl" />
            <span className="text-xl font-semibold text-white">FaceX</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {['features', 'how-it-works', 'industries', 'demo'].map((link) => (
              <Link 
                key={link}
                href={`#${link}`} 
                className="text-purple-300 hover:text-white transition-colors"
              >
                {link.replace('-', ' ')}
              </Link>
            ))}
          </nav>
          
          <button className="md:hidden text-purple-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}