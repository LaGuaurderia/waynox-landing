import React from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../anim'
import { teamMembers, pageTexts } from '../../lib/about.data'
import { Mail, Linkedin } from 'lucide-react'

const TeamGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
                {pageTexts.team.title}
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                {pageTexts.team.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={0.1 * index}>
                <motion.div 
                  className="bg-[var(--bg2)] p-8 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0 }}
                >
                  {/* Foto del miembro */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white text-4xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.photo.includes('placeholder') ? (
                        member.name.split(' ').map(n => n[0]).join('')
                      ) : (
                        <img 
                          src={member.photo} 
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Información del miembro */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[var(--accent)] font-semibold text-lg mb-3">
                      {member.role}
                    </p>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Enlaces sociales */}
                  <div className="flex justify-center gap-4">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[var(--line)] hover:bg-[var(--accent)] text-[var(--text)] transition-colors duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Ver perfil de LinkedIn de ${member.name}`}
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    )}
                    
                    {member.email && (
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-3 rounded-full bg-[var(--line)] hover:bg-[var(--accent)] text-[var(--text)] transition-colors duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Enviar email a ${member.name}`}
                      >
                        <Mail size={20} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Nota adicional */}
          <Reveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                ¿Te gustaría unirte a nuestro equipo? Estamos siempre buscando talento apasionado por la tecnología y la innovación.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default TeamGrid
