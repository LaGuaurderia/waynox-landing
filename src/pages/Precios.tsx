import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import SEO from '../components/SEO'

const tiers = [
  { name: 'Starter', price: '€', features: ['Landing 1-3 secciones', 'Soporte 15 días', 'Entrega rápida'] },
  { name: 'Pro', price: '€€', features: ['Web corporativa 5-8 págs', 'SEO básico', 'Soporte 30 días'] },
  { name: 'Business', price: '€€€', features: ['Web/App a medida', 'Integraciones', 'Soporte continuo'] },
]

const Precios: React.FC = () => {
  return (
    <>
      <SEO title="Precios" description="Planes claros y personalizados" />
      <Section>
        <h1>Precios</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Planes a medida. Financiación opcional.</p>
        <div className="container" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {tiers.map((t) => (
            <Card key={t.name}>
              <div style={{ padding: 20 }}>
                <h3>{t.name}</h3>
                <div style={{ fontSize: 28, margin: '8px 0' }}>{t.price}</div>
                <ul>
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button onClick={() => (window.location.href = '/contacto')}>Calcula tu presupuesto</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Precios


