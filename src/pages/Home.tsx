import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import cover10Img from '../../images/appmovil1.png'
import cover11Img from '../../images/webpro.png'
import cover12Img from '../../images/Ecommerce.png'
import cover13Img from '../../images/appsempresariales.png'
import Section from '../components/Section'
import Card from '../components/Card'
import SEO from '../components/SEO'
import { Reveal, Parallax } from '../components/anim'
import { staggerContainer } from '../lib/motionPresets'


// Componente de animación de escritura
const TypingAnimation: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0, repeat: Infinity }}
        className="text-[var(--color-accent)]"
      >
        |
      </motion.span>
    </span>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Inicio" description="Construimos apps y webs que venden" />

      {/* Hero */}
      <Section id="hero">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-hover)]/10" />
        </Parallax>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <TypingAnimation text="Del boceto al código" speed={120} />
            </motion.h1>

            <motion.p
              className="group mt-3 sm:mt-4 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <span className="relative inline-block transition-colors duration-200 group-hover:text-[#0EA5E9]">
                Tecnología accesible con resultados visibles.
                <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-[#0EA5E9] transition-all duration-200 ease-out group-hover:w-full" />
              </span>
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Servicios - Sin títulos */}
      <Section muted id="servicios" className="pt-0 -mt-8">
        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Apps móviles',
              desc: 'Desarrollo nativo con Flutter para iOS y Android. Apps de alto rendimiento con autenticación, pagos y notificaciones push.',
              image: cover10Img,
              delay: 0.1,
            },
            {
              title: 'Web profesional',
              desc: 'Sitios web modernos con Next.js, optimizados para SEO y Core Web Vitals. Diseño responsivo y rendimiento excepcional.',
              image: cover11Img,
              delay: 0.2,
            },
            {
              title: 'E-commerce',
              desc: 'Tiendas online completas con gestión de productos, carrito de compras y pasarelas de pago seguras.',
              image: cover12Img,
              delay: 0.3,
            },
            {
              title: 'Apps empresariales',
              desc: 'Soluciones personalizadas para empresas: gestión de citas, CRM, sistemas de reservas y más.',
              image: cover13Img,
              delay: 0.4,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0 } }}
              className="h-80 sm:h-96"
            >
              <Card delay={item.delay} image={item.image} className="h-full">
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base drop-shadow-md font-semibold">{item.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Cómo trabajamos - Manifiesto */}
      <Section id="proceso">
        <Reveal delay={0.15}>
          <motion.div 
            className="mb-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#0EA5E9]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
          >
            Proceso
          </motion.div>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Cómo trabajamos
          </motion.h2>
        </Reveal>

        <div className="mt-5 flex items-center gap-3">
          <span className="inline-block h-px w-16 bg-[#0EA5E9]" />
          <span className="inline-block h-px w-4/5 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8">
          {[
            { n: '01', t: 'Contrato de Confidencialidad', d: 'Establecemos legalmente la protección de toda la información e ideas del proyecto.' },
            { n: '02', t: 'Estructura Gratuita', d: 'Creamos y entregamos un esquema básico sin coste para definir el alcance técnico.' },
            { n: '03', t: 'Inicio del Proyecto', d: 'Arranque oficial: se asignan recursos, se planifica el desarrollo y se establece el roadmap.' },
            { n: '04', t: 'Lanzamiento', d: 'Publicación final, QA/pruebas y optimización, con soporte y seguimiento post-lanzamiento.' },
          ].map((it, idx) => (
            <motion.div
              key={it.n}
              className="group"
              tabIndex={0}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0, delay: 0 }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{it.n}</span>
                <h3 className="relative text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                  <span className="relative inline-block transition-colors duration-200 group-hover:text-[#0EA5E9] group-focus:text-[#0EA5E9]">
                    {it.t}
                    <span className="block h-px w-full bg-[#0EA5E9] scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus:scale-x-100" />
                  </span>
                </h3>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{it.d}</p>
              <div className="mt-4 h-px w-4/5 bg-neutral-200 dark:bg-neutral-800" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Por qué elegir Waynox Studio - Manifiesto */}
      <Section id="why-waynox">
        <div className="container mx-auto px-4 py-14 max-w-5xl">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0 }}
          >
            Por qué elegir Waynox Studio
          </motion.h2>
          <motion.p
            className="mt-2 text-[color:var(--color-text-muted)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0, delay: 0 }}
          >
            Diferenciales que marcan la diferencia.
          </motion.p>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-block h-px w-16 bg-[#0EA5E9]" />
            <span className="inline-block h-px w-4/5 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8">
            {[ 
              { n: '01', t: 'Claridad en los plazos', d: 'Procesos y fechas transparentes.' },
              { n: '02', t: 'Compromiso con tus resultados', d: 'Enfoque en métricas y negocio.' },
              { n: '03', t: 'Soporte real 360º', d: 'Antes, durante y después del lanzamiento.' },
              { n: '04', t: 'Mantenimiento y evolución', d: 'Actualizaciones y mejoras continuas.' },
            ].map((it) => (
              <div key={it.n} className="group" tabIndex={0}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{it.n}</span>
                  <h3 className="relative text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                    <span className="relative inline-block transition-colors duration-200 group-hover:text-[#0EA5E9] group-focus:text-[#0EA5E9]">
                      {it.t}
                      <span className="block h-px w-full bg-[#0EA5E9] scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus:scale-x-100" />
                    </span>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{it.d}</p>
                <div className="mt-4 h-px w-4/5 bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonios - OCULTO TEMPORALMENTE */}
      {/* 
      <Section id="testimonios">
        <Reveal delay={0.15}>
          <motion.div 
            className="mb-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#0EA5E9]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
          >
            Opiniones
          </motion.div>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Testimonios
          </motion.h2>
        </Reveal>
        
        <motion.div 
          className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-lg border border-[#0EA5E9]/30 p-5 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0 } }}
          >
            <p className="italic text-[color:var(--color-text)]">"Excelente partner tecnológico, lanzamos en tiempo y forma."</p>
            <strong className="mt-2 inline-block text-[color:var(--color-text)]/80">— Cliente A</strong>
          </motion.div>
          
          <motion.div
            className="rounded-lg border border-[#0EA5E9]/30 p-5 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0 } }}
          >
            <p className="italic text-[color:var(--color-text)]">"Rápidos, claros y con foco en negocio."</p>
            <strong className="mt-2 inline-block text-[color:var(--color-text)]/80">— Cliente B</strong>
          </motion.div>
        </motion.div>
      </Section>
      */}

      
    </>
  )
}

export default Home


