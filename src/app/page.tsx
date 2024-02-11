import Hero from '@/components/landingpage/hero/Hero';
import Overview from '@/components/landingpage/overview/Overview';
import Benefits from '@/components/landingpage/benefits/Benefits';
import CallToAction from '@/components/landingpage/calltoaction/CallToAction';
import Testimonials from '@/components/landingpage/testimonials/Testimonials';

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <Overview />
      <Benefits />
      <CallToAction />
      <Testimonials />
    </main>
  );
}
