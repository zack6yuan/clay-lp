import ServiceCard from "@/components/ServiceCard";

export default function Services() {
    return (
        <section className="flex flex-col gap-15">
            <ServiceCard title="Overview" description="Lorem ipsum dolor sit amet elit." />
            <ServiceCard title="Automations" description="Consectetur adipiscing elit sed do." />
            <ServiceCard title="Insights" description="Euismod tempor incididunt ut labore." />
            <ServiceCard title="Teams" description="Ut enim ad minim veniam quis." />
        </section>
    )
}