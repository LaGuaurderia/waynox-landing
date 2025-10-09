import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TransitionOverlayProps {
  isVisible: boolean
  direction: 'left' | 'right'
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ isVisible, direction }) => {
  const slideVariants = {
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0
    },
    visible: {
      x: '0%',
      opacity: 1
    },
    exit: {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0, delay: 0 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Waynox Studio
              </h2>
              <p className="text-xl text-blue-100">
                del boceto al código
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TransitionOverlay
