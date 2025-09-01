import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return // No inicializar Lenis si se prefiere movimiento reducido
    }

    // Inicializar Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Exponer la instancia globalmente para que otros componentes puedan acceder
    ;(window as any).__LENIS__ = lenisRef.current

    // Función de animación del frame
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Configurar scroll suave para anchors
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const targetElement = document.querySelector(href)
          if (targetElement && lenisRef.current) {
            lenisRef.current.scrollTo(targetElement as HTMLElement, {
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
        // Limpiar la referencia global
        delete (window as any).__LENIS__
      }
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return lenisRef.current
}
