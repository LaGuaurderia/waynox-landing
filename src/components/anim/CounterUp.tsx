import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotionSafe } from '../../../lib/anim/hooks';

interface CounterUpProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const CounterUp: React.FC<CounterUpProps> = ({
  from,
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { threshold: 0.25, once: true });
  const [count, setCount] = useState(from);
  const prefersReducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setCount(to);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, from, to, duration, prefersReducedMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default CounterUp;
