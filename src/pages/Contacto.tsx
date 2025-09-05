import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import ContactForm from '../components/forms/ContactForm'
import SEO from '../components/SEO'

const Contacto: React.FC = () => {



  return (
    <>
      <SEO title="Contacto" description="Solicita propuesta o consulta dudas" />
      
      {/* Hero Section */}
      <Section className="py-6 sm:py-8 md:py-10">
        <div className="container text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
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
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Información de Contacto - Primero en móvil */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
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

            {/* Formulario de Contacto - Segundo en móvil */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold">Envíanos un mensaje</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>

              <Card className="p-4 sm:p-6 md:p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </Section>

      
    </>
  )
}

export default Contacto


