export default function AutomationsCard() {
  return (
    <div className="flex flex-col">
      {/* chore: componentize these items */}
      <div className="flex flex-col gap-3 items-start justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="bg-[#EDE5D9] w-30 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-full h-4 rounded-full">
          <div className="h-4 bg-blue-500 rounded-full w-3/4"></div>
        </div>
        <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-full h-4 rounded-full">
          <div className="h-4 bg-green-500 rounded-full w-1/2"></div>
        </div>
        <div className="bg-[#EDE5D9] w-25 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-full h-4 rounded-full">
          <div className="w-5/6 h-4 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5">
        <div className="flex flex-col gap-2 border border-[#EDE5D9] bg-white py-3 w-full px-5 rounded-xl">
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 border border-[#EDE5D9] bg-white py-3 w-full px-5 rounded-xl">
          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
