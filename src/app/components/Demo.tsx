'use client'

import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section
      id="demo"
      className="relative py-20 min-h-[600px] bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 overflow-hidden flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(17,24,39,0.7), rgba(17,24,39,0.9)), url('https://cdn.dribbble.com/userupload/40678226/file/original-cdbfe62c60f5e44b0faf7f71521ccb24.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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

      <div className="w-full flex flex-col lg:flex-row items-center gap-16 relative z-10 px-6">
        <div className="flex-1" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 lg:pr-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.location.href = '#demo'}>
            Instant Recognition,<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real-time Analysis
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Watch our AI in action through interactive demonstrations. Experience real-time face detection and recognition capabilities powered by advanced neural networks.
          </p>
          <div className="grid gap-4">
            {['Multi-face detection', 'Emotion recognition', 'Real-time processing', 'API integration ready'].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="flex items-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:bg-gray-800/70 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-100 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex-1" />
      </div>

      {/* Decorative transition to Industries */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}