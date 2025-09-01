import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../lib/hooks/useReducedMotion'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  style?: React.CSSProperties
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Si se prefiere movimiento reducido, no aplicar parallax
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, speed * 100]
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, y }}
    >
      {children}
    </motion.div>
  )
}

export default Parallax
