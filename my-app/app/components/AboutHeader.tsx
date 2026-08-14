import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type AboutHeaderProps = {
    eyebrow: string;
    title: string;
    description: string;
    link: string;
    accent?:string;
}

export default function AboutHeader({ eyebrow, title, description, link, accent}: AboutHeaderProps) {
    return (
        <div className="flex flex-col gap-3 mx-10">
            <span className={`text-sm font-semibold ${accent}`}>{eyebrow}</span>
            <h3 className="text-3xl font-semibold text-black">{title}</h3>
            <p className="text-lg text-gray-500">{description}</p>
            <div className="flex gap-2 items-center group">
                <Link href="#" className={`font-semibold ${accent}`}>
                    {link}
                </Link>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} strokeWidth={3} />
                </div>
            </div>
        </div>
    )
}