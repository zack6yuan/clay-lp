import AnimatedBanner from "@/components/AnimatedBanner";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center gap-16 md:gap-24 justify-center pt-10 font-sans">
      <Hero />
      <AnimatedBanner />
      <Services />
      <About />
      <Statistics />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}
