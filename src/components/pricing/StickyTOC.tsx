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
      transition={{ duration: 0.6 }}
      className={`hidden lg:block ${className}`}
    >
      <div className="sticky top-24 space-y-2">
        <h3 className="text-lg font-semibold text-[#F5F7FB] mb-4 px-4">
          Navegación
        </h3>
        
        {items.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-[#333] hover:border-[#1E90FF] ${
              activeSection === item.id
                ? 'bg-[#1E90FF] bg-opacity-20 border border-[#1E90FF] text-[#1E90FF]'
                : 'text-[#F5F7FB] border border-transparent hover:text-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-5 h-5 flex-shrink-0">
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
