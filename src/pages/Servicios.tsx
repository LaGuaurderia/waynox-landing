import React from 'react'
import { motion } from 'framer-motion'
import { 
  TierGrid, 
  MaintenanceGrid, 
  Notes, 
  StickyTOC,
  FAQ
} from '../components/pricing'
import { 
  mobileAppPlans, 
  maintenancePlans, 
  faqItems, 
  contractNotes 
} from '../data/mobileAppPlans'
import { 
  SmartphoneIcon, 
  ShieldIcon, 
  FileTextIcon, 
  HelpCircleIcon,
  CalculatorIcon,
  MessageCircleIcon
} from 'lucide-react'
import SEO from '../components/SEO'

const Servicios: React.FC = () => {
  const tocItems = [
    { id: 'planes-apps', label: 'Planes de app móvil', icon: <SmartphoneIcon className="w-5 h-5" /> },
    { id: 'mantenimiento', label: 'Mantenimiento mensual', icon: <ShieldIcon className="w-5 h-5" /> },
    { id: 'notas', label: 'Notas', icon: <FileTextIcon className="w-5 h-5" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircleIcon className="w-5 h-5" /> }
  ]

  return (
    <>
      <SEO 
        title="Servicios y Tarifas 2025 — Apps móviles | Waynox Studio"
        description="Desarrollo de apps móviles en Flutter/PWA con soporte continuo. Planes desde 549€ hasta 12.000€. Mantenimiento mensual opcional con SLA garantizado."
      />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center text-center bg-[#111] py-16 lg:py-20 border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold text-white mb-6">
              Servicios y Tarifas 2025 —
              <span className="text-[#1E90FF]"> Apps móviles</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-[#F5F7FB] mb-8 leading-relaxed max-w-3xl mx-auto">
              Planes cerrados en Flutter/PWA con mantenimiento mensual opcional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/precios'}
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-[#1E90FF] hover:bg-[#1E90FF] hover:brightness-110 text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <CalculatorIcon className="w-5 h-5 mr-2" />
                Calcula tu presupuesto
              </button>
              
              <button
                onClick={() => window.location.href = '/contacto'}
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-transparent border-2 border-[#444] hover:border-[#1E90FF] text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircleIcon className="w-5 h-5 mr-2" />
                Solicitar propuesta
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenido principal con grid de 12 columnas */}
      <div className="bg-[#111] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Columna izquierda: StickyTOC (desktop) */}
            <div className="lg:col-span-3">
              <StickyTOC items={tocItems} />
            </div>
            
            {/* Columna derecha: Contenido principal */}
            <div className="lg:col-span-9">
              
              {/* Planes de app móvil */}
              <section id="planes-apps" className="py-16 lg:py-24 border-b border-[#333]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12 lg:mb-20"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Planes de app móvil
                  </h2>
                  <p className="text-[#F5F7FB] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                    Desarrollamos exclusivamente apps móviles en Flutter y PWA. Cada plan incluye el desarrollo completo, testing y documentación técnica.
                  </p>
                </motion.div>
                <TierGrid plans={mobileAppPlans} />
              </section>

              {/* Mantenimiento mensual */}
              <section id="mantenimiento" className="py-16 lg:py-24 bg-[#222] rounded-2xl my-8 lg:my-12 border border-[#444]">
                <div className="px-6 lg:px-8 py-8 lg:py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-20"
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Mantenimiento mensual para apps móviles
                    </h2>
                    <p className="text-[#F5F7FB] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                      SLA garantizado y soporte continuo para mantener tu app actualizada y funcionando perfectamente
                    </p>
                  </motion.div>
                  <MaintenanceGrid plans={maintenancePlans} />
                </div>
              </section>

              {/* Notas contractuales */}
              <section id="notas" className="py-16 lg:py-24 border-b border-[#333]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12 lg:mb-20"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Notas importantes
                  </h2>
                  <p className="text-[#F5F7FB] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                    Condiciones y detalles que debes conocer antes de contratar nuestros servicios
                  </p>
                </motion.div>
                
                <div className="max-w-4xl mx-auto">
                  <Notes
                    title="Condiciones del contrato"
                    items={contractNotes}
                  />
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="py-16 lg:py-24 bg-[#222] rounded-2xl my-8 lg:my-12 border border-[#444]">
                <div className="px-6 lg:px-8 py-8 lg:py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-20"
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Preguntas frecuentes sobre apps móviles
                    </h2>
                    <p className="text-[#F5F7FB] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                      Resolvemos las dudas más comunes sobre nuestros servicios y planes
                    </p>
                  </motion.div>
                  
                  <div className="max-w-4xl mx-auto">
                    <FAQ items={faqItems} />
                  </div>
                </div>
              </section>

              {/* CTA Final */}
              <section className="py-16 lg:py-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                    ¿Buscas un plan a medida?
                  </h2>
                  <p className="text-[#F5F7FB] text-base lg:text-lg mb-8">
                    Si ninguno de nuestros planes se ajusta a tus necesidades, 
                    podemos crear una propuesta personalizada para tu proyecto
                  </p>
                  
                  <button
                    onClick={() => window.location.href = '/contacto'}
                    className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-[#1E90FF] hover:bg-[#1E90FF] hover:brightness-110 text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircleIcon className="w-5 h-5 mr-2" />
                    Pide presupuesto personalizado
                  </button>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicios


