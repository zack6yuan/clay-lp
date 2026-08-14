"use client";
import ServiceCard from "@/components/ServiceCard";
import OverviewCard from "@/components/OverviewCard";
import InsightsCard from "@/components/InsightsCard";
import ServiceHeader from "./ServiceHeader";
import { useState } from "react";
import AutomationsCard from "@/components/AutomationsCard";

const services = [
  { title: "Overview", description: "Lorem ipsum dolor sit amet elit." },
  { title: "Automations", description: "Consectetur adipiscing elit sed do." },
  { title: "Insights", description: "Euismod tempor incididunt ut labore." },
  { title: "Teams", description: "Ut enim ad minim veniam quis." },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="flex flex-col gap-6">
      <ServiceHeader />

      <div className="flex flex-col gap-2 bg-white shadow-2xl shadow-black/20 p-4 min-w-sm rounded-3xl">
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

        {/* Graphic section */}
        <div className="flex flex-col bg-[#FBF6EF] p-5 rounded-3xl mt-5">
          <OverviewCard />
          <AutomationsCard />
          <InsightsCard />
        </div>
      </div>
    </section>
  );
}