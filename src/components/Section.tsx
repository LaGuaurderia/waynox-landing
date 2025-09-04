import React from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  muted?: boolean
  id?: string
}

export const Section: React.FC<SectionProps> = ({ children, className, muted, id }) => {
  return (
    <section 
      id={id} 
      className={`section ${muted ? 'section-muted' : ''} ${className ?? ''}`}
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section


