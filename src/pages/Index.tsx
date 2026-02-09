
import { About } from '@/components/About';
import { Theme } from '@/components/Theme';
import { Tracks } from '@/components/Tracks';
import { Speakers } from '@/components/Speakers';
import { Schedule } from '@/components/Schedule';
import { Registration } from '@/components/Registration';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <About />
      <Theme />
      <Tracks />
      <Speakers />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
