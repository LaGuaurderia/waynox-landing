import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionSafe } from '../../lib/anim/hooks';

interface ParallaxLayer {
  children: React.ReactNode;
  speed: number;
  className?: string;
}

interface ParallaxHeroProps {
  layers: ParallaxLayer[];
  maxOffset?: number;
  className?: string;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  layers,
  maxOffset = 100,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const { scrollY } = useScroll();
  const [isInView, setIsInView] = useState(false);

  // Si reduced motion, desactivar parallax
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={className}>
        {layers.map((layer, index) => (
          <div key={index} className={layer.className}>
            {layer.children}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {layers.map((layer, index) => {
        const y = useTransform(
          scrollY,
          [0, maxOffset],
          [0, -layer.speed * maxOffset]
        );

        return (
          <motion.div
            key={index}
            className={layer.className}
            style={{
              y,
              willChange: 'transform'
            }}
          >
            {layer.children}
          </motion.div>
        );
      })}
    </div>
  );
};
