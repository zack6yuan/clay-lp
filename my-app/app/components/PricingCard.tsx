import { Check } from "lucide-react";

type PricingCardProps = {
  plan: string;
  description: string;
  price: number;
  buttonLabel: string;
  cardBg?: string;
  buttonBg?: string;
  buttonColor?: string;
  checkBg?: string;
};

const features = [
  "Lorem ipsum dolor",
  "Sit amet consectetur",
  "Adipiscing elit sed",
  "Do eiusmod tempor",
  "Incididunt ut labore",
];

export default function PricingCard({
  plan,
  description,
  price,
  buttonLabel,
  cardBg = "bg-white",
  buttonBg = "bg-white",
  buttonColor = "text-black",
  checkBg = "bg-gray-300",
}: PricingCardProps) {
  return (
    <div className={`flex flex-col gap-5 rounded-3xl border border-[#EDE5D9] p-5 md:px-10 lg:px-30 ${cardBg}`}>
      <div>
        <p className="font-semibold">{plan}</p>
        <p className="text-gray-500">{description}</p>
      </div>

      <div className="flex gap-1 items-baseline">
        <span className="text-4xl font-semibold">${price}</span>
        <p className="text-base text-gray-500">/lorem</p>
      </div>

      <ul className="flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 items-center">
            <Check size={14} strokeWidth={4} className={`shrink-0 rounded-full p-0.5 ${checkBg}`} />
            {feature}
          </li>
        ))}
      </ul>

      <button className={`px-5 py-2 font-semibold rounded-full border border-gray-300 ${buttonBg} ${buttonColor}`}>
        {buttonLabel}
      </button>
    </div>
  );
}
