import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInViewOnce } from '../../../lib/anim/hooks';
import { fadeUp, fadeIn, scaleIn } from '../../../lib/anim/motions';

interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn';
  delay?: number;
  className?: string;
  once?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  once = true
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewOnce(ref, { threshold: 0.25 });

  const getAnimationProps = () => {
    switch (variant) {
      case 'fadeIn':
        return fadeIn(delay);
      case 'scaleIn':
        return scaleIn(delay);
      default:
        return fadeUp(delay, 12);
    }
  };

  const animationProps = getAnimationProps();
  
  const finalProps = once 
    ? (isInView ? animationProps : { initial: animationProps.initial })
    : animationProps;

  return (
    <motion.div
      ref={ref as any}
      {...finalProps}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
