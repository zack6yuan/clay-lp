import AboutHeader from "@/components/AboutHeader";

const features = [
  {
    eyebrow: "LOREM",
    title: "Ipsum dolor sit amet elit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.",
    link: "Lorem ipsum",
    accent: "text-red-500",
    graphic: <div className="w-40 h-40 bg-red-500 rounded-3xl" />,
  },
  {
    eyebrow: "IPSUM",
    title: "Tempor incididunt ut labore",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    link: "Dolor sit amet",
    accent: "text-green-500",
    graphic: <div className="w-50 h-30 bg-green-500 rounded-full" />,
  },
  {
    eyebrow: "DOLOR",
    title: "Magna aliqua veniam quis",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
    link: "Consectetur",
    accent: "text-blue-500",
    graphic: (
      <div className="flex justify-center items-center w-40 h-40 bg-blue-500 rounded-full">
        <div className="w-15 h-15 bg-white rounded-full" />
      </div>
    ),
  },
];

export default function About() {
  return (
    <div id="about" className="flex flex-col w-full max-w-4xl mx-auto px-6 md:px-10 gap-16 md:gap-24">
      {features.map((feature) => (
        <div
          key={feature.eyebrow}
          className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12"
        >
          <div className="md:flex-1">
            <AboutHeader
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              accent={feature.accent}
            />
          </div>
          <div className="flex justify-center md:justify-end md:flex-1">{feature.graphic}</div>
        </div>
      ))}
    </div>
  );
}
