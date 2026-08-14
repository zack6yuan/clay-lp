"use client";
import ServiceCard from "@/components/ServiceCard";
import ServiceHeader from "./ServiceHeader";
import { useState } from "react";

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
        <div className="flex flex-col bg-[#FBF6EF] p-5 rounded-3xl">
          <div className="flex gap-2">
            {["Lorem", "Ipsum", "Dolor"].map((label) => (
              <button key={label} className="bg-white rounded-full border border-[#EDE5D9] font-medium text-sm px-3 py-1">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}