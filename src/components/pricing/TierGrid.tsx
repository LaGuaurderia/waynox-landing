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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.plan}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
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
