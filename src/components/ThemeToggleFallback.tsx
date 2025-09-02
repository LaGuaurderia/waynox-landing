"use client";

import { useThemeContext } from "./ThemeProviderFallback";

export default function ThemeToggleFallback() {
  const { theme, setTheme, resolvedTheme } = useThemeContext();
  const current = theme === "system" ? `system(${resolvedTheme})` : theme;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={() => setTheme("system")}
        className={`px-2 py-1 text-sm rounded border transition-all duration-200 ${
          theme === "system" 
            ? "border-brand-blue text-brand-blue bg-brand-blue/10" 
            : "border-transparent text-brand-gray-light hover:text-white hover:bg-brand-black-soft/30"
        }`}
        aria-pressed={theme === "system"}
        aria-label="Usar tema del sistema"
      >
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          </svg>
          System
        </div>
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`px-2 py-1 text-sm rounded border transition-all duration-200 ${
          theme === "light" 
            ? "border-brand-blue text-brand-blue bg-brand-blue/10" 
            : "border-transparent text-brand-gray-light hover:text-white hover:bg-brand-black-soft/30"
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
        onClick={() => setTheme("dark")}
        className={`px-2 py-1 text-sm rounded border transition-all duration-200 ${
          theme === "dark" 
            ? "border-brand-blue text-brand-blue bg-brand-blue/10" 
            : "border-transparent text-brand-gray-light hover:text-white hover:bg-brand-black-soft/30"
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
      <span className="sr-only">Tema actual: {current}</span>
    </div>
  );
}
