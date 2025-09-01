import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '../../lib/hooks/useReducedMotion'
import { fadeInUp } from '../../lib/motionPresets'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
  className?: string
  threshold?: number
  rootMargin?: string
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const prefersReducedMotion = useReducedMotion()

  // Si se prefiere movimiento reducido, no animar
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Variants basados en la dirección
  const getVariants = (): Variants => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }

    switch (direction) {
      case 'up':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 20 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case 'down':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -20 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case 'left':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -30 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case 'right':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 30 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case 'none':
        return baseVariants
      default:
        return fadeInUp
    }
  }

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold, rootMargin }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
