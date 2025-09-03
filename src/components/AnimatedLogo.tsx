"use client";

import * as React from "react";

type AnimatedLogoProps = {
  className?: string;
  /** Multiplicador de velocidad (1 = por defecto) */
  speed?: number;
  /** Pausa cuando llega a "Waynox Studio" */
  pauseMs?: number;
};

const FULL_TEXT = "Waynox Studio";

export default function AnimatedLogo({
  className = "",
  speed = 1,
  pauseMs = 1400,
}: AnimatedLogoProps) {
  const [currentText, setCurrentText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(true);
  const [reduced, setReduced] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  // Detectar tema actual
  React.useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains('dark') || !root.classList.contains('light'));
    };
    
    checkTheme();
    
    // Observar cambios en las clases del root
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Respeta reduced motion
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Animación de escritura
  React.useEffect(() => {
    if (reduced) {
      setCurrentText(FULL_TEXT);
      return;
    }

    let currentIndex = 0;
    let cursorInterval: number;
    let typingInterval: number;
    let isDeleting = false;
    let isPaused = false;
    let isMounted = true;

    const startTyping = () => {
      if (isPaused || !isMounted) return;
      
      setIsTyping(true);
      setCurrentText("");
      currentIndex = 0;
      isDeleting = false;

      typingInterval = window.setInterval(() => {
        if (isDeleting || isPaused || !isMounted) return;
        
        // Escribiendo hacia adelante
        if (currentIndex < FULL_TEXT.length) {
          setCurrentText(FULL_TEXT.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Completado, pausar antes de borrar
          clearInterval(typingInterval);
          if (isMounted) {
            setIsTyping(false);
            isPaused = true;
            
            setTimeout(() => {
              if (!reduced && isMounted) {
                isPaused = false;
                isDeleting = true;
                setIsTyping(true);
                startDeleting();
              }
            }, 2000); // Pausa de 2 segundos antes de borrar
          }
        }
      }, 120 / speed);
    };

    const startDeleting = () => {
      if (isPaused || !isMounted) return;
      
      typingInterval = window.setInterval(() => {
        if (!isDeleting || isPaused || !isMounted) return;
        
        // Borrando hacia atrás
        if (currentIndex > 0) {
          currentIndex--;
          setCurrentText(FULL_TEXT.slice(0, currentIndex));
        } else {
          // Completamente borrado, reiniciar
          clearInterval(typingInterval);
          if (isMounted) {
            setIsTyping(false);
            isPaused = true;
            
            setTimeout(() => {
              if (!reduced && isMounted) {
                isPaused = false;
                startTyping();
              }
            }, 1000); // Pausa de 1 segundo antes de reiniciar
          }
        }
      }, 80 / speed); // Borrar más rápido que escribir
    };

    // Cursor parpadeante
    cursorInterval = window.setInterval(() => {
      if (isMounted) {
        setShowCursor(prev => !prev);
      }
    }, 530);

    startTyping();

    return () => {
      isMounted = false;
      isPaused = true;
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [speed, reduced]);

  const chars = Array.from(currentText);

  // Memoizar el renderizado de caracteres para evitar re-renders
  const renderedChars = React.useMemo(() => {
    return chars.map((ch, i) => {
      const isSpace = ch === " ";
      const isLastChar = i === chars.length - 1;
      const isInitial = i < 7; // "Waynox" son las primeras 7 letras
      
      return (
        <span
          key={`${i}-${ch}`}
          data-initial={isInitial}
          className="waynox-logo-char inline-block will-change-transform will-change-opacity"
          style={{
            animationDelay: `${i * 0.05}s`,
            display: 'inline-block',
            whiteSpace: 'nowrap',
            color: isInitial 
              ? '#00BFFF' // Azul eléctrico de marca para "Waynox" siempre
              : isDark 
                ? '#FFFFFF' // Blanco para "Studio" en tema oscuro
                : '#000000', // Negro para "Studio" en tema claro
            flexShrink: 0
          }}
        >
          {isSpace ? "\u00A0" : ch}
        </span>
      );
    });
  }, [chars, currentText.length, isDark]);

  return (
    <div
      aria-label="Waynox Studio"
      className="waynox-logo-container inline-flex items-center font-semibold tracking-wide text-[clamp(14px,1.4vw,20px)] relative"
      style={{ 
        width: 'auto', 
        minWidth: '140px', 
        maxWidth: '200px', 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        overflow: 'visible'
      }}
    >
      {/* Texto principal con efectos */}
      <span
        className="waynox-logo-text relative inline-flex items-center align-baseline"
        style={{ 
          display: 'inline-flex', 
          flexDirection: 'row', 
          flexWrap: 'nowrap',
          whiteSpace: 'nowrap',
          overflow: 'visible'
        }}
      >
        {renderedChars}

        {/* Cursor de escritura */}
        {!reduced && (
          <span
            aria-hidden="true"
            className="ml-1 inline-block w-[2px] h-5 bg-blue-500 waynox-typing-cursor"
            style={{
              animation: isTyping ? "waynox-cursor-blink 0.8s infinite" : "none",
              flexShrink: 0,
              transition: 'opacity 0.1s ease'
            }}
          />
        )}
      </span>

      {/* Nombre accesible estático para lectores de pantalla */}
      <span className="sr-only">{FULL_TEXT}</span>
    </div>
  );
}
