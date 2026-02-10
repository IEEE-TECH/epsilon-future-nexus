import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ErrorBoundary } from './ErrorBoundary';
import { Typewriter } from '@/components/ui/Typewriter';
import { MagneticButton } from '@/components/ui/MagneticButton';
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

// Elegant static logo component
const ElegantEpsilon = ({ large = false }: { large?: boolean }) => {
  const baseSize = large ? "text-[200px] md:text-[300px] lg:text-[400px]" : "text-[100px]";

  return (
    <div className="relative select-none flex items-center justify-center">
      <span
        className={`font-display ${baseSize} font-bold text-primary/10 leading-none inline-block relative z-10 animate-pulse`}
        style={{
          textShadow: '0 0 80px rgba(0, 184, 212, 0.1)',
          animationDuration: '4s',
        }}
      >
        ε
      </span>

      {/* Subtle overlay for depth */}
      <span
        className={`font-display ${baseSize} font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-transparent leading-none absolute inset-0 flex items-center justify-center animate-[pulse_6s_ease-in-out_infinite]`}
      >
        ε
      </span>
    </div>
  );
};

export const Hero = () => {
  const [show3D, setShow3D] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {show3D ? (
          <ErrorBoundary fallback={<Fallback />}>
            <Suspense fallback={<Fallback />}>
              {/* Less intrusive 3D background */}
              <div className="opacity-40"><ThreeBackground /></div>
            </Suspense>
          </ErrorBoundary>
        ) : <Fallback />}

        {/* Grain Overlay */}
        <div className="noise-overlay" />

        {/* Organic Gradient Blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-screen">

        {/* Left Content - Typography Dominant */}
        <motion.div
          style={{ y: y1 }}
          className="lg:col-span-7 flex flex-col justify-center text-left pt-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary/50" />
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                IEEE Annual Flagship Symposium
              </span>
            </div>

            <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-[90px] font-bold tracking-tighter leading-[0.9] mb-6 sm:mb-8">
              DIMENSIONS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                DISCOVERY.
              </span>
            </h1>

            <div className="max-w-xl text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10">
              <Typewriter text="Exploring emerging technologies and unveiling the future of innovation." speed={30} delay={500} />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 w-full sm:w-auto items-center">
              <a
                href="https://forms.gle/iqUVfFhtbkY5oagR8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative"
              >
                <div className="absolute -inset-1 bg-primary/30 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500 will-change-transform" />
                <MagneticButton className="relative w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="h-10 sm:h-16 px-6 sm:px-10 w-full sm:w-auto text-sm sm:text-lg rounded-none border-l-2 border-primary bg-primary/10 hover:bg-primary/20 text-primary backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(0,184,212,0.15)] hover:shadow-[0_0_40px_rgba(0,184,212,0.3)]"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </a>

              <a href="#tracks" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="h-10 sm:h-16 px-6 sm:px-10 w-full sm:w-auto text-sm sm:text-lg rounded-none border-b border-white/10 hover:border-white/40 text-foreground hover:bg-white/5 transition-all"
                  >
                    Explore Tracks
                  </Button>
                </MagneticButton>
              </a>
            </div>

            {/* Stats / Date Minimalist */}
            <div className="mt-8 sm:mt-16 flex gap-8 sm:gap-12 border-t border-white/5 pt-6 sm:pt-8">
              <div>
                <div className="text-xl sm:text-3xl font-bold font-display">13</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">Feb</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold font-display">15</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">Feb</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold font-display text-primary">2026</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">Year</div>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* Right Visual - Abstract & 3D */}
        <motion.div
          style={{ y: y2 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20"
          >
            <ElegantEpsilon large />

            {/* Decor Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border border-dashed border-primary/10 rounded-full scale-[1.8] animate-[spin_20s_linear_infinite_reverse]" />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4 z-20"
      >
        <span className="writing-vertical-rl text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 rotate-180">
          Scroll to Explore
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      </motion.div>
    </section>
  );
};
