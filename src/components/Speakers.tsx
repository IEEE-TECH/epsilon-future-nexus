import { motion } from 'framer-motion';

import { useState } from 'react';





export const Speakers = () => {
  return (
    <section id="speakers" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/30 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
            Featured Speakers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            World-Class <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Industry leaders and pioneers shaping the future of technology.
          </p>
        </motion.div>

        {/* Revealing Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-12 text-center group hover:border-primary/30 transition-colors duration-500">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">🤫</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Revealing Soon
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto">
                We are curating a lineup of exceptional speakers from top tech giants and research institutions. Stay tuned for the announcement!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
