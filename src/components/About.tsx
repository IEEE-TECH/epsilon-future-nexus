import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Zap } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const learningOutcomes = [
  {
    icon: Lightbulb,
    title: 'Expert Insights',
    description: 'Gain deep conceptual and practical insights from expert-led sessions.',
  },
  {
    icon: Zap,
    title: 'Hands-on Learning',
    description: 'Engage in hands-on learning across diverse technological domains.',
  },
  {
    icon: Target,
    title: 'Interdisciplinary Exposure',
    description: 'Experience interdisciplinary exposure aligned with emerging industry trends.',
  },
  {
    icon: Users,
    title: 'Network & Grow',
    description: 'Benefit from peer learning and expert interaction to strengthen professional skills.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">

        <div className="mb-16 text-left max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">What is EPSILON?</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            EPSILON 2026 is a three-day academic convention, scheduled from 13th to 15th February 2026,
            bringing together industry experts, academicians, and technology leaders on a common platform.
            Guided by the theme Dimensions of Discovery, the event explores diverse technological domains
            through expert talks, interactive sessions, hands-on workshops, and panel discussions, fostering
            innovation and interdisciplinary learning.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">About the Theme: Dimensions of Discovery</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            The theme Dimensions of Discovery represents the exploration of emerging technologies across
            multiple dimensions of science, engineering, and innovation. It highlights advancements in
            AI, machine learning, and computational intelligence, fostering a spirit of inquiry and
            breakthrough thinking.
          </p>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {learningOutcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="p-6 h-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl group hover:bg-black/50 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                      <outcome.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
                    {outcome.description}
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
