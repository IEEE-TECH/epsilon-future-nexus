import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Theme', href: '#theme' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
];

// Loki-style glitch logo component
const GlitchLogo = () => {
  const [glitchFrame, setGlitchFrame] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchFrame(prev => (prev + 1) % 10);
    }, 100);
    return () => clearInterval(glitchInterval);
  }, []);

  const isGlitching = glitchFrame < 3;

  return (
    <a href="#" className="flex items-center gap-2 group relative">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span
          className="text-2xl font-bold text-primary absolute"
          style={{
            textShadow: '0 0 10px rgba(0, 184, 212, 0.8), 0 0 20px rgba(0, 184, 212, 0.4)',
            transform: isGlitching ? `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)` : 'none',
          }}
        >
          ε
        </span>
        <span
          className="text-2xl font-bold absolute mix-blend-screen"
          style={{
            color: '#ff0040',
            opacity: isGlitching ? 0.8 : 0,
            transform: `translate(${isGlitching ? -3 : 0}px, ${isGlitching ? 1 : 0}px)`,
          }}
        >
          ε
        </span>
        <span
          className="text-2xl font-bold absolute mix-blend-screen"
          style={{
            color: '#00ff88',
            opacity: isGlitching ? 0.8 : 0,
            transform: `translate(${isGlitching ? 3 : 0}px, ${isGlitching ? -1 : 0}px)`,
          }}
        >
          ε
        </span>
      </div>

      <div className="relative overflow-hidden">
        <span
          className="text-base font-semibold text-foreground tracking-wide"
          style={{
            textShadow: isGlitching ? '2px 0 #ff0040, -2px 0 #00ff88' : 'none',
          }}
        >
          EPSILON
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
            <GlitchLogo />

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
                <Button variant="default" size="sm" className="mt-3">
                  Register Now
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};
