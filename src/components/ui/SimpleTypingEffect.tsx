import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SimpleTypingEffectProps {
  text: string
  speed?: number
  onComplete?: () => void
}

const SimpleTypingEffect: React.FC<SimpleTypingEffectProps> = ({ 
  text, 
  speed = 100,
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Cursor parpadeante
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (onComplete) {
      // Typing completado
      setTimeout(onComplete, 500)
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <div className="text-center">
      <motion.div
        className="text-3xl md:text-5xl font-bold text-white leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {displayText}
        {showCursor && (
          <motion.span
            className="inline-block w-1 h-10 bg-white ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    </div>
  )
}

export default SimpleTypingEffect
