import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import SEO from '../components/SEO'

const Nosotros: React.FC = () => {
  return (
    <>
      <SEO title="Nosotros" description="Quiénes somos y cómo trabajamos" />
      <Section>
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h1>Sobre nosotros</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Equipo ágil con foco en resultados. Diseñamos y desarrollamos productos digitales eficientes.</p>
            <ul>
              <li>Transparencia</li>
              <li>Eficiencia</li>
              <li>Soporte</li>
            </ul>
            <Button onClick={() => (window.location.href = '/contacto')}>Hablemos</Button>
          </div>
          <Card>
            <div style={{ height: 260, background: 'var(--color-bg-soft)' }} aria-hidden="true" />
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Nosotros


