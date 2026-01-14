import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Monitor, Users, Radio } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const tracks = [
  {
    icon: Monitor,
    title: 'Computer Society',
    description: 'Advancing the theory, practice, and application of computer and information processing technology.',
  },
  {
    icon: Users,
    title: 'Women in Engineering',
    description: 'Inspiring, engaging, and advancing women in technology and engineering worldwide.',
  },
  {
    icon: Radio,
    title: 'MTT-S',
    description: 'Microwave theory and techniques—pushing the boundaries of wireless and RF technologies.',
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="relative py-24 md:py-32">
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
            Technical Tracks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Three specialized tracks powered by IEEE societies, each offering unique perspectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card p-6 md:p-8 h-full bg-gradient-to-br from-card/80 to-card/40 border-border/50 group">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <track.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {track.description}
                  </p>

                  <Button variant="ghost" className="w-full border border-border/50 hover:border-primary/30 hover:bg-primary/5">
                    View Track
                  </Button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
