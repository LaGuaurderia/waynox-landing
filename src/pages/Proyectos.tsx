import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import SEO from '../components/SEO'
import { Reveal } from '../components/anim'
import { staggerContainer, fadeInUp } from '../lib/motionPresets'

const projects = [
  {
    id: 1,
    title: 'App de Reservas',
    desc: 'Aplicación móvil para restaurantes con sistema de reservas, menú digital y pagos integrados.',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    image: 'https://via.placeholder.com/400x250/A3B18A/FFFFFF?text=Reservas+App',
    category: 'Mobile'
  },
  {
    id: 2,
    title: 'E-commerce Next.js',
    desc: 'Tienda online con SSR, optimización SEO y integración con sistemas de pago.',
    tags: ['Next.js', 'Stripe', 'SEO'],
    image: 'https://via.placeholder.com/400x250/D3E0D1/5E5E5E?text=E-commerce',
    category: 'Web'
  },
  {
    id: 3,
    title: 'App de Fitness',
    desc: 'Aplicación para seguimiento de entrenamientos con wearables y análisis de datos.',
    tags: ['Flutter', 'HealthKit', 'Analytics'],
    image: 'https://via.placeholder.com/400x250/B4A89F/FFFFFF?text=Fitness+App',
    category: 'Mobile'
  },
  {
    id: 4,
    title: 'Portal Corporativo',
    desc: 'Sitio web corporativo con CMS, blog integrado y optimización para conversiones.',
    tags: ['Next.js', 'Contentful', 'Analytics'],
    image: 'https://via.placeholder.com/400x250/A3B18A/FFFFFF?text=Portal+Corp',
    category: 'Web'
  },
  {
    id: 5,
    title: 'App de Delivery',
    desc: 'Plataforma de entrega de comida con tracking en tiempo real y notificaciones push.',
    tags: ['Flutter', 'Maps', 'Push Notifications'],
    image: 'https://via.placeholder.com/400x250/D3E0D1/5E5E5E?text=Delivery+App',
    category: 'Mobile'
  },
  {
    id: 6,
    title: 'Landing de Conversión',
    desc: 'Página de aterrizaje optimizada para conversiones con A/B testing integrado.',
    tags: ['Next.js', 'Analytics', 'A/B Testing'],
    image: 'https://via.placeholder.com/400x250/B4A89F/FFFFFF?text=Landing',
    category: 'Web'
  }
]

const Proyectos: React.FC = () => {
  return (
    <>
      <SEO title="Proyectos" description="Casos de estudio y trabajos destacados" />
      
      <Section>
        <Reveal>
          <h1 style={{ color: '#5E5E5E', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            Nuestros Proyectos
          </h1>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p style={{ 
            color: '#B4A89F', 
            fontSize: '1.1rem', 
            textAlign: 'center', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Casos de estudio que demuestran nuestra experiencia en desarrollo móvil y web
          </p>
        </Reveal>

        {/* Filtros de categoría */}
        <Reveal delay={0.2}>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {['Todos', 'Mobile', 'Web'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: category === 'Todos' ? '#A3B18A' : '#D3E0D1',
                  color: category === 'Todos' ? 'white' : '#5E5E5E',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Reveal>
        
        <motion.div 
          className="container" 
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              delay={index * 0.1}
              image={project.image}
              imageAlt={project.title}
            >
              <div style={{ padding: 16 }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#A3B18A', 
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {project.category}
                  </span>
                </div>
                
                <h3 style={{ 
                  marginTop: 12, 
                  color: '#5E5E5E',
                  marginBottom: '0.5rem'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: '#B4A89F',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {project.desc}
                </p>
                
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <motion.span 
                      key={tag} 
                      className="card" 
                      style={{ 
                        padding: '4px 8px', 
                        fontSize: 12,
                        backgroundColor: '#D3E0D1',
                        color: '#5E5E5E',
                        borderRadius: '6px'
                      }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section muted>
        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#5E5E5E', marginBottom: '1rem' }}>
              ¿Tienes un proyecto en mente?
            </h2>
            <p style={{ color: '#B4A89F', marginBottom: '2rem' }}>
              Conversemos sobre cómo podemos ayudarte a materializar tu idea
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#A3B18A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => (window.location.href = '/contacto')}
              >
                Hablar del proyecto
              </motion.button>
            </motion.div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}

export default Proyectos


