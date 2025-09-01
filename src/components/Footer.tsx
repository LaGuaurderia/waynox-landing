import React from 'react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <Logo />
        <nav aria-label="Legal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a className="nav-link" href="/privacidad.html">Privacidad</a>
          <a className="nav-link" href="/">Términos</a>
          <a className="nav-link" href="/contacto">Contacto</a>
        </nav>
        <div style={{ color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Waynox Studio
        </div>
      </div>
    </footer>
  )
}

export default Footer


