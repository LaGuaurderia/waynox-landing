import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { buttonVariants } from '../lib/motionPresets'
import { useReducedMotion } from '../lib/hooks/useReducedMotion'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'link'
  asChild?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className, 
  children, 
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion()

  // Si se prefiere movimiento reducido, usar variantes estáticas
  const variants = prefersReducedMotion ? {} : buttonVariants

  const baseClasses = clsx(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    'relative overflow-hidden transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    className
  )

  const variantClasses = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)]',
    ghost: 'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-soft)] focus:ring-[var(--color-accent)]',
    link: 'bg-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline focus:ring-[var(--color-accent)]'
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  }

  return (
    <motion.button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size])}
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}

export default Button


