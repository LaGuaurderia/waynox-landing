import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <nav aria-label="Legal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link className="nav-link" to="/privacidad">Privacidad</Link>
          <Link className="nav-link" to="/terminos">Términos</Link>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </nav>
        <div style={{ color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Waynox Studio
        </div>
      </div>
    </footer>
  )
}

export default Footer


