import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const usePageTransition = () => {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    if (currentPath !== location.pathname) {
      setIsTransitioning(true)
      
      // Transición de salida
      const exitTimer = setTimeout(() => {
        setCurrentPath(location.pathname)
        
        // Transición de entrada
        const enterTimer = setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
        
        return () => clearTimeout(enterTimer)
      }, 300)
      
      return () => clearTimeout(exitTimer)
    }
  }, [location.pathname, currentPath])

  return {
    isTransitioning,
    currentPath,
    isNewPage: currentPath !== location.pathname
  }
}
