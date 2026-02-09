import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { RegistrationModal } from '@/components/RegistrationModal';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Theme', href: '#theme' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
];

import csLogo from '/src/assets/cs-logo.png';
import mttsLogo from '/src/assets/mtts-logo.png';
import wieLogo from '/src/assets/wie-logo.png';
import grssLogo from '/src/assets/grss-logo.svg';

// Logo paths for all 5 societies
const societyLogos = [
  { name: 'Computer Society', src: csLogo },
  { name: 'MTTS', src: mttsLogo },
  { name: 'WIE', src: wieLogo },
  { name: 'GRSS', src: grssLogo },
];

// Animated logo component with cycling logos and glitch text
const Logo = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % societyLogos.length);
        setIsGlitching(false);
      }, 200);
    }, 5000);

    return () => clearInterval(logoInterval);
  }, []);

  return (
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative h-10 w-14 flex items-center justify-center overflow-hidden">
        {societyLogos.map((logo, index) => (
          <motion.img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="absolute h-full w-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: currentLogoIndex === index ? 1 : 0,
              y: currentLogoIndex === index ? 0 : -20,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <span
          className={`text-xl font-bold text-foreground leading-none tracking-tight transition-all duration-100 ${isGlitching ? 'text-primary animate-pulse' : ''
            }`}
          style={{
            textShadow: isGlitching
              ? '2px 0 #ff0040, -2px 0 #00ff88, 0 0 10px rgba(0, 184, 212, 0.5)'
              : 'none',
            transform: isGlitching ? `translate(${Math.random() * 2 - 1}px, 0)` : 'none',
          }}
        >
          EPSILON
        </span>
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
          {societyLogos[currentLogoIndex].name}
        </span>
      </div>
    </a>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Find active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-primary z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                    }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button variant="default" size="sm">
                Register Now
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-border/30"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 ${activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
                <RegistrationModal trigger={
                  <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Register Now
                  </Button>
                } />
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};
