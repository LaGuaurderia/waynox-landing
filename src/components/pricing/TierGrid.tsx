import React from 'react'
import { motion } from 'framer-motion'
import { PriceCard } from './PriceCard'
import { MobileAppPlan } from '../../data/mobileAppPlans'

interface TierGridProps {
  plans: MobileAppPlan[]
}

export const TierGrid: React.FC<TierGridProps> = ({ plans }) => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 max-w-4xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.plan}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <PriceCard
              {...plan}
              delay={0}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default TierGrid
