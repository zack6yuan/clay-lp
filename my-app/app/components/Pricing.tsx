import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";

export default function Pricing() {
  return (
    <section className="px-10">
      <SectionHeader
        color={"green"}
        eyebrow={"LOREM"}
        title={"Ullamco laboris nisi"}
      />
      <div className="flex flex-col gap-5 md:flex-row md:justify-center">
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
