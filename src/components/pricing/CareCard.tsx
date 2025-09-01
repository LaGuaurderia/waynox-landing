import React from 'react'
import { motion } from 'framer-motion'
import { ShieldIcon, ClockIcon, CheckIcon } from 'lucide-react'
import { MaintenancePlan } from '../../data/mobileAppPlans'

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
      className="bg-[#222] border border-[#444] rounded-2xl p-6 hover:border-[#1E90FF] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(30,144,255,0.15)] group h-full flex flex-col"
    >
      {/* Header */}
      <div className="text-center mb-6 pb-6 border-b border-[#444]">
        <div className="flex items-center justify-center mb-3">
          <ShieldIcon className="w-8 h-8 text-[#1E90FF] mr-2" />
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{plan.price}</span>
          <span className="text-[#F5F7FB] text-sm ml-1">/mes</span>
        </div>
      </div>

      {/* SLA destacado */}
      <div className="mb-6">
        <div className="inline-flex items-center space-x-2 bg-[#1E90FF] bg-opacity-20 border border-[#1E90FF] rounded-full px-4 py-2">
          <ClockIcon className="w-4 h-4 text-[#1E90FF]" />
          <span className="text-[#1E90FF] font-semibold text-sm">
            SLA: {plan.sla}
          </span>
        </div>
      </div>

      {/* Características */}
      <div className="space-y-3 flex-1">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckIcon className="w-4 h-4 text-[#1E90FF] mt-0.5 flex-shrink-0" />
            <span className="text-[#F5F7FB] text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-[#444]">
        <button className="w-full bg-[#1E90FF] hover:bg-[#1E90FF] hover:brightness-110 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
          Contratar {plan.name}
        </button>
      </div>
    </motion.div>
  )
}

export default CareCard
