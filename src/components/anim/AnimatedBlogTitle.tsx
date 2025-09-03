import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../lib/hooks'

interface AnimatedBlogTitleProps {
  className?: string
  delay?: number
  staggerDelay?: number
}

export const AnimatedBlogTitle: React.FC<AnimatedBlogTitleProps> = ({
  className = '',
  delay = 0,
  staggerDelay = 0.08
}) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <h1 className={className}>
        <span className="text-[#00BFFF]">Waynox</span> Lab
      </h1>
    )
  }

  const waynoxLetters = 'Waynox'.split('')
  const labLetters = ' Lab'.split('')

  return (
    <motion.h1 
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {/* Waynox - en azul eléctrico */}
      {waynoxLetters.map((letter, index) => (
        <motion.span
          key={`waynox-${index}`}
          className="text-[#00BFFF]"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50, 
              scale: 0.8,
              rotateX: -90,
              filter: 'blur(4px)'
            },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateX: 0,
              filter: 'blur(0px)'
            }
          }}
          transition={{
            duration: 0.7,
            delay: delay + (index * staggerDelay),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ 
            display: 'inline-block',
            willChange: 'opacity, transform, filter'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      
      {/* Lab - en color normal */}
      {labLetters.map((letter, index) => (
        <motion.span
          key={`lab-${index}`}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50, 
              scale: 0.8,
              rotateX: -90,
              filter: 'blur(4px)'
            },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateX: 0,
              filter: 'blur(0px)'
            }
          }}
          transition={{
            duration: 0.7,
            delay: delay + ((waynoxLetters.length + index) * staggerDelay),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ 
            display: 'inline-block',
            willChange: 'opacity, transform, filter'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default AnimatedBlogTitle
