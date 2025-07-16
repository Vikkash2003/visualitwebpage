// src/data/features.js - Green Theme Features
// Detailed features data for the Visualit application

export const featuresData = [
  {
    id: 'text-to-speech',
    title: 'Text-to-Speech (TTS)',
    shortTitle: 'TTS',
    description: 'High-quality, natural-sounding voices with adjustable speed and pronunciation for comfortable listening.',
    longDescription: 'Our advanced text-to-speech technology provides crystal-clear audio with multiple voice options, speed controls, and pronunciation assistance. Perfect for users with dyslexia or those who prefer auditory learning.',
    icon: 'speaker',
    category: 'accessibility',
    color: {
      primary: 'green',
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    },
    benefits: [
      'Natural-sounding AI voices',
      'Adjustable reading speed (0.5x - 2x)',
      'Word highlighting during playback',
      'Multiple language support',
      'Offline voice synthesis'
    ],
    features: [
      'Premium voice quality',
      'Speed customization',
      'Voice selection',
      'Pronunciation guide',
      'Audio bookmarking'
    ],
    availability: 'Available on all platforms',
    isPremium: false,
    premiumFeatures: ['Premium voices', 'Speed control', 'Voice customization']
  },
  {
    id: 'ai-visualization',
    title: 'AI Visualization',
    shortTitle: 'AI Visual',
    description: 'Real-time visual rendering of characters, scenes, and entire book worlds powered by advanced AI.',
    longDescription: 'Experience books like never before with our cutting-edge AI that generates immersive visualizations of characters, settings, and scenes as you read. Perfect for people with aphantasia who struggle to create mental images.',
    icon: 'eye',
    category: 'core',
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    },
    benefits: [
      'Real-time scene generation',
      'Character visualization',
      'Setting and environment rendering',
      'Emotion and mood interpretation',
      'Consistent visual continuity'
    ],
    features: [
      'Scene generation',
      'Character design',
      'Environment creation',
      'Style customization',
      'Visual bookmarks'
    ],
    availability: 'Core feature - Always included',
    isPremium: false,
    premiumFeatures: ['Advanced scenes', 'Character consistency', 'Style options']
  },
  {
    id: 'built-in-dictionary',
    title: 'Built-in Dictionary',
    shortTitle: 'Dictionary',
    description: 'Instant word definitions, pronunciations, and contextual explanations at your fingertips.',
    longDescription: 'Never lose your reading flow with our integrated dictionary system. Get instant definitions, pronunciation guides, etymology, and contextual usage examples without leaving your book.',
    icon: 'book',
    category: 'learning',
    color: {
      primary: 'teal',
      gradient: 'from-teal-500 to-green-500',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      text: 'text-teal-600 dark:text-teal-400'
    },
    benefits: [
      'Instant word lookup',
      'Audio pronunciations',
      'Etymology and word origins',
      'Contextual definitions',
      'Personal vocabulary building'
    ],
    features: [
      'One-tap definitions',
      'Pronunciation audio',
      'Word etymology',
      'Usage examples',
      'Vocabulary lists'
    ],
    availability: 'Available in 15+ languages',
    isPremium: false,
    premiumFeatures: ['Etymology', 'Advanced definitions', 'Usage examples']
  },
  {
    id: 'bookmark-progress',
    title: 'Bookmark & Progress Tracker',
    shortTitle: 'Bookmarks',
    description: 'Smart bookmarking system with detailed reading analytics and personalized insights.',
    longDescription: 'Keep track of your reading journey with intelligent bookmarking, reading statistics, goal setting, and personalized insights to help you build better reading habits.',
    icon: 'bookmark',
    category: 'productivity',
    color: {
      primary: 'lime',
      gradient: 'from-lime-500 to-green-500',
      bg: 'bg-lime-50 dark:bg-lime-900/20',
      text: 'text-lime-600 dark:text-lime-400'
    },
    benefits: [
      'Smart bookmark organization',
      'Reading time tracking',
      'Progress visualization',
      'Goal setting and achievements',
      'Reading habit insights'
    ],
    features: [
      'Auto-sync bookmarks',
      'Reading analytics',
      'Progress charts',
      'Reading goals',
      'Achievement badges'
    ],
    availability: 'Syncs across all devices',
    isPremium: false,
    premiumFeatures: ['Reading analytics', 'Goal tracking', 'Advanced insights']
  },
  {
    id: 'file-upload',
    title: 'Upload Your Own PDFs/EPUBs',
    shortTitle: 'File Upload',
    description: 'Support for multiple document formats with instant processing and AI analysis.',
    longDescription: 'Bring your own library to life. Upload PDFs, EPUBs, and other document formats to experience them with full AI visualization and accessibility features.',
    icon: 'upload',
    category: 'import',
    color: {
      primary: 'green',
      gradient: 'from-green-400 to-emerald-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    },
    benefits: [
      'Multiple format support',
      'Instant AI processing',
      'Cloud storage integration',
      'Automatic text extraction',
      'Format conversion'
    ],
    features: [
      'EPUB support',
      'PDF processing',
      'Text extraction',
      'Format conversion',
      'Cloud sync'
    ],
    availability: 'Supports EPUB, PDF, TXT, MOBI',
    isPremium: false,
    premiumFeatures: ['All formats', 'Batch upload', 'OCR processing']
  },
  {
    id: 'content-customization',
    title: 'Content Customization',
    shortTitle: 'Customization',
    description: 'Personalized fonts, sizes, colors, and layouts for optimal reading comfort and accessibility.',
    longDescription: 'Tailor your reading experience with extensive customization options including dyslexia-friendly fonts, adjustable layouts, color schemes, and spacing for maximum comfort.',
    icon: 'settings',
    category: 'accessibility',
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-600 to-teal-600',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    },
    benefits: [
      'Dyslexia-friendly fonts',
      'Adjustable line spacing',
      'Custom color schemes',
      'Layout personalization',
      'Reading mode optimization'
    ],
    features: [
      'Font selection',
      'Size adjustment',
      'Color themes',
      'Line spacing',
      'Layout options'
    ],
    availability: 'Full customization available',
    isPremium: false,
    premiumFeatures: ['Advanced fonts', 'Custom themes', 'Layout presets']
  },
  {
    id: 'user-profiles',
    title: 'User Profiles',
    shortTitle: 'Profiles',
    description: 'Multiple reading profiles with individual preferences and progress tracking for each user.',
    longDescription: 'Create separate profiles for different family members or reading contexts, each with personalized settings, libraries, and progress tracking.',
    icon: 'user',
    category: 'account',
    color: {
      primary: 'teal',
      gradient: 'from-teal-400 to-emerald-400',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      text: 'text-teal-600 dark:text-teal-400'
    },
    benefits: [
      'Family-friendly sharing',
      'Individual customization',
      'Separate libraries',
      'Privacy protection',
      'Progress isolation'
    ],
    features: [
      'Multiple profiles',
      'Individual settings',
      'Separate libraries',
      'Progress tracking',
      'Privacy controls'
    ],
    availability: 'Up to 5 profiles per account',
    isPremium: true,
    premiumFeatures: ['Multiple profiles', 'Family controls', 'Individual settings']
  },
  {
    id: 'settings-panel',
    title: 'Settings Panel',
    shortTitle: 'Settings',
    description: 'Comprehensive settings to customize every aspect of your reading experience.',
    longDescription: 'Access all customization options through our intuitive settings panel, allowing you to fine-tune every aspect of your reading experience.',
    icon: 'cog',
    category: 'system',
    color: {
      primary: 'green',
      gradient: 'from-green-500 to-lime-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    },
    benefits: [
      'Centralized control',
      'Easy customization',
      'Quick access',
      'Settings backup',
      'Default restoration'
    ],
    features: [
      'Global settings',
      'Quick toggles',
      'Setting presets',
      'Backup/restore',
      'Reset options'
    ],
    availability: 'Always accessible',
    isPremium: false,
    premiumFeatures: ['Advanced controls', 'Backup/restore', 'Custom presets']
  },
  {
    id: 'marketplace-integration',
    title: 'Vendor/Marketplace Integration',
    shortTitle: 'Marketplace',
    description: 'Seamless integration with book vendors and publishers for easy content access and discovery.',
    longDescription: 'Connect with major book retailers and publishers to browse, purchase, and import books directly into your Visualit library with enhanced features.',
    icon: 'store',
    category: 'integration',
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    },
    benefits: [
      'Direct book purchasing',
      'Publisher partnerships',
      'Enhanced metadata',
      'Seamless importing',
      'Discovery features'
    ],
    features: [
      'Store integration',
      'Book discovery',
      'Purchase flow',
      'Import tools',
      'Recommendations'
    ],
    availability: 'Major retailers supported',
    isPremium: true,
    premiumFeatures: ['All stores', 'Direct purchase', 'Recommendations']
  }
]

// Green Theme Feature categories for filtering and organization
export const featureCategories = [
  {
    id: 'core',
    name: 'Core Features',
    description: 'Essential Visualit functionality',
    icon: 'star',
    color: {
      primary: 'green',
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    }
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'Features for users with special needs',
    icon: 'heart',
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    }
  },
  {
    id: 'learning',
    name: 'Learning Tools',
    description: 'Educational and vocabulary features',
    icon: 'academic-cap',
    color: {
      primary: 'teal',
      gradient: 'from-teal-500 to-green-500',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      text: 'text-teal-600 dark:text-teal-400'
    }
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Reading progress and organization',
    icon: 'chart-bar',
    color: {
      primary: 'lime',
      gradient: 'from-lime-500 to-green-500',
      bg: 'bg-lime-50 dark:bg-lime-900/20',
      text: 'text-lime-600 dark:text-lime-400'
    }
  },
  {
    id: 'import',
    name: 'Import & Export',
    description: 'File handling and format support',
    icon: 'upload',
    color: {
      primary: 'green',
      gradient: 'from-green-400 to-emerald-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    }
  },
  {
    id: 'account',
    name: 'Account Features',
    description: 'User management and profiles',
    icon: 'user-group',
    color: {
      primary: 'teal',
      gradient: 'from-teal-400 to-emerald-400',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      text: 'text-teal-600 dark:text-teal-400'
    }
  },
  {
    id: 'system',
    name: 'System',
    description: 'Application settings and controls',
    icon: 'cog',
    color: {
      primary: 'green',
      gradient: 'from-green-500 to-lime-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    }
  },
  {
    id: 'integration',
    name: 'Integrations',
    description: 'Third-party connections',
    icon: 'link',
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    }
  }
]

// Green Theme Feature Statistics
export const featureStats = {
  totalFeatures: featuresData.length,
  freeFeatures: featuresData.filter(f => !f.isPremium).length,
  premiumFeatures: featuresData.filter(f => f.isPremium).length,
  accessibilityFeatures: featuresData.filter(f => f.category === 'accessibility').length,
  coreFeatures: featuresData.filter(f => f.category === 'core').length,
  categories: featureCategories.length
}

// Green Theme Feature Highlights
export const featuredHighlights = [
  {
    id: 'accessibility-first',
    title: 'Accessibility First',
    description: 'Built specifically for users with dyslexia and aphantasia',
    features: ['text-to-speech', 'ai-visualization', 'content-customization'],
    color: {
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 dark:bg-green-900/20'
    }
  },
  {
    id: 'ai-powered',
    title: 'AI-Powered Experience',
    description: 'Advanced AI that brings your books to life',
    features: ['ai-visualization', 'marketplace-integration'],
    color: {
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20'
    }
  },
  {
    id: 'user-friendly',
    title: 'User-Friendly Design',
    description: 'Intuitive interface designed for all reading levels',
    features: ['settings-panel', 'user-profiles', 'bookmark-progress'],
    color: {
      gradient: 'from-teal-500 to-green-500',
      bg: 'bg-teal-50 dark:bg-teal-900/20'
    }
  }
]