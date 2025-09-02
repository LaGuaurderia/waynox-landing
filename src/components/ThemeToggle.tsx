"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Función para cambiar el tema
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={() => handleThemeChange("light")}
        className={`px-2 py-1 text-sm rounded border transition-all duration-200 ${
          theme === "light" 
            ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10" 
            : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-soft)]/30"
        }`}
        aria-pressed={theme === "light"}
        aria-label="Usar tema claro"
      >
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Light
        </div>
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`px-2 py-1 text-sm rounded border transition-all duration-200 ${
          theme === "dark" 
            ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10" 
            : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-soft)]/30"
        }`}
        aria-pressed={theme === "dark"}
        aria-label="Usar tema oscuro"
      >
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Dark
        </div>
      </button>
      <span className="sr-only">Tema actual: {theme}</span>
    </div>
  );
}
