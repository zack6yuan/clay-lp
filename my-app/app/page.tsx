import AnimatedBanner from "./components/AnimatedBanner";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';


export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-20 justify-center items-center pt-10 font-sans">
      <Hero />
      <AnimatedBanner />
      <Services />
      <About />
    </div>
  );
}
