import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from '../../../lib/anim/hooks';
import { magneticHover } from '../../../lib/anim/motions';

interface MagneticCTAProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({
  label,
  onClick,
  href,
  icon,
  variant = 'primary',
  className = ''
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotionSafe();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    
    setMagneticOffset({
      x: Math.max(-6, Math.min(6, offsetX)),
      y: Math.max(-6, Math.min(6, offsetY))
    });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    ${variant === 'primary' 
      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
      : 'bg-gray-600 text-white hover:bg-gray-700'
    }
    ${className}
  `;

  const motionProps = prefersReducedMotion ? {} : {
    ...magneticHover,
    animate: {
      x: magneticOffset.x,
      y: magneticOffset.y,
      transition: { duration: 0.2 }
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ willChange: 'transform' }}
      >
        {icon && icon}
        {label}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={baseClasses}
      {...motionProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: 'transform' }}
    >
      {icon && icon}
      {label}
    </motion.button>
  );
};

export default MagneticCTA;
