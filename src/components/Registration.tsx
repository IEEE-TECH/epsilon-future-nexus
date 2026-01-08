import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Registration = () => {
  return (
    <section id="register" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card glow-border p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-8">
                Join Us
              </span>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Be Part of <span className="text-primary neon-text">EPSILON 2026</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Secure your spot at IEEE's premier technical symposium. Limited seats available.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/30">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">Event Dates</h4>
                  <p className="text-muted-foreground">February 6-8, 2026</p>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/30">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">Mode</h4>
                  <p className="text-muted-foreground">Hybrid (Online + In-Person)</p>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/30">
                  <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">IEEE Certified</h4>
                  <p className="text-muted-foreground">Official IEEE Recognition</p>
                </div>
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Register for EPSILON 2026
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                Early bird registration closes December 31, 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
