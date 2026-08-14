import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-5 pt-24 text-center max-w-lg md:max-w-3xl">
      <div className="flex gap-2 items-center bg-[#FFFDF8] text-black uppercase font-bold rounded-full px-3 shadow-gray-300/80 shadow-sm">
        <div className="bg-green-400 w-2 h-2 rounded-full"></div>
        <p>Lorem ipsum</p>
      </div>
      <h1 className="text-black font-semibold text-5xl md:text-6xl lg:text-7xl py-10">
        Lorem ipsum dolor sit amet magna.
      </h1>
      <p className="text-gray-500 text-2xl md:text-3xl max-w-4xl">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua veniam.
      </p>
      <HeroButtons />
    </div>
  );
}
