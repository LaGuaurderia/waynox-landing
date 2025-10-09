import { useEffect, useRef } from 'react'
import { useLocation, useInRouterContext } from 'react-router-dom'
import Lenis from 'lenis'

const ScrollToTop = () => {
  const inRouter = useInRouterContext()
  const location = inRouter ? useLocation() : null
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!inRouter) return

    // Buscar instancia de Lenis en el DOM
    const lenisInstance = (window as any).__LENIS__
    if (lenisInstance) {
      lenisRef.current = lenisInstance
    }

    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (lenisRef.current && !prefersReducedMotion) {
      // Usar Lenis para scroll suave
      lenisRef.current.scrollTo(0, {
        duration: 0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    } else {
      // Fallback a scroll nativo
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }, [inRouter, location?.pathname])

  return null
}

export default ScrollToTop


