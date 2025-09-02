import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SmartphoneIcon, GlobeIcon } from 'lucide-react'

interface ToggleTabsProps {
  activeTab: 'mobile' | 'web'
  onTabChange: (tab: 'mobile' | 'web') => void
}

export const ToggleTabs: React.FC<ToggleTabsProps> = ({ activeTab, onTabChange }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const tabs = [
    {
      id: 'mobile' as const,
      label: 'Apps móviles',
      icon: SmartphoneIcon,
      description: 'Flutter / PWA'
    },
    {
      id: 'web' as const,
      label: 'Web',
      icon: GlobeIcon,
      description: 'Next.js / SEO'
    }
  ]

  if (isMobile) {
    return (
      <div className="w-full mb-8">
        <select
          value={activeTab}
          onChange={(e) => onTabChange(e.target.value as 'mobile' | 'web')}
          className="w-full p-4 bg-brand-black-soft border-2 border-brand-gray rounded-2xl text-white text-lg font-semibold focus:border-brand-blue focus:outline-none transition-all duration-300"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label} ({tab.description})
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className="w-full mb-12">
      <div className="flex justify-center">
        <div className="bg-brand-black-soft border-2 border-brand-gray rounded-2xl p-2 flex">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  isActive
                    ? 'text-white'
                    : 'text-brand-gray hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-blue rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center space-x-3">
                  <IconComponent className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-base font-semibold">{tab.label}</div>
                    <div className="text-xs opacity-80">{tab.description}</div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ToggleTabs
