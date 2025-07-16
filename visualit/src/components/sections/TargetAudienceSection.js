'use client'
import { useState, useEffect, useRef } from 'react'
import { audiences } from '../data/targetAudience'

export default function TargetAudienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          // Reset animation when section is out of view
          if (!entry.isIntersecting) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
        },
        { threshold: 0.1, rootMargin: '-50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getCardAnimation = (index) => {
    const baseDelay = index * 200 // 200ms delay between each card
    const direction = index % 2 === 0 ? 'translate-y-20' : '-translate-y-20'

    return `transition-all duration-1000 delay-[${baseDelay}ms] ${
        isVisible
            ? 'opacity-100 translate-y-0'
            : `opacity-0 ${direction}`
    }`
  }

  return (
      <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          <div className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl font-bold text-green-400 mb-4">
              Built for Everyone
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Whether you are a casual reader, student, or someone who needs accessibility features,
              Visualit adapts to your unique reading needs.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">


            {audiences.map((audience, index) => (
                <div
                    key={index}
                    className={`flex-shrink-0 group ${getCardAnimation(index)}`}
                >
                  <div
                      className="bg-[#1e1e1e] rounded-lg border border-border p-6 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-xl mr-4 flex-shrink-0 group-hover:animate-bounce">
                        {audience.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {audience.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {audience.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-white text-sm mb-2">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {audience.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                              <span className="text-gray-300 text-xs">{benefit}</span>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}