import React from 'react'
import { motion } from 'framer-motion'
import cover10Img from '../../images/1.0.png'
import cover11Img from '../../images/1.1.png'
import cover12Img from '../../images/1.2.png'
import cover13Img from '../../images/1.3.png'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'
import SEO from '../components/SEO'
import { Reveal, Parallax, StaggeredHeading } from '../components/anim'
import { staggerContainer, fadeInUp } from '../lib/motionPresets'


const Home: React.FC = () => {
  return (
    <>
      <SEO title="Inicio" description="Construimos apps y webs que venden" />

      {/* Hero */}
      <Section id="hero">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-hover)]/10" />
        </Parallax>

        <div className="relative z-10 grid items-center gap-6 md:grid-cols-2">
          <div>
            <Reveal delay={0.3}>
              <StaggeredHeading
                text="Construimos apps y webs que venden"
                className="text-4xl font-bold text-[var(--color-text)] leading-tight"
                delay={0.5}
                staggerDelay={0.08}
              />
            </Reveal>

            <Reveal delay={0.6}>
              <motion.p
                className="mt-3 text-[18px] text-[color:var(--color-text-muted)]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Desarrollo móvil (Flutter) y web (Next.js) para pymes y startups
              </motion.p>
            </Reveal>

            <Reveal delay={0.9}>
              <motion.div
                className="mt-4 flex gap-3"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Button onClick={() => (window.location.href = '/tarifas')}>Calcula tu presupuesto</Button>
                <Button variant="ghost" onClick={() => (window.location.href = '/proyectos')}>Ver proyectos</Button>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={1.0} direction="right">
            <motion.div
              className="card p-5"
              initial={{ opacity: 0, x: 80, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.03, rotateY: 4, transition: { duration: 0.25 } }}
            >
              <img src={cover10Img} alt="Ilustración Waynox" loading="lazy" />
            </motion.div>
          </Reveal>
        </div>
      </Section>

      {/* Qué hacemos */}
      <Section muted id="servicios">
        <Reveal delay={0.2}>
          <motion.h2
            className="text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Qué hacemos
          </motion.h2>
        </Reveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
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
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
            >
              <Card delay={item.delay} image={item.image}>
                <div className="p-5">
                  <h3 className="text-[color:var(--color-text)]">{item.title}</h3>
                  <p className="text-[color:var(--color-text-muted)]">{item.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Proceso */}
      <Section id="proceso">
        <Parallax speed={0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#E9E5D6]/50 to-[#D3E0D1]/30" />
        </Parallax>
        
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Proceso
          </motion.h2>
        </Reveal>
        
        <motion.div 
          className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['Descubrimiento','Diseño','Desarrollo','Lanzamiento'].map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
            >
              <Card delay={i * 0.1}>
                <div className="p-5">
                  <strong className="text-[color:var(--color-text)]">Paso {i+1} · {p}</strong>
                  <p className="mt-2 text-[color:var(--color-text-muted)]">Colaboración ágil y entregas continuas.</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Confianza */}
      <Section muted id="confianza">
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Confianza
          </motion.h2>
        </Reveal>
        
        <motion.ul 
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['Plazos claros', 'Soporte dedicado', 'Mantenimiento'].map((item, index) => (
            <motion.li 
              key={item}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
              className="rounded-lg bg-[#D3E0D1] px-4 py-3 font-medium text-[color:var(--color-text)]"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Testimonios */}
      <Section id="testimonios">
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Testimonios
          </motion.h2>
        </Reveal>
        
        <motion.div 
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          >
            <Card delay={0.1}>
              <div className="p-5">
                <p className="italic text-[color:var(--color-text)]">"Excelente partner tecnológico, lanzamos en tiempo y forma."</p>
                <strong className="text-[color:var(--color-accent)]">— Cliente A</strong>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          >
            <Card delay={0.2}>
              <div className="p-5">
                <p className="italic text-[color:var(--color-text)]">"Rápidos, claros y con foco en negocio."</p>
                <strong className="text-[color:var(--color-accent)]">— Cliente B</strong>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Herramientas */}
      <Section muted id="herramientas">
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-center text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Herramientas
          </motion.h2>
        </Reveal>
        
        <motion.div 
          className="mt-2 flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['Flutter','Firebase','Next.js','Zapier','Brevo'].map((tool, index) => (
            <motion.span 
              key={tool} 
              className="card rounded-lg bg-[color:var(--color-accent)] px-3 py-2 font-medium text-white"
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -4, rotate: 1.5, transition: { duration: 0.25 } }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* Demostración de Animaciones Waynox Studio */}
      <Section id="animaciones">
        <Parallax speed={0.4} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/5" />
        </Parallax>
        
        <Reveal delay={0.2}>
          <motion.h2 
            className="text-center text-[color:var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            🎨 Sistema de Animaciones Waynox Studio
          </motion.h2>
        </Reveal>
        
        <motion.p 
          className="mb-8 text-center text-[color:var(--color-text-muted)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experiencia visual fluida y profesional con scroll suave y microinteracciones
        </motion.p>
        
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          >
            <div className="mb-4 text-5xl">✨</div>
            <h3 className="mb-3 text-[color:var(--color-text)]">Scroll Suave</h3>
            <p className="text-[color:var(--color-text-muted)]">Navegación fluida con Lenis y easing personalizado para una experiencia premium</p>
          </motion.div>
          
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          >
            <div className="mb-4 text-5xl">🎭</div>
            <h3 className="mb-3 text-[color:var(--color-text)]">Reveal Animations</h3>
            <p className="text-[color:var(--color-text-muted)]">Elementos que aparecen con timing perfecto y direcciones personalizables</p>
          </motion.div>
          
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          >
            <div className="mb-4 text-5xl">🌊</div>
            <h3 className="mb-3 text-[color:var(--color-text)]">Parallax Effects</h3>
            <p className="text-[color:var(--color-text-muted)]">Fondos que se mueven a diferentes velocidades creando profundidad</p>
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}

export default Home


