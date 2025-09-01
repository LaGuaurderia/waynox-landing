/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta consultora tech
        'tech': {
          bg: '#111111',
          'bg-soft': '#222222',
          'text': '#ffffff',
          'text-muted': '#F5F7FB',
          'accent': '#1E90FF',
          'border': '#444444',
          'border-hover': '#1E90FF',
        },
        // Estados
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.4s ease forwards',
        'scale-in': 'scaleIn 0.36s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleY: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '72px',
        '20': '80px',
        '22': '88px',
        '24': '96px',
        '26': '104px',
        '28': '112px',
        '30': '120px',
      },
      maxWidth: {
        '7xl': '1280px',
        '8xl': '1440px',
      },
      boxShadow: {
        'accent': '0 10px 30px rgba(30,144,255,0.15)',
        'accent-lg': '0 20px 40px rgba(30,144,255,0.2)',
      }
    },
  },
  plugins: [],
}
