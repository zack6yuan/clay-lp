"use client";
import ServiceCard from "@/components/ServiceCard";
import OverviewCard from "@/components/OverviewCard";
import InsightsCard from "@/components/InsightsCard";
import TeamsCard from "@/components/TeamsCard";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import AutomationsCard from "@/components/AutomationsCard";

const services = [
  { title: "Overview", description: "Lorem ipsum dolor sit amet elit." },
  { title: "Automations", description: "Consectetur adipiscing elit sed do." },
  { title: "Insights", description: "Euismod tempor incididunt ut labore." },
  { title: "Teams", description: "Ut enim ad minim veniam quis." },
];

// Designs shown in the panel, indexed to match `services` above.
const cards = [OverviewCard, AutomationsCard, InsightsCard, TeamsCard];

export default function Services() {
  const [selected, setSelected] = useState(0);
  const ActiveCard = cards[selected];

  return (
    <section id="services" className="flex flex-col gap-6 px-4 mx-auto w-full max-w-lg md:max-w-4xl sm:px-6">
      <SectionHeader
        color="blue"
        eyebrow={"Lorem Ipsum"}
        title={"Dolor sit amet consectetur"}
      />
      <div className="flex flex-col gap-2 p-4 bg-white rounded-3xl shadow-2xl shadow-black/20 md:flex-row md:gap-4">
        {/* Tab list */}
        <div className="flex flex-col gap-2 md:w-2/5 md:shrink-0">
          {services.map((service, i) => (
            <button
              key={service.title}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`w-full text-left p-4 rounded-2xl transition-colors cursor-pointer ${
                selected === i ? "bg-black text-white" : "hover:bg-black/5"
              }`}
            >
              <ServiceCard title={service.title} description={service.description} />
            </button>
          ))}
        </div>

        {/* Graphic section: shows the selected service's design */}
        <div className="flex overflow-hidden flex-col bg-[#FBF6EF] p-5 rounded-3xl mt-5 md:mt-0 md:flex-1">
          <ActiveCard />
        </div>
      </div>
    </section>
  );
}