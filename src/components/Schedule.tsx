import { motion } from 'framer-motion';
import { Mic, Wrench, MessageSquare } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const schedule = [
  {
    day: 'Day 1',
    date: 'February 13, 2026',
    title: 'Keynotes & Talk Sessions',
    icon: Mic,
    events: [
      'Cyber Security: Inside modern attack chains',
      'Power Electronics: Smart BMS for EVs',
      'Holistic Health: Preventive care awareness',
      'Geoscience: Multispectral & SAR sensors',
    ],
  },
  {
    day: 'Day 2',
    date: 'February 14, 2026',
    title: 'Hands-On Workshops',
    icon: Wrench,
    events: [
      'VAPT Basics: Web app penetration testing',
      'Circuit Design: DC-DC converters in LTSpice',
      'Ayurvedic Wellness: Doshas & wellness roadmaps',
      'Google Earth Engine: Satellite imagery analysis',
    ],
  },
  {
    day: 'Day 3',
    date: 'February 15, 2026',
    title: 'Panels & Future Scope',
    icon: MessageSquare,
    events: [
      'AI in Defense: Agentic AI & autonomous systems',
      'Industry Trends: Wide bandgap devices & EVs',
      'Career Balance: Managing well-being',
      'Advanced Sensing: AI/ML in Earth observation',
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
              <div className="p-6 md:p-8 h-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl group hover:bg-black/50 hover:shadow-2xl hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-primary/10">
                    <day.icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{day.day}</h3>
                    <p className="text-muted-foreground text-xs">{day.date}</p>
                  </div>
                </div>

                <h4 className="text-xl font-medium text-foreground mb-5 tracking-tight group-hover:text-primary transition-colors">
                  {day.title}
                </h4>

                <ul className="space-y-3">
                  {day.events.map((event) => (
                    <li key={event} className="flex items-center gap-3 text-muted-foreground/80 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      <span className="text-sm">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
