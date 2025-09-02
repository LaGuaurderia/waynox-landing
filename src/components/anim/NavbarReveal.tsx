import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../../lib/anim/hooks';
import { navbarReveal } from '../../../lib/anim/motions';

interface NavbarRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const NavbarReveal: React.FC<NavbarRevealProps> = ({
  children,
  className = '',
  threshold = 8
}) => {
  const scrollY = useScrollPosition();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(scrollY > threshold);
  }, [scrollY, threshold]);

  return (
    <AnimatePresence>
      {isRevealed && (
        <motion.div
          className={`fixed top-0 left-0 right-0 z-50 ${className}`}
          initial="initial"
          animate="animate"
          exit="initial"
          variants={navbarReveal}
          style={{
            background: 'rgba(11, 11, 11, 0.6)',
            backdropFilter: 'blur(8px)',
            willChange: 'opacity, backdrop-filter'
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarReveal;
