import React from 'react'
import clsx from 'clsx'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={clsx('card', className)} style={{ padding: '4px 8px', fontSize: 12 }}>
      {children}
    </span>
  )
}

export default Badge


