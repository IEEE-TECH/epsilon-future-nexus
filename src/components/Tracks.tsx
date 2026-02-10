import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Heart, Globe, Calendar, Clock, MapPin } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const tracks = [
  {
    id: 'cs',
    icon: ShieldCheck,
    title: 'Cyber Security',
    society: 'Computer Society',
    description: 'A critical pillar in today’s interconnected world, focusing on modern digital challenges and defense strategies.',
    timeline: [
      {
        day: 'Day 1: Feb 13',
        time: '10:00 AM - 11:30 AM',
        type: 'Talk Session',
        title: 'Inside Modern Cyber Attacks',
        topics: ['Real attack chains', 'Attacker mindset vs Defender response', 'Minimal tools, maximum insight'],
      },
      {
        day: 'Day 2: Feb 14',
        time: '10:00 AM - 11:30 AM',
        type: 'Hands-On Workshop',
        title: 'Web App Penetration Testing',
        topics: ['OWASP Top 10', 'Burp Suite hands-on', 'Vulnerability exploitation', 'Defensive takeaways'],
      },
      {
        day: 'Day 3: Feb 15',
        time: '10:00 AM - 11:30 AM',
        type: 'Panel Discussion',
        title: 'The Future of AI in Cyber Defense',
        topics: ['AI arms race in cyber defense', 'Agentic AI response systems', 'Human oversight vs Machine-speed attacks'],
      },
    ]
  },
  {
    id: 'mtt-s',
    icon: Zap,
    title: 'Power Electronics',
    society: 'MTT-S',
    description: 'Enabling efficient power conversion and management for renewable energy, EVs, and smart grids.',
    timeline: [
      {
        day: 'Day 1: Feb 13',
        time: '12:00 PM - 1:30 PM',
        type: 'Talk Session',
        title: 'Smart BMS for Electric Vehicles',
        topics: ['BMS basics & Power electronics', 'Safety, thermal & fast-charging', 'AI-enabled BMS trends'],
      },
      {
        day: 'Day 2: Feb 14',
        time: '12:00 PM - 1:30 PM',
        type: 'Hands-On Workshop',
        title: 'DC–DC Converters with LTSpice',
        topics: ['Buck & Boost converter design', 'Ripple & efficiency analysis', 'Simulation basics'],
      },
      {
        day: 'Day 3: Feb 15',
        time: '12:00 PM - 1:30 PM',
        type: 'Panel Discussion',
        title: 'Future of EV Power Electronics',
        topics: ['Evolution of power electronics', 'Wide bandgap devices', 'Industry skills & expectations'],
      },
    ]
  },
  {
    id: 'wie',
    icon: Heart,
    title: 'Holistic Health',
    society: 'WIE',
    description: 'Addressing physical, mental, and emotional well-being across genders and life stages.',
    timeline: [
      {
        day: 'Day 1: Feb 13',
        time: '2:00 PM - 3:30 PM',
        type: 'Talk Session',
        title: 'Inclusive Health Awareness',
        topics: ['Preventive Healthcare', 'Mental Health across life stages', 'Gender-sensitive awareness'],
      },
      {
        day: 'Day 2: Feb 14',
        time: '2:00 PM - 3:30 PM',
        type: 'Hands-On Workshop',
        title: 'Designing Ayurvedic Wellness',
        topics: ['Understanding Doshas', 'Personalized daily routines', 'Home remedies'],
      },
      {
        day: 'Day 3: Feb 15',
        time: '2:00 PM - 3:30 PM',
        type: 'Panel Discussion',
        title: 'Balancing Well-being & Career',
        topics: ['Managing expectations', 'Handling demanding environments', 'Sustaining motivation'],
      },
    ]
  },
  {
    id: 'grss',
    icon: Globe,
    title: 'Remote Sensing',
    society: 'GRSS',
    description: 'Exploring the evolution of sensors for precise Earth observation and geoscience.',
    timeline: [
      {
        day: 'Day 1: Feb 13',
        time: '4:00 PM - 5:30 PM',
        type: 'Talk Session',
        title: 'Evolution of Sensors',
        topics: ['Multispectral to Hyperspectral', 'SAR principles', 'Optical vs Radar sensors'],
      },
      {
        day: 'Day 2: Feb 14',
        time: '4:00 PM - 5:30 PM',
        type: 'Hands-On Workshop',
        title: 'Google Earth Engine',
        topics: ['Accessing Landsat/Sentinel data', 'Visualizing satellite imagery', 'Basic data analysis'],
      },
      {
        day: 'Day 3: Feb 15',
        time: '4:00 PM - 5:30 PM',
        type: 'Panel Discussion',
        title: 'Next-Gen Earth Observation',
        topics: ['AI & ML in remote sensing', 'Data accuracy challenges', 'Careers in geoscience'],
      },
    ]
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
            Four specialized tracks powered by IEEE societies, covering everything from Cyber Security to Earth Observation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-full cursor-pointer">
                    <TiltCard className="h-full">
                      <div className="p-6 h-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl group flex flex-col hover:bg-black/50 hover:shadow-2xl hover:shadow-primary/5">
                        <div className="mb-6 flex justify-between items-start">
                          <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-primary/10">
                            <track.icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors" />
                          </div>
                          <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground bg-transparent">
                            {track.society}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">
                          {track.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/80 mb-6 leading-relaxed flex-grow font-light">
                          {track.description}
                        </p>

                        <Button variant="ghost" className="w-full border border-white/5 hover:border-primary/20 hover:bg-primary/5 hover:text-primary mt-auto text-xs uppercase tracking-widest font-medium">
                          View Timeline
                        </Button>
                      </div>
                    </TiltCard>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] p-0 gap-0 bg-card/95 backdrop-blur-xl border-primary/20 overflow-hidden flex flex-col">
                  <DialogHeader className="p-6 pb-2 shrink-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <track.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-xl md:text-2xl font-bold flex items-center gap-2 text-left">
                          {track.title}
                        </DialogTitle>
                        <DialogDescription className="text-primary/80 font-medium text-left">
                          {track.society}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <ScrollArea className="flex-1 w-full px-6 pb-6">
                    <div className="space-y-6 pt-2 pb-4">
                      {track.timeline.map((event, i) => (
                        <div key={i} className="relative pl-6 border-l border-border/50 pb-2 last:pb-0">
                          <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                          <div className="mb-1 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded text-primary whitespace-nowrap">
                              <Calendar className="w-3 h-3" /> {event.day}
                            </span>
                            <span className="flex items-center gap-1 whitespace-nowrap">
                              <Clock className="w-3 h-3" /> {event.time}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mt-1 mb-1">{event.title}</h4>
                          <span className="inline-block text-xs font-medium text-primary/90 mb-2 border border-primary/20 px-2 py-0.5 rounded">
                            {event.type}
                          </span>
                          <ul className="list-disc list-inside space-y-1 mt-2">
                            {event.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="text-sm text-muted-foreground pl-1">
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
