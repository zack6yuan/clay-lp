const btnLabels = ["Lorem", "Ipsum", "Dolor"];

export default function AutomationsCard() {
  return (
    <div className="flex flex-col pt-10">
      {/* chore: componentize these items */}
      <div className="flex flex-col gap-3 items-start justify-between py-3 px-4 rounded-xl border bg-white border-[#EDE5D9]">
        <div className="bg-[#EDE5D9] w-30 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-70 h-4 rounded-full">
          <div className="bg-blue-500 w-50 h-4 rounded-full"></div>
        </div>
        <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-70 h-4 rounded-full">
          <div className="bg-green-500 w-35 h-4 rounded-full"></div>
        </div>
        <div className="bg-[#EDE5D9] w-25 h-4 rounded-full"></div>
        <div className="bg-[#EDE5D9] w-70 h-4 rounded-full">
          <div className="bg-blue-500 w-60 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-5">
        <div className="flex flex-col gap-2 border border-[#EDE5D9] bg-white py-3 w-full px-5 rounded-xl">
          <div className="rounded-full bg-blue-500 w-5 h-5"></div>
          <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 border border-[#EDE5D9] bg-white py-3 w-full px-5 rounded-xl">
          <div className="rounded-full bg-green-500 w-5 h-5"></div>
          <div className="bg-[#EDE5D9] w-20 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
