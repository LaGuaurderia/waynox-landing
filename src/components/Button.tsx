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
    primary: 'bg-[#1E90FF] text-white hover:bg-[#1E90FF] hover:brightness-110 focus:ring-[#1E90FF]',
    ghost: 'bg-transparent text-white border border-[#444] hover:border-[#1E90FF] hover:bg-[#222] focus:ring-[#1E90FF]',
    link: 'bg-transparent text-[#1E90FF] hover:text-[#1E90FF] hover:brightness-110 underline-offset-4 hover:underline focus:ring-[#1E90FF]'
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


