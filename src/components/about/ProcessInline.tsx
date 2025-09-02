import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { processSteps, pageTexts } from '../../lib/about.data'

const ProcessInline: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.process.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.process.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Proceso en línea */}
          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-[var(--accent)] transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <Reveal key={step.id} delay={0.1 * index}>
                  <motion.div 
                    className="text-center group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icono del paso */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-[var(--bg)] border-2 border-[var(--accent)] rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      
                      {/* Número del paso */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent)] text-black text-sm font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Contenido del paso */}
                    <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA del proceso */}
          <Reveal delay={0.5}>
            <div className="text-center mt-16">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Scroll suave a la sección de proceso o acción específica
                  document.getElementById('process-details')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                {pageTexts.process.cta}
                <svg 
                  className="w-5 h-5" 
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
          </Reveal>

          {/* Detalles adicionales del proceso */}
          <div id="process-details" className="mt-20">
            <Reveal>
              <div className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--line)]">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6 text-center">
                  Metodología Ágil
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📋</div>
                    <h4 className="font-semibold text-[var(--text)] mb-2">Sprints Semanales</h4>
                    <p className="text-[var(--muted)] text-sm">
                      Entregas incrementales cada semana con feedback continuo
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🤝</div>
                    <h4 className="font-semibold text-[var(--text)] mb-2">Comunicación Constante</h4>
                    <p className="text-[var(--muted)] text-sm">
                      Reuniones regulares y canales abiertos para consultas
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">✅</div>
                    <h4 className="font-semibold text-[var(--text)] mb-2">Testing Continuo</h4>
                    <p className="text-[var(--muted)] text-sm">
                      Validación constante con usuarios reales y métricas
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessInline
