import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Award } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';


export const Registration = () => {
  return (
    <section id="register" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/30 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
              Join Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Be Part of <span className="text-primary">EPSILON 2026</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Secure your spot at IEEE's premier technical symposium. Limited seats available.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-5 rounded-lg bg-secondary/30 border border-border/50">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1">Event Dates</h4>
                <p className="text-muted-foreground text-xs">February 13-15, 2026</p>
              </div>
              <div className="p-5 rounded-lg bg-secondary/30 border border-border/50">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1">Mode</h4>
                <p className="text-muted-foreground text-xs">Hybrid (Online + In-Person)</p>
              </div>
              <div className="p-5 rounded-lg bg-secondary/30 border border-border/50">
                <Award className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1">IEEE Certified</h4>
                <p className="text-muted-foreground text-xs">Official Recognition</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="https://forms.gle/iqUVfFhtbkY5oagR8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,184,212,0.3)] hover:shadow-[0_0_30px_rgba(0,184,212,0.5)]">
                  Register for EPSILON 2026
                </MagneticButton>
              </a>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};
