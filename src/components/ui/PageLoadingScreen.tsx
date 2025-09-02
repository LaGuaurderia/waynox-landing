import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface PageLoadingScreenProps {
  children: React.ReactNode
  typingSpeed?: number
  message?: string
}

const PageLoadingScreen: React.FC<PageLoadingScreenProps> = ({ 
  children, 
  typingSpeed = 80, 
  message = "Waynox Studio, del boceto al código." 
}) => {
  const location = useLocation()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [shouldShowContent, setShouldShowContent] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const typingRef = useRef<NodeJS.Timeout | null>(null)
  const cursorRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    console.log('PageLoadingScreen: Cambio de ruta detectado:', location.pathname)
    
    // Limpiar timers anteriores
    if (typingRef.current) clearInterval(typingRef.current)
    if (cursorRef.current) clearInterval(cursorRef.current)
    
    // Mostrar pantalla de carga para cada navegación
    setIsTransitioning(true)
    setDisplayText('')
    setShouldShowContent(false)
    setShowCursor(true)
    
    // Efecto de typing
    let currentIndex = 0
    typingRef.current = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayText(message.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        if (typingRef.current) clearInterval(typingRef.current)
        console.log('PageLoadingScreen: Typing completado, esperando antes de fade-out')
        
        // Esperar antes de hacer fade-out
        setTimeout(() => {
          console.log('PageLoadingScreen: Iniciando fade-out')
          setShouldShowContent(true)
          setIsTransitioning(false)
        }, 600)
      }
    }, typingSpeed)

    // Cursor parpadeante
    cursorRef.current = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      if (typingRef.current) clearInterval(typingRef.current)
      if (cursorRef.current) clearInterval(cursorRef.current)
    }
  }, [location.pathname, message, typingSpeed])

  console.log('PageLoadingScreen: Renderizando, isTransitioning:', isTransitioning, 'shouldShowContent:', shouldShowContent, 'displayText:', displayText)

  return (
    <>
      <AnimatePresence>
        {isTransitioning && !shouldShowContent && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#111] flex items-center justify-center"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.95,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            transition={{ duration: 0.4 }}
            aria-hidden={shouldShowContent}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                role="status"
                aria-live="polite"
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
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default PageLoadingScreen
