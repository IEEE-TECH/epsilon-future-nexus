import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Monitor, Users, Radio } from 'lucide-react';

const tracks = [
  {
    icon: Monitor,
    title: 'Computer Society',
    description: 'Advancing the theory, practice, and application of computer and information processing technology.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Women in Engineering',
    description: 'Inspiring, engaging, and advancing women in technology and engineering worldwide.',
    color: 'accent',
  },
  {
    icon: Radio,
    title: 'MTT-S',
    description: 'Microwave theory and techniques—pushing the boundaries of wireless and RF technologies.',
    color: 'primary',
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="relative py-32 overflow-hidden">
      {/* Background */}
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
            Technical Tracks
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Explore Our <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three specialized tracks powered by IEEE societies, each offering unique perspectives 
            on the future of technology.
          </p>
        </motion.div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full transition-all duration-500 group-hover:border-primary/50">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <track.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Button */}
                  <Button variant="glass" className="w-full group-hover:border-primary/50">
                    View Track
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
