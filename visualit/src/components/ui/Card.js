'use client'
import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  hover = false,
  className = '',
  ...props 
}, ref) => {
  
  const baseStyles = 'rounded-2xl border transition-all duration-300'
  
  const variants = {
    default: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700',
    glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-white/20 dark:border-slate-700/20',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600',
    feature: 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/20 dark:border-slate-700/20'
  }
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl'
  }
  
  const hoverStyles = hover ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer' : ''
  
  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
export default Card