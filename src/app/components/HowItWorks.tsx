'use client'
import { motion } from 'framer-motion'
import { FaCamera, FaServer, FaMobileAlt, FaCheckCircle } from 'react-icons/fa'

const steps = [
  {
    icon: <FaCamera className="w-8 h-8 text-blue-500" />,
    title: "Capture Image",
    description: "The system captures facial images via camera or uploaded photos."
  },
  {
    icon: <FaServer className="w-8 h-8 text-purple-500" />,
    title: "Process Data",
    description: "Our AI extracts facial features and creates a unique biometric template."
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-green-500" />,
    title: "Match & Verify",
    description: "The system compares the template against stored profiles in the database."
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-pink-500" />,
    title: "Get Results",
    description: "Instant verification results with confidence scores are returned."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple integration with powerful results. Get started in just a few steps.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-24 h-1 w-2/3 bg-gradient-to-r from-blue-500/20 via-purple-500 to-pink-500/20 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center p-8 bg-gray-800/40 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div className={`mb-6 p-5 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-blue-600' :
                    index === 1 ? 'from-purple-500 to-purple-600' :
                    index === 2 ? 'from-green-500 to-green-600' :
                    'from-pink-500 to-pink-600'
                  } rounded-2xl shadow-lg`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-14">
                    <svg className="w-24 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}