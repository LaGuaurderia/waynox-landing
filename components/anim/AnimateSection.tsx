import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInViewOnce } from '../../lib/anim/hooks';
import { fadeUp } from '../../lib/anim/motions';

interface AnimateSectionProps {
  children: React.ReactNode;
  as?: 'section' | 'div';
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export const AnimateSection: React.FC<AnimateSectionProps> = ({
  children,
  as: Component = 'section',
  delay = 0,
  y = 12,
  className = '',
  once = true
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewOnce(ref, { threshold: 0.25 });

  const animationProps = once 
    ? (isInView ? fadeUp(delay, y) : { initial: { opacity: 0, y } })
    : fadeUp(delay, y);

  return (
    <motion.div
      ref={ref as any}
      {...animationProps}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};
