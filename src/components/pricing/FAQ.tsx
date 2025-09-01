import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

export const FAQ: React.FC<FAQProps> = ({ items, title = "Preguntas Frecuentes" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      {title && (
        <div className="flex items-center space-x-3 mb-6">
          <HelpCircleIcon className="w-6 h-6 lg:w-8 lg:h-8 text-[#1E90FF]" />
          <h2 className="text-xl lg:text-2xl font-bold text-white">{title}</h2>
        </div>
      )}
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-[#444] rounded-lg overflow-hidden bg-[#222] shadow-sm hover:border-[#1E90FF] transition-colors duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 lg:px-6 py-4 text-left flex items-center justify-between hover:bg-[#333] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:ring-opacity-50"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-white font-medium pr-4 text-sm lg:text-base">{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5 text-[#1E90FF] flex-shrink-0" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-4 lg:px-6 pb-4">
                    <p className="text-[#F5F7FB] leading-relaxed text-sm lg:text-base">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FAQ
