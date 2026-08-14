const colors = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  blue: "bg-blue-500"
}

type StatisticProps = {
  color: keyof typeof colors;
  number: string;
  description: string;
};

export default function Statistic({ color, number, description}: StatisticProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`flex justify-center items-center h-10 w-10 ${colors[color]} rounded-full`}></div>
      <p className="text-black font-semibold text-4xl">{number}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}