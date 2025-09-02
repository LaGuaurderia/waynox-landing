import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { techStack, pageTexts } from '../../lib/about.data'

const TechBadges: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.tech.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto mb-4">
                {pageTexts.tech.subtitle}
              </p>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                {pageTexts.tech.description}
              </p>
            </div>
          </Reveal>

          {/* Stack tecnológico */}
          <div className="mb-16">
            <Reveal>
              <h3 className="text-2xl font-bold text-[var(--text)] text-center mb-8">
                Tecnologías Principales
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStack.map((tech, index) => (
                <Reveal key={tech.id} delay={0.1 * index}>
                  <motion.div 
                    className="bg-[var(--bg2)] p-6 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 group text-center"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-[var(--text)] text-sm">
                      {tech.name}
                    </h4>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        tech.category === 'frontend' 
                          ? 'bg-blue-900/30 text-blue-300' 
                          : tech.category === 'backend'
                          ? 'bg-green-900/30 text-green-300'
                          : 'bg-purple-900/30 text-purple-300'
                      }`}>
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Categorías de tecnologías */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Reveal delay={0.1}>
              <div className="bg-[var(--bg2)] p-6 rounded-xl border border-[var(--line)] text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-[var(--text)] mb-3">Frontend</h4>
                <p className="text-[var(--muted)] text-sm">
                  Flutter para apps móviles, Next.js para webs modernas y React para interfaces interactivas
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--bg2)] p-6 rounded-xl border border-[var(--line)] text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h4 className="text-xl font-bold text-[var(--text)] mb-3">Backend</h4>
                <p className="text-[var(--muted)] text-sm">
                  Firebase para autenticación, base de datos y hosting. APIs RESTful y GraphQL
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--bg2)] p-6 rounded-xl border border-[var(--line)] text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-bold text-[var(--text)] mb-3">Herramientas</h4>
                <p className="text-[var(--muted)] text-sm">
                  Zapier para automatizaciones, Brevo para email marketing y herramientas de CI/CD
                </p>
              </div>
            </Reveal>
          </div>

          {/* Partners y colaboraciones */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold text-[var(--text)] text-center mb-8">
                Partners y Colaboraciones
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Google Cloud', logo: '☁️', description: 'Infraestructura escalable' },
                { name: 'Firebase', logo: '🔥', description: 'Backend como servicio' },
                { name: 'Vercel', logo: '⚡', description: 'Deploy automático' },
                { name: 'GitHub', logo: '📚', description: 'Control de versiones' }
              ].map((partner, index) => (
                <Reveal key={partner.name} delay={0.1 * index}>
                  <motion.div 
                    className="bg-[var(--bg2)] p-4 rounded-lg border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300 text-center"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl mb-2">{partner.logo}</div>
                    <h4 className="font-semibold text-[var(--text)] text-sm mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-[var(--muted)] text-xs">
                      {partner.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Nota sobre seguridad */}
          <Reveal delay={0.5}>
            <div className="text-center mt-16">
              <div className="bg-[var(--bg2)] p-6 rounded-xl border border-[var(--line)] max-w-2xl mx-auto">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold text-[var(--text)] mb-3">
                  Seguridad y Cumplimiento
                </h4>
                <p className="text-[var(--muted)] text-sm">
                  Todas nuestras tecnologías cumplen con los estándares de seguridad más altos. 
                  Implementamos HTTPS, autenticación robusta y backups automáticos en todos los proyectos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default TechBadges
