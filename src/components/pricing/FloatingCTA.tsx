import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircleIcon } from 'lucide-react'

interface FloatingCTAProps {
  text: string
  link: string
  className?: string
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ 
  text, 
  link, 
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0, delay: 0 }}
      className={`lg:hidden fixed bottom-6 right-6 z-50 ${className}`}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = link}
        className="bg-[#A3B18A] hover:bg-[#8F9F78] text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 transition-all duration-300"
      >
        <MessageCircleIcon className="w-5 h-5" />
        <span className="font-semibold">{text}</span>
      </motion.button>
    </motion.div>
  )
}

export default FloatingCTA
