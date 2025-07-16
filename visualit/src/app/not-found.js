import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-x-4">
          <Link 
            href="/"
            className="btn-primary inline-block"
          >
            Go Home
          </Link>
          <Link 
            href="/demo"
            className="btn-secondary inline-block"
          >
            Try Demo
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 opacity-20">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto animate-float"></div>
        </div>
      </div>
    </div>
  )
}