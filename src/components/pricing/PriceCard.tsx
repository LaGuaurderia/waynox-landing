import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import Badge from '../Badge'
import { 
  CheckIcon, 
  ClockIcon, 
  LayersIcon, 
  ServerIcon, 
  StoreIcon,
  ZapIcon,
  DatabaseIcon,
  GlobeIcon
} from 'lucide-react'

type PlanType = 'Lite' | 'Start' | 'Pro' | 'Deluxe'

interface PriceCardProps {
  plan: PlanType
  price: string
  delivery: string
  scope: string
  features: string[]
  integrations: string[]
  backend: string
  publication: string
  ctaText: string
  ctaLink: string
  delay?: number
  featured?: boolean
}

const planIcons = {
  Lite: ClockIcon,
  Start: DatabaseIcon,
  Pro: GlobeIcon,
  Deluxe: ZapIcon
}

export const PriceCard: React.FC<PriceCardProps> = ({
  plan,
  price,
  delivery,
  scope,
  features,
  integrations,
  backend,
  publication,
  ctaText,
  ctaLink,
  delay = 0,
  featured = false
}) => {
  const IconComponent = planIcons[plan]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col ${
        featured 
          ? 'border-[#1E90FF] bg-[#222] shadow-[0_10px_30px_rgba(30,144,255,0.15)]' 
          : 'border-[#444] bg-[#111] hover:border-[#1E90FF] hover:bg-[#222] hover:shadow-[0_10px_30px_rgba(30,144,255,0.1)]'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-[#1E90FF] text-white px-4 py-1 text-sm font-semibold">
            Más Popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pb-6 border-b border-[#444]">
        <div className="flex items-center justify-center mb-3">
          <IconComponent className="w-8 h-8 text-[#1E90FF] mr-2" />
          <Badge className="bg-[#333] text-white border border-[#444] px-3 py-1 font-semibold">
            {plan}
          </Badge>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-[#F5F7FB] text-sm ml-1">+ IVA</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="text-sm flex-1 space-y-4">
        {/* Entrega */}
        <div className="flex items-start space-x-3">
          <ClockIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Entrega:</span>
            <span className="text-[#F5F7FB] ml-2">{delivery}</span>
          </div>
        </div>

        {/* Alcance */}
        <div className="flex items-start space-x-3">
          <LayersIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Alcance:</span>
            <span className="text-[#F5F7FB] ml-2">{scope}</span>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-start space-x-3">
          <ServerIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Backend:</span>
            <span className="text-[#F5F7FB] ml-2">{backend}</span>
          </div>
        </div>

        {/* Integraciones */}
        {integrations.length > 0 && (
          <div className="flex items-start space-x-3">
            <ZapIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white font-medium">Integraciones:</span>
              <div className="mt-1 space-y-1">
                {integrations.map((integration, index) => (
                  <span key={index} className="text-[#F5F7FB] block text-xs">{integration}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Publicación */}
        <div className="flex items-start space-x-3">
          <StoreIcon className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Publicación:</span>
            <span className="text-[#F5F7FB] ml-2">{publication}</span>
          </div>
        </div>

        {/* Características */}
        <div className="pt-2">
          <span className="text-white font-medium block mb-3">Incluye:</span>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#1E90FF] flex-shrink-0" />
                <span className="text-[#F5F7FB] text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <Button
          onClick={() => window.location.href = ctaLink}
          className="w-full bg-[#1E90FF] hover:bg-[#1E90FF] hover:brightness-110 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          size="lg"
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  )
}

export default PriceCard
