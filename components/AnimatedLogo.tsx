"use client";

import React from "react";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const steps: { text: string; ms: number }[] = [
    { text: "W S", ms: 800 },
    { text: "Wa St", ms: 300 },
    { text: "Way Stu", ms: 300 },
    { text: "Wayn Stud", ms: 300 },
    { text: "Wayno Studi", ms: 300 },
    { text: "Waynox Studio", ms: 1600 },
    { text: "W S", ms: 500 },
  ];

  const [index, setIndex] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    // Respeta preferencias de movimiento reducido
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  React.useEffect(() => {
    if (reduced) return; // sin animación
    let timer: number | undefined;

    const run = () => {
      const next = (index + 1) % steps.length;
      timer = window.setTimeout(() => setIndex(next), steps[index].ms);
    };

    run();
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [index, reduced]); // rehacer timeout cada paso

  const text = reduced ? "Waynox Studio" : steps[index].text;

  return (
    <div
      className={`inline-block font-semibold tracking-wide text-[clamp(18px,2.2vw,28px)] ${className}`}
      aria-label="Waynox Studio"
    >
      {/* Texto animado visible */}
      <span
        aria-hidden="true"
        className="block transition-opacity duration-200"
        key={text}
      >
        {text}
      </span>
      {/* Nombre accesible estático para lectores de pantalla */}
      <span className="sr-only">Waynox Studio</span>
    </div>
  );
}


