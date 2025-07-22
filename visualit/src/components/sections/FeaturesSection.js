"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Brain, BrainCog } from "lucide-react";

const Features = ({ features }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef([]);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(containerRef, { once: true, margin: "-50px" });

  // This parallax transform for the image is fine and can stay.
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // --- REMOVED ---
  // The opacity transform was causing the issue. We will rely on useInView for animations.
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();
      container.scrollTo({
        left: activeFeatureElement.offsetLeft - (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
      // --- CHANGED: Removed the style={{ opacity }} property ---
      <motion.div
          ref={sectionRef}
          id="features"
          className="min-h-screen py-16 px-4 bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
              ref={headerRef}
              className="text-center mb-16" // Removed fade-in class, letting framer-motion handle it
              initial={{ opacity: 0, y: 50 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
                className="text-green-500 font-semibold text-sm uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI Mentors. Real Results.
            </motion.span>
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" // text-foreground changed to text-white for contrast
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI That Actually Teaches
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
            <motion.div
                ref={containerRef}
                className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto lg:overflow-visible no-scrollbar flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
                initial={{ opacity: 0, x: -50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = currentFeature === index;

                return (
                    <motion.div
                        key={feature.id}
                        ref={(el) => {
                          featureRefs.current[index] = el;
                        }}
                        className="relative cursor-pointer flex-shrink-0"
                        onClick={() => handleFeatureClick(index)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                      <div
                          className={`flex lg:flex-row flex-col items-start lg:items-center space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 ${
                              isActive ? "bg-black/30 border border-gray-700 rounded-xl shadow-lg" : ""
                          }`}
                      >
                        <div
                            className={`p-3 hidden md:block rounded-full transition-all duration-300 ${
                                isActive ? "bg-green-500 text-white" : "bg-green-500/10 text-green-500"
                            }`}
                        >
                          <Icon size={24} />
                        </div>

                        <div className="flex-1">
                          <h3
                              className={`text-lg lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${
                                  isActive ? "text-white" : "text-gray-400"
                              }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                              className={`transition-colors duration-300 text-sm ${
                                  isActive ? "text-gray-400" : "text-gray-500"
                              }`}
                          >
                            {feature.description}
                          </p>
                          <div className="mt-4 bg-gray-800 rounded-sm h-1 overflow-hidden">
                            {isActive && (
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-400 to-green-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                />
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </motion.div>

            <motion.div
                className="relative order-1 max-w-lg mx-auto lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y }} // Parallax effect on the image
            >
              <AnimatePresence mode="wait">
                <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                      className="rounded-2xl border border-gray-700 shadow-lg"
                      src={features[currentFeature].image}
                      alt={features[currentFeature].title}
                      width={600}
                      height={400}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      loading="eager"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

const features = [
  {
    id: 1,
    icon: BrainCog,
    title: "Visualize Characters",
    description: "Real-time visual rendering of characters, scenes, and entire book worlds powered by advanced AI.",
    image: "/visualize.png",
  },
  {
    id: 2,
    icon: BrainCog,
    title: "Text to Audio",
    description: "High-quality, natural-sounding voices with adjustable speed and pronunciation for comfortable listening",
    image: "/audiobook.png",
  },
  {
    id: 3,
    icon: Brain,
    title: "Dictionary",
    description: "Experience personalized, AI-driven learning tailored for BCA, BBA, and other students.",
    image: "/dictionary.png",
  },
];

const DemoOne = () => {
  return <Features features={features} />;
};

export default DemoOne;