import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnchorIcon } from 'lucide-react'

interface AnchorItem {
  id: string
  label: string
  icon?: React.ReactNode
}

interface AnchorNavProps {
  items: AnchorItem[]
  className?: string
}

export const AnchorNav: React.FC<AnchorNavProps> = ({ items, className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('')

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
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}
    >
              <div className="bg-brand-white/95 backdrop-blur-sm border border-brand-gray rounded-2xl p-4 shadow-xl">
        <div className="flex items-center space-x-2 mb-4">
                      <AnchorIcon className="w-5 h-5 text-brand-blue" />
                      <span className="text-brand-black text-sm font-medium">Navegación</span>
        </div>
        
        <ul className="space-y-2 list-none m-0 p-0" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-brand-blue text-white'
                    : 'text-brand-black hover:bg-brand-gray-light hover:text-brand-black'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default AnchorNav
