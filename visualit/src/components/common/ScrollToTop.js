'use client'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <div className="relative w-14 h-14">
        <svg 
          className="w-14 h-14 transform -rotate-90" 
          viewBox="0 0 56 56"
        >
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-slate-200 dark:text-slate-700"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            className="text-blue-600 dark:text-blue-400 transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>

        {/* Button content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 text-xs px-3 py-2 rounded-lg whitespace-nowrap">
          Scroll to top
          <div className="absolute top-full right-4 border-2 border-transparent border-t-slate-800 dark:border-t-slate-200"></div>
        </div>
      </div>
    </button>
  )
}
