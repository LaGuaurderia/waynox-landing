import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import { navbarVariants } from '../lib/motionPresets'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/tarifas', label: 'Tarifas' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const location = useLocation()
  const navigate = useNavigate()
  const navbarRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY > 16
      setIsScrolled(scrolled)
      
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

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

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
          {/* Logo - Centrado */}
          <div className="logo-container">
            <Logo />
          </div>

          {/* Navegación central - Solo visible en desktop */}
          <nav className="nav-links" aria-label="Enlaces principales">
            {links.map((link, index) => (
              <div
                key={link.to}
                className="relative"
              >
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => `nav-link flex items-center justify-center px-6 py-4 rounded-lg transition-all duration-300 ${isActive ? 'active text-brand-blue bg-brand-blue/10' : 'text-brand-gray-light hover:text-black hover:bg-gray-100'}`}
                  aria-label={`Ir a ${link.label}`}
                >
                  {link.label}
                  {link.to === location.pathname && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                    />
                  )}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Lado derecho - CTA y toggle de tema */}
          <div className="nav-right">
            {/* Botón CTA - Solo visible en desktop */}
            <div className="hidden md:block">
              <Button className="nav-cta" onClick={() => navigate('/tarifas')}>
                Calcula tu presupuesto
              </Button>
            </div>

            {/* Toggle de tema */}
            <ThemeToggle />

            {/* Botón de menú móvil */}
            <button 
              className="menu-btn md:hidden p-3 rounded-lg hover:bg-brand-black-soft/50 transition-colors duration-300" 
              aria-expanded={open} 
              aria-controls="mobile-menu" 
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <div className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
            <div className="card" style={{ padding: 20, marginTop: 12 }}>
              {/* Breadcrumb móvil */}
              <div className="mb-6 p-4 bg-brand-black/50 rounded-lg border border-brand-gray/30">
                <div className="text-sm text-brand-gray-light mb-1">Estás en:</div>
                <div className="text-black font-medium text-lg">
                  {links.find(l => l.to === location.pathname)?.label || 'Inicio'}
                </div>
              </div>
              
              {links.map((link, index) => (
                <div
                  key={link.to}
                >
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => `nav-link-mobile flex items-center justify-center py-5 px-6 rounded-lg transition-all duration-300 ${isActive ? 'active bg-brand-blue/20 text-brand-blue border border-brand-blue/30' : 'hover:bg-brand-black/30 hover:text-white'}`} 
                    onClick={() => setOpen(false)}
                    aria-label={`Ir a ${link.label}`}
                  >
                    <span className="text-base font-medium">{link.label}</span>
                    {link.to === location.pathname && (
                      <span className="ml-3 text-brand-blue text-lg">●</span>
                    )}
                  </NavLink>
                </div>
              ))}
              
              <div style={{ marginTop: 20 }}>
                <Button 
                  onClick={() => { setOpen(false); navigate('/tarifas') }}
                  className="w-full justify-center py-4 text-base"
                >
                  Calcula tu presupuesto
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
