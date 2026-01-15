import { motion } from 'framer-motion';
import { DecryptedText } from '@/components/ui/DecryptedText';
import { CircularProgress } from '@/components/ui/CircularProgress';

export const Theme = () => {
  return (
    <section id="theme" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Circle with AI text */}
              <div className="absolute inset-8 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl md:text-7xl font-bold text-primary" style={{ textShadow: '0 0 40px rgba(0, 212, 255, 0.3)' }}>
                    AI
                  </span>
                  <p className="text-muted-foreground mt-2 text-xs tracking-[0.2em] uppercase">
                    The Future is Now
                  </p>
                </div>
              </div>

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/30 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
              EPSILON 2026 Theme
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <DecryptedText text="Intelligent Systems" /> <br />
              <span className="text-primary">
                <DecryptedText text="Shaping Tomorrow" />
              </span>
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              This year's symposium explores the transformative power of artificial intelligence,
              machine learning, and autonomous systems across industries—from healthcare to cybersecurity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CircularProgress percentage={100} label="50+" subLabel="Speakers" delay={0.2} />
              <CircularProgress percentage={85} label="20+" subLabel="Workshops" delay={0.4} />
              <CircularProgress percentage={95} label="1K+" subLabel="Attendees" delay={0.6} />
              <CircularProgress percentage={30} label="3" subLabel="Days Event" delay={0.8} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
