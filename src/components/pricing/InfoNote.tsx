import React from 'react'
import { motion } from 'framer-motion'
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react'

interface InfoNoteProps {
  title: string
  items: string[]
  type?: 'info' | 'warning' | 'success'
  className?: string
}

interface PricingInfoProps {
  className?: string
}

const noteStyles = {
  info: {
    icon: InfoIcon,
    bgColor: 'rgba(0, 191, 255, 0.1)',
    borderColor: 'var(--color-accent)',
    iconColor: 'var(--color-accent)'
  },
  warning: {
    icon: AlertTriangleIcon,
    bgColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: '#f97316',
    iconColor: '#f97316'
  },
  success: {
    icon: CheckCircleIcon,
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#10b981',
    iconColor: '#10b981'
  }
}

export const InfoNote: React.FC<InfoNoteProps> = ({ 
  title, 
  items, 
  type = 'info',
  className = '' 
}) => {
  const style = noteStyles[type]
  const IconComponent = style.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border ${className}`}
      style={{
        backgroundColor: style.bgColor,
        borderColor: style.borderColor
      }}
    >
      <div className="flex items-start space-x-3 mb-4">
        <IconComponent 
          className="w-6 h-6 mt-0.5 flex-shrink-0" 
          style={{ color: style.iconColor }}
        />
        <h3 
          className="text-lg font-semibold"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span 
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: style.iconColor }}
            ></span>
            <span 
              className="text-sm"
              style={{ color: 'var(--color-text)' }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export const PricingInfo: React.FC<PricingInfoProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      <div 
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: 'white'
        }}
      >
        <span>Precios sin IVA</span>
      </div>
    </motion.div>
  )
}

export default InfoNote
