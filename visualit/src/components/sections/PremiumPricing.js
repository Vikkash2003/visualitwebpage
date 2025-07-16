'use client'
import { useState, useRef, useEffect,useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Star,
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { pricingPlans, additionalFeatures } from '../data/pricing';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
      <div className="flex flex-col items-center justify-center p-8 bg-black rounded-lg border border-green-800">
        <AlertCircle className="h-8 w-8 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-green-300 mb-2">
          Something went wrong
        </h3>
        <p className="text-green-400 text-center mb-4">
          {error.message}
        </p>
        <button
            onClick={resetErrorBoundary}
            className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
        >
          Try again
        </button>
      </div>
  );
}

function validatePricingTier(tier) {
  return (
      typeof tier.name === 'string' &&
      typeof tier.subtitle === 'string' &&
      typeof tier.price === 'object' &&
      typeof tier.price.monthly === 'number' &&
      typeof tier.price.yearly === 'number' &&
      tier.price.monthly > 0 &&
      tier.price.yearly > 0 &&
      typeof tier.description === 'string' &&
      Array.isArray(tier.features) &&
      tier.features.length > 0 &&
      typeof tier.icon === 'function' &&
      typeof tier.gradient === 'string' &&
      typeof tier.borderGradient === 'string' &&
      typeof tier.highlight === 'boolean' &&
      (typeof tier.badge === 'string' || tier.badge === null)
  );
}

function validateAdditionalFeature(feature) {
  return (
      typeof feature.title === 'string' &&
      typeof feature.description === 'string' &&
      typeof feature.icon === 'function'
  );
}

function PremiumPricing({
                            customTiers,
                            customFeatures,
                            onPlanSelect,
                            ctaText = "Get Started",
                            showAdditionalFeatures = true,
                            showCTASection = true,
                            yearlyDiscountPercent = 20
                        }) {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredPlan, setHoveredPlan] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    // Add scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '-50px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

  const validationResult = useMemo(() => {
    let tiers = pricingPlans;
    let features = additionalFeatures;
    let hasError = false;
    let errorMessage = '';

    try {
      if (customTiers) {
        const invalidTiers = customTiers.filter(tier => !validatePricingTier(tier));
        if (invalidTiers.length > 0) {
          hasError = true;
          errorMessage = 'Invalid pricing tiers provided.';
        } else {
          tiers = customTiers;
        }
      }

      if (customFeatures && !hasError) {
        const invalidFeatures = customFeatures.filter(feature => !validateAdditionalFeature(feature));
        if (invalidFeatures.length > 0) {
          hasError = true;
          errorMessage = 'Invalid additional features provided.';
        } else {
          features = customFeatures;
        }
      }

      if (yearlyDiscountPercent < 0 || yearlyDiscountPercent > 100) {
        hasError = true;
        errorMessage = `Yearly discount percent must be between 0 and 100. Received: ${yearlyDiscountPercent}`;
      }
    } catch (err) {
      hasError = true;
      errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    }

    return { tiers, features, hasError, errorMessage };
  }, [customTiers, customFeatures, yearlyDiscountPercent]);

  const { tiers, features, hasError, errorMessage } = validationResult;

  function handlePlanSelect(planName) {
    try {
      onPlanSelect?.(planName, isYearly);
    } catch (err) {
      console.error('Error in plan selection callback:', err);
    }
  }

  function calculateYearlySavings(monthlyPrice, yearlyPrice) {
    if (typeof monthlyPrice !== 'number' || typeof yearlyPrice !== 'number') {
      return 0;
    }
    return Math.max(0, (monthlyPrice * 12) - yearlyPrice);
  }

  if (hasError) {
    return <ErrorFallback error={new Error(errorMessage)} resetErrorBoundary={() => window.location.reload()} />;
  }

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: (isVisible) => ({
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 60,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.86, 0.39, 0.96]
            }
        })
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const cardHover = {
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const getCardAnimation = (index) => ({
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.23, 0.86, 0.39, 0.96]
            }
        }
    });

  return (
      <section ref={sectionRef} id="pricing" className="py-20 bg-[#080808] relative">          {/* Smudge green effect background layers */}

          <div className="container mx-auto px-4 relative z-10">
              {/* Header */}
              <motion.div
                  className="text-center mb-16"
                  custom={isVisible}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
              >
                  <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
                      Simple, Transparent Pricing
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      Choose the plan that fits your reading needs. Upgrade or downgrade anytime.
                  </p>

                  {/* Pricing toggle */}
                  <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-green-400' : 'text-gray-400'}`}>
              Monthly
            </span>
                      <button
                          onClick={() => setIsYearly(!isYearly)}
                          className={`relative w-16 h-8 rounded-full transition-all ${
                              isYearly ? 'bg-green-500' : 'bg-gray-700'
                          }`}
                      >
                          <motion.div
                              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full"
                              animate={{x: isYearly ? 32 : 0}}
                              transition={{type: "spring", stiffness: 500, damping: 30}}
                          />
                      </button>
                      <span className={`text-sm font-medium ${isYearly ? 'text-green-400' : 'text-gray-400'}`}>
              Yearly
            </span>
                  </div>
              </motion.div>

              {/* Pricing Cards */}
              <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10"
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
              >
                  {tiers.map((plan, index) => (
                      <motion.div
                          key={plan.name}
                          variants={getCardAnimation(index)}
                          className="relative w-full max-w-sm mx-auto"
                      >
                          <motion.div
                              whileHover={{
                                  scale: 1.03,
                                  y: -5,
                                  transition: {duration: 0.2}
                              }}
                              className={`h-full px-4 py-5 rounded-2xl bg-[#1e1e1e] relative overflow-hidden ${
                                  plan.highlight ? 'border-2 border-green-500' : 'border border-gray-800'
                              }`}
                          >
                              {/* Spotlight effect */}
                              <div
                                  className="absolute -right-20 -top-20 w-40 h-40 bg-white opacity-[0.03] rounded-full blur-2xl"/>

                              {/* Plan details - reduced text sizes */}
                              <div className="mb-4">
                                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                                  <p className="text-sm text-gray-400">{plan.description}</p>
                              </div>

                              {/* Pricing */}
                              <div className="mb-6">
                                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-green-400">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                                      <span className="text-gray-400 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                                  </div>
                              </div>

                              {/* Features */}
                              <ul className="space-y-4 mb-6">
                                  {plan.features.map((feature, featureIndex) => (
                                      <li key={featureIndex} className="flex items-center text-gray-300">
                                          <Check className="h-5 w-5 text-green-400 mr-3"/>
                                          {feature}
                                      </li>
                                  ))}
                              </ul>

                              {/* CTA Button */}

                              <button
                                  onClick={() => handlePlanSelect(plan.name)}
                                  className={`w-full py-3 rounded-[1.5rem] font-medium ${
                                      plan.highlight
                                          ? 'bg-green-500 hover:bg-green-600 text-black'
                                          : 'bg-gray-800 hover:bg-gray-700 text-white border border-green-500'
                                  }`}
                              >
                                  {ctaText}
                              </button>
                          </motion.div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
}

export default PremiumPricing;