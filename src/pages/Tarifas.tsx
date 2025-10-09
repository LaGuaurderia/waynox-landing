import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PriceCard, 
  CareCard, 
  FAQ, 
  ToggleTabs,
  FloatingCTA,
  TierGrid, 
  MaintenanceGrid
} from '../components/pricing'
import { 
  mobileAppPlans, 
  maintenancePlans, 
  faqItems 
} from '../data/mobileAppPlans'
import { 
  webPlans, 
  webMaintenancePlans
} from '../data/webPlans'
import { 
  CalculatorIcon,
  MessageCircleIcon
} from 'lucide-react'
import SEO from '../components/SEO'
import { Button } from '../components/Button'

type TabType = 'mobile' | 'web'



const Tarifas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mobile')

  // Persistir selección en localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem('waynox-pricing-tab') as TabType
    if (savedTab && (savedTab === 'mobile' || savedTab === 'web')) {
      setActiveTab(savedTab)
    }
  }, [])

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    localStorage.setItem('waynox-pricing-tab', tab)
  }

  const scrollToContact = () => {
    window.location.href = '/contacto'
  }

  return (
    <>
      <SEO 
        title="Tarifas y Planes 2025 | Waynox Studio" 
        description="Paquetes cerrados con tiempos realistas y soporte continuo. Apps móviles Flutter/PWA y desarrollo web Next.js/SEO. Precios sin IVA." 
      />
      
      {/* Hero Section */}
      <section className="bg-brand-black text-[var(--color-text)] py-14 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            Tarifas y Planes 2025
          </motion.h1>
          <motion.p
            className="group mt-4 text-lg lg:text-xl text-brand-gray text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
          >
            <span className="relative inline-block transition-colors duration-200 group-hover:text-[#0EA5E9]">
              Paquetes cerrados con tiempos realistas y soporte continuo
              <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-[#0EA5E9] transition-all duration-200 ease-out group-hover:w-full" />
            </span>
          </motion.p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-brand-black pt-2 pb-2">
        <div className="container mx-auto px-4">
          <ToggleTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </section>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeTab === 'mobile' && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0 }}
          >
            {/* Apps Móviles Section */}
            <section className="bg-brand-black text-[var(--color-text)] pt-8 pb-16 lg:pt-12 lg:pb-24">
              <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Apps Móviles
                  </h2>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 auto-rows-fr">
                  {mobileAppPlans.map((plan, index) => (
                    <PriceCard
                      key={plan.plan}
                      plan={plan.plan}
                      price={plan.price}
                      delivery={plan.delivery}
                      scope={plan.scope}
                      features={plan.features}
                      integrations={plan.integrations}
                      backend={plan.backend}
                      publication={plan.publication}
                      ctaText={plan.ctaText}
                      ctaLink={plan.ctaLink}
                      featured={plan.featured}
                      delay={index * 0.1}
                    />
                  ))}
                </div>

                {/* Maintenance Section */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                    Mantenimiento mensual
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {maintenancePlans.map((plan, index) => (
                      <CareCard
                        key={plan.name}
                        plan={plan}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>


              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'web' && (
          <motion.div
            key="web"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0 }}
          >
            {/* Web Section */}
            <section className="bg-brand-black text-[var(--color-text)] pt-8 pb-16 lg:pt-12 lg:pb-24">
              <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Web (Next.js / SEO)
                  </h2>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 auto-rows-fr">
                  {webPlans.map((plan, index) => (
                    <PriceCard
                      key={plan.plan}
                      plan={plan.plan}
                      price={plan.price}
                      delivery={plan.delivery}
                      scope={plan.scope}
                      features={plan.features}
                      integrations={plan.integrations}
                      backend={plan.backend}
                      publication={plan.publication}
                      ctaText={plan.ctaText}
                      ctaLink={plan.ctaLink}
                      featured={plan.featured}
                      delay={index * 0.1}
                    />
                  ))}
                </div>

                {/* Maintenance Section */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                    Mantenimiento mensual
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {webMaintenancePlans.map((plan, index) => (
                      <CareCard
                        key={plan.name}
                        plan={plan}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>


              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="bg-brand-black-soft text-[var(--color-text)] pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Resolvemos tus dudas sobre nuestros planes y servicios
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-black text-[var(--color-text)] py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Nuestros expertos están listos para ayudarte a elegir el plan perfecto y comenzar el desarrollo
            </p>
            <div className="flex justify-center">
              <Button
                onClick={scrollToContact}
                variant="ghost"
                className="border-2 border-brand-gray text-[var(--color-text)] hover:border-brand-blue hover:text-brand-blue font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200"
                size="lg"
              >
                Contáctanos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      {/* <FloatingCTA /> */}
    </>
  )
}

export default Tarifas


