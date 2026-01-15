import { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ErrorBoundary } from './ErrorBoundary';
import { Typewriter } from '@/components/ui/Typewriter';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import heroBg from '@/assets/hero-bg.jpg';

const ThreeBackground = lazy(() =>
  import('./ThreeBackground').then(m => ({ default: m.ThreeBackground }))
);

const Fallback = () => (
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url(${heroBg})` }}
  />
);

// Reusable glitch text component
const GlitchText = ({
  children,
  className = "",
  intensity = 1
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [glitchFrame, setGlitchFrame] = useState(0);

  useEffect(() => {
    if (!isHovering) return;
    const glitchInterval = setInterval(() => {
      setGlitchFrame(prev => (prev + 1) % 10);
    }, 80);
    return () => clearInterval(glitchInterval);
  }, [isHovering]);

  const isGlitching = isHovering && glitchFrame < 4;
  const offset = 3 * intensity;

  return (
    <span
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setGlitchFrame(0); }}
      style={{
        textShadow: isGlitching ? `${offset}px 0 #ff0040, -${offset}px 0 #00ff88` : undefined,
        transform: isGlitching ? `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)` : undefined,
      }}
    >
      {children}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 mix-blend-screen pointer-events-none"
            style={{
              color: '#ff0040',
              opacity: 0.6,
              transform: `translate(-${offset}px, 0)`,
              clipPath: `polygon(0 ${30 + glitchFrame * 4}%, 100% ${30 + glitchFrame * 4}%, 100% ${50 + glitchFrame * 3}%, 0 ${50 + glitchFrame * 3}%)`,
            }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 mix-blend-screen pointer-events-none"
            style={{
              color: '#00ff88',
              opacity: 0.6,
              transform: `translate(${offset}px, 0)`,
              clipPath: `polygon(0 ${55 + glitchFrame * 2}%, 100% ${55 + glitchFrame * 2}%, 100% ${75 + glitchFrame}%, 0 ${75 + glitchFrame}%)`,
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// Glitch epsilon component
const GlitchEpsilon = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [glitchFrame, setGlitchFrame] = useState(0);

  useEffect(() => {
    if (!isHovering) return;
    const glitchInterval = setInterval(() => {
      setGlitchFrame(prev => (prev + 1) % 10);
    }, 80);
    return () => clearInterval(glitchInterval);
  }, [isHovering]);

  const isGlitching = isHovering && glitchFrame < 4;

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setGlitchFrame(0); }}
    >
      <span
        className="font-display text-[100px] md:text-[140px] lg:text-[180px] font-bold text-primary leading-none inline-block relative z-10"
        style={{
          textShadow: isGlitching
            ? '4px 0 #ff0040, -4px 0 #00ff88, 0 0 60px rgba(0, 184, 212, 0.6)'
            : '0 0 60px rgba(0, 184, 212, 0.4)',
          transform: isGlitching
            ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px) skewX(${Math.random() * 6 - 3}deg)`
            : 'perspective(500px) rotateY(-5deg)',
          transition: isGlitching ? 'none' : 'transform 0.3s ease',
        }}
      >
        ε
      </span>

      <span
        className="font-display text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none"
        style={{
          color: '#ff0040',
          opacity: isGlitching ? 0.7 : 0,
          transform: `translate(${isGlitching ? -8 : 0}px, 0)`,
        }}
      >
        ε
      </span>

      <span
        className="font-display text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none"
        style={{
          color: '#00ff88',
          opacity: isGlitching ? 0.7 : 0,
          transform: `translate(${isGlitching ? 8 : 0}px, 0)`,
        }}
      >
        ε
      </span>

      {isGlitching && (
        <>
          <div className="absolute left-0 right-0 h-2 bg-primary/40 pointer-events-none" style={{ top: `${30 + glitchFrame * 4}%` }} />
          <div className="absolute left-0 right-0 h-1 bg-cyan-400/60 pointer-events-none" style={{ top: `${60 + glitchFrame * 2}%` }} />
        </>
      )}
    </div>
  );
};

export const Hero = () => {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Event date: February 6, 2026
  const eventDate = new Date('2026-02-06T09:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {show3D && (
        <ErrorBoundary fallback={<Fallback />}>
          <Suspense fallback={<Fallback />}>
            <ThreeBackground />
          </Suspense>
        </ErrorBoundary>
      )}

      {!show3D && <Fallback />}

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 grid-background opacity-10 z-[2]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2.5 rounded-full border border-primary/20 bg-background/50 text-primary text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
            IEEE Annual Flagship Symposium
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 flex justify-center"
        >
          <GlitchEpsilon />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight"
        >
          <GlitchText className="text-foreground" intensity={1.5}>EPSILON</GlitchText>
          {" "}
          <GlitchText className="text-primary" intensity={1.5}>2026</GlitchText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
        >
          <Typewriter text="Exploring the Future of Intelligent Systems" speed={40} delay={800} />
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <CountdownTimer targetDate={eventDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl">
            Register Now
          </Button>
          <Button variant="hero-outline" size="xl">
            Explore Tracks
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
