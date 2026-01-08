import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Quantum Computing Lead',
    organization: 'IBM Research',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
];

export const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= speakers.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? speakers.length - visibleCount : prev - 1
    );
  };

  return (
    <section id="speakers" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-6">
            Featured Speakers
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            World-Class <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry pioneers and academic leaders shaping the future of technology.
          </p>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Speaker Cards */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex gap-6"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              >
                <div className="glass-card glow-border p-6 group cursor-pointer">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <div className="aspect-square">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* LinkedIn Icon */}
                    <a
                      href="#"
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
                    >
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </div>

                  {/* Info */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-sm mb-1">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm">{speaker.organization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="glass" size="lg">
            View All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
