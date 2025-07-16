export const APP_INFO = {
    name: 'Visualit',
    tagline: 'Read. Visualize. Experience.',
    description: 'An AI-powered EPUB reader transforming how the world reads, visualizes, and understands books.',
    version: '1.0.0',
    author: 'Visualit Team'
  }
  
  // Navigation Links
  export const NAV_LINKS = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#library', label: 'Library', id: 'library' },
    { href: '#audience', label: 'For You', id: 'audience' },
    { href: '#pricing', label: 'Pricing', id: 'pricing' },
    { href: '/demo', label: 'Demo', id: 'demo' }
  ]
  
  // Features List
  export const FEATURES = [
    {
      id: 'tts',
      title: 'Text-to-Speech (TTS)',
      description: 'High-quality, natural-sounding voices with adjustable speed and pronunciation for comfortable listening.',
      icon: 'speaker',
      color: 'blue'
    },
    {
      id: 'ai-visualization',
      title: 'AI Visualization',
      description: 'Real-time visual rendering of characters, scenes, and entire book worlds powered by advanced AI.',
      icon: 'eye',
      color: 'purple'
    },
    {
      id: 'dictionary',
      title: 'Built-in Dictionary',
      description: 'Instant word definitions, pronunciations, and contextual explanations at your fingertips.',
      icon: 'book',
      color: 'green'
    },
    {
      id: 'bookmarks',
      title: 'Bookmark & Progress Tracker',
      description: 'Smart bookmarking system with detailed reading analytics and personalized insights.',
      icon: 'bookmark',
      color: 'orange'
    },
    {
      id: 'file-upload',
      title: 'Upload Your Own PDFs/EPUBs',
      description: 'Support for multiple document formats with instant processing and AI analysis.',
      icon: 'upload',
      color: 'indigo'
    },
    {
      id: 'customization',
      title: 'Content Customization',
      description: 'Personalized fonts, sizes, colors, and layouts for optimal reading comfort and accessibility.',
      icon: 'settings',
      color: 'teal'
    },
    {
      id: 'profiles',
      title: 'User Profiles',
      description: 'Multiple reading profiles with individual preferences and progress tracking for each user.',
      icon: 'user',
      color: 'pink'
    },
    {
      id: 'settings-panel',
      title: 'Settings Panel',
      description: 'Comprehensive settings to customize every aspect of your reading experience.',
      icon: 'cog',
      color: 'slate'
    },
    {
      id: 'marketplace',
      title: 'Vendor/Marketplace Integration',
      description: 'Seamless integration with book vendors and publishers for easy content access and discovery.',
      icon: 'store',
      color: 'violet'
    }
  ]
  
  // Target Audiences
  export const TARGET_AUDIENCES = [
    {
      id: 'casual-readers',
      title: 'Casual Readers',
      subtitle: 'Enhance Your Reading Journey',
      description: 'Transform your reading experience with immersive visualizations and smart features that make every book more engaging and enjoyable.',
      benefits: [
        'Immersive visual storytelling',
        'Enhanced comprehension',
        'Personalized reading pace',
        'Rich multimedia experience'
      ],
      stats: { number: '2.3B', label: 'Book Readers Worldwide' },
      color: 'blue'
    },
    {
      id: 'students-educators',
      title: 'Students & Educators',
      subtitle: 'Accelerate Learning Through Visualization',
      description: 'Make complex texts accessible with AI-powered visualizations, annotations, and study tools designed for academic success and learning.',
      benefits: [
        'Visual learning aids',
        'Interactive study materials',
        'Progress tracking & analytics',
        'Collaborative reading tools'
      ],
      stats: { number: '1.6B', label: 'Students Globally' },
      color: 'purple'
    },
    {
      id: 'accessibility-users',
      title: 'Dyslexia & Aphantasia Users',
      subtitle: 'Reading Without Barriers',
      description: 'Specifically designed features that remove reading obstacles and provide alternative ways to experience and understand text content.',
      benefits: [
        'Visual text representation',
        'Advanced text-to-speech',
        'Customizable reading interface',
        'Cognitive accessibility features'
      ],
      stats: { number: '715M', label: 'People Need Accessibility' },
      color: 'green'
    },
    {
      id: 'publishers',
      title: 'Book Vendors & Publishers',
      subtitle: 'Expand Your Reach',
      description: 'Integrate with our platform to offer enhanced reading experiences and reach new audiences through accessibility-focused technology.',
      benefits: [
        'API integration support',
        'Enhanced content delivery',
        'New market opportunities',
        'Analytics & insights dashboard'
      ],
      stats: { number: '50K+', label: 'Publishers Worldwide' },
      color: 'orange'
    }
  ]
  
  // Color Schemes
  export const COLORS = {
    primary: {
      blue: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8'
      },
      purple: {
        50: '#faf5ff',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9'
      }
    },
    feature: {
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500',
      green: 'from-green-500 to-emerald-500',
      orange: 'from-orange-500 to-red-500',
      indigo: 'from-indigo-500 to-purple-500',
      teal: 'from-teal-500 to-blue-500',
      pink: 'from-pink-500 to-rose-500',
      slate: 'from-slate-500 to-gray-500',
      violet: 'from-violet-500 to-purple-500'
    }
  }
  
  // Breakpoints (Tailwind defaults)
  export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
  
  // Animation Durations
  export const ANIMATIONS = {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms'
  }
  
  // Social Media Links
  export const SOCIAL_LINKS = [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/visualit',
      icon: 'twitter'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/visualit',
      icon: 'facebook'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/visualit',
      icon: 'linkedin'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/visualit',
      icon: 'github'
    }
  ]
  
  // Footer Links
  export const FOOTER_LINKS = {
    Product: [
      { href: '#features', label: 'Features' },
      { href: '/demo', label: 'Demo' },
      { href: '#about', label: 'About' },
      { href: '#audience', label: 'Target Audience' },
      { href: '#pricing', label: 'Pricing' }
    ],
    Support: [
      { href: '#', label: 'Help Center' },
      { href: '#', label: 'Contact Us' },
      { href: '#', label: 'Bug Report' },
      { href: '#', label: 'Feature Request' }
    ],
    Company: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Press Kit' }
    ],
    Legal: [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Cookie Policy' },
      { href: '#', label: 'GDPR' }
    ]
  }
  
  // API Endpoints (for future use)
  export const API_ENDPOINTS = {
    base: process.env.NEXT_PUBLIC_API_URL || 'https://api.visualit.com',
    auth: '/auth',
    books: '/books',
    visualizations: '/visualizations',
    users: '/users'
  }
  
  // File Upload Settings
  export const FILE_UPLOAD = {
    maxSize: 50 * 1024 * 1024, // 50MB
    allowedTypes: [
      'application/epub+zip',
      'application/pdf',
      'text/plain',
      'application/x-mobipocket-ebook'
    ],
    allowedExtensions: ['.epub', '.pdf', '.txt', '.mobi']
  }
  
  // Accessibility Settings
  export const ACCESSIBILITY = {
    fontSizes: ['small', 'medium', 'large', 'extra-large'],
    fontFamilies: ['Inter', 'OpenDyslexic', 'Arial', 'Georgia'],
    lineSpacing: ['compact', 'normal', 'relaxed', 'loose'],
    colorSchemes: ['default', 'high-contrast', 'sepia', 'night']
  }
  
  // Default User Preferences
  export const DEFAULT_PREFERENCES = {
    theme: 'light',
    fontSize: 'medium',
    fontFamily: 'Inter',
    lineSpacing: 'normal',
    colorScheme: 'default',
    ttsSpeed: 1.0,
    ttsVoice: 'default',
    autoVisualization: true,
    showProgress: true
  }