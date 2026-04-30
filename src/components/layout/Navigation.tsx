<<<<<<< HEAD
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const CinematicHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const whiteColor = '#ffffff';
=======
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
>>>>>>> a1c02cb57e83b2df0b4ec9c678930a2e2c861321

  return (
    <>
      <style>{`
<<<<<<< HEAD
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #0a0a0f;
          color: #ffffff;
          overflow-x: hidden;
        }

        .white-text {
          color: #ffffff !important;
        }

        .white-glow {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .white-border {
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
        }
        
        .white-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.5);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .muted-text {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        

        {/* Glowing orbs */}
        <motion.div 
          style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '16rem',
            height: '16rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '9999px',
            filter: 'blur(64px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          style={{
            position: 'absolute',
            bottom: '25%',
            right: '25%',
            width: '16rem',
            height: '16rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '9999px',
            filter: 'blur(64px)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
            
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect white-border"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  background: whiteColor
                }}
              />
              <span className="text-xs tracking-[0.2em] white-text">DIGITAL STUDIO</span>
            </motion.div>

            {/* Codmac - Main brand */}
            <motion.div className="relative">
              {/* Background glow effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: '-3rem',
                  borderRadius: '1.5rem',
                  filter: 'blur(64px)',
                  background: 'rgba(255, 255, 255, 0.4)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Codmac text */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative white-text white-glow"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                  fontWeight: 'bold',
                  lineHeight: 1,
                  color: whiteColor
                }}
              >
                CODMAC
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                  height: '0.25rem',
                  marginTop: '1.5rem',
                  borderRadius: '9999px',
                  background: whiteColor,
                  width: '80%',
                  maxWidth: '400px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Define your brand with clarity and precision.<br></br>
               We craft visual identities that speak boldly and connect globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg group relative overflow-hidden"
                style={{ background: whiteColor, color: '#0a0a0f' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'rgba(0, 0, 0, 0.1)' }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 rounded-full glass-effect white-border font-semibold text-base md:text-lg white-text"
                onClick={() => {
                  window.location.href = '/projects';
                }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-8 md:bottom-12 left-1/2"
            style={{ transform: 'translateX(-50%)' }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer group relative"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '9999px',
                  filter: 'blur(16px)',
                  background: 'rgba(255, 255, 255, 0.3)'
                }}
              />
              <ChevronDown className="relative w-8 h-8 md:w-10 md:h-10 group-hover:opacity-80 transition-opacity" style={{ color: whiteColor }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
=======
        .nav-glass {
    background: transparent !important;
    backdrop-filter: none !important;
    border: none !important;
    transition: none;
  }




        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: hsl(180 80% 55%);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(180 80% 55%), hsl(270 70% 60%));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .text-gradient {
          background: linear-gradient(135deg, hsl(180 80% 55%), hsl(270 70% 60%), hsl(190 85% 50%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-menu {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
        }

        .white-button {
          background: #ffffff;
          color: #0a0a0f;
        }

        .white-button:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="w-full px-0 mx-0">

        <div className="relative flex items-center justify-between h-16 md:h-20">

            
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group md:-ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo.png" 
                alt="CODMAC Logo" 
                className="h-16 sm:h-20 md:h-32 lg:h-40 w-auto object-contain"
              />
              
            </motion.a>

            {/* Desktop Navigation */}
            {/* Desktop Navigation - Centered */}
<div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
  {navLinks.map((link, index) => (
    <motion.a
      key={link.name}
      href={link.href}
      className="nav-link text-sm font-medium tracking-wide"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      {link.name}
    </motion.a>
  ))}
</div>


            {/* CTA Button - Desktop */}
            

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'hsl(180 80% 55%)' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: 0.1 * index }}
                className="block nav-link text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Mobile CTA Button */}
            
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-20" />
>>>>>>> a1c02cb57e83b2df0b4ec9c678930a2e2c861321
    </>
  );
};

<<<<<<< HEAD
export default CinematicHero;
=======
export default Navigation;
>>>>>>> a1c02cb57e83b2df0b4ec9c678930a2e2c861321
