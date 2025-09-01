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
    primary: 'bg-[#A3B18A] text-white hover:bg-[#8FA375] focus:ring-[#A3B18A]',
    ghost: 'bg-transparent border border-[#B4A89F] text-[#5E5E5E] hover:bg-[#B4A89F] hover:text-white focus:ring-[#B4A89F]',
    link: 'bg-transparent text-[#A3B18A] hover:text-[#8FA375] underline-offset-4 hover:underline focus:ring-[#A3B18A]'
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
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button


