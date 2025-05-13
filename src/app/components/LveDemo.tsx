'use client';

import { motion } from 'framer-motion';
// import { CameraIcon } from '@heroicons/react/24/outline';

export default function LiveDemoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
            Try It Yourself
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Experience our face recognition technology in action
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-sm border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-8 relative overflow-hidden group border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                {/* <CameraIcon className="w-16 h-16 text-purple-400 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" /> */}
                <p className="text-blue-200">Camera feed will appear here</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <CameraIcon className="w-5 h-5" /> */}
                Start Camera
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Upload Image
              </motion.button>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Detection Results</h3>
              <p className="text-blue-200/70">No faces detected yet. Start the camera or upload an image to begin.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Remove the duplicate export default function Page() from this file.
// To use LiveDemoSection, import and use it in your page file (e.g., page.tsx).