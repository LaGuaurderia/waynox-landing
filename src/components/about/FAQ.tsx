import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../anim'
import { faqItems } from '../../lib/about.data'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <HelpCircle className="w-8 h-8 text-[var(--accent)]" />
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
                  Preguntas Frecuentes
                </h2>
              </div>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios y metodología
              </p>
            </div>
          </Reveal>

          {/* Acordeón de FAQs */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              
              return (
                <Reveal key={item.id} delay={0.1 * index}>
                  <motion.div
                    className="bg-[var(--bg2)] border border-[var(--line)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-colors duration-300"
                    initial={false}
                    animate={{
                      backgroundColor: isOpen ? 'var(--bg)' : 'var(--bg2)'
                    }}
                    transition={{ duration: 0 }}
                  >
                    {/* Pregunta */}
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[var(--bg)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-inset rounded-xl"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="font-semibold text-[var(--text)] text-lg pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0 }}
                        className="flex-shrink-0 text-[var(--accent)]"
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </button>
                    
                    {/* Respuesta */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: 1, 
                            height: 'auto',
                            transition: {
                              opacity: { duration: 0 },
                              height: { duration: 0, ease: [0.2, 0.8, 0.2, 1] }
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            height: 0,
                            transition: {
                              opacity: { duration: 0 },
                              height: { duration: 0 }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-[var(--muted)] leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>

          {/* CTA adicional */}
          <Reveal delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                  ¿Tienes más preguntas?
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Nuestro equipo está aquí para ayudarte. Contacta con nosotros 
                  y te responderemos en menos de 24 horas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.location.href = '/contacto'
                    }}
                  >
                    Contactar ahora
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
                  
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--line)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.location.href = 'mailto:hola@waynox.studio?subject=Consulta%20general'
                    }}
                  >
                    Enviar email
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default FAQ
