import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { whyUsPoints, pageTexts } from '../../lib/about.data'
import { CheckCircle } from 'lucide-react'

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.whyUs.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.whyUs.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Puntos diferenciadores */}
          <div className="grid md:grid-cols-2 gap-8">
            {whyUsPoints.map((point, index) => (
              <Reveal key={point.id} delay={0.1 * index}>
                <motion.div 
                  className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icono del punto */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                    </div>

                    {/* Contenido del punto */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                        {point.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>

                    {/* Check de verificación */}
                    <div className="flex-shrink-0">
                      <CheckCircle 
                        className="w-6 h-6 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Estadísticas adicionales */}
          <Reveal delay={0.5}>
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[var(--accent)] mb-2">95%</div>
                <p className="text-[var(--muted)] text-sm">Clientes satisfechos</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[var(--accent)] mb-2">6</div>
                <p className="text-[var(--muted)] text-sm">Semanas promedio</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[var(--accent)] mb-2">24/7</div>
                <p className="text-[var(--muted)] text-sm">Soporte disponible</p>
              </motion.div>
            </div>
          </Reveal>

          {/* CTA adicional */}
          <Reveal delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                  ¿Listo para empezar?
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Nuestro equipo está preparado para convertir tu idea en realidad. 
                  Contacta con nosotros para una consulta gratuita.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Scroll suave a la sección de contacto o navegación
                    window.location.href = '/contacto'
                  }}
                >
                  Solicitar consulta gratuita
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
