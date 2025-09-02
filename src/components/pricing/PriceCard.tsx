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

type PlanType = 'Lite' | 'Start' | 'Pro' | 'Deluxe' | 'Landing' | 'eCommerce'

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
  Deluxe: ZapIcon,
  Landing: LayersIcon,
  eCommerce: StoreIcon
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
  const IconComponent = planIcons[plan] || ClockIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
        featured 
          ? 'border-brand-blue bg-brand-black-soft shadow-[0_10px_30px_rgba(0,191,255,0.15)]' 
          : 'border-brand-gray bg-brand-black hover:border-brand-blue hover:bg-brand-black-soft hover:shadow-[0_10px_30px_rgba(0,191,255,0.1)]'
      }`}
      style={{
        backgroundColor: 'var(--color-bg-soft)',
        borderColor: featured ? 'var(--color-accent)' : 'var(--color-border)',
        color: 'var(--color-text)'
      }}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge 
            className="px-4 py-1 text-sm font-semibold"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
          >
            Más Popular
          </Badge>
        </div>
      )}

      {/* Header compacto horizontal */}
      <div 
        className="flex items-center justify-between mb-6 pb-4"
        style={{ borderBottomColor: 'var(--color-border)' }}
      >
        <div className="flex items-center space-x-4">
          <IconComponent 
            className="w-8 h-8" 
            style={{ color: 'var(--color-accent)' }}
          />
          <div>
            <Badge 
              className="border px-3 py-1 text-sm font-semibold mb-1"
              style={{
                backgroundColor: 'var(--color-border)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)'
              }}
            >
              {plan}
            </Badge>
            <div 
              className="text-2xl font-bold"
              style={{ color: 'var(--color-text)' }}
            >
              {price}
            </div>
            <span 
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              + IVA
            </span>
          </div>
        </div>
        
        <div className="text-right">
          <Button
            onClick={() => window.location.href = ctaLink}
            className="font-semibold py-2 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
            size="md"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Contenido en grid compacto */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {/* Entrega */}
        <div className="flex items-start space-x-2">
          <ClockIcon 
            className="w-4 h-4 mt-0.5 flex-shrink-0" 
            style={{ color: 'var(--color-accent)' }}
          />
          <div>
            <span 
              className="font-medium text-xs"
              style={{ color: 'var(--color-text)' }}
            >
              Entrega:
            </span>
            <span 
              className="text-xs block"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {delivery}
            </span>
          </div>
        </div>

        {/* Alcance */}
        <div className="flex items-start space-x-2">
          <LayersIcon 
            className="w-4 h-4 mt-0.5 flex-shrink-0" 
            style={{ color: 'var(--color-accent)' }}
          />
          <div>
            <span 
              className="font-medium text-xs"
              style={{ color: 'var(--color-text)' }}
            >
              Alcance:
            </span>
            <span 
              className="text-xs block"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {scope}
            </span>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-start space-x-2">
          <ServerIcon 
            className="w-4 h-4 mt-0.5 flex-shrink-0" 
            style={{ color: 'var(--color-accent)' }}
          />
          <div>
            <span 
              className="font-medium text-xs"
              style={{ color: 'var(--color-text)' }}
            >
              Backend:
            </span>
            <span 
              className="text-xs block"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {backend}
            </span>
          </div>
        </div>

        {/* Publicación */}
        <div className="flex items-start space-x-2">
          <StoreIcon 
            className="w-4 h-4 mt-0.5 flex-shrink-0" 
            style={{ color: 'var(--color-accent)' }}
          />
          <div>
            <span 
              className="font-medium text-xs"
              style={{ color: 'var(--color-text)' }}
            >
              Publicación:
            </span>
            <span 
              className="text-xs block"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {publication}
            </span>
          </div>
        </div>
      </div>

      {/* Características e integraciones en una fila */}
      <div 
        className="mt-4 pt-4"
        style={{ borderTopColor: 'var(--color-border)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Características */}
          <div>
            <span 
              className="font-medium text-xs block mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Incluye:
            </span>
            <div className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckIcon 
                    className="w-3 h-3 flex-shrink-0" 
                    style={{ color: 'var(--color-accent)' }}
                  />
                  <span 
                    className="text-xs"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
              {features.length > 3 && (
                <span 
                  className="text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  +{features.length - 3} más
                </span>
              )}
            </div>
          </div>

          {/* Integraciones */}
          <div>
            <span 
              className="font-medium text-xs block mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Integraciones:
            </span>
            {integrations.length > 0 ? (
              <div className="space-y-1">
                {integrations.slice(0, 2).map((integration, index) => (
                  <span 
                    key={index} 
                    className="text-xs block"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {integration}
                  </span>
                ))}
                {integrations.length > 2 && (
                  <span 
                    className="text-xs"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    +{integrations.length - 2} más
                  </span>
                )}
              </div>
            ) : (
              <span 
                className="text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Sin integraciones
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PriceCard
