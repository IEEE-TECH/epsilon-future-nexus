import { motion } from 'framer-motion';
import { Mic, Wrench, MessageSquare } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const schedule = [
  {
    day: 'Day 1',
    date: 'February 6, 2026',
    title: 'Keynotes & Talks',
    icon: Mic,
    events: [
      'Opening Ceremony',
      'Keynote: Future of AI',
      'Technical Paper Sessions',
      'Networking Dinner',
    ],
  },
  {
    day: 'Day 2',
    date: 'February 7, 2026',
    title: 'Hands-on Workshops',
    icon: Wrench,
    events: [
      'ML Workshop Series',
      'IoT & Embedded Systems',
      'Cloud Architecture',
      'Hackathon Kickoff',
    ],
  },
  {
    day: 'Day 3',
    date: 'February 8, 2026',
    title: 'Panels & Closing',
    icon: MessageSquare,
    events: [
      'Industry Panels',
      'Research Showcase',
      'Awards Ceremony',
      'Closing Keynote',
    ],
  },
];

export const Schedule = () => {
  return (
    <section id="schedule" className="relative py-24 md:py-32">
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
            Event Schedule
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Days of <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            A carefully curated program designed to inspire, educate, and connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" intensity={8}>
                <div className="glass-card p-6 md:p-8 h-full bg-gradient-to-br from-card/80 to-card/40 border-border/50 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <day.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{day.day}</h3>
                      <p className="text-muted-foreground text-xs">{day.date}</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-5 group-hover:text-primary transition-colors">
                    {day.title}
                  </h4>

                  <ul className="space-y-3">
                    {day.events.map((event) => (
                      <li key={event} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="text-sm">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
