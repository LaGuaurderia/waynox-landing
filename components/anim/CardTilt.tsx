import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe, useIsMobile } from '../../lib/anim/hooks';
import { tiltHover, scaleIn } from '../../lib/anim/motions';

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const CardTilt: React.FC<CardTiltProps> = ({
  children,
  className = '',
  intensity = 6
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotionSafe();
  const isMobile = useIsMobile();

  // En mobile o con reduced motion, solo scaleIn
  if (isMobile || prefersReducedMotion) {
    return (
      <motion.div
        ref={ref}
        className={className}
        {...scaleIn()}
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    
    setTilt({
      x: offsetY * intensity,
      y: -offsetX * intensity
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transition: { duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }
      }}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};
