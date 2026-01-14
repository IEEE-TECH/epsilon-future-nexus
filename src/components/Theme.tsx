import { motion } from 'framer-motion';

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
              Intelligent Systems <br />
              <span className="text-primary">Shaping Tomorrow</span>
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              This year's symposium explores the transformative power of artificial intelligence,
              machine learning, and autonomous systems across industries—from healthcare to cybersecurity.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Speakers' },
                { value: '20+', label: 'Workshops' },
                { value: '1000+', label: 'Attendees' },
                { value: '3', label: 'Days' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
