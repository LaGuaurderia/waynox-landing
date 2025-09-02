import React from 'react'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div 
    className="container"
    style={{
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-text)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}
  >
    {children}
  </div>
)

export default Container


