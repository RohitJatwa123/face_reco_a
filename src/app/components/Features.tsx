'use client' 
 
 import { motion } from 'framer-motion' 
 import { FaUserShield, FaClock, FaChartLine, FaRobot } from 'react-icons/fa' 
 
 const features = [ 
   { 
     icon: <FaUserShield className="w-8 h-8 text-blue-500" />, 
     title: "Enhanced Security", 
     description: "Prevent unauthorized access with our state-of-the-art facial recognition technology." 
   }, 
   { 
     icon: <FaClock className="w-8 h-8 text-purple-500" />, 
     title: "Real-time Processing", 
     description: "Instant recognition with latency under 500ms for seamless user experiences." 
   }, 
   { 
     icon: <FaChartLine className="w-8 h-8 text-green-500" />, 
     title: "99.9% Accuracy", 
     description: "Industry-leading accuracy rates even in challenging conditions." 
   }, 
   { 
     icon: <FaRobot className="w-8 h-8 text-pink-500" />, 
     title: "AI-Powered", 
     description: "Self-learning algorithms that improve over time with more data." 
   } 
 ] 
 
 export default function Features() { 
   return ( 
     <section id="features" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"> 
       {/* Decorative background circles */} 
       <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" /> 
       <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" /> 
 
       <div className="container mx-auto px-8 relative z-10 flex flex-col items-center"> 
  
 
         {/* Industry Use Cases 
         <div className="mt-24 w-full max-w-4xl mx-auto"> 
           <motion.div 
             initial={{ opacity: 0, y: 40 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.7 }} 
             viewport={{ once: true }} 
             className="text-center mb-12" 
           > 
             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"> 
               Industry Use Cases 
             </h2> 
             <p className="text-xl text-gray-300"> 
               Explore various applications of our advanced facial recognition technology. 
             </p> 
           </motion.div> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.1 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Security & Surveillance</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Real-time monitoring for unauthorized access.</li> 
                 <li>Smart city surveillance in public or restricted areas.</li> 
               </ul> 
             </motion.div> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.2 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Smart Attendance Systems</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Automatically marks attendance when individuals are recognized.</li> 
                 <li>Useful for schools, universities, and corporate offices.</li> 
               </ul> 
             </motion.div> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.3 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Retail Analytics</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Identifies repeat customers for personalized services.</li> 
                 <li>Tracks customer movement patterns using body measurements.</li> 
               </ul> 
             </motion.div> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.4 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Access Control Systems</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Grants or denies access based on recognized individuals.</li> 
                 <li>Integrates with door lock systems for smart building entry.</li> 
               </ul> 
             </motion.div> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.5 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Healthcare Monitoring</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Helps track and monitor patients, especially those with memory disorders.</li> 
                 <li>Used in elderly care or critical patient monitoring.</li> 
               </ul> 
             </motion.div> 
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               whileHover={{ y: -5, transition: { duration: 0.2 } }} 
               transition={{ duration: 0.5, delay: 0.6 }} 
               viewport={{ once: true }} 
               className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-500/10 cursor-pointer h-full flex flex-col" 
             > 
               <h3 className="text-2xl font-bold text-white mb-2">Event Management</h3> 
               <ul className="list-disc list-inside text-gray-300 text-base space-y-1 flex-grow"> 
                 <li>Streamlines guest check-in by recognizing registered participants.</li> 
                 <li>Enhances event security by flagging unknown faces.</li> 
               </ul> 
             </motion.div>  */}
           {/* </div> 
         </div>  */}
       </div> 
     </section> 
   ) 
 }
