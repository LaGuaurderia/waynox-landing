import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { testimonials, pageTexts } from '../../lib/about.data'
import { Star, Quote } from 'lucide-react'

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.socialProof.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.socialProof.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Testimonios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={0.1 * index}>
                <motion.div 
                  className="bg-[var(--bg)] p-6 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0 }}
                >
                  {/* Comillas decorativas */}
                  <div className="text-4xl text-[var(--accent)] mb-4 opacity-60">
                    <Quote />
                  </div>

                  {/* Contenido del testimonio */}
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Información del cliente */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        testimonial.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-[var(--accent)] text-xs">
                        {testimonial.role} en {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Estrellas de valoración */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Logos de clientes */}
          <div className="mb-16">
            <Reveal>
              <h3 className="text-2xl font-bold text-[var(--text)] text-center mb-8">
                Empresas que confían en nosotros
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Taxi Express', logo: '🚕', industry: 'Transporte' },
                { name: 'Beauty Studio', logo: '💄', industry: 'Belleza' },
                { name: 'StartupTech', logo: '🚀', industry: 'Tecnología' },
                { name: 'Local Business', logo: '🏪', industry: 'Comercio' }
              ].map((client, index) => (
                <Reveal key={client.name} delay={0.1 * index}>
                  <motion.div 
                    className="bg-[var(--bg)] p-6 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 text-center group"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0 }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <h4 className="font-semibold text-[var(--text)] text-sm mb-1">
                      {client.name}
                    </h4>
                    <p className="text-[var(--muted)] text-xs">
                      {client.industry}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Estadísticas de satisfacción */}
          <Reveal delay={0.5}>
            <div className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--line)]">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">4.9/5</div>
                  <p className="text-[var(--muted)] text-sm">Valoración media</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">98%</div>
                  <p className="text-[var(--muted)] text-sm">Recomendación</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">15+</div>
                  <p className="text-[var(--muted)] text-sm">Proyectos exitosos</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">24h</div>
                  <p className="text-[var(--muted)] text-sm">Tiempo respuesta</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA para dejar testimonio */}
          <Reveal delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-[var(--bg)] p-6 rounded-xl border border-[var(--line)] max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-[var(--text)] mb-3">
                  ¿Eres cliente nuestro?
                </h4>
                <p className="text-[var(--muted)] text-sm mb-4">
                  Comparte tu experiencia y ayúdanos a mejorar. Tu feedback es valioso para nosotros.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Enviar email para testimonio
                    window.location.href = 'mailto:hola@waynox.studio?subject=Testimonio%20Waynox%20Studio'
                  }}
                >
                  Dejar testimonio
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

export default SocialProof
