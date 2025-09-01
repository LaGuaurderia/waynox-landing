import React from 'react'
import { CheckIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureItemProps {
  text: string
  className?: string
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={`flex items-start space-x-3 py-2 ${className}`}
    >
      <CheckIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
      <span className="text-[#F5F7FB] text-sm leading-relaxed">{text}</span>
    </motion.div>
  )
}

export default FeatureItem
