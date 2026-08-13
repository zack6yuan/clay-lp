import AnimatedBanner from "./components/AnimatedBanner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex-col flex-1 items-center justify-center font-sans bg-[#FBF6EF] min-w-screen gap-20 pt-10">
      <Navbar />
      <Hero />
      <AnimatedBanner />
    </div>
  );
}
