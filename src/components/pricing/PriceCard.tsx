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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
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
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 break-words">{price}</span>
          <span className="text-xs text-neutral-600 dark:text-neutral-400">+ IVA</span>
        </div>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-y-2 text-sm min-h-[120px] text-neutral-600 dark:text-neutral-400">
        <div className="inline-flex items-start gap-2 leading-6">
          <ClockIcon className="w-4 h-4 mt-0.5" />
          <div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Entrega</div>
            <div className="text-xs break-words">{delivery}</div>
          </div>
        </div>
        <div className="inline-flex items-start gap-2 leading-6">
          <LayersIcon className="w-4 h-4 mt-0.5" />
          <div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Alcance</div>
            <div className="text-xs break-words">{scope}</div>
          </div>
        </div>
        <div className="inline-flex items-start gap-2 leading-6">
          <ServerIcon className="w-4 h-4 mt-0.5" />
          <div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Backend</div>
            <div className="text-xs break-words">{backend}</div>
          </div>
        </div>
        <div className="inline-flex items-start gap-2 leading-6">
          <StoreIcon className="w-4 h-4 mt-0.5" />
          <div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Publicación</div>
            <div className="text-xs break-words">{publication}</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 min-h-[140px] text-sm">
        <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200 mb-2">Incluye</div>
        <ul className="space-y-2 marker:text-primary-600">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="inline-flex items-center gap-2 text-sm leading-6">
              <CheckIcon className="w-4 h-4" />
              <span className="text-neutral-600 dark:text-neutral-400 break-words line-clamp-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => window.location.href = ctaLink}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 text-white hover:brightness-95 transition-colors"
            size="md"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default PriceCard
