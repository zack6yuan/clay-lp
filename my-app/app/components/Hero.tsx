import HeroButtons from "@/components/HeroButtons";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-5 pt-24 max-w-lg text-center md:max-w-3xl">
      <div className="flex gap-2 items-center bg-[#FFFDF8] text-black uppercase font-semibold rounded-full px-5 py-1 shadow-gray-300/80 shadow-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <p className="text-sm">Lorem ipsum</p>
      </div>
      <h1 className="py-10 text-5xl font-semibold text-black md:text-6xl lg:text-7xl">
        Lorem ipsum dolor sit amet magna.
      </h1>
      <p className="max-w-4xl text-2xl text-gray-500 md:text-3xl">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua veniam.
      </p>
      <HeroButtons />
    </div>
  );
}
