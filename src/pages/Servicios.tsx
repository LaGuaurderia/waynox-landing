import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { Reveal } from '../components/anim'
import { staggerContainer } from '../lib/motionPresets'

const Servicios: React.FC = () => {
  const services = [
    {
      title: 'Apps móviles (Flutter)',
      features: ['iOS y Android', 'Autenticación y pagos', 'Notificaciones push'],
      image: 'https://via.placeholder.com/300x200/A3B18A/FFFFFF?text=Flutter+Apps',
      color: '#A3B18A'
    },
    {
      title: 'Web/SEO (Next.js)',
      features: ['SSR/SSG', 'Core Web Vitals', 'CMS opcional'],
      image: 'https://via.placeholder.com/300x200/D3E0D1/5E5E5E?text=Next.js+Web',
      color: '#D3E0D1'
    },
    {
      title: 'Packs accesibles',
      features: ['Landing + reserva + WhatsApp', 'Web + tienda', 'App MVP'],
      image: 'https://via.placeholder.com/300x200/B4A89F/FFFFFF?text=Packs',
      color: '#B4A89F'
    }
  ]

  return (
    <>
      <SEO title="Servicios" description="Apps Flutter, Web/SEO con Next.js y packs accesibles" />
      
      <Section>
        <Reveal>
          <h1 style={{ color: '#5E5E5E', fontSize: '2.5rem', marginBottom: '2rem' }}>
            Nuestros Servicios
          </h1>
        </Reveal>
        
        <motion.div 
          className="container" 
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              delay={index * 0.2}
              image={service.image}
              imageAlt={service.title}
            >
              <div style={{ padding: 20 }}>
                <h3 style={{ color: '#5E5E5E', marginBottom: '1rem' }}>
                  {service.title}
                </h3>
                <ul style={{ marginBottom: '1.5rem', color: '#B4A89F' }}>
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + featureIndex * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <Button 
                  onClick={() => (window.location.href = '/contacto')}
                  style={{ width: '100%' }}
                >
                  Solicitar propuesta
                </Button>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Sección adicional de proceso */}
      <Section muted>
        <Reveal>
          <h2 style={{ color: '#5E5E5E', textAlign: 'center', marginBottom: '2rem' }}>
            ¿Cómo trabajamos?
          </h2>
        </Reveal>
        
        <motion.div 
          className="container"
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {[
            { step: '1', title: 'Consulta', desc: 'Analizamos tu proyecto' },
            { step: '2', title: 'Propuesta', desc: 'Presupuesto detallado' },
            { step: '3', title: 'Desarrollo', desc: 'Iterativo y ágil' },
            { step: '4', title: 'Lanzamiento', desc: 'Soporte continuo' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              variants={staggerContainer}
              style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: '#D3E0D1',
                borderRadius: '12px',
                border: '2px solid #A3B18A'
              }}
            >
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: '#A3B18A', 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                {item.step}
              </div>
              <h3 style={{ color: '#5E5E5E', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#B4A89F', fontSize: '0.9rem' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}

export default Servicios


