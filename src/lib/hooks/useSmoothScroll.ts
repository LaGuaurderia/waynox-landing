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

    // Inicializar Lenis con configuración más visible
    lenisRef.current = new Lenis({
      duration: 0, // Duración más larga para que sea más visible
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Easing más suave y visible
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reducir para que sea más suave
      touchMultiplier: 1.5,
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

    // Configurar scroll suave para anchors con efecto más visible
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
              duration: 0, // Duración más larga para el efecto
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t))
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Añadir efecto visual al scroll
    const addScrollEffects = () => {
      const sections = document.querySelectorAll('section, .section')
      sections.forEach((section) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('section-visible')
            }
          })
        }, { threshold: 0.1 })
        
        observer.observe(section)
      })
    }

    // Ejecutar después de que el DOM esté listo
    setTimeout(addScrollEffects, 100)

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
