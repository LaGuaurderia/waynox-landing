import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface LoadingScreenProps {
  children: React.ReactNode
  typingSpeed?: number
  message?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  children, 
  typingSpeed = 100, 
  message = "Waynox Studio, del boceto al código." 
}) => {
  const location = useLocation()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [shouldShowContent, setShouldShowContent] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    console.log('LoadingScreen: useEffect ejecutándose para ruta:', location.pathname)
    
    // Resetear estado para cada nueva ruta
    setDisplayText('')
    setIsTypingComplete(false)
    setShouldShowContent(false)
    setShowCursor(true)
    
    // Solo mostrar pantalla de carga en la carga inicial
    if (isInitialLoad) {
      console.log('LoadingScreen: Carga inicial, iniciando animación de typing')
      
      // Efecto de typing
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < message.length) {
          setDisplayText(prev => prev + message[currentIndex])
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTypingComplete(true)
          console.log('LoadingScreen: Typing completado, esperando antes de fade-out')
          
          // Esperar antes de hacer fade-out
          setTimeout(() => {
            console.log('LoadingScreen: Iniciando fade-out')
            setShouldShowContent(true)
            setIsInitialLoad(false)
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
    } else {
      // Para navegaciones posteriores, mostrar contenido directamente
      setShouldShowContent(true)
    }
  }, [message, typingSpeed, isInitialLoad])

  // Si no es la carga inicial, mostrar contenido directamente
  if (!isInitialLoad) {
    console.log('LoadingScreen: Renderizando contenido directamente (no es carga inicial)')
    return <>{children}</>
  }

  console.log('LoadingScreen: Renderizando pantalla de carga, shouldShowContent:', shouldShowContent)

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

export default LoadingScreen
