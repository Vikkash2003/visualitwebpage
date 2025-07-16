'use client'
import { forwardRef } from 'react'

const Button = forwardRef(({
                             children,
                             variant = 'primary',
                             size = 'md',
                             className = '',
                             disabled = false,
                             loading = false,
                             leftIcon = null,
                             rightIcon = null,
                             ...props
                           }, ref) => {

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-blue-500',
    secondary: 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-500',
    outline: 'border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white focus:ring-blue-500',
    ghost: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white focus:ring-slate-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-green-500'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const LoadingSpinner = () => (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
  )

  return (
      <button
          ref={ref}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
          disabled={disabled || loading}
          {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
  )
})

Button.displayName = 'Button'

// Change the export to named export
export { Button }