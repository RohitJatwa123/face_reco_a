'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUserClock, FaStore, FaLock, FaHospital, FaCalendarCheck } from 'react-icons/fa'

const industries = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-blue-500" />,
    name: "Security & Surveillance",
    points: [
      "Real-time monitoring for unauthorized access.",
      "Smart city surveillance in public or restricted areas."
    ]
  },
  {
    icon: <FaUserClock className="w-8 h-8 text-blue-500" />,
    name: "Smart Attendance Systems",
    points: [
      "Automatically marks attendance when individuals are recognized.",
      "Useful for schools, universities, and corporate offices."
    ]
  },
  {
    icon: <FaStore className="w-8 h-8 text-blue-500" />,
    name: "Retail Analytics",
    points: [
      "Identifies repeat customers for personalized services.",
      "Tracks customer movement patterns using body measurements."
    ]
  },
  {
    icon: <FaLock className="w-8 h-8 text-blue-500" />,
    name: "Access Control Systems",
    points: [
      "Grants or denies access based on recognized individuals.",
      "Integrates with door lock systems for smart building entry."
    ]
  },
  {
    icon: <FaHospital className="w-8 h-8 text-blue-500" />,
    name: "Healthcare Monitoring",
    points: [
      "Helps track and monitor patients, especially those with memory disorders.",
      "Used in elderly care or critical patient monitoring."
    ]
  },
  {
    icon: <FaCalendarCheck className="w-8 h-8 text-blue-500" />,
    name: "Event Management",
    points: [
      "Streamlines guest check-in by recognizing registered participants.",
      "Enhances event security by flagging unknown faces."
    ]
  }
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Industry We Use
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore how our facial recognition technology transforms various sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }} // Changed from y: 20 to x: -50 for side slide
              whileInView={{ opacity: 1, x: 0 }} // Changed from y: 0 to x: 0 for side slide
              
              transition={{ duration: 0.5, delay: index * 0.15 }} // Adjusted duration and delay for a smoother staggered slide
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'}} whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0], y: -10, transition: { duration: 0.3, ease: 'easeInOut' } }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20" style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'}}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
              </div>
              <ul className="space-y-3">
                {industry.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}