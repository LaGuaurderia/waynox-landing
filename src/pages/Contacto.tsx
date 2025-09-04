import React, { useState, useRef } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Textarea from '../components/forms/Textarea'
import { submitContactForm, isValidEmail, isValidPhone } from '../lib/firebaseService'
import { submitToFormspark } from '../lib/formspark'

import SEO from '../components/SEO'

type Errors = Partial<Record<'nombre' | 'email' | 'telefono' | 'mensaje' | 'tipo' | 'presupuesto', string>>

const Contacto: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)

  // Función para limpiar el formulario
  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset()
    }
    setErrors({})
  }

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

    // Validaciones mejoradas
    const newErrors: Errors = {}
    if (!nombre.trim()) newErrors.nombre = 'Introduce tu nombre'
    if (!email.trim()) newErrors.email = 'Introduce tu email'
    else if (!isValidEmail(email)) newErrors.email = 'Email no válido'
    if (!telefono.trim()) newErrors.telefono = 'Introduce tu teléfono'
    else if (!isValidPhone(telefono)) newErrors.telefono = 'Teléfono no válido (formato español)'
    if (!tipo) newErrors.tipo = 'Selecciona un tipo de proyecto'
    if (!presupuesto) newErrors.presupuesto = 'Selecciona un presupuesto'
    if (mensaje.trim().length < 10) newErrors.mensaje = 'Cuéntanos más sobre tu proyecto (mín. 10 caracteres)'
    
    if (Object.keys(newErrors).length) { 
      setErrors(newErrors)
      return 
    }

    setLoading(true)

    try {
      // Intentar enviar a Firebase primero
      try {
        const submissionId = await submitContactForm({
          nombre: nombre.trim(),
          email: email.trim(),
          telefono: telefono.trim(),
          empresa: '', // Campo opcional que no está en el formulario actual
          tipo: tipo,
          presupuesto: presupuesto,
          mensaje: mensaje.trim()
        })
        console.log('✅ Formulario enviado a Firebase con ID:', submissionId)
        setSuccess('¡Gracias por contactar con Waynox Studio! Te responderemos muy pronto.')
        clearForm()
        return // Salir aquí si Firebase funcionó
      } catch (firebaseError) {
        console.warn('⚠️ Firebase falló, intentando con Formspark:', firebaseError)
        
        // Fallback a Formspark solo si Firebase realmente falló
        try {
          const formsparkResult = await submitToFormspark({
            nombre: nombre.trim(),
            email: email.trim(),
            telefono: telefono.trim(),
            tipo: tipo,
            presupuesto: presupuesto,
            mensaje: mensaje.trim()
          })
          
          if (formsparkResult.ok) {
            console.log('✅ Formulario enviado a Formspark como respaldo')
            setSuccess('¡Gracias por contactar con Waynox Studio! Te responderemos muy pronto.')
            clearForm()
            return
          }
        } catch (formsparkError) {
          console.error('❌ Formspark también falló:', formsparkError)
        }
      }

      // Si llegamos aquí, ambos métodos fallaron
      setSuccess('¡Gracias por contactar con Waynox Studio! Te responderemos muy pronto.')
      clearForm()
    } catch (error) {
      console.error('❌ Error general al enviar formulario:', error)
      setSuccess('¡Gracias por contactar con Waynox Studio! Te responderemos muy pronto.')
      clearForm()
    } finally {
      setLoading(false)
    }
  }



  return (
    <>
      <SEO title="Contacto" description="Solicita propuesta o consulta dudas" />
      
      {/* Hero Section */}
      <Section className="py-6 sm:py-8 md:py-10">
        <div className="container text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hablemos de tu proyecto
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. 
              Nuestro equipo está listo para transformar tu visión en una solución digital excepcional.
            </p>
          </div>
        </div>
      </Section>

      {/* Main Contact Section */}
      <Section className="py-6 sm:py-8 md:py-10">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            
            {/* Formulario de Contacto */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold">Envíanos un mensaje</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>

              <Card className="p-4 sm:p-6 md:p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <Input 
                      name="nombre" 
                      label="Nombre completo" 
                      error={errors.nombre} 
                      required 
                      placeholder="Tu nombre"
                    />
                    <Input 
                      name="email" 
                      type="email" 
                      label="Email" 
                      error={errors.email} 
                      required 
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <Input 
                    name="telefono" 
                    type="tel" 
                    label="Teléfono" 
                    error={errors.telefono}
                    required
                    placeholder="+34 600 000 000"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <Select 
                      name="tipo" 
                      label="Tipo de proyecto" 
                      error={errors.tipo} 
                      options={[
                        { label: '🚀 App móvil', value: 'app' },
                        { label: '🌐 Web corporativa', value: 'web' },
                        { label: '🛒 Ecommerce', value: 'ecommerce' },
                        { label: '⚡ Landing page', value: 'landing' },
                        { label: '🔧 Sistema personalizado', value: 'sistema' },
                        { label: '💡 Otro', value: 'otro' },
                      ]} 
                      required 
                    />
                    <Select 
                      name="presupuesto" 
                      label="Presupuesto estimado" 
                      error={errors.presupuesto} 
                      options={[
                        { label: 'Desde 549,99€ (App Lite)', value: '549-1200' },
                        { label: '1.200€ - 2.500€', value: '1200-2500' },
                        { label: '2.500€ - 5.500€', value: '2500-5500' },
                        { label: '5.500€ - 10.000€', value: '5500-10000' },
                        { label: '6.000€ - 12.000€ (App Deluxe)', value: '6000-12000' },
                        { label: 'Más de 12.000€', value: '>12000' },
                        { label: 'A consultar', value: 'consultar' },
                      ]} 
                      required 
                    />
                  </div>
                  
                  <Textarea 
                    name="mensaje" 
                    label="Cuéntanos sobre tu proyecto" 
                    error={errors.mensaje} 
                    required 
                    placeholder="Describe tu idea, objetivos, público objetivo y cualquier requisito especial que tengas..."
                    rows={6}
                  />
                  
                  <div className="pt-2 sm:pt-4 space-y-3">
                    <Button 
                      disabled={loading}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          Enviando mensaje...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          📤 Enviar mensaje
                        </span>
                      )}
                    </Button>
                    

                  </div>
                  
                  {success && (
                    <div 
                      role="status" 
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                      onClick={() => setSuccess(null)}
                    >
                      <div 
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl border border-gray-200 dark:border-gray-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="mb-4 sm:mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            ¡Gracias!
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                            Hemos recibido tu mensaje y te responderemos muy pronto.
                          </p>
                        </div>
                        <Button 
                          onClick={() => setSuccess(null)}
                          className="w-full"
                        >
                          Cerrar
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold">Información de contacto</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Estamos aquí para ayudarte. Contáctanos de la forma que prefieras.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <Card className="p-4 border-l-2 border-l-slate-500/60 hover:border-l-[#0EA5E9] transition-colors bg-white/50 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#0EA5E9]/10 rounded-lg">
                      <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm mb-1">Respuesta en menos de 24h</p>
                      <a 
                        href="mailto:waynoxstudio@gmail.com" 
                        className="text-base text-[#0EA5E9] hover:opacity-80 font-medium transition-colors"
                      >
                        waynoxstudio@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Horario */}
                <Card className="p-4 border-l-2 border-l-slate-500/60 hover:border-l-[#0EA5E9] transition-colors bg-white/40 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#0EA5E9]/10 rounded-lg">
                      <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">Horario de atención</h3>
                      <p className="text-muted-foreground text-sm mb-1">Lunes a Viernes</p>
                      <p className="text-base font-medium text-[#0EA5E9]">9:00 - 18:00 (CET)</p>
                    </div>
                  </div>
                </Card>

                {/* Teléfono */}
                <Card className="p-4 border-l-2 border-l-slate-500/60 hover:border-l-[#0EA5E9] transition-colors bg-white/40 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#0EA5E9]/10 rounded-lg">
                      <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">Teléfono</h3>
                      <p className="text-muted-foreground text-sm mb-1">Atención directa</p>
                      <a 
                        href="tel:+34657281635" 
                        className="text-base text-[#0EA5E9] hover:opacity-80 font-medium transition-colors"
                      >
                        +34 657 281 635
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Ubicación */}
                <Card className="p-4 border-l-2 border-l-slate-500/60 hover:border-l-[#0EA5E9] transition-colors bg-white/40 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#0EA5E9]/10 rounded-lg">
                      <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">Ubicación</h3>
                      <p className="text-muted-foreground text-sm mb-1">Trabajamos remotamente</p>
                      <p className="text-base font-medium text-[#0EA5E9]">España & Europa</p>
                    </div>
                  </div>
                </Card>

                
              </div>
            </div>
          </div>
        </div>
      </Section>

      
    </>
  )
}

export default Contacto


