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
      "Unlimited EPUB uploads",
      "Unlimited Audiobook Uploads",
      "Basic AI Visualization (3 - 5)",
      "Audiobook Generation (5 chapters/month)",
      "Advance Dictionary",
      "Offline reading mode",
      "Neuro Diverse UI"
    ],
    highlight: false,
    badge: null
  },
  {
    name: "Professional",
    subtitle: "Most popular choice",
    price: { monthly: 6.99},
    description: "Advanced AI capabilities for growing teams",
    icon: Crown,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-400 to-emerald-400",
    features: [
      "Unlimited EPUB uploads",
      "Unlimited Audiobook Uploads",
      "100 image generations/month",
      "Advanced Audiobook",
      "Reading analytics & progress tracking",
      "Offline reading mode",
      "Advance Dictionary",
      "Neuro Diverse UI"

    ],
    highlight: true,
    badge: "Most Popular"
  },
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