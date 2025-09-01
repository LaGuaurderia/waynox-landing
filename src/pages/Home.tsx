import React from 'react'
import { motion } from 'framer-motion'
import appMenuImg from '../../images/appmenu.png'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'
import SEO from '../components/SEO'
import { Reveal, Parallax } from '../components/anim'
import { staggerContainer, fadeInUp } from '../lib/motionPresets'

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Inicio" description="Construimos apps y webs que venden" />
      
      {/* Hero Section con Parallax */}
      <Section>
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D3E0D1]/20 to-[#A3B18A]/10" />
        </Parallax>
        
        <div className="container relative z-10" style={{ display: 'grid', gap: 16, alignItems: 'center', gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div>
            <Reveal>
              <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0, color: '#5E5E5E' }}>
                Construimos apps y webs que venden
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p style={{ color: '#B4A89F', fontSize: 18, marginTop: 12 }}>
                Desarrollo móvil (Flutter) y web (Next.js) para pymes y startups
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                <Button onClick={() => (window.location.href = '/precios')}>
                  Calcula tu presupuesto
                </Button>
                <Button variant="ghost" onClick={() => (window.location.href = '/proyectos')}>
                  Ver proyectos
                </Button>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.3} direction="right">
            <div className="card" style={{ padding: 20 }}>
              <img src={appMenuImg} alt="Ilustración Waynox" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Qué hacemos */}
      <Section muted>
        <Reveal>
          <h2 style={{ color: '#5E5E5E' }}>Qué hacemos</h2>
        </Reveal>
        
        <motion.div 
          className="container" 
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Card delay={0.1} image="https://via.placeholder.com/300x200/A3B18A/FFFFFF?text=Mobile+Apps">
            <div style={{ padding: 20 }}>
              <h3 style={{ color: '#5E5E5E' }}>Apps móviles</h3>
              <p style={{ color: '#B4A89F' }}>Flutter para iOS/Android. Autenticación, pagos, notificaciones.</p>
            </div>
          </Card>
          
          <Card delay={0.2} image="https://via.placeholder.com/300x200/D3E0D1/5E5E5E?text=Web+Apps">
            <div style={{ padding: 20 }}>
              <h3 style={{ color: '#5E5E5E' }}>Web profesional</h3>
              <p style={{ color: '#B4A89F' }}>Next.js con SSR/SSG. SEO y Core Web Vitals.</p>
            </div>
          </Card>
          
          <Card delay={0.3} image="https://via.placeholder.com/300x200/B4A89F/FFFFFF?text=Integrations">
            <div style={{ padding: 20 }}>
              <h3 style={{ color: '#5E5E5E' }}>Integraciones</h3>
              <p style={{ color: '#B4A89F' }}>Automatización con Zapier, CRM/ERP y correo transaccional.</p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Proceso con Parallax */}
      <Section>
        <Parallax speed={0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#E9E5D6]/50 to-[#D3E0D1]/30" />
        </Parallax>
        
        <Reveal>
          <h2 style={{ color: '#5E5E5E' }}>Proceso</h2>
        </Reveal>
        
        <motion.div 
          className="container relative z-10" 
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {['Descubrimiento','Diseño','Desarrollo','Lanzamiento'].map((p, i) => (
            <Card key={p} delay={i * 0.1}>
              <div style={{ padding: 20 }}>
                <strong style={{ color: '#5E5E5E' }}>Paso {i+1} · {p}</strong>
                <p style={{ marginTop: 8, color: '#B4A89F' }}>
                  Colaboración ágil y entregas continuas.
                </p>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Confianza */}
      <Section muted>
        <Reveal>
          <h2 style={{ color: '#5E5E5E' }}>Confianza</h2>
        </Reveal>
        
        <motion.ul 
          style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {['Plazos claros', 'Soporte dedicado', 'Mantenimiento'].map((item, index) => (
            <motion.li 
              key={item}
              variants={fadeInUp}
              style={{ 
                padding: '12px 16px', 
                backgroundColor: '#D3E0D1', 
                borderRadius: '8px',
                color: '#5E5E5E',
                fontWeight: '500'
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Testimonios */}
      <Section>
        <Reveal>
          <h2 style={{ color: '#5E5E5E' }}>Testimonios</h2>
        </Reveal>
        
        <motion.div 
          className="container" 
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Card delay={0.1}>
            <div style={{ padding: 20 }}>
              <p style={{ color: '#5E5E5E', fontStyle: 'italic' }}>
                "Excelente partner tecnológico, lanzamos en tiempo y forma."
              </p>
              <strong style={{ color: '#A3B18A' }}>— Cliente A</strong>
            </div>
          </Card>
          
          <Card delay={0.2}>
            <div style={{ padding: 20 }}>
              <p style={{ color: '#5E5E5E', fontStyle: 'italic' }}>
                "Rápidos, claros y con foco en negocio."
              </p>
              <strong style={{ color: '#A3B18A' }}>— Cliente B</strong>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Herramientas */}
      <Section muted>
        <Reveal>
          <h2 style={{ color: '#5E5E5E' }}>Herramientas</h2>
        </Reveal>
        
        <motion.div 
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {['Flutter','Firebase','Next.js','Zapier','Brevo'].map((tool, index) => (
            <motion.span 
              key={tool} 
              className="card" 
              style={{ 
                padding: '8px 12px',
                backgroundColor: '#A3B18A',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '500'
              }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </Section>
    </>
  )
}

export default Home


