const btnLabels = ["Lorem", "Ipsum", "Dolor"];

export default function OverviewCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {btnLabels.map((item, index) => {
          return (
            <button
              key={item}
              className={`rounded-full border font-medium text-sm px-3 py-1 ${
                index === 0
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-[#EDE5D9]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* chore: componentize these items */}
      <div className="flex items-center justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="rounded-full w-8 h-8 bg-red-500"></div>
        <div className="bg-[#EDE5D9] w-30 h-3 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-24 h-3 rounded-full"></div>
      </div>
      <div className="flex items-center justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="rounded-full w-8 h-8 bg-yellow-500"></div>
        <div className="bg-[#EDE5D9] w-40 h-3 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-14 h-3 rounded-full"></div>
      </div>
      <div className="flex items-center justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="rounded-full w-8 h-8 bg-red-500"></div>
        <div className="bg-[#EDE5D9] w-20 h-3 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-34 h-3 rounded-full"></div>
      </div>
      <div className="flex items-center justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="rounded-full w-8 h-8 bg-yellow-500"></div>
        <div className="bg-[#EDE5D9] w-40 h-3 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-14 h-3 rounded-full"></div>
      </div>
    </div>
  );
}
