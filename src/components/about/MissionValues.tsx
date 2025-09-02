import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { companyValues, pageTexts } from '../../lib/about.data'

const MissionValues: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        {/* Misión y Visión */}
        <div className="max-w-6xl mx-auto mb-20">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.mission.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.mission.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <motion.div 
                className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Misión</h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  {pageTexts.mission.mission}
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div 
                className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Visión</h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  {pageTexts.mission.vision}
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* Valores */}
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Nuestros Valores
              </h3>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Principios que guían cada decisión y proyecto
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <Reveal key={value.id} delay={0.1 * index}>
                <motion.div 
                  className="bg-[var(--bg)] p-6 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionValues
