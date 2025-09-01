import React from 'react'
import { motion } from 'framer-motion'
import { InfoIcon, CheckIcon } from 'lucide-react'

interface NotesProps {
  items: string[]
  title?: string
}

export const Notes: React.FC<NotesProps> = ({ items, title = "Notas importantes" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#222] border border-[#444] rounded-2xl p-6 lg:p-8"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#1E90FF] bg-opacity-20 rounded-full flex items-center justify-center">
            <InfoIcon className="w-5 h-5 text-[#1E90FF]" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Lista de notas */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3"
          >
            <CheckIcon className="w-4 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
            <span className="text-[#F5F7FB] leading-relaxed text-sm lg:text-base">
              {item.includes('50%') && (
                <span className="text-[#1E90FF] font-semibold">50% a inicio y 50% a la entrega</span>
              )}
              {item.includes('45 €/h') && (
                <span className="text-[#1E90FF] font-semibold">45 €/h</span>
              )}
              {item.includes('PWA') && (
                <span className="text-[#1E90FF] font-semibold">PWA</span>
              )}
              {item.includes('Apple/Google') && (
                <span className="text-[#1E90FF] font-semibold">Apple/Google a cargo del cliente</span>
              )}
              {item.includes('30 días') && (
                <span className="text-[#1E90FF] font-semibold">30 días</span>
              )}
              {!item.includes('50%') && !item.includes('45 €/h') && !item.includes('PWA') && !item.includes('Apple/Google') && !item.includes('30 días') && item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Notes
