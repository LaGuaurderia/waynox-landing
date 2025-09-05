import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/tarifas', label: 'Tarifas' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const location = useLocation()
  const navigate = useNavigate()
  const navbarRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    const handler = () => {
      // Calcular progreso del scroll
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      // Enfocar el primer enlace del menú móvil
      const firstLink = menuRef.current?.querySelector('a')
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100)
      }
    } else {
      document.body.style.overflow = ''
      setActiveDropdown(null)
    }
  }, [open])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
      
      if (e.key === 'Tab' && open) {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements) {
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])


  return (
    <>
      {/* Indicador de progreso */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-brand-blue z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
      
      <header 
        ref={navbarRef}
        className="navbar fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        role="navigation" 
        aria-label="Principal"
      >
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo-container">
            <Logo />
          </div>

          {/* Navegación central - Solo visible en desktop */}
          <nav className="nav-links" aria-label="Enlaces principales">
            {links.map((link) => (
              <div
                key={link.to}
                className="relative"
              >
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => `nav-link group relative flex items-center justify-center px-4 lg:px-6 py-3 lg:py-4 rounded-lg transition-all duration-300 text-sm lg:text-base font-medium ${isActive ? 'active text-brand-blue bg-brand-blue/10 shadow-md' : 'text-brand-gray-light hover:text-white hover:bg-brand-blue/20 hover:shadow-lg'}`}
                  aria-label={`Ir a ${link.label}`}
                >
                  {/* Efecto de fondo animado */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue/0 via-brand-blue/10 to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                  
                  {/* Contenido del enlace */}
                  <span className="relative z-10 flex items-center gap-2">
                    {link.label}
                    {link.to === location.pathname && (
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                    )}
                  </span>
                  
                  {/* Indicador de página activa */}
                  {link.to === location.pathname && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-blue/60 rounded-full" />
                  )}
                  
                  {/* Efecto de partículas en hover */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-brand-blue/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-1" />
                    <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-brand-blue/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-2" />
                  </div>
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Lado derecho - CTA y toggle de tema */}
          <div className="nav-right">
            {/* Botón CTA - Solo visible en desktop */}
            <div className="hidden md:block">
              <Button 
                variant="glow" 
                size="md" 
                className="nav-cta text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3" 
                onClick={() => navigate('/contacto')}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcula tu presupuesto
                </span>
              </Button>
            </div>

            {/* Toggle de tema */}
            <ThemeToggle />

            {/* Botón de menú móvil */}
            <button 
              className="menu-btn group md:hidden p-2 lg:p-3 rounded-lg hover:bg-brand-blue/20 transition-all duration-300 hover:shadow-lg" 
              aria-expanded={open} 
              aria-controls="mobile-menu" 
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <div className={`relative transition-all duration-300 ${open ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-6 lg:h-6 relative z-10">
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-all duration-300"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-all duration-300"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-all duration-300"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {open && (
          <div 
            ref={menuRef}
            id="mobile-menu" 
            role="dialog" 
            aria-modal="true" 
            aria-label="Menú de navegación"
            className="container bg-brand-black-soft/95 backdrop-blur-sm border-t border-brand-gray"
            style={{ paddingBottom: 16 }}
          >
            <div className="card" style={{ padding: 16, marginTop: 12 }}>
              {/* Breadcrumb móvil */}
              <div className="mb-4 p-3 bg-brand-black/50 rounded-lg border border-brand-gray/30">
                <div className="text-xs text-brand-gray-light mb-1">Estás en:</div>
                <div className="text-black font-medium text-base">
                  {links.find(l => l.to === location.pathname)?.label || 'Inicio'}
                </div>
              </div>
              
              {links.map((link) => (
                <div
                  key={link.to}
                >
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => `nav-link-mobile group relative flex items-center justify-center py-4 px-4 rounded-lg transition-all duration-300 ${isActive ? 'active bg-brand-blue/20 text-brand-blue border border-brand-blue/30 shadow-md' : 'hover:bg-brand-blue/10 hover:text-white hover:shadow-lg'}`} 
                    onClick={() => setOpen(false)}
                    aria-label={`Ir a ${link.label}`}
                  >
                    {/* Efecto de fondo animado */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue/0 via-brand-blue/10 to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                    
                    {/* Contenido del enlace */}
                    <span className="relative z-10 flex items-center gap-3 text-sm font-medium">
                      {link.label}
                      {link.to === location.pathname && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                          <span className="text-brand-blue text-base">●</span>
                        </div>
                      )}
                    </span>
                    
                    {/* Efecto de partículas en hover */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-brand-blue/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-1" />
                      <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-brand-blue/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-2" />
                    </div>
                  </NavLink>
                </div>
              ))}
              
              <div style={{ marginTop: 16 }}>
                <Button 
                  variant="gradient"
                  size="md"
                  onClick={() => { setOpen(false); navigate('/contacto') }}
                  className="w-full justify-center py-3 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Calcula tu presupuesto
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
