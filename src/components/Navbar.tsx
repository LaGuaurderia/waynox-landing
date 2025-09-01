import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Button from './Button'
import { navbarVariants } from '../lib/motionPresets'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/precios', label: 'Precios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header 
      className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      role="navigation" 
      aria-label="Principal"
      variants={navbarVariants}
      animate={isScrolled ? 'scrolled' : 'top'}
      initial="top"
    >
      <div className="container navbar-inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Logo />
        </motion.div>

        <nav className="nav-links hidden md:flex" aria-label="Enlaces principales">
          {links.map((link, index) => (
            <motion.div
              key={link.to}
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <NavLink 
                to={link.to} 
                className={({ isActive }) => `nav-link relative ${isActive ? 'active' : ''}`}
              >
                {link.label}
                {link.to === location.pathname && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A3B18A]"
                    layoutId="navbar-indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: links.length * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Button className="nav-cta" onClick={() => (window.location.href = '/precios')}>
              Calcula tu presupuesto
            </Button>
          </motion.div>
        </nav>

        <motion.button 
          className="menu-btn md:hidden" 
          aria-expanded={open} 
          aria-controls="mobile-menu" 
          aria-label="Abrir menú" 
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            id="mobile-menu" 
            role="dialog" 
            aria-modal="true" 
            className="container bg-white/95 backdrop-blur-sm border-t border-gray-100"
            style={{ paddingBottom: 16 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="card" style={{ padding: 16, marginTop: 8 }}>
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => `nav-link block py-3 ${isActive ? 'active' : ''}`} 
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div 
                style={{ marginTop: 12 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: links.length * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Button onClick={() => { setOpen(false); window.location.href = '/precios' }}>
                  Calcula tu presupuesto
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
