import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface SecondaryNavItem {
  id: string
  label: string
  href: string
  icon?: React.ReactNode
}

interface SecondaryNavigationProps {
  items: SecondaryNavItem[]
  className?: string
  sticky?: boolean
  showIcons?: boolean
}

export const SecondaryNavigation: React.FC<SecondaryNavigationProps> = ({
  items,
  className = '',
  sticky = true,
  showIcons = false
}) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    if (!sticky) return

    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar posición inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, sticky])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 120 // Ajustar para el navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      className={`secondary-nav ${sticky ? 'sticky top-72' : ''} ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        {/* Botón para colapsar/expandir en móvil */}
        <button
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-brand-black-soft/50 rounded-lg text-white hover:bg-brand-black-soft transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          Navegación
        </button>

        {/* Enlaces de navegación */}
        <AnimatePresence>
          {(!isCollapsed || window.innerWidth >= 768) && (
            <motion.div
              className="flex flex-col md:flex-row gap-2 md:gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`secondary-nav-item flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-brand-blue text-white shadow-lg'
                        : 'text-brand-gray-light hover:text-white hover:bg-brand-black-soft/30'
                    }`}
                    aria-label={`Ir a sección ${item.label}`}
                  >
                    {showIcons && item.icon && (
                      <span className="text-sm">{item.icon}</span>
                    )}
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default SecondaryNavigation
