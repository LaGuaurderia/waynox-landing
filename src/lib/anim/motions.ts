// Presets de animación para Waynox
// Usa solo opacity y transform para máximo rendimiento

export const fadeUp = (delay = 0, dist = 12) => ({
  initial: { opacity: 0, y: dist },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0,
    delay,
    ease: [0.2, 0.8, 0.2, 1]
  }
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0,
    delay,
    ease: [0.2, 0.8, 0.2, 1]
  }
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0,
    delay,
    ease: [0.2, 0.8, 0.2, 1]
  }
});

export const stagger = (children = 0.08, delay = 0.2) => ({
  animate: {
    transition: {
      staggerChildren: children,
      delayChildren: delay
    }
  }
});

export const tiltHover = {
  whileHover: {
    rotateX: 6,
    rotateY: 6,
    transition: {
      duration: 0,
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
};

export const magneticHover = {
  whileHover: {
    y: -2,
    transition: {
      duration: 0,
      ease: [0.2, 0.8, 0.2, 1]
    }
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0
    }
  }
};

export const navbarReveal = {
  initial: { opacity: 0, backdropFilter: 'blur(0px)' },
  animate: { 
    opacity: 1, 
    backdropFilter: 'blur(8px)',
    transition: {
      duration: 0,
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
};

export const timelineLine = {
  initial: { scaleY: 0 },
  animate: { 
    scaleY: 1,
    transition: {
      duration: 0,
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
};

export const parallaxLayer = (speed: number) => ({
  style: {
    transform: `translateY(${speed}px)`,
    willChange: 'transform'
  }
});
