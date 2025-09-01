import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotionSafe } from '../../lib/anim/hooks';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={false}
            animate={{
              backgroundColor: isOpen ? '#f8fafc' : '#ffffff'
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-gray-900">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="text-gray-500"
              >
                ▼
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    transition: {
                      opacity: { duration: prefersReducedMotion ? 0 : 0.3 },
                      height: { duration: prefersReducedMotion ? 0 : 0.3, ease: [0.2, 0.8, 0.2, 1] }
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    transition: {
                      opacity: { duration: prefersReducedMotion ? 0 : 0.2 },
                      height: { duration: prefersReducedMotion ? 0 : 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
