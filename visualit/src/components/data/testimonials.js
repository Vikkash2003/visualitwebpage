export const testimonialsData = [
    {
      id: 'testimonial-1',
      name: 'Sarah Chen',
      role: 'University Student',
      location: 'Stanford University',
      avatar: '/images/testimonials/sarah-chen.jpg',
      rating: 5,
      category: 'student',
      condition: 'dyslexia',
      quote: "Visualit has completely transformed how I study. The AI visualizations help me understand complex literature, and the text-to-speech feature means I can keep up with my reading assignments without struggling with the text.",
      highlights: ['AI Visualization', 'Text-to-Speech', 'Study Tools'],
      date: '2024-03-15',
      verified: true,
      helpful: 127
    },
    {
      id: 'testimonial-2',
      name: 'Marcus Rodriguez',
      role: 'Graphic Designer',
      location: 'Barcelona, Spain',
      avatar: '/images/testimonials/marcus-rodriguez.jpg',
      rating: 5,
      category: 'professional',
      condition: 'aphantasia',
      quote: "As someone with aphantasia, I never thought I could enjoy fiction books. Visualit's AI creates the mental images I can't form myself. It's like having a personal movie director for every book I read.",
      highlights: ['AI Visualization', 'Character Design', 'Scene Rendering'],
      date: '2024-02-28',
      verified: true,
      helpful: 203
    },
    {
      id: 'testimonial-3',
      name: 'Dr. Emily Watson',
      role: 'Special Education Teacher',
      location: 'Toronto, Canada',
      avatar: '/images/testimonials/emily-watson.jpg',
      rating: 5,
      category: 'educator',
      condition: null,
      quote: "I use Visualit with my students who have learning differences. The customizable fonts, visual aids, and audio features have helped every single one of them engage with reading in ways I never thought possible.",
      highlights: ['Accessibility Features', 'Customization', 'Educational Tools'],
      date: '2024-01-20',
      verified: true,
      helpful: 156
    },
    {
      id: 'testimonial-4',
      name: 'James Mitchell',
      role: 'Retired Librarian',
      location: 'Edinburgh, UK',
      avatar: '/images/testimonials/james-mitchell.jpg',
      rating: 4,
      category: 'casual',
      condition: null,
      quote: "At 68, I was skeptical about AI in reading. But Visualit brings classic literature to life in ways that enhance rather than replace the imagination. The dictionary feature is particularly helpful for older texts.",
      highlights: ['Built-in Dictionary', 'Classic Literature', 'User-Friendly'],
      date: '2024-03-02',
      verified: true,
      helpful: 89
    },
    {
      id: 'testimonial-5',
      name: 'Priya Patel',
      role: 'Software Engineer',
      location: 'Mumbai, India',
      avatar: '/images/testimonials/priya-patel.jpg',
      rating: 5,
      category: 'professional',
      condition: 'dyslexia',
      quote: "The file upload feature is amazing - I can bring all my technical PDFs into Visualit and get visual explanations of complex concepts. It's revolutionized how I learn new technologies.",
      highlights: ['File Upload', 'Technical Documentation', 'Visual Learning'],
      date: '2024-02-10',
      verified: true,
      helpful: 142
    },
    {
      id: 'testimonial-6',
      name: 'Alex Thompson',
      role: 'High School Student',
      location: 'Sydney, Australia',
      avatar: '/images/testimonials/alex-thompson.jpg',
      rating: 5,
      category: 'student',
      condition: 'adhd',
      quote: "Reading used to be torture for me with ADHD. Visualit's immersive experience keeps me focused, and I actually look forward to reading assignments now. My grades have improved dramatically.",
      highlights: ['Focus Enhancement', 'Immersive Experience', 'Academic Success'],
      date: '2024-03-08',
      verified: true,
      helpful: 98
    },
    {
      id: 'testimonial-7',
      name: 'Maria Gonzalez',
      role: 'Book Club Organizer',
      location: 'Mexico City, Mexico',
      avatar: '/images/testimonials/maria-gonzalez.jpg',
      rating: 4,
      category: 'casual',
      condition: null,
      quote: "Our book club has become so much more engaging since we started using Visualit. We can share visual interpretations of characters and scenes, leading to richer discussions than ever before.",
      highlights: ['Social Features', 'Discussion Enhancement', 'Book Clubs'],
      date: '2024-01-15',
      verified: true,
      helpful: 76
    },
    {
      id: 'testimonial-8',
      name: 'David Kim',
      role: 'Publishing Executive',
      location: 'Seoul, South Korea',
      avatar: '/images/testimonials/david-kim.jpg',
      rating: 5,
      category: 'industry',
      condition: null,
      quote: "From a publisher's perspective, Visualit opens up entirely new markets. We're seeing increased engagement from readers who previously struggled with traditional text, expanding our potential audience significantly.",
      highlights: ['Market Expansion', 'Publisher Integration', 'Accessibility'],
      date: '2024-02-22',
      verified: true,
      helpful: 134
    },
    {
      id: 'testimonial-9',
      name: 'Lisa Anderson',
      role: 'Parent',
      location: 'Denver, USA',
      avatar: '/images/testimonials/lisa-anderson.jpg',
      rating: 5,
      category: 'parent',
      condition: null,
      quote: "My 12-year-old son has dyslexia and hated reading until we found Visualit. Now he reads above grade level and actually asks for more books. It's given him confidence I never thought he'd have.",
      highlights: ['Child-Friendly', 'Confidence Building', 'Reading Level Improvement'],
      date: '2024-03-01',
      verified: true,
      helpful: 187
    },
    {
      id: 'testimonial-10',
      name: 'Ahmed Hassan',
      role: 'Graduate Researcher',
      location: 'Cairo, Egypt',
      avatar: '/images/testimonials/ahmed-hassan.jpg',
      rating: 4,
      category: 'academic',
      condition: null,
      quote: "Researching medieval literature became infinitely easier with Visualit. The AI helps visualize historical contexts and the multilingual dictionary supports my work with ancient texts.",
      highlights: ['Research Tools', 'Historical Context', 'Multilingual Support'],
      date: '2024-01-28',
      verified: true,
      helpful: 67
    }
  ]
  
  // Testimonial categories for filtering
  export const testimonialCategories = [
    {
      id: 'all',
      name: 'All Reviews',
      count: testimonialsData.length
    },
    {
      id: 'student',
      name: 'Students',
      count: testimonialsData.filter(t => t.category === 'student').length
    },
    {
      id: 'educator',
      name: 'Educators',
      count: testimonialsData.filter(t => t.category === 'educator').length
    },
    {
      id: 'professional',
      name: 'Professionals',
      count: testimonialsData.filter(t => t.category === 'professional').length
    },
    {
      id: 'casual',
      name: 'Casual Readers',
      count: testimonialsData.filter(t => t.category === 'casual').length
    },
    {
      id: 'accessibility',
      name: 'Accessibility Users',
      count: testimonialsData.filter(t => t.condition).length
    }
  ]
  
  // Statistics derived from testimonials
  export const testimonialStats = {
    totalReviews: testimonialsData.length,
    averageRating: testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length,
    verifiedReviews: testimonialsData.filter(t => t.verified).length,
    accessibilityUsers: testimonialsData.filter(t => t.condition).length,
    countries: [...new Set(testimonialsData.map(t => t.location.split(', ').pop()))].length,
    totalHelpful: testimonialsData.reduce((sum, t) => sum + t.helpful, 0)
  }