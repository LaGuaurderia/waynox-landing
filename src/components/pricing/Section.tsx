import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  description, 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-[#F5F7FB] text-lg max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
