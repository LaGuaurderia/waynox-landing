import React from 'react'
import AnimatedLogo from './AnimatedLogo'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="/" aria-label="Waynox Studio" className={className}>
      <AnimatedLogo className="text-black text-left" />
    </a>
  )
}

export default Logo


