import React from 'react'
import { motion } from 'framer-motion'
import { ShieldIcon, ClockIcon, CheckIcon } from 'lucide-react'

interface MaintenancePlan {
  name: string
  price: string
  sla: string
  features: string[]
}

interface CareCardProps {
  plan: MaintenancePlan
  delay?: number
}

export const CareCard: React.FC<CareCardProps> = ({ plan, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group rounded-xl p-3 transition-all duration-200 border border-neutral-200 dark:border-neutral-800 hover:!border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/20 h-full flex flex-col"
      style={{
        backgroundColor: 'var(--color-bg-soft)'
      }}
    >
      {/* Header */}
      <div 
        className="text-center mb-3 pb-3"
        style={{ borderBottomColor: 'var(--color-border)' }}
      >
        <div className="flex items-center justify-center mb-1">
          <ShieldIcon 
            className="w-8 h-8 mr-2" 
            style={{ color: 'var(--color-accent)' }}
          />
          <h3 
            className="text-xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            {plan.name}
          </h3>
        </div>
        
        <div className="mb-4">
          <span 
            className="text-3xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            {plan.price}
          </span>
        </div>
      </div>

      {/* SLA destacado */}
      <div className="mb-3">
        <div 
          className="inline-flex items-center space-x-2 rounded-full px-4 py-2"
          style={{
            backgroundColor: 'rgba(0, 191, 255, 0.2)',
            border: '1px solid var(--color-accent)'
          }}
        >
          <ClockIcon 
            className="w-4 h-4" 
            style={{ color: 'var(--color-accent)' }}
          />
          <span 
            className="font-semibold text-sm"
            style={{ color: 'var(--color-accent)' }}
          >
            SLA: {plan.sla}
          </span>
        </div>
      </div>

      {/* Características */}
      <div className="space-y-1 flex-1">
        {plan.features.map((feature, index) => {
          const isItalic = feature.startsWith('Pensado para:');
          return (
            <div key={index} className="flex items-start space-x-3">
              <CheckIcon 
                className="w-4 h-4 mt-0.5 flex-shrink-0" 
                style={{ color: 'var(--color-accent)' }}
              />
              <span 
                className={`text-sm leading-relaxed ${isItalic ? 'italic' : ''}`}
                style={{ color: 'var(--color-text)' }}
              >
                {feature}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div 
        className="mt-3 pt-3"
        style={{ borderTopColor: 'var(--color-border)' }}
      >
        <button 
          className="w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: 'white'
          }}
        >
          Contratar {plan.name}
        </button>
      </div>
    </motion.div>
  )
}

export default CareCard
