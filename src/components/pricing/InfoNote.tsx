import React from 'react'
import { motion } from 'framer-motion'
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react'

interface InfoNoteProps {
  title: string
  items: string[]
  type?: 'info' | 'warning' | 'success'
  className?: string
}

const noteStyles = {
  info: {
    icon: InfoIcon,
    bgColor: 'bg-[#D3E0D1]',
    borderColor: 'border-[#D3E0D1]',
    iconColor: 'text-[#A3B18A]'
  },
  warning: {
    icon: AlertTriangleIcon,
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-500'
  },
  success: {
    icon: CheckCircleIcon,
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600'
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
      className={`p-6 rounded-xl border ${style.bgColor} ${style.borderColor} ${className}`}
    >
      <div className="flex items-start space-x-3 mb-4">
        <IconComponent className={`w-6 h-6 ${style.iconColor} mt-0.5 flex-shrink-0`} />
        <h3 className="text-lg font-semibold text-[#5E5E5E]">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2 text-[#5E5E5E]">
            <span className="w-2 h-2 bg-[#A3B18A] rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default InfoNote
