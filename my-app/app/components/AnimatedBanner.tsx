const items = ["Magna", "Dolore", "Quis", "Labore", "Veniam", "Duis", "Incidicunt", "Commodo", "Exercitation", "Elit", "Eiusmod", "Aliqua"];


export default function Marquee() {
    return (
      <div className="group relative flex overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <ul key={i} className="flex shrink-0 gap-8" aria-hidden={i > 0}>
              {items.map((item) => (
                <li key={item} className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-gray-600/60">{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }