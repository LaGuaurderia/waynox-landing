import React from 'react'
import { motion } from 'framer-motion'

type BadgeProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', style = {} }) => {
  return (
    <motion.span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border border-transparent ${className}`}
      style={{
        backgroundColor: 'var(--color-accent)',
        color: 'white',
        ...style
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0 }}
    >
      {children}
    </motion.span>
  )
}

export default Badge


