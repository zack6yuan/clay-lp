export default function TeamsCard() {
  return (
    <div className="flex flex-col gap-3 pt-10">
      {/* chore: componentize these items */}
      <div className="flex items-center justify-between gap-4 py-5 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#EDE5D9] w-30 h-2 rounded-full"></div>
            <div className="bg-[#EDE5D9] w-24 h-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 py-3 bg-[#EDE5D9] w-10 h-7 rounded-full">
          <p className="p-3 text-sm font-medium">Lorem</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 py-5 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#EDE5D9] w-24 h-2 rounded-full"></div>
            <div className="bg-[#EDE5D9] w-30 h-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 py-3 bg-[#EDE5D9] w-10 h-7 rounded-full">
          <p className="p-3 text-sm font-medium">Ipsum</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 py-5 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#EDE5D9] w-30 h-2 rounded-full"></div>
            <div className="bg-[#EDE5D9] w-24 h-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 py-3 bg-[#EDE5D9] w-10 h-7 rounded-full">
          <p className="p-3 text-sm font-medium">Dolor</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 py-5 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#EDE5D9] w-24 h-2 rounded-full"></div>
            <div className="bg-[#EDE5D9] w-30 h-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 py-3 bg-[#EDE5D9] w-10 h-7 rounded-full">
          <p className="p-3 text-sm font-medium">Amet</p>
        </div>
      </div>
    </div>
  );
}
