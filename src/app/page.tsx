'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Industries from './components/Industries'
import Demo from './components/Demo'
import LiveDemoSection from './components/LiveDemo';
import { animateScroll as scroll } from 'react-scroll'
// import Industries from './components/Industries'

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    scroll.scrollToTop({
      duration: 0,
      smooth: 'easeInOutQuart',
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
       
        <HowItWorks />
        <Features />
        <Benefits />
        <Industries/>
        <Demo />
        <LiveDemoSection />
        {/* Add more sections as needed */}
      </main>
    </div>
  )
}