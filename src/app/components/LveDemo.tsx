'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LveDemo() {
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-400 mb-4">
            Try It Yourself
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience our face recognition technology in action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-800/50"
        >
          {/* Camera Feed Container */}
          <div className="aspect-video mb-6 bg-gray-950/80 rounded-xl flex items-center justify-center overflow-hidden">
            <p className="text-gray-500">Camera feed will appear here</p>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Start Camera
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Upload Image
            </motion.button>
          </div>

          {/* Detection Results */}
          <div className="bg-gray-950/50 rounded-xl p-4">
            <h3 className="text-purple-400 font-medium mb-2">Detection Results</h3>
            <p className="text-gray-400 text-sm">
              No faces detected yet. Start the camera or upload an image to begin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
