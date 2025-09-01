import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/anim/motions';

interface StaggeredHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  className?: string;
}

export const StaggeredHeading: React.FC<StaggeredHeadingProps> = ({
  text,
  as: Component = 'h2',
  delay = 0,
  className = ''
}) => {
  const words = text.split(' ');

  return (
    <motion.div
      {...stagger(0.08, delay)}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          {...fadeUp(0, 8)}
          style={{ 
            display: 'inline-block',
            marginRight: index === words.length - 1 ? 0 : '0.25em'
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
