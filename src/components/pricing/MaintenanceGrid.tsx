import React from 'react'
import { motion } from 'framer-motion'
import { CareCard } from './CareCard'
import { MaintenancePlan } from '../../data/mobileAppPlans'

interface MaintenanceGridProps {
  plans: MaintenancePlan[]
}

export const MaintenanceGrid: React.FC<MaintenanceGridProps> = ({ plans }) => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <CareCard
              plan={plan}
              delay={0}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MaintenanceGrid
