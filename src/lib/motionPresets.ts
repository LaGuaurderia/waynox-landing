import { Variants } from 'framer-motion'

// Easing suaves para transiciones fluidas
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.55, 0.055, 0.675, 0.19],
  spring: [0.175, 0.885, 0.32, 1.275],
}

// Variants para animaciones de entrada
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
      ease: easings.smooth,
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      ease: easings.smooth,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
      ease: easings.spring,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      ease: easings.smooth,
    },
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      ease: easings.smooth,
    },
  },
}

// Container para stagger de elementos
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
}

// Variants para botones
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0, ease: easings.smooth }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0, ease: easings.smooth }
  },
}

// Variants para cards
export const cardVariants: Variants = {
  initial: { 
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  hover: { 
    y: -4,
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0, ease: easings.smooth }
  },
}

// Variants para navbar
export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
    boxShadow: 'none',
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0, ease: easings.smooth }
  },
}
