import { motion } from 'framer-motion';
import { GraduationCap, Wrench, Globe } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Learn from Global Experts',
    description: 'World-renowned speakers sharing cutting-edge insights on AI, ML, and emerging technologies.',
  },
  {
    icon: Wrench,
    title: 'Hands-on Workshops',
    description: 'Interactive sessions and panels designed to build practical skills and foster innovation.',
  },
  {
    icon: Globe,
    title: 'IEEE-Backed Symposium',
    description: 'An internationally recognized platform connecting students, researchers, and industry leaders.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-6">
            About EPSILON
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Where Innovation <span className="text-primary">Converges</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EPSILON is IEEE SIES GST's premier annual technical symposium, uniting the brightest minds 
            in technology. From groundbreaking research presentations to immersive workshops, 
            EPSILON 2026 promises an unparalleled experience at the intersection of academia and industry.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glow-border p-8 group cursor-pointer"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
