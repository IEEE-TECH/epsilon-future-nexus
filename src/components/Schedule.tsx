import { motion } from 'framer-motion';
import { Mic, Wrench, MessageSquare } from 'lucide-react';

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
    <section id="schedule" className="relative py-32 overflow-hidden">
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
            Event Schedule
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Three Days of <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully curated program designed to inspire, educate, and connect.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                </div>

                <div className="glass-card glow-border p-8 mt-8 group hover:border-primary/50 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <day.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">{day.day}</h3>
                      <p className="text-muted-foreground text-sm">{day.date}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                    {day.title}
                  </h4>

                  {/* Events */}
                  <ul className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <li
                        key={event}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <span className="text-sm">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
