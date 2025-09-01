import React, { useState } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Textarea from '../components/forms/Textarea'
import { submitToFormspark } from '../lib/formspark'
import SEO from '../components/SEO'

type Errors = Partial<Record<'nombre' | 'email' | 'mensaje' | 'tipo' | 'presupuesto', string>>

const Contacto: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(null)
    setErrors({})
    const form = new FormData(e.currentTarget)
    const nombre = String(form.get('nombre') || '')
    const email = String(form.get('email') || '')
    const telefono = String(form.get('telefono') || '')
    const tipo = String(form.get('tipo') || '')
    const presupuesto = String(form.get('presupuesto') || '')
    const mensaje = String(form.get('mensaje') || '')

    const newErrors: Errors = {}
    if (!nombre.trim()) newErrors.nombre = 'Introduce tu nombre'
    if (!email.includes('@')) newErrors.email = 'Email no válido'
    if (!tipo) newErrors.tipo = 'Selecciona un tipo'
    if (!presupuesto) newErrors.presupuesto = 'Selecciona un presupuesto'
    if (mensaje.trim().length < 10) newErrors.mensaje = 'Cuéntanos más (mín. 10 caracteres)'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setLoading(true)
    const res = await submitToFormspark({ nombre, email, telefono, tipo, presupuesto, mensaje })
    setLoading(false)
    if (res.ok) {
      setSuccess('¡Mensaje enviado! Te responderemos muy pronto.')
      e.currentTarget.reset()
    } else {
      setSuccess('Hubo un problema al enviar. Intenta de nuevo en unos minutos.')
    }
  }

  return (
    <>
      <SEO title="Contacto" description="Solicita propuesta o consulta dudas" />
      <Section>
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h1>Contacto</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Escríbenos con los detalles de tu proyecto.</p>
            <Card>
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, padding: 16 }}>
                <Input name="nombre" label="Nombre" error={errors.nombre} required />
                <Input name="email" type="email" label="Email" error={errors.email} required />
                <Input name="telefono" type="tel" label="Teléfono (opcional)" />
                <Select name="tipo" label="Tipo de proyecto" error={errors.tipo} options={[
                  { label: 'App móvil', value: 'app' },
                  { label: 'Web corporativa', value: 'web' },
                  { label: 'Ecommerce', value: 'ecommerce' },
                  { label: 'Otro', value: 'otro' },
                ]} required />
                <Select name="presupuesto" label="Presupuesto estimado" error={errors.presupuesto} options={[
                  { label: 'Menos de 2.000€', value: '<2000' },
                  { label: '2.000€ - 5.000€', value: '2000-5000' },
                  { label: '5.000€ - 10.000€', value: '5000-10000' },
                  { label: 'Más de 10.000€', value: '>10000' },
                ]} required />
                <Textarea name="mensaje" label="Mensaje" error={errors.mensaje} required />
                <div>
                  <Button disabled={loading}>{loading ? 'Enviando…' : 'Enviar'}</Button>
                </div>
                {success && <div role="status" style={{ color: 'var(--color-text-muted)' }}>{success}</div>}
              </form>
            </Card>
          </div>
          <div>
            <Card>
              <div style={{ padding: 16 }}>
                <h3>Información rápida</h3>
                <p>Email: <a className="nav-link" href="mailto:hola@waynox.studio">hola@waynox.studio</a></p>
                <p>Horario: Lun-Vie 9:00–18:00</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Contacto


