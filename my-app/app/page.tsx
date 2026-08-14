import AnimatedBanner from "./components/AnimatedBanner";
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans gap-20 pt-10">
      <Hero />
      <AnimatedBanner />
      <Services />
    </div>
  );
}
