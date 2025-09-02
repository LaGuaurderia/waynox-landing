import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../router/ScrollToTop'
import PageTransition from '../components/PageTransition'
import { useSmoothScroll } from '../lib/hooks/useSmoothScroll'

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container">{children}</div>
)

const MainLayout: React.FC = () => {
  const location = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Inicializar scroll suave
  useSmoothScroll()

  // Indicador de scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#E9E5D6]">
      {/* Indicador de scroll visual */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
      
      <ScrollToTop />
      <Navbar />
      <main className="pt-24">
        <PageTransition pathname={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout


