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
        transition={{ duration: 0 }}
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
          <nav className="nav-links relative" aria-label="Enlaces principales">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                className="relative group/nav"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              >
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => `nav-link group relative flex items-center justify-center px-4 lg:px-6 py-3 lg:py-4 rounded-xl transition-all duration-300 text-sm lg:text-base font-semibold border-0 ${isActive ? 'active text-white' : 'text-[var(--color-text-muted)] hover:scale-105'}`}
                  aria-label={`Ir a ${link.label}`}
                >
                  {/* Fondo activo deslizante con animación */}
                  {link.to === location.pathname && (
                    <motion.div 
                      layoutId="activeBackground"
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] border-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Fondo con gradiente en hover - limpio y sutil */}
                  <div className="absolute inset-0 rounded-xl bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Efecto de brillo deslizante mejorado */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Contenido del enlace */}
                  <span className={`relative z-10 flex items-center gap-2 transition-all duration-200 group-hover:text-white ${link.to === location.pathname ? 'text-white' : ''}`}>
                    {link.label}
                  </span>
                  
                  {/* Indicador inferior deslizante para página activa */}
                  {link.to === location.pathname && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full"
                      style={{ width: '70%' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Indicador inferior en hover */}
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </NavLink>
              </motion.div>
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
              
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => `nav-link-mobile group relative flex items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 text-base font-semibold border-0 ${isActive ? 'active text-white' : 'text-[var(--color-text)] hover:scale-[1.02]'}`} 
                    onClick={() => setOpen(false)}
                    aria-label={`Ir a ${link.label}`}
                  >
                    {/* Fondo activo deslizante con animación */}
                    {link.to === location.pathname && (
                      <motion.div 
                        layoutId="activeMobileBackground"
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] border-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Fondo con gradiente en hover - limpio */}
                    <div className="absolute inset-0 rounded-xl bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    
                    {/* Efecto de brillo deslizante mejorado */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '100%', opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </div>
                    
                    {/* Contenido del enlace */}
                    <span className={`relative z-10 flex items-center gap-3 transition-all duration-200 group-hover:text-white ${link.to === location.pathname ? 'text-white' : ''}`}>
                      <motion.span
                        className="flex items-center gap-3"
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                      </motion.span>
                    </span>
                    
                    {/* Indicador lateral deslizante para página activa */}
                    {link.to === location.pathname && (
                      <motion.div 
                        layoutId="activeMobileIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </NavLink>
                </motion.div>
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
