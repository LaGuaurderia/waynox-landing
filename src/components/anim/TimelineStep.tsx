import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInViewOnce } from '../../../lib/anim/hooks';
import { fadeUp, timelineLine } from '../../../lib/anim/motions';

interface TimelineStepProps {
  index: number;
  title: string;
  desc: string;
  className?: string;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  index,
  title,
  desc,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { threshold: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Línea vertical */}
      <motion.div
        className="absolute left-6 top-0 w-0.5 bg-blue-500 h-full origin-top"
        {...timelineLine}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
      />
      
      {/* Círculo del paso */}
      <motion.div
        className="absolute left-4 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      />
      
      {/* Contenido */}
      <motion.div
        className="ml-16 pt-2"
        {...fadeUp(0.3)}
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      >
        <div className="text-sm text-blue-600 font-semibold mb-1">
          Paso {index}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TimelineStep;
