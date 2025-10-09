import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { Reveal } from '../anim'
import { pageTexts } from '../../lib/about.data'

const HeroAbout: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[var(--bg)] to-[var(--bg2)] overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0.1}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[var(--text)] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {pageTexts.hero.title}
            </motion.h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p 
              className="text-xl md:text-2xl text-[var(--muted)] mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {pageTexts.hero.subtitle}
            </motion.p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link to="/contacto">
                <Button size="lg" className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold px-8 py-4 text-lg">
                  {pageTexts.hero.ctaPrimary}
                </Button>
              </Link>
              
              <Link to="/proyectos">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="border-[var(--line)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-8 py-4 text-lg"
                >
                  {pageTexts.hero.ctaSecondary}
                </Button>
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 0, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[var(--accent)] rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-[var(--accent)] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 0, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroAbout
