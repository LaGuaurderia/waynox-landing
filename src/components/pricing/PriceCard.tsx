import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '../Badge'
import { 
  CheckIcon, 
  ClockIcon, 
  LayersIcon, 
  ServerIcon, 
  StoreIcon,
  ZapIcon,
  DatabaseIcon,
  GlobeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from 'lucide-react'

type PlanType = 'Lite' | 'Start' | 'Pro' | 'Deluxe' | 'Landing' | 'eCommerce'

interface PriceCardProps {
  plan: PlanType
  price: string
  delivery: string
  scope?: string
  features: string[]
  integrations: string[]
  backend: string
  publication?: string
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
  backend,
  publication,
  delay = 0,
  featured = false
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const IconComponent = planIcons[plan] || ClockIcon
  
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 3)
  const hasMoreFeatures = features.length > 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0, delay: 0 }}
      viewport={{ once: true }}
      className={`group relative h-full flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 p-6 text-neutral-800 dark:text-neutral-200 transition-all duration-200 hover:!border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/20`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="px-3 py-1 rounded-full text-xs bg-primary-600 text-white dark:bg-primary-400 dark:text-black shadow">
            Más Popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="min-h-[110px] pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-800 text-balance">
        <div className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <Badge className="px-2 py-0.5 text-xs">{plan}</Badge>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span 
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 break-words"
            dangerouslySetInnerHTML={{ __html: price }}
          />
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center justify-center gap-2">
          <ClockIcon className="w-4 h-4" />
          <div className="text-center">
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Entrega</div>
            <div className="text-xs break-words">{delivery}</div>
          </div>
        </div>
        {scope && (
          <div className="flex items-center justify-center gap-2">
            <LayersIcon className="w-4 h-4" />
            <div className="text-center">
              <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Alcance</div>
              <div className="text-xs break-words">{scope}</div>
            </div>
          </div>
        )}
        {publication && (
          <div className="flex items-center justify-center gap-2">
            <StoreIcon className="w-4 h-4" />
            <div className="text-center">
              <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Publicación</div>
              <div className="text-xs break-words">{publication}</div>
            </div>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
        <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200 mb-2">Incluye</div>
        <ul className="space-y-2 marker:text-primary-600">
          {displayedFeatures.map((feature, index) => {
            const isIdealFor = feature.startsWith('Ideal para:')
            return (
              <li key={index} className={`${isIdealFor ? 'flex' : 'inline-flex'} items-start gap-2 text-sm leading-6`}>
                {!isIdealFor && <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                <span className={`text-neutral-600 dark:text-neutral-400 break-words ${isIdealFor ? 'italic' : ''}`}>{feature}</span>
              </li>
            )
          })}
        </ul>
        {hasMoreFeatures && (
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="mt-3 flex items-center gap-1 text-xs text-[#00BFFF] hover:text-[#0099CC] transition-colors"
          >
            {showAllFeatures ? (
              <>
                <ChevronUpIcon className="w-3 h-3" />
                Leer menos
              </>
            ) : (
              <>
                <ChevronDownIcon className="w-3 h-3" />
                Leer más
              </>
            )}
          </button>
        )}
      </div>

    </motion.div>
  )
}

export default PriceCard
