'use client'

import { motion } from 'framer-motion'
 // Removed FaChartBar, FaShieldAlt
import React from "react"



export default function Benefits() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
      {/* Decorative blurred shapes with animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-800/30 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-800/30 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10 flex flex-col items-center">
        
      </div>
    </section>
  )
}



