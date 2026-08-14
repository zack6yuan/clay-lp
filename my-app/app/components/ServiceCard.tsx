type ServiceCardProps = {
    title: string;
    description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="flex flex-col items-start">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg text-gray-500">{description}</p>
        </div>
    )
}