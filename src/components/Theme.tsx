import { motion } from 'framer-motion';

export const Theme = () => {
  return (
    <section id="theme" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 grid-background opacity-20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-[600px] bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
      <div className="absolute top-1/2 right-0 w-1/3 h-[600px] bg-gradient-to-l from-accent/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Rotating Ring */}
              <div className="absolute inset-0 animate-rotate-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="10 5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(186 100% 50%)" />
                      <stop offset="100%" stopColor="hsl(200 100% 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Inner Circle */}
              <div className="absolute inset-12 rounded-full border border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="font-display text-6xl md:text-8xl font-black text-primary neon-text"
                  >
                    AI
                  </motion.div>
                  <p className="text-muted-foreground mt-2 text-sm tracking-widest uppercase">
                    The Future is Now
                  </p>
                </div>
              </div>

              {/* Floating Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/60"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              EPSILON 2026 Theme
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Intelligent Systems <br />
              <span className="text-primary">Shaping Tomorrow</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This year's symposium delves into the transformative power of artificial intelligence, 
              machine learning, and autonomous systems. Explore how intelligent technologies are 
              revolutionizing industries—from healthcare and transportation to cybersecurity and 
              sustainable energy.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join visionary researchers, industry pioneers, and emerging talents as we chart the 
              course toward a future where human ingenuity and machine intelligence converge to 
              solve humanity's greatest challenges.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Speakers' },
                { value: '20+', label: 'Workshops' },
                { value: '1000+', label: 'Attendees' },
                { value: '3', label: 'Days' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                  <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
