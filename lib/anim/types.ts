// Tipos para el sistema de animación Waynox

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: number[];
}

export interface MotionVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition?: AnimationConfig;
}

export interface ParallaxLayer {
  children: React.ReactNode;
  speed: number;
  className?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineStepData {
  index: number;
  title: string;
  desc: string;
}

export interface CounterConfig {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export interface MagneticOffset {
  x: number;
  y: number;
}

export interface TiltConfig {
  x: number;
  y: number;
}

// Tipos para hooks
export interface IntersectionOptions {
  threshold?: number;
  margin?: string;
}

export interface ScrollThreshold {
  threshold: number;
  callback: (isAbove: boolean) => void;
}

// Tipos para componentes
export interface AnimateSectionProps {
  children: React.ReactNode;
  as?: 'section' | 'div';
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export interface StaggeredHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  className?: string;
}

export interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn';
  delay?: number;
  className?: string;
  once?: boolean;
}

export interface MagneticCTAProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface ParallaxHeroProps {
  layers: ParallaxLayer[];
  maxOffset?: number;
  className?: string;
}

export interface TimelineStepProps {
  index: number;
  title: string;
  desc: string;
  className?: string;
}

export interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export interface CounterUpProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export interface NavbarRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}
