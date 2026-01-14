import { motion } from 'framer-motion';
import { GraduationCap, Wrench, Globe } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const features = [
  {
    icon: GraduationCap,
    title: 'Learn from Global Experts',
    description: 'World-renowned speakers sharing cutting-edge insights on AI, ML, and emerging technologies.',
  },
  {
    icon: Wrench,
    title: 'Hands-on Workshops',
    description: 'Interactive sessions designed to build practical skills and foster innovation.',
  },
  {
    icon: Globe,
    title: 'IEEE-Backed Symposium',
    description: 'An internationally recognized platform connecting students, researchers, and industry leaders.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/30 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
            About EPSILON
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Innovation <span className="text-primary">Converges</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EPSILON is IEEE SIES GST's premier annual technical symposium, uniting the brightest minds
            in technology for groundbreaking research and immersive workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card p-6 md:p-8 h-full bg-gradient-to-br from-card/80 to-card/40 border-border/50">
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
