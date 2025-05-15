'use client'

import { motion } from 'framer-motion'
import { FaUserClock, FaUserEdit, FaCamera, FaDatabase, FaCubes } from 'react-icons/fa'

const features = [
  {
    icon: <FaUserClock className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />,
    title: "Multi-Person Recognition",
    description: (
      <>
        Identifies multiple individuals simultaneously within a single frame.<br />
      </>
    )
  },
  {
    icon: <FaCamera className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-green-300 transition-all duration-300" />,
    title: "Video-Based Recognition",
    description: (
      <>
        Processes real-time video streams for continuous recognition.<br />
        Minimal user input is required after the initial training.
      </>
    )
  },
  {
    icon: <FaDatabase className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300" />,
    title: "Automatic Data Storage",
    description: (
      <>
        Stores labeled images and identity details.<br />
        Ensures quick model updates and easy retraining.
      </>
    )
  },
  {
    icon: <FaCubes className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300" />,
    title: "Modular and Scalable Design",
    description: (
      <>
        Easily supports additional individuals and new use cases.<br />
        Can be extended into full-fledged systems like attendance or security tools.
      </>
    )
  },
  {
    icon: <FaUserEdit className="w-12 h-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Facial Measurement Analysis",
    description: (
      <>
        Extracts specific measurements like eye-to-nose distance, jaw length, and shoulder width.<br />
        Builds a unique identity profile for each person based on these metrics.
      </>
    )
  },
  {
    icon: <FaUserClock className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-teal-300 transition-all duration-300" />,
    title: "Interactive Training Workflow",
    description: (
      <>
        Prompts for user names when new faces are detected.<br />
        Associates names with the captured features and stores them for model training.
      </>
    )
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 md:py-40 bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 max-w-3xl text-center self-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 md:mb-6 tracking-tight drop-shadow-lg">
            Key Features
          </h2>
        </motion.div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group bg-gradient-to-b from-gray-900/80 to-blue-950/80 border border-blue-800/50 shadow-lg h-80 min-w-[260px] px-10 py-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-400/80 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15 
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: idx * 0.1
                }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
            >
              {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {feature.title}
              </h3>
              <div className="text-gray-300 text-base group-hover:text-white transition-all duration-300">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}