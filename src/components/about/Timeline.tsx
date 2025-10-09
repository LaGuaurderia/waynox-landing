import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { timelineEvents, pageTexts } from '../../lib/about.data'

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.timeline.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.timeline.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Línea central vertical */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent)] transform -translate-x-1/2" />
            
            {/* Eventos del timeline */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <Reveal key={event.id} delay={0.1 * index}>
                  <motion.div 
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0 }}
                  >
                    {/* Contenido del evento */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div 
                        className="bg-[var(--bg)] p-6 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0 }}
                      >
                        <div className="text-2xl font-bold text-[var(--accent)] mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                          {event.title}
                        </h3>
                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Punto central del timeline */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-6 h-6 bg-[var(--accent)] rounded-full border-4 border-[var(--bg2)] shadow-lg" />
                      
                      {/* Línea horizontal en móvil */}
                      <div className="md:hidden absolute top-1/2 left-6 w-8 h-0.5 bg-[var(--accent)] transform -translate-y-1/2" />
                    </div>

                    {/* Espacio en blanco para el lado derecho en desktop */}
                    <div className="flex-1 md:block hidden" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Indicador de futuro */}
          <Reveal delay={0.5}>
            <div className="text-center mt-16">
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--bg)] border border-[var(--line)] rounded-full text-[var(--muted)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0 }}
              >
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Continuamos creciendo...
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* Estadísticas adicionales */}
          <Reveal delay={0.6}>
            <div className="mt-20 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">2+</div>
                <p className="text-[var(--muted)] text-sm">Años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">15+</div>
                <p className="text-[var(--muted)] text-sm">Proyectos entregados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">3</div>
                <p className="text-[var(--muted)] text-sm">Industrias atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
                <p className="text-[var(--muted)] text-sm">Clientes satisfechos</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Timeline
