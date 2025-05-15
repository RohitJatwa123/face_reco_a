// 'use client'

// import { motion } from 'framer-motion'
// import { FaArrowRight } from 'react-icons/fa'

// export default function Hero() {
//   return (
//     <section className="relative py-32 md:py-48 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
//       {/* GIF Background */}
//       <div className="absolute inset-0 opacity-20">
//         <img 
//           src="https://wphelp.blog/wp-content/uploads/2020/07/face-recog-header.gif" 
//           alt="Face recognition animation"
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 opacity-40 [background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#0f6fff_100%)]" />
      
//       {/* Grid overlay */}
//       <div className="absolute inset-0 opacity-50">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       </div>

//       <div className="container mx-auto px-8 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight"
//           >
//             Advanced Face Recognition for the Modern World
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed"
//           >
//             Secure, accurate, and lightning-fast facial recognition technology powered by AI.
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
//               <span className="text-white">Get Started</span>
//               <FaArrowRight className="ml-3 text-white group-hover:translate-x-1 transition-transform" />
//               <div className="absolute inset-0 border border-purple-400/30 rounded-xl group-hover:border-purple-400/50 transition-all" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
// import AnimatedText from './AnimatedText'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://wphelp.blog/wp-content/uploads/2020/07/face-recog-header.gif"
          alt="Hero Background Animation"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          priority
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-1"></div>
      </div>

      
      <div className="container mx-auto px-6 relative z-10"> {/* Ensure content is above overlay */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">
              AI-Powered Technology
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {/* <AnimatedText text="Next-Gen Face Recognition" /> */}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
          >
            Reliable, precise, and ultra-fast facial recognition built for modern enterprises and developers
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
            <a href="#try-it-yourself" className="px-8 py-4 bg-transparent border border-blue-400 hover:bg-blue-900/30 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-block">
              Live Demo
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
