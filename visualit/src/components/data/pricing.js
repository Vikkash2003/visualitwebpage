import { Zap, Crown, Rocket, Brain, Shield, Type, Settings } from 'lucide-react';

export const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Perfect for individuals",
    price: { monthly: 0, yearly: 0 },
    description: "Get started with AI-powered productivity tools",
    icon: Zap,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-400 to-emerald-400",
    features: [
      "Read EPUB files (basic viewer)",
      "Basic AI Visualization (3 books/month)",
      "Text-to-speech (standard voice, limited)",
      "Cloud sync (1 device)",
      "Local EPUB import",
      "Access to Visualit Community (Read-only)"
    ],
    highlight: false,
    badge: null
  },
  {
    name: "Professional",
    subtitle: "Most popular choice",
    price: { monthly: 99, yearly: 990 },
    description: "Advanced AI capabilities for growing teams",
    icon: Crown,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-400 to-emerald-400",
    features: [
      "Unlimited EPUB uploads",
      "Full AI visualization",
      "Advanced text-to-speech",
      "Reading analytics & progress tracking",
      "Offline reading mode",
      "Full Community Access",
      "Team collaboration",
      "API access"
    ],
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    price: { monthly: 299, yearly: 2990 },
    description: "Enterprise-grade AI solutions with full control",
    icon: Rocket,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-400 to-emerald-400",
    features: [
      "Multi-user support (10+ seats)",
      "Admin dashboard for tracking usage",
      "Private Community Channels",
      "Advanced security",
      "Unlimited Visualization",
      "Early access to beta features",
      "Full Access of Visualit"

    ],
    highlight: false,
    badge: "Enterprise"
  }
];

export const additionalFeatures = [
  {
    icon: Brain,
    title: "Smart Vocabulary Assistant",
    description: "Tap on any word to get a simple definition, synonym, or pronunciation—great for learners and non-native readers."
  },
  {
    icon: Settings,
    title: "Regular App Updates & Improvements",
    description: "Continuous enhancements, bug fixes, and feature rollouts based on community feedback"
  },
  {
    icon: Type,
    title: "DyslexiaEase",
    description: "Enhances readability for users with dyslexia through a combination of visual and functional tools:\n"

  },
  {
    icon: Shield,
    title: "Data Privacy & Secure Storage",
    description: "All personal data, reading history, and notes are encrypted and stored securely,"
  }
];