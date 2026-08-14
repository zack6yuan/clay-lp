import Link from 'next/link';
import FooterBlock from "@/components/FooterBlock";

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { title: "Lorem", route: "#" },
      { title: "Ipsum", route: "#" },
      { title: "Dolor", route: "#" },
      { title: "Sit Amet", route: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { title: "Consectetur", route: "#" },
      { title: "Adipiscing", route: "#" },
      { title: "Elit Sed", route: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { title: "Eiusmod", route: "#" },
      { title: "Tempor", route: "#" },
      { title: "Incididunt", route: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { title: "Ut Labore", route: "#" },
      { title: "Et Dolore", route: "#" },
      { title: "Magna", route: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 px-10 py-16 mx-auto w-full max-w-6xl">
      <div className="flex gap-2 items-center">
        <div className="w-5 h-5 bg-red-500 rounded-full" />
        <span className="text-lg font-semibold">Lorem</span>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {footerSections.map((section) => (
          <FooterBlock key={section.title} title={section.title} links={section.links} />
        ))}
      </div>
      <hr className="text-gray-300" />
      <div className="">
        <div className="flex justify-between items-center text-sm">
            <p className="">© 2026 Lorem ipsum dolor sit amet</p>
            <ul className="flex gap-5 text-gray-500">
                <li>
                    <Link href="#">Privacy</Link>
                </li>
                <li>
                    <Link href="#">Terms</Link>
                </li>
                <li>
                    <Link href="#">Cookies</Link>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
}