const colors = {
  blue: "text-blue-500",
  yellow: 'text-yellow-500',
  green: 'text-green-500'
}

type SectionHeaderProps = {
  color: keyof typeof colors;
  eyebrow: string;
  title: string;
}

export default function SectionHeader({ color, eyebrow, title}: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center mb-5">
            <p className={`text-sm font-semibold uppercase ${colors[color]}`}>{eyebrow}</p>
            <h2 className={`text-3xl font-semibold`}>{title}</h2>
        </div>
    )
}