import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../lib/hooks'

interface StaggeredHeadingProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export const StaggeredHeading: React.FC<StaggeredHeadingProps> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05
}) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <h1 className={className}>{text}</h1>
  }

  const letters = text.split('')

  return (
    <motion.h1 
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50, 
              scale: 0.8,
              rotateX: -90 
            },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateX: 0 
            }
          }}
          transition={{
            duration: 0.6,
            delay: delay + (index * staggerDelay),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ 
            display: 'inline-block',
            willChange: 'opacity, transform'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default StaggeredHeading
