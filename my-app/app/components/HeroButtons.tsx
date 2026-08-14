export default function HeroButtons() {
    return (
        <div className="flex gap-5 mt-10">
            <button className="text-white bg-[#FF6B52] font-semibold px-8 py-3 rounded-full shadow-[#FF6B52]/50 cursor-pointer">
                Get started
            </button>
            <button className="px-8 py-3 font-semibold text-black bg-white rounded-full border cursor-pointer border-gray-500/20">
                Learn more
            </button>
        </div>
    )
}