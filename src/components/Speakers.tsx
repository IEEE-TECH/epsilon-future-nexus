import { motion } from 'framer-motion';
import { Linkedin, User, Calendar, Mic } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TiltCard } from '@/components/ui/TiltCard';

const speakerTracks = {
  CS: [
    { name: 'Edward Starkie', event: 'Webinar', linkedin: 'https://www.linkedin.com/in/edward-starkie-mciis-56712431/', image: 'https://ui-avatars.com/api/?name=Edward+Starkie&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Stephen Odunze', event: 'Workshop', linkedin: 'https://www.linkedin.com/in/stephen-odunze411/', image: 'https://ui-avatars.com/api/?name=Stephen+Odunze&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Uddesh Vaidya', event: 'Panel', linkedin: 'https://www.linkedin.com/in/uddesh/', image: 'https://ui-avatars.com/api/?name=Uddesh+Vaidya&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Anastasiya Kurilova', event: 'Panel', linkedin: 'https://www.linkedin.com/in/anakurilova/', image: 'https://ui-avatars.com/api/?name=Anastasiya+Kurilova&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Emmanuel Enwesi', event: 'Panel', linkedin: 'https://www.linkedin.com/in/emmanuel-enwesi-004ba1191/', image: 'https://ui-avatars.com/api/?name=Emmanuel+Enwesi&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Aftab Khan', event: 'Panel', linkedin: 'https://www.linkedin.com/in/aftabkhan89/', image: 'https://ui-avatars.com/api/?name=Aftab+Khan&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Tarun Malhotra', event: 'Panel', linkedin: 'https://www.linkedin.com/in/tarunmalhotra282/', image: 'https://ui-avatars.com/api/?name=Tarun+Malhotra&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Jonathan Ayodele', event: 'Panel', linkedin: 'https://www.linkedin.com/in/jonatayo/', image: 'https://ui-avatars.com/api/?name=Jonathan+Ayodele&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Priyanka Kadam', event: 'Moderator', linkedin: 'https://www.linkedin.com/in/priyanka-kadam-151991136', image: 'https://ui-avatars.com/api/?name=Priyanka+Kadam&background=0A0A0A&color=00b8d4&size=200&bold=true' },
  ],
  MTTS: [
    { name: 'Aditya Iyer', event: 'Webinar', linkedin: 'https://www.linkedin.com/in/aditya-iyer-a3704815a', image: 'https://ui-avatars.com/api/?name=Aditya+Iyer&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Dr. Ramchandra Bhosale', event: 'Workshop', linkedin: 'https://www.linkedin.com/in/ramchandra-bhosale-b66016363', image: 'https://ui-avatars.com/api/?name=Ramchandra+Bhosale&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Dr. Ravikiran Hiremath', event: 'Panel', linkedin: 'https://www.linkedin.com/in/ravikiran-hiremath-207b5aba', image: 'https://ui-avatars.com/api/?name=Ravikiran+Hiremath&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Krutik Panchal', event: 'Panel', linkedin: 'https://www.linkedin.com/in/krutik-panchal-174009241', image: 'https://ui-avatars.com/api/?name=Krutik+Panchal&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Jitendra Singh', event: 'Panel', linkedin: 'https://www.linkedin.com/in/jitendra-singh-7263472a5', image: 'https://ui-avatars.com/api/?name=Jitendra+Singh&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Tejavath Jagadeesh', event: 'Panel', linkedin: 'https://www.linkedin.com/in/tejavathjagadeesh', image: 'https://ui-avatars.com/api/?name=Tejavath+Jagadeesh&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Vaishali Mangrulkar', event: 'Moderator', linkedin: 'https://www.linkedin.com/in/vaishali-mangrulkar-5632861bb', image: 'https://ui-avatars.com/api/?name=Vaishali+Mangrulkar&background=0A0A0A&color=00b8d4&size=200&bold=true' },
  ],
  GRSS: [
    { name: 'Anuj Soni', event: 'Webinar', linkedin: 'https://www.linkedin.com/in/anujsoni-space/', image: 'https://ui-avatars.com/api/?name=Anuj+Soni&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Sujan Parajuli', event: 'Workshop', linkedin: 'https://www.linkedin.com/in/sujanparajuli9/', image: 'https://ui-avatars.com/api/?name=Sujan+Parajuli&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Gijs van den Dool', event: 'Panel Discussion', linkedin: 'https://www.linkedin.com/in/gvddool/', image: 'https://ui-avatars.com/api/?name=Gijs+van+den+Dool&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Rajal Saxena', event: 'Panel Discussion', linkedin: 'https://www.linkedin.com/in/rajal-saxena-76089219/', image: 'https://ui-avatars.com/api/?name=Rajal+Saxena&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Daniel Evans', event: 'Panel Discussion', linkedin: 'https://www.linkedin.com/in/daniel-evans-83005b215', image: 'https://ui-avatars.com/api/?name=Daniel+Evans&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Seylina Sathish', event: 'Panel Discussion', linkedin: 'https://www.linkedin.com/in/seylina-sathish-kumar', image: 'https://ui-avatars.com/api/?name=Seylina+Sathish&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Maria Alejandra Luna', event: 'Panel Discussion', linkedin: 'https://www.linkedin.com/in/maria-alejandra-luna-828043230', image: 'https://ui-avatars.com/api/?name=Maria+aslejandra+Luna&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Prof. Madhuri Kulkarni', event: 'Moderator', linkedin: 'https://www.linkedin.com/in/madhuri-kulkarni-a979382a6', image: 'https://ui-avatars.com/api/?name=Madhuri+Kulkarni&background=0A0A0A&color=00b8d4&size=200&bold=true' },
  ],
  WIE: [
    { name: 'Nitika Sajith', event: 'Webinar', linkedin: 'https://www.linkedin.com/in/nitika-prabhu-s-721b681b/', image: 'https://ui-avatars.com/api/?name=Nitika+Sajith&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Dr. Sonali Joshi', event: 'Workshop', linkedin: '', image: 'https://ui-avatars.com/api/?name=Sonali+Joshi&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Sanjana Amarnani', event: 'Panel', linkedin: '', image: 'https://ui-avatars.com/api/?name=Sanjana+Amarnani&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Radhika Sibal', event: 'Panel', linkedin: 'https://www.linkedin.com/in/radhikasibal/', image: 'https://ui-avatars.com/api/?name=Radhika+Sibal&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Dr. Amruta Landge', event: 'Panel', linkedin: 'https://www.linkedin.com/in/dr-amruta-landge-aa098458/', image: 'https://ui-avatars.com/api/?name=Amruta+Landge&background=0A0A0A&color=00b8d4&size=200&bold=true' },
    { name: 'Kalpana Dhande', event: 'Panel', linkedin: 'https://www.linkedin.com/in/kalpana-patil-dhande-5725a033/', image: 'https://ui-avatars.com/api/?name=Kalpana+Dhande&background=0A0A0A&color=00b8d4&size=200&bold=true' },
  ],
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
            Industry leaders and pioneers shaping the future of technology across multiple domains.
          </p>
        </motion.div>

        <Tabs defaultValue="CS" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-secondary/20 p-1 rounded-xl">
            {Object.keys(speakerTracks).map((track) => (
              <TabsTrigger
                key={track}
                value={track}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-bold tracking-wide"
              >
                {track}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(speakerTracks).map(([track, speakers]) => (
            <TabsContent key={track} value={track} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {speakers.map((speaker, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <TiltCard className="h-full bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/30 p-8 flex flex-col items-center text-center gap-6 group relative overflow-hidden">
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300 relative z-10">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {speaker.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                          {speaker.event.includes('Panel') || speaker.event.includes('Moderator') ? (
                            <Mic className="w-4 h-4 text-primary" />
                          ) : (
                            <Calendar className="w-4 h-4 text-primary" />
                          )}
                          <span className="uppercase tracking-wider text-xs font-semibold">
                            {speaker.event}
                          </span>
                        </div>
                      </div>

                      {speaker.linkedin && (
                        <div className="mt-auto relative z-10">
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-muted-foreground transition-all duration-300 text-sm font-medium"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>Connect</span>
                          </a>
                        </div>
                      )}
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
