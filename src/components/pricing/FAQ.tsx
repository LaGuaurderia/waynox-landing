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
      transition={{ duration: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      {title && (
        <div className="flex items-center space-x-3 mb-6">
          <HelpCircleIcon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-blue" />
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-text)]">{title}</h2>
        </div>
      )}
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white/60 dark:bg-neutral-900/40 shadow-sm hover:border-[#00BFFF] transition-colors duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
                              className="w-full px-4 lg:px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--color-bg-soft)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-opacity-50"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-[var(--color-text)] font-medium pr-4 text-sm lg:text-base">{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0 }}
              >
                <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue flex-shrink-0" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0, ease: 'easeInOut' }}
                  className="overflow-hidden"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-4 lg:px-6 pb-4">
                    <p className="text-[var(--color-text-muted)] leading-relaxed text-sm lg:text-base">{item.answer}</p>
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
