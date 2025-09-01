import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../router/ScrollToTop'
import { useSmoothScroll } from '../lib/hooks/useSmoothScroll'

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container">{children}</div>
)

const MainLayout: React.FC = () => {
  const location = useLocation()
  
  // Inicializar scroll suave
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-[#E9E5D6]">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20"> {/* Añadir padding-top para el navbar fijo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout


