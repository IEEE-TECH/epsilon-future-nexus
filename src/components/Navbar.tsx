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

// Loki-style glitch logo component - FASTER & MORE INTENSE
const GlitchLogo = () => {
  const [glitchFrame, setGlitchFrame] = useState(0);

  useEffect(() => {
    // Fast continuous glitch animation
    const glitchInterval = setInterval(() => {
      setGlitchFrame(prev => (prev + 1) % 10);
    }, 100); // Glitch every 100ms

    return () => clearInterval(glitchInterval);
  }, []);

  // Determine if we should show glitch based on frame
  const isGlitching = glitchFrame < 3; // Glitch 30% of the time

  return (
    <a href="#" className="flex items-center gap-2 group relative">
      {/* Epsilon symbol with constant glitch effect */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Main symbol */}
        <span
          className="text-2xl font-bold text-primary absolute"
          style={{
            textShadow: '0 0 10px rgba(0, 184, 212, 0.8), 0 0 20px rgba(0, 184, 212, 0.4)',
            transform: isGlitching ? `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)` : 'none',
          }}
        >
          ε
        </span>

        {/* Red glitch layer */}
        <span
          className="text-2xl font-bold absolute mix-blend-screen"
          style={{
            color: '#ff0040',
            opacity: isGlitching ? 0.8 : 0,
            transform: `translate(${isGlitching ? -3 : 0}px, ${isGlitching ? 1 : 0}px)`,
            transition: 'none',
          }}
        >
          ε
        </span>

        {/* Cyan glitch layer */}
        <span
          className="text-2xl font-bold absolute mix-blend-screen"
          style={{
            color: '#00ff88',
            opacity: isGlitching ? 0.8 : 0,
            transform: `translate(${isGlitching ? 3 : 0}px, ${isGlitching ? -1 : 0}px)`,
            transition: 'none',
          }}
        >
          ε
        </span>
      </div>

      {/* EPSILON text with glitch */}
      <div className="relative overflow-hidden">
        <span
          className="text-base font-semibold text-foreground tracking-wide"
          style={{
            textShadow: isGlitching ? '2px 0 #ff0040, -2px 0 #00ff88' : 'none',
            transform: isGlitching ? `skewX(${Math.random() * 4 - 2}deg)` : 'none',
          }}
        >
          EPSILON
        </span>

        {/* Horizontal glitch bars */}
        {isGlitching && (
          <>
            <div
              className="absolute left-0 right-0 h-1 bg-primary/50"
              style={{ top: `${20 + glitchFrame * 5}%` }}
            />
            <div
              className="absolute left-0 right-0 h-0.5 bg-cyan-400/70"
              style={{ top: `${60 + glitchFrame * 3}%` }}
            />
          </>
        )}
      </div>

      {/* Constant subtle glow */}
      <div
        className="absolute -inset-3 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 184, 212, 0.15) 0%, transparent 70%)',
          zIndex: -1
        }}
      />
    </a>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Glitch Logo */}
          <GlitchLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" size="sm" className="mt-3">
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
