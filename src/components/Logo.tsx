import React from 'react'
import logoWaynox from '../assets/logo-waynox.svg'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="/" aria-label="Waynox Studio" className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <img src={logoWaynox} width={120} height={28} alt="Logo Waynox Studio" loading="eager" />
    </a>
  )
}

export default Logo


