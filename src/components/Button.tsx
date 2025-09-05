import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { buttonVariants } from '../lib/motionPresets'
import { useReducedMotion } from '../lib/hooks/useReducedMotion'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'link' | 'gradient' | 'glow'
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
    'relative overflow-hidden transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'group',
    className
  )

  const variantClasses = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)] shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-soft)] focus:ring-[var(--color-accent)] hover:shadow-md',
    link: 'bg-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline focus:ring-[var(--color-accent)]',
    gradient: 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-white hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)] focus:ring-[var(--color-accent)] shadow-lg hover:shadow-xl',
    glow: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)] shadow-lg hover:shadow-2xl hover:shadow-[var(--color-accent)]/25'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-2xl font-medium',
    md: 'px-6 py-3 text-base rounded-3xl font-semibold',
    lg: 'px-8 py-4 text-lg rounded-full font-bold'
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
      
      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

    </motion.button>
  )
}

export default Button


