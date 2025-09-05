import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link 
              className="text-sm sm:text-base text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 relative group" 
              to="/privacidad"
            >
              Privacidad
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              className="text-sm sm:text-base text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 relative group" 
              to="/terminos"
            >
              Términos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              className="text-sm sm:text-base text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 relative group" 
              to="/contacto"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="text-sm sm:text-base text-center sm:text-right text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--color-accent)] font-semibold">Waynox Studio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


