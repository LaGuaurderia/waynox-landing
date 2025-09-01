import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import SEO from '../components/SEO'

const posts = [
  { id: 'post-1', title: 'Cómo planificar tu app', date: '2025-01-10', tags: ['Flutter','Producto'], excerpt: 'Pasos clave para definir tu MVP y lanzarlo a tiempo.' },
  { id: 'post-2', title: 'SEO técnico para Next.js', date: '2025-01-22', tags: ['Next.js','SEO'], excerpt: 'Buenas prácticas para mejorar Core Web Vitals y posicionar.' },
  { id: 'post-3', title: 'Automatiza tu negocio', date: '2025-02-05', tags: ['Zapier','Operaciones'], excerpt: 'Flujos que ahorran tiempo conectando tus herramientas.' },
]

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog" description="Artículos cortos sobre producto y tecnología" />
      <Section>
        <h1>Blog</h1>
        <div className="container" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {posts.map((p) => (
            <article key={p.id} className="card" style={{ padding: 16 }}>
              <header>
                <h3 style={{ marginBottom: 4 }}>{p.title}</h3>
                <small style={{ color: 'var(--color-text-muted)' }}>{new Date(p.date).toLocaleDateString('es-ES')}</small>
              </header>
              <p>{p.excerpt}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                  <span key={t} className="card" style={{ padding: '2px 6px', fontSize: 12 }}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Blog


