import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link className="nav-link text-sm sm:text-base" to="/privacidad">Privacidad</Link>
            <Link className="nav-link text-sm sm:text-base" to="/terminos">Términos</Link>
            <Link className="nav-link text-sm sm:text-base" to="/contacto">Contacto</Link>
          </nav>
          <div className="text-sm sm:text-base text-center sm:text-right" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Waynox Studio
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


