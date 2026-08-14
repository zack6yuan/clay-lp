const colors = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
};

type TestimonialCardProps = {
  testimonial: string;
  color: keyof typeof colors;
  author: string;
  description: string;
};

export default function TestimonialCard({ testimonial, color, author, description}: TestimonialCardProps) {
  return (
  <div className="flex flex-col gap-5 bg-white p-8 rounded-3xl shadow-black/10 shadow-lg border border-[#EDE5D9]">
    <div className="">
      <p className="text-lg text-gray-500">{testimonial}</p>
    </div>
    <div className="flex gap-4">
      <div className={`w-12 h-12 ${colors[color]} rounded-full`}></div>
      <div className="flex flex-col gap">
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  </div>
  )
}
