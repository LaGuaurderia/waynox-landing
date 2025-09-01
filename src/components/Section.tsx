import React from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  muted?: boolean
  id?: string
}

export const Section: React.FC<SectionProps> = ({ children, className, muted, id }) => {
  return (
    <section id={id} className={`section ${muted ? 'section-muted' : ''} ${className ?? ''}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section


