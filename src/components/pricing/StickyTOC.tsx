import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../lib/hooks/useReducedMotion'

interface TOCItem {
  id: string
  label: string
  icon: React.ReactNode
}

interface StickyTOCProps {
  items: TOCItem[]
  className?: string
}

export const StickyTOC: React.FC<StickyTOCProps> = ({ items, className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Ajustar según el navbar
      const elementPosition = element.offsetTop - offset
      
      if (prefersReducedMotion) {
        window.scrollTo(0, elementPosition)
      } else {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0 }}
      className={`hidden lg:block ${className}`}
    >
      <div className="sticky top-24 space-y-2">
        <h3 className="text-lg font-semibold text-brand-white mb-4 px-4">
          Navegación
        </h3>
        
        {items.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-brand-black-soft hover:border-brand-blue ${
              activeSection === item.id
                ? 'bg-brand-blue bg-opacity-20 border border-brand-blue text-brand-blue'
                : 'text-brand-white border border-transparent hover:text-brand-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-5 h-5 flex-shrink-0 text-brand-blue">
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default StickyTOC
