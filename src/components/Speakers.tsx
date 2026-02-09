import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useState } from 'react';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    organization: 'Google DeepMind',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Leading research in reinforcement learning and neural architecture.',
  },
  {
    name: 'Prof. Michael Torres',
    role: 'Director of ML Research',
    organization: 'MIT CSAIL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Pioneer in computer vision and autonomous systems.',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Scientist',
    organization: 'NVIDIA Research',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Expert in GPU computing and deep learning optimization.',
  },
  {
    name: 'James Anderson',
    role: 'VP of Engineering',
    organization: 'OpenAI',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Building safe and beneficial AGI systems.',
  },
];

// Subtle Premium Card Component
const SpeakerCard = ({ speaker, index }: { speaker: typeof speakers[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative h-[400px] overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-500"
    >
      <div className="absolute inset-0">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{speaker.role}</p>
        <p className="text-gray-400 text-xs mb-4">{speaker.organization}</p>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{speaker.bio}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-medium"
          >
            <Linkedin size={16} />
            Connect via LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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
            Hover over cards to learn more about our speakers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
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
