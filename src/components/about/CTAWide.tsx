import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { pageTexts } from '../../lib/about.data'
import { ArrowRight, MessageCircle, Calendar, Users } from 'lucide-react'

const CTAWide: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--bg)] via-[var(--bg2)] to-[var(--bg)] relative overflow-hidden">
      {/* Fondo decorativo simplificado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {pageTexts.cta.title}
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {pageTexts.cta.subtitle}
              </motion.p>
            </div>
          </Reveal>

          {/* Características del proceso */}
          <Reveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0 }}
              >
                <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                  Consulta Gratuita
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Analizamos tu proyecto sin compromiso y te damos recomendaciones personalizadas
                </p>
              </motion.div>

              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0 }}
              >
                <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                  Plan Personalizado
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Creamos un roadmap detallado con cronogramas realistas y entregas incrementales
                </p>
              </motion.div>

              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0 }}
              >
                <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                  Equipo Dedicado
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Asignamos un equipo especializado que se comunica contigo semanalmente
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* CTA principal */}
          <Reveal delay={0.4}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-12 py-6 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-bold text-xl rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[var(--accent)]/25"
                >
                  {pageTexts.cta.button}
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </Reveal>

          {/* Información de contacto adicional */}
          <Reveal delay={0.5}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                  ¿Prefieres hablar por teléfono?
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Llámanos directamente y te atenderemos en persona. 
                  Disponibles de lunes a viernes de 9:00 a 18:00.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href = 'tel:+34600000000'
                  }}
                >
                  📞 Llamar ahora
                </motion.button>
              </div>

              <div className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                  ¿Tienes un presupuesto limitado?
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Te ayudamos a priorizar funcionalidades y crear un MVP 
                  que se ajuste a tu presupuesto actual.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black font-semibold rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href = '/tarifas'
                  }}
                >
                  💰 Ver tarifas
                </motion.button>
              </div>
            </div>
          </Reveal>

          {/* Garantía */}
          <Reveal delay={0.6}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--bg2)] border border-[var(--line)] rounded-full text-[var(--muted)]">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Garantía de satisfacción del 100% en todos nuestros proyectos
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CTAWide
