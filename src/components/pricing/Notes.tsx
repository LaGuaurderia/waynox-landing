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
      transition={{ duration: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl p-6 lg:p-8"
      style={{
        backgroundColor: 'var(--color-bg-soft)',
        border: '1px solid var(--color-border)'
      }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex-shrink-0">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(0, 191, 255, 0.2)'
            }}
          >
            <InfoIcon 
              className="w-5 h-5" 
              style={{ color: 'var(--color-accent)' }}
            />
          </div>
        </div>
        <h3 
          className="text-xl font-bold"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h3>
      </div>

      {/* Lista de notas */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3"
          >
            <CheckIcon 
              className="w-4 h-5 mt-0.5 flex-shrink-0" 
              style={{ color: 'var(--color-accent)' }}
            />
            <span 
              className="leading-relaxed text-sm lg:text-base"
              style={{ color: 'var(--color-text)' }}
            >
              {item.includes('50%') && (
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  50% a inicio y 50% a la entrega
                </span>
              )}
              {item.includes('45 €/h') && (
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  45 €/h
                </span>
              )}
              {item.includes('PWA') && (
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  PWA
                </span>
              )}
              {item.includes('Apple/Google') && (
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Apple/Google a cargo del cliente
                </span>
              )}
              {item.includes('30 días') && (
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  30 días
                </span>
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
