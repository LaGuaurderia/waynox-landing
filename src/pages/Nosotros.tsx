import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'
import { useInViewOnce } from '../lib/hooks/useInViewOnce'
import { useReducedMotion } from '../lib/hooks/useReducedMotion'

const Nosotros: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nosotros | Waynox Studio" 
        description="Somos Waynox Studio. Estudio digital independiente para pymes y startups." 
      />

      {/* 1) HERO / QUIÉNES SOMOS */}
      <Section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--color-text)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
            >
              Somos Waynox Studio
            </motion.h1>
            <motion.p
              className="mt-3 text-[color:var(--color-text-muted)] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              Un estudio digital independiente que crea apps y webs con estrategia, diseño y código. Trabajamos con pymes y startups que buscan soluciones claras, rápidas y sostenibles.
            </motion.p>
            
          </div>
        </div>
      </Section>

      {/* 2) MANIFIESTO: NUESTRA ESENCIA */}
      <Section className="py-10">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text)]">Nuestra esencia</h2>
            <p className="mt-2 text-[color:var(--color-text-muted)]">Principios que nos definen como estudio.</p>
          </motion.div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { title: 'Transparencia', desc: 'Comunicación clara en cada etapa.' },
              { title: 'Eficiencia', desc: 'Menos ruido, más impacto.' },
              { title: 'Calidad', desc: 'Código mantenible y escalable.' },
              { title: 'Diseño útil', desc: 'Belleza al servicio del negocio.' },
              { title: 'Entregas reales', desc: 'Plazos honestos y cumplidos.' },
              { title: 'Soporte continuo', desc: 'Seguimos contigo tras el lanzamiento.' },
            ].map((item, i) => {
              const indexLabel = String(i + 1).padStart(2, '0')
              return (
                <ManifestoItem key={item.title} indexLabel={indexLabel} title={item.title} desc={item.desc} />
              )
            })}
          </div>

          
        </div>
      </Section>

      {/* Manifesto item component inline for clarity */}
      

      

      

      {/* 5) STACK (estilo manifiesto) */}
      <Section id="stack" className="py-10">
        <div className="container">
          <motion.div
            initial={useReducedMotion() ? {} : { opacity: 0, y: 8 }}
            whileInView={useReducedMotion() ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0, delay: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text)]">Tecnologías que usamos</h2>
            <p className="mt-2 text-[color:var(--color-text-muted)]">Frameworks y servicios con los que construimos tus apps y webs.</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {['Flutter','Firebase','Next.js','Zapier','Brevo'].map((t) => (
                <div
                  key={t}
                  className="group relative border-t border-neutral-200 dark:border-neutral-800 pt-5"
                >
                  <h4 className="group relative text-xl md:text-2xl font-semibold tracking-[-0.2px] text-neutral-700 dark:text-neutral-300">
                    <button tabIndex={0} className="peer w-full text-left outline-none">
                      <span className="relative inline-block cursor-pointer transition-colors group-hover:text-[#0EA5E9] group-focus:text-[#0EA5E9]">
                        {t}
                        <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-[#0EA5E9] transition-all duration-300 ease-out group-hover:w-full group-focus-within:w-full peer-hover:w-full peer-focus:w-full" />
                      </span>
                    </button>
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      

      {/* 6) CIERRE + CTA */}
      <Section className="py-12">
        <div className="container text-center">
          <motion.h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-text)]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0 }}>
            ¿Te gusta nuestro enfoque?
          </motion.h3>
          <motion.p className="mt-2 text-[color:var(--color-text-muted)]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0, delay: 0 }}>
            Hagamos realidad tu proyecto con un plan claro y sostenible.
          </motion.p>
          <motion.div className="mt-5 flex flex-wrap items-center justify-center gap-3" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0, delay: 0 }}>
            <Button onClick={() => (window.location.href = '/contacto')}>Solicita información</Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Nosotros


type ManifestoItemProps = {
  indexLabel: string
  title: string
  desc: string
}

const ManifestoItem: React.FC<ManifestoItemProps> = ({ indexLabel, title, desc }) => {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInViewOnce({ threshold: 0.2 })

  return (
    <div
      ref={ref as any}
      data-inview={inView}
      tabIndex={0}
      className="group border-t border-[color:var(--color-text)]/10 pt-5 outline-none"
      style={{
        transition: prefersReducedMotion ? undefined : 'transform 260ms ease-out, opacity 260ms ease-out, filter 260ms ease-out',
        transform: prefersReducedMotion ? 'none' : (inView ? 'translateY(0px)' : 'translateY(10px)'),
        opacity: prefersReducedMotion ? 1 : (inView ? 1 : 0),
        filter: prefersReducedMotion ? 'none' : (inView ? 'blur(0px)' : 'blur(2px)')
      }}
    >
      <div className="flex items-baseline gap-3">
        <span className="text-sm tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-[#0EA5E9] group-focus:text-[#0EA5E9] transition-colors">{indexLabel}</span>
        <h4 className="text-xl md:text-2xl font-semibold tracking-[-0.2px] text-[color:var(--color-text)] relative">
          <span className="relative inline-block transition-colors duration-200 group-hover:text-[#0EA5E9] group-focus:text-[#0EA5E9]">
            {title}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0EA5E9] group-hover:w/full group-focus:w/full transition-all duration-200 ease-out" />
          </span>
        </h4>
      </div>
      <div className="relative mt-1 pl-0">
        <span className="absolute -left-4 top-1.5 h-4 w-[2px] bg-[#0EA5E9] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
        <p className="text-sm text-[color:var(--color-text-muted)]">{desc}</p>
      </div>
    </div>
  )
}

