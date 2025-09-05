import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { cardVariants } from '../lib/motionPresets'
import { useReducedMotion } from '../lib/hooks/useReducedMotion'

interface CardProps {
  children: React.ReactNode
  className?: string
  image?: string
  imageAlt?: string
  delay?: number
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  image,
  imageAlt = '',
  delay = 0
}) => {
  const prefersReducedMotion = useReducedMotion()

  // Si se prefiere movimiento reducido, usar variantes estáticos
  const variants = prefersReducedMotion ? {} : {
    ...cardVariants,
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      className={clsx(
        'bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl shadow-md overflow-hidden transition-all duration-300',
        'hover:shadow-xl transform-gpu hover:border-[var(--color-border-hover)]',
        image ? 'relative' : '',
        className
      )}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {image && (
        <div className="absolute inset-0">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-top"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          {/* Overlay para mejorar el contraste del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </div>
      )}
      <div className={clsx(
        image ? 'relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end' : 'p-4 sm:p-6'
      )}>
        {children}
      </div>
    </motion.div>
  )
}

export default Card


