import React, { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from '../../lib/hooks/useReducedMotion'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      
      // Aplicar transform con mayor intensidad para que sea más visible
      setOffset(rate)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

export default Parallax
