import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Hook para manejar prefers-reduced-motion de forma segura
export const useReducedMotionSafe = () => {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion === 'reduce';
};

// Hook para IntersectionObserver que dispara una vez
export const useInViewOnce = (
  ref: React.RefObject<HTMLElement>,
  options: {
    threshold?: number;
    margin?: string;
  } = {}
) => {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.25, margin = '0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Una vez que está en vista, desconectamos el observer
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: margin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, margin, isInView]);

  return isInView;
};

// Hook para scroll position con throttling
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Hook para detectar si estamos en mobile
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};
