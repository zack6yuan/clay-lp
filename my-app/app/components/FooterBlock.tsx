import Link from "next/link";

type FooterLink = {
  title: string;
  route: string;
};

type FooterBlockProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterBlock({ title, links }: FooterBlockProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold tracking-wide">{title}</span>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.route}
              className="font-medium text-gray-500 transition-colors hover:text-black"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}