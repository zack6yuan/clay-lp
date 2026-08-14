import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full max-w-6xl mx-auto px-6">
      <SectionHeader
        color={"green"}
        eyebrow={"LOREM"}
        title={"Ullamco laboris nisi"}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <PricingCard
          plan="Basic"
          description="Lorem ipsum dolor sit"
          price={0}
          buttonLabel="Get Started"
          cardBg="bg-white"
          buttonBg="bg-white"
          buttonColor="text-black"
          checkBg="bg-gray-300"
        />
        <PricingCard
          plan="Standard"
          description="Ut enim ad minim veniam"
          price={24}
          buttonLabel="Get Started"
          cardBg="bg-yellow-400/10"
          buttonBg="bg-black"
          buttonColor="text-white"
          checkBg="bg-yellow-400"
        />
        <PricingCard
          plan="Premium"
          description="Quis nostrud exercitation"
          price={96}
          buttonLabel="Get Started"
          cardBg="bg-white"
          buttonBg="bg-white"
          buttonColor="text-black"
          checkBg="bg-gray-300"
        />
      </div>
    </section>
  );
}
