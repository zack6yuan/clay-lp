function Pill({ dotColor, barWidth }: { dotColor: string; barWidth: string }) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-[#EDE5D9] bg-white px-4 py-2">
        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
        <div className={`h-3 rounded-full bg-[#EDE5D9] ${barWidth}`} />
      </div>
    );
  }
  
  function Tile({ circleColor }: { circleColor: string }) {
    return (
      <div className="flex w-40 h-30 flex-col items-center justify-center gap-3 rounded-xl border border-[#EDE5D9] bg-white">
        <div className={`w-12 h-12 rounded-full ${circleColor}`} />
        <div className="w-15 h-3 rounded-full bg-[#EDE5D9]" />
      </div>
    );
  }
  
  const pills = [
    { dotColor: "bg-yellow-500", barWidth: "w-15" },
    { dotColor: "bg-red-500", barWidth: "w-13" },
    { dotColor: "bg-yellow-500", barWidth: "w-25" },
  ];
  
  const tiles = ["bg-yellow-500", "bg-gray-200", "bg-red-500"];
  
  export default function InsightsCard() {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3 pt-10">
          {pills.map((pill, i) => (
            <Pill key={i} {...pill} />
          ))}
        </div>
  
        <div className="flex flex-wrap gap-3">
          {tiles.map((color, i) => (
            <Tile key={i} circleColor={color} />
          ))}
        </div>
      </div>
    );
  }