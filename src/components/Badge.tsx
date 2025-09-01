import React from 'react'
import clsx from 'clsx'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={clsx(
      'inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#1E90FF] text-white border border-transparent',
      className
    )}>
      {children}
    </span>
  )
}

export default Badge


