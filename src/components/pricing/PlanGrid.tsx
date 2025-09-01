import React from 'react'
import { motion } from 'framer-motion'
import { PriceCard } from './PriceCard'
import { staggerContainer } from '../../lib/motionPresets'

interface Plan {
  plan: 'Lite' | 'Start' | 'Pro' | 'Deluxe'
  price: string
  delivery: string
  scope: string
  features: string[]
  integrations: string[]
  backend: string
  publication: string
  ctaText: string
  ctaLink: string
  featured?: boolean
}

interface PlanGridProps {
  plans: Plan[]
}

export const PlanGrid: React.FC<PlanGridProps> = ({ plans }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {plans.map((plan, index) => (
        <PriceCard
          key={plan.plan}
          {...plan}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  )
}

export default PlanGrid
