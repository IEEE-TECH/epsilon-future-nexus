import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TiltCard } from '@/components/ui/TiltCard';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    organization: 'Google DeepMind',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Prof. Michael Torres',
    role: 'Director of ML Research',
    organization: 'MIT CSAIL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Scientist',
    organization: 'NVIDIA Research',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'James Anderson',
    role: 'VP of Engineering',
    organization: 'OpenAI',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
];

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
            Learn from industry pioneers and academic leaders shaping the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" intensity={10}>
                <div className="glass-card p-5 h-full bg-gradient-to-br from-card/80 to-card/40 border-border/50 group">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <div className="aspect-square">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    <a
                      href="#"
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-primary-foreground" />
                    </a>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-xs mb-0.5">{speaker.role}</p>
                  <p className="text-muted-foreground text-xs">{speaker.organization}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="ghost" className="border border-border hover:border-primary/30 hover:bg-primary/5">
            View All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
