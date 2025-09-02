import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InitialLoadingScreenProps {
  children: React.ReactNode
  typingSpeed?: number
  message?: string
}

const InitialLoadingScreen: React.FC<InitialLoadingScreenProps> = ({ 
  children, 
  typingSpeed = 100, 
  message = "Waynox Studio, del boceto al código." 
}) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [shouldShowContent, setShouldShowContent] = useState(false)
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false)

  useEffect(() => {
    console.log('InitialLoadingScreen: useEffect ejecutándose')
    
    // Verificar si ya se cargó antes
    const hasLoaded = localStorage.getItem('waynox-has-loaded')
    console.log('InitialLoadingScreen: hasLoaded en localStorage:', hasLoaded)
    
    if (hasLoaded) {
      console.log('InitialLoadingScreen: Ya se cargó antes, mostrando contenido directamente')
      setHasLoadedBefore(true)
      setShouldShowContent(true)
      return
    }

    console.log('InitialLoadingScreen: Primera carga, iniciando animación de typing')
    
    // Efecto de typing
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayText(prev => prev + message[currentIndex])
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
        console.log('InitialLoadingScreen: Typing completado, esperando antes de fade-out')
        
        // Esperar antes de hacer fade-out
        setTimeout(() => {
          console.log('InitialLoadingScreen: Iniciando fade-out')
          setShouldShowContent(true)
          // Marcar como cargado
          localStorage.setItem('waynox-has-loaded', 'true')
        }, 800)
      }
    }, typingSpeed)

    // Cursor parpadeante
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [message, typingSpeed])

  // Si ya cargó antes, mostrar contenido directamente
  if (hasLoadedBefore) {
    console.log('InitialLoadingScreen: Renderizando contenido directamente (ya cargó antes)')
    return <>{children}</>
  }

  console.log('InitialLoadingScreen: Renderizando pantalla de carga, shouldShowContent:', shouldShowContent)

  return (
    <>
      <AnimatePresence>
        {!shouldShowContent && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#111] flex items-center justify-center"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.95,
              transition: { duration: 0.7, ease: "easeInOut" }
            }}
            transition={{ duration: 0.5 }}
            aria-hidden={shouldShowContent}
          >
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                role="status"
                aria-live="polite"
              >
                <span className="text-[#1E90FF]">Waynox</span>
                <span className="text-white"> Studio, del boceto al código.</span>
                {showCursor && (
                  <motion.span
                    className="inline-block w-1 h-12 bg-white ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {shouldShowContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}

export default InitialLoadingScreen
