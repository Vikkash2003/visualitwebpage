'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  // Add this missing function
  const handleJoinUsClick = (e) => {
    e?.preventDefault?.();
    const element = document.querySelector('#footer');
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        if (window.highlightFooterEmail) window.highlightFooterEmail();
      }, 500); // Wait for scroll to finish
    }
  };

  const headerVariants = {
    top: {
      backgroundColor: "rgba(2, 2, 2, 0.8)", // #020202 with opacity
      borderBottomColor: "rgba(55, 65, 81, 0.5)",
      boxShadow: 'none',
    },
    scrolled: {
      backgroundColor: "rgba(8, 8, 8, 0.95)", // #080808 with opacity
      borderBottomColor: "rgba(75, 85, 99, 0.7)",
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15 } }
  }

  return (
      <motion.header
          variants={headerVariants}
          initial="top"
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8">
                <Image
                    src="/AppLogo.png"
                    alt="VisualIT Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                />
              </div>
              <h1 className="text-xl font-semibold text-white">VisualIT</h1>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home"
                 onClick={(e) => handleNavClick(e, '#home')}
                 className="text-sm text-gray-400 hover:text-white relative py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0CF2A0] after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
              <a href="#features"
                 onClick={(e) => handleNavClick(e, '#features')}
                 className="text-sm text-gray-400 hover:text-white relative py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0CF2A0] after:transition-all after:duration-300 hover:after:w-full">
                Features
              </a>
              <a href="#pricing"
                 onClick={(e) => handleNavClick(e, '#pricing')}
                 className="text-sm text-gray-400 hover:text-white relative py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0CF2A0] after:transition-all after:duration-300 hover:after:w-full">
                Pricing
              </a>
              <a href="#footer"
                 onClick={(e) => handleNavClick(e, '#footer')}
                 className="text-sm text-gray-400 hover:text-white relative py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0CF2A0] after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-400 hover:text-white"
              >
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="md:hidden mt-4 pb-4"
                >
                  <div className="flex flex-col space-y-4">
                    <a href="#home"
                       onClick={(e) => handleNavClick(e, '#home')}
                       className="text-sm text-gray-400 hover:text-white">
                      Home
                    </a>
                    <a href="#features"
                       onClick={(e) => handleNavClick(e, '#features')}
                       className="text-sm text-gray-400 hover:text-white">
                      Features
                    </a>
                    <a href="#pricing"
                       onClick={(e) => handleNavClick(e, '#pricing')}
                       className="text-sm text-gray-400 hover:text-white">
                      Pricing
                    </a>
                    <a href="#footer"
                       onClick={(e) => handleNavClick(e, '#footer')}
                       className="text-sm text-gray-400 hover:text-white">
                      Contact
                    </a>
                    <button
                        onClick={handleJoinUsClick}
                        className="bg-[#0CF2A0] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors text-left">
                      Join Us
                    </button>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
  )
}